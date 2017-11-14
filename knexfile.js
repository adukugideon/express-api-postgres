// Update with your config settings.

module.exports = {
    test: {
        client: 'postgresql',
        connection: {
            host:'wrtest.cgxehdr5uwty.eu-west-1.rds.amazonaws.com',
            database: 'wrtest',
            user:     'readonly',
            password: 'dGUA1thwtznKWeqohU1lwl'
        },
        pool: {
            min: 2,
            max: 10
        }
    },
    development: {
        client: 'postgresql',
        connection: {
            host:'wrtest.cgxehdr5uwty.eu-west-1.rds.amazonaws.com',
            database: 'wrtest',
            user:     'readonly',
            password: 'dGUA1thwtznKWeqohU1lwl'
        },
        pool: {
            min: 2,
            max: 10
        }
    },
   production: {
        client: 'postgresql',
        connection: {
            host:'wrtest.cgxehdr5uwty.eu-west-1.rds.amazonaws.com',
            database: 'wrtest',
            user:     'readonly',
            password: 'dGUA1thwtznKWeqohU1lwl'
        },
        pool: {
            min: 2,
            max: 10
        }
    }
};
