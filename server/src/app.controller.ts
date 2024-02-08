import { Controller, Get, HttpException, Param, Redirect, Res } from "@nestjs/common";

import { Response } from "express";

import { UrlsService } from "./urls/urls.service";
import { ClicksService } from "./clicks/clicks.service";


@Controller()
export class AppController {

    constructor(
        private readonly urlsService: UrlsService,
        private readonly clicksService: ClicksService
    ) {}

    @Redirect(``, 301)
    @Get(`:id`)
    async redirectToOriginUrl(
        @Param()
        { id: shorturlId }: { id: string },
        @Res() res: Response
    ) {
        const url = await this.urlsService.findOne(shorturlId);
        if(!url) throw new HttpException(`Url not found`, 404);
        await this.clicksService.create({ urlId: shorturlId }); // increase click by one
        res.setHeader(`Cache-Control`, `no-store`);
        return { url: url.origin } // whatever returned from controller method with redirect decorator would be redirected to that returned value
    }
}