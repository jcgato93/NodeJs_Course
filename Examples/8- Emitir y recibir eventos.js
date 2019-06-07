const db = require('./Resources/db')
const objDb = new db('plazti', 'test', 'itzalp')

objDb.on('status', status => {
  console.log(`Estado de Base Datos: ${status}`)

  if (status === 'open') {
    const data = objDb.getTable('students')
    console.log('Datos dela tabla Student:\n', JSON.stringify(data))
    objDb.close()
  }
})

objDb.on('getTable', tableName => {
  console.log(`Consultando la tabla ${tableName}`)
})

objDb.open()