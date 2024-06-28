import { Schema, model } from "mongoose";


const statementSchema =new Schema({
statementId:{ type: String},
incidentType:{type:String ,enum:['non-criminal','criminal'] },
civilianStatus: {type:String ,enum:['suspect','complainant','witness'] },
statement:{ type:String},
caseStutus:{type:String,enum:['open','close']},
createdAt: {type :Date, default:Date.now()} ,
updatedAt:{ type :Date, default:Date.now()},

})




export const statementModel = model('statement',statementSchema);

