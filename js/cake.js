var container = document.querySelector('.numCandle');
	var numCandle = container.innerText;

	function formatnumCandle(numCandle, container) {
	  var numCandleArray = numCandle.split(' ');
	  var formattednumCandle = document.createElement('div');
	  numCandleArray.map(function (word) {
		formattednumCandle.appendChild(createWord(word));
	  });
	  console.log(numCandleArray);

	  container.replaceChild(formattednumCandle, container.firstChild);
	};

	function createWord(characters) {
	  var word = document.createElement('div');
	  var wordArray = characters.split('');
	  wordArray.map(function (char) {
		word.appendChild(formatCharacter(char));
	  });
	  word.appendChild(formatCharacter('&nbsp;'));
	  return word;
	}

	function formatCharacter(text) {
	  var text = text === ' ' ? '&nbsp;' : text;
	  var character = document.createElement('span');
	  character.innerHTML = text;
	  return character;
	}

	formatnumCandle(numCandle, container);
// var mystatus = document.getElementById("status");
var candle0 = document.querySelector("#candle0");
var fame = document.querySelector("#fame0");
var smoke = document.querySelector("#smoke0");
var flag0 = 1;
candle0.addEventListener("click", function () {
  if (flag0) {
    fame0.style.display = "none";
    smoke0.style.display = "block";
    flag0 = 0;
  } else {
    fame0.style.display = "block";
    smoke0.style.display = "none";
    flag0 = 1;
  }
})
var candle1 = document.querySelector("#candle1");
var fame1 = document.querySelector("#fame1");
var smoke1 = document.querySelector("#smoke1");
var flag1 = 1;
candle1.addEventListener("click", function () {
  if (flag1) {
    fame1.style.display = "none";
    smoke1.style.display = "block";
    flag1 = 0;
  } else {
    fame1.style.display = "block";
    smoke1.style.display = "none";
    flag1 = 1;
  }
})
var candle2 = document.querySelector("#candle2");
var fame2 = document.querySelector("#fame2");
var smoke2 = document.querySelector("#smoke2");
var flag2 = 1;
candle2.addEventListener("click", function () {
  if (flag2) {
    fame2.style.display = "none";
    smoke2.style.display = "block";
    flag2 = 0;
  } else {
    fame2.style.display = "block";
    smoke2.style.display = "none";
    flag2 = 1;
  }
})
navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

if (!navigator.getUserMedia) {
  mystatus.innerHTML = "您的浏览器不支持获取音频。"
}
navigator.getUserMedia({ audio: true }, onSuccess, onError); //调用麦克风捕捉音频信息，成功时触发onSuccess函数，失败时触发onError函数
function onError() {
  mystatus.innerHTML = "获取音频时好像出了点问题。"
}
function onSuccess(stream) {


  //创建一个音频环境对像
  audioContext = window.AudioContext || window.webkitAudioContext;
  context = new audioContext();

  //将声音输入这个对像
  audioInput = context.createMediaStreamSource(stream);

  //设置音量节点
  volume = context.createGain();
  audioInput.connect(volume);

  //创建缓存，用来缓存声音
  var bufferSize = 2048;

  // 创建声音的缓存节点，createJavaScriptNode方法的
  // 第二个和第三个参数指的是输入和输出都是双声道。
  recorder = context.createScriptProcessor(bufferSize, 1, 1);

  // 录音过程的回调函数，基本上是将左右两声道的声音
  // 分别放入缓存。
  recorder.onaudioprocess = function (e) {
    var buffer = e.inputBuffer.getChannelData(0); //获得缓冲区的输入音频，转换为包含了PCM通道数据的32位浮点数组
    //创建变量并迭代来获取最大的音量值
    var maxVal = 0;
    for (var i = 0; i < buffer.length; i++) {
      if (maxVal < buffer[i]) {
        maxVal = buffer[i];
      }
    }
    if (maxVal > 0.8) {
      fame0.style.display = "none";
      smoke0.style.display = "block";
      flag0 = 0;
      fame1.style.display = "none";
      smoke1.style.display = "block";
      flag1 = 0;
      fame2.style.display = "none";
      smoke2.style.display = "block";
      flag2 = 0;
      // liveSource.disconnect(levelChecker);
    }
  }
  volume.connect(recorder);

  // 将缓存节点连上输出的目的地，可以是扩音器，也可以
  // 是音频文件。
  recorder.connect(context.destination);
}




window.onload = function () {
    var audio = document.getElementById('music');
    audio.pause();//打开页面时无音乐
  }
  function play() {
    var audio = document.getElementById('music');
    if (audio.paused) {
      audio.play();
      document.getElementById('musicImg').src = "https://i.postimg.cc/FRrncY9C/2.png";
    } else {
      audio.pause();
      audio.currentTime = 0;//音乐从头播放
      document.getElementById('musicImg').src = "https://i.postimg.cc/fTfC7wr6/picwish.png";
    }
  }