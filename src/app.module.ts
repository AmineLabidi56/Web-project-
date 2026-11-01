import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProduitsModule } from './produits/produits.module';

@Module({
  imports: [UsersModule, ProduitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}