/**
 * Created by JimBarrows on 7/20/21.
 */
import {setWorldConstructor} from '@cucumber/cucumber'
import config                from './config'
import database              from './database'

function CustomWorld () {
	this.config = config
	this.db     = database
	this.client =

		this.result = {
			error: null,
			data : null
		}
}

setWorldConstructor(CustomWorld)

