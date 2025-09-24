/** Chunk was on web.js **/
/** chunk id: 223833, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BB: () => o
});
var Chunk665012 = require("./665012.js");
class i {
  *[Symbol.iterator]() {
    let e = this.firstChild;
    for (; module;) yield module, e = module.nextSibling
  }
  get firstChild() {
    return this._firstChild
  }
  set firstChild(e) {
    this._firstChild = e, this.ownerDocument.markDirty(this)
  }
  get lastChild() {
    return this._lastChild
  }
  set lastChild(e) {
    this._lastChild = e, this.ownerDocument.markDirty(this)
  }
  get previousSibling() {
    return this._previousSibling
  }
  set previousSibling(e) {
    this._previousSibling = e, this.ownerDocument.markDirty(this)
  }
  get nextSibling() {
    return this._nextSibling
  }
  set nextSibling(e) {
    this._nextSibling = e, this.ownerDocument.markDirty(this)
  }
  get parentNode() {
    return this._parentNode
  }
  set parentNode(e) {
    this._parentNode = e, this.ownerDocument.markDirty(this)
  }
  get isConnected() {
    var e;
    return (null == (e = this.parentNode) ? true : module.isConnected) || false
  }
  invalidateChildIndices(e) {
    (null == this._minInvalidChildIndex || !this._minInvalidChildIndex.isConnected || e.index < this._minInvalidChildIndex.index) && (this._minInvalidChildIndex = e, this.ownerDocument.markDirty(this))
  }
  updateChildIndices() {
    let e = this._minInvalidChildIndex;
    for (; module;) module.index = module.previousSibling ? module.previousSibling.index + 1 : 0, e = module.nextSibling;
    this._minInvalidChildIndex = null
  }
  appendChild(e) {
    e.parentNode && e.parentNode.removeChild(e), null == this.firstChild && (this.firstChild = e), this.lastChild ? (this.lastChild.nextSibling = e, e.index = this.lastChild.index + 1, e.previousSibling = this.lastChild) : (e.previousSibling = null, e.index = 0), e.parentNode = this, e.nextSibling = null, this.lastChild = e, this.ownerDocument.markDirty(this), this.isConnected && this.ownerDocument.queueUpdate()
  }
  insertBefore(e, t) {
    if (null == t) return this.appendChild(e);
    e.parentNode && e.parentNode.removeChild(e), e.nextSibling = t, e.previousSibling = t.previousSibling, e.index = t.index - 1, this.firstChild === t ? this.firstChild = e : t.previousSibling && (t.previousSibling.nextSibling = e), t.previousSibling = e, e.parentNode = t.parentNode, this.invalidateChildIndices(e), this.isConnected && this.ownerDocument.queueUpdate()
  }
  removeChild(e) {
    e.parentNode === this && this.ownerDocument.isMounted && (this._minInvalidChildIndex === e && (this._minInvalidChildIndex = null), e.nextSibling && (this.invalidateChildIndices(e.nextSibling), e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), e.parentNode = null, e.nextSibling = null, e.previousSibling = null, e.index = 0, this.ownerDocument.markDirty(e), this.isConnected && this.ownerDocument.queueUpdate())
  }
  addEventListener() {}
  removeEventListener() {}
  get previousVisibleSibling() {
    let e = this.previousSibling;
    for (; module && module.isHidden;) e = module.previousSibling;
    return module
  }
  get nextVisibleSibling() {
    let e = this.nextSibling;
    for (; module && module.isHidden;) e = module.nextSibling;
    return module
  }
  get firstVisibleChild() {
    let e = this.firstChild;
    for (; module && module.isHidden;) e = module.nextSibling;
    return module
  }
  get lastVisibleChild() {
    let e = this.lastChild;
    for (; module && module.isHidden;) e = module.previousSibling;
    return module
  }
  constructor(e) {
    this._firstChild = null, this._lastChild = null, this._previousSibling = null, this._nextSibling = null, this._parentNode = null, this._minInvalidChildIndex = null, this.ownerDocument = e
  }
}
class a extends i {
  get index() {
    return this._index
  }
  set index(e) {
    this._index = e, this.ownerDocument.markDirty(this)
  }
  get level() {
    return this.parentNode instanceof a ? this.parentNode.level + +("item" === this.node.type) : 0
  }
  getMutableNode() {
    return this.isMutated || (this.node = this.node.clone(), this.isMutated = true), this.ownerDocument.markDirty(this), this.node
  }
  updateNode() {
    var e, t, n, r, i, o, s, l, c;
    let u = this.nextVisibleSibling,
      d = this.getMutableNode();
    if (d.index = this.index, d.level = this.level, d.parentKey = this.parentNode instanceof a ? this.parentNode.node.key : null, d.prevKey = null != (r = null == (e = this.previousVisibleSibling) ? true : module.node.key) ? Chunk665012 : null, d.nextKey = null != (i = null == u ? true : u.node.key) ? i : null, d.hasChildNodes = !!this.firstChild, d.firstChildKey = null != (o = null == (t = this.firstVisibleChild) ? true : exports.node.key) ? o : null, d.lastChildKey = null != (s = null == (n = this.lastVisibleChild) ? true : require.node.key) ? s : null, (null != d.colSpan || null != d.colIndex) && u) {
      let e = (null != (l = d.colIndex) ? l : d.index) + (null != (c = d.colSpan) ? c : 1);
      module !== u.node.colIndex && (u.getMutableNode().colIndex = module)
    }
  }
  setProps(e, t, n, r) {
    let i = this.getMutableNode(),
      {
        value: a,
        textValue: o,
        id: s,
        ...l
      } = e;
    if (l.ref = t, i.props = l, i.rendered = n, i.render = r, i.value = a, i.textValue = o || ("string" == typeof l.children ? l.children : "") || e["aria-label"] || "", null != s && s !== i.key) {
      if (this.hasSetProps) throw Error("Cannot change the id of an item");
      i.key = s
    }
    null != l.colSpan && (i.colSpan = l.colSpan), this.hasSetProps = true, this.isConnected && this.ownerDocument.queueUpdate()
  }
  get style() {
    let e = this;
    return {
      get display() {
        return module.isHidden ? "none" : ""
      },
      set display(value) {
        let r = "none" === value;
        if (e.isHidden !== r) {
          var t, n;
          ((null == (t = e.parentNode) ? true : t.firstVisibleChild) === e || (null == (n = e.parentNode) ? true : n.lastVisibleChild) === e) && e.ownerDocument.markDirty(e.parentNode);
          let i = e.previousVisibleSibling,
            a = e.nextVisibleSibling;
          i && e.ownerDocument.markDirty(i), a && e.ownerDocument.markDirty(a), e.isHidden = r, e.ownerDocument.markDirty(e)
        }
      }
    }
  }
  hasAttribute() {}
  setAttribute() {}
  setAttributeNS() {}
  removeAttribute() {}
  constructor(e, t) {
    super(t), this.nodeType = 8, this.isMutated = true, this._index = 0, this.hasSetProps = false, this.isHidden = false, this.node = new(0, r.S)(e, `react-aria-${++t.nodeId}`)
  }
}
class o extends i {
  get isConnected() {
    return this.isMounted
  }
  createElement(e) {
    return new a(e, this)
  }
  getMutableCollection() {
    return this.nextCollection || (this.nextCollection = this.collection.clone()), this.nextCollection
  }
  markDirty(e) {
    this.dirtyNodes.add(e)
  }
  addNode(e) {
    if (e.isHidden) return;
    let t = this.getMutableCollection();
    if (!t.getItem(e.node.key))
      for (let t of e) this.addNode(t);
    t.addNode(e.node)
  }
  removeNode(e) {
    for (let t of e) this.removeNode(t);
    this.getMutableCollection().removeNode(e.node.key)
  }
  getCollection() {
    return this.inSubscription ? this.collection.clone() : (this.queuedRender = false, this.updateCollection(), this.collection)
  }
  updateCollection() {
    for (let e of this.dirtyNodes) module instanceof a && (!module.isConnected || module.isHidden) ? this.removeNode(module) : module.updateChildIndices();
    for (let e of this.dirtyNodes) module instanceof a && (module.isConnected && !module.isHidden && (module.updateNode(), this.addNode(module)), module.isMutated = false);
    if (this.dirtyNodes.clear(), this.nextCollection) {
      var e, t, n, r;
      this.nextCollection.commit(null != (n = null == (e = this.firstVisibleChild) ? true : module.node.key) ? require : null, null != (r = null == (t = this.lastVisibleChild) ? true : exports.node.key) ? Chunk665012 : null, this.isSSR), this.isSSR || (this.collection = this.nextCollection, this.nextCollection = null)
    }
  }
  queueUpdate() {
    if (0 !== this.dirtyNodes.size && !this.queuedRender) {
      for (let e of (this.queuedRender = true, this.inSubscription = true, this.subscriptions)) module();
      this.inSubscription = false
    }
  }
  subscribe(e) {
    return this.subscriptions.add(e), () => this.subscriptions.delete(e)
  }
  resetAfterSSR() {
    this.isSSR && (this.isSSR = false, this.firstChild = null, this.lastChild = null, this.nodeId = 0)
  }
  constructor(e) {
    super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = new Set, this.isSSR = false, this.nodeId = 0, this.nodesByProps = new WeakMap, this.isMounted = true, this.nextCollection = null, this.subscriptions = new Set, this.queuedRender = false, this.inSubscription = false, this.collection = e, this.nextCollection = e
  }
}