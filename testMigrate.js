
function runThis() {
var area=document.createElement('div');
document.body.appendChild(area);
var top=document.createElement('div');


top.style.position = 'absolute';
top.style.left ='0px';
top.style.right = '0px';
top.style.top='0px';
top.style.height = '30%';

area.appendChild(top);

	
	var slotarea_c=document.createElement('div');
	
        slotarea_c.style.position='absolute';
        slotarea_c.style.left='50%';
        slotarea_c.style.top='56.7%';
        slotarea_c.style.height='50%';
        slotarea_c.style.width='50%';

	top.appendChild(slotarea_c);
	
	var slotarea=document.createElement('div');
	
        slotarea.style.position='absolute';
        slotarea.style.left='-35%';
        slotarea.style.top='-80%';
        slotarea.style.height='100%';
        slotarea.style.width='25%';
		slotarea.style.paddingRight='35%',
        slotarea.style.border='4px solid lightgrey';
        slotarea.style.borderRadius='2px';
		// slotarea.backgroundColor = 'red';


	var afterSlot=document.createElement('div');

		afterSlot.style.position='absolute';
		afterSlot.style.width='20%';
		afterSlot.style.marginLeft='30%';
		afterSlot.style.marginTop='3%';
		afterSlot.style.border='4px solid lightgrey';

	var beforeSlot=document.createElement('div');

	beforeSlot.style.position = 'absolute';
	beforeSlot.style.width = '20%';
	beforeSlot.style.marginLeft = '-60%';
	beforeSlot.style.marginTop = '3%';
	beforeSlot.style.border = '4px solid lightgrey';

	


	// slotarea_c.appendChild(beforeSlot);
	slotarea_c.appendChild(slotarea);
	slotarea_c.appendChild(beforeSlot);
	slotarea_c.appendChild(afterSlot);
    // slotarea_c.appendChild(afterSlot);
	var w=Math.round(100/5);
	for(var i=0;i<5;i++){
		var s=document.createElement('div');
	
            s.style.position = 'absolute';
            s.style.left = (i*w)+'%';
            s.style.top = '0px';
            s.style.height = '100%';
            s.style.width = w+'%';

		slotarea.appendChild(s);
	}

	var logo = document.createElement('div');
		logo.style.position= 'absolute';
		logo.style.right= '9%';
		logo.style.top= '-4%';
		logo.style.height= '50%';
		logo.style.width= '8%';
		logo.style.backgroundSize= 'contain';
		logo.style.backgroundRepeat= 'no-repeat';
		logo.style.backgroundPosition= 'center';
	
	var reset_b=document.createElement('div');
	

        reset_b.style.position = 'absolute';
        reset_b.style.right = '45%';
        reset_b.style.top = '0%';
        reset_b.style.height = '50%';
        reset_b.style.width = '8%';
        reset_b.style.backgroundSize = 'contain';
        reset_b.style.backgroundRepeat = 'no-repeat';
        reset_b.style.backgroundPosition = 'center';


	
	top.appendChild(reset_b);
	area.appendChild(logo);
	var logoImg = document.createElement("img");
	logoImg.src = "./mag-meg.png"
	logoImg.style.width = '400px';
	logoImg.style.height = '280px';

	var resetImg = document.createElement("img");
	resetImg.src= "./undo.png";
	resetImg.style.height = '50px';
	resetImg.style.width = '50px';
	reset_b.appendChild(resetImg)
	logo.appendChild(logoImg);

	var wordTorque = document.createElement("div");
		wordTorque.style.position= 'absolute';
		wordTorque.style.right= '9%';
		wordTorque.style.top= '84%';
		wordTorque.style.height= '50%';
		wordTorque.style.width= '8%';
		wordTorque.style.backgroundSize= 'contain';
		wordTorque.style.backgroundRepeat= 'no-repeat';
		wordTorque.style.backgroundPosition= 'center';

	var wordTorqueImg = document.createElement("img");
	wordTorqueImg.src = "./thumb_wordtorque logo.png";
	area.appendChild(wordTorque);
	wordTorque.appendChild(wordTorqueImg);

	reset_b.addEventListener('touchstart',function(){
			for(var i=0;i<float_list.length;i++)float_list[i]();
		})
	reset_b.addEventListener('mousedown',function(){
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
	addFloatingBox2(5.5,23.5,w,h,'c',area,bottom,'rgb(161,218,206)',"c");
	addFloatingBox2(11,23.5,w,h,'d',area,bottom,'rgb(161,218,206)',"c");
	addFloatingBox2(16.5,23.5,w,h,'f',area,bottom,'rgb(161,218,206)',"c");
	addFloatingBox2(22,23.5,w,h,'g',area,bottom,'rgb(161,218,206)',"c");
	addFloatingBox2(27.5,23.5,w,h,'h',area,bottom,'rgb(161,218,206)',"c");
	
	addFloatingBox2(0,33.2,w,h,'j',area,bottom,'rgb(252,227,171)',"c");
	addFloatingBox2(5.5,33.2,w,h,'k',area,bottom,'rgb(252,227,171)',"c");
	addFloatingBox2(11,33.2,w,h,'l',area,bottom,'rgb(252,227,171)',"c");
	addFloatingBox2(16.5,33.2,w,h,'m',area,bottom,'rgb(252,227,171)',"c");
	addFloatingBox2(22,33.2,w,h,'n',area,bottom,'rgb(252,227,171)',"c");
	addFloatingBox2(27.5,33.2,w,h,'p',area,bottom,'rgb(252,227,171)',"c");
	
	addFloatingBox2(0,42.9,w,h,'r',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(5.5,42.9,w,h,'s',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(11,42.9,w,h,'t',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(16.5,42.9,w,h,'v',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(22,42.9,w,h,'w',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(27.5,42.9,w,h,'x',area,bottom,'rgb(242,189,217)',"c");
	
	addFloatingBox2(0,52.6,w,h,'y',area,bottom,'rgb(242,189,217)',"c");
	addFloatingBox2(5.5,52.6,w,h,'z',area,bottom,'rgb(242,189,217)',"c");
	
	
	addFloatingBox2(0,62.3,w,h,'sh',area,bottom,'rgb(252,156,132)',"c");
	addFloatingBox2(5.5,62.3,w,h,'ch',area,bottom,'rgb(252,156,132)',"c");
	addFloatingBox2(11,62.3,w,h,'th',area,bottom,'rgb(252,156,132)',"c");
	addFloatingBox2(16.5,62.3,w,h,'ph',area,bottom,'rgb(252,156,132)',"c");
	addFloatingBox2(22,62.3,w,h,'wh',area,bottom,'rgb(241,141,143)',"c");
	
	
	addFloatingBox2(0,72,w,h,'ck',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(5.5,72,w,h,'dg',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(11,72,w,h,'gh',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(16.5,72,w,h,'kn',area,bottom,'rgb(241,141,143)',"c");
	
	
	
	
	
	addFloatingBox2(0,81.7,w,h,'mb',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(5.5,81.7,w,h,'ng',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(11,81.7,w,h,'qu',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(16.5,81.7,w,h,'wr',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(22,81.7,w,h,'tch',area,bottom,'rgb(241,141,143)',"c");
	
	
	
	addFloatingBox2(0,91.4,w,h,'ff',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(5.5,91.4,w,h,'ll',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(11,91.4,w,h,'ss',area,bottom,'rgb(241,141,143)',"c");
	addFloatingBox2(16.5,91.4,w,h,'zz',area,bottom,'rgb(241,141,143)',"c");
	
	
	addFloatingBox2(67.5,23.5,w,h,'a',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(73,23.5,w,h,'e',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(78.5,23.5,w,h,'i',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(84,23.5,w,h,'o',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(89.5,23.5,w,h,'u',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(95,23.5,w,h,'y',area,bottom,'rgb(158,206,220)',"v");
	
	addFloatingBox2(78,35.5,w,h,'ai',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(83.5,35.5,w,h,'au',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(89,35.5,w,h,'aw',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(94.5,35.5,w,h,'ay',area,bottom,'rgb(158,206,220)',"v");
	
	addFloatingBox2(72.5,47.5,w,h,'ea',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(78,47.5,w,h,'ee',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(83.5,47.5,w,h,'ei',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(89,47.5,w,h,'ew',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(94.5,47.5,w,h,'ey',area,bottom,'rgb(158,206,220)',"v");
	
	addFloatingBox2(89,59.5,w,h,'ie',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(94.5,59.5,w,h,'igh',area,bottom,'rgb(158,206,220)',"v");
	
	
	addFloatingBox2(67.5,71,w,h,'oa',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(73,71,w,h,'oi',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(78.5,71,w,h,'oo',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(84,71,w,h,'ou',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(89.5,71,w,h,'ow',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(95,71,w,h,'oy',area,bottom,'rgb(158,206,220)',"v");
	
	
	
	
	
	addFloatingBox2(78.5,82.5,w,h,'ar',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(84,82.5,w,h,'er',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(89.5,82.5,w,h,'ir',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(95,82.5,w,h,'or',area,bottom,'rgb(158,206,220)',"v");
	
	addFloatingBox2(43,42.5,w,h,'re',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox2(48.5,42.5,w,h,'s',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox2(43,54.5,w,h,'un',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox2(48.5,54.5,w,h,'es',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox2(43,66.5,w,h,'ing',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox2(48.5,66.5,w,h,'ed',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox2(43,78,w,h,'er',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox2(48.5,78,w,h,'est',area,bottom,'rgb(158,206,220)',"ps");
	// addFloatingBox2(48.5,82,w,h,'est',area,bottom,'rgb(158,206,220)',"ps");

	//BLANK TILES

	addFloatingBox2(40,91,w,h,' ',area,bottom,'rgb(158,206,220)',"ps");
	addFloatingBox2(45.5,91,w,h,' ',area,bottom,'rgb(158,206,220)',"v");
	addFloatingBox2(51,91,w,h,' ',area,bottom,'rgb(158,206,220)',"c");


// var addLabelBox=function(j,h,text,bottom,color){
// 	var s=document.createElement('div');
// 	opn.set(s.style,{
// 			position:'absolute',
// 			left:'0%',
// 			top:(j*h)+'%',
// 			height:h+'%',
// 			width:'10%',
// 			backgroundColor:'rgb(255,255,255)',
// 			//border : '2px dotted black' ,
// 			fontSize:'20px',
// 			fontWeight:700,
// 			fontFamily:'Arial',
// 			textAlign:'center',
// 			lineHeight:Math.round(bottom.clientHeight/12)+'px',
// 			color:color
// 		});
// 	s.innerHTML=text;
// 	bottom.appendChild(s);
// }
}

var addFloatingBox=function(x,y,w,h,text,area,bottom,color,type){
	var borderType='1px solid red';
	if(type==="c")
	{
		borderType='1px solid blue';
	}
	else if(type==="v")
	{
		borderType='1px solid red';
	}
	else if(type==="ps")
	{
		borderType='1px solid  green';
	}
	var s=document.createElement('div');
	
        s.style.position = 'absolute';
        s.style.left  = x+'%';
        s.style.top = y+'%';
        s.style.height = '5%';
        s.style.width = '5%';
        s.style.userSelect = 'none';
        s.style.border = borderType;
        s.style.borderRadius ='15px';
        s.style.fontSize =Math.round(4*bottom.clientHeight/6)+'%';
        s.style.fontWeight =700;
        s.style.fontFamily ='"Didact Gothic"';
        s.style.textAlign ='center';
        s.style.lineHeight =Math.round(0.35*bottom.clientHeight/6)+'%';
        s.style.color ='black';
        s.style.backgroundColor ='white';
        s.style.boxSizing ='content-box';
        s.style.boxShadow ='2px 2px 2px #888888';
		s.style.paddingTop = '1%';
		s.style.paddingBottom = '1%';



	s.innerHTML=text;
	
	
	
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
			memx=-e.targetTouches[0].clientX+fx;
			memy=-e.targetTouches[0].clientY+fy;
			
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
	s.addEventListener('mousedown',function(e){
			// e.preventDefault();
			e.stopPropagation();
			//float_item . style . opacity = 0.5
			// fx=0;
			// fx=0;
			
			memx=0;
			memy=0;
			console.log(memx);
			console.log(memy);
			console.log("clientY = -e.clientY *****" + -e.clientY + " true y : "+ y  + "****** page y is : " + e.pageY);
			console.log("clientX = -e.clientX *****" + -e.clientX + " true x : "+ x + "****** page x is : " + e.pageX);
			console.log("memx" + memx);
			console.log("memy" + memy);
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

var float_list=[];
var float_item_indx=1;
