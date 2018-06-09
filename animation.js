// JavaScript Document

function showAnimation(i,j,num){
	//获取当前数字格
	var numCell=$("#number-cell-"+i+"-"+j);
	//设置当前数字格样式
	numCell.css({"background":bgColor(num),"color":fcolor(num)});
	numCell.animate({"width":"100px","height":"100px","top":getPosttop(i,j),"left":getPostleft(i,j)},50);
	numCell.text(num);
	}

function showLeftMove(i1,j,i2,k){
	//原来位置
	var numCell=$("#number-cell-"+i1+"-"+j);
	//变化后的位置，实现从原来的位置到变化后的位置的动画改变
	numCell.animate({top:getPosttop(i2,k),left:getPostleft(i2,k)},200);
	}