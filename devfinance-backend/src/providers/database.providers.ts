import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
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
