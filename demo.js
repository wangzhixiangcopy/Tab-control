var oDiv = document.getElementsByTagName('div')[0];
// oDiv.style.width = '100px';
// oDiv.style.height = '100px';
// oDiv.style.backgroundColor = 'red';
// oDiv.onclick = function() {
//     this.style.backgroundColor = 'black';
//     this.style.borderRadius = '50%';
// }
// var count = 0;
// oDiv.onclick = function() {
//     count ++;
//     if(count % 2 == 1) {
//         this.style.backgroundColor = 'green';
//     }else{
//         this.style.backgroundColor = 'orange';
//     }
// }
var btn = document.getElementsByTagName('button');
var oDiv = document.getElementsByClassName('content');
for (var i = 0; i < btn.length; i++) {
    (function (n) {
        btn[n].onclick = function () {
            for (var i = 0; i < btn.length; i++) {
                btn[i].className = '';
                oDiv[i].style.display = 'none';
            }
            this.className = 'active';
            oDiv[n].style.display = 'block';
        }
    }(i))
}