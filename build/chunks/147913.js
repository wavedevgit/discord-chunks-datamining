/** Chunk was on web.js **/
/** chunk id: 147913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./415506.js"), require("./388685.js"), require("./17089.js");
var Chunk570140 = require("./570140.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  initialize() {
    this.initializedCount++, this.initializedCount > 1 || (this._initialize(), Object.entries(this.actions).forEach(e => {
      let [t, n] = e;
      r.Z.subscribe(t, "function" == typeof n ? n : n.callback)
    }), this.stores.forEach((e, t) => {
      t.addChangeListener(e), e()
    }))
  }
  terminate(e) {
    this.initializedCount <= 0 || (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
      let [t, n] = e;
      r.Z.unsubscribe(t, "function" == typeof n ? n : n.callback)
    })))
  }
  _initialize() {}
  _terminate() {}
  constructor() {
    i(this, "initializedCount", 0), i(this, "actions", {}), i(this, "stores", new Map)
  }
}