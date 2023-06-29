import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/actions";
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';




function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    dispatch(addToken(token));
                    navigate('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)

               
            }catch(error){
                alert('E-mail ou Senha inválidos ! Tente novamente');
            }
        }


    return (
        <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form onSubmit={onSubmit} className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<TextField type="text" className="login__input" value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário'  name='usuario' />
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<TextField type="password" className="login__input" value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' name='senha' />
				</div>
				<button className="button login__submit">
					<span className="button__text">Entrar</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
                               
                        
                                            
                
			<div className="social-login">
				<h3>People Blog</h3>
                <Link to='/cadastrousuario'>
                <button className="button create__submit">
                             
                            
					<span className="button__text">Cadastre-se</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>	
                </Link>
				<div className="social-icons">
					
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    );
}

export default Login;