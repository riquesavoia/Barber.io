$('#emailInput').val(usuario.email).value='test@gmail.com';
$('#sexoInput').val(usuario.sexo).value='M';
$('#nomeInput').val(usuario.nome).value='Testinho';
$('#sobrenomeInput').val(usuario.sobrenome).value='Test';
$('#sobrenomeInput').val(usuario.sobrenome).value='Testt';
$('#nomeUsuarioInput').attr('value', usuario.nome_usuario);
$('#cpfInput').val(usuario.cpf).value='476.228.321-22';
$('#rgInput').val(usuario.rg).value="1233425345346";



// chamando a função cadastro
QUnit.test('Teste unitario função cadastro', function(assert){
    assert.equal(201, editarPerfil($(this).serialize()), "Teste de editar perfil passou")
});