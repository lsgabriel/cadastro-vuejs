<template>
    <div>
        <header class="row">
            <div class="content text-center">
                <h1 class="mb-4 animate__animated animate__fadeInUp">Cadastro concluido🎉</h1>

                <div>
                    <img class="illustration" src="../assets/img-page1.png" alt="ilustração" />
                </div>    
                
                <div>
                    <img class="logo" src="../assets/logo1.png" alt="ilustração" />
                </div>
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
    header{
        width:74vw;margin:1.2rem auto;border-radius: 2rem;
        box-shadow: 1px -1px 12px 3px rgba(135,135,135,0.39);
        @media screen and (max-width: 450px){width:100%;margin:15vh auto}

        .content{
            background-color: white;padding: 1.5rem 2.5rem;border-radius: 1rem;

            h1{
                font-family: 'Comfortaa', cursive;color:var(--primary-color);font-size: 2.2rem;font-weight: 700;
                @media screen and (max-width: 450px){font-size: 2rem;}
            }
            
            p{font-size: 1.5rem;}

            .illustration{
                width: 50%;margin:auto;

                @media screen and (max-width: 450px){width:85%}
            }

            .logo{
                width: 30%;margin:2rem auto;

                @media screen and (max-width: 450px){width:85%}
            }

            @media screen and (max-width: 450px){
                width:100vw;padding:1.5rem;border-radius: 1rem;margin:0;
            }
        }
    }
</style>