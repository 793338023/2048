// JavaScript Document

function getPosttop(i,j){
	return 20+i*120;
	}
function getPostleft(i,j){
	return 20+j*120;
	}
function bgColor(val){
	switch(val){
		case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
		}
	}
function fcolor(val){
	if(val<=4){
		return "#776e65";
		}
		return "#fff";
	}
//判断能否移动，看其傍边为空或为相同值

//left
function canMoveLeft(grid){
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
				if(grid[i][j]!=0){
					if(grid[i][j-1]==0||grid[i][j-1]==grid[i][j]){
						return true;
						}
					}
			}
		}
		return false;
	}
//right
function canMoveRight(grid){
	for(var i=0;i<4;i++){
		for(var j=2;j>=0;j--){
				if(grid[i][j]!=0){
					if(grid[i][j+1]==0||grid[i][j+1]==grid[i][j]){
						return true;
						}
					}
			}
		}
		return false;
	}

//up
function canMoveUp(grid){
	for(var i=1;i<4;i++){
		for(var j=0;j<4;j++){
				if(grid[i][j]!=0){
					if(grid[i-1][j]==0||grid[i-1][j]==grid[i][j]){
						return true;
						}
					}
			}
		}
		return false;
	}
//down
function canMoveDown(grid){
	for(var i=2;i>=0;i--){
		for(var j=0;j<4;j++){
				if(grid[i][j]!=0){
					if(grid[i+1][j]==0||grid[i+1][j]==grid[i][j]){
						return true;
						}
					}
			}
		}
		return false;
	}

function dnnr(row,cos1,cos2,grid){
	for(var i=cos2+1;i<cos1;i++){
		if(grid[row][i]!=0){
			return false;
			}
		}
		return true;
	}
	
	
function dnnc(row1,row2,cos1,grid){
	for(var i=row2+1;i<row1;i++){
		if(grid[i][cos1]!=0){
			return false;
			}
		}
		return true;
	}
	
function getScore(val){
	$("#score").text(val);
	$("#instr .scr span").text(val);
	}


function nospace(grid){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(grid[i][j]==0){
				return false;
				}
			}
		}
		return true;
	}
function noremove(grid){
	if(canMoveLeft(grid) || canMoveRight(grid) || canMoveUp(grid) || canMoveDown(grid)){
		return false;
		}
		return true;
	}



