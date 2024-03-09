init = function(){
   setTimeout(function(){
	   allAnimations();
	}, 10);
}

function allAnimations() {

	var animCount = 0;
	var animTimer = setInterval(function(){ theTimer() }, 100);
	

		bg = document.getElementById('bg'),
		logo = document.getElementById('logo'),
		
		copy1a = document.getElementById('copy1a'),
		copy1b = document.getElementById('copy1b'),
		copy1c = document.getElementById('copy1c'),
		copy1d = document.getElementById('copy1d'),
		copy1e = document.getElementById('copy1e'),
		copy1f = document.getElementById('copy1f'),
		copy1g = document.getElementById('copy1g'),
		
		copy2a = document.getElementById('copy2a'),
		copy2b = document.getElementById('copy2b'),
		copy2c = document.getElementById('copy2c'),
		copy2d = document.getElementById('copy2d'),
		copy2e = document.getElementById('copy2e'),
		cta = document.getElementById('cta'),

		road = document.getElementById('road'),
		roadTop = document.getElementById('roadTop'),
		carHolder = document.getElementById('carHolder'),
		
		signLeft = document.getElementById('signLeft'),
		signA = document.getElementById('signA'),
		signB = document.getElementById('signB'),
		signC = document.getElementById('signC'),
		signD = document.getElementById('signD'),
		signE = document.getElementById('signE'),
		signF = document.getElementById('signF'),
		trackerA = document.getElementById('trackerA'),
		trackerB = document.getElementById('trackerB'),	
		
		rightCopy = document.getElementById('rightCopy'),	
		signRight = document.getElementById('signRight'),
		street = document.getElementById('street'),
		
		lineHolder = document.getElementById('lineHolder'),
		streetLines = document.getElementById('streetLines'),
		
		deerHolder = document.getElementById('deerHolder'),
		deerBox = document.getElementById('deerBox'),
		deer = document.getElementById('deer'),
		
		joggerHolder = document.getElementById('joggerHolder'),
		joggerBoxA = document.getElementById('joggerBoxA'),
		joggerBoxB = document.getElementById('joggerBoxB'),
		jogger = document.getElementById('jogger'),
		
		
		
		dotRight = document.getElementById('dottedRight'),
		dotLeft = document.getElementById('dottedLeft');
		
		//start road
		moveRoad();
	//  timings

	


	  function theTimer(){
		if(animCount == 0){
			carHolder.setAttribute('class', 'transition-1 moveDown');
			streetLines.setAttribute('class', 'transition-3 animStreet');
		}  else if(animCount == 18){
			//carHolder.setAttribute('class', 'carBounce');
			signLeft.setAttribute('class', 'transition-3 scaleNormal_move_Left fade-in');
			signRight.setAttribute('class', 'transition-3 scaleNormal_move_Right fade-in');
			dotRight.setAttribute('class', 'transition-3a moveDotRight');
			dotLeft.setAttribute('class', 'transition-3 moveDotLeft');
		} else if(animCount == 23){
			deerHolder.setAttribute('class', 'transition-6 deerScale');
		} else if(animCount == 24){
			deerBox.setAttribute('class', 'transition-4 fade-in boxScale');
			trackerB.setAttribute('class', 'transition-4 trackerBScale');
			signF.setAttribute('class', 'transition-5 fade-in');
		}  else if(animCount == 27){
			joggerHolder.setAttribute('class', 'show');
		}  else if(animCount == 28){
			joggerHolder.setAttribute('class', 'transition-6 show joggerScale');
		}  else if(animCount == 30){
			trackerB.setAttribute('class', 'transition-4');
			signF.setAttribute('class', 'transition-5');
			joggerBoxA.setAttribute('class', 'transition-4 fade-in');
			joggerBoxB.setAttribute('class', 'transition-4 fade-in');
		} else if(animCount == 33){
			trackerA.setAttribute('class', 'transition-4 trackerAScale');
			signE.setAttribute('class', 'transition-5 fade-in');
		}  else if(animCount == 45){
			signLeft.setAttribute('class', 'transition-3 scaleSmall');
			signRight.setAttribute('class', 'transition-3 scaleSmall');
			dotRight.setAttribute('class', 'transition-3a fade-out');
			dotLeft.setAttribute('class', 'transition-3');		
////		}  else if(animCount == 43){
////			carHolder.setAttribute('class', 'stopCar');
////		}  else if(animCount == 44){
////			carHolder.setAttribute('class', 'transition-1 moveUp');
		}  else if(animCount == 59){
			logo.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 62){
			copy1a.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 65){
			copy1b.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 68){
			copy1c.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 71){
			copy1d.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 74){
			copy1e.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 77){
			copy1f.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 80){
			//copy1g.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 90){
			copy1a.setAttribute('class', 'transition-3');
			copy1b.setAttribute('class', 'transition-3');
			copy1c.setAttribute('class', 'transition-3');
			copy1d.setAttribute('class', 'transition-3');
		}  else if(animCount == 91){
			bg.setAttribute('class', 'transition-3 down');
		}  else if(animCount == 94){
			copy2a.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 97){
			copy2b.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 100){
			copy2c.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 103){
			copy2d.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 106){
			//copy2e.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 120){
			cta.setAttribute('class', 'transition-3 fade-in');
		}  else if(animCount == 175){
			clearInterval(animTimer);
		}
		animCount++
	};
	
	function moveRoad(){

		var roadLoop = 2;

		var speed = 8;
		
		var speedTimer = 30;
		var roadEaseOut = false;
		var elem = document.getElementById("road");
		var roadTop = document.getElementById("roadTop");
		var pos = -1750;
		var posX = 10;
		var id = setInterval(frame, 20);
		function frame() {
			//if the road is not ready to ease out
			posX += speed
			elem.style.left = (-20) + posX/105 + 'px';
			//elem.style.left = (-80) + posX/33 + 'px';
			
			if (roadEaseOut == false){
				//if road position is at the bottom
				if (pos >= -750) {
					roadLoop--;
					if(roadLoop<=0){
						pos = -1750;
						elem.style.top = pos + 'px';
						roadTop.style.opacity = 1;
						roadEaseOut = true;						
					}else{
						pos = -1750;
						elem.style.top = pos + 'px';
					}				
				} else {
					pos+=speed;
					elem.style.top = pos + 'px';
				}	
				
			}else{
				speedTimer--;
				if(speedTimer<=0){
					if (speed>0){
						speed-=1;
						speedTimer = 10;
					}
				}
				if (speed<=0){
					clearInterval(id);
				}
				pos+=speed;
				elem.style.top = pos + 'px';
			}
		}
		
	}

}