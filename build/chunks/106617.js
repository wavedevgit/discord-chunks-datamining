/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => r
});
class r {
  acquire(e) {
    return navigator.mediaDevices.getUserMedia(e)
  }
  release(e) {
    e.getTracks().forEach(e => {
      e.onended = function() {}, e.stop()
    })
  }
}