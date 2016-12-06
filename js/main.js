/**
 * Created by hanshaojie on 2016/12/5.
 */
var paging = function (obj) {
    if(!obj.id)return;
    if(obj.currPage<=0){obj.currPage = 1}
    if(obj.currPage >= obj.allPage){obj.currPage = obj.allPage}
    var oId = $("#"+ obj.id);
    var curr = obj.currPage;
    var all = obj.allPage || 5;
    var callBack = obj.callBack || jQuery.noop;

    if(curr > 1){
        oId.append("<span data-page="+(curr-1)+">上一页</span>");
    }

    if(curr > 6){
        oId.append("<span data-page='1'>首页</span>");
    }

    if(all <= 10){
        for(var i=1; i<=all; i++){
            var oCur = "";
            if(i == curr){
                oCur += "<span data-page="+i+" class='check'>"+i+"</span>";
            }else{
                oCur += "<span data-page="+i+">"+i+"</span>";
            }
            oId.append(oCur);
        }
    }
    else{
        for(var j=1; j<=10; j++){
            var oHtml = "";
            if(curr <= 6){
                if(curr == j){
                    oHtml += "<span data-page="+j+" class='check'>"+j+"</span>";
                }else{
                    oHtml += "<span data-page="+j+">"+j+"</span>";
                }
            }
            else if(all - curr <= 4){
                if(curr == (10+j)){
                    oHtml += "<span data-page="+(10+j)+" class='check'>"+(10+j)+"</span>";
                }
                else{
                    oHtml += "<span data-page="+(10+j)+">"+(10+j)+"</span>";
                }
            }
            else{
                if(curr == (curr-6+j)){
                    oHtml += "<span data-page="+(curr-6+j)+" class='check'>"+(curr-6+j)+"</span>";
                }
                else{
                    oHtml += "<span data-page="+(curr-6+j)+">"+(curr-6+j)+"</span>";
                }
            }
            oId.append(oHtml);
        }
    }

    if(curr < all - 4){
        oId.append("<span data-page="+all+">末页</span>");
    }

    if(curr < all){
        oId.append("<span data-page="+(parseInt(curr)+1)+">下一页</span>");
    }

    callBack(curr,all);

    var aSpan = oId.find("span");
    aSpan.each(function(){
            $(this).on("click",function () {
            oId.children().remove();
            paging({
                id:obj.id,
                currPage:$(this).attr("data-page"),
                allPage:all,
                callBack:callBack
            });
        });
    });
};











