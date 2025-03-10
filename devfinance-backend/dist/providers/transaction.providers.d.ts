import { DataSource } from 'typeorm';
import { Transaction } from '../entities/transaction.entity';
export declare const transactionProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Transaction>;
    inject: string[];
}[];
