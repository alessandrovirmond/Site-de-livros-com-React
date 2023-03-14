import logo from '../../imagens/logo.svg'

import styled from 'styled-components'

const LogoContainer = styled.div`
display: flex;
font-size: 30px;
margin-right: 10px;
` 
const LogoImage = styled.img`
margin-right: 10px;
`


function Logo (){ 
    return (
        <LogoContainer>
            <LogoImage 
                src={logo} 
                alt='logo' className='logo-img'>               
            </LogoImage>
            <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    )
}

export default Logo