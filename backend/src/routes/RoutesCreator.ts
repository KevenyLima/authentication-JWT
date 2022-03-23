import { CreateCreator, loginCreator } from "../controllers/creatorControllers";
import { validatialCreateCreator } from "../middlewares/validationCreateCreator";
import { ValidatialToken } from "../middlewares/validationToken";

const Router = require("express").Router();

Router.post("/",validatialCreateCreator,CreateCreator)
Router.get("/",loginCreator)

export default Router