const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        // 1. Identifica quem é o passo que está aparecendo agora
        const atual = document.querySelector('.ativo');
        
        // 2. Descobre qual é o próximo passo através do atributo data-proximo
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // 3. Remove a classe 'ativo' do passo atual para ele sumir
        atual.classList.remove('ativo');
        
        // 4. Adiciona a classe 'ativo' no próximo passo para ele aparecer
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
