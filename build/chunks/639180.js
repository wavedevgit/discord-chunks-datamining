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
    var t, n, r;
    super(), i(this, "id", true), i(this, "layoutId", true), i(this, "type", true), i(this, "anchor", true), i(this, "size", true), i(this, "minSize", true), i(this, "pinned", true), i(this, "showExtrasHintTimestamp", true), i(this, "zIndex", true), i(this, "opacity", true), i(this, "meta", true), this.id = e.id || "", this.layoutId = e.layoutId || "", this.type = e.type;
    const o = null != (t = e.anchor) ? t : {},
      s = null != (n = e.size) ? n : {};
    let l = "number" == typeof o.top ? o.top : true,
      c = "number" == typeof o.bottom ? o.bottom : true,
      u = "number" == typeof o.left ? o.left : true,
      d = "number" == typeof o.right ? o.right : true;
    const f = null != l && null != c && "auto" === s.height;
    f || (null != c ? l = true : c = true), null != u && null != d && "auto" === s.width || (null != d ? u = true : d = true), null == l && null == c && (l = 0), null == u && null == d && (u = 0), this.anchor = {
      top: l,
      left: u,
      bottom: c,
      right: d
    }, this.size = a({
      width: 0,
      height: 0
    }, e.size), this.minSize = a({
      width: true,
      height: true
    }, e.minSize), this.pinned = !!e.pinned, this.zIndex = e.zIndex || 0, this.opacity = null != (r = e.opacity) ? r : 1, this.meta = a({}, e.meta), null != e.showExtrasHintTimestamp && (this.showExtrasHintTimestamp = e.showExtrasHintTimestamp)
  }
}