import { TransactionService } from '../services/transaction.service';
import { CreateTransactionDto } from 'src/interfaces/create.transaction.dto';
import { Transaction } from 'src/entities/transaction.entity';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    getAll(): Promise<Transaction[]>;
    create(data: CreateTransactionDto): Promise<void>;
}
