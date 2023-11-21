export const urlapLeiro={
    nev:{
        megjelenes:"Név",
        tipus:"text",
        value:"",
        placeholder:"Valaki Ikalav",
        regex:"[A-Z][a-z]{2,15}",
        validalas:"Név nagybetüvel kezdődik és legalább 3 karakter!"
    },
    szulEv:{
        megjelenes:"Születési év",
        tipus:"number",
        value:"2000",
        regex:{
            min:1000,
            max:2023,
        },
        validalas:"Minimum 1000 Maximum 2023"
    },
}