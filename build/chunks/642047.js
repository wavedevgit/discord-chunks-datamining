/** Chunk was on web.js **/
/** chunk id: 642047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk251625 = require("./251625.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  keys() {
    return this.cachedKeys(this.version)
  }
  values() {
    return this.cachedValues(this.version)
  }
  entries() {
    return this.cachedEntries(this.version)
  }
  size() {
    return this.data.size
  }
  get(e) {
    return this.data.get(e)
  }
  set(e, t) {
    this.data.get(e) !== t && (this.data.set(e, t), this.version++)
  }
  delete(e) {
    let t = this.data.delete(e);
    return t && this.version++, t
  }
  clear() {
    0 !== this.data.size && (this.data.clear(), this.version++)
  }
  constructor() {
    i(this, "version", 0), i(this, "data", new Map), i(this, "cachedValues", true), i(this, "cachedKeys", true), i(this, "cachedEntries", true), this.cachedValues = (0, Chunk251625.oH)(e => Array.from(this.data.values())), this.cachedKeys = (0, Chunk251625.oH)(e => Array.from(this.data.keys())), this.cachedEntries = (0, Chunk251625.oH)(e => Array.from(this.data.entries()))
  }
}