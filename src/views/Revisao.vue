<template>
    <div>
        <div class="btn-div">
            <router-link to="/detalhes">
                <img src="../assets/btn-1.png" alt="botão voltar"/>
            </router-link>
        </div>
        <header class="row">
            <div class="col-text col-md-6">
                <h1 class="mb-4">Revisão do cadastro</h1>

                <div class="content-div">
                    <p class="title">Nome completo</p>
                    <p class="data">Fabricio Rodrigues</p>
                </div>

                <div class="content-div">
                    <p class="title">CPF</p>
                    <p class="data">485.628.337-89</p>
                </div>

                <div class="content-div">
                    <p class="title">Numero de celular ou telefone</p>
                    <p class="data">(53)88620847</p>
                </div>

                <div class="content-div">
                    <p class="title">Estado/Cidade</p>
                    <p class="data">Rio grande do sul - Pelotas</p>
                </div>

                <div class="content-div">
                    <p class="title">Especialidade principal</p>
                    <p class="data">Cardiologia</p>
                </div>

                <div class="content-div">
                    <p class="title">Preço da consulta</p>
                    <p class="data">R$ 200,00</p>
                </div>

                <div class="content-div">
                    <p class="title">Formas de pagamento da consulta</p>
                    <p class="data">Cartão de credito - Parcelamento em 2x <br/> sem juros</p>
                </div>

                <router-link to="/conclusao">
                    <button class="mt-4 post">CADASTRAR PROFISSIONAL</button>
                </router-link>

                <button class="mt-3 edit">Editar Cadastro</button>
            </div>

            <div class="col-img col-md-6">
                <img src="../assets/img-page3.png" alt="ilustração" class="animate__animated animate__fadeInUp"/>
            </div>
        </header>
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    components:{}
});

</script>

<style lang="scss" scoped>
    .btn-div{
        width:74vw;margin:0.5rem auto;
        display: flex;justify-content:flex-start;

        img{width:2.5rem;}
    }

    header{
        width:74vw;margin:1.2rem auto;border-radius: 2rem;
        box-shadow: 1px -1px 12px 3px rgba(135,135,135,0.39);
        @media screen and (max-width: 450px){width:100%}
        

        .col-text{
            background-color: white;padding: 1.5rem 2.5rem;border-radius: 1rem 0 0 1rem;

            h1{
                font-family: 'Comfortaa', cursive;color:var(--primary-color);font-size: 2.2rem;font-weight: 700;
                @media screen and (max-width: 450px){font-size: 2rem;}
            }

            .content-div{
                line-height: 1rem;
                
                .title{font-weight: 600;margin-top: 0.5rem;font-size: 1rem;}
                .data{margin-top: 0.5rem;font-size: 1rem;}
            }

            button{
                font-family: 'Comfortaa', cursive;width:84%;padding:1.2%;
                border-radius: 0.90rem;border:none;font-weight: 700;

                &:hover{opacity: 0.7;}

                @media screen and (max-width: 450px){width:100%;padding:2%;}
            }
            .post{background-color: var(--yellow);}
            .edit{background-color: white;color:var(--primary-color);}

            @media screen and (max-width: 450px){
                width:100vw;padding:1.5rem;border-radius: 1rem;margin:0;
            }
        }

        .col-img{
            background-color: white;padding: 1.5rem 2.5rem;border-radius: 0 1rem 1rem 0;

            img{width: 100%;margin:5rem auto;}

            @media screen and (max-width: 570px){display:none;}
        }
    }
</style>