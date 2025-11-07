/** Chunk was on web.js **/
/** chunk id: 750528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E7: () => L,
  MT: () => h,
  QL: () => x
});
var Chunk782013 = require("./782013.js"),
  Chunk641948 = require("./641948.js"),
  Chunk743581 = require("./743581.js"),
  Chunk927917 = require("./927917.js"),
  Chunk696628 = require("./696628.js"),
  Chunk156307 = require("./156307.js"),
  Chunk521707 = require("./521707.js"),
  Chunk495873 = require("./495873.js"),
  Chunk647438 = require("./647438.js");
let f = Chunk647438.createContext(null),
  _ = "react-aria-focus-scope-restore",
  p = null;

function h(e) {
  let {
    children: t,
    contain: n,
    restoreFocus: o,
    autoFocus: s
  } = e, l = (0, d.useRef)(null), c = (0, d.useRef)(null), u = (0, d.useRef)([]), {
    parentNode: h
  } = (0, d.useContext)(f) || {}, g = (0, d.useMemo)(() => new k({
    scopeRef: u
  }), [u]);
  (0, r.b)(() => {
    let e = h || U.root;
    if (U.getTreeNode(e.scopeRef) && p && !S(p, e.scopeRef)) {
      let t = U.getTreeNode(p);
      t && (e = t)
    }
    e.addChild(g), U.addNode(g)
  }, [g, h]), (0, r.b)(() => {
    let e = U.getTreeNode(u);
    e && (e.contain = !!n)
  }, [n]), (0, r.b)(() => {
    var e;
    let t = null == (e = l.current) ? true : e.nextSibling,
      n = [],
      r = e => e.stopPropagation();
    for (; t && t !== c.current;) n.push(t), t.addEventListener(_, r), t = t.nextSibling;
    return u.current = n, () => {
      for (let e of n) e.removeEventListener(_, r)
    }
  }, [t]), R(u, o, n), y(u, n), w(u, o, n), N(u, s), (0, d.useEffect)(() => {
    let e = (0, i.vY)((0, a.r3)(u.current ? u.current[0] : true)),
      t = null;
    if (v(e, u.current)) {
      for (let n of U.traverse()) n.scopeRef && v(e, n.scopeRef.current) && (t = n);
      t === U.getTreeNode(u) && (p = t.scopeRef)
    }
  }, [u]), (0, r.b)(() => () => {
    var e, t, n;
    let r = null != (n = null == (t = U.getTreeNode(u)) || null == (e = t.parent) ? true : e.scopeRef) ? n : null;
    (u === p || S(u, p)) && (!r || U.getTreeNode(r)) && (p = r), U.removeTreeNode(u)
  }, [u]);
  let E = (0, d.useMemo)(() => m(u), []),
    b = (0, d.useMemo)(() => ({
      focusManager: E,
      parentNode: g
    }), [g, E]);
  return d.createElement(f.Provider, {
    value: b
  }, d.createElement("span", {
    "data-focus-scope-start": true,
    hidden: true,
    ref: l
  }), t, d.createElement("span", {
    "data-focus-scope-end": true,
    hidden: true,
    ref: c
  }))
}

function m(e) {
  return {
    focusNext(t = {}) {
      var n;
      let r = e.current,
        {
          from: o,
          tabbable: s,
          wrap: l,
          accept: c
        } = t,
        u = o || (0, i.vY)((0, a.r3)(null != (n = r[0]) ? n : true)),
        d = r[0].previousElementSibling,
        f = x(g(r), {
          tabbable: s,
          accept: c
        }, r);
      f.currentNode = v(u, r) ? u : d;
      let _ = f.nextNode();
      return !_ && l && (f.currentNode = d, _ = f.nextNode()), _ && T(_, true), _
    },
    focusPrevious(t = {}) {
      var n;
      let r = e.current,
        {
          from: o,
          tabbable: s,
          wrap: l,
          accept: c
        } = t,
        u = o || (0, i.vY)((0, a.r3)(null != (n = r[0]) ? n : true)),
        d = r[r.length - 1].nextElementSibling,
        f = x(g(r), {
          tabbable: s,
          accept: c
        }, r);
      f.currentNode = v(u, r) ? u : d;
      let _ = f.previousNode();
      return !_ && l && (f.currentNode = d, _ = f.previousNode()), _ && T(_, true), _
    },
    focusFirst(t = {}) {
      let n = e.current,
        {
          tabbable: r,
          accept: i
        } = t,
        a = x(g(n), {
          tabbable: r,
          accept: i
        }, n);
      a.currentNode = n[0].previousElementSibling;
      let o = a.nextNode();
      return o && T(o, true), o
    },
    focusLast(t = {}) {
      let n = e.current,
        {
          tabbable: r,
          accept: i
        } = t,
        a = x(g(n), {
          tabbable: r,
          accept: i
        }, n);
      a.currentNode = n[n.length - 1].nextElementSibling;
      let o = a.previousNode();
      return o && T(o, true), o
    }
  }
}

function g(e) {
  return e[0].parentElement
}

function E(e) {
  let t = U.getTreeNode(p);
  for (; t && t.scopeRef !== e;) {
    if (t.contain) returnfalse;
    t = t.parent
  }
  returntrue
}

function b(e) {
  if (e.checked) returntrue;
  let t = [];
  if (e.form) {
    var n, r;
    let i = null == (r = e.form) || null == (n = r.elements) ? true : n.namedItem(e.name);
    t = [...null != i ? i : []]
  } else t = [...(0, a.r3)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
  return !!t && !t.some(e => e.checked)
}

function y(e, t) {
  let n = (0, d.useRef)(true),
    s = (0, d.useRef)(true);
  (0, r.b)(() => {
    let r = e.current;
    if (!t) {
      s.current && (cancelAnimationFrame(s.current), s.current = true);
      return
    }
    let l = (0, a.r3)(r ? r[0] : true),
      u = t => {
        if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !E(e) || t.isComposing) return;
        let n = (0, i.vY)(l),
          r = e.current;
        if (!r || !v(n, r)) return;
        let a = x(g(r), {
          tabbable: true
        }, r);
        if (!n) return;
        a.currentNode = n;
        let o = t.shiftKey ? a.previousNode() : a.nextNode();
        o || (a.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, o = t.shiftKey ? a.previousNode() : a.nextNode()), t.preventDefault(), o && T(o, true)
      },
      d = t => {
        (!p || S(p, e)) && v((0, i.NI)(t), e.current) ? (p = e, n.current = (0, i.NI)(t)) : E(e) && !I((0, i.NI)(t), e) ? n.current ? n.current.focus() : p && p.current && C(p.current) : E(e) && (n.current = (0, i.NI)(t))
      },
      f = t => {
        s.current && cancelAnimationFrame(s.current), s.current = requestAnimationFrame(() => {
          let r = (0, c.Jz)(),
            a = ("virtual" === r || null === r) && (0, o.Dt)() && (0, o.i7)(),
            s = (0, i.vY)(l);
          if (!a && s && E(e) && !I(s, e)) {
            p = e;
            let r = (0, i.NI)(t);
            if (r && r.isConnected) {
              var u;
              n.current = r, null == (u = n.current) || u.focus()
            } else p.current && C(p.current)
          }
        })
      };
    return l.addEventListener("keydown", u, false), l.addEventListener("focusin", d, false), null == r || r.forEach(e => e.addEventListener("focusin", d, false)), null == r || r.forEach(e => e.addEventListener("focusout", f, false)), () => {
      l.removeEventListener("keydown", u, false), l.removeEventListener("focusin", d, false), null == r || r.forEach(e => e.removeEventListener("focusin", d, false)), null == r || r.forEach(e => e.removeEventListener("focusout", f, false))
    }
  }, [e, t]), (0, r.b)(() => () => {
    s.current && cancelAnimationFrame(s.current)
  }, [s])
}

function O(e) {
  return I(e)
}

function v(e, t) {
  return !!e && !!t && t.some(t => t.contains(e))
}

function I(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) returntrue;
  for (let {
      scopeRef: n
    }
    of U.traverse(U.getTreeNode(t)))
    if (n && v(e, n.current)) returntrue;
  returnfalse
}

function S(e, t) {
  var n;
  let r = null == (n = U.getTreeNode(t)) ? true : n.parent;
  for (; r;) {
    if (r.scopeRef === e) returntrue;
    r = r.parent
  }
  returnfalse
}

function T(e, t = false) {
  if (null == e || t) {
    if (null != e) try {
      e.focus()
    } catch {}
  } else try {
    (0, u.e)(e)
  } catch {}
}

function A(e, t = true) {
  let n = e[0].previousElementSibling,
    r = g(e),
    i = x(r, {
      tabbable: t
    }, e);
  i.currentNode = n;
  let a = i.nextNode();
  return t && !a && ((i = x(r = g(e), {
    tabbable: false
  }, e)).currentNode = n, a = i.nextNode()), a
}

function C(e, t = true) {
  T(A(e, t))
}

function N(e, t) {
  let n = d.useRef(t);
  (0, d.useEffect)(() => {
    if (n.current) {
      p = e;
      let t = (0, a.r3)(e.current ? e.current[0] : true);
      !v((0, i.vY)(t), p.current) && e.current && C(e.current)
    }
    n.current = false
  }, [e])
}

function R(e, t, n) {
  (0, r.b)(() => {
    if (t || n) return;
    let r = e.current,
      o = (0, a.r3)(r ? r[0] : true),
      s = t => {
        let n = (0, i.NI)(t);
        v(n, e.current) ? p = e : O(n) || (p = null)
      };
    return o.addEventListener("focusin", s, false), null == r || r.forEach(e => e.addEventListener("focusin", s, false)), () => {
      o.removeEventListener("focusin", s, false), null == r || r.forEach(e => e.removeEventListener("focusin", s, false))
    }
  }, [e, t, n])
}

function P(e) {
  let t = U.getTreeNode(p);
  for (; t && t.scopeRef !== e;) {
    if (t.nodeToRestore) returnfalse;
    t = t.parent
  }
  return (null == t ? true : t.scopeRef) === e
}

function w(e, t, n) {
  let o = (0, d.useRef)("undefined" != typeof document ? (0, i.vY)((0, a.r3)(e.current ? e.current[0] : true)) : null);
  (0, r.b)(() => {
    let r = e.current,
      o = (0, a.r3)(r ? r[0] : true);
    if (!t || n) return;
    let s = () => {
      (!p || S(p, e)) && v((0, i.vY)(o), e.current) && (p = e)
    };
    return o.addEventListener("focusin", s, false), null == r || r.forEach(e => e.addEventListener("focusin", s, false)), () => {
      o.removeEventListener("focusin", s, false), null == r || r.forEach(e => e.removeEventListener("focusin", s, false))
    }
  }, [e, n]), (0, r.b)(() => {
    let r = (0, a.r3)(e.current ? e.current[0] : true);
    if (!t) return;
    let i = t => {
      if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !E(e) || t.isComposing) return;
      let n = r.activeElement;
      if (!I(n, e) || !P(e)) return;
      let i = U.getTreeNode(e);
      if (!i) return;
      let a = i.nodeToRestore,
        o = x(r.body, {
          tabbable: true
        });
      o.currentNode = n;
      let s = t.shiftKey ? o.previousNode() : o.nextNode();
      if (a && a.isConnected && a !== r.body || (a = true, i.nodeToRestore = true), (!s || !I(s, e)) && a) {
        o.currentNode = a;
        do s = t.shiftKey ? o.previousNode() : o.nextNode(); while (I(s, e));
        t.preventDefault(), t.stopPropagation(), s ? T(s, true) : O(a) ? T(a, true) : n.blur()
      }
    };
    return n || r.addEventListener("keydown", i, true), () => {
      n || r.removeEventListener("keydown", i, true)
    }
  }, [e, t, n]), (0, r.b)(() => {
    var n;
    let r = (0, a.r3)(e.current ? e.current[0] : true);
    if (!t) return;
    let s = U.getTreeNode(e);
    if (s) return s.nodeToRestore = null != (n = o.current) ? n : true, () => {
      let n = U.getTreeNode(e);
      if (!n) return;
      let a = n.nodeToRestore,
        o = (0, i.vY)(r);
      if (t && a && (o && I(o, e) || o === r.body && P(e))) {
        let t = U.clone();
        requestAnimationFrame(() => {
          if (r.activeElement === r.body) {
            let n = t.getTreeNode(e);
            for (; n;) {
              if (n.nodeToRestore && n.nodeToRestore.isConnected) return void D(n.nodeToRestore);
              n = n.parent
            }
            for (n = t.getTreeNode(e); n;) {
              if (n.scopeRef && n.scopeRef.current && U.getTreeNode(n.scopeRef)) return void D(A(n.scopeRef.current, true));
              n = n.parent
            }
          }
        })
      }
    }
  }, [e, t])
}

function D(e) {
  e.dispatchEvent(new CustomEvent(_, {
    bubbles: true,
    cancelable: true
  })) && T(e)
}

function x(e, t, n) {
  let r = (null == t ? true : t.tabbable) ? s.W : s.E,
    i = (null == e ? true : e.nodeType) === Node.ELEMENT_NODE ? e : null,
    o = (0, a.r3)(i),
    c = (0, l.A)(o, e || o, NodeFilter.SHOW_ELEMENT, {
      acceptNode(e) {
        var i;
        return (null == t || null == (i = t.from) ? true : i.contains(e)) || (null == t ? true : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type") && (!b(e) || "INPUT" === c.currentNode.tagName && "radio" === c.currentNode.type && c.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : r(e) && (!n || v(e, n)) && (!(null == t ? true : t.accept) || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  return (null == t ? true : t.from) && (c.currentNode = t.from), c
}

function L(e, t = {}) {
  return {
    focusNext(n = {}) {
      let r = e.current;
      if (!r) return null;
      let {
        from: o,
        tabbable: s = t.tabbable,
        wrap: l = t.wrap,
        accept: c = t.accept
      } = n, u = o || (0, i.vY)((0, a.r3)(r)), d = x(r, {
        tabbable: s,
        accept: c
      });
      r.contains(u) && (d.currentNode = u);
      let f = d.nextNode();
      return !f && l && (d.currentNode = r, f = d.nextNode()), f && T(f, true), f
    },
    focusPrevious(n = t) {
      let r = e.current;
      if (!r) return null;
      let {
        from: o,
        tabbable: s = t.tabbable,
        wrap: l = t.wrap,
        accept: c = t.accept
      } = n, u = o || (0, i.vY)((0, a.r3)(r)), d = x(r, {
        tabbable: s,
        accept: c
      });
      if (r.contains(u)) d.currentNode = u;
      else {
        let e = M(d);
        return e && T(e, true), null != e ? e : null
      }
      let f = d.previousNode();
      if (!f && l) {
        d.currentNode = r;
        let e = M(d);
        if (!e) return null;
        f = e
      }
      return f && T(f, true), null != f ? f : null
    },
    focusFirst(n = t) {
      let r = e.current;
      if (!r) return null;
      let {
        tabbable: i = t.tabbable,
        accept: a = t.accept
      } = n, o = x(r, {
        tabbable: i,
        accept: a
      }).nextNode();
      return o && T(o, true), o
    },
    focusLast(n = t) {
      let r = e.current;
      if (!r) return null;
      let {
        tabbable: i = t.tabbable,
        accept: a = t.accept
      } = n, o = M(x(r, {
        tabbable: i,
        accept: a
      }));
      return o && T(o, true), null != o ? o : null
    }
  }
}

function M(e) {
  let t, n;
  do(t = e.lastChild()) && (n = t); while (t);
  return n
}
class j {
  get size() {
    return this.fastMap.size
  }
  getTreeNode(e) {
    return this.fastMap.get(e)
  }
  addTreeNode(e, t, n) {
    let r = this.fastMap.get(null != t ? t : null);
    if (!r) return;
    let i = new k({
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
    for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && v(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
    let r = t.children;
    n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
  }* traverse(e = this.root) {
    if (null != e.scopeRef && (yield e), e.children.size > 0)
      for (let t of e.children) yield* this.traverse(t)
  }
  clone() {
    var e, t;
    let n = new j;
    for (let r of this.traverse()) require.addTreeNode(Chunk782013.scopeRef, null != (t = null == (e = Chunk782013.parent) ? true : module.scopeRef) ? exports : null, Chunk782013.nodeToRestore);
    return require
  }
  constructor() {
    this.fastMap = new Map, this.root = new k({
      scopeRef: null
    }), this.fastMap.set(null, this.root)
  }
}
class k {
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
let U = new j