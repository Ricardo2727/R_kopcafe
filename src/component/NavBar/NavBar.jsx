// import './NavBar.css'
import classes from './NavBar.module.css'



const NavBar = () => {
    return (

        // <header className='header'> para version con archivo .CSS sin modulo
        <header className={classes.header}>
            <h3 style={{color:'red', fontSize:30,  }}>KOP CAFE</h3>
            <nav>
                <a className='btn btn-warning'>Inicio</a>
                <a>Bebidas</a>
                <a>Dulces</a>
                <a>Salados</a>
                <a>Club KOP</a>
            </nav>
        </header>

    )
}

export default NavBar