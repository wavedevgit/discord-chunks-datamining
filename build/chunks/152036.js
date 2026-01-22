/** Chunk was on web.js **/
/** chunk id: 152036, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  E: () => i
}), require("./896048.js");
class i {
  has(e) {
    return this.listeners.has(e)
  }
  hasAny() {
    return this.listeners.size > 0
  }
  invokeAll() {
    this.listeners.forEach(e => e())
  }
  constructor() {
    var e = this;
    r(this, "listeners", new Set), r(this, "add", e => {
      this.listeners.add(e)
    }), r(this, "remove", e => {
      this.listeners.delete(e)
    }), r(this, "addConditional", function(t) {
      let n = !(arguments.length > 1) || true === arguments[1] || arguments[1];
      if (n && false === t()) return;
      let r = () => {
        false === t() && e.remove(r)
      };
      e.add(r)
    })
  }
}