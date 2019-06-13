var app = new Vue({
    el: '#app',
    data: {
        player: {
            name: 'Jogador',
            hp: 100,
            maxHp: 100,
            target: null,
            color: 'blue',
            physicalAttack: 10,
        },

        monster: {
            name: 'Monstro',
            hp: 150,
            maxHp: 150,
            target: null,
            color: 'red',
            physicalAttack: 20,
        },

        log: [],
        
        gameRunning: false,
        dialog: null,
    },

    created: function() {
        this.player.target = this.monster;
        this.monster.target = this.player;

        const self = this;
        setInterval(function() {
           if ( self.gameRunning ) {
            self.attack(null, self.monster);
           };
        }, 2000);
    },

    watch: {
        gameRunning: function(newValue) {
            let p = this.player;
            let m = this.monster;
            if ( newValue ) {
                p.hp = p.maxHp;
                m.hp = m.maxHp;
                this.log = [];
                this.dialog = null;
            }
        },

        'player.hp': function(newValue) {
            if ( newValue == 0 ) {
                this.dialog = this.monster.name + ' ganhou!!! :(';
                this.gameRunning = false;
            }
        },

        'monster.hp': function(newValue) {
            if ( newValue == 0 ) {
                this.dialog = this.player.name + ' ganhou!!! :)';
                this.gameRunning = false;  
            }
        },
    },
    computed: {
        playerHpPercent: function() {
            return 100 / this.player.maxHp * this.player.hp + '%';
        },
        
        monsterHpPercent: function() {
            return 100 / this.monster.maxHp * this.monster.hp + '%';
        },
    },
    methods: {
        attack: function(event, character) {
        
            if ( event != null) {
                const button = event.srcElement;
                this.applyReuseTime(button, 1000);
            };

            const target = character.target;
            const l = this.log;
            const dano = getRandomIntInclusive(0, character.physicalAttack);
            target.hp -= dano;
            if (target.hp < 0) target.hp = 0;
            l.push({message: character.name + ' atingiu ' + target.name + ' com ' + dano,
                    color: character.color});
        },

        specialAttack: function(event,  character) {

            if ( event != null) {
                const button = event.srcElement;
                this.applyReuseTime(button, 5000);
            };

            const target = character.target;
            const l = this.log;
            const dano = getRandomIntInclusive(0, character.physicalAttack*2);
            target.hp -= dano;
            if (target.hp < 0) target.hp = 0;
            l.push({message:  character.name + ' atingiu ' + target.name + ' com ' + dano,
                    color: character.color});
        },

        heal: function(event,  character) {

            if ( event != null) {
                const button = event.srcElement;
                this.applyReuseTime(button, 10000);
            };

            const l = this.log;
            if (character.hp < character.maxHp) {
                const pontos = getRandomIntInclusive(0, character.physicalAttack*5);
                character.hp += pontos;
                l.push({message: character.name + ' recuperou ' + pontos + ' de HP',
                        color: character.color});
            } else if (character.hp == character.maxHp) {
                l.push({message: 'A vida do ' + character.name + ' já está completa!',
                        color: character.color});
            }    
        },

        quit: function() {
            this.gameRunning = false;
        },

        start: function() {
            this.gameRunning = true;
        },

        applyReuseTime: function(button, time) {
            const icon = document.createElement('i');
            const oldColor = button.style.backgroundColor;

            icon.classList.add('fa', 'fa-spinner', 'fa-spin');
            button.appendChild(icon);
            button.disabled = true;
            button.style.backgroundColor = 'lightGray';
            
            setTimeout( function() {
                button.removeChild(icon);
                button.style.backgroundColor = oldColor;
                button.disabled = false;
            }, time);
        },
    },
});

//Generate random integer number
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};