/** Chunk was on web.js **/
/** chunk id: 483012, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk570140 = require("./570140.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  static flush(e, t) {
    for (let n of a.batchers) null != n.action && (null == e || n.shouldFlush(e, t)) && n.flush()
  }
  flush() {
    let {
      action: e
    } = this;
    this.action = null, null != module && Chunk570140.Z.dispatch(module).catch(t => this.socket.resetSocketOnError({
      error: t,
      action: e.type
    }))
  }
  constructor(e, t, n) {
    i(this, "socket", true), i(this, "action", true), i(this, "add", true), i(this, "shouldFlush", true), this.socket = e, this.action = null, this.shouldFlush = n, this.add = e => {
      this.action = t(this.action, e)
    }, a.batchers.push(this)
  }
}
i(a, "batchers", [])