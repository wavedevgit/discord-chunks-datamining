/** Chunk was on web.js **/
/** chunk id: 256398, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
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