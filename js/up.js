/*/ 设置页脚博主会动的心
$(document).ready(function(e){
    $('.copyright').html('2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> Glerdox');
})*/


/*// 移除页脚样式
var app = document.getElementById('footer');
app.removeAttribute('id')
*/

/*添加图片top*/
var top_up = "<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-80px,-80px);' src='https://dongxixian.github.io/img/up1.gif' title='回到顶部' >";
/*添加到返回顶部按钮下*/
document.getElementById("go-up").innerHTML += top_up;
//https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif