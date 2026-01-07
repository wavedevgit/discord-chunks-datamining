/** Chunk was on web.js **/
/** chunk id: 890465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => r
});
class r {
  call() {
    try {
      this.task && this.task()
    } catch (e) {
      this.onError(e)
    } finally {
      this.task = null, this.release(this)
    }
  }
  constructor(e, t) {
    this.onError = e, this.release = t, this.task = null
  }
}