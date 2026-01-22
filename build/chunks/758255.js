/** Chunk was on web.js **/
/** chunk id: 758255, original params: e,t,n (module,exports,re quire) **/
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
  c: () => a
}), require("./228524.js"), require("./896048.js");
class i {
  [Symbol.iterator]() {
    return this
  }
  next() {
    for (; this.index < this.items.length;) {
      let e = this.items[this.index].next();
      if (!e.done) return e;
      this.index += 1
    }
    return {
      done: true,
      value: true
    }
  }
  constructor(e) {
    r(this, "index", true), r(this, "items", true), this.index = 0, this.items = e
  }
}

function a() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return new i(t)
}