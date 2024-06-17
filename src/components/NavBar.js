
import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Item`s Shop</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {user.user.role === "admin" ? <Button
                            variant={"outline-light"}
                            onClick={() => {navigate("/admin")}}
                            className='mr-2'
                        >
                            Админ панель
                        </Button> : <></>}

                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate('/basket')}
                            className="ml-3"
                        >
                            Корзина
                        </Button>
                        
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-3"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button 
                        variant={"outline-light"}
                        onClick={() => {navigate("/login")}}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
