import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersSchema } from './schemas/users.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  // A importação do mongoose não existe o conceito de entidade, apenas de schemas
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UsersSchema
      }
    ]),
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
