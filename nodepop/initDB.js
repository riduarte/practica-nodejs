import readline from 'node:readline/promises'
import connectMongoose from "./Lib/connectMongoose.js";
import Agent from "./models/Agent.js";
import Product from "./models/Produt.js";

const connection = await connectMongoose()
console.log("Connetd to MongoDB", connection.name)

const answer = await ask('Are you sure you want to delete database collections? (n)')
if (answer.toLowerCase() !== 'y') {
  console.log('Operation aborted.')
  process.exit()
}

await initAgents()
await initProduct()

await connection.close()

async function initProduct() {
  const result = await Product.deleteMany()
  
  const [admin, example] = await Promise.all([
    Agent.findOne({ email: 'admin@gmail.com'}),
    Agent.findOne({ email: 'example@gmail.com'}),
  ])
  //create products
const insertResult = await Product.insertMany([
{
    name: 'Televisor',price: 300,owner: example._id, url:"https://picsum.photos/300/200?random=<%="
},
{
  name: 'Camion',price: 40.000,owner: example._id, url:"https://picsum.photos/300/200?random=<%="
},
{
  name: 'Cama',price: 200,owner: example._id, url:"https://picsum.photos/300/200?random=<%="
},
{
  name: 'Monopatin',price: 700,owner: example._id, url:"https://picsum.photos/300/200?random=<%="
},
{
  name: 'Monitor',price: 40,owner: example._id, url:"https://picsum.photos/300/200?random=<%="
},
{
  name: 'Casa de playa',price: 600.000,owner: admin._id, url:"https://picsum.photos/300/200?random=<%="
},
{
  name: 'Moto',price: 70,owner: admin._id, url:"https://picsum.photos/300/200?random=<%="
}
])
}

async function initAgents() {
  const result = await Agent.deleteMany()
  
  //create agents
  const insertResult = await Agent.insertMany([
  {
      name: 'admin',
      email: 'admin@gmail.com',
      password:await Agent.hashPassword('1234'),
  },
  {
      name: 'example',
      email: 'example@gmail.com',
      password:await Agent.hashPassword('1234'), 
  },
  ])
  }
  

async function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  const result = await rl.question(question)
  rl.close()
  return result
    
}
