/** Chunk was on 78376 **/
/** chunk id: 562519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk362474 = require("./362474.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l {
  _load() {
    let e = r.u.get(this._key);
    null != e && (this._set = new Set(e))
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
    r.u.set(this._key, e)
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