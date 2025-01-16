const asynchHandelr = (requestHandeler) =>{
     (req,res,next) =>{
        return Promise.resolve(requestHandeler(req,res,next)).catch((err)=>next (err));
     }
}

export default asynchHandelr;

// const asynchHandelr = (fn) => async (req,res,next) =>{
//    try{
//          await fn(req,res,next);
//    }
//    catch(err){
//         res.status( err.code || 500).json({
//             message: err.message || "An unknown error occurred",
//             sucess : false,
//         });
//    }
// }