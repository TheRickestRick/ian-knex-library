// Update with your config settings.

module.exports = {
	development: {
		client: 'pg',
		connection: {
			database: 'knexlibrary_dev'
		}
	},

	test: {
		client: 'pg',
		connection: {
			database: 'knexlibrary_test'
		}
	}
};
