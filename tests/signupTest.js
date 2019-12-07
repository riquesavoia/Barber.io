
//Dados para simular um cadatro

$('#nascimentoInputReal').value='1990';
$('#pagamentoInput').value='Dinheiro';
$('#senhaInput').value='test1';
$('#senhaInput').value='test1';


// chamando a função cadastro
    QUnit.test('Teste unitario função cadastro', function(assert){
        assert.equal(201, cadastrarProfissional($(this).serialize()), "Profissional cadastrado passou")
});
