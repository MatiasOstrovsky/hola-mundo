//EMS importing
import {sum} from './sum.mjs'
import os from 'node:os'

//Variables


// Main Code
console.log('Hola mundo 👍')
console.info('455+655=',sum(455,655))
console.info('platform: ',os.platform())
console.info('uptime: ',os.uptime/60/60)