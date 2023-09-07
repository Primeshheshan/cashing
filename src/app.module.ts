import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { CachingModule } from './caching/caching.module';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule } from '@nestjs/config';

@Module({
  // setting isGlobal: true will make the cache available to all modules in the application
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      username: process.env.REDIS_USERNAME, // new property
      password: process.env.REDIS_PASSWORD, // new property
      no_ready_check: true, // new property
    }),
    CachingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
