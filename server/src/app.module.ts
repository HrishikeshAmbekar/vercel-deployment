import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphModule } from './graph/graph.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [GraphModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
