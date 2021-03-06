const Database = require("./db")
const createProffy = require("./createProffy")

Database.then(async (db) => {
    //inserir dados

    proffyValue ={
        name: "Clévison Barbosa",
        avatar: "https://avatars3.githubusercontent.com/u/50533700?s=460&u=3bf80e995f747ca59dbc280a4112bb004c45f6ae&v=4",
        whatsapp: "89987654534",
        bio: "Entusiasta das melhores tecnologias de química avançada"
    }

    classValue = {
        subject: "Química",
        cost: "20"
       // proffy-id virá pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados, após cadastramos a class
        {
            weekday : 1,
            time_from : 720,
            time_to: 1220
        },
        {
            weekday : 0,
            time_from : 520,
            time_to: 1220
        },
    ]

     //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // consultar os dados inseridos

    //todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar os dados de um determinado professor e trazer junto os dados do professor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
   // console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo , é das 8 as 18
    // se a pessoa do time_from (8h) precisa ser antes ou igual ao horario solicitado
    //o time_to precisa ser acima
    
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "420"

    `)
   / console.log(selectClassesSchedules)
})