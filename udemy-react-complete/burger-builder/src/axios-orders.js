import axios from 'axios'
import { orders_db } from './conf/keys'

console.log(orders_db)
const instance = axios.create({
  baseURL: orders_db
})

export default instance
