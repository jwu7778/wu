function delayedResult(n1, n2, delayTime, callback){
        var result=n1+n2;
        setTimeout(callback, delayTime,result);
    }
    delayedResult(4, 5, 3000, function(result){
    console.log(result);
    }); 
    delayedResult(-5, 10, 2000, function(result){
    window.alert(result);
    }); 



function ajax(src, callback){
        const xhr  = new XMLHttpRequest();
        xhr.open('GET',src,true);
        xhr.onload = function () {
           callback(xhr.responseText);
               
       };
        xhr.send();
        }
function render(data){
      console.log(data);
  }
  ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
  render(response);
  }); 

