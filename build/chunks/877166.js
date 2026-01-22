/** Chunk was on web.js **/
/** chunk id: 877166, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk73153 = require("./73153.js");

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
    this.action = null, null != e && r.h.dispatch(e).catch(t => this.socket.resetSocketOnError({
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