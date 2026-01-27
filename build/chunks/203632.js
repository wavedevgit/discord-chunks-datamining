/** Chunk was on web.js **/
/** chunk id: 203632, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  C: () => s
}), require("./228524.js");
var Chunk575593 = require("./575593.js"),
  Chunk149807 = require("./149807.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
let s = e => e instanceof l;
class l extends Chunk149807.A {
  static fromServer(e) {
    return new l(o({}, super.fromServer(e), e))
  }
  constructor(e) {
    super(e), a(this, "title", true), a(this, "description", true), a(this, "accessibilityLabel", true), a(this, "reducedMotionSrc", true), a(this, "thumbnailPreviewSrc", true), a(this, "effects", true), a(this, "animationType", true), a(this, "staticFrameSrc", true), this.type = r.R.PROFILE_EFFECT, this.title = e.title, this.description = e.description, this.accessibilityLabel = e.accessibilityLabel, this.reducedMotionSrc = e.reducedMotionSrc, this.thumbnailPreviewSrc = e.thumbnailPreviewSrc, this.effects = e.effects, this.animationType = e.animationType, this.staticFrameSrc = e.staticFrameSrc
  }
}