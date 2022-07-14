function preload()
{

}

function setup()
{
canvas=createCanvas(400,300)
canvas.position(450,250)
video=createCapture(VIDEO)
video.hide()

}

function draw()
{
image(video,150,125,90,80)
fill("green")
stroke("black")
circle(45,50,80)

fill("green")
stroke("black")
circle(350,50,80)

fill("green")
stroke("black")
circle(45,250,80)

fill("green")
stroke("black")
circle(350,250,80)

fill("brown")
stroke("black")
rect(70,30,250,50)

rect(70,225,250,50)

rect(20,50,50,200)

rect(320,50,50,200)
}

function take_snapshot()
{
save('filter.png')
}