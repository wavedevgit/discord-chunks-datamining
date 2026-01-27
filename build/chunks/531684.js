/** Chunk was on web.js **/
/** chunk id: 531684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
class r {
  *[Symbol.iterator]() {
    yield*[...this.rows]
  }
  get size() {
    return [...this.rows].length
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
    var e;
    return null == (e = [...this.rows][0]) ? true : e.key
  }
  getLastKey() {
    var e;
    let t = [...this.rows];
    return null == (e = t[t.length - 1]) ? true : e.key
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
    this.keyMap = new Map, this.keyMap = new Map, this.columnCount = null == e ? true : e.columnCount, this.rows = [];
    let t = r => {
        var i, a, o, s, l;
        let c = this.keyMap.get(r.key);
        e.visitNode && (r = e.visitNode(r)), this.keyMap.set(r.key, r);
        let u = new Set,
          d = null,
          f = false;
        if ("item" === r.type) {
          for (let e of r.childNodes)
            if ((null == (i = e.props) ? true : i.colSpan) !== true) {
              f = true;
              break
            }
        }
        for (let e of r.childNodes) "cell" === e.type && f && (e.colspan = null == (a = e.props) ? true : a.colSpan, e.colSpan = null == (o = e.props) ? true : o.colSpan, e.colIndex = d ? (null != (s = d.colIndex) ? s : d.index) + (null != (l = d.colSpan) ? l : 1) : e.index), "cell" === e.type && null == e.parentKey && (e.parentKey = r.key), u.add(e.key), d ? (d.nextKey = e.key, e.prevKey = d.key) : e.prevKey = null, t(e), d = e;
        if (d && (d.nextKey = null), c)
          for (let e of c.childNodes) u.has(e.key) || n(e)
      },
      n = e => {
        for (let t of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(t.key) === t && n(t)
      },
      r = null;
    for (let [n, u] of e.items.entries()) {
      var i, a, o, s, l, c;
      let e = {
        ...u,
        level: null != (i = u.level) ? i : 0,
        key: null != (a = u.key) ? a : "row-" + n,
        type: null != (o = u.type) ? o : "row",
        value: null != (s = u.value) ? s : null,
        hasChildNodes: true,
        childNodes: [...u.childNodes],
        rendered: u.rendered,
        textValue: null != (l = u.textValue) ? l : "",
        index: null != (c = u.index) ? c : n
      };
      r ? (r.nextKey = e.key, e.prevKey = r.key) : e.prevKey = null, this.rows.push(e), t(e), r = e
    }
    r && (r.nextKey = null)
  }
}