import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { Cron } from '@nestjs/schedule';

import { RedisCache } from  'cache-manager-redis-yet'

import { UrlsService } from "src/urls/urls.service";

@Injectable()
export class BackgroundService {

    constructor(
        private readonly urlsService: UrlsService,
        @Inject(CACHE_MANAGER) private cacheManager: RedisCache
    ) {}

    @Cron(`* * 12 * * *`) // this function will run every 12 hours
    async cacheUrl() {
        
        await this.cacheManager.store.client.HSET(`short:origin`, { shortUrlId: `Long URL origin` });
    }
}