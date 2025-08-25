/** Chunk was on web.js **/
/** chunk id: 553245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => a
}), require("./388685.js");
var Chunk689320 = require("./689320.js"),
  Chunk143806 = require("./143806.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  get totalLength() {
    return this.primary.length + this.extended.length
  }
  get primaryCapacity() {
    return this.primary.capacity
  }
  get extendedCapacity() {
    return this.extended.capacity
  }
  clear() {
    this.primary.clear(), this.extended.clear()
  }
  has(e) {
    return this.primary.has(e)
  }
  hasExtended(e) {
    return this.primary.has(e) || this.extended.has(e)
  }
  get(e) {
    return this.primary.get(e)
  }
  put(e, t) {
    let n = this.primary.put(e, t);
    true !== n && this.extended.put(n[0], n[1])
  }
  delete(e) {
    let t = this.primary.delete(e),
      n = this.extended.delete(e);
    return this.upstreamItems(), t || n
  }
  upstreamItems() {
    if (this.canUpstreamItems()) {
      for (let [e, t] of this.extended.entries())
        if (this.primary.put(module, exports), this.extended.delete(module), !this.canUpstreamItems()) break
    }
  }
  canUpstreamItems() {
    return this.primary.length < this.primary.capacity && this.extended.length > 0
  }
  entries() {
    return this.primary.entries()
  }
  keys() {
    return this.primary.keys()
  }
  values() {
    return this.primary.values()
  }
  allEntries() {
    return Chunk689320.t(this.extended.entries(), this.primary.entries())
  }
  allKeys() {
    return Chunk689320.t(this.extended.keys(), this.primary.keys())
  }
  allValues() {
    return Chunk689320.t(this.extended.values(), this.primary.values())
  }
  constructor(e, t) {
    o(this, "primary", true), o(this, "extended", true), this.primary = new i.S(e), this.extended = new i.S(t)
  }
}