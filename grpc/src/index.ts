import path from 'path'
import * as grpc from '@grpc/grpc-js'
import { GrpcObject, ServiceClientConstructor } from '@grpc/grpc-js'
import * as protoloader from '@grpc/proto-loader'

const packageDefination = protoloader.loadSync(path.join(__dirname,'../src/a.proto'))

const personProto = grpc.loadPackageDefinition(packageDefination)

const PERSONS:any[] = []

// @ts-ignore 
function addPerson(call,callback){
   let person= {
    name:call.request.name,
    age:call.request.age,
   }
   PERSONS.push(person);
   callback(null,person);
}


const server = new grpc.Server()

server.addService((personProto.AddressBookService as ServiceClientConstructor).service,{addPerson:addPerson})

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});