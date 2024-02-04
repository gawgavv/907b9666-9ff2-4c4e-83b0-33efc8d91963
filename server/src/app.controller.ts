import { Controller, Get, Param } from "@nestjs/common";

import { UrlsService } from "./urls/urls.service";
import { ClicksService } from "./clicks/clicks.service";


@Controller()
export class AppController {

    constructor(
        private readonly urlsService: UrlsService,
        private readonly clicksService: ClicksService
    ) {}

    @Get(`:id`)
    redirectToOriginUrl(
        @Param()
        { id: shorturlId }: { id: string }
    ) {
        return shorturlId;
    }
}