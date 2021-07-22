/**
 * Created by JimBarrows on 7/20/21.
 */
import {setWorldConstructor} from '@cucumber/cucumber'
import chrome                from 'chromedriver'
import webdriver             from 'selenium-webdriver'
import config                from './config'
import database              from './database'
import ErpType               from './ErpType'

function CustomWorld () {
	this.config = config
	this.db     = database
	this.client = new webdriver.Builder()
		.forBrowser('chrome')
		.build()

	this.parentErpType = new ErpType('', '', '')

	this.childErpType = new ErpType('', '', '')

	this.type = {
		table_name: '',
		name      : ''
	}

	this.result = {
		error: null,
		data : null
	}
}

setWorldConstructor(CustomWorld)

