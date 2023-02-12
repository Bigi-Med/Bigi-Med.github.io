// preload('Menu');
// preload('Window');
// preload('CreditsScreen').before(function(args){
// 		args.app.showLoading();
// 	});

var main=function(args){
	if(false&&document.fonts.check('1em Didact Gothic')){
		start(args);
	}else
	loadAsset('DidactGothic-Regular.ttf').then(function(url){
			var font=new FontFace('Didact Gothic','url('+url+')');
			font.load().then(function(loaded_face){
					document.fonts.add(loaded_face);
					start(args);
				});
		});
}

var start=function(args)
{
	args.app.clearContents();
	var area=document.createElement('div');
	
	
	var menubar;
	
	var showHelpWindow;
	
	if(args.app.isWindowed()){
		
		var wind=args.app.getWindow();
		
		wind.whenResized().then((wind)=>{
				for(var i=0;i<float_list.length;i++)float_list[i]();
			})
		
		var menulayout=new MenuLayout();
		menubar=menulayout.getMenuBar();
		wind.getContent().append(menulayout);
		menulayout.getContainer().div.appendChild(area);
		
		showHelpWindow=function(){
			var w2=wind.getWindowContainer().append(new Window({title:"Help"}));
			w2.setSize(900,850);
			w2.center();
			w2.block();
			var div=document.createElement('div');
			opn.set(div.style,{
					position:'absolute',
					display:'block',
					top:'0px',
					bottom:'0px',
					left:'0px',
					right:'0px',
					backgroundColor:'white',
					overflow:'hidden'
				});
			w2.getContentDiv().appendChild(div);
			div.appendChild(cs.getDiv());
			cs.getDiv().style.display='block';
			cs.x_div.style.display='none';
		}
		
		menubar.append(new MenuItem('Help')).whenClicked().then((item)=>{
				showHelpWindow();
			});
		
	}else{
		args.app.getContentDiv().appendChild(area);
	}
	
	
	
	opn.set(area.style,{
			position:'absolute',
			display:'block',
			top:'0px',
			bottom:'0px',
			left:'0px',
			right:'0px',
			backgroundColor:'white',
			overflow:'hidden'
		});
	
	area.addEventListener('touchstart',function(e){
			e.preventDefault();
		});
	
	var top=document.createElement('div');
	opn.set(top.style,{
			position:'absolute',
			left:'0px',
			right:'0px',
			top:'0px',
			height:'30%'
			//backgroundColor : 'rgb(255,200,200)'
		});
	area.appendChild(top);
	
	var slotarea_c=document.createElement('div');
	opn.set(slotarea_c.style,{
			position:'absolute',
			left:'50%',
			top:'50%',
			height:'50%',
			width:'50%'
		});
	top.appendChild(slotarea_c);
	
	var slotarea=document.createElement('div');
	opn.set(slotarea.style,{
			position:'absolute',
			left:'-30%',
			top:'-75%',
			height:'100%',
			width:'60%',
			border:"4px solid lightgrey",
			borderRadius:"2px"
			//backgroundColor : 'rgb(200,200,200)'
		});
	var beforeSlot=document.createElement('div');
	opn.set(beforeSlot.style,{
			position:'absolute',
			
			width:'20%',
			marginLeft:'35%',
			marginTop:'3%',
			// top:'-50%',
			border:"4px solid lightgrey",
			
		});
	var afterSlot=document.createElement('div');
	opn.set(afterSlot.style,{
			position:'absolute',
			width:'20%',
			marginLeft:'-55%',
			marginTop:'3%',
			border:"4px solid lightgrey"
		})
	slotarea_c.appendChild(afterSlot);
	slotarea_c.appendChild(beforeSlot);
	slotarea_c.appendChild(slotarea);
	var w=Math.round(100/5);
	for(var i=0;i<5;i++){
		var s=document.createElement('div');
		opn.set(s.style,{
				position:'absolute',
				left:(i*w)+'%',
				top:'0px',
				height:'100%',
				width:w+'%',
				// border:'3px solid black'
				
			});
		slotarea.appendChild(s);
	}
	
	
	var reset_b=document.createElement('div');
	opn.set(reset_b.style,{
			position:'absolute',
			right:'5%',
			top:'25%',
			height:'50%',
			width:'8%',
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center'
		});
	loadAsset('undo.png').then(function(url){
			reset_b.style.backgroundImage='url("'+url+'")';
		})
	top.appendChild(reset_b);
	reset_b.addEventListener('touchstart',function(){
			for(var i=0;i<float_list.length;i++)float_list[i]();
		})
	reset_b.addEventListener('mousedown',function(){
			for(var i=0;i<float_list.length;i++)float_list[i]();
		})
	
	var info_b=document.createElement('div');
	opn.set(info_b.style,{
			position:'absolute',
			left:'5%',
			top:'25%',
			height:'50%',
			width:'8%',
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			backgroundPosition:'center'
		});
	// loadAsset('UFLI.jpg').then(function(url){
	// 		info_b.style.backgroundImage='url("'+url+'")';
	// 	})
	top.appendChild(info_b);
	var questionmark_click=function(){
		if(menubar){
			showHelpWindow();
			return;
		}
		
		cs.getDiv().style.zIndex=float_item_indx;
		float_item_indx+=1;
		cs.getDiv().style.display='block';
	};
	top.appendChild(info_b);
	info_b.addEventListener('touchstart',function(e){
			e.stopPropagation();
			e.preventDefault();
			questionmark_click();
		})
	info_b.addEventListener('mousedown',function(e){
			e.stopPropagation();
			e.preventDefault();
			questionmark_click();
		})
	
	var cs=new CreditsScreen(args.app.getId(),'Word Work Mat - Intermediate','Use the letter cards to make words!'+'<br><br> This app was developed at the University of Florida as a collaboration between the Digital Worlds Institute, Valentina Contesse, M.Ed., P. K. Yonge Developmental Research School, and the UF Literacy Institute.',
		'https://www.youtube.com/embed/6uSlR9yFsX4?feature=oembed'
	);
	area.appendChild(cs.getDiv());
	
	
	var bottom=document.createElement('div');
	opn.set(bottom.style,{
			position:'absolute',
			left:'0px',
			right:'0px',
			bottom:'0px',
			height:'70%'
			//backgroundColor : 'rgb(200,200,200)'
		});
	area.appendChild(bottom);
	
	var ufli=document.createElement('div');
	opn.set(ufli.style,{
			position:'absolute',
			right:'0px',
			width:'10%',
			bottom:'0px',
			height:'10%',
			backgroundSize:'contain',
			backgroundPosition:'center',
			backgroundRepeat:'no-repeat',
			cursor:'pointer'
		});
	/*loadAsset('UFLI.jpg').then(function(url){
												ufli.style.backgroundImage='url("'+url+'")';
											})
								
					
			
	*/
	area.appendChild(ufli);
	ufli.addEventListener('mousedown',function(e){
			e.preventDefault();
			e.stopPropagation();
			open('https://education.ufl.edu/ufli/','_blank');
		});
	ufli.addEventListener('touchstart',function(e){
			e.preventDefault();
			e.stopPropagation();
			open('https://education.ufl.edu/ufli/','_blank');
		});
	
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
}

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
	opn.set(s.style,{
			position:'absolute',
			left:x+'%',
			top:y+'%',
			height:'5%',
			width:'5%',
			userSelect:'none',
			border:borderType,
			borderRadius:'15px',
			fontSize:Math.round(1.5*0.6*0.9)+'px',
			fontWeight:700,
			fontFamily:'"Didact Gothic"',
			textAlign:'center',
			lineHeight:Math.round(0.9*bottom.clientHeight/6)+'px',
			color:'black',
			backgroundColor:'white',
			boxSizing:'content-box',
			boxShadow:'2px 2px 2px #888888'
		});
	s.innerHTML=text;
	
	
	
	area.appendChild(s);
	
	
	float_list.push(function(){
			fx=Math.round(x*area.clientWidth/100);
			fy=Math.round(y*area.clientHeight/100);
			s.style.left=x+'%';
			s.style.top=y+'%';
			s.style.fontSize=Math.round(0.6*0.9*bottom.clientHeight/6)+'px';
			s.style.paddingBottom=Math.round(0.6*0.9*bottom.clientHeight/6)+'px';//25px
			s.style.lineHeight=Math.round(0.9*bottom.clientHeight/6)+'px';
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
			e.preventDefault();
			e.stopPropagation();
			//float_item . style . opacity = 0.5
			memx=-e.clientX+fx;
			memy=-e.clientY+fy;
			
			s.style.zIndex=float_item_indx;
			s.style.boxShadow='10px 10px 8px rgba(20,20,20,0.5)';
			float_item_indx+=1;
			
			document.addEventListener('mousemove',mo,true);
			document.addEventListener('mouseup',up,true);
		})
}

var addFloatingBox2=function(x,y,w,h,text,area,bottom,color,type){
	for(var i=0;i<2;i++)
	addFloatingBox(x,y,w,h,text,area,bottom,color,type);
	
}

var float_list=[];
var float_item_indx=1;