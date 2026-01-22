/** Chunk was on web.js **/
/** chunk id: 74733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => a
});
var Chunk198768 = require("./198768.js"),
  Chunk371926 = require("./371926.js");
class a {
  get selectionMode() {
    return this.state.selectionMode
  }
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection
  }
  get selectionBehavior() {
    return this.state.selectionBehavior
  }
  setSelectionBehavior(e) {
    this.state.setSelectionBehavior(e)
  }
  get isFocused() {
    return this.state.isFocused
  }
  setFocused(e) {
    this.state.setFocused(e)
  }
  get focusedKey() {
    return this.state.focusedKey
  }
  get childFocusStrategy() {
    return this.state.childFocusStrategy
  }
  setFocusedKey(e, t) {
    (null == e || this.collection.getItem(e)) && this.state.setFocusedKey(e, t)
  }
  get selectedKeys() {
    return "all" === this.state.selectedKeys ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys
  }
  get rawSelection() {
    return this.state.selectedKeys
  }
  isSelected(e) {
    if ("none" === this.state.selectionMode) returnfalse;
    let t = this.getKey(e);
    return null != t && ("all" === this.state.selectedKeys ? this.canSelectItem(t) : this.state.selectedKeys.has(t))
  }
  get isEmpty() {
    return "all" !== this.state.selectedKeys && 0 === this.state.selectedKeys.size
  }
  get isSelectAll() {
    if (this.isEmpty) returnfalse;
    if ("all" === this.state.selectedKeys) returntrue;
    if (null != this._isSelectAll) return this._isSelectAll;
    let e = this.getSelectAllKeys(),
      t = this.state.selectedKeys;
    return this._isSelectAll = e.every(e => t.has(e)), this._isSelectAll
  }
  get firstSelectedKey() {
    var e;
    let t = null;
    for (let e of this.state.selectedKeys) {
      let n = this.collection.getItem(e);
      (!t || n && 0 > (0, i.o3)(this.collection, n, t)) && (t = n)
    }
    return null != (e = null == t ? true : t.key) ? e : null
  }
  get lastSelectedKey() {
    var e;
    let t = null;
    for (let e of this.state.selectedKeys) {
      let n = this.collection.getItem(e);
      (!t || n && (0, i.o3)(this.collection, n, t) > 0) && (t = n)
    }
    return null != (e = null == t ? true : t.key) ? e : null
  }
  get disabledKeys() {
    return this.state.disabledKeys
  }
  get disabledBehavior() {
    return this.state.disabledBehavior
  }
  extendSelection(e) {
    let t;
    if ("none" === this.selectionMode) return;
    if ("single" === this.selectionMode) return void this.replaceSelection(e);
    let n = this.getKey(e);
    if (null != n) {
      if ("all" === this.state.selectedKeys) t = new(0, r.L)([n], n, n);
      else {
        var i, a;
        let e = this.state.selectedKeys,
          s = null != (i = e.anchorKey) ? i : n;
        for (let i of (t = new(0, r.L)(e, s, n), this.getKeyRange(s, null != (a = e.currentKey) ? a : n))) t.delete(i);
        for (let e of this.getKeyRange(n, s)) this.canSelectItem(e) && t.add(e)
      }
      this.state.setSelectedKeys(t)
    }
  }
  getKeyRange(e, t) {
    let n = this.collection.getItem(e),
      r = this.collection.getItem(t);
    return n && r ? 0 >= (0, i.o3)(this.collection, n, r) ? this.getKeyRangeInternal(e, t) : this.getKeyRangeInternal(t, e) : []
  }
  getKeyRangeInternal(e, t) {
    var n;
    if (null == (n = this.layoutDelegate) ? true : n.getKeyRange) return this.layoutDelegate.getKeyRange(e, t);
    let r = [],
      i = e;
    for (; null != i;) {
      let e = this.collection.getItem(i);
      if (e && ("item" === e.type || "cell" === e.type && this.allowsCellSelection) && r.push(i), i === t) return r;
      i = this.collection.getKeyAfter(i)
    }
    return []
  }
  getKey(e) {
    let t = this.collection.getItem(e);
    if (!t || "cell" === t.type && this.allowsCellSelection) return e;
    for (; t && "item" !== t.type && null != t.parentKey;) t = this.collection.getItem(t.parentKey);
    return t && "item" === t.type ? t.key : null
  }
  toggleSelection(e) {
    if ("none" === this.selectionMode) return;
    if ("single" === this.selectionMode && !this.isSelected(e)) return void this.replaceSelection(e);
    let t = this.getKey(e);
    if (null == t) return;
    let n = new(0, r.L)("all" === this.state.selectedKeys ? this.getSelectAllKeys() : this.state.selectedKeys);
    n.has(t) ? n.delete(t) : this.canSelectItem(t) && (n.add(t), n.anchorKey = t, n.currentKey = t), this.disallowEmptySelection && 0 === n.size || this.state.setSelectedKeys(n)
  }
  replaceSelection(e) {
    if ("none" === this.selectionMode) return;
    let t = this.getKey(e);
    if (null == t) return;
    let n = this.canSelectItem(t) ? new(0, r.L)([t], t, t) : new(0, r.L);
    this.state.setSelectedKeys(n)
  }
  setSelectedKeys(e) {
    if ("none" === this.selectionMode) return;
    let t = new(0, r.L);
    for (let n of e) {
      let e = this.getKey(n);
      if (null != e && (t.add(e), "single" === this.selectionMode)) break
    }
    this.state.setSelectedKeys(t)
  }
  getSelectAllKeys() {
    let e = [],
      t = n => {
        for (; null != n;) {
          if (this.canSelectItem(n)) {
            var r, a;
            let s = this.collection.getItem(n);
            (null == s ? true : s.type) === "item" && e.push(n), (null == s ? true : s.hasChildNodes) && (this.allowsCellSelection || "item" !== s.type) && t(null != (a = null == (r = (0, i.ue)((0, i.iQ)(s, this.collection))) ? true : r.key) ? a : null)
          }
          n = this.collection.getKeyAfter(n)
        }
      };
    return t(this.collection.getFirstKey()), e
  }
  selectAll() {
    this.isSelectAll || "multiple" !== this.selectionMode || this.state.setSelectedKeys("all")
  }
  clearSelection() {
    !this.disallowEmptySelection && ("all" === this.state.selectedKeys || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new(0, r.L))
  }
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll()
  }
  select(e, t) {
    "none" !== this.selectionMode && ("single" === this.selectionMode ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : "toggle" === this.selectionBehavior || t && ("touch" === t.pointerType || "virtual" === t.pointerType) ? this.toggleSelection(e) : this.replaceSelection(e))
  }
  isSelectionEqual(e) {
    if (e === this.state.selectedKeys) returntrue;
    let t = this.selectedKeys;
    if (e.size !== t.size) returnfalse;
    for (let n of e)
      if (!t.has(n)) returnfalse;
    for (let n of t)
      if (!e.has(n)) returnfalse;
    returntrue
  }
  canSelectItem(e) {
    var t;
    if ("none" === this.state.selectionMode || this.state.disabledKeys.has(e)) returnfalse;
    let n = this.collection.getItem(e);
    return !!n && (null == n || null == (t = n.props) || !t.isDisabled) && ("cell" !== n.type || !!this.allowsCellSelection)
  }
  isDisabled(e) {
    var t, n;
    return "all" === this.state.disabledBehavior && (this.state.disabledKeys.has(e) || !!(null == (n = this.collection.getItem(e)) || null == (t = n.props) ? true : t.isDisabled))
  }
  isLink(e) {
    var t, n;
    return !!(null == (n = this.collection.getItem(e)) || null == (t = n.props) ? true : t.href)
  }
  getItemProps(e) {
    var t;
    return null == (t = this.collection.getItem(e)) ? true : t.props
  }
  withCollection(e) {
    return new a(e, this.state, {
      allowsCellSelection: this.allowsCellSelection,
      layoutDelegate: this.layoutDelegate || true
    })
  }
  constructor(e, t, n) {
    var r;
    this.collection = e, this.state = t, this.allowsCellSelection = null != (r = null == n ? true : n.allowsCellSelection) && r, this._isSelectAll = null, this.layoutDelegate = (null == n ? true : n.layoutDelegate) || null
  }
}