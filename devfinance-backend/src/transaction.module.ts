import { Module } from '@nestjs/common';
import { TransactionController } from './controllers/transaction.controller';
import { TransactionService } from './services/transaction.service';
import { DatabaseModule } from './modules/database.module';
import { transactionProviders } from './providers/transaction.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TransactionController],
  providers: [TransactionService, ...transactionProviders],
  exports: [TransactionService],
})
export class TransactionModule {}
