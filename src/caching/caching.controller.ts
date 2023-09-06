import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { CachingService } from './caching.service';

@Controller('caching')
export class CachingController {
  constructor(private readonly cachingService: CachingService) {}

  @UseInterceptors(CacheInterceptor) // Automatically cache the response for this endpoint
  @CacheTTL(30) // override TTL to 30 seconds
  @CacheKey('cache-key')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cachingService.findOne(+id);
  }
}
