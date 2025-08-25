/** Chunk was on web.js **/
/** chunk id: 665012, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => i,
  S: () => r
});
class r {
  get childNodes() {
    throw Error("childNodes is not supported")
  }
  clone() {
    let e = new r(this.type, this.key);
    return module.value = this.value, module.level = this.level, module.hasChildNodes = this.hasChildNodes, module.rendered = this.rendered, module.textValue = this.textValue, module["aria-label"] = this["aria-label"], module.index = this.index, module.parentKey = this.parentKey, module.prevKey = this.prevKey, module.nextKey = this.nextKey, module.firstChildKey = this.firstChildKey, module.lastChildKey = this.lastChildKey, module.props = this.props, module.render = this.render, module.colSpan = this.colSpan, module.colIndex = this.colIndex, module
  }
  constructor(e, t) {
    this.value = null, this.level = 0, this.hasChildNodes = false, this.rendered = null, this.textValue = "", this["aria-label"] = true, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.colSpan = null, this.colIndex = null, this.type = e, this.key = t
  }
}
class i {
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
  removeNode(e) {
    if (this.frozen) throw Error("Cannot remove a node to a frozen collection");
    let t = this.keyMap.get(e);
    null != t && "item" === t.type && this.itemCount--, this.keyMap.delete(e)
  }
  commit(e, t, n = false) {
    if (this.frozen) throw Error("Cannot commit a frozen collection");
    this.firstKey = e, this.lastKey = t, this.frozen = !n
  }
  UNSTABLE_filter(e) {
    let t = new i,
      n = null;
    for (let r of this)
      if ("section" === r.type && r.hasChildNodes) {
        let i = r.clone(),
          a = null;
        for (let n of this.getChildren(r.key))
          if (o(n, e, this, t)) {
            let e = n.clone();
            null == a && (i.firstChildKey = e.key), null == t.firstKey && (t.firstKey = i.key), a && a.parentKey === e.parentKey ? (a.nextKey = e.key, e.prevKey = a.key) : e.prevKey = null, e.nextKey = null, t.addNode(e), a = e
          } a && ("header" !== a.type ? (i.lastChildKey = a.key, null == n ? i.prevKey = null : ("section" === n.type || "separator" === n.type) && (n.nextKey = i.key, i.prevKey = n.key), i.nextKey = null, n = i, t.addNode(i)) : (t.firstKey === i.key && (t.firstKey = null), t.removeNode(a.key)))
      } else if ("separator" === r.type) {
      let e = r.clone();
      e.nextKey = null, (null == n ? true : n.type) === "section" && (n.nextKey = e.key, e.prevKey = n.key, n = e, t.addNode(e))
    } else {
      let i = r.clone();
      o(i, e, this, t) && (null == t.firstKey && (t.firstKey = i.key), null != n && "section" !== n.type && "separator" !== n.type && n.parentKey === i.parentKey ? (n.nextKey = i.key, i.prevKey = n.key) : i.prevKey = null, i.nextKey = null, t.addNode(i), n = i)
    }
    if ((null == n ? true : n.type) === "separator" && null === n.nextKey) {
      let e;
      null != n.prevKey && ((e = t.getItem(n.prevKey)).nextKey = null), t.removeNode(n.key), n = e
    }
    return t.lastKey = (null == n ? true : n.key) || null, t
  }
  constructor() {
    this.keyMap = new Map, this.firstKey = null, this.lastKey = null, this.frozen = false, this.itemCount = 0
  }
}

function o(e, t, n, r) {
  if ("subdialogtrigger" === e.type || "submenutrigger" === e.type) {
    let i = [...n.getChildren(e.key)][0];
    if (!(i && t(i.textValue))) returnfalse;
    {
      let e = i.clone();
      return r.addNode(e), true
    }
  }
  return "header" === e.type || t(e.textValue)
}