// importing express lib
import express from 'express'

// importing centerclass
import centersclasscontroller from '../controller/centerclass.js'

// importing router for center manager
const centerrouter = express.Router();

centerrouter.route('/')
    // create a new center
    .post(centersclasscontroller.addNewcenter)
    //check if an id to be deleted is supplied
    .get(centersclasscontroller.getAllCenters)
    .delete((req,resp)=>{
        resp.json({
            Message: 'Id not supplied',
            Error: true
        })
    })

centerrouter.route('/:centerid')
    .get(centersclasscontroller.getACenter)
    .put(centersclasscontroller.editACenter)
    .delete(centersclasscontroller.deleteACenter)

export default centerrouter;