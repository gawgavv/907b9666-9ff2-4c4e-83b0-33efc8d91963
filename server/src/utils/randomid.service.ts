import { Injectable } from '@nestjs/common';

import * as NanoId from 'nanoid';


@Injectable()
export class RandomIdService {

    getRandomId(length: number) {
        return NanoId.nanoid(length); // this method from nanoid library accept a number which is the length of produced random id, and using base 64 with characters [a-zA-Z0-9]

         // 7 characters means out of 64 our-allowed-characters [a-zA-Z0-9-_] we would get ~4.3 trillion possible combinations. Assuming this monolith server handles 2000 requests/second non-stop it would take around 136 years to use all of the possible permutations.
    }
}