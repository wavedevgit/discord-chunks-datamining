/** Chunk was on web.js **/
/** chunk id: 124856, original params: e,t,n (module,exports,re quire) **/
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
  A: () => i
}), require("./228524.js");
class i {
  constructor(e, t, n) {
    r(this, "name", true), r(this, "description", true), r(this, "getFeatureValue", true), this.name = e, this.description = n, this.getFeatureValue = t, Object.defineProperty(this, "getFeatureValue", {
      value: t,
      configurable: false,
      writable: false
    })
  }
}