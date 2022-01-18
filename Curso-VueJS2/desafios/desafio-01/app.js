new Vue({
    el: '#desafio',
    data: ({
        nome: 'Jordan',
        idade: 18,
        linkImg: 'https://vsku.se/img/dogs/96/15-corgi-mixed-breeds.jpg'
    }),
    methods: {
        equacaoIdade() {
            return this.idade * 3
        },
        numeroRandom() {
            return Math.random()
        }
    }
})