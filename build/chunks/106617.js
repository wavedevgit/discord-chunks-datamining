/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
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