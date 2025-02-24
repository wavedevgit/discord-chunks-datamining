/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
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