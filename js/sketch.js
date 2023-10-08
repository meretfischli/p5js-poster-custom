let imgs = []
let numWinners = 4
let w = 500
let h = 356

function preload() {
	let img1 = loadImage('data/out_1.png')
	let img2 = loadImage('data/out_2.png')
	let img3 = loadImage('data/out_3.png')
	let img4 = loadImage('data/out_4.png')
	imgs = [img1, img2, img3, img4]
}

function setup() {
	createCanvas(895, 1280, document.getElementById('canvas-ar')) // poster aspect
	pixelDensity(1) // prevent 200+ PPI lag
	//noLoop()
}

function draw() {
	fill(random(255))
	textSize(32)


	let randoImg = random(imgs)
	image(randoImg, random(), random())
}

function mousePressed() {
	//clear()
	//circle(random(500), random(), random())
	text("HI", mouseX, mouseY)
	
}