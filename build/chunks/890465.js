/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
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