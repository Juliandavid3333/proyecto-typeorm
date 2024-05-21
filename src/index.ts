
import { AppDataSource } from "./data-source"
import { UserDetail } from "./entity/Detail";
import { User } from "./entity/User"
import { Connection, Repository, createConnection } from "typeorm";

(async () =>{
    try {
        const connection: Connection = await createConnection();
        const userRepo: Repository <User>=connection.getRepository(User);
        const detail= new UserDetail();
        detail.address= "Calle 21";
        const createUser= await userRepo.save({firstName:"Juan",lastName:"Tinoco",age:20, state:"soltero", details: detail})
        console.log(createUser);        
    } catch (error) {
        console.log(error.message);

    }
}) ();
// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "prueba"
//     user.lastName = "1"
//     user.age = 20
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
