/** Chunk was on web.js **/
/** chunk id: 439372, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./65821.js"), require("./896048.js"), require("./423034.js");
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
  initialize() {
    this.initializedCount++, this.initializedCount > 1 || (this._initialize(), Object.entries(this.actions).forEach(e => {
      let [t, n] = e;
      r.h.subscribe(t, "function" == typeof n ? n : n.callback)
    }), this.stores.forEach((e, t) => {
      t.addChangeListener(e), e()
    }))
  }
  terminate(e) {
    this.initializedCount <= 0 || (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
      let [t, n] = e;
      r.h.unsubscribe(t, "function" == typeof n ? n : n.callback)
    })))
  }
  _initialize() {}
  _terminate() {}
  constructor() {
    i(this, "initializedCount", 0), i(this, "actions", {}), i(this, "stores", new Map)
  }
}