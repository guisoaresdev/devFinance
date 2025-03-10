import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';
import { CreateTransactionDto } from 'src/interfaces/create.transaction.dto';
import { Transaction } from 'src/entities/transaction.entity';

@Controller('/api/transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  async getAll(): Promise<Transaction[]> {
    try {
      return await this.transactionService.findAll();
    } catch (err) {
      throw new BadRequestException('Erro ao buscar transações: ' + err);
    }
  }

  @Post()
  async create(@Body() data: CreateTransactionDto): Promise<void> {
    try {
      return await this.transactionService.create(data);
    } catch (err) {
      throw new BadRequestException('Erro ao criar transação: ' + err);
    }
  }
}
