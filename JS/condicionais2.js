// Switch / case é muito bom quando sua variável possui valores específicos.

const permissoes = "administrador" // pode receber "aluno" || "professor" || "administrador"

switch(permissoes){
    case "aluno":
        console.log("Você só pode visualizar as aulas e exercícios")
        break;
    case "professor":
        console.log("você pode visualizar, alterar e adicionar as aulas e exercícos.")
        break;
    case "administrador":
        console.log("Você pode tudo meu consagrado, inclusive, se quiser passar na sala da TI para tomar um café, sinta-se a vontade.")
        break;
    default:
        console.log("Rapaz, quem é você ?")
}