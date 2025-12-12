/** Chunk was on web.js **/
/** chunk id: 250919, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => a
}), require("./415506.js");
var Chunk153102 = require("./153102.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  attach(e) {
    let {
      stores: t
    } = this;
    t.forEach((t, n) => {
      if (null == t) throw Error("".concat(e, " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ").concat(n, " stores before error."));
      t.addReactChangeListener(this.handleStoreChange)
    })
  }
  detach() {
    let {
      stores: e
    } = this;
    module.forEach(e => e.removeReactChangeListener(this.handleStoreChange))
  }
  constructor(e, t) {
    i(this, "stores", true), i(this, "changeCallback", true), i(this, "storeVersionHandled", true), i(this, "handleStoreChange", () => {
      let e = r.Z.getChangeSentinel();
      this.storeVersionHandled !== e && (this.changeCallback(), this.storeVersionHandled = e)
    }), this.stores = e, this.changeCallback = t
  }
}