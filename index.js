// Promise creation
const myPromise2 = new Promise((resolve, reject) => { 
const nome = "Matheus"

if (nome === "Matheus") { 
resolve ('Usuário Matheus encontrando');
} else { 
reject ('Usuário não foi encontrado');
}

})

myPromise2.then((data) => { console.log(data) })

// encadeamento

const myPromise = new Promise((resolve, reject) => { 
    const nome = "Matheus"
    
    if (nome === "Matheus") { 
    resolve ('Usuário Matheus encontrando');
    } else { 
    reject ('Usuário não foi encontrado');
    }
    
    })
    
    myPromise.then((data) => { return data.toLowerCase() }).then((stringModificada) => { 
        console.log(stringModificada)
    })


    // retorno do Catch

    const myPromise3 = new Promise((resolve, reject) => { 
        const nome = "Joao"
        
        if (nome === "Matheus") { 
        resolve ('Usuário Matheus encontrando');
        } else { 
        reject ('Usuário ' + nome +  ' não foi encontrado');
        }
        
        })
        myPromise3.then((data) => { 
            console.log(data)
        }).catch((err) => { console.log("Aconteceu um erro! Erro: " + err)})

        // resolver varias promessas

const p1 = new Promise ((resolve, reject) => { 
    resolve('P1 OK')
})

const p2 = new Promise ((resolve, reject) => {
    resolve ('P2 ok')
})

const p3 = new Promise ((resolve, reject) => { 
    resolve ('p3 ok')
})

    const resolveAll = Promise.all([p1, p2, p3]).then((data) => { console.log(data)}).catch((err) => { console.log ('Houve um erro ' + err)})

    var resposta; 

 

      fetch("https://api.github.com/users/jstimamiglio")
.then(r =>  r.json().then(data => ({status: r.status, body: data})))
.then(obj => console.log(obj));


