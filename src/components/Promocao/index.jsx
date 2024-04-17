import { Container } from "./styles";
import MequiSofa from '../../assets/mequinosofa.png';
import Restaurante from '../../assets/Restaurantes_Participantes.png';
import BannerRodaPe from '../../assets/bannerrodape.png';

export const Promocao = () => {
    const imagens = [
        {id: 1, img: MequiSofa, texto:'Que tal um #MéquiNoSofá?',button:<button>Clique aqui</button>},
        {id: 2, img: Restaurante, texto: 'Venha conhecer nossa nova loja',button:<button>Clique aqui</button>},
        {id: 3, img: BannerRodaPe, texto: 'Confira as medidas que o Méqui adotou!',button:<button>Clique aqui</button>}
    ];

    return (
        <>
            <Container>
                {/*<h1>Promoção</h1>*/}
                {imagens.map((item) => ( 
                    <div className="containercard">
                    <div className="card" key={item.id}>
                        <img src={item.img} alt={`Imagem ${item.id}`} />
                    <div className="textcard">
                        <p>{item.texto}</p>
                        <button>{item.button}</button>
                    </div>
                    </div>
                    </div>
                ))}
            </Container>
        </>
    );
}
