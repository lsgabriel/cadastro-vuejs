<template>
    <div>
        <header class="row">
            <div class="col-text col-md-6">
                <h1>Sobre o profissional</h1>

                <p>Dados do profissional</p>

                <div>
                    <label for="Nome">Nome completo*</label><br/>
                    <input type="name" id="Nome" name="Nome" placeholder="Digite o Nome completo"/>
                </div>

                <div>
                    <label for="CPF">CPF*</label><br/>
                    <input type="number" id="CPF" name="CPF" placeholder="Digite um CPF"/>
                </div>

                <div>
                    <label for="celular">Numero de celular*</label><br/>
                    <input type="tel" id="celular" name="celular" placeholder="(00) 0 0000-0000"
                    pattern="[0-9]{2}-[0-9]{1}-[0-9]{4}-[0-9]{4}"
                    />
                </div>

                <div class="row">
                    <div class="col-md-5">
                        <label for="Estado">Estado*</label>
                        <input list="estados" name="Estado" placeholder="Selecione" />
                        <datalist id="estados">
                            <option value="AP"/>
                            <option value="AM"/>
                            <option value="BA"/>
                            <option value="CE"/>
                            <option value="DF"/>
                            <option value="MA"/>
                            <option value="MG"/>
                            <option value="RS"/>
                            <option value="RJ"/>
                            <option value="SP"/>
                            <option value="SE"/>
                        </datalist>
                    </div>

                    <div class="col-md-5">
                        <label for="Cidade">Cidade*</label>
                        <input list="cidades" name="Cidade" placeholder="Selecione" />
                        <datalist id="cidades">
                            <option value="Sao Paulo"/>
                            <option value="Rio de Janeiro"/>
                            <option value="Minas Gerais"/>
                        </datalist>
                    </div>
                    </div>
                    
                    <ProgressBar1/>

                    <router-link to="/detalhes">
                        <button type="submit">PRÓXIMO</button>
                    </router-link>
            </div>

            <div class="col-img col-md-6">
                <img src="../assets/img-page1.png" alt="ilustração" />
            </div>
        </header>
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import ProgressBar1 from '../components/ProgressBar1.vue';

export default defineComponent({
    components:{ProgressBar1}
});

</script>

<style lang="scss" scoped>
    header{
        width:74vw;margin:2.5rem auto;border-radius: 2rem;
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

            input[type="name"]{
                border-radius: 0.40rem;width:85%;padding:1%;border: solid thin var(--primary-color);
                margin-top: 0.3rem;margin-bottom: 1rem;
            }

            input[type="number"], input[type="tel"]{
                border-radius: 0.40rem;width:65%;padding:1%;border: solid thin var(--primary-color);
                margin-top: 0.2rem;margin-bottom: 1rem;
            }

            input[list="estados"],input[list="cidades"]{
                border-radius: 0.40rem;width:100%;padding:1%;border: solid thin var(--primary-color);
                margin-top: 0.2rem;margin-bottom: 1rem;
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