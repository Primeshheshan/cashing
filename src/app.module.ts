import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { CachingModule } from './caching/caching.module';

@Module({
  // setting isGlobal: true will make the cache available to all modules in the application
  imports: [CacheModule.register({ isGlobal: true }), CachingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
