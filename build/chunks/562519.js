/** Chunk was on 56795 **/
/** chunk id: 562519, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  A: () => n
}), require("./896048.js");
var Chunk362474 = require("./362474.js");

function r(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = s, e
}
class n {
  _load() {
    let e = i.u.get(this._key);
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
    i.u.set(this._key, e)
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
    r(this, "_key", true), r(this, "_set", true), this._key = "$persisted-set-".concat(e), this._set = new Set, this._load()
  }
}