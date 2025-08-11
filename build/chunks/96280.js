/** Chunk was on web.js **/
/** chunk id: 96280, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => i
});
var Chunk726074 = require("./726074.js");
class i {
  enqueueTask(e) {
    let {
      queue: t,
      requestFlush: n
    } = this;
    t.length || (n(), this.flushing = true), t[t.length] = e
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = false, this.index = 0, this.capacity = 1024, this.flush = () => {
      let {
        queue: e
      } = this;
      for (; this.index < module.length;) {
        let t = this.index;
        if (this.index++, module[exports].call(), this.index > this.capacity) {
          for (let t = 0, n = module.length - this.index; exports < require; exports++) module[exports] = module[exports + this.index];
          module.length -= this.index, this.index = 0
        }
      }
      module.length = 0, this.index = 0, this.flushing = false
    }, this.registerPendingError = e => {
      this.pendingErrors.push(e), this.requestErrorThrow()
    }, this.requestFlush = (0, Chunk726074.tX)(this.flush), this.requestErrorThrow = (0, Chunk726074.as)(() => {
      if (this.pendingErrors.length) throw this.pendingErrors.shift()
    })
  }
}