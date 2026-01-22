/** Chunk was on web.js **/
/** chunk id: 383682, original params: e,t,n (module,exports,re quire) **/
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
  K: () => i
}), require("./228524.js"), require("./896048.js"), require("./264879.js");
class i {
  get length() {
    return this.items.size
  }
  get capacity() {
    return this.limit
  } [Symbol.iterator]() {
    return this.items.entries()
  }
  entries() {
    return this.items.entries()
  }
  keys() {
    return this.items.keys()
  }
  values() {
    return this.items.values()
  }
  ordered() {
    return [...this.items.values()].reverse()
  }
  clear() {
    this.items.clear()
  }
  has(e) {
    return this.items.has(e)
  }
  get(e) {
    return this.items.get(e)
  }
  put(e, t) {
    if (this.items.delete(e), this.items.set(e, t), this.items.size > this.limit) {
      let e = this.oldestKey(),
        t = this.items.get(e);
      return this.items.delete(e), [e, t]
    }
  }
  delete(e) {
    return this.items.delete(e)
  }
  oldestKey() {
    return this.items.keys().next().value
  }
  constructor(e) {
    r(this, "items", true), r(this, "limit", true), this.items = new Map, this.limit = e
  }
}