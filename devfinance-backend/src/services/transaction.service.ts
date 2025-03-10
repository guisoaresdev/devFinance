import { Inject, Injectable } from '@nestjs/common';
import { Transaction } from '../entities/transaction.entity';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from 'src/interfaces/create.transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @Inject('TRANSACTION_REPOSITORY')
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async create(data: CreateTransactionDto): Promise<void> {
    try {
      const transaction = this.transactionRepository.create(data);
      await this.transactionRepository.save(transaction);
    } catch (err) {
      console.log('Erro ao criar transação: ', err);
    }
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }
}
