import { Outlet ,Link } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const Navigation = () => {
    return (
        <Fragment>
            <div className ="navigation">
            <Link className="logo-contanier" to='/'>
                <CrwnLogo/>
            </Link>
            <div className="nav-links-container">
            <Link className="nav-link" to='/Shop'>
            Shop
            </Link>
            </div>
            </div>
          <Outlet/>
        </Fragment>
    );
};

export default Navigation;