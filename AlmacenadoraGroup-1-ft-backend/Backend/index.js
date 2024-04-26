import { config } from "dotenv";
config();

import Server from "./configs/server.js";
const servidorAlmacen = new Server();

servidorAlmacen.listen();