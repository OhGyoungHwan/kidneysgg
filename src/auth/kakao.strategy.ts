import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from '../schemas/user.schema'
import { Model } from 'mongoose';

require("dotenv").config()

export class KakaoStrategy extends PassportStrategy(Strategy) {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
      super({
          clientID: process.env.KAKAO_ID,
          callbackURL: process.env.CALLBACK_URL,
      });
    }
  
    async validate(accessToken, refreshToken, profile, done) {
        try {
            const exUser = await this.userModel.findOne({
                // 카카오 플랫폼에서 로그인 했고 & snsId필드에 카카오 아이디가 일치할경우
                플렛폼ID: profile.id, 
                플렛폼: "kakao"
            }).exec();
            if (exUser) {
                done(null, exUser);
            } else {
                console.log("err2")
                const user = {
                    플렛폼ID: profile.id,
                    플렛폼: 'kakao',
                };
                const newUser = new this.userModel(user);
                newUser.save();
                done(null, newUser);
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }
}