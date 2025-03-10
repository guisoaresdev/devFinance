import { Transaction } from '../entities/transaction.entity';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from 'src/interfaces/create.transaction.dto';
export declare class TransactionService {
    private readonly transactionRepository;
    constructor(transactionRepository: Repository<Transaction>);
    create(data: CreateTransactionDto): Promise<void>;
    findAll(): Promise<Transaction[]>;
}
