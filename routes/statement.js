import { Router } from "express";
import { addstatement, getStatement, getStatements, updateStatement } from "../controllers/statement_controller.js";

 const statementRouter =Router();

//Define Routes
statementRouter.post('/statement',addstatement);


statementRouter.get('/statement',getStatements);

statementRouter.post('/statement',(req,res)=>{
    res.json('All text')
});


statementRouter.get('/statement/:id',getStatement);


statementRouter.patch('/statement/:id/:caseStatus', updateStatement);


export default statementRouter;
