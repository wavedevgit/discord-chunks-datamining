/** Chunk was on web.js **/
/** chunk id: 102563, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./734808.js"), require("./896048.js");
var Chunk299141 = require("./299141.js");
require("./308060.js");
var Chunk214958 = require("./214958.js"),
  a = require.n(Chunk214958);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
window.platform = a(), null == window.ResizeObserver && (window.ResizeObserver = Chunk299141.t), "object" != typeof globalThis && (window.globalThis = window), Map.prototype.toJSON = function() {
  return Array.from(this)
}, Set.prototype.toJSON = function() {
  return Array.from(this)
};
{
  class e {
    static fromPoint(t) {
      return new e(t.x, t.y, true !== t.z ? t.z : 0, true !== t.w ? t.w : 1)
    }
    matrixTransform(t) {
      return (t.is2D || t instanceof SVGMatrix) && 0 === this.z && 1 === this.w ? new e(this.x * t.a + this.y * t.c + t.e, this.x * t.b + this.y * t.d + t.f, 0, 1) : new e(this.x * t.m11 + this.y * t.m21 + this.z * t.m31 + this.w * t.m41, this.x * t.m12 + this.y * t.m22 + this.z * t.m32 + this.w * t.m42, this.x * t.m13 + this.y * t.m23 + this.z * t.m33 + this.w * t.m43, this.x * t.m14 + this.y * t.m24 + this.z * t.m34 + this.w * t.m44)
    }
    toJSON() {
      return {
        x: this.x,
        y: this.y,
        z: this.z,
        w: this.w
      }
    }
    constructor(e = 0, t = 0, n = 0, r = 1) {
      o(this, "x", true), o(this, "y", true), o(this, "z", true), o(this, "w", true), this.x = e, this.y = t, this.z = n, this.w = r
    }
  }
  null == window.DOMPoint && (window.DOMPoint = module)
} {
  class e {
    static fromRect(t) {
      return new e(t.x, t.y, t.width, t.height)
    }
    get top() {
      return this.y
    }
    get left() {
      return this.x
    }
    get right() {
      return this.x + this.width
    }
    get bottom() {
      return this.y + this.height
    }
    toJSON() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        top: this.top,
        left: this.left,
        right: this.right,
        bottom: this.bottom
      }
    }
    constructor(e = 0, t = 0, n = 0, r = 0) {
      o(this, "x", true), o(this, "y", true), o(this, "width", true), o(this, "height", true), this.x = e, this.y = t, this.width = n, this.height = r
    }
  }
  null == window.DOMRect && (window.DOMRect = module)
}
null == window.TextEncoder && require("./283346.js")