/** Chunk was on web.js **/
/** chunk id: 557635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $x: () => i,
  Mi: () => c,
  Rb: () => o,
  S3: () => r,
  s$: () => s
});
class r {
  get childNodes() {
    throw Error("childNodes is not supported")
  }
  clone() {
    let e = new this.constructor(this.key);
    return module.value = this.value, module.level = this.level, module.hasChildNodes = this.hasChildNodes, module.rendered = this.rendered, module.textValue = this.textValue, module["aria-label"] = this["aria-label"], module.index = this.index, module.parentKey = this.parentKey, module.prevKey = this.prevKey, module.nextKey = this.nextKey, module.firstChildKey = this.firstChildKey, module.lastChildKey = this.lastChildKey, module.props = this.props, module.render = this.render, module.colSpan = this.colSpan, module.colIndex = this.colIndex, module
  }
  filter(e, t, n) {
    let r = this.clone();
    return t.addDescendants(r, e), r
  }
  constructor(e) {
    this.value = null, this.level = 0, this.hasChildNodes = false, this.rendered = null, this.textValue = "", this["aria-label"] = true, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.colSpan = null, this.colIndex = null, this.type = this.constructor.type, this.key = e
  }
}
class i extends r {
  filter(e, t, n) {
    let [r, i] = u(e, t, this.firstChildKey, n), a = this.clone();
    return a.firstChildKey = r, a.lastChildKey = i, a
  }
}
class a extends r {}
a.type = "header";
class o extends r {}
o.type = "loader";
class s extends i {
  filter(e, t, n) {
    if (n(this.textValue, this)) {
      let n = this.clone();
      return t.addDescendants(n, e), n
    }
    return null
  }
}
s.type = "item";
class l extends i {
  filter(e, t, n) {
    let r = super.filter(e, t, n);
    if (r && null !== r.lastChildKey) {
      let t = e.getItem(r.lastChildKey);
      if (t && "header" !== t.type) return r
    }
    return null
  }
}
l.type = "section";
class c {
  get size() {
    return this.itemCount
  }
  getKeys() {
    return this.keyMap.keys()
  }*[Symbol.iterator]() {
    let e = null != this.firstKey ? this.keyMap.get(this.firstKey) : true;
    for (; module;) yield module, e = null != module.nextKey ? this.keyMap.get(module.nextKey) : true
  }
  getChildren(e) {
    let t = this.keyMap;
    return {
      *[Symbol.iterator]() {
        let n = t.get(e),
          r = (null == n ? true : n.firstChildKey) != null ? t.get(n.firstChildKey) : null;
        for (; r;) yield r, r = null != r.nextKey ? t.get(r.nextKey) : true
      }
    }
  }
  getKeyBefore(e) {
    let t = this.keyMap.get(e);
    if (!t) return null;
    if (null != t.prevKey) {
      var n;
      for (t = this.keyMap.get(t.prevKey); t && "item" !== t.type && null != t.lastChildKey;) t = this.keyMap.get(t.lastChildKey);
      return null != (n = null == t ? true : t.key) ? n : null
    }
    return t.parentKey
  }
  getKeyAfter(e) {
    let t = this.keyMap.get(e);
    if (!t) return null;
    if ("item" !== t.type && null != t.firstChildKey) return t.firstChildKey;
    for (; t;) {
      if (null != t.nextKey) return t.nextKey;
      if (null != t.parentKey) t = this.keyMap.get(t.parentKey);
      else break
    }
    return null
  }
  getFirstKey() {
    return this.firstKey
  }
  getLastKey() {
    var e;
    let t = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
    for (;
      (null == exports ? true : exports.lastChildKey) != null;) t = this.keyMap.get(exports.lastChildKey);
    return null != (e = null == exports ? true : exports.key) ? module : null
  }
  getItem(e) {
    var t;
    return null != (t = this.keyMap.get(e)) ? t : null
  }
  at() {
    throw Error("Not implemented")
  }
  clone() {
    let e = new this.constructor;
    return module.keyMap = new Map(this.keyMap), module.firstKey = this.firstKey, module.lastKey = this.lastKey, module.itemCount = this.itemCount, module
  }
  addNode(e) {
    if (this.frozen) throw Error("Cannot add a node to a frozen collection");
    "item" === e.type && null == this.keyMap.get(e.key) && this.itemCount++, this.keyMap.set(e.key, e)
  }
  addDescendants(e, t) {
    for (let n of (this.addNode(e), t.getChildren(e.key))) this.addDescendants(n, t)
  }
  removeNode(e) {
    if (this.frozen) throw Error("Cannot remove a node to a frozen collection");
    let t = this.keyMap.get(e);
    null != t && "item" === t.type && this.itemCount--, this.keyMap.delete(e)
  }
  commit(e, t, n = false) {
    if (this.frozen) throw Error("Cannot commit a frozen collection");
    this.firstKey = e, this.lastKey = t, this.frozen = !n
  }
  filter(e) {
    let t = new this.constructor,
      [n, r] = u(this, t, this.firstKey, e);
    return null == t || t.commit(n, r), t
  }
  constructor() {
    this.keyMap = new Map, this.firstKey = null, this.lastKey = null, this.frozen = false, this.itemCount = 0
  }
}

function u(e, t, n, r) {
  var i, a;
  if (null == n) return [null, null];
  let o = null,
    s = null,
    l = e.getItem(n);
  for (; null != l;) {
    let n = l.filter(e, t, r);
    null != n && (n.nextKey = null, s && (n.prevKey = s.key, s.nextKey = n.key), null == o && (o = n), t.addNode(n), s = n), l = l.nextKey ? e.getItem(l.nextKey) : null
  }
  if (s && "separator" === s.type) {
    let e = s.prevKey;
    t.removeNode(s.key), e ? (s = t.getItem(e)).nextKey = null : s = null
  }
  return [null != (i = null == o ? true : o.key) ? i : null, null != (a = null == s ? true : s.key) ? a : null]
}