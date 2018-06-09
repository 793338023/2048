// JavaScript Document
var grid=new Array();
var hasConflicted=new Array();
	//创建一个开始游戏的函数
$(function(){
	ref();
	});
	//游戏的开始需要一个是初始化棋盘，二是随机生成两个数字格子；
function newGame(){
	ref();
	$("body").scrollTop(200).css("overflow","hidden");
	}
function ref(){
	init();
	randomNum();
	randomNum();
	getScore(0);
	}
function restart(){
	$("#gameover").remove();
	getScore(0);
	newGame();
	}
//初始化棋盘
function init(){
	for(var i=0;i<4;i++){
		grid[i]=new Array();
		hasConflicted[i]=new Array();
		for(var j=0;j<4;j++){
			grid[i][j]=0;
			$("#grid-cell-"+i+"-"+j).css({"top":getPosttop(i,j),"left":getPostleft(i,j)});
			hasConflicted[i][j]=false;
			}
		}
	initgridNum();
	}
//初始化数字格子
function initgridNum(){
	$(".number-cell").remove();
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			$("#grid-container").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
			var numcell=$("#number-cell-"+i+"-"+j);
			if(grid[i][j]==0){
				numcell.css({"width":"0px","height":"0px","top":getPosttop(i,j)+100,"left":getPostleft(i,j)+100});
				}else{
					numcell.css({"width":"100px","height":"100px","top":getPosttop(i,j),"left":getPostleft(i,j)});
					numcell.css({"background":bgColor(grid[i][j]),"color":fcolor(grid[i][j])});
					numcell.text(grid[i][j]);
					}
				nospace(grid);
				noremove(grid);
				hasConflicted[i][j]=false;
			}
		}
	}
function randomNum(){
	if(nospace(grid)){
		return false;
		}
	//生成一个随机的位置
	var randomX=Math.floor(Math.random()*4);
	var randomY=Math.floor(Math.random()*4);
	//判断位置是否为空
	while(true){
		if(grid[randomX][randomY]==0){
			break;
			}
			 randomX=Math.floor(Math.random()*4);
			 randomY=Math.floor(Math.random()*4);
		}
		//生成一个随机的概率来判断生成2或4
		var num=Math.random()>0.5?2:4;
		grid[randomX][randomY]=num;
		showAnimation(randomX,randomY,num);
	}	

