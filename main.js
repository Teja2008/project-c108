function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_6GEhbxkx/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
        else{
            console.log("gotresult")
            console.log(results)
            random_number_red= Math.floor(Math.random()*255) +1
            random_number_green= Math.floor(Math.random()*255) +1
            random_number_blue= Math.floor(Math.random()*255) +1
            document.getElementById("resultlabel").innerHTML= "i can hear-"+ results[0].label
            document.getElementById("resultconfidence").innerHTML= "accuracy-"+ (results[0].confidence*100).toFixed(2)+"%"
            document.getElementById("resultlabel").style.color= "rgb("+random_number_red+","+random_number_green+","+random_number_blue+")"
            document.getElementById("resultconfidence").style.color= "rgb("+random_number_red+","+random_number_green+","+random_number_blue+")"

            img1= document.getElementById("image")

        
        if(results[0].label== "lion"){
            img1.src="lion.gif"
            
        } 
        else if(results[0].label== "elephant"){
            img1.src="elephant"
        
        }
        else if(results[0].label== "moose"){
            img1.src="moose.gif"
            
        }
        else if(results[0].label== "humpbackwhale"){
            img1.src="humpbackwhale.gif"
            
        }
        else{
            img1.src="rattlesnake.gif"
            
        }

    }
}

        

