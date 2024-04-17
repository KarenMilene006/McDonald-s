import { Container } from "./styles";

import MequiSofa from '../../assets/mequinosofa.png';
import Restaurante from '../../assets/Restaurantes_Participantes.png';
import BannerRodaPe from '../../assets/bannerrodape.png';

export const Promocao = () => {

    const imagens = [
        {id: 1, img: MequiSofa,texto:'Que tal um #MéquiNoSofá?'},
        {id: 2, img: Restaurante, texto: 'venha conhecer nossa nova loja'},
        {id: 3, img: BannerRodaPe, texto: 'Confira as medidas que o Méqui adotou!'}
    ];

    return (
        <Container>
            <h2>Promoção</h2>
            {imagens.map((item) => { 
                return (
                    <div className="containerCard" key={item.id}> 
                    <div className="imagemcard">
                      <img src={item.img} alt={`Imagem ${item.id}`} />
                    </div>
                    <div className="textocar">
                       <p>{item.texto}</p>
                    </div>
                    </div>
                );
            })}
        </Container>
    );
}
