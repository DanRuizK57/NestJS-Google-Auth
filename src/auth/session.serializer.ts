import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportSerializer } from "@nestjs/passport";
import { Model } from "mongoose";
import { User, UserDocument } from "src/user/schema/user.schema";
import { RegisterAuthDto } from "./dto/register-auth.dto";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>
    ) {
        super();
    }

    serializeUser(user: RegisterAuthDto, done: Function) {
        console.log("Serializando usuario");
        done(null, user);
    }

    async deserializeUser(payload: any, done: Function) {
        console.log("Deserializando usuario");
        console.log(payload);
        const user = await this.userModel.find({ email: payload.email });
        return user ? done(null, user) : done(null, null);
    }
}