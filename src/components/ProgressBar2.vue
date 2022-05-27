<template>
    <section class="row mt-4">
        <div class="bar">
    </div>
    <div class="text">
        <p>2 de 2</p>
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
        height:1.7rem;width:60%;background-color: var(--primary-color);border-radius: 0.40rem;border:none;
        margin-inline: 0.7rem;
    }
    .text{width:20%;font-weight: 600;margin-top: 0.1rem;color:var(--primary-color);}
</style>