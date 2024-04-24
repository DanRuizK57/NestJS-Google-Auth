import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import { Profile, Strategy } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/auth/google/redirect",
            scope: ['email', 'profile'],
            profileFields: ['emails', 'name'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        
        const { displayName, emails } = profile;
        const user = {
            email: emails[0].value,
            name: displayName
        };

        const payload = {
            user,
            accessToken,
        };
        console.log(user);
        
        return user;
        // console.log(payload);
        // return payload;
        // done(null, payload);
    }

}