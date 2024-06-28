import { statementModel } from "../models/statement_model.js";

export const addstatement = async (req, res) => {

    //function to store data in the database

    try {
        console.log('request', req.body);
        const addData = await statementModel.create(req.body);
        res.status(200).send(addData);

    } catch (error) {
        console.log(error)
    }

};

export const getStatements = async (req, res, next) => {
    try {
        console.log('request', req.body)
        const getData = await statementModel.find();
        res.status(200).send(getData);


    } catch (error) {
        next(error);
    }
}



export const getStatement = async (req, res) => {
    try {
        const getOneStatement = await statementModel.findById(req.params.id);
        res.status(200).send(getOneStatement);
    } catch (error) {
        next(error);
    }
}


export const updateStatement = async (req, res) => {
    try {
        console.log('request,status');
        const status = req.body.caseStatus
        const addData = await statementModel.findByIdAndUpdate(req.params.id, { caseStatus: status },)
        res.status(200).send(addData)

    } catch (error) {
        next(error);
    }
}