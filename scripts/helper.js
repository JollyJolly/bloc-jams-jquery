class Helper {
  constructor() {}

  playPauseAndUpdate(song = null) {
    if (song === null) {
      player.playPause()
    } else {
      player.playPause(song)
      // set total time of the song on
      const duration = player.prettyTime(song.duration);
      $('#time-control .total-time').text( duration );
    }
  }

}

const helper = new Helper();
