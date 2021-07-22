/**
 * Created by JimBarrows on 7/20/21.
 */
import fs from "fs"

class Config {

	constructor () {
		this._currentEnvironment = process.env.NODE_ENV || defaultEnvironment()
		if (this._currentEnvironment == defaultEnvironment()) {
			this._config = {
				url     : process.env.DATABASE_HOST || 'http://localhost:3000/',
				database: {
					host    : process.env.DATABASE_HOST || 'localhost',
					port    : process.env.DATABASE_PORT || 5432,
					database: process.env.DATABASE_DATABSE || 'people_and_organizations',
					user    : process.env.DATABASE_USER || 'people_and_organizations',
					password: process.env.DATABASE_PASSWORD || 'people_and_organizations'
				}
			}
		} else {
			this._config = JSON.parse(fs.readFileSync(`config.${this.currentEnvironment}.json`, "utf8"))
		}
	}

	get currentEnvironment () {
		return this._currentEnvironment
	}

	get database () {
		return this._config.database
	}

	get url () {
		return this._config.url
	}

}

const config = new Config()
export default config

export function defaultEnvironment () {
	return "default"
}

export function developmentEnvironment () {
	return "dev"
}

export function environments () {
	return [Config.defaultEnvironment(), Config.localEnvironment(), Config.developmentEnvironment(), Config.qaEnvironment(), Config.qaEnvironment(), Config.stagingEnvironment(), Config.prodEnvironment()]
}

export function localEnvironment () {
	return "local"
}

export function prodEnvironment () {
	return "prod"
}

export function qaEnvironment () {
	return "qa"
}

export function stagingEnvironment () {
	return "staging"
}
