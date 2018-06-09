// JavaScript Document
var score=0;
$(document).keydown(function(event){
	switch(event.keyCode){
		case 37:         //left
		if(moveLeft()){
			setTimeout("randomNum()",300);
			//要执行isGameOver需要上面的函数执行完才能
			setTimeout(isGameOver,310);
			}
		;break;
		case 38:         //up
		if(moveUp()){
			setTimeout("randomNum()",300);
			setTimeout(isGameOver,310);
			}
		;break;          
		case 39:          //right
		if(moveRight()){
			setTimeout("randomNum()",300);
			setTimeout(isGameOver,310);
			}
		;break;
		case 40:         //down
		if(moveDown()){
			setTimeout("randomNum()",300);
			setTimeout(isGameOver,310);
			}
		;break;
		case 27:
		if($("body").css("overflow")=="hidden"){
			$("body").scrollTop(0).css("overflow","auto");
			};
		}
	});

function moveLeft(){
	if(!canMoveLeft(grid)){
		return false;
		}
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(grid[i][j]!=0){
				for(var k=0;k<j;k++){
					if(grid[i][k]==0&&dnnr(i,j,k,grid)){
						showLeftMove(i,j,i,k);
						grid[i][k]=grid[i][j];
						grid[i][j]=0;
						continue;
						}else if(grid[i][k]==grid[i][j]&&dnnr(i,j,k,grid)&&!hasConflicted[i][k]){
						showLeftMove(i,j,i,k);
						grid[i][k]+=grid[i][j];
						grid[i][j]=0;
						score+=grid[i][k];
						getScore(score);
						hasConflicted[i][k]=true;
						continue;
							}
					}
				}
			}
		}
		setTimeout(initgridNum,200);
		return true;
	}
function moveRight(){
	if(!canMoveRight(grid)){
		return false;
		}
	for(var i=0;i<4;i++){
		for(var j=2;j>=0;j--){
			if(grid[i][j]!=0){
				for(var k=3;k>j;k--){
					if(grid[i][k]==0&&dnnr(i,k,j,grid)){
						showLeftMove(i,j,i,k);
						grid[i][k]=grid[i][j];
						grid[i][j]=0;
						continue;
						}else if(grid[i][k]==grid[i][j]&&dnnr(i,k,j,grid)&&!hasConflicted[i][k]){
						showLeftMove(i,j,i,k);
						grid[i][k]+=grid[i][j];
						grid[i][j]=0;
						score+=grid[i][k];
						getScore(score);
						hasConflicted[i][k]=true;
						continue;
							}
					}
				}
			}
		}
		setTimeout(initgridNum,200);
		return true;
	}
function moveUp(){
	if(!canMoveUp(grid)){
		return false;
		}
	for(var i=1;i<4;i++){
		for(var j=0;j<4;j++){
			if(grid[i][j]!=0){
				for(var k=0;k<i;k++){
					if(grid[k][j]==0&&dnnc(i,k,j,grid)){
						showLeftMove(i,j,k,j);
						grid[k][j]=grid[i][j];
						grid[i][j]=0;
						continue;
						}else if(grid[k][j]==grid[i][j]&&dnnc(i,k,j,grid)&&!hasConflicted[k][j]){
						showLeftMove(i,j,k,j);
						grid[k][j]+=grid[i][j];
						grid[i][j]=0;
						score+=grid[k][j];
						getScore(score);
						hasConflicted[k][j]=true;
						continue;
							}
					}
				}
			}
		}
		setTimeout(initgridNum,200);
		return true;
	}
function moveDown(){
	if(!canMoveDown(grid)){
		return false;
		}
	for(var i=2;i>=0;i--){
		for(var j=0;j<4;j++){
			if(grid[i][j]!=0){
				for(var k=3;k>i;k--){
					if(grid[k][j]==0&&dnnc(k,i,j,grid)){
						showLeftMove(i,j,k,j);
						grid[k][j]=grid[i][j];
						grid[i][j]=0;
						continue;
						}else if(grid[k][j]==grid[i][j]&&dnnc(k,i,j,grid)&&!hasConflicted[k][j]){
						showLeftMove(i,j,k,j);
						grid[k][j]+=grid[i][j];
						grid[i][j]=0;
						score+=grid[k][j];
						getScore(score);
						hasConflicted[k][j]=true;
						continue;
							}
					}
				}
			}
		}
		setTimeout(initgridNum,200);
		return true;
	}
	
function isGameOver(){
	//判断格子是否为空和格子是否可以移动
	if(nospace(grid)&&noremove(grid)){
		gameOver();
		}
	}

function gameOver(){
	alert("Game Over");
	$("#grid-container").append("<div id='gameover' class='gameover'><p>本次游戏结束<br>得分：<span>"+score+"</span><a href='javascript:restart()' id='restartbtn'>RetartGame</a></p></div>");
	}