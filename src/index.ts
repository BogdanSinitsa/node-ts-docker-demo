import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

import * as mongoose from 'mongoose';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    await app.listen(3010);
}

require('mongoose').Promise = Promise;
mongoose.connect('mongodb://mongodb/node-ts-demo-db', {
    useMongoClient: true,
})
    .then(() => bootstrap())
    .catch(err => {
        console.error(err);
    });