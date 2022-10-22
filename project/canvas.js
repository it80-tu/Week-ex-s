const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const scale = 400;
let scaleX = 21;
let scaleY = 280;
const width = canvas.width;
const height = canvas.height;

const DrawTotalBirth = () => {

//draw axies
ctx.fillStyle = "black";  
ctx.lineWidth = 2.0;
ctx.beginPath();
ctx.moveTo(30, 10);
ctx.lineTo(30, scaleY);
ctx.lineTo(width, scaleY);
ctx.stroke();
ctx.beginPath();

// draw labels
for(let i = 0; i < 6; i++) { 
    ctx.fillText((5 - i) * 20 + "k", 4, i * 50 + 30); 
    ctx.beginPath(); 
    ctx.moveTo(25, i * 50 + 30); 
    ctx.lineTo(30, i * 50 + 30); 
    ctx.stroke(); 
}
ctx.font = '13px serif';
for (let i=0; i<yearsBirth.length;i+=5){
    ctx.fillText(yearsBirth[i], i * 21 + 25, 292);
}

ctx.font = '50px serif'
ctx.fillText('Birth rate in Finland', 150, 50);

//draw rects
ctx.strokeStyle = '#000';
for (let i = 0; i<=totalBirth.length; i++){
    ctx.fillRect(i*scaleX+35,scaleY,12,-totalBirth[i]/scale)
}
}

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

const DrawTotalDeath = () => {

//draw axies
ctx1.fillStyle = "black";  
ctx1.lineWidth = 2.0;
ctx1.beginPath();
ctx1.moveTo(30, 10);
ctx1.lineTo(30, scaleY);
ctx1.lineTo(width, scaleY);
ctx1.stroke();

// draw labels
for(let i = 0; i < 6; i++) { 
    ctx1.fillText((5 - i) * 20 + "k", 4, i * 50 + 30); 
    ctx1.beginPath(); 
    ctx1.moveTo(25, i * 50 + 30); 
    ctx1.lineTo(30, i * 50 + 30); 
    ctx1.stroke(); 
}
ctx1.font = '13px serif';
for (let i=0; i<yearsBirth.length;i+=5){
    ctx1.fillText(yearsBirth[i], i * 21 + 25, 292);
}

ctx1.font = '50px serif'
ctx1.fillText('Death rate in Finland', 150, 50);

//draw rects
ctx.beginPath();
ctx.strokeStyle = '#000';
for (let i = 0; i<=totalDeath.length; i++){
    ctx1.fillRect(i*scaleX+35,scaleY,12,-totalDeath[i]/scale)
}
}

const cvs = document.getElementById('cvs');
const ctx2 = cvs.getContext('2d');

const DrawCompareBirth = () => {
    //draw axies
    ctx2.fillStyle = "black";  
    ctx2.lineWidth = 2.0;
    ctx2.beginPath();
    ctx2.moveTo(30, 20);
    ctx2.lineTo(30, scaleY-20);
    ctx2.lineTo(width, scaleY-20);
    ctx2.stroke();

    // draw labels
    for(let i = 0; i < 5; i++) { 
        ctx2.fillText((4 - i) * 10 + "k", 4, i * 100+30); 
        ctx2.beginPath(); 
        ctx2.moveTo(25, i * 100 + 30); 
        ctx2.lineTo(30, i * 100 + 30); 
        ctx2.stroke(); 
    }
    ctx2.font = '12px serif'
    for (let i=0; i<yearsBirth.length;i+=5){
        ctx2.fillText(yearsBirth[i], i * 21 + 25, 280);
    }
    ctx2.font = '40px serif'
    ctx2.fillText('Male and female birth rate', 150, 50);
    ctx2.font = '15px serif'
    ctx2.fillText ('Male',650,92);
    ctx2.fillText ('Female',650,112)
    ctx2.fillStyle = "rgb(40, 193, 35)";
    ctx2.fillRect(630,80,15,15);
    ctx2.fillStyle = "rgb(204, 116, 16)";
    ctx2.fillRect(630,100,15,15);

    //draw male Birth rate
    ctx2.lineWidth = 3;
    ctx2.strokeStyle = "rgb(40, 193, 35)";
    ctx2.beginPath();
    for (let i =0; i<=maleBirth.length;i++){        
        ctx2.lineTo(scaleX*i+30,height-maleBirth[i]*5/scale +200);
        ctx2.arc(scaleX*i+30,height-maleBirth[i]*5/scale +200, 2,0,2*Math.PI)
    }
    ctx2.stroke();
    ctx2.closePath();

    //draw female Birth rate
    ctx2.lineWidth = 3;
    ctx2.strokeStyle = "rgb(204, 116, 16)";
    ctx2.beginPath();
    for (let i =0; i<=femaleBirth.length;i++){        
        ctx2.lineTo(scaleX*i+30,height-femaleBirth[i]*5/scale +200);
        ctx2.arc(scaleX*i+30,height-femaleBirth[i]*5/scale +200, 2,0,2*Math.PI)
    }
    ctx2.stroke();
    ctx2.closePath();
}

const cvs1 = document.getElementById('cvs1');
const ctx3 = cvs1.getContext('2d');

const DrawCompareDeath = () => {
    //draw axies
    ctx3.fillStyle = "black";  
    ctx3.lineWidth = 2.0;
    ctx3.beginPath();
    ctx3.moveTo(30, 20);
    ctx3.lineTo(30, scaleY-20);
    ctx3.lineTo(width, scaleY-20);
    ctx3.stroke();

    // draw labels
    for(let i = 0; i < 5; i++) { 
        ctx3.fillText((4 - i) * 10 + "k", 4, i * 100+30); 
        ctx3.beginPath(); 
        ctx3.moveTo(25, i * 100 + 30); 
        ctx3.lineTo(30, i * 100 + 30); 
        ctx3.stroke(); 
    }
    ctx3.font = '12px serif'
    for (let i=0; i<yearsDeath.length;i+=5){
        ctx3.fillText(yearsDeath[i], i * 21 + 25, 280);
    }
    ctx3.font = '40px serif'
    ctx3.fillText('Male and female death rate', 150, 50);
    ctx3.font = '15px serif'
    ctx3.fillText ('Male',650,92);
    ctx3.fillText ('Female',650,112)
    ctx3.fillStyle = "rgb(40, 193, 35)";
    ctx3.fillRect(630,80,15,15);
    ctx3.fillStyle = "rgb(204, 116, 16)";
    ctx3.fillRect(630,100,15,15);

    //draw male Death rate
    ctx3.lineWidth = 3;
    ctx3.strokeStyle = "rgb(40, 193, 35)";
    ctx3.beginPath();
    for (let i =0; i<=maleDeath.length;i++){        
        ctx3.lineTo(scaleX*i+30,height-maleDeath[i]*5/scale +200);
        ctx3.arc(scaleX*i+30,height-maleDeath[i]*5/scale +200, 2,0,2*Math.PI)
    }
    ctx3.stroke();
    ctx3.closePath();

    //draw female Death rate
    ctx3.lineWidth = 3;
    ctx3.strokeStyle = "rgb(204, 116, 16)";
    ctx3.beginPath();
    for (let i =0; i<=femaleDeath.length;i++){        
        ctx3.lineTo(scaleX*i+30,height-femaleDeath[i]*5/scale +200);
        ctx3.arc(scaleX*i+30,height-femaleDeath[i]*5/scale +200, 2,0,2*Math.PI)
    }
    ctx3.stroke();
    ctx3.closePath();

}