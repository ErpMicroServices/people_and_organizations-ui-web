/**
 * Created by JimBarrows on 7/20/21.
 */
import {Given, Then, When} from '@cucumber/cucumber'
import camelCase from 'camelcase'
import {By} from 'selenium-webdriver'
import {convert_to_table_name} from './util'

Given('a type of {string} with a description of {string} is in the database', async function (type, description) {
	this.parentErpType.description = description;
	this.type.table_name = convert_to_table_name(type);
	this.type.name = camelCase(`${type}Types`);
	let sql = `insert into ${this.type.table_name} (description)
               values ($1)
               returning id`;
	let new_type = await this.db.one(sql, [this.parentErpType.description]);
	this.parentErpType.id = new_type.id
});

Given('a type of {string}', async function (type) {
	this.type.table_name = convert_to_table_name(type);
	this.type.name = camelCase(`${type}Types`)
});

Given('a type with a description of {string}', async function (description) {
	this.parentErpType.description = description
});

Given('the following types:', async function (dataTable) {
	let table = dataTable.rawTable;
	for (let row_index in table) {
		let row = table[row_index];
		let sql = `insert into ${convert_to_table_name(row[0])}_type (description)
               values ($2)
               returning id`;
		await this.db.one(sql, row)
	}
});

When('I add a child type with a description of {string}', async function (description) {
	try {
		this.childErpType.description = description;
		return 'pending'
	} catch (error) {
		this.result.error = error
	}
});

When('I save the type', async function () {
	try {
		await this.client.get('http://localhost:3000');
		let caseTypeMenuItem = await this.client.findElement(By.id(this.type.name));
		await caseTypeMenuItem.click();
		await this.client.findElement(By.id('descriptionTextFieldInput')).sendKeys(this.parentErpType.description);
		await this.client.findElement(By.id('saveType')).click();
		await new Promise(resolve => setTimeout(resolve, 1000))
	} catch (error) {
		this.result.error = error
	}
});

When('I delete the type', async function () {
	try {
		return 'pending'
	} catch (error) {
		this.result.error = error
	}
});

When('I update the description of the type to {string}', async function (updated_description) {
	try {
		return 'pending'
	} catch (error) {
		this.result.error = error
	}
});

When('I search for the type by the description {string}', async function (description) {
	try {
		await this.client.get('http://localhost:3000');
		let caseTypeMenuItem = await this.client.findElement(By.id(this.type.name));
		await caseTypeMenuItem.click();
		await this.client.findElement(By.id(`TypeListComponent_ErpTypeComponent_${this.type.name}_searchTextFieldInput`)).sendKeys(this.parentErpType.description);
		await this.client.findElement(By.id(`TypeListComponent_ErpTypeComponent_${this.type.name}_searchButton`)).click();
		await new Promise(resolve => setTimeout(resolve, 1000))
	} catch (error) {
		this.result.error = error
	}
});

When('I search for the parent type', async function () {
	try {
		return 'pending'
	} catch (error) {
		this.result.error = error
	}
});

Then('the type description has been updated', async function () {
	expect(this.result.error, JSON.stringify(this.result.error)).to.be.null;
	expect(this.result.data).to.not.be.null;

	let result = this.result.data;
	expect(result.description).to.be.equal(this.parentErpType.description)
});

Then('I find the type', async function () {
	expect(this.result.error, JSON.stringify(this.result.error)).to.be.null;
	expect(this.result.data).to.not.be.null;
	let result = this.result.data;
	if (Array.isArray(result)) {
		expect(result.length).to.be.equal(1);
		expect(result[0].description).to.be.equal(this.parentErpType.description)
	} else {
		expect(result.description).to.be.equal(this.parentErpType.description)
	}
});

Then('the type is in the database', async function () {
	expect(this.result.error, this.result.error).to.be.null;
	let erpType = await this.db.any(`select id, description, parent_id
                                   from ${this.type.table_name}
                                   where description = $1`, this.parentErpType.description);
	expect(erpType, "Expected to find the type in the database").to.not.be.empty
});

Then('the type is not in the database', async function () {
	expect(this.result.error, JSON.stringify(this.result.error)).to.be.null;
	expect(this.result.data).to.not.be.null;
	let result = this.result.data;
	expect(result).to.be.true
});

Then('I can find the parent of the child  of the type', async function () {
	expect(this.result.error, JSON.stringify(this.result.error)).to.be.null;
	expect(this.result.data).to.not.be.null;
	let sql = `select id, description
			   from ${this.type.table_name}_type
			   where id =` + '${parent_id}';
	let result = this.result.data;
	let parent = await this.db.one(sql, {
		parent_id: result.parent_id
	});

	expect(parent).to.not.be.empty;
	expect(result.parent_id).to.be.equal(parent.id)

});

Then('I find the child type', function (callback) {
	expect(this.result.error, JSON.stringify(this.result.error)).to.be.null;
	expect(this.result.data).to.not.be.null;
	let result = this.result.data[0];
	expect(result.children.length).to.be.equal(1);
	expect(result.children[0].description).to.be.equal(this.child_parentErpType_description);
	callback()
});
