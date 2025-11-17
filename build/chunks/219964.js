/** Chunk was on web.js **/
/** chunk id: 219964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => r
});
class r {
  *[Symbol.iterator]() {
    yield* this.iterable
  }
  get size() {
    return this._size
  }
  getKeys() {
    return this.keyMap.keys()
  }
  getKeyBefore(e) {
    var t;
    let n = this.keyMap.get(e);
    return n && null != (t = n.prevKey) ? t : null
  }
  getKeyAfter(e) {
    var t;
    let n = this.keyMap.get(e);
    return n && null != (t = n.nextKey) ? t : null
  }
  getFirstKey() {
    return this.firstKey
  }
  getLastKey() {
    return this.lastKey
  }
  getItem(e) {
    var t;
    return null != (t = this.keyMap.get(e)) ? t : null
  }
  at(e) {
    let t = [...this.getKeys()];
    return this.getItem(t[e])
  }
  getChildren(e) {
    let t = this.keyMap.get(e);
    return (null == t ? true : t.childNodes) || []
  }
  constructor(e) {
    var t;
    this.keyMap = new Map, this.firstKey = null, this.lastKey = null, this.iterable = e;
    let n = e => {
      if (this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)
        for (let t of e.childNodes) n(t)
    };
    for (let t of e) n(t);
    let r = null,
      i = 0,
      a = 0;
    for (let [e, t] of this.keyMap) r ? (r.nextKey = e, t.prevKey = r.key) : (this.firstKey = e, t.prevKey = true), "item" === t.type && (t.index = i++), ("section" === t.type || "item" === t.type) && a++, (r = t).nextKey = true;
    this._size = a, this.lastKey = null != (t = null == r ? true : r.key) ? t : null
  }
}