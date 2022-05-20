var b=0;
var c=0;
var a=0;
function bjp(){
    ++b;
    console.log('bjp'+b);
}
 function congress(){
     ++c;
     console.log('cong'+c);
 }
 function app(){
     ++a;
     console.log('app'+a);
 }
 

 function result(){
    var res=document.getElementById("result");
    var r=0;
    if(a>b&&a>c)
    {
       r=a;
       res.innerHTML="APP WIN BY "+r+" VOTE" ;
    }
   if(b>a&&b>c){
       r=b;
       res.innerHTML="BJP WIN BY "+r+" VOTE";
   }
   if(c>a&&c>b){
    r=c;
    res.innerHTML="CONGRESS WIN BY "+r+" VOTE";
   }
     
 }
