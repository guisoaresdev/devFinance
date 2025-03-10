"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'password',
                database: 'mydatabase',
                synchronize: true,
                logging: false,
                entities: ['dist/entities/**/*.js'],
                migrations: ['dist/migrations/**/*.js'],
                subscribers: ['dist/subscribers/**/*.js'],
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map