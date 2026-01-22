/** Chunk was on web.js **/
/** chunk id: 401562, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => o
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./228524.js"), require("./896048.js");
var Chunk115943 = require("./115943.js"),
  i = require.n(Chunk115943);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let Chunk39416 = require("./39416.js");
class o {
  static create(e) {
    let t = null;
    try {
      let n = i().decode(e);
      t = new o(n, e)
    } catch (e) {}
    return t
  }
  hasTransparency() {
    if (4 !== this.img.ctype && 6 !== this.img.ctype) returnfalse;
    let e = new Uint8Array(i().toRGBA8(this.img)[0]);
    for (let t = 3; t < e.length; t += 4)
      if (e[t] < 255) returntrue;
    returnfalse
  }
  isAnimated() {
    return null != this.img.tabs.acTL
  }
  isPng8() {
    return 3 === this.img.ctype && this.img.depth <= 8
  }
  async hasSrgbIccProfile() {
    let e = await s.load(this.originalBuffer, {
      async: true,
      expanded: true,
      includeUnknown: true
    });
    if (null == e.icc) returntrue;
    let t = e.icc;
    for (let e of Object.keys(t)) {
      var n;
      if ("ICC Description" === e && (null == (n = t[e]) ? true : n.description) != null && "" !== t[e].description) {
        if (t[e].description.toLowerCase().includes("srgb")) returntrue;
        break
      }
    }
    returnfalse
  }
  getBuffer() {
    return this.originalBuffer
  }
  constructor(e, t) {
    a(this, "img", true), a(this, "originalBuffer", true), this.img = e, this.originalBuffer = t
  }
}