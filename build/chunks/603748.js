/** Chunk was on web.js **/
/** chunk id: 603748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => o
});
var Chunk746047 = require("./746047.js"),
  Chunk822433 = require("./822433.js");
class o extends Chunk822433.i {
  isCell(e) {
    return "cell" === e.type || "rowheader" === e.type || "column" === e.type
  }
  getKeyBelow(e) {
    let t = this.collection.getItem(e);
    if (!t) return null;
    if ("column" === t.type) {
      let e = (0, r.l8)((0, r._P)(t, this.collection));
      if (e) return e.key;
      let n = this.getFirstKey();
      return null != n && this.collection.getItem(n) ? super.getKeyForItemInRowByIndex(n, t.index) : null
    }
    return super.getKeyBelow(e)
  }
  getKeyAbove(e) {
    let t = this.collection.getItem(e);
    if (!t) return null;
    if ("column" === t.type) {
      let e = null != t.parentKey ? this.collection.getItem(t.parentKey) : null;
      return e && "column" === e.type ? e.key : null
    }
    let n = super.getKeyAbove(e),
      r = null != n ? this.collection.getItem(n) : null;
    return r && "headerrow" !== r.type ? n : this.isCell(t) ? this.collection.columns[t.index].key : this.collection.columns[0].key
  }
  findNextColumnKey(e) {
    let t = this.findNextKey(e.key, e => "column" === e.type);
    if (null != t) return t;
    let n = this.collection.headerRows[e.level];
    for (let e of (0, r._P)(n, this.collection))
      if ("column" === e.type) return e.key;
    return null
  }
  findPreviousColumnKey(e) {
    let t = this.findPreviousKey(e.key, e => "column" === e.type);
    if (null != t) return t;
    let n = this.collection.headerRows[e.level],
      i = [...(0, r._P)(n, this.collection)];
    for (let e = i.length - 1; e >= 0; e--) {
      let t = i[e];
      if ("column" === t.type) return t.key
    }
    return null
  }
  getKeyRightOf(e) {
    let t = this.collection.getItem(e);
    return t ? "column" === t.type ? "rtl" === this.direction ? this.findPreviousColumnKey(t) : this.findNextColumnKey(t) : super.getKeyRightOf(e) : null
  }
  getKeyLeftOf(e) {
    let t = this.collection.getItem(e);
    return t ? "column" === t.type ? "rtl" === this.direction ? this.findNextColumnKey(t) : this.findPreviousColumnKey(t) : super.getKeyLeftOf(e) : null
  }
  getKeyForSearch(e, t) {
    var n;
    if (!this.collator) return null;
    let i = this.collection,
      o = null != t ? t : this.getFirstKey();
    if (null == o) return null;
    let a = i.getItem(o);
    (null == a ? true : a.type) === "cell" && (o = null != (n = a.parentKey) ? n : null);
    let s = false;
    for (; null != o;) {
      let n = i.getItem(o);
      if (!n) break;
      if (n.textValue) {
        let t = n.textValue.slice(0, e.length);
        if (0 === this.collator.compare(t, e)) return n.key
      }
      for (let o of (0, r._P)(n, this.collection)) {
        let r = i.columns[o.index];
        if (i.rowHeaderColumnKeys.has(r.key) && o.textValue) {
          let r = o.textValue.slice(0, e.length);
          if (0 === this.collator.compare(r, e)) {
            let e = null != t ? i.getItem(t) : a;
            return (null == e ? true : e.type) === "cell" ? o.key : n.key
          }
        }
      }
      null != (o = this.getKeyBelow(o)) || s || (o = this.getFirstKey(), s = true)
    }
    return null
  }
}