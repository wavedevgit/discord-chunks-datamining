/** Chunk was on 58493 (7a822885dad2a57e.js) **/
s.d(t, {
  Z: () => l
}), s(47120);
var i = s(298444);

function r(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class l {
  _load() {
    let e = i.x.get(this._key);
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
    i.x.set(this._key, e)
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
    r(this, "_key", void 0), r(this, "_set", void 0), this._key = "$persisted-set-".concat(e), this._set = new Set, this._load()
  }
}