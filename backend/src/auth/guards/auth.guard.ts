import { CanActivate, Injectable, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const jwt = request.cookies.jwt;
        if (!jwt) {
            console.log("no jwt--jwt", jwt);
            throw new HttpException("Unauthorized access", HttpStatus.UNAUTHORIZED);
        }
        const jwt_veryfie = this.jwtService.verify(jwt);
        console.log("jwt_veryfie", jwt_veryfie);
        if (!jwt_veryfie) {
            return false;
        }
        return true;
    }
}