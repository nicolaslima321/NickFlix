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
import { ProfilesModule } from './profile/profiles.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
