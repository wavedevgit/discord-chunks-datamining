/** Chunk was on web.js **/
/** chunk id: 229114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QL: () => y
});
var Chunk945109 = require("./945109.js"),
  Chunk70768 = require("./70768.js"),
  Chunk253231 = require("./253231.js"),
  Chunk634734 = require("./634734.js");
require("./647438.js");
let s = "react-aria-focus-scope-restore",
  l = null;

function c(e) {
  return e[0].parentElement
}

function u(e) {
  let t = I.getTreeNode(l);
  for (; t && t.scopeRef !== e;) {
    if (t.contain) returnfalse;
    t = t.parent
  }
  returntrue
}

function d(e) {
  return _(e)
}

function f(e, t) {
  return !!e && !!t && t.some(t => t.contains(e))
}

function _(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) returntrue;
  for (let {
      scopeRef: n
    }
    of I.traverse(I.getTreeNode(t)))
    if (n && f(e, n.current)) returntrue;
  returnfalse
}

function p(e, t) {
  var n;
  let r = null == (n = I.getTreeNode(t)) ? true : n.parent;
  for (; r;) {
    if (r.scopeRef === e) returntrue;
    r = r.parent
  }
  returnfalse
}

function h(e, t = false) {
  if (null == e || t) {
    if (null != e) try {
      e.focus()
    } catch {}
  } else try {
    $cgawC$focusSafely(e)
  } catch {}
}

function m(e, t = true) {
  let n = e[0].previousElementSibling,
    r = c(e),
    i = y(r, {
      tabbable: t
    }, e);
  i.currentNode = n;
  let a = i.nextNode();
  return t && !a && ((i = y(r = c(e), {
    tabbable: false
  }, e)).currentNode = n, a = i.nextNode()), a
}

function g(e, t = true) {
  h(m(e, t))
}

function E(e) {
  let t = I.getTreeNode(l);
  for (; t && t.scopeRef !== e;) {
    if (t.nodeToRestore) returnfalse;
    t = t.parent
  }
  return (null == t ? true : t.scopeRef) === e
}

function b(e) {
  e.dispatchEvent(new CustomEvent(s, {
    bubbles: true,
    cancelable: true
  })) && h(e)
}

function y(e, t, n) {
  let s = (null == t ? true : t.tabbable) ? i.W : i.E,
    l = (null == e ? true : e.nodeType) === Node.ELEMENT_NODE ? e : null,
    c = (0, a.r3)(l),
    u = (0, o.A)(c, e || c, NodeFilter.SHOW_ELEMENT, {
      acceptNode(e) {
        var i;
        return (null == t || null == (i = t.from) ? true : i.contains(e)) ? NodeFilter.FILTER_REJECT : s(e) && (0, r.J)(e) && (!n || f(e, n)) && (!(null == t ? true : t.accept) || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  return (null == t ? true : t.from) && (u.currentNode = t.from), u
}
class O {
  get size() {
    return this.fastMap.size
  }
  getTreeNode(e) {
    return this.fastMap.get(e)
  }
  addTreeNode(e, t, n) {
    let r = this.fastMap.get(null != t ? t : null);
    if (!r) return;
    let i = new v({
      scopeRef: e
    });
    r.addChild(i), i.parent = r, this.fastMap.set(e, i), n && (i.nodeToRestore = n)
  }
  addNode(e) {
    this.fastMap.set(e.scopeRef, e)
  }
  removeTreeNode(e) {
    if (null === e) return;
    let t = this.fastMap.get(e);
    if (!t) return;
    let n = t.parent;
    for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && f(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
    let r = t.children;
    n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
  }* traverse(e = this.root) {
    if (null != e.scopeRef && (yield e), e.children.size > 0)
      for (let t of e.children) yield* this.traverse(t)
  }
  clone() {
    var e, t;
    let n = new O;
    for (let r of this.traverse()) require.addTreeNode(Chunk945109.scopeRef, null != (t = null == (e = Chunk945109.parent) ? true : module.scopeRef) ? exports : null, Chunk945109.nodeToRestore);
    return require
  }
  constructor() {
    this.fastMap = new Map, this.root = new v({
      scopeRef: null
    }), this.fastMap.set(null, this.root)
  }
}
class v {
  addChild(e) {
    this.children.add(e), e.parent = this
  }
  removeChild(e) {
    this.children.delete(e), e.parent = true
  }
  constructor(e) {
    this.children = new Set, this.contain = false, this.scopeRef = e.scopeRef
  }
}
let I = new O