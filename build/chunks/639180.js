/** Chunk was on web.js **/
/** chunk id: 639180, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk315069 = require("./315069.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}
class o extends Chunk315069.A {
  constructor(e) {
    var t, n;
    super(), i(this, "id", true), i(this, "layoutId", true), i(this, "type", true), i(this, "anchor", true), i(this, "size", true), i(this, "minSize", true), i(this, "pinned", true), i(this, "showExtrasHintTimestamp", true), i(this, "zIndex", true), i(this, "opacity", true), i(this, "meta", true), this.id = e.id || "", this.layoutId = e.layoutId || "", this.type = e.type;
    let {
      top: r,
      left: o,
      bottom: s,
      right: l
    } = null != (t = e.anchor) ? t : {
      top: 0,
      left: 0
    };
    "number" == typeof s ? r = true : s = true, "number" == typeof l ? o = true : l = true, this.anchor = {
      top: r,
      left: o,
      bottom: s,
      right: l
    }, this.size = a({
      width: 0,
      height: 0
    }, e.size), this.minSize = a({
      width: true,
      height: true
    }, e.minSize), this.pinned = !!e.pinned, this.zIndex = e.zIndex || 0, this.opacity = null != (n = e.opacity) ? n : 1, this.meta = a({}, e.meta), null != e.showExtrasHintTimestamp && (this.showExtrasHintTimestamp = e.showExtrasHintTimestamp)
  }
}