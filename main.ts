import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import { Container } from "typedi";
import { PriceController } from "./price.controller";
import { useExpressServer, useContainer } from "routing-controllers";

dotenv.config();
useContainer(Container);

if (!process.env.PORT) process.exit(1);

const app = express();
app.use(express.json());
const port = parseInt(process.env.PORT, 10);

useExpressServer(app, {
  controllers: [PriceController],
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
