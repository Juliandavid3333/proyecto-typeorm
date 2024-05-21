import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { UserDetail } from "./entity/Detail"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "basedatos.sqlite",
    synchronize: true,
    logging: false,
    entities: [User,UserDetail],
    migrations: [],
    subscribers: [],
})
