import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    username: "root",
    password: "12345678",
    host: "localhost", //host
    port: 3306,
    database: "nestjs_mysql",
    entities: [User],
    // entities: [__dirname + '/**/*.entity{.ts,.js}'], //实体文件
    synchronize: true, // synchronize字段代表是否自动将实体类同步到数据库
    retryDelay: 500, //重试连接数据库间隔
    retryAttempts: 10,//重试连接数据库的次数
    autoLoadEntities: true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
