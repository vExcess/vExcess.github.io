var canvas = document.getElementById("background-canvas");
var ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.zIndex = "-1";

async function updateBackground () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var width = canvas.width;
    var height = canvas.height;

    var sin = ang => Math.sin(ang * Math.PI / 180);
    var cos = ang => Math.cos(ang * Math.PI / 180);

    function piece (x, y, r, sz) {
        var ang = 120;
        var thicc = 50;
        
        ctx.save();
            ctx.translate(x, y);
            ctx.rotate(r * Math.PI / 180);
            ctx.scale(sz || 1, sz || 1);
            
            ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(100, 0);
                ctx.lineTo(76, sin(ang / 2) * thicc);
                ctx.lineTo(cos(ang / 2) * thicc, sin(ang / 2) * thicc);
                ctx.lineTo(thicc + cos(ang) * 100, sin(ang) * 100);
                ctx.lineTo(cos(ang) * 100, sin(ang) * 100);
                ctx.lineTo(0, 0);
            ctx.fill();
            
            ctx.strokeStyle = "rgba(0, 150, 75, 200)";
            for (var i = -49; i < 100; i += 8) {
                var j = i + 50;
                var k = j;
                
                if (i < 1) {
                    j = 87 - j * 1.7;
                } else {
                    j = 1;
                }
                
                if (i < 1) {
                    k = 86;
                } else if (i < 23) {
                    k = 170 - k * 1.7;
                } else if (i < 76) {
                    k = 43;
                } else {
                    k = 255 - k * 1.7;
                }
                
                ctx.beginPath();
                ctx.moveTo(i, j);
                ctx.lineTo(i, k);
                ctx.stroke();
            }
        ctx.restore();
    }

    var spin = 30;
    var sz = 0.5;

    var offset = 0;
    for (var y = 0; y < height + 100; y += sz * 75) {
        for (var x = 0; x < width + 100; x += sz * 260) {
            ctx.fillStyle = "rgb(25, 25, 25)";
            piece(x + offset, y, spin, sz);
            ctx.fillStyle = "rgb(0, 0, 0)";
            piece(x + offset, y, spin + 120, sz);
            ctx.fillStyle = "rgb(50, 50, 50)";
            piece(x + offset, y, spin + 240, sz);
        }
        
        if (offset === 0) {
            offset = sz * 130;
        } else {
            offset = 0;
        }
    }
}

updateBackground();

window.addEventListener("resize", updateBackground);

