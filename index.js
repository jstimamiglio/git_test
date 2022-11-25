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
        reject ('Usuário não foi encontrado');
        }
        
        })
        myPromise3.then((data) => { 
            console.log(data)
        }).catch((err) => { console.log("Aconteceu um erro! Erro: " + err)})