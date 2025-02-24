/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  g: () => i
});
var r = n(890465);
class i {
  create(e) {
    let t = this.freeTasks,
      n = t.length ? t.pop() : new r.V(this.onError, e => t[t.length] = e);
    return n.task = e, n
  }
  constructor(e) {
    this.onError = e, this.freeTasks = []
  }
}