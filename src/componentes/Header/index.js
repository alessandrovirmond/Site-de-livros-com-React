import './estilo.css'
import Logo from '../../componentes/logo'
import OpcoesHeader from '../../componentes/OpcoesHeader';
import IconesHeader from '../../componentes/IconesHeader';

function Header(){
    return(
        <header className="App-header">
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}

export default Header