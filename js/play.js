let Uploadbtn = document.getElementById("upload");

let playList;

Uploadbtn.addEventListener("change", makePlayList, false);

var index = 1;

function clearName(namefile) {
    var clearly = namefile.split(".");
    console.log(clearly);
    return clearly[0];
}

function makePlayList() {
    const file = this.files;
    console.log(file);

    // แสดงชื่อเพลงปัจจุบัน
    document.getElementById("currentName").innerHTML = clearName(file[0].name);

    // แสดงรายการเพลง
    document.getElementById("queueSong").innerHTML = "";
    for (var i = 0; i < file.length; i++) {
        if (i == 0) document.getElementById("queueSong").innerHTML += i + 1 + " : " + clearName(file[i].name) + " (Now playing)" + "<br>";
        else document.getElementById("queueSong").innerHTML += i + 1 + " : " + clearName(file[i].name) + "<br>";
    }

    $("#src").attr("src", URL.createObjectURL(file[0]));
    document.getElementById("audio").load();
    playList = this.files;
}

function nextSong() {
    // หยุดการทำงาน
    if (index === playList.length) {
        return;
    }

    // แสดงชื่อเพลงปัจจุบัน
    document.getElementById("currentName").innerHTML = clearName(playList[index].name);
    $("#src").attr("src", URL.createObjectURL(playList[index]));
    document.getElementById("audio").load();

    // แสดงรายการเพลง
    document.getElementById("queueSong").innerHTML = "";
    for (var i = 0; i < playList.length; i++) {
        if (i == index) document.getElementById("queueSong").innerHTML += i + 1 + " : " + clearName(playList[i].name) + " (Now playing)" + "<br>";
        else document.getElementById("queueSong").innerHTML += i + 1 + " : " + clearName(playList[i].name) + "<br>";
    }

    index++;
}

