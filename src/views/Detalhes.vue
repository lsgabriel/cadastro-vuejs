<template>
    <div>
        <div class="btn-div">
            <router-link to="/">
                <img src="../assets/btn-1.png" alt="botão voltar"/>
            </router-link>
        </div>
        <header class="row">
            <div class="col-text col-md-6">
                <h1>Sobre o atendimento</h1>

                <p>Detalhes do atendimento</p>

                <div>
                    <label for="especialidade">Especialidade princial*</label>
                    <input list="especialidade" id="especialidade" placeholder="Selecione a especialidade" />
                    <datalist id="especialidade">
                        <option value="1"/>
                        <option value="2"/>
                    </datalist>
                </div>

                <div>
                    <label for="consulta">Informe o preço da consulta*</label>
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">R$</span>
                        <input type="number" class="form-control" placeholder="Valor" aria-label="Username" aria-describedby="basic-addon1" id="consulta">
                    </div>
                </div>

                <div>
                    <label for="pagamento">Formas de pagamento da consulta*</label>
                    <div class="input-group payment-input">
                        <div class="input-group-text-2">
                            <input class="form-check-input mt-1" type="checkbox" value="" aria-label="Checkbox for following text input">
                        </div>
                        <p>Em Dinheiro</p>
                    </div>

                    <div class="input-group payment-input mt-3">
                        <div class="input-group-text-2">
                            <input class="form-check-input mt-1" type="checkbox" value="" aria-label="Checkbox for following text input">
                        </div>
                        <p>Pix</p>
                    </div>

                    <div class="input-group payment-input mt-3" >
                        <div class="input-group-text-2" data-bs-toggle="dropdown" aria-expanded="false">
                            <input class="form-check-input mt-1" type="checkbox" value="" aria-label="Checkbox for following text input" >
                        </div>
                        <p>Cartão de credito</p>

                        <ul class="dropdown-menu p-3">
                            <li class="m-3">Parcelamento em</li>
                            <li><hr class="dropdown-divider"></li>
                            <input class="form-check-input mt-1" type="checkbox" value="" aria-label="Checkbox for following text input" >1x, sem juros<br/>

                            <input class="form-check-input mt-1" type="checkbox" value="" aria-label="Checkbox for following text input" >2x, sem juros<br/>

                            <input class="form-check-input mt-1" type="checkbox" value="" aria-label="Checkbox for following text input" >3x, sem juros<br/>
                        </ul>
                    </div>
                </div>

                    <ProgressBar2/>

                    <router-link to="/revisao">
                        <button class="mt-3">PRÓXIMO</button>
                    </router-link>
            </div>

            <div class="col-img col-md-6">
                <img src="../assets/img-page2.png" alt="ilustração" class="animate__animated animate__fadeInUp"/>
            </div>
        </header>
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import ProgressBar2 from '../components/ProgressBar2.vue';

export default defineComponent({
    components:{ProgressBar2}
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

            p{font-weight: 600;margin-top: 1rem;margin-bottom: 1.5rem;font-size: 1.4rem;}

            label{color:#2b2b2b;font-size: 0.9rem;}

            input[list="especialidade"]{
                border-radius: 0.40rem;width:99%;padding:1%;border: solid thin var(--primary-color);
                margin-top: 0.2rem;margin-bottom: 1rem;
            }

            .input-group-text{
                background-color: var(--primary-color);color:white;width:3rem;

                border-radius: 0.40rem;width:10%;padding:1%;border: solid thin var(--primary-color);
                margin-top: 0.2rem;margin-bottom: 1rem;
            }
            input[class="form-control"]{
                border-radius: 0.40rem;padding:1%;border: solid thin var(--primary-color);
                margin-top: 0.2rem;margin-bottom: 1rem;
            }


            .payment-input{
                width:85%;border-radius: 0.40rem;background-color: #f9f9f9;
                box-shadow:1px 11px 4px -8px #d3d3d3;

                @media screen and (max-width: 450px){width:100%}
                
                p{font-size: 1rem;padding-inline: 2rem;}

                .input-group-text-2{
                    border-radius: 0.40rem;width:15%;padding:1%;
                    margin-bottom: 1.5rem;text-align: center;margin-top: 0.6rem;
                }

                .dropdown-menu{text-align: center;width:100%;background-color: #f9f9f9;}
            }

            button{
                font-family: 'Comfortaa', cursive;background-color: var(--primary-color);
                width:84%;padding:1.2%;border-radius: 0.90rem;
                color:white;border:none;font-weight: 700;

                &:hover{opacity: 0.7;}

                @media screen and (max-width: 450px){width:100%;padding:2%;}
            }

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