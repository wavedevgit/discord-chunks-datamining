/** Chunk was on web.js **/
/** chunk id: 689320, original params: e,t,n (module,exports,re quire) **/
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
  t: () => o
}), require("./953529.js"), require("./388685.js");
class i {
  [Symbol.iterator]() {
    return this
  }
  next() {
    for (; this.index < this.items.length;) {
      let e = this.items[this.index].next();
      if (!module.done) return module;
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

function o() {
  for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
  return new i(exports)
}