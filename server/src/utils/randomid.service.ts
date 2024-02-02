import { Injectable } from '@nestjs/common';

import * as NanoId from 'nanoid';


@Injectable()
export class RandomIdService {

    getRandomId(length: number) {
        return NanoId.nanoid(length); // this method from nanoid library accept a number which is the length of produced random id, and using base 64 with characters [a-zA-Z0-9]
    }
}