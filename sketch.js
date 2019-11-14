let capture
let tracker
let cat_mode = false
let glasses_mode = false
let mustache_mode = false
let hat_mode = false

//function preload() {
//    meow = loadsound('meow.mp3')
//}

function setup() {

    createCanvas(800, 600)
    capture = createCapture(VIDEO)
    capture.size(800, 600)
    capture.hide()

     tracker = new clm.tracker()
     tracker.init()
     tracker.start(capture.elt)    

}


function draw() {    

    background(0)
    image(capture, 0, 0, capture.width, capture.height)

     let positions = tracker.getCurrentPosition()

     stroke(0)
     strokeWeight(1.5)
     fill(255)

     let i = 0
     while (i < positions.length - 1) {

//         ellipse(positions[i][0], positions[i][1], 4, 4)
   //text(i, positions[i][0], positions[i][1])

//    line(positions[i][0], positions[i][1], positions[i+1][0], positions[i+1][1])
        
    i += 1
     }

     if (positions.length > 0) {

    if (cat_mode == true) {
         push()
         fill(0)
         ellipse(positions[62][0], positions[62][1], 20, 20)
//         ellipse(positions[32][0], positions[32][1], 20, 20)
         pop()


    
        let nose_x = positions[62][0]
        let nose_y = positions[62][1]

        line(nose_x - 200, nose_y - 20, nose_x, nose_y)
        line(nose_x - 200, nose_y, nose_x, nose_y)
        line(nose_x -200, nose_y + 20, nose_x, nose_y)
        line(nose_x + 200, nose_y -20, nose_x, nose_y)
        line(nose_x +200, nose_y, nose_x, nose_y)
        line(nose_x + 200, nose_y -40, nose_x, nose_y)

//cat ear1
        let brow1_x = positions[19][0]
        let brow1_y = positions[19][1]
        let brow1C_x = positions[22][0]
        let brow1C_y = positions[22][1]

        strokeWeight(3)

        line(brow1_x, brow1_y - 60, brow1C_x, brow1C_y - 60)
        line(brow1_x, brow1_y - 60, brow1_x + 30, brow1_y - 120)
        line(brow1_x + 30, brow1_y - 120, brow1C_x, brow1C_y - 60)
    

//cat ear2
        let brow2_x = positions[15][0]
        let brow2_y = positions[15][1]
        let brow2C_x = positions[18][0]
        let brow2C_y = positions[18][1]

        strokeWeight(3)

        line(brow2_x, brow2_y - 60, brow2C_x, brow2C_y - 60)
        line(brow2_x, brow2_y - 60, brow2_x - 25, brow2_y - 120)
        line(brow2_x - 25, brow2_y - 120, brow2C_x, brow2C_y - 60)



        }
    if  (glasses_mode == true) {
//glasses
        let eye1_x = positions[27][0]
        let eye1_y = positions[27][1]
        let eye2_x = positions[32][0]
        let eye2_y = positions[32][1]

        fill(1, 1, 1, 100)
        
        ellipse(eye1_x, eye1_y, 60, 60)
        ellipse(eye2_x, eye2_y, 60, 60)

        line(eye1_x + 30, eye2_y, eye2_x - 30, eye2_y)
    }

//mustache
    if (mustache_mode == true) {
        let lip1_x = positions[47][0]
        let lip1_y = positions[47][1]

        stroke(1)
        strokeWeight(3)
        
        line(lip1_x - 3, lip1_y - 20, lip1_x - 50, lip1_y + 10)
        line(lip1_x + 6, lip1_y - 20, lip1_x + 50, lip1_y + 10)
    }

// hat
    if (hat_mode == true){
        let ebrow_x = positions[19][0]
        let ebrow_y = positions[19][1]
        let ebrow2_x = positions[15][0]
        let ebrow2_y = positions[15][1]

        fill(1)
        strokeWeight(5)
        rect(ebrow_x, ebrow_y - 60, 130, - 130)
        line(ebrow_x - 30, ebrow_y - 60, ebrow2_x + 30, ebrow2_y -60)
    }
       
//botton cat
        fill(255, 0, 0)
        rect(10, 10, 50, 50)
        triangle(33,16,20,39,43,39)
        
//button glasses
        fill(0, 0, 255)
        rect(10, 70, 50, 50)
        ellipse(35, 95, 20, 20)

//mustache button #3
        fill(0, 255, 55)
        rect(10, 130, 50, 50)
        line(25, 163, 42, 148)

//hat button
        fill(155, 0, 155)
        rect(10, 190, 50, 50) 
        rect(24, 205, 20,20)

}
    

}

   // env = new p5.Envelope()
   // env.setADSR(0.2, 0.1, 0.1, 0.5)

function mouseClicked() {

    print(int(mouseX),int(mouseY))

       // osc.amp(env)
        
        if (mouseX > 10 && mouseX < 60 && mouseY > 10 && mouseY < 60) {
            print('cat')
         if (cat_mode == true) { 

                cat_mode = false
            } else {
                 cat_mode = true
         }
        

        }

        //if (mouseX > 10 && mouseX < 60 && mouseY > 10 && mouseY < 60) {
        //    print('meow')
        //    meow.play()
        //    env.trigggerAttack()
        //}


        if (mouseX > 10 && mouseX < 60 && mouseY > 70 && mouseY < 120) {
            print('glasses')

            if (glasses_mode == true) {

                glasses_mode = false
            } else {
                glasses_mode = true
            }
        }

        if (mouseX > 10 && mouseX < 60 && mouseY > 130 && mouseY < 180) {
            print('mustache')
         if (mustache_mode == true) {

                mustache_mode = false 
             } else {
                mustache_mode = true
            }
        }

        if (mouseX > 10 && mouseX < 60 && mouseY > 190 && mouseY < 240) {
            print('mustache')
         if (hat_mode == true) {

                hat_mode = false 
             } else {
                hat_mode = true
            }
        }

        



    }