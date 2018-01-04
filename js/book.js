$().ready(()=>{
	var news = sessionStorage.getItem("1"); //书籍详情页数据的显示
	var y=JSON.parse(news);
	console.log(news);
	inFO(y);
});

function inFO(x){
	$('#bookinfo').html('');
	var div1=$(`<div  class="img_book"><img src="${x.url}" style="width:200px;height:180px;"></div>`);
	var div2=$('<div class="content"></div>');
	var h=$('<h3></h3>');
	var p1=$('<p></P>');
	var p2=$('<p></P>');
	var p3=$('<p></P>');
	var p4=$('<p></P>');
	var div3=$('<div class="bianJi" onclick=sure();><i class="fa fa-eyedropper" aria-hidden="true"></i>预订</div><br><br>');
	var div4=$('<div class="bianJi" onclick=return1();>返回首页</div>');
	h.html(x.name);
	p1.html(x.author);
	p2.html(x.number1);
	p3.html(x.number);
	p4.html(x.introduce);
	
	div2.append(h);
	div2.append(p1);
	div2.append(p2);
	div2.append(p3);
	div2.append(p4);
	$('#bookinfo').append(div1);
	$('#bookinfo').append(div2);
	$('#bookinfo').append(div3);
	$('#bookinfo').append(div4);
	
	
}