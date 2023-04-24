import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
// import { TypegooseModule } from 'nestjs-typegoose'
// import { getMongoConfig } from '@app/config/mongo.config'
import { AppController } from '@app/app.controller'
import { AppService } from '@app/app.service'
import { ProductModule } from './product/product.module'
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // TypegooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: getMongoConfig
    // }),
    ProductModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
