new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Exibindo alerta.')
        },
        armazenarValor(event) {
            this.valor = event.target.value
            return this.valor
        }
    }
})