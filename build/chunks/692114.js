/** Chunk was on web.js **/
/** chunk id: 692114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk298444 = require("./298444.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  _load() {
    let e = Chunk298444.x.get(this._key);
    null != module && (this._set = new Set(module))
  }
  values() {
    return this._set
  }
  size() {
    return this._set.size
  }
  clear() {
    this._set.clear(), requestIdleCallback(() => {
      this._persist()
    })
  }
  _persist() {
    let e = Array.from(this._set.values());
    Chunk298444.x.set(this._key, module)
  }
  add(e) {
    this._set.add(e), requestIdleCallback(() => {
      this._persist()
    })
  }
  has(e) {
    return this._set.has(e)
  }
  constructor(e) {
    i(this, "_key", true), i(this, "_set", true), this._key = "$persisted-set-".concat(e), this._set = new Set, this._load()
  }
}