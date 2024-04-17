import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center; 
    justify-content: center; 
    flex-wrap: wrap; 
    height: 70vh; 
    background-color: #FEB706;

    .containercard {
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        margin-left:60px;
    }

    .card {
        display: flex;
        flex-direction: column; 
        align-items: center;
        height: 300px;
        width: 281px; 

        img{
         width:100%;
        }
        

        .textcard{
         background-color:#FFFFFF;
         width:100%;
         height:50%;
         display:flex;
         flex-direction:column;
         align-items:center;
         border-radius: 0  0  20px 20px;
         
         p{
            margin-top:7px;
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            margin-bottom:36px;
         }

         button{

            font-family: "Roboto", sans-serif;
            font-weight: 400;
            border:none;
            width:162px;
            height:41px;
            border-radius:10px;
            background-color:#FFBC0D;
            font-size:1rem;
            
         }
        }
    }
`;
