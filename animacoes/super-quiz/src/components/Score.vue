<template>
    <div class="score">
        Placar:
        <div class="values">
            <span class="value correct">
                <span class="text">Certas:</span>
                <transition>
                    <span class="number">{{ score.correct }}</span>
                </transition>
            </span>
            <span class="value wrong">
                <span class="text">Erradas:</span>
                <transition name="">
                    <span class="number">{{ score.wrong }}</span>
                </transition>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        score: {
            type: Object,
            required: true,
        }
    }

}
</script>

<style>
    .score {
        color: #000;
        background-color: #FFF;
        width: 50%;
        border-radius: 20px;
        font-size: 2.5rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .score .values {
        display: flex;
        justify-content: space-evenly;
        padding: 20px;
    }

    .values .correct {
        background-color: #89c454;
        border-radius: 8px;
    }   

    .values .wrong {
        background-color: #f05250;
        border-radius: 8px;  
    }

    .values .text {
        padding: 10px 30px; 
    }

    .value {
        display: flex;
    }

    .number {
        color: #FFF;
        border-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 10px;
        min-width: 30px;
    }

    .correct .number {
        background-color: #1e9c31;
    }

    .wrong .number {
        background-color: #bb2814;
    }

</style>