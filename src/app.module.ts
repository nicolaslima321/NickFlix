import { Module } from '@nestjs/common';

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';

// TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/typeorm.config';

// Models Modules
import { UsersModule } from './user/users.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
