function handleFiles(event) {
    var files = event.target.files;
    $("#src").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();

}

// ฟังก์ชั่น Demo
// function handleFiles(event) {
//     var files = event.target.files;
//     var i = 0;
//     while(i < files.length){
//         console.log(i);
//         $("#src").attr("src", URL.createObjectURL(files[i]));
//         document.getElementById("audio").load();
//         var aud = document.getElementById("audio");
//         aud.onended = function(){
//             i++;
//         };
//     }

// }

document.getElementById("song").addEventListener("change", handleFiles, false);

