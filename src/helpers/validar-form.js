export const validation = (input) => {
   let results = {
      errors: {},
      valido: true
   }
   if (!input.name || typeof input.name !== 'string') {
      results.errors.name = "Name is Required"
      results.valido = false
   } else if (!input.hp || input.hp > 250 || input.hp < 1 || typeof input.hp !== 'number') {
      results.errors.hp = 'Hp is invalid'
      results.valido = false
   } else if (!input.attack || input.attack > 250 || input.attack < 1 || typeof input.attack !== 'number') {
      results.errors.attack = 'attack is invalid'
      results.valido = false
   } else if (!input.defense || input.defense > 250 || input.defense < 1 || typeof input.defense !== 'number') {
      results.errors.defense = 'Defense is invalid'
      results.valido = false
   } else if (!input.speed || input.speed > 250 || input.speed < 1 || typeof input.speed !== 'number') {
      results.errors.speed = 'Speed is invalid'
      results.valido = false
   } else if (!input.height || input.height > 250 || input.height < 1 || typeof input.height !== 'number') {
      results.errors.height = 'Height is invalid'
      results.valido = false
   } else if (!input.weight || input.weight > 250 || input.weight < 1 || typeof input.weight !== 'number') {
      results.errors.weight = 'Weight is invalid'
      results.valido = false
   } else if (!input.types.length) {
      results.errors.types = 'Select from 1 to 3 types'
      results.valido = false
   }

   return results;
}