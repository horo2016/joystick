function select(val) {
  return document.querySelector(val);
}

new Joystick({
  zone: select('#left')
})
.init()
.onStart = function(distance, angle) {
  // console.log('无人机向 => ' + angle + '移动' + distance + '个单位');
  switch(angle) {
    case 'up':
      Game.jump(distance);
      break;
    case 'right':
      Game.forward(distance);
      break;
    case 'left':
      Game.backward(distance);
	  break;
	 case 'down':
      Game.fall(distance);
	  break;
	default:
      Game.stop();
	   break;
  }
}