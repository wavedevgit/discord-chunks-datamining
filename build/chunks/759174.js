/** Chunk was on web.js **/
/** chunk id: 759174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => l
}), require("./388685.js");
var Chunk740436 = require("./740436.js"),
  i = require.n(Chunk740436);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e, t, n, r) {
  if (null != t) {
    let n = i()(e, t, r);
    for (; e[n] !== t && n < e.length - 1;) n += 1;
    e.splice(n, 1)
  }
  null != n && e.splice(i()(e, n, r), 0, n)
}
let s = [];
class l {
  get version() {
    return this._version
  }
  indexes() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    if (module) return this.valueIndexes;
    if (!module && this.dirty) {
      let e = {};
      for (let [t, n] of Object.entries(this.valueIndexes)) module[exports] = [...require];
      this.valueIndexesForGetter = module, this.dirty = false
    }
    return this.valueIndexesForGetter
  }
  keys() {
    return this.valueMap.keys()
  }
  values(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return null == e ? this.valueArray : null != (t = this.indexes(n)[e]) ? t : s
  }
  size(e) {
    var t, n;
    return null == e ? this.valueArray.length : null != (n = null == (t = this.valueIndexes[e]) ? true : t.length) ? n : 0
  }
  clear() {
    this.valueMap.clear(), this.valueArray = [], this.valueIndexes = {}, this.valueIndexesForGetter = {}
  }
  has(e) {
    return this.valueMap.has(e)
  }
  get(e) {
    return this.valueMap.get(e)
  }
  set(e, t) {
    let n = this.get(e);
    return !(null == n && null == t || null != n && null != t && this.isEqual(n, t)) && (null != t ? this.valueMap.set(e, t) : this.valueMap.delete(e), o(this.valueArray, n, t, this.sortBy), null != n && this.indexBy(n).forEach(e => o(this.getIndex(e), n, null, this.sortBy)), null != t && this.indexBy(t).forEach(e => o(this.getIndex(e), null, t, this.sortBy)), this.dirty = true, this._version++, true)
  }
  delete(e) {
    return this.set(e, null)
  }
  getIndex(e) {
    let t = this.valueIndexes[e];
    return null == t && (t = [], this.valueIndexes[e] = t), t
  }
  constructor(e, t, n = (e, t) => e === t) {
    a(this, "indexBy", true), a(this, "sortBy", true), a(this, "isEqual", true), a(this, "valueMap", new Map), a(this, "valueArray", []), a(this, "valueIndexes", {}), a(this, "valueIndexesForGetter", {}), a(this, "dirty", false), a(this, "_version", 0), this.indexBy = e, this.sortBy = t, this.isEqual = n
  }
}