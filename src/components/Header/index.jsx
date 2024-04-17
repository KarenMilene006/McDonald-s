  import App from '../../assets/app.png'
  import Logo from '../../assets/logo.png'



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
              <MdPhoneIphone />
              <a href="#">Baixe o App</a>
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