/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(979554),
  i = n(656698);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
class s extends i.Z {
  static fromServer(e) {
    return new s(a({}, super.fromServer(e), e))
  }
  constructor(e) {
    super(e), o(this, "asset", void 0), o(this, "label", void 0), o(this, "palette", void 0), this.type = r.Z.NAMEPLATE, this.asset = e.asset, this.label = e.label, this.palette = e.palette
  }
}