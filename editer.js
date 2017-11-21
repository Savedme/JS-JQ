var canvas;
var clearEl = $('clear-canvas');
var target;
$(function () {
    canvas = window._canvas = new fabric.Canvas('c');
    canvas.isDrawingMode= true;
    canvas.renderAll();
    
    var drawingLineWidthEl = $('line_width'),
        drawingOptionsEl = $('drawing-mode-selector');

    /*색상 변경*/
    document.getElementById('pick').addEventListener('click', function (e) {
        target = e.target.id;
        $('#choose_color').val(target);
        console.log(target);
        canvas.freeDrawingBrush.color = target;
    });
    /*선 굵기 변경*/
    
    document.getElementById('drawingLineWidthEl').addEventListener('click', function (e) {
        
       canvas.isDrawingMode = !canvas.isDrawingMode;
        canvas.freeDrawingBrush.width = e;
    
        });
    
    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      });
    }
  };
    
            drawingLineWidthEl.onchange = function() {
    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
    this.previousSibling.innerHTML = this.value;
  };
        
    /*선 모양 변경*/
    
    if (fabric.PatternBrush) {
   


    var squarePatternBrush = new fabric.PatternBrush(canvas);
    squarePatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 2;

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
      var ctx = patternCanvas.getContext('2d');

      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, squareWidth, squareWidth);

      return patternCanvas;
    };

    var diamondPatternBrush = new fabric.PatternBrush(canvas);
    diamondPatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 5;
      var patternCanvas = fabric.document.createElement('canvas');
      var rect = new fabric.Rect({
        width: squareWidth,
        height: squareWidth,
        angle: 45,
        fill: this.color
      });
    
    $('drawing-mode-selector').onchange = function() {

   if (this.value === 'square') {
      canvas.freeDrawingBrush = squarePatternBrush;
    }
    else if (this.value === 'diamond') {
      canvas.freeDrawingBrush = diamondPatternBrush;
    }
    else {
      canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas);
    }
            
    if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    
  }
    
    /*---------------------------------------------------------------*/
    
    document.getElementById('clear-canvas').addEventListener('click', function (e) {
        canvas.clear()
        console.log("전체 지우기 실행");
    });
    $('#choose_color').click(function(){
        $('#choose_color').val("");
    })
    $('#apply_color').click(function(){
        target = $('#choose_color').val();
        console.log(target);
        canvas.freeDrawingBrush.color = target;
    })
});

