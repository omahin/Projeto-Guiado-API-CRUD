Reprograma :rocket: | Turma Online 12 | Back-end | 2021 | 
# API-CRUD | Projeto Guiado :dancers:

## Descrição do Projeto :capital_abcd: 

### Bem vinda ao {reprograma}trip :airplane:

Uma api que permite você observar diferentes viagens de ônibus, controlando informações sobre o motorista e passageiros!<br />

## Demandas de negócio & rotas criadas :hammer_and_wrench:

:small_blue_diamond: **Ordenar viagens com número de passageiros**<br />

{GET}/travels/passengerNumber
const passengerNumber

:small_blue_diamond: **Cadastrar todas as informações de um novo motorista em uma viagem**<br />

{POST}/travels/:id/driver/create

    {
        "id": automático,
        "name": String,
        "license": String
    }

const createDriver

:small_blue_diamond: **Editar qualquer dado do motorista**<br/>

{PATCH}/driver/:id/updateDriver

    {
        "id": automático,
        "name": String,
        "license": String
    }

 const updateDriver

:small_blue_diamond: **Substituir motorista**<br/>

{PUT}/driver/:id/replaceDriver

    {
        "id": automático,
        "name": String,
        "license": String
    }

const replaceDriver

:small_blue_diamond: **Deletar uma viagem**<br />

{DELETE}/travel/:id/delete

const deleteTravel

### DESAFIO :scream: <br />

:small_blue_diamond: **Ver viagens por tempo de duração**<br />

:small_blue_diamond: **Ordenar viagens com número de paradas**<br />
