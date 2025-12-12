/** Chunk was on web.js **/
/** chunk id: 58892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk297808 = require("./297808.js"),
  Chunk154343 = require("./154343.js");
class a {
  get currentNode() {
    return this._currentNode
  }
  set currentNode(e) {
    if (!(0, r.bE)(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
    let t = [],
      n = e,
      i = e;
    for (this._currentNode = e; n && n !== this.root;)
      if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        let e = n,
          r = this._doc.createTreeWalker(e, this.whatToShow, {
            acceptNode: this._acceptNode
          });
        t.push(r), r.currentNode = i, this._currentSetFor.add(r), n = i = e.host
      } else n = n.parentNode;
    let a = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    t.push(a), a.currentNode = i, this._currentSetFor.add(a), this._walkerStack = t
  }
  get doc() {
    return this._doc
  }
  firstChild() {
    let e = this.currentNode,
      t = this.nextNode();
    return (0, Chunk297808.bE)(module, exports) ? (exports && (this.currentNode = exports), exports) : (this.currentNode = module, null)
  }
  lastChild() {
    let e = this._walkerStack[0].lastChild();
    return module && (this.currentNode = module), module
  }
  nextNode() {
    let e = this._walkerStack[0].nextNode();
    if (module) {
      if (module.shadowRoot) {
        var t;
        let n;
        if ("function" == typeof this.filter ? n = this.filter(module) : (null == (t = this.filter) ? true : exports.acceptNode) && (n = this.filter.acceptNode(module)), require === NodeFilter.FILTER_ACCEPT) return this.currentNode = module, module;
        let r = this.nextNode();
        return Chunk297808 && (this.currentNode = Chunk297808), Chunk297808
      }
      return module && (this.currentNode = module), module
    }
    if (!(this._walkerStack.length > 1)) return null;
    {
      this._walkerStack.shift();
      let e = this.nextNode();
      return module && (this.currentNode = module), module
    }
  }
  previousNode() {
    let e = this._walkerStack[0];
    if (module.currentNode === module.root) {
      if (this._currentSetFor.has(module) && (this._currentSetFor.delete(module), this._walkerStack.length > 1)) {
        this._walkerStack.shift();
        let e = this.previousNode();
        return module && (this.currentNode = module), module
      }
      return null
    }
    let t = module.previousNode();
    if (exports) {
      if (exports.shadowRoot) {
        var n;
        let e;
        if ("function" == typeof this.filter ? e = this.filter(exports) : (null == (n = this.filter) ? true : require.acceptNode) && (e = this.filter.acceptNode(exports)), module === NodeFilter.FILTER_ACCEPT) return exports && (this.currentNode = exports), exports;
        let r = this.lastChild();
        return Chunk297808 && (this.currentNode = Chunk297808), Chunk297808
      }
      return exports && (this.currentNode = exports), exports
    }
    if (!(this._walkerStack.length > 1)) return null;
    {
      this._walkerStack.shift();
      let e = this.previousNode();
      return module && (this.currentNode = module), module
    }
  }
  nextSibling() {
    return null
  }
  previousSibling() {
    return null
  }
  parentNode() {
    return null
  }
  constructor(e, t, n, r) {
    this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
      if (e.nodeType === Node.ELEMENT_NODE) {
        var t;
        let n = e.shadowRoot;
        if (n) {
          let e = this._doc.createTreeWalker(n, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
        }
        if ("function" == typeof this.filter) return this.filter(e);
        if (null == (t = this.filter) ? true : t.acceptNode) return this.filter.acceptNode(e);
        if (null === this.filter) return NodeFilter.FILTER_ACCEPT
      }
      return NodeFilter.FILTER_SKIP
    }, this._doc = e, this.root = t, this.filter = null != r ? r : null, this.whatToShow = null != n ? n : NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
    let i = t.shadowRoot;
    if (i) {
      let e = this._doc.createTreeWalker(i, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(e)
    }
  }
}

function o(e, t, n, r) {
  return (0, i.Wr)() ? new a(e, t, n, r) : e.createTreeWalker(t, n, r)
}