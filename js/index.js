function getBook(){
	$.get('/all_news',(news)=>{   //news是全部数据库中的数据
		
		for(var i=0;i<news.length;i++){
			var max=news[i];
			for(var j=i+1;j<news.length;j++){
				if(news[i].number1<news[j].number1){
					
					max=news[j];
					news[j]=news[i];
					news[i]=max;
				}
			}  
		}          //对数据进行排序操作，按照被借数量的大小，并放到数组news中
		console.log(news);
		$('#book_list').html('');//选择HTML页面的图书排行榜的位置
		for(var i=0;i<8;i++){
			var tr=$('<tr></tr>');
			var td_1=$('<td></td>');
			var td_2=$('<td class="news_li"></td>');
			var td_3=$('<td></td>');
			var td_4=$('<td></td>');
			td_1.html(`${i+1}`);
			td_2.html(`${news[i].name}`);
			td_3.html(`${news[i].number}`);
			td_4.html(`<div class="bianJi_2" id="selecttor_${i+1}" onclick=xxx();>	预订</div>`)
			tr.append(td_1);
			tr.append(td_2);
			tr.append(td_3);
			tr.append(td_4);
			$('#book_list').append(tr); //append() 方法在被选元素的结尾（仍然在内部）插入指定内容。
			
		}
	});   //将news数组中的数据展示在网页上
	

}
function xxx(){
	layer.alert('确定预借这本图书么', {
    skin: 'layui-layer-molv' //样式类名  自定义样式
    ,closeBtn: 1    // 是否显示关闭按钮 
    ,anim: 1 //动画类型
    ,btn: ['确定','不了'] //按钮
    ,icon: 6    // icon
	,offset: '100px'
    ,yes:function(){
        layer.msg('按钮1')
		console.log(2);
    }
    ,btn2:function(){
        layer.msg('按钮2')
    }});
}   //显示出是否借书的提示


function getBookInfo(){
	var book=document.querySelectorAll(".hot_search a");
	console.log(book[0]);
	for(var i=0;i<book.length;i++){
		book[i].addEventListener('click',function(e){
			var reqx=e.target.innerText;  //点击事件的文本赋予reqx
			$.get('/all_news',(news)=>{
				for(var i=0;i<news.length;i++){
					if(news[i].name==reqx){
						console.log(news[i]);
						var h=JSON.stringify(news[i]); 
						sessionStorage.setItem('1', h);
						window.location.href='book.html';
					}
				}
			});
		});
	}
}       //排行榜根据页面书的名字，将得到数据库中这本书详细信息，并将之暂存到浏览器数据库sessionStorage中，后转到下个book.html页面
function getOne(){
	var bookName=sessionStorage.getItem(2);
	$.get('/all_news',(news)=>{
				for(var i=0;i<news.length;i++){
					if(news[i].name==bookName){
						console.log(news[i]);
						var h=JSON.stringify(news[i]); 
						sessionStorage.setItem('1', h);
						window.location.href='book.html';
					}
				}
			});
	
} //新进图书，得到数据库详细信息，并将之暂存到浏览器数据库sessionStorage中，后转到下个book.html页面
function getTwo(){
	var bookName=sessionStorage.getItem(3);
	$.get('/all_news',(news)=>{
				for(var i=0;i<news.length;i++){
					if(news[i].name==bookName){
						console.log(news[i]);
						var h=JSON.stringify(news[i]); 
						sessionStorage.setItem('1', h);
						window.location.href='book.html';
					}
				}
			});
}
function getThree(){
	var bookName=sessionStorage.getItem(4);
	$.get('/all_news',(news)=>{
				for(var i=0;i<news.length;i++){
					if(news[i].name==bookName){
						console.log(news[i]);
						var h=JSON.stringify(news[i]); 
						sessionStorage.setItem('1', h);
						window.location.href='book.html';
					}
				}
			});
}

function return1(){
	window.location.href='index.html';
}
function getUser(){
	$.get('/users',(users)=>{
		$('#user_info').html('');
		var name=$('<p></p>');
		var p1=$('<p></p>');
		var p2=$('<p></p>');
		var p3=$('<p></p>');
		var p4=$('<p></p>');
		var p5=$('<div class="bianJi" onclick=yyy();><i class="fa fa-eyedropper" aria-hidden="true"></i>编辑资料</div>');
		name.html(`用户名称：${users[0].name}`);
		p1.html(`已借阅过书籍：${users[0].book_all}`);
		p2.html(`预订书籍： ${users[0].book_now}`);
		p3.html(`未还书籍：${users[0].book_return}`);
		p4.html(`个性签名：${users[0].sign}`);
		$('#user_info').append(name);
		$('#user_info').append(p1);
		$('#user_info').append(p2);
		$('#user_info').append(p3);
		$('#user_info').append(p4);
		$('#user_info').append(p5);
		
	
	});
}
function yyy(){
	layer.alert('<div style="width:600px;height:240"><a>昵称</a>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"><br><br><a>个性签名</a><input type="textarea" style="width:200px;height:100px" ></div>', {
    skin: 'layui-layer-molv' //样式类名  自定义样式
    ,closeBtn: 1    // 是否显示关闭按钮 
    ,anim: 1 //动画类型
    ,btn: ['确定'] //按钮
	,offset: '100px'
    ,yes:function(){
        layer.msg('按钮1')
		console.log(2);
    }
   });
}

function getIntroduce(){
	$.get('/all_news',(news)=>{
		for(var i=0;i<3;i++){
			$(`#foot_${i+1}`).html('');
			var  div1=$('<div class="book"></div>');
			var  div2=$('<div class="book_introduce"></div>');
			var h=$('<h4></h4>');
			
			var p=$('<p></p>');
			div1.append(`<img src="${news[i].url}" style="width:200px;height:180px;">`)
			
			h.html(news[i].name);
			sessionStorage.setItem(i+2,news[i].name);
			
			p.html(news[i].introduce);
			div2.append(h);
			div2.append(p);
			$(`#foot_${i+1}`).append(div1);
			$(`#foot_${i+1}`).append(div2);
		}
	});

	
}
$().ready(()=>{
	
	getBook();
	
	getUser();
	
	getIntroduce();
	
	getBookInfo();
	
	
});




