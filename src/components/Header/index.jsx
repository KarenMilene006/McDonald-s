  import App from '../../assets/app.png'
  import Logo from '../../assets/logo(1).png'



  import { MdPhoneIphone } from "react-icons/md";
  import { ContainerHeader } from "./styles";

  export const Header =() => {
    return (
      <>   
      <ContainerHeader>

        <nav>
        <a href='#'><img src={Logo} alt="logo"/></a>

  <div className='app'>

        <div className='baixeApp'>
            <a href="#">Baixe o App</a>
            <MdPhoneIphone />
        </div>
          
          <button>
              <a href="#">Peça seu Méqui</a>
              <img src={App} alt="app"/>
          </button>
  </div>
          </nav>
      </ContainerHeader>
      </>
    )
  }