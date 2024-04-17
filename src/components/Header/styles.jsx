import styled from "styled-components";

export const ContainerHeader = styled.header `

width:100%;
height:87px;
display:flex;
justify-content: center;


nav{
    width:95%;
    display: flex;
    align-items:center;
    background-color:#fff;
    justify-content:space-between;



.app{
    width:25%;
    height:87px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
}

.baixeApp{

 width:30%;
 display:flex;
 align-items:center;
 gap:5.4px;

    a{
        text-decoration:none;
        font-family: "Inter", sans-serif;
        font-weight:400;
        font-size:0.75rem;
    }

    a:visited {
      color: #000000; 
}

svg{
    color:#ffc72c;
}

}


button{
    background-color:#FFC72C;
    border:none;
    height:45px;
    border-radius:8px;
    display:flex;
    width:163px;
    gap:13px;
    align-items:center;
    justify-content:center;

    a{
        text-decoration:none;
        color:#000000;
        font-family: "Inter", sans-serif;
        font-weight:700;
    }

    a:visited {
      color: #000000; 
}

    img{
        height:25px;
        font-size:0.75rem;
    }
}

}

`