console.log('JavaScript funguje')

// Jak se vytvoří pole a co to je
    /* datový typ, seznam prvků*/

let jmena= ["Alenka", "Jája", "Pája", "Bob", "Bobek", "Pat", "Mat", "Elsa", "Anna", "Olaf" ]

console.log(jmena)

// Jak přistupujeme k prvkům pole

console.log(jmena[9]) //z pole vypíšu prvek s indexem 9 (ty jdou od nuly)

jmena[1] = "Gargamel" //měním hodnotu
console.log(jmena)


// Metody pro práci s polem
// - pridat na konec => PUSH
jmena.push("Azrael")
jmena.push("Šprýmař")
jmena.push("Bručoun")
console.log(jmena)

// - odebrat z konce => .pop() neuvádí se parametr
jmena.pop()
console.log(jmena)

// - pridat na zacatek => pole.UNSHIFT
jmena.unshift("Šmoulinka")
jmena.unshift("Silák")

// - odebrat ze zacatku => POLE.SHIFT
 jmena.shift()
 console.log(jmena)

// - vrátit kousek pole od-do => SLICE
let novaJmena = jmena.slice(3, 11)  /*"od" zahrne, "od" už ne*/

// Práce s polem v cyklu  tzv. "projít"

for( let i = 0;i<4; i++  ) { //založit iterátor = počítadlo   : založím proměnou, dám tam výchozí hodnotu; když tohle platí tak se to provádí; co se stane
    console.log ("Ahojda jahoda")
}

for( let i = 0; i < jmena.length ; i++  ) { 
    //console.log (jmena [i])
    console.log( "Šmoula číslo " + i + " se jmenuje " + jmena[i])
}