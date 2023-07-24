import { Body, Controller, Get, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService,
    private authService: AuthService) {}

  @Get('listar')
  async listar(): Promise<Usuario[]>{
    return this.usuarioService.listar()
  }

  @Post('cadastrar')
  async cadastrar(@Body() data:UsuarioCadastrarDto): Promise<ResultadoDto>{
    return this.usuarioService.cadastrar(data);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
    //return this.authService.login(req.user);    
  }
/*
  @Post('login-token')
  async loginToken(@Request() req, @Body() data) {
    return this.authService.loginToken(data.token);    
  }
  */
}