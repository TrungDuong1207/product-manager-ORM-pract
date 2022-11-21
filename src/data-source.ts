import "reflect-metadata"
import {DataSource} from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "admin",
    password: "123456@Abc",
    database: "dbTest",
    synchronize: false,
    logging: false,
    entities: ["dist/src/entity/*.js"],
    migrations: ["dist/src/migrations/*.js"],
})
