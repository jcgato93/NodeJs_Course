const child = require("child_process");

function execCommand(command){
    child.exec(command,(err,stdout,stderr)=>{
        if(err){
            console.log('Error: '+err); return;
        }

        if(stdout) console.log('Standar out: \n'+stdout)
        if(stderr) console.log('Standar error: \n'+stderr)
    }
    )
}

execCommand("DIR");