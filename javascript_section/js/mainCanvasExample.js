(function(undefined){

    var Animation = function(){
        var self = {};
        var canvas = {};
        var ctx = {};
        var rectangle = {};
        var speed = 5;
        var util = {
            getRandomInt :  function(min, max) {
                return Math.floor( Math.random() * (max-min+1) ) + min;
            }
        }
        var draw = function(){
            // More info: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Canvas_tutorial/Drawing_shapes
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgb(20,150,200)";
            ctx.fillRect (rectangle.x, rectangle.y, rectangle.width, rectangle.height);
            ctx.strokeRect (rectangle.x, rectangle.y, rectangle.width, rectangle.height);

            ctx.beginPath();
            ctx.strokeStyle = "rgb(100, 100, 100)";
            ctx.arc(rectangle.x + rectangle.width/2, rectangle.y + rectangle.height/2, rectangle.width/3, Math.PI/2, Math.PI, false);   // Mouth (clockwise)
            ctx.stroke();

            ctx.fillStyle = "rgba(200, 50, 50, 0.8)";
            ctx.fillRect (rectangle.x + rectangle.width/2, rectangle.y + 5, 30, 10);
            ctx.strokeStyle = "rgb(10, 10, 10)";
            ctx.strokeRect (rectangle.x + rectangle.width/2, rectangle.y + 5, 30, 10);
            ctx.fillStyle = "rgb(70, 70, 70)";
            ctx.fillRect (rectangle.x + 10, rectangle.y + rectangle.height, 10, 10);
            ctx.fillRect (rectangle.x + rectangle.width-20, rectangle.y + rectangle.height, 10, 10);
        };
        var keyHandler = function(event){
            console.log(event.which)
            switch (event.which) {
                case 97:                        // a -> left
                    rectangle.x = rectangle.x - speed;
                break;
                case 115:                       // s -> down
                    rectangle.y = rectangle.y + speed;
                break;
                case 100:                       // d -> right
                    rectangle.x = rectangle.x + speed;
                break;
                case 119:                       // w -> up
                    rectangle.y = rectangle.y - speed;
                break;
                case 13:
                 event.preventDefault();
                break;
            }
        };

        var changeBackground = function(){
            var newIndex = util.getRandomInt(1,10);
            var fancyBackgroundClass = "fancy-background-"+ newIndex;
            // Remove all classes
            $("#my-canvas").removeClass();
            $("#my-canvas").addClass(fancyBackgroundClass);
        }
        self.setup = function(){
            canvas = document.getElementById('my-canvas');
            ctx = canvas.getContext('2d');

            $('body').keypress(keyHandler);
            rectangle.x = 10;
            rectangle.y = 10;
            rectangle.width = 50;
            rectangle.height = 80;
            setInterval(draw, 1000/60);
            setInterval(changeBackground, 5000);
        };


        return self;
    }



    $(document).ready(function(){
        var animation = Animation();
        animation.setup();
    });


})();