import * as functions from "firebase-functions";
import * as admin from 'firebase-admin'
import * as express from 'express'
import * as bodyParser from 'body-parser'

admin.initializeApp(functions.config().firebase);

const app=express()
const main=express()


main.use('/Myapi',app)
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({extended:false}))

const db=admin.firestore()
export const webApi=functions.https.onRequest(main)

interface Product
{
    productName:string,
    ProductPrice:String
}


app.post('/saveProduct',async(req,res)=>{

    const product:Product={

        productName:"Benz",
        ProductPrice:"65000000"

    }
    await db.collection("productOnsale").add(product)
})







// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
