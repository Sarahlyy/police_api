import { Schema, model,Types } from "mongoose";


const statementSchema =new Schema({
statementId:{ type: String},
incidentType:{type:String ,enum:['non-criminal','criminal'] },
civilianStatus: {type:String ,enum:['suspect','complainant','witness'] },
statement:{ type:String},
caseStatus:{type:String,enum:['open','close']},
date:{type:Date},
createdAt: {type :Date, default:Date.now()} ,
updatedAt:{ type :Date, default:Date.now()},

})




export const statementModel = model('statement',statementSchema);

