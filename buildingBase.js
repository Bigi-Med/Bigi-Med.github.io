function runThis() {
	
	
		

	var area=document.createElement('div');
	area.style.display='block';
	document.body.appendChild(area);
	var topElement=document.createElement('div');
	
	
	topElement.style.position = 'absolute';
	topElement.style.left ='0px';
	topElement.style.right = '0px';
	topElement.style.top='0px';
	topElement.style.height = '30%';
	// top.style.zIndex = '-10';

area.appendChild(topElement);

	
	var slotarea_c=document.createElement('div');
	
        slotarea_c.style.position='absolute';
        slotarea_c.style.right='1%';
        slotarea_c.style.top='56.7%';
        slotarea_c.style.height='50%';
        slotarea_c.style.width='50%';

	topElement.appendChild(slotarea_c);
	
	var slotareaRight=document.createElement('div');

		slotareaRight.setAttribute("id","box");
		// $(slotareaRight).resizable();
		

			
		  
	

	
	
        // slotarea.style.position='absolute';
        // slotarea.style.left='-25%';
        // slotarea.style.top='-55%';
        // slotarea.style.height='70%';
        // slotarea.style.width='5%';
		// slotarea.style.paddingRight='35%',
        // slotarea.style.border='4px solid red';
        // slotarea.style.borderRadius='2px';
		// slotarea.style.resize='true';
		// slotarea.backgroundColor = 'red';
		
			// const box = document.getElementById('box');
		//   console.log(slotarea.offsetWidth);
			
		  

	var afterSlot=document.createElement('div');
	

	afterSlot.setAttribute("id","afterSlot");

	const orignal = slotareaRight.offsetWidth
	console.log(window.screen.width);
	// function updateAfterSlotPosition() {
	// 	console.log("in update")
	//   const boxRect = slotarea.getBoundingClientRect();
	//   const boxRight = boxRect.left + boxRect.width;
	//   afterSlot.style.left = `${boxRight + 10}px`;
	// }

	

	

  
	// updateAfterSlotPosition();
  
	// slotarea.addEventListener('resize', updateAfterSlotPosition,false);

		// afterSlot.style.position='absolute';
		// afterSlot.style.width='20%';
		// afterSlot.style.marginLeft='18%';
		// afterSlot.style.marginTop='1.2%';
		// afterSlot.style.border='4px solid red';

	var beforeSlot=document.createElement('div');

		beforeSlot.setAttribute("id","beforeSlot");

	// beforeSlot.style.position = 'absolute';
	// beforeSlot.style.width = '20%';
	// beforeSlot.style.marginLeft = '-48%';
	// beforeSlot.style.marginTop = '1.2%';
	// beforeSlot.style.border = '4px solid lightgrey';

	function resizeLeft(e)
	{
	  window.addEventListener('mousemove',mousemove);
	  window.addEventListener('mouseup',mouseup);

	  let prevX = e.x;
	  const leftPanel = slotareaRight.getBoundingClientRect();

	  function mousemove(e)
	  {
		  let newX = prevX - e.x;
		  slotareaRight.style.width = leftPanel.width - e.x + prevX+  "px";
	  }

	  function mouseup() {
		  window.removeEventListener('mousemove', mousemove);
		  window.removeEventListener('mouseup', mouseup);
		  
		}
		
	}



	// slotareaRight.addEventListener('mousedown', resizeLeft);
	


	// slotarea_c.appendChild(beforeSlot);
	slotarea_c.appendChild(slotareaRight);
	slotarea_c.appendChild(beforeSlot);
	slotarea_c.appendChild(afterSlot);
	var originalWidthGlobal = $(slotareaRight).width();
	const myboxRect = slotareaRight.getBoundingClientRect();
	const slotBoxOriginal = /*boxRect.left +*/ myboxRect.width;
	var oldWidth = slotBoxOriginal;
	console.log(slotBoxOriginal);
	const onresize = (dom_elem, callback) => {
		const resizeObserver = new ResizeObserver(() => callback() );
		resizeObserver.observe(dom_elem);
	  }

	  onresize(slotareaRight , function () {
		const boxRect = slotareaRight.getBoundingClientRect();
		const suffixLine = afterSlot.getBoundingClientRect();
		const suffixLineLeft = suffixLine.left - slotarea_c.getBoundingClientRect().left;
	  const boxRight = boxRect.width;
	  console.log("new width" + boxRight);
	  console.log("old width" + oldWidth);
		 afterSlot.style.left = suffixLineLeft + (boxRight-oldWidth) + 'px' ;
		 oldWidth = boxRight; // update oldWidth
	  });

	  console.log("my width is " +$(slotareaRight).width());

    // slotarea_c.appendChild(afterSlot);
	var w=Math.round(100/5);
	for(var i=0;i<5;i++){
		var s=document.createElement('div');
	
            s.style.position = 'absolute';
            s.style.left = (i*w)+'%';
            s.style.top = '0px';
            s.style.height = '100%';
            s.style.width = w+'%';

		slotareaRight.appendChild(s);
	}

	var logo = document.createElement('div');
		logo.style.position= 'absolute';
		logo.style.right= '9%';
		logo.style.top= '0vw';
		logo.style.height= '50%';
		logo.style.width= '8%';
		logo.style.backgroundSize= 'contain';
		logo.style.backgroundRepeat= 'no-repeat';
		logo.style.backgroundPosition= 'center';
		logo.style.zIndex='-10';
	
	var reset_b=document.createElement('div');
	

        reset_b.style.position = 'absolute';
        reset_b.style.left = '10%';
        reset_b.style.bottom = '60%';
        reset_b.style.height = '5%';
        reset_b.style.width = '8%';
        reset_b.style.backgroundSize = 'contain';
        reset_b.style.backgroundRepeat = 'no-repeat';
        reset_b.style.backgroundPosition = 'center';


	var plusSign = document.createElement('div');

		plusSign.style.position = 'absolute';
		plusSign.style.left = '20%';
		plusSign.style.bottom = '40%';
		plusSign.style.height = '3vw';
		plusSign.style.width = '3vw';
		plusSign.style.backgroundSize = 'contain';
		plusSign.style.backgroundRepeat = 'no-repeat';
		plusSign.style.backgroundPosition = 'center';
		var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

		// Add the appropriate event listener based on the device type
		if (isTouchDevice) {
			plusSign.addEventListener('touchstart', handlePlusButtonClick);
		} else {
			plusSign.addEventListener('click', handlePlusButtonClick);
		}

	var minusSign = document.createElement('div');

		minusSign.style.position = 'absolute';
		minusSign.style.left = '15%';
		minusSign.style.bottom = '40%';
		minusSign.style.height = '3vw';
		minusSign.style.width = '3vw';
		minusSign.style.backgroundSize = 'contain';
		minusSign.style.backgroundRepeat = 'no-repeat';
		minusSign.style.backgroundPosition = 'center';
		var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

		// Add the appropriate event listener based on the device type
		if (isTouchDevice) {
			minusSign.addEventListener('touchstart', handleMinusButtonClick);
		} else {
			minusSign.addEventListener('click', handleMinusButtonClick);
		}

		




	topElement.appendChild(reset_b);
	topElement.appendChild(plusSign);
	topElement.appendChild(minusSign);
	area.appendChild(logo);
	var logoImg = document.createElement("img");
	logoImg.src = "./mag-meg.png"
	logoImg.style.width = '15vw';
	logoImg.style.height = '10vw';

	var resetImg = document.createElement("img");
	resetImg.src= "./undo.png";
	resetImg.style.height = '3vw';
	resetImg.style.width = '3vw';
	resetImg.style.transform = 'rotate(-30deg)';

	var plusImg = document.createElement("img");
	plusImg.src= "./plus-removebg-preview.png";
	plusImg.style.height = '3vw';
	plusImg.style.width = '3vw';
	
	var minusImg = document.createElement("img");
	minusImg.src= "./minus.png";
	minusImg.style.height = '100%';
	minusImg.style.width = '100%';

	


	function handlePlusButtonClick(event) {
		// Perform the action you want the plus button to do here
			var originalWidth = $(slotareaRight).width();
			$(slotareaRight).width(originalWidth+originalWidthGlobal*36/100);
			originalWidth = $(slotareaRight).width();

		// Prevent event propagation (comment this line if you want the event to propagate)
		event.stopPropagation();
	  }

	  function handleMinusButtonClick(event) {
		// Perform the action you want the minus button to do here
			var originalWidth = $(slotareaRight).width();
			$(slotareaRight).width(originalWidth-originalWidthGlobal*36/100);
			originalWidth = $(slotareaRight).width();
		event.stopPropagation();
	  }


	plusSign.appendChild(plusImg)
	minusSign.appendChild(minusImg)
	reset_b.appendChild(resetImg)
	logo.appendChild(logoImg);

		var link = document.createElement("a");
		link.href = "https://wordtorque.com/";
		link.target = "_blank";
	var wordTorqueImg = document.createElement("img");
	wordTorqueImg.src = "./wordtorque-removebg.png";
	wordTorqueImg.style.position= 'absolute';
	wordTorqueImg.style.right= '6%';
	wordTorqueImg.style.top= '87%';
	wordTorqueImg.style.height= '10.18%';
	wordTorqueImg.style.width= '15%';
	 wordTorqueImg.style.zIndex='4';

	link.appendChild(wordTorqueImg);
	// link.addEventListener("click", function() {
	// 	window.open(link.href, '_blank');
	// });
	document.body.appendChild(link);

	

	var buildingBase = document.createElement("div");
	buildingBase.style.position = 'absolute';
	buildingBase.style.left = '1%'
	buildingBase.style.bottom = '50%';
	buildingBase.style.height='50%';
	buildingBase.style.width='8%';
	buildingBase.style.backgroundSize = 'contain';
	buildingBase.style.backgroundRepeat = 'no-repeat';
	buildingBase.style.backgroundPosition = 'center';

	var buildingBaseImg = document.createElement("img");
	buildingBaseImg.src='Building Bases Board.png';
	buildingBaseImg.style.height = '4vw';
	buildingBaseImg.style.width = '20vw';
	area.appendChild(buildingBase);
	buildingBase.appendChild(buildingBaseImg);

	reset_b.addEventListener('touchstart',function(){
		$(slotareaRight).width(originalWidthGlobal);
		for(var i=0;i<float_list.length;i++)float_list[i]();
		})
	reset_b.addEventListener('mousedown',function(){
		$(slotareaRight).width(originalWidthGlobal);
		for(var i=0;i<float_list.length;i++)float_list[i]();
		})
	
	// var info_b=document.createElement('div');
	// opn.set(info_b.style,{
	// 		position:'absolute',
	// 		left:'5%',
	// 		top:'25%',
	// 		height:'50%',
	// 		width:'8%',
	// 		backgroundSize:'contain',
	// 		backgroundRepeat:'no-repeat',
	// 		backgroundPosition:'center'
	// 	});
	
	// top.appendChild(info_b);
	// top.appendChild(info_b);
	// info_b.addEventListener('touchstart',function(e){
	// 		e.stopPropagation();
	// 		e.preventDefault();
	// 		questionmark_click();
	// 	})
	// info_b.addEventListener('mousedown',function(e){
	// 		e.stopPropagation();
	// 		e.preventDefault();
	// 		questionmark_click();
	// 	})
	
	
	var prefixFrame=document.createElement('div');
	
	prefixFrame.style.position='absolute';
	prefixFrame.style.left='82.5%';
	prefixFrame.style.top='22%';
	prefixFrame.style.height='65%';
	prefixFrame.style.width='12%';
	prefixFrame.style.paddingRight='0%',
	prefixFrame.style.border='4px solid';
	prefixFrame.style.borderColor='#6aa84f';
	prefixFrame.style.borderRadius='2px';
	prefixFrame.style.zIndex='-1';
	
	area.appendChild(prefixFrame);
	
	var bottom=document.createElement('div');

        bottom.style.position = 'absolute';
        bottom.style.left = '0px';
        bottom.style.right = '0px';
        bottom.style.bottom = '0px';
        bottom.style.height = '70%';
	area.appendChild(bottom);
	
	// var ufli=document.createElement('div');
	// opn.set(ufli.style,{
	// 		position:'absolute',
	// 		right:'0px',
	// 		width:'10%',
	// 		bottom:'0px',
	// 		height:'10%',
	// 		backgroundSize:'contain',
	// 		backgroundPosition:'center',
	// 		backgroundRepeat:'no-repeat',
	// 		cursor:'pointer'
	// 	});
	
					
			
	// */
	// area.appendChild(ufli);
	// ufli.addEventListener('mousedown',function(e){
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		open('https://education.ufl.edu/ufli/','_blank');
	// 	});
	// ufli.addEventListener('touchstart',function(e){
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		open('https://education.ufl.edu/ufli/','_blank');
	// 	});
	
	var w=Math.round(40/5);
	var h=Math.round(100/6);
	// addLabelBox(0,h,'Consonant Digraphs',bottom,'rgb(70,135,113)');
	// addLabelBox(1,h,'R-Controlled Vowels',bottom,'rgb(255,211,0)');
	// addLabelBox(2,h,'Vowel Teams',bottom,'rgb(255,100,255)');
	// addLabelBox(3,h,'Vowel Teams',bottom,'rgb(255,100,255)');
	// addLabelBox(4,h,'Diphthongs',bottom,'rgb(255,165,0)');
	// addLabelBox(5,h,'Other',bottom,'rgb(180,0,0)');
	
	var w=Math.round(40/5);
	var h=Math.round(100/6);
	var h=Math.round(h*0.7*0.9);
	var w=Math.round(w*0.9);
	
	addFloatingBox2(0,23.5,w,h,'b',area,bottom,'rgb(161,218,206)',"c");
	addFloatingBox2(6,23.5,w,h,'c',area,bottom,'rgb(161,218,206)',"c");
	addFloatingBox2(12,23.5,w,h,'d',area,bottom,'rgb(161,218,206)',"c");
	addFloatingBox2(18,23.5,w,h,'f',area,bottom,'rgb(161,218,206)',"c");
	addFloatingBox2(24,23.5,w,h,'g',area,bottom,'rgb(161,218,206)',"c");
	addFloatingBox2(30,23.5,w,h,'j',area,bottom,'rgb(161,218,206)',"c");
	
	addFloatingBox2(0,33.5,w,h,'h',area,bottom,'rgb(252,227,171)',"c");
	addFloatingBox2(6,33.5,w,h,'k',area,bottom,'rgb(252,227,171)',"c");
	addFloatingBox2(12,33.5,w,h,'l',area,bottom,'rgb(252,227,171)',"c");
	addFloatingBox2(18,33.5,w,h,'m',area,bottom,'rgb(252,227,171)',"c");
	addFloatingBox2(24,33.5,w,h,'n',area,bottom,'rgb(252,227,171)',"c");
	addFloatingBox2(30,33.5,w,h,'p',area,bottom,'rgb(252,227,171)',"c");
	
	addFloatingBox2(0,43.5,w,h,'r',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(6,43.5,w,h,'s',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(12,43.5,w,h,'t',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(18,43.5,w,h,'v',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(24,43.5,w,h,'w',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(30,43.5,w,h,'x',area,bottom,'rgb(242,189,217)',"c");
	
	addFloatingBox2(0,53.5,w,h,'y',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(6,53.5,w,h,'z',area,bottom,'rgb(242,189,217)',"c");
	
	
	addFloatingBox2(0,63.5,w,h,'ch',area,bottom,'rgb(252,156,132)',"c");
	addFloatingBox2(6,63.5,w,h,'gh',area,bottom,'rgb(252,156,132)',"c");
	addFloatingBox2(12,63.5,w,h,'ph',area,bottom,'rgb(252,156,132)',"c");
	addFloatingBox2(18,63.5,w,h,'sh',area,bottom,'rgb(252,156,132)',"c");
	addFloatingBox2(24,63.5,w,h,'th',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(30,63.5,w,h,'wh',area,bottom,'rgb(241,141,143)',"c");
	
	
	addFloatingBox2(0,73.5,w,h,'ck',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(6,73.5,w,h,'dg',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(12,73.5,w,h,'kn',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(18,73.5,w,h,'mb',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(24,73.5,w,h,'ng',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(30,73.5,w,h,'qu',area,bottom,'rgb(241,141,143)',"c");
	
	
	
	
	
	addFloatingBox2(0,83.5,w,h,'tch',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(6,83.5,w,h,'ff',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(12,83.5,w,h,'ll',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(18,83.5,w,h,'ss',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(24,83.5,w,h,'zz',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(30,83.5,w,h,'ugh',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox5(37,83.5,w,h,' ',area,bottom,'rgb(158,206,220)',"c");

	
	
	
	// addFloatingBox2(0,91.4,w,h,'ff',area,bottom,'rgb(241,141,143)',"c");
	// addFloatingBox2(5.5,91.4,w,h,'ll',area,bottom,'rgb(241,141,143)',"c");
	// addFloatingBox2(11,91.4,w,h,'ss',area,bottom,'rgb(241,141,143)',"c");
	// addFloatingBox2(16.5,91.4,w,h,'zz',area,bottom,'rgb(241,141,143)',"c");
	
	
	addFloatingBox2(39,23.5,w,h,'a',area,bottom,'rgb(158,206,220)',"v");//move by 6
	addFloatingBox2(45,23.5,w,h,'e',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(51,23.5,w,h,'i',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(57,23.5,w,h,'o',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(63,23.5,w,h,'u',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(69,23.5,w,h,'y',area,bottom,'rgb(158,206,220)',"v");
	
	addFloatingBox2(39,33.5,w,h,'ai',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(45,33.5,w,h,'au',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(51,33.5,w,h,'aw',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(57,33.5,w,h,'ay',area,bottom,'rgb(158,206,220)',"v");
	
	addFloatingBox2(39,43.5,w,h,'ea',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(45,43.5,w,h,'ee',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(51,43.5,w,h,'ei',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(57,43.5,w,h,'ew',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(63,43.5,w,h,'ey',area,bottom,'rgb(158,206,220)',"v");
	
	addFloatingBox2(39,53.5,w,h,'ie',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(45,53.5,w,h,'igh',area,bottom,'rgb(158,206,220)',"v");
	
	
	addFloatingBox2(39,63.5,w,h,'oa',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(45,63.5,w,h,'oi',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(51,63.5,w,h,'oo',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(57,63.5,w,h,'ou',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(63,63.5,w,h,'ow',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(69,63.5,w,h,'oy',area,bottom,'rgb(158,206,220)',"v");
	
	
	
	
	
	addFloatingBox2(39,73.5,w,h,'ar',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(45,73.5,w,h,'er',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(51,73.5,w,h,'ir',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(57,73.5,w,h,'or',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(63,73.5,w,h,'ur',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox5(69,73.5,w,h,' ',area,bottom,'rgb(158,206,220)',"v");
	
	addFloatingBox(83,23.5,w,h,'re',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox(89,23.5,w,h,'un',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox(83,37.5,w,h,'ing',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox(89,37.5,w,h,'ed',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox(83,47.5,w,h,'s',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox(89,47.5,w,h,'es',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox(83,57.5,w,h,'er',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox(89,57.5,w,h,'est',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox(83,67.5,w,h,'ly',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox(89,67.5,w,h,'ful',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox(83,77.5,w,h,'y',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox5(89,77.5,w,h,' ',area,bottom,'rgb(158,206,220)',"ps");

	//BLANK TILES




}

var addFloatingBox=function(x,y,w,h,text,area,bottom,color,type){
	var borderType='1px solid red';
	var myColor = '#1fcfe6';
	if(type==="c")
	{
		borderType='3px solid ';
		myColor = '#0096cc';
		x = x+1;
	}
	else if(type==="v")
	{
		borderType='3px solid ';
		myColor='#cc3600';
		x = x-1;

	}
	else if(type==="ps")
	{
		borderType='3px solid';
		myColor = '#6aa84f';

	}
	var s=document.createElement('div');
	s.setAttribute("id","fontChange");
// 	var styleElement = document.createElement('style');
// 	document.head.appendChild(styleElement);
// styleElement.textContent = `
//   @font-face {
//     font-family: 'Didact Gothic';
//     src: url('DidactGothic-Regular.woff2') format('woff2'),
//          url('DidactGothic-Regular.woff') format('woff');
//     font-weight: normal;
//     font-style: normal;
//   }
// `;
// font.load.then(()=>{

	s.style.position = 'absolute';
	s.style.left  = x+'%';
	s.style.top = y+'%';
	s.style.height = '3.8%';
	s.style.width = '5.2%';
	s.style.userSelect = 'none';
	s.style.border = borderType;
	s.style.borderColor = myColor;
	s.style.borderRadius ='15px';
	// s.style.fontSize =Math.round(4*bottom.clientHeight/6)+'%';
	s.style.fontSize = "3vw";
	s.style.fontWeight =200;
	s.style.fontFamily ='My font';
	s.style.textAlign='center';
	s.style.lineHeight =Math.round(0.5*bottom.clientHeight/6)+'%';
	s.style.lineHeight ='2vw';
	s.style.color ='black';
	s.style.backgroundColor ='white';
	s.style.boxSizing ='content-box';
	// s.style.boxShadow ='2px 2px 2px #888888';
	s.style.paddingTop = '0.7%';
	// s.style.paddingLeft= '1.5%';
	s.style.paddingBottom = '1.2%';
		
	// });
		



	s.innerHTML=text;
	
	// area.style.zIndex = "40";
	
	area.appendChild(s);
	
	
	float_list.push(function(){
			fx=Math.round(x*area.clientWidth/100);
			fy=Math.round(y*area.clientHeight/100);
			s.style.left=x+'%';
			s.style.top=y+'%';
			// s.style.fontSize=Math.round(0.6*0.9*bottom.clientHeight/6)+'px';
			// s.style.paddingBottom=Math.round(0.6*0.9*bottom.clientHeight/6)+'px';//25px
			// s.style.lineHeight=Math.round(0.9*bottom.clientHeight/6)+'px';
		})
	
	var mt=function(e){
		e.preventDefault();
		fx=memx+e.targetTouches[0].clientX;
		fy=memy+e.targetTouches[0].clientY;
		s.style.left=fx+'px';
		s.style.top=fy+'px';
	}
	var ut=function(e){
		//float_item . style . opacity = 1 ;
		s.style.boxShadow='2px 2px 2px #888888';
		document.removeEventListener('touchend',ut,true);
		document.removeEventListener('touchmove',mt,true);
		document.removeEventListener('touchleave',ut,true);
	}
	var memx,memy;
	var fx=Math.round(x*area.clientWidth/100);
	var fy=Math.round(y*area.clientHeight/100);
	s.addEventListener('touchstart',function(e){
			e.preventDefault();
			e.stopPropagation();
			//float_item . style . opacity = 0.5
			// memx=-e.targetTouches[0].clientX+fx;
			// memy=-e.targetTouches[0].clientY+fy;
			memx=-60;
			memy=-48;
			
			s.style.zIndex=float_item_indx;
			s.style.boxShadow='10px 10px 8px rgba(20,20,20,0.5)';
			float_item_indx+=1;
			
			document.addEventListener('touchmove',mt,true);
			document.addEventListener('touchend',ut,true);
			document.addEventListener('touchleave',ut,true);
		})
	
	var mo=function(e){
		e.preventDefault();
		fx=memx+e.clientX;
		fy=memy+e.clientY;
		s.style.left=fx+'px';
		s.style.top=fy+'px';
	}
	var up=function(e){
		//float_item . style . opacity = 1 ;
		s.style.boxShadow='2px 2px 2px #888888';
		document.removeEventListener('mouseup',up,true);
		document.removeEventListener('mousemove',mo,true);
		
	}
	var memx,memy;
	var fx=Math.round(x*area.clientWidth/100);
	var fy=Math.round(y*area.clientHeight/100);
	console.log("client height" + s.getBoundingClientRect().height);
	s.addEventListener('mousedown',function(e){
			e.preventDefault();
			e.stopPropagation();
			//float_item . style . opacity = 0.5
			memx=-70;
			memy=-48;
			
			console.log("memx " + memx);
			console.log("memy " + memy);
			console.log("fx" + fx);
			console.log("fy" + fy);
			console.log("clientY = -e.clientY *****" + -e.clientY + " true y : "+ y  + "****** page y is : " + e.pageY);
			console.log("clientX = -e.clientX *****" + -e.clientX + " true x : "+ x + "****** page x is : " + e.pageX);
			s.style.zIndex=float_item_indx;
			s.style.boxShadow='10px 10px 8px rgba(20,20,20,0.5)';
			float_item_indx+=1;
			
			document.addEventListener('mousemove',mo,true);
			document.addEventListener('mouseup',up,true);
			console.log('clicked');
		})
	
}

var addFloatingBox2=function(x,y,w,h,text,area,bottom,color,type){
	for(var i=0;i<2;i++)
	addFloatingBox(x,y,w,h,text,area,bottom,color,type);
	
}

var addFloatingBox5=function(x,y,w,h,text,area,bottom,color,type){
	for(var i=0;i<5;i++)
	addFloatingBox(x,y,w,h,text,area,bottom,color,type);
	
}

// function updateAfterSlotPosition() {

// 	var box=document.getElementById('box');

// 	const boxRect = box.getBoundingClientRect();
// 	const boxRight = boxRect.left + boxRect.width;
// 	var afterSlot = document.getElementById('afterSlot');
// 	console.log("in update function")
// 	afterSlot.style.left = `${boxRight + 10}px`;
//   }

var float_list=[];
var float_item_indx=1;