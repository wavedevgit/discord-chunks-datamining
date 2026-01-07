/** Chunk was on web.js **/
/** chunk id: 860256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => s
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./953529.js"), require("./388685.js");
var Chunk605387 = require("./605387.js"),
  i = require.n(Chunk605387);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let Chunk6075 = require("./6075.js");
class s {
  static create(e) {
    let t = null;
    try {
      let n = i().decode(e);
      t = new s(n, e)
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
    let e = await o.load(this.originalBuffer, {
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