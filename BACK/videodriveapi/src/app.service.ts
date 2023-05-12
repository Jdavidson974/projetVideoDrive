import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
