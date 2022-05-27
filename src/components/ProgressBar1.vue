<template>
    <section class="row">
        <div class="bar">
            <div class="progress"></div>
        </div>
        <div class="text">
            <p>1 de 2</p>
        </div>
    </section>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    components:{},
});

</script>

<style lang="scss" scoped>
    .bar{
        height:1.7rem;width:63%;background-color: #f9f9f9;border-radius: 0.40rem;border:none;
        margin-bottom: 1rem;margin-inline: 0.1rem;
    }
    .progress{
        height:1.7rem;width:40%;background-color: var(--primary-color);border-radius: 0.40rem;
    }
    .text{width:20%;font-weight: 600;margin-top: 0.1rem;color:var(--primary-color);}
</style>