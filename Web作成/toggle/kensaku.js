let num=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let alnum=[];
let alnum_name=[];
let btn = document.querySelector('button');
let elem_al = document.querySelector('p1');
let elem_noal = document.querySelector('p2');
let html = "";
let i,j;
let al;
let datasu;

const target0 = document.getElementById('target0');
const target1 = document.getElementById('target1');
const target2 = document.getElementById('target2');
const target3 = document.getElementById('target3');
const target4 = document.getElementById('target4');
const target5 = document.getElementById('target5');
const target6 = document.getElementById('target6');
const target7 = document.getElementById('target7');
const target8 = document.getElementById('target8');
const target9 = document.getElementById('target9');
const target10 = document.getElementById('target10');
const target11 = document.getElementById('target11');
const target12 = document.getElementById('target12');
const target13 = document.getElementById('target13');
const target14 = document.getElementById('target14');
const target15 = document.getElementById('target15');
const target16 = document.getElementById('target16');
const target17 = document.getElementById('target17');
const target18 = document.getElementById('target18');
const target19 = document.getElementById('target19');
const target20 = document.getElementById('target20');
const target21 = document.getElementById('target21');

const target22 = document.getElementById('target22');
const target23 = document.getElementById('target23');
const target24 = document.getElementById('target24');
const target25 = document.getElementById('target25');
const target26 = document.getElementById('target26');
const target27 = document.getElementById('target27');
const target28 = document.getElementById('target28');

target0.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[0]==0){ num[0]=1; }else{num[0]=0}
});
target1.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[1]==0){ num[1]=1; }else{num[1]=0}
});
target2.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[2]==0){ num[2]=1; }else{num[2]=0}
});
target3.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[3]==0){ num[3]=1; }else{num[3]=0}
});
target4.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[4]==0){ num[4]=1; }else{num[4]=0}
});
target5.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[5]==0){ num[5]=1; }else{num[5]=0}
});
target6.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[6]==0){ num[6]=1; }else{num[6]=0}
});
target7.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[7]==0){ num[7]=1; }else{num[7]=0}
});
target8.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[8]==0){ num[8]=1; }else{num[8]=0}
});
target9.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[9]==0){ num[9]=1; }else{num[9]=0}
});
target10.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[10]==0){ num[10]=1; }else{num[10]=0}
});
target11.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[11]==0){ num[11]=1; }else{num[11]=0}
});
target12.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[12]==0){ num[12]=1; }else{num[12]=0}
});
target13.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[13]==0){ num[13]=1; }else{num[13]=0}
});
target14.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[14]==0){ num[14]=1; }else{num[14]=0}
});
target15.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[15]==0){ num[15]=1; }else{num[15]=0}
});
target16.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[16]==0){ num[16]=1; }else{num[16]=0}
});
target17.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[17]==0){ num[17]=1; }else{num[17]=0}
});
target18.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[18]==0){ num[18]=1; }else{num[18]=0}
});
target19.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[19]==0){ num[19]=1; }else{num[19]=0}
});
target20.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[20]==0){ num[20]=1; }else{num[20]=0}
});
target21.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[21]==0){ num[21]=1; }else{num[21]=0}
});
target22.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[22]==0){ num[22]=1; }else{num[22]=0}
});
target23.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[23]==0){ num[23]=1; }else{num[23]=0}
});
target24.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[24]==0){ num[24]=1; }else{num[24]=0}
});
target25.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[25]==0){ num[25]=1; }else{num[25]=0}
});
target26.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[26]==0){ num[26]=1; }else{num[26]=0}
});
target27.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[27]==0){ num[27]=1; }else{num[27]=0}
});
target28.addEventListener('click', function(){
  this.classList.toggle('radius');
  if(num[28]==0){ num[28]=1; }else{num[28]=0}
});

btn.addEventListener('click',() => {
  alnum.length=0;
  alnum_name.length=0;
  for(i=0;i<29;i+=1){
    if(num[i]==1){     
          alnum_name.push(aldata[i]);
          alnum.push(i);
    }
  }

  elem_al.innerText = alnum_name + "、が入っていない商品";

  html="";
  html+='<table width="600px">'
  let k=0;
  for(i=0;i<fmdata.length;i++){
    al=0;
    for(j=0;j<alnum.length;j++){
      if((fmdata[i][2].includes(alnum[j]))){
        al=1;
      }
    }
    if(al==0){
      if(k%2==0){
        html += '<tr><td>'+'<a href="'+ fmdata[i][1] + '" target="_blank"><img src="images/' + fmdata[i][0] + '" width="300px" height="200px"></a>'+'</td>';
      }else{
        html += '<td>'+'<a href="'+ fmdata[i][1] + '" target="_blank"><img src="images/' + fmdata[i][0] + '" width="300px" height="200px"></a>'+'</td></tr>';
      }
      k+=1;
    }
  }
  html+='</table>'
  elem_noal.innerHTML = html;
} );
