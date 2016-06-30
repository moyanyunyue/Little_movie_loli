function get_db_movie(){
	var sk = $.trim($("#search_key").val());
	if(sk.length == 0) {
		$("#search_key").focus();
		return false;
	}
	$.ajax({
		url: 'https://api.douban.com/v2/movie/search',
		dataType: 'jsonp',
		Method: 'get',
		data:{
		      'q': sk
		    },
		success: function (ret) {
			var t_media = $('#t_media').html();
			var re_html = "";
			var count=0;
			if(ret.total > 0){
				//console.log(ret);
				$(ret.subjects).each(function (i, o) {
					if(o.subtype == 'movie' || o.subtype == 'tv') {
						//导演
						var temp_content = "导演：";
						for (var i = o.directors.length - 1; i >= 0; i--) {
							temp_content += o.directors[i].name + "/";
						};
						temp_content = temp_content.substring(0,temp_content.length-1);
						//演职员
						temp_content += "<br>主演：";
						for (var i = o.casts.length - 1; i >= 0; i--) {
							temp_content += o.casts[i].name + "/";
						};

						temp_content = temp_content.substring(0,temp_content.length-1);
						re_html += t_media.replace(/\[media_link\]/, o.alt)
						.replace(/\[media_img\]/, o.images.small)
						.replace(/\[title\]/g, o.title)
						.replace(/\[original_title\]/, o.original_title)
						.replace(/\[media_content\]/, temp_content)
						.replace(/\[genres\]/, o.genres)
						.replace(/\[average\]/, o.rating.average);

						$("#box_main").html(re_html);
						count++;
					}
			          });
				$("#monitor").text(count+"条"+ret.title);
			}
			else{
				$("#monitor").text('豆瓣没有这个咋办');
			}
			
		},
		beforeSend:function(){
			$("#search_key").val("");
			$("#monitor").text("正在查豆瓣 ...");
		},
		error :function () {
			$("#monitor").text("程序好像出错了，快找程序猿哥哥...");
		}
	})
}