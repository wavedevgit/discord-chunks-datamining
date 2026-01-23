/** Chunk was on web.js **/
/** chunk id: 253018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => tB,
  Fo: () => tw,
  RV: () => ex,
  f7: () => eW,
  o$: () => tq,
  rL: () => eb,
  zL: () => tM
});
var Chunk877413 = require("./877413.js"),
  i = require.n(Chunk877413),
  Chunk805353 = require("./805353.js"),
  s = require.n(Chunk805353),
  Chunk879378 = require("./879378.js"),
  l = require.n(Chunk879378),
  Chunk64700 = require("./64700.js"),
  Chunk302588 = require("./302588.js"),
  Chunk719442 = require("./719442.js"),
  Chunk234379 = require("./234379.js"),
  Chunk294106 = require("./294106.js"),
  Chunk340287 = require("./340287.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
var E = 0;
class y {
  constructor() {
    this.id = "".concat(E++)
  }
}
var b = new WeakMap,
  O = new WeakMap,
  v = new WeakMap,
  A = new WeakMap,
  I = new WeakMap,
  S = new WeakMap,
  T = new WeakMap,
  C = new WeakMap,
  N = new WeakMap,
  w = new WeakMap,
  R = new WeakMap,
  P = new WeakMap,
  D = new WeakMap,
  x = new WeakMap,
  L = new WeakMap,
  j = new WeakMap,
  M = new WeakMap,
  k = new WeakMap,
  U = new WeakMap,
  G = new WeakMap,
  V = new WeakMap,
  F = Symbol("placeholder"),
  B = Symbol("mark-placeholder"),
  H = globalThis.Text,
  Y = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
  W = e => z(e) && 8 === e.nodeType,
  K = e => z(e) && 1 === e.nodeType,
  z = e => {
    var t = Y(e);
    return !!t && e instanceof t.Node
  },
  q = e => {
    var t = e && e.anchorNode && Y(e.anchorNode);
    return !!t && e instanceof t.Selection
  },
  Z = e => z(e) && 3 === e.nodeType,
  X = e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
  Q = e => {
    var [t, n] = e;
    if (K(t) && t.childNodes.length) {
      var r = n === t.childNodes.length,
        i = r ? n - 1 : n;
      for ([t, i] = $(t, i, r ? "backward" : "forward"), r = i < n; K(t) && t.childNodes.length;) {
        var a = r ? t.childNodes.length - 1 : 0;
        t = ee(t, a, r ? "backward" : "forward")
      }
      n = r && null != t.textContent ? t.textContent.length : 0
    }
    return [t, n]
  },
  J = e => {
    for (var t = e && e.parentNode; t;) {
      if ("[object ShadowRoot]" === t.toString()) returntrue;
      t = t.parentNode
    }
    returnfalse
  },
  $ = (e, t, n) => {
    for (var {
        childNodes: r
      } = e, i = r[t], a = t, s = false, o = false;
      (W(i) || K(i) && 0 === i.childNodes.length || K(i) && "false" === i.getAttribute("contenteditable")) && (!s || !o);) {
      if (a >= r.length) {
        s = true, a = t - 1, n = "backward";
        continue
      }
      if (a < 0) {
        o = true, a = t + 1, n = "forward";
        continue
      }
      i = r[a], t = a, a += "forward" === n ? 1 : false
    }
    return [i, t]
  },
  ee = (e, t, n) => {
    var [r] = $(e, t, n);
    return r
  },
  et = e => {
    var t = "";
    if (Z(e) && e.nodeValue) return e.nodeValue;
    if (K(e)) {
      for (var n of Array.from(e.childNodes)) t += et(n);
      var r = getComputedStyle(e).getPropertyValue("display");
      ("block" === r || "list" === r || "BR" === e.tagName) && (t += "\n")
    }
    return t
  },
  en = /data-slate-fragment="(.+?)"/m,
  er = e => {
    var [, t] = e.getData("text/html").match(en) || [];
    return t
  },
  ei = (e, t, n) => {
    var {
      target: r
    } = t;
    if (K(r) && r.matches('[contentEditable="false"]')) returnfalse;
    var {
      document: i
    } = eb.getWindow(e);
    if (i.contains(r)) return eb.hasDOMNode(e, r, {
      editable: true
    });
    var a = n.find(e => {
      var {
        addedNodes: t,
        removedNodes: n
      } = e;
      for (var i of t)
        if (i === r || i.contains(r)) returntrue;
      for (var a of n)
        if (a === r || a.contains(r)) returntrue
    });
    return !!a && a !== t && ei(e, a, n)
  },
  ea = parseInt(Chunk64700.version.split(".")[0], 10) >= 17,
  es = "u" > typeof navigator && "u" > typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
  eo = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
  el = "u" > typeof navigator && /Android/.test(navigator.userAgent),
  ec = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
  eu = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
  ed = "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
  ef = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
  ep = "u" > typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
  e_ = el && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
  eh = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
  em = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
  eg = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
  eE = "u" > typeof window && true !== window.document && true !== window.document.createElement,
  ey = (!ep || !e_) && !ed && "u" > typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
  eb = {
    isComposing: e => !!P.get(e),
    getWindow(e) {
      var t = v.get(e);
      if (!t) throw Error("Unable to find a host window element for this editor");
      return t
    },
    findKey(e, t) {
      var n = C.get(t);
      return n || (n = new y, C.set(t, n)), n
    },
    findPath(e, t) {
      for (var n = [], r = t;;) {
        var i = O.get(r);
        if (null == i)
          if (d.KE.isEditor(r)) return n;
          else break;
        var a = b.get(r);
        if (null == a) break;
        n.unshift(a), r = i
      }
      throw Error("Unable to find the path for Slate node: ".concat(d.h6.stringify(t)))
    },
    findDocumentOrShadowRoot(e) {
      var t = eb.toDOMNode(e, e),
        n = t.getRootNode();
      return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument
    },
    isFocused: e => !!R.get(e),
    isReadOnly: e => !!w.get(e),
    blur(e) {
      var t = eb.toDOMNode(e, e),
        n = eb.findDocumentOrShadowRoot(e);
      R.set(e, false), n.activeElement === t && t.blur()
    },
    focus(e) {
      var t = eb.toDOMNode(e, e),
        n = eb.findDocumentOrShadowRoot(e);
      R.set(e, true), n.activeElement !== t && t.focus({
        preventScroll: true
      })
    },
    deselect(e) {
      var {
        selection: t
      } = e, n = eb.findDocumentOrShadowRoot(e).getSelection();
      n && n.rangeCount > 0 && n.removeAllRanges(), t && d.gB.deselect(e)
    },
    hasDOMNode(e, t) {
      var n, r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
        {
          editable: i = false
        } = r,
        a = eb.toDOMNode(e, e);
      try {
        n = K(t) ? t : t.parentElement
      } catch (e) {
        if (!e.message.includes('Permission denied to access property "nodeType"')) throw e
      }
      return !!n && n.closest("[data-slate-editor]") === a && (!i || !!n.isContentEditable || "boolean" == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === a || !!n.getAttribute("data-slate-zero-width"))
    },
    insertData(e, t) {
      e.insertData(t)
    },
    insertFragmentData: (e, t) => e.insertFragmentData(t),
    insertTextData: (e, t) => e.insertTextData(t),
    setFragmentData(e, t, n) {
      e.setFragmentData(t, n)
    },
    toDOMNode(e, t) {
      var n = N.get(e),
        r = d.KE.isEditor(t) ? A.get(e) : null == n ? true : n.get(eb.findKey(e, t));
      if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(d.h6.stringify(t)));
      return r
    },
    toDOMPoint(e, t) {
      var [n] = d.KE.node(e, t.path), r = eb.toDOMNode(e, n);
      d.KE.void(e, {
        at: t
      }) && (t = {
        path: t.path,
        offset: 0
      });
      for (var i = "[data-slate-string], [data-slate-zero-width]", a = Array.from(r.querySelectorAll(i)), s = 0, o = 0; o < a.length; o++) {
        var l = a[o],
          c = l.childNodes[0];
        if (null != c && null != c.textContent) {
          var {
            length: u
          } = c.textContent, f = l.getAttribute("data-slate-length"), p = null == f ? u : parseInt(f, 10), _ = s + p, h = a[o + 1];
          if (t.offset === _ && null != h && h.hasAttribute("data-slate-mark-placeholder")) {
            var m, g, E = h.childNodes[0];
            m = [E instanceof H ? E : h, null != (g = h.textContent) && g.startsWith("\uFEFF") ? 1 : 0];
            break
          }
          if (t.offset <= _) {
            m = [c, Math.min(u, Math.max(0, t.offset - s))];
            break
          }
          s = _
        }
      }
      if (!m) throw Error("Cannot resolve a DOM point from Slate point: ".concat(d.h6.stringify(t)));
      return m
    },
    toDOMRange(e, t) {
      var {
        anchor: n,
        focus: r
      } = t, i = d.Q6.isBackward(t), a = eb.toDOMPoint(e, n), s = d.Q6.isCollapsed(t) ? a : eb.toDOMPoint(e, r), o = eb.getWindow(e).document.createRange(), [l, c] = i ? s : a, [u, f] = i ? a : s, p = !!(K(l) ? l : l.parentElement).getAttribute("data-slate-zero-width"), _ = !!(K(u) ? u : u.parentElement).getAttribute("data-slate-zero-width");
      return o.setStart(l, p ? 1 : c), o.setEnd(u, _ ? 1 : f), o
    },
    toSlateNode(e, t) {
      var n = K(t) ? t : t.parentElement;
      n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
      var r = n ? S.get(n) : null;
      if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
      return r
    },
    findEventRange(e, t) {
      "nativeEvent" in t && (t = t.nativeEvent);
      var n, {
        clientX: r,
        clientY: i,
        target: a
      } = t;
      if (null == r || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
      var s = eb.toSlateNode(e, t.target),
        o = eb.findPath(e, s);
      if (d.Hg.isElement(s) && d.KE.isVoid(e, s)) {
        var l = a.getBoundingClientRect(),
          c = e.isInline(s) ? r - l.left < l.left + l.width - r : i - l.top < l.top + l.height - i,
          u = d.KE.point(e, o, {
            edge: c ? "start" : "end"
          }),
          f = c ? d.KE.before(e, u) : d.KE.after(e, u);
        if (f) return d.KE.range(e, f)
      }
      var {
        document: p
      } = eb.getWindow(e);
      if (p.caretRangeFromPoint) n = p.caretRangeFromPoint(r, i);
      else {
        var _ = p.caretPositionFromPoint(r, i);
        _ && ((n = p.createRange()).setStart(_.offsetNode, _.offset), n.setEnd(_.offsetNode, _.offset))
      }
      if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
      return eb.toSlateRange(e, n, {
        exactMatch: false,
        suppressThrow: false
      })
    },
    toSlatePoint(e, t, n) {
      var {
        exactMatch: r,
        suppressThrow: i
      } = n, [a, s] = r ? t : Q(t), o = a.parentNode, l = null, c = 0;
      if (o) {
        var u, f, p = eb.toDOMNode(e, e),
          _ = o.closest('[data-slate-void="true"]'),
          h = _ && p.contains(_) ? _ : null,
          m = o.closest("[data-slate-leaf]"),
          g = null;
        if (m) {
          if (l = m.closest('[data-slate-node="text"]')) {
            var E = eb.getWindow(e).document.createRange();
            E.setStart(l, 0), E.setEnd(a, s);
            var y = E.cloneContents();
            [...Array.prototype.slice.call(y.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(y.querySelectorAll("[contenteditable=false]"))].forEach(e => {
              if (el && !r && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\uFEFF" !== e.textContext) {
                e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                return
              }
              e.parentNode.removeChild(e)
            }), c = y.textContent.length, g = l
          }
        } else if (h) {
          for (var b = h.querySelectorAll("[data-slate-leaf]"), O = 0; O < b.length; O++) {
            var v = b[O];
            if (eb.hasDOMNode(e, v)) {
              m = v;
              break
            }
          }
          m ? (l = m.closest('[data-slate-node="text"]'), c = (g = m).textContent.length, g.querySelectorAll("[data-slate-zero-width]").forEach(e => {
            c -= e.textContent.length
          })) : c = 1
        }
        g && c === g.textContent.length && el && "z" === g.getAttribute("data-slate-zero-width") && null != (u = g.textContent) && u.startsWith("\uFEFF") && (o.hasAttribute("data-slate-zero-width") || ec && null != (f = g.textContent) && f.endsWith("\n\n")) && c--
      }
      if (el && !l && !r) {
        var A = o.hasAttribute("data-slate-node") ? o : o.closest("[data-slate-node]");
        if (A && eb.hasDOMNode(e, A, {
            editable: true
          })) {
          var I = eb.toSlateNode(e, A),
            {
              path: S,
              offset: T
            } = d.KE.start(e, eb.findPath(e, I));
          return A.querySelector("[data-slate-leaf]") || (T = s), {
            path: S,
            offset: T
          }
        }
      }
      if (!l) {
        if (i) return null;
        throw Error("Cannot resolve a Slate point from DOM point: ".concat(t))
      }
      var C = eb.toSlateNode(e, l);
      return {
        path: eb.findPath(e, C),
        offset: c
      }
    },
    toSlateRange(e, t, n) {
      var r, i, a, s, o, l, {
        exactMatch: c,
        suppressThrow: u
      } = n;
      if ((q(t) ? t.anchorNode : t.startContainer) && (q(t) ? (r = t.anchorNode, i = t.anchorOffset, a = t.focusNode, s = t.focusOffset, o = ef && J(r) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed) : (r = t.startContainer, i = t.startOffset, a = t.endContainer, s = t.endOffset, o = t.collapsed)), null == r || null == a || null == i || null == s) throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
      "getAttribute" in a && "false" === a.getAttribute("contenteditable") && (a = r, s = (null == (l = r.textContent) ? true : l.length) || 0);
      var f = eb.toSlatePoint(e, [r, i], {
        exactMatch: c,
        suppressThrow: u
      });
      if (!f) return null;
      var p = o ? f : eb.toSlatePoint(e, [a, s], {
        exactMatch: c,
        suppressThrow: u
      });
      if (!p) return null;
      if (ec && !o && r !== a) {
        var _ = d.KE.isEnd(e, f, f.path),
          h = d.KE.isStart(e, p, p.path);
        _ && (f = d.KE.after(e, f) || f), h && (p = d.KE.before(e, p) || p)
      }
      var m = {
        anchor: f,
        focus: p
      };
      return d.Q6.isExpanded(m) && d.Q6.isForward(m) && K(a) && d.KE.void(e, {
        at: m.focus,
        mode: "highest"
      }) && (m = d.KE.unhangRange(e, m, {
        voids: true
      })), m
    },
    hasRange(e, t) {
      var {
        anchor: n,
        focus: r
      } = t;
      return d.KE.hasPath(e, n.path) && d.KE.hasPath(e, r.path)
    },
    hasTarget: (e, t) => z(t) && eb.hasDOMNode(e, t),
    hasEditableTarget: (e, t) => z(t) && eb.hasDOMNode(e, t, {
      editable: true
    }),
    hasSelectableTarget: (e, t) => eb.hasEditableTarget(e, t) || eb.isTargetInsideNonReadonlyVoid(e, t),
    isTargetInsideNonReadonlyVoid(e, t) {
      if (w.get(e)) returnfalse;
      var n = eb.hasTarget(e, t) && eb.toSlateNode(e, t);
      return d.Hg.isElement(n) && d.KE.isVoid(e, n)
    },
    androidScheduleFlush(e) {
      var t;
      null == (t = L.get(e)) || t()
    },
    androidPendingDiffs: e => k.get(e)
  },
  eO = ["anchor", "focus"],
  ev = ["anchor", "focus"],
  eA = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(n => t.hasOwnProperty(n) && e[n] === t[n]),
  eI = (e, t) => {
    var n = g(e, eO),
      r = g(t, ev);
    return e[F] === t[F] && eA(n, r)
  },
  eS = (e, t) => {
    if (e.length !== t.length) returnfalse;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = t[n];
      if (!d.Q6.equals(r, i) || !eI(r, i)) returnfalse
    }
    returntrue
  },
  eT = (e, t) => {
    if (e.length !== t.length) returnfalse;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = t[n];
      if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !eI(r, i)) returnfalse
    }
    returntrue
  },
  eC = eE ? Chunk64700.useLayoutEffect : Chunk64700.useEffect,
  eN = e => {
    var {
      isLast: t,
      leaf: n,
      parent: r,
      text: i
    } = e, a = ex(), s = eb.findPath(a, i), o = d.wA.parent(s), l = true === n[B];
    return a.isVoid(r) ? c.createElement(eP, {
      length: d.bP.string(r).length
    }) : "" !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || "" !== d.KE.string(a, o) ? "" === n.text ? c.createElement(eP, {
      isMarkPlaceholder: l
    }) : t && "\n" === n.text.slice(false) ? c.createElement(ew, {
      isTrailing: true,
      text: n.text
    }) : c.createElement(ew, {
      text: n.text
    }) : c.createElement(eP, {
      isLineBreak: true,
      isMarkPlaceholder: l
    })
  },
  ew = e => {
    var {
      text: t,
      isTrailing: n = false
    } = e, r = (0, c.useRef)(null), i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""), [a] = (0, c.useState)(i);
    return eC(() => {
      var e = i();
      r.current && r.current.textContent !== e && (r.current.textContent = e)
    }), c.createElement(eR, {
      ref: r
    }, a)
  },
  eR = (0, Chunk64700.memo)((0, Chunk64700.forwardRef)((e, t) => c.createElement("span", {
    "data-slate-string": true,
    ref: t
  }, e.children))),
  eP = e => {
    var {
      length: t = 0,
      isLineBreak: n = false,
      isMarkPlaceholder: r = false
    } = e, i = {
      "data-slate-zero-width": n ? "n" : "z",
      "data-slate-length": t
    };
    return r && (i["data-slate-mark-placeholder"] = true), c.createElement("span", Object.assign({}, i), el && n ? null : "\uFEFF", n ? c.createElement("br", null) : null)
  },
  eD = (0, Chunk64700.createContext)(null),
  ex = () => {
    var e = (0, c.useContext)(eD);
    if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
    return e
  },
  eL = e => {
    var {
      leaf: t,
      isLast: n,
      text: r,
      parent: i,
      renderPlaceholder: a,
      renderLeaf: s = e => c.createElement(eM, Object.assign({}, e))
    } = e, o = (0, c.useRef)(null), l = (0, c.useRef)(null), u = ex(), d = (0, c.useRef)(null);
    (0, c.useEffect)(() => () => {
      d.current && d.current.disconnect()
    }, []), (0, c.useEffect)(() => {
      var e = null == l ? true : l.current;
      if (e ? I.set(u, e) : I.delete(u), d.current ? (d.current.disconnect(), e && d.current.observe(e)) : e && (d.current = new(window.ResizeObserver || f.tb)(() => {
          var e = V.get(u);
          null == e || e()
        }), d.current.observe(e)), !e && o.current) {
        var t = V.get(u);
        null == t || t()
      }
      return o.current = l.current, () => {
        I.delete(u)
      }
    }, [l, t]);
    var p = c.createElement(eN, {
      isLast: n,
      leaf: t,
      parent: i,
      text: r
    });
    if (t[F]) {
      var _ = {
        children: t.placeholder,
        attributes: {
          "data-slate-placeholder": true,
          style: {
            position: "absolute",
            pointerEvents: "none",
            width: "100%",
            maxWidth: "100%",
            display: "block",
            opacity: "0.333",
            userSelect: "none",
            textDecoration: "none"
          },
          contentEditable: false,
          ref: l
        }
      };
      p = c.createElement(c.Fragment, null, a(_), p)
    }
    return s({
      attributes: {
        "data-slate-leaf": true
      },
      children: p,
      leaf: t,
      text: r
    })
  },
  ej = Chunk64700.memo(eL, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && d.EY.equals(t.leaf, e.leaf) && t.leaf[F] === e.leaf[F]),
  eM = e => {
    var {
      attributes: t,
      children: n
    } = e;
    return c.createElement("span", Object.assign({}, t), n)
  },
  ek = e => {
    for (var {
        decorations: t,
        isLast: n,
        parent: r,
        renderPlaceholder: i,
        renderLeaf: a,
        text: s
      } = e, o = ex(), l = (0, c.useRef)(null), u = d.EY.decorations(s, t), f = eb.findKey(o, s), p = [], _ = 0; _ < u.length; _++) {
      var h = u[_];
      p.push(c.createElement(ej, {
        isLast: n && _ === u.length - 1,
        key: "".concat(f.id, "-").concat(_),
        renderPlaceholder: i,
        leaf: h,
        text: s,
        parent: r,
        renderLeaf: a
      }))
    }
    var m = (0, c.useCallback)(e => {
      var t = N.get(o);
      e ? (null == t || t.set(f, e), T.set(s, e), S.set(e, s)) : (null == t || t.delete(f), T.delete(s), l.current && S.delete(l.current)), l.current = e
    }, [l, o, f, s]);
    return c.createElement("span", {
      "data-slate-node": "text",
      ref: m
    }, p)
  },
  eU = Chunk64700.memo(ek, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && eT(t.decorations, e.decorations)),
  eG = e => {
    var {
      decorations: t,
      element: n,
      renderElement: r = e => c.createElement(eF, Object.assign({}, e)),
      renderPlaceholder: a,
      renderLeaf: s,
      selection: o
    } = e, l = ex(), u = eq(), f = l.isInline(n), p = eb.findKey(l, n), _ = (0, c.useCallback)(e => {
      var t = N.get(l);
      e ? (null == t || t.set(p, e), T.set(n, e), S.set(e, n)) : (null == t || t.delete(p), T.delete(n))
    }, [l, p, n]), h = eK({
      decorations: t,
      node: n,
      renderElement: r,
      renderPlaceholder: a,
      renderLeaf: s,
      selection: o
    }), m = {
      "data-slate-node": "element",
      ref: _
    };
    if (f && (m["data-slate-inline"] = true), !f && d.KE.hasInlines(l, n)) {
      var g = d.bP.string(n),
        E = i()(g);
      "rtl" === E && (m.dir = E)
    }
    if (d.KE.isVoid(l, n)) {
      m["data-slate-void"] = true, !u && f && (m.contentEditable = false);
      var y = f ? "span" : "div",
        [
          [v]
        ] = d.bP.texts(n);
      h = c.createElement(y, {
        "data-slate-spacer": true,
        style: {
          height: "0",
          color: "transparent",
          outline: "none",
          position: "absolute"
        }
      }, c.createElement(eU, {
        renderPlaceholder: a,
        decorations: [],
        isLast: false,
        parent: n,
        text: v
      })), b.set(v, 0), O.set(v, n)
    }
    return r({
      attributes: m,
      children: h,
      element: n,
      decorations: t
    })
  },
  eV = Chunk64700.memo(eG, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && eS(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && d.Q6.equals(e.selection, t.selection))),
  eF = e => {
    var {
      attributes: t,
      children: n,
      element: r
    } = e, i = ex().isInline(r) ? "span" : "div";
    return c.createElement(i, Object.assign({}, t, {
      style: {
        position: "relative"
      }
    }), n)
  },
  eB = (0, Chunk64700.createContext)(() => []),
  eH = () => (0, c.useContext)(eB),
  eY = (0, Chunk64700.createContext)(false),
  eW = () => (0, c.useContext)(eY),
  eK = e => {
    for (var {
        decorations: t,
        node: n,
        renderElement: r,
        renderPlaceholder: i,
        renderLeaf: a,
        selection: s
      } = e, o = eH(), l = ex(), u = eb.findPath(l, n), f = [], p = d.Hg.isElement(n) && !l.isInline(n) && d.KE.hasInlines(l, n), _ = 0; _ < n.children.length; _++) {
      var h = u.concat(_),
        m = n.children[_],
        g = eb.findKey(l, m),
        E = d.KE.range(l, h),
        y = s && d.Q6.intersection(E, s),
        v = o([m, h]);
      for (var A of t) {
        var I = d.Q6.intersection(A, E);
        I && v.push(I)
      }
      d.Hg.isElement(m) ? f.push(c.createElement(eY.Provider, {
        key: "provider-".concat(g.id),
        value: !!y
      }, c.createElement(eV, {
        decorations: v,
        element: m,
        key: g.id,
        renderElement: r,
        renderPlaceholder: i,
        renderLeaf: a,
        selection: y
      }))) : f.push(c.createElement(eU, {
        decorations: v,
        key: g.id,
        isLast: p && _ === n.children.length - 1,
        parent: n,
        renderPlaceholder: i,
        renderLeaf: a,
        text: m
      })), b.set(m, _), O.set(m, n)
    }
    return f
  },
  ez = (0, Chunk64700.createContext)(false),
  eq = () => (0, c.useContext)(ez),
  eZ = (0, Chunk64700.createContext)(null),
  eX = () => {
    var e = (0, c.useContext)(eZ);
    if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
    var {
      editor: t
    } = e;
    return t
  },
  eQ = 3,
  eJ = {
    bold: "mod+b",
    compose: ["down", "left", "right", "up", "backspace", "enter"],
    moveBackward: "left",
    moveForward: "right",
    moveWordBackward: "ctrl+left",
    moveWordForward: "ctrl+right",
    deleteBackward: "shift?+backspace",
    deleteForward: "shift?+delete",
    extendBackward: "shift+left",
    extendForward: "shift+right",
    italic: "mod+i",
    insertSoftBreak: "shift+enter",
    splitBlock: "enter",
    undo: "mod+z"
  },
  e$ = {
    moveLineBackward: "opt+up",
    moveLineForward: "opt+down",
    moveWordBackward: "opt+left",
    moveWordForward: "opt+right",
    deleteBackward: ["ctrl+backspace", "ctrl+h"],
    deleteForward: ["ctrl+delete", "ctrl+d"],
    deleteLineBackward: "cmd+shift?+backspace",
    deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
    deleteWordBackward: "opt+shift?+backspace",
    deleteWordForward: "opt+shift?+delete",
    extendLineBackward: "opt+shift+up",
    extendLineForward: "opt+shift+down",
    redo: "cmd+shift+z",
    transposeCharacter: "ctrl+t"
  },
  e0 = {
    deleteWordBackward: "ctrl+shift?+backspace",
    deleteWordForward: "ctrl+shift?+delete",
    redo: ["ctrl+y", "ctrl+shift+z"]
  },
  e1 = e => {
    var t = eJ[e],
      n = e$[e],
      r = e0[e],
      i = t && (0, p.isKeyHotkey)(t),
      a = n && (0, p.isKeyHotkey)(n),
      s = r && (0, p.isKeyHotkey)(r);
    return e => !!(i && i(e) || eo && a && a(e) || !eo && s && s(e))
  },
  e2 = {
    isBold: e1("bold"),
    isCompose: e1("compose"),
    isMoveBackward: e1("moveBackward"),
    isMoveForward: e1("moveForward"),
    isDeleteBackward: e1("deleteBackward"),
    isDeleteForward: e1("deleteForward"),
    isDeleteLineBackward: e1("deleteLineBackward"),
    isDeleteLineForward: e1("deleteLineForward"),
    isDeleteWordBackward: e1("deleteWordBackward"),
    isDeleteWordForward: e1("deleteWordForward"),
    isExtendBackward: e1("extendBackward"),
    isExtendForward: e1("extendForward"),
    isExtendLineBackward: e1("extendLineBackward"),
    isExtendLineForward: e1("extendLineForward"),
    isItalic: e1("italic"),
    isMoveLineBackward: e1("moveLineBackward"),
    isMoveLineForward: e1("moveLineForward"),
    isMoveWordBackward: e1("moveWordBackward"),
    isMoveWordForward: e1("moveWordForward"),
    isRedo: e1("redo"),
    isSoftBreak: e1("insertSoftBreak"),
    isSplitBlock: e1("splitBlock"),
    isTransposeCharacter: e1("transposeCharacter"),
    isUndo: e1("undo")
  },
  e3 = (e, t) => {
    var n = [],
      r = () => {
        n = []
      };
    return {
      registerMutations: r => {
        if (t.current) {
          var i = r.filter(t => ei(e, t, r));
          n.push(...i)
        }
      },
      restoreDOM: function() {
        n.length > 0 && (n.reverse().forEach(e => {
          "characterData" !== e.type && (e.removedNodes.forEach(t => {
            e.target.insertBefore(t, e.nextSibling)
          }), e.addedNodes.forEach(t => {
            e.target.removeChild(t)
          }))
        }), r())
      },
      clear: r
    }
  },
  e6 = {
    subtree: true,
    childList: true,
    characterData: true,
    characterDataOldValue: true
  };
class e4 extends Chunk64700.Component {
  constructor() {
    super(...arguments), this.context = null, this.manager = null, this.mutationObserver = null
  }
  observe() {
    var e, {
      node: t
    } = this.props;
    if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
    null == (e = this.mutationObserver) || e.observe(t.current, e6)
  }
  componentDidMount() {
    var {
      receivedUserInput: e
    } = this.props, t = this.context;
    this.manager = e3(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe()
  }
  getSnapshotBeforeUpdate() {
    var e, t, n, r, i = null == (e = this.mutationObserver) ? true : e.takeRecords();
    return null != i && i.length && (null == (r = this.manager) || r.registerMutations(i)), null == (t = this.mutationObserver) || t.disconnect(), null == (n = this.manager) || n.restoreDOM(), null
  }
  componentDidUpdate() {
    var e;
    null == (e = this.manager) || e.clear(), this.observe()
  }
  componentWillUnmount() {
    var e;
    null == (e = this.mutationObserver) || e.disconnect()
  }
  render() {
    return this.props.children
  }
}
e4.contextType = eD;
var e5 = el ? e4 : e => {
  var {
    children: t
  } = e;
  return c.createElement(c.Fragment, null, t)
};

function e7(e, t) {
  var {
    path: n,
    diff: r
  } = t;
  if (!d.KE.hasPath(e, n)) returnfalse;
  var i = d.bP.get(e, n);
  if (!d.EY.isText(i)) returnfalse;
  if (r.start !== i.text.length || 0 === r.text.length) return i.text.slice(r.start, r.start + r.text.length) === r.text;
  var a = d.wA.next(n);
  if (!d.KE.hasPath(e, a)) returnfalse;
  var s = d.bP.get(e, a);
  return d.EY.isText(s) && s.text.startsWith(r.text)
}

function e8(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e)
}

function e9(e, t) {
  for (var n = Math.min(e.length, t.length), r = 0; r < n; r++)
    if (e.charAt(r) !== t.charAt(r)) return r;
  return n
}

function te(e, t, n) {
  for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
    if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
  return r
}

function tt(e, t) {
  var {
    start: n,
    end: r,
    text: i
  } = t, a = e.slice(n, r), s = e9(a, i), o = Math.min(a.length - s, i.length - s), l = te(a, i, o), c = {
    start: n + s,
    end: r - l,
    text: i.slice(s, i.length - l)
  };
  return c.start === c.end && 0 === c.text.length ? null : c
}

function tn(e, t, n) {
  var r = Math.min(t.start, n.start),
    i = Math.max(0, Math.min(t.start + t.text.length, n.end) - n.start),
    a = e8(e, t, n),
    s = Math.max(n.start + n.text.length, t.start + t.text.length + (t.start + t.text.length > n.start ? n.text.length : 0) - i),
    o = a.slice(r, s);
  return tt(e, {
    start: r,
    end: Math.max(t.end, n.end - t.text.length + (t.end - t.start)),
    text: o
  })
}

function tr(e) {
  var {
    path: t,
    diff: n
  } = e;
  return {
    anchor: {
      path: t,
      offset: n.start
    },
    focus: {
      path: t,
      offset: n.end
    }
  }
}

function ti(e, t) {
  var {
    path: n,
    offset: r
  } = t;
  if (!d.KE.hasPath(e, n)) return null;
  var i = d.bP.get(e, n);
  if (!d.EY.isText(i)) return null;
  var a = d.KE.above(e, {
    match: t => d.Hg.isElement(t) && d.KE.isBlock(e, t),
    at: n
  });
  if (!a) return null;
  for (; r > i.text.length;) {
    var s = d.KE.next(e, {
      at: n,
      match: d.EY.isText
    });
    if (!s || !d.wA.isDescendant(s[1], a[1])) return null;
    r -= i.text.length, i = s[0], n = s[1]
  }
  return {
    path: n,
    offset: r
  }
}

function ta(e, t) {
  var n = ti(e, t.anchor);
  if (!n) return null;
  if (d.Q6.isCollapsed(t)) return {
    anchor: n,
    focus: n
  };
  var r = ti(e, t.focus);
  return r ? {
    anchor: n,
    focus: r
  } : null
}

function ts(e, t, n) {
  var r = k.get(e),
    i = null == r ? true : r.find(e => {
      var {
        path: n
      } = e;
      return d.wA.equals(n, t.path)
    });
  if (!i || t.offset <= i.diff.start) return d.bR.transform(t, n, {
    affinity: "backward"
  });
  var {
    diff: a
  } = i;
  if (t.offset <= a.start + a.text.length) {
    var s = {
        path: t.path,
        offset: a.start
      },
      o = d.bR.transform(s, n, {
        affinity: "backward"
      });
    return o ? {
      path: o.path,
      offset: o.offset + t.offset - a.start
    } : null
  }
  var l = {
      path: t.path,
      offset: t.offset - a.text.length + a.end - a.start
    },
    c = d.bR.transform(l, n, {
      affinity: "backward"
    });
  return c ? "split_node" === n.type && d.wA.equals(n.path, t.path) && l.offset < n.position && a.start < n.position ? c : {
    path: c.path,
    offset: c.offset + a.text.length - a.end + a.start
  } : null
}

function to(e, t, n) {
  var r = ts(e, t.anchor, n);
  if (!r) return null;
  if (d.Q6.isCollapsed(t)) return {
    anchor: r,
    focus: r
  };
  var i = ts(e, t.focus, n);
  return i ? {
    anchor: r,
    focus: i
  } : null
}

function tl(e, t) {
  var {
    path: n,
    diff: r,
    id: i
  } = e;
  switch (t.type) {
    case "insert_text":
      if (!d.wA.equals(t.path, n) || t.offset >= r.end) return e;
      if (t.offset <= r.start) return {
        diff: {
          start: t.text.length + r.start,
          end: t.text.length + r.end,
          text: r.text
        },
        id: i,
        path: n
      };
      return {
        diff: {
          start: r.start,
          end: r.end + t.text.length,
          text: r.text
        }, id: i, path: n
      };
    case "remove_text":
      if (!d.wA.equals(t.path, n) || t.offset >= r.end) return e;
      if (t.offset + t.text.length <= r.start) return {
        diff: {
          start: r.start - t.text.length,
          end: r.end - t.text.length,
          text: r.text
        },
        id: i,
        path: n
      };
      return {
        diff: {
          start: r.start,
          end: r.end - t.text.length,
          text: r.text
        }, id: i, path: n
      };
    case "split_node":
      if (!d.wA.equals(t.path, n) || t.position >= r.end) return {
        diff: r,
        id: i,
        path: d.wA.transform(n, t, {
          affinity: "backward"
        })
      };
      if (t.position > r.start) return {
        diff: {
          start: r.start,
          end: Math.min(t.position, r.end),
          text: r.text
        },
        id: i,
        path: n
      };
      return {
        diff: {
          start: r.start - t.position,
          end: r.end - t.position,
          text: r.text
        }, id: i, path: d.wA.transform(n, t, {
          affinity: "forward"
        })
      };
    case "merge_node":
      if (!d.wA.equals(t.path, n)) return {
        diff: r,
        id: i,
        path: d.wA.transform(n, t)
      };
      return {
        diff: {
          start: r.start + t.position,
          end: r.end + t.position,
          text: r.text
        }, id: i, path: d.wA.transform(n, t)
      }
  }
  var a = d.wA.transform(n, t);
  return a ? {
    diff: r,
    path: a,
    id: i
  } : null
}

function tc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function tu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? tc(Object(n), true).forEach(function(t) {
      h(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tc(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var td = 25,
  tf = 200,
  tp = function() {},
  t_ = e => (null == e ? true : e.constructor.name) === "DataTransfer";

function th(e) {
  var {
    editor: t,
    scheduleOnDOMSelectionChange: n,
    onDOMSelectionChange: r
  } = e, i = false, a = null, s = null, o = null, l = 0, c = false, u = () => {
    var e = G.get(t);
    if (G.delete(t), e) {
      var {
        selection: n
      } = t, r = ta(t, e);
      !r || n && d.Q6.equals(r, n) || d.gB.select(t, r)
    }
  }, f = () => {
    var e = U.get(t);
    if (U.delete(t), e) {
      if (e.at) {
        var n = d.bR.isPoint(e.at) ? ti(t, e.at) : ta(t, e.at);
        if (!n) return;
        var r = d.KE.range(t, n);
        t.selection && d.Q6.equals(t.selection, r) || d.gB.select(t, n)
      }
      e.run()
    }
  }, p = () => {
    if (s && (clearTimeout(s), s = null), o && (clearTimeout(o), o = null), !b() && !y()) return void u();
    i || (i = true, setTimeout(() => i = false)), y() && (i = "action");
    var e = t.selection && d.KE.rangeRef(t, t.selection, {
      affinity: "forward"
    });
    M.set(t, t.marks), tp("flush", U.get(t), k.get(t));
    for (var a = b(); l = null == (p = k.get(t)) ? true : p[0];) {
      var l, p, _, h = j.get(t);
      true !== h && (j.delete(t), t.marks = h), h && false === c && (c = null);
      var m = tr(l);
      t.selection && d.Q6.equals(t.selection, m) || d.gB.select(t, m), l.diff.text ? d.KE.insertText(t, l.diff.text) : d.KE.deleteFragment(t), k.set(t, null == (_ = k.get(t)) ? true : _.filter(e => {
        var {
          id: t
        } = e;
        return t !== l.id
      })), e7(t, l) || (a = false, U.delete(t), M.delete(t), i = "action", G.delete(t), n.cancel(), r.cancel(), null == e || e.unref())
    }
    var g = null == e ? true : e.unref();
    if (!g || G.get(t) || t.selection && d.Q6.equals(g, t.selection) || d.gB.select(t, g), y()) return void f();
    a && n(), n.flush(), r.flush(), u();
    var E = M.get(t);
    M.delete(t), true !== E && (t.marks = E, t.onChange())
  }, _ = e => {
    a && clearTimeout(a), a = setTimeout(() => {
      P.set(t, false), p()
    }, td)
  }, h = function() {
    var e = arguments.length > 0 && true !== arguments[0] && arguments[0],
      n = I.get(t);
    if (n) {
      if (b() || e) {
        n.style.display = "none";
        return
      }
      n.style.removeProperty("display")
    }
  }, m = (e, n) => {
    var r, i = null != (r = k.get(t)) ? r : [];
    k.set(t, i);
    var a = d.bP.leaf(t, e),
      s = i.findIndex(t => d.wA.equals(t.path, e));
    if (s < 0) {
      tt(a.text, n) && i.push({
        path: e,
        diff: n,
        id: l++
      }), h();
      return
    }
    var o = tn(a.text, i[s].diff, n);
    if (!o) {
      i.splice(s, 1), h();
      return
    }
    i[s] = tu(tu({}, i[s]), {}, {
      diff: o
    })
  }, g = function(e) {
    var {
      at: i
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    c = false, G.delete(t), n.cancel(), r.cancel(), y() && p(), U.set(t, {
      at: i,
      run: e
    }), o = setTimeout(p)
  }, E = e => {
    s && (clearTimeout(s), s = null);
    var {
      inputType: n
    } = e, r = null, i = e.dataTransfer || e.data || true;
    false !== c && "insertText" !== n && "insertCompositionText" !== n && (c = false);
    var [a] = e.getTargetRanges();
    a && (r = eb.toSlateRange(t, a, {
      exactMatch: false,
      suppressThrow: true
    }));
    var o = eb.getWindow(t).getSelection();
    if (!r && o && (a = o, r = eb.toSlateRange(t, o, {
        exactMatch: false,
        suppressThrow: true
      })), r = null != (R = r) ? R : t.selection) {
      var l = true;
      if (n.startsWith("delete")) {
        if (d.Q6.isExpanded(r)) {
          var [u, f] = d.Q6.edges(r);
          if (d.bP.leaf(t, u.path).text.length === u.offset && 0 === f.offset) {
            var p = d.KE.next(t, {
              at: u.path,
              match: d.EY.isText
            });
            p && d.wA.equals(p[1], f.path) && (r = {
              anchor: f,
              focus: f
            })
          }
        }
        var _ = n.endsWith("Backward") ? "backward" : "forward",
          [h, E] = d.Q6.edges(r),
          [y, b] = d.KE.leaf(t, h.path),
          O = {
            text: "",
            start: h.offset,
            end: E.offset
          },
          A = k.get(t),
          I = null == A ? true : A.find(e => d.wA.equals(e.path, b)),
          S = I ? [I.diff, O] : [O];
        if (0 === e8(y.text, ...S).length && (l = false), d.Q6.isExpanded(r)) {
          if (l && d.wA.equals(r.anchor.path, r.focus.path)) {
            var C = {
              path: r.anchor.path,
              offset: h.offset
            };
            return v(d.KE.range(t, C, C)), m(r.anchor.path, {
              text: "",
              end: E.offset,
              start: h.offset
            })
          }
          return g(() => d.KE.deleteFragment(t, {
            direction: _
          }), {
            at: r
          })
        }
      }
      switch (n) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return g(() => d.KE.deleteFragment(t), {
            at: r
          });
        case "deleteContent":
        case "deleteContentForward":
          var {
            anchor: N
          } = r;
          if (l && d.Q6.isCollapsed(r)) {
            var w = d.bP.leaf(t, N.path);
            if (N.offset < w.text.length) return m(N.path, {
              text: "",
              start: N.offset,
              end: N.offset + 1
            })
          }
          return g(() => d.KE.deleteForward(t), {
            at: r
          });
        case "deleteContentBackward":
          var R, P, {
              anchor: D
            } = r,
            x = q(a) ? a.isCollapsed : !!(null != (P = a) && P.collapsed);
          if (l && x && d.Q6.isCollapsed(r) && D.offset > 0) return m(D.path, {
            text: "",
            start: D.offset - 1,
            end: D.offset
          });
          return g(() => d.KE.deleteBackward(t), {
            at: r
          });
        case "deleteEntireSoftLine":
          return g(() => {
            d.KE.deleteBackward(t, {
              unit: "line"
            }), d.KE.deleteForward(t, {
              unit: "line"
            })
          }, {
            at: r
          });
        case "deleteHardLineBackward":
          return g(() => d.KE.deleteBackward(t, {
            unit: "block"
          }), {
            at: r
          });
        case "deleteSoftLineBackward":
          return g(() => d.KE.deleteBackward(t, {
            unit: "line"
          }), {
            at: r
          });
        case "deleteHardLineForward":
          return g(() => d.KE.deleteForward(t, {
            unit: "block"
          }), {
            at: r
          });
        case "deleteSoftLineForward":
          return g(() => d.KE.deleteForward(t, {
            unit: "line"
          }), {
            at: r
          });
        case "deleteWordBackward":
          return g(() => d.KE.deleteBackward(t, {
            unit: "word"
          }), {
            at: r
          });
        case "deleteWordForward":
          return g(() => d.KE.deleteForward(t, {
            unit: "word"
          }), {
            at: r
          });
        case "insertLineBreak":
          return g(() => d.KE.insertSoftBreak(t), {
            at: r
          });
        case "insertParagraph":
          return g(() => d.KE.insertBreak(t), {
            at: r
          });
        case "insertCompositionText":
        case "deleteCompositionText":
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText":
          if (t_(i)) return g(() => eb.insertData(t, i), {
            at: r
          });
          var L = null != i ? i : "";
          if (j.get(t) && (L = L.replace("\uFEFF", "")), "insertText" === n && /.*\n.*\n$/.test(L) && (L = L.slice(0, false)), L.includes("\n")) return g(() => {
            var e = L.split("\n");
            e.forEach((n, r) => {
              n && d.KE.insertText(t, n), r !== e.length - 1 && d.KE.insertSoftBreak(t)
            })
          }, {
            at: r
          });
          if (d.wA.equals(r.anchor.path, r.focus.path)) {
            var [M, U] = d.Q6.edges(r), G = {
              start: M.offset,
              end: U.offset,
              text: L
            };
            if (L && c && "insertCompositionText" === n) {
              var V = c.start + c.text.search(/\S|$/);
              G.start + G.text.search(/\S|$/) === V + 1 && G.end === c.start + c.text.length ? (G.start -= 1, c = null, T()) : c = false
            } else c = "insertText" === n && (null === c ? G : !!(c && d.Q6.isCollapsed(r)) && c.end + c.text.length === M.offset && tu(tu({}, c), {}, {
              text: c.text + L
            }));
            if (l) return void m(M.path, G)
          }
          return g(() => d.KE.insertText(t, L), {
            at: r
          })
      }
    }
  }, y = () => !!U.get(t), b = () => {
    var e;
    return !!(null != (e = k.get(t)) && e.length)
  }, O = () => y() || b(), v = e => {
    G.set(t, e), s && (clearTimeout(s), s = null);
    var {
      selection: n
    } = t;
    if (e) {
      var r = !n || !d.wA.equals(n.anchor.path, e.anchor.path),
        i = !n || !d.wA.equals(n.anchor.path.slice(0, false), e.anchor.path.slice(0, false));
      (r && c || i) && (c = false), (r || b()) && (s = setTimeout(p, tf))
    }
  }, A = () => {
    (y() || !b()) && p()
  }, S = e => {
    b() || (h(true), setTimeout(h))
  }, T = () => {
    y() || (o = setTimeout(p))
  }, C = e => {
    if (!(b() || y()) && e.some(n => ei(t, n, e))) {
      var n;
      null == (n = V.get(t)) || n()
    }
  };
  return {
    flush: p,
    scheduleFlush: T,
    hasPendingDiffs: b,
    hasPendingAction: y,
    hasPendingChanges: O,
    isFlushing: () => i,
    handleUserSelect: v,
    handleCompositionEnd: _,
    handleCompositionStart: e => {
      P.set(t, true), a && (clearTimeout(a), a = null)
    },
    handleDOMBeforeInput: E,
    handleKeyDown: S,
    handleDomMutations: C,
    handleInput: A
  }
}

function tm() {
  var e = (0, c.useRef)(false);
  return (0, c.useEffect)(() => (e.current = true, () => {
    e.current = false
  }), []), e.current
}

function tg(e, t, n) {
  var [r] = (0, c.useState)(() => new MutationObserver(t));
  eC(() => {
    r.takeRecords()
  }), (0, c.useEffect)(() => {
    if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
    return r.observe(e.current, n), () => r.disconnect()
  }, [])
}
var tE = ["node"];

function ty(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function tb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ty(Object(n), true).forEach(function(t) {
      h(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ty(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var tO = {
  subtree: true,
  childList: true,
  characterData: true
};

function tv(e) {
  var {
    node: t
  } = e, n = g(e, tE);
  if (!el) return null;
  var r = ex(),
    i = tm(),
    [a] = (0, c.useState)(() => th(tb({
      editor: r
    }, n)));
  return tg(t, a.handleDomMutations, tO), L.set(r, a.scheduleFlush), i && a.flush(), a
}

function tA() {
  var e = ex(),
    t = (0, c.useRef)(false),
    n = (0, c.useRef)(0),
    r = (0, c.useCallback)(() => {
      if (!t.current) {
        t.current = true;
        var r = eb.getWindow(e);
        r.cancelAnimationFrame(n.current), n.current = r.requestAnimationFrame(() => {
          t.current = false
        })
      }
    }, []);
  return (0, c.useEffect)(() => () => cancelAnimationFrame(n.current), []), {
    receivedUserInput: t,
    onUserInput: r
  }
}
var tI = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
  tS = ["text"];

function tT(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function tC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? tT(Object(n), true).forEach(function(t) {
      h(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tT(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var tN = e => c.createElement(c.Fragment, null, eK(e)),
  tw = e => {
    var t, n, r = (0, c.useCallback)(e => c.createElement(tR, Object.assign({}, e)), []),
      {
        autoFocus: a,
        decorate: o = tP,
        onDOMBeforeInput: u,
        placeholder: f,
        readOnly: p = false,
        renderElement: _,
        renderLeaf: h,
        renderPlaceholder: m = r,
        scrollSelectionIntoView: E = tD,
        style: y = {},
        as: b = "div",
        disableDefaultStyles: O = false
      } = e,
      C = g(e, tI),
      N = eX(),
      [x, L] = (0, c.useState)(false),
      k = (0, c.useRef)(null),
      U = (0, c.useRef)([]),
      {
        onUserInput: G,
        receivedUserInput: H
      } = tA(),
      [, W] = (0, c.useReducer)(e => e + 1, 0);
    V.set(N, W), w.set(N, p);
    var q = (0, c.useMemo)(() => ({
      isDraggingInternally: false,
      isUpdatingSelection: false,
      latestElement: null,
      hasMarkPlaceholder: false
    }), []);
    (0, c.useLayoutEffect)(() => () => {
      null == q || null != q.latestElement && (q.latestElement.remove(), q.latestElement = null)
    }, []), (0, c.useEffect)(() => {
      k.current && a && k.current.focus()
    }, [a]);
    var Z = (0, c.useCallback)(l()(() => {
        if ((el || !eb.isComposing(N)) && (!q.isUpdatingSelection || null != J && J.isFlushing()) && !q.isDraggingInternally) {
          var e = eb.findDocumentOrShadowRoot(N),
            {
              activeElement: t
            } = e,
            n = eb.toDOMNode(N, N),
            r = e.getSelection();
          if (t === n ? (q.latestElement = t, R.set(N, true)) : R.delete(N), !r) return d.gB.deselect(N);
          var {
            anchorNode: i,
            focusNode: a
          } = r, s = eb.hasEditableTarget(N, i) || eb.isTargetInsideNonReadonlyVoid(N, i), o = eb.hasEditableTarget(N, a) || eb.isTargetInsideNonReadonlyVoid(N, a);
          if (s && o) {
            var l = eb.toSlateRange(N, r, {
              exactMatch: false,
              suppressThrow: true
            });
            l && (eb.isComposing(N) || null != J && J.hasPendingChanges() || null != J && J.isFlushing() ? null == J || J.handleUserSelect(l) : d.gB.select(N, l))
          }!p || s && o || d.gB.deselect(N)
        }
      }, 100), [p]),
      Q = (0, c.useMemo)(() => s()(Z, 0), [Z]),
      J = tv({
        node: k,
        onDOMSelectionChange: Z,
        scheduleOnDOMSelectionChange: Q
      });
    eC(() => {
      k.current && (e = Y(k.current)) ? (v.set(N, e), A.set(N, k.current), T.set(N, k.current), S.set(k.current, N)) : T.delete(N);
      var e, {
          selection: t
        } = N,
        n = eb.findDocumentOrShadowRoot(N).getSelection();
      if (!(!n || !eb.isFocused(N) || null != J && J.hasPendingAction())) {
        var r = e => {
            var r = "None" !== n.type;
            if (t || r) {
              var i = A.get(N),
                a = false;
              if (i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = true), r && a && t && !e) {
                var s = eb.toSlateRange(N, n, {
                  exactMatch: true,
                  suppressThrow: true
                });
                if (s && d.Q6.equals(s, t)) {
                  if (!q.hasMarkPlaceholder) return;
                  var o, {
                    anchorNode: l
                  } = n;
                  if (null != l && null != (o = l.parentElement) && o.hasAttribute("data-slate-mark-placeholder")) return
                }
              }
              if (t && !eb.hasRange(N, t)) {
                N.selection = eb.toSlateRange(N, n, {
                  exactMatch: false,
                  suppressThrow: true
                });
                return
              }
              q.isUpdatingSelection = true;
              var c = t && eb.toDOMRange(N, t);
              return c ? (d.Q6.isBackward(t) ? n.setBaseAndExtent(c.endContainer, c.endOffset, c.startContainer, c.startOffset) : n.setBaseAndExtent(c.startContainer, c.startOffset, c.endContainer, c.endOffset), E(N, c)) : n.removeAllRanges(), c
            }
          },
          i = r(),
          a = (null == J ? true : J.isFlushing()) === "action";
        if (!el || !a) return void setTimeout(() => {
          i && ec && eb.toDOMNode(N, N).focus(), q.isUpdatingSelection = false
        });
        var s = null,
          o = requestAnimationFrame(() => {
            if (a) {
              var e = e => {
                try {
                  eb.toDOMNode(N, N).focus(), r(e)
                } catch (e) {}
              };
              e(), s = setTimeout(() => {
                e(true), q.isUpdatingSelection = false
              })
            }
          });
        return () => {
          cancelAnimationFrame(o), s && clearTimeout(s)
        }
      }
    });
    var $ = (0, c.useCallback)(e => {
        if (G(), !p && eb.hasEditableTarget(N, e.target) && !tL(e, u)) {
          if (J) return J.handleDOMBeforeInput(e);
          Q.flush(), Z.flush();
          var {
            selection: t
          } = N, {
            inputType: n
          } = e, r = e.dataTransfer || e.data || true, i = "insertCompositionText" === n || "deleteCompositionText" === n;
          if (!(i && eb.isComposing(N))) {
            var a = false;
            if ("insertText" === n && t && d.Q6.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
              a = true, N.marks && (a = false);
              var {
                anchor: s
              } = t, [o, l] = eb.toDOMPoint(N, s), c = null == (h = o.parentElement) ? true : h.closest("a"), f = eb.getWindow(N);
              if (a && c && eb.hasDOMNode(N, c)) {
                var _, h, m, g, E = null == f ? true : f.document.createTreeWalker(c, NodeFilter.SHOW_TEXT).lastChild();
                E === o && (null == (g = E.textContent) ? true : g.length) === l && (a = false)
              }
              if (a && o.parentElement && (null == f || null == (m = f.getComputedStyle(o.parentElement)) ? true : m.whiteSpace) === "pre") {
                var y = d.KE.above(N, {
                  at: s.path,
                  match: e => d.Hg.isElement(e) && d.KE.isBlock(N, e)
                });
                y && d.bP.string(y[0]).includes("	") && (a = false)
              }
            }
            if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
              var [b] = e.getTargetRanges();
              if (b) {
                var O = eb.toSlateRange(N, b, {
                  exactMatch: false,
                  suppressThrow: false
                });
                if (!t || !d.Q6.equals(t, O)) {
                  a = false;
                  var v = !i && N.selection && d.KE.rangeRef(N, N.selection);
                  d.gB.select(N, O), v && D.set(N, v)
                }
              }
            }
            if (!i) {
              if (a || e.preventDefault(), t && d.Q6.isExpanded(t) && n.startsWith("delete")) {
                var A = n.endsWith("Backward") ? "backward" : "forward";
                d.KE.deleteFragment(N, {
                  direction: A
                });
                return
              }
              switch (n) {
                case "deleteByComposition":
                case "deleteByCut":
                case "deleteByDrag":
                  d.KE.deleteFragment(N);
                  break;
                case "deleteContent":
                case "deleteContentForward":
                  d.KE.deleteForward(N);
                  break;
                case "deleteContentBackward":
                  d.KE.deleteBackward(N);
                  break;
                case "deleteEntireSoftLine":
                  d.KE.deleteBackward(N, {
                    unit: "line"
                  }), d.KE.deleteForward(N, {
                    unit: "line"
                  });
                  break;
                case "deleteHardLineBackward":
                  d.KE.deleteBackward(N, {
                    unit: "block"
                  });
                  break;
                case "deleteSoftLineBackward":
                  d.KE.deleteBackward(N, {
                    unit: "line"
                  });
                  break;
                case "deleteHardLineForward":
                  d.KE.deleteForward(N, {
                    unit: "block"
                  });
                  break;
                case "deleteSoftLineForward":
                  d.KE.deleteForward(N, {
                    unit: "line"
                  });
                  break;
                case "deleteWordBackward":
                  d.KE.deleteBackward(N, {
                    unit: "word"
                  });
                  break;
                case "deleteWordForward":
                  d.KE.deleteForward(N, {
                    unit: "word"
                  });
                  break;
                case "insertLineBreak":
                  d.KE.insertSoftBreak(N);
                  break;
                case "insertParagraph":
                  d.KE.insertBreak(N);
                  break;
                case "insertFromComposition":
                case "insertFromDrop":
                case "insertFromPaste":
                case "insertFromYank":
                case "insertReplacementText":
                case "insertText":
                  "insertFromComposition" === n && eb.isComposing(N) && (L(false), P.set(N, false)), (null == r ? true : r.constructor.name) === "DataTransfer" ? eb.insertData(N, r) : "string" == typeof r && (a ? U.current.push(() => d.KE.insertText(N, r)) : d.KE.insertText(N, r))
              }
              var I = null == (_ = D.get(N)) ? true : _.unref();
              D.delete(N), !I || N.selection && d.Q6.equals(N.selection, I) || d.gB.select(N, I)
            }
          }
        }
      }, [p, u]),
      ee = (0, c.useCallback)(e => {
        null == e ? (Z.cancel(), Q.cancel(), A.delete(N), T.delete(N), k.current && ey && k.current.removeEventListener("beforeinput", $)) : ey && e.addEventListener("beforeinput", $), k.current = e
      }, [k, $, Z, Q]);
    eC(() => {
      var e = eb.getWindow(N);
      return e.document.addEventListener("selectionchange", Q), () => {
        e.document.removeEventListener("selectionchange", Q)
      }
    }, [Q]);
    var et = o([N, []]);
    if (f && 1 === N.children.length && 1 === Array.from(d.bP.texts(N)).length && "" === d.bP.string(N) && !x) {
      var en = d.KE.start(N, []);
      et.push({
        [F]: true,
        placeholder: f,
        anchor: en,
        focus: en
      })
    }
    var {
      marks: er
    } = N;
    if (q.hasMarkPlaceholder = false, N.selection && d.Q6.isCollapsed(N.selection) && er) {
      var {
        anchor: ei
      } = N.selection, ea = d.bP.leaf(N, ei.path), eo = g(ea, tS);
      if (!d.EY.equals(ea, er, {
          loose: true
        })) {
        q.hasMarkPlaceholder = true;
        var ed = Object.fromEntries(Object.keys(eo).map(e => [e, null]));
        et.push(tC(tC(tC({
          [B]: true
        }, ed), er), {}, {
          anchor: ei,
          focus: ei
        }))
      }
    }(0, c.useEffect)(() => {
      setTimeout(() => {
        var {
          selection: e
        } = N;
        if (e) {
          var {
            anchor: t
          } = e, n = d.bP.leaf(N, t.path);
          if (er && !d.EY.equals(n, er, {
              loose: true
            })) return void j.set(N, er)
        }
        j.delete(N)
      })
    });
    var ep = null == (t = I.get(N)) || null == (n = t.getBoundingClientRect()) ? true : n.height;
    return c.createElement(ez.Provider, {
      value: p
    }, c.createElement(eB.Provider, {
      value: o
    }, c.createElement(e5, {
      node: k,
      receivedUserInput: H
    }, c.createElement(b, Object.assign({
      role: p ? true : "textbox",
      "aria-multiline": !p || true
    }, C, {
      spellCheck: (!!ey || !eE) && C.spellCheck,
      autoCorrect: ey || !eE ? C.autoCorrect : "false",
      autoCapitalize: ey || !eE ? C.autoCapitalize : "false",
      "data-slate-editor": true,
      "data-slate-node": "value",
      contentEditable: !p,
      zindex: false,
      suppressContentEditableWarning: true,
      ref: ee,
      style: tC(tC({}, O ? {} : tC({
        position: "relative",
        outline: "none",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      }, ep ? {
        minHeight: ep
      } : {})), y),
      onBeforeInput: (0, c.useCallback)(e => {
        if (!ey && !p && !tx(e, C.onBeforeInput) && eb.hasSelectableTarget(N, e.target) && (e.preventDefault(), !eb.isComposing(N))) {
          var t = e.data;
          d.KE.insertText(N, t)
        }
      }, [p]),
      onInput: (0, c.useCallback)(e => {
        if (!tx(e, C.onInput)) {
          if (J) return void J.handleInput();
          for (var t of U.current) t();
          U.current = []
        }
      }, []),
      onBlur: (0, c.useCallback)(e => {
        if (p || q.isUpdatingSelection || !eb.hasSelectableTarget(N, e.target) || tx(e, C.onBlur)) return;
        var t = eb.findDocumentOrShadowRoot(N);
        if (q.latestElement !== t.activeElement) {
          var {
            relatedTarget: n
          } = e;
          if (n !== eb.toDOMNode(N, N) && !(K(n) && n.hasAttribute("data-slate-spacer"))) {
            if (null != n && z(n) && eb.hasDOMNode(N, n)) {
              var r = eb.toSlateNode(N, n);
              if (d.Hg.isElement(r) && !N.isVoid(r)) return
            }
            if (eu) {
              var i = t.getSelection();
              null == i || i.removeAllRanges()
            }
            R.delete(N)
          }
        }
      }, [p, C.onBlur]),
      onClick: (0, c.useCallback)(e => {
        if (eb.hasTarget(N, e.target) && !tx(e, C.onClick) && z(e.target)) {
          var t = eb.toSlateNode(N, e.target),
            n = eb.findPath(N, t);
          if (d.KE.hasPath(N, n) && d.bP.get(N, n) === t) {
            if (e.detail === eQ && n.length >= 1) {
              var r = n;
              if (!(d.Hg.isElement(t) && d.KE.isBlock(N, t))) {
                var i, a = d.KE.above(N, {
                  match: e => d.Hg.isElement(e) && d.KE.isBlock(N, e),
                  at: n
                });
                r = null != (i = null == a ? true : a[1]) ? i : n.slice(0, 1)
              }
              var s = d.KE.range(N, r);
              d.gB.select(N, s);
              return
            }
            if (!p) {
              var o = d.KE.start(N, n),
                l = d.KE.end(N, n),
                c = d.KE.void(N, {
                  at: o
                }),
                u = d.KE.void(N, {
                  at: l
                });
              if (c && u && d.wA.equals(c[1], u[1])) {
                var f = d.KE.range(N, o);
                d.gB.select(N, f)
              }
            }
          }
        }
      }, [p, C.onClick]),
      onCompositionEnd: (0, c.useCallback)(e => {
        if (eb.hasSelectableTarget(N, e.target) && (eb.isComposing(N) && (L(false), P.set(N, false)), null == J || J.handleCompositionEnd(e), !tx(e, C.onCompositionEnd) && !el && !eu && !eh && !es && !eg && !em) && e.data) {
          var t = j.get(N);
          j.delete(N), true !== t && (M.set(N, N.marks), N.marks = t), d.KE.insertText(N, e.data);
          var n = M.get(N);
          M.delete(N), true !== n && (N.marks = n)
        }
      }, [C.onCompositionEnd]),
      onCompositionUpdate: (0, c.useCallback)(e => {
        !eb.hasSelectableTarget(N, e.target) || tx(e, C.onCompositionUpdate) || eb.isComposing(N) || (L(true), P.set(N, true))
      }, [C.onCompositionUpdate]),
      onCompositionStart: (0, c.useCallback)(e => {
        if (eb.hasSelectableTarget(N, e.target) && (null == J || J.handleCompositionStart(e), !tx(e, C.onCompositionStart) && !el)) {
          L(true);
          var {
            selection: t
          } = N;
          if (t) {
            if (d.Q6.isExpanded(t)) return void d.KE.deleteFragment(N);
            var n = d.KE.above(N, {
              match: e => d.Hg.isElement(e) && d.KE.isInline(N, e),
              mode: "highest"
            });
            if (n) {
              var [, r] = n;
              if (d.KE.isEnd(N, t.anchor, r)) {
                var i = d.KE.after(N, r);
                d.gB.setSelection(N, {
                  anchor: i,
                  focus: i
                })
              }
            }
          }
        }
      }, [C.onCompositionStart]),
      onCopy: (0, c.useCallback)(e => {
        eb.hasSelectableTarget(N, e.target) && !tx(e, C.onCopy) && (e.preventDefault(), eb.setFragmentData(N, e.clipboardData, "copy"))
      }, [C.onCopy]),
      onCut: (0, c.useCallback)(e => {
        if (!p && eb.hasSelectableTarget(N, e.target) && !tx(e, C.onCut)) {
          e.preventDefault(), eb.setFragmentData(N, e.clipboardData, "cut");
          var {
            selection: t
          } = N;
          if (t)
            if (d.Q6.isExpanded(t)) d.KE.deleteFragment(N);
            else {
              var n = d.bP.parent(N, t.anchor.path);
              d.KE.isVoid(N, n) && d.gB.delete(N)
            }
        }
      }, [p, C.onCut]),
      onDragOver: (0, c.useCallback)(e => {
        if (eb.hasTarget(N, e.target) && !tx(e, C.onDragOver)) {
          var t = eb.toSlateNode(N, e.target);
          d.Hg.isElement(t) && d.KE.isVoid(N, t) && e.preventDefault()
        }
      }, [C.onDragOver]),
      onDragStart: (0, c.useCallback)(e => {
        if (!p && eb.hasTarget(N, e.target) && !tx(e, C.onDragStart)) {
          var t = eb.toSlateNode(N, e.target),
            n = eb.findPath(N, t);
          if (d.Hg.isElement(t) && d.KE.isVoid(N, t) || d.KE.void(N, {
              at: n,
              voids: true
            })) {
            var r = d.KE.range(N, n);
            d.gB.select(N, r)
          }
          q.isDraggingInternally = true, eb.setFragmentData(N, e.dataTransfer, "drag")
        }
      }, [p, C.onDragStart]),
      onDrop: (0, c.useCallback)(e => {
        if (!p && eb.hasTarget(N, e.target) && !tx(e, C.onDrop)) {
          e.preventDefault();
          var t = N.selection,
            n = eb.findEventRange(N, e),
            r = e.dataTransfer;
          d.gB.select(N, n), q.isDraggingInternally && t && !d.Q6.equals(t, n) && !d.KE.void(N, {
            at: n,
            voids: true
          }) && d.gB.delete(N, {
            at: t
          }), eb.insertData(N, r), eb.isFocused(N) || eb.focus(N)
        }
        q.isDraggingInternally = false
      }, [p, C.onDrop]),
      onDragEnd: (0, c.useCallback)(e => {
        !p && q.isDraggingInternally && C.onDragEnd && eb.hasTarget(N, e.target) && C.onDragEnd(e), q.isDraggingInternally = false
      }, [p, C.onDragEnd]),
      onFocus: (0, c.useCallback)(e => {
        if (!p && !q.isUpdatingSelection && eb.hasEditableTarget(N, e.target) && !tx(e, C.onFocus)) {
          var t = eb.toDOMNode(N, N);
          if (q.latestElement = eb.findDocumentOrShadowRoot(N).activeElement, ec && e.target !== t) return void t.focus();
          R.set(N, true)
        }
      }, [p, C.onFocus]),
      onKeyDown: (0, c.useCallback)(e => {
        if (!p && eb.hasEditableTarget(N, e.target)) {
          null == J || J.handleKeyDown(e);
          var {
            nativeEvent: t
          } = e;
          if (eb.isComposing(N) && false === t.isComposing && (P.set(N, false), L(false)), !(tx(e, C.onKeyDown) || eb.isComposing(N))) {
            var {
              selection: n
            } = N, r = N.children[null !== n ? n.focus.path[0] : 0], a = "rtl" === i()(d.bP.string(r));
            if (e2.isRedo(t)) {
              e.preventDefault();
              var s = N;
              "function" == typeof s.redo && s.redo();
              return
            }
            if (e2.isUndo(t)) {
              e.preventDefault();
              var o = N;
              "function" == typeof o.undo && o.undo();
              return
            }
            if (e2.isMoveLineBackward(t)) {
              e.preventDefault(), d.gB.move(N, {
                unit: "line",
                reverse: true
              });
              return
            }
            if (e2.isMoveLineForward(t)) {
              e.preventDefault(), d.gB.move(N, {
                unit: "line"
              });
              return
            }
            if (e2.isExtendLineBackward(t)) {
              e.preventDefault(), d.gB.move(N, {
                unit: "line",
                edge: "focus",
                reverse: true
              });
              return
            }
            if (e2.isExtendLineForward(t)) {
              e.preventDefault(), d.gB.move(N, {
                unit: "line",
                edge: "focus"
              });
              return
            }
            if (e2.isMoveBackward(t)) {
              e.preventDefault(), n && d.Q6.isCollapsed(n) ? d.gB.move(N, {
                reverse: !a
              }) : d.gB.collapse(N, {
                edge: "start"
              });
              return
            }
            if (e2.isMoveForward(t)) {
              e.preventDefault(), n && d.Q6.isCollapsed(n) ? d.gB.move(N, {
                reverse: a
              }) : d.gB.collapse(N, {
                edge: "end"
              });
              return
            }
            if (e2.isMoveWordBackward(t)) {
              e.preventDefault(), n && d.Q6.isExpanded(n) && d.gB.collapse(N, {
                edge: "focus"
              }), d.gB.move(N, {
                unit: "word",
                reverse: !a
              });
              return
            }
            if (e2.isMoveWordForward(t)) {
              e.preventDefault(), n && d.Q6.isExpanded(n) && d.gB.collapse(N, {
                edge: "focus"
              }), d.gB.move(N, {
                unit: "word",
                reverse: a
              });
              return
            }
            if (ey) {
              if ((ef || eu) && n && (e2.isDeleteBackward(t) || e2.isDeleteForward(t)) && d.Q6.isCollapsed(n)) {
                var l = d.bP.parent(N, n.anchor.path);
                if (d.Hg.isElement(l) && d.KE.isVoid(N, l) && (d.KE.isInline(N, l) || d.KE.isBlock(N, l))) {
                  e.preventDefault(), d.KE.deleteBackward(N, {
                    unit: "block"
                  });
                  return
                }
              }
            } else {
              if (e2.isBold(t) || e2.isItalic(t) || e2.isTransposeCharacter(t)) return void e.preventDefault();
              if (e2.isSoftBreak(t)) {
                e.preventDefault(), d.KE.insertSoftBreak(N);
                return
              }
              if (e2.isSplitBlock(t)) {
                e.preventDefault(), d.KE.insertBreak(N);
                return
              }
              if (e2.isDeleteBackward(t)) {
                e.preventDefault(), n && d.Q6.isExpanded(n) ? d.KE.deleteFragment(N, {
                  direction: "backward"
                }) : d.KE.deleteBackward(N);
                return
              }
              if (e2.isDeleteForward(t)) {
                e.preventDefault(), n && d.Q6.isExpanded(n) ? d.KE.deleteFragment(N, {
                  direction: "forward"
                }) : d.KE.deleteForward(N);
                return
              }
              if (e2.isDeleteLineBackward(t)) {
                e.preventDefault(), n && d.Q6.isExpanded(n) ? d.KE.deleteFragment(N, {
                  direction: "backward"
                }) : d.KE.deleteBackward(N, {
                  unit: "line"
                });
                return
              }
              if (e2.isDeleteLineForward(t)) {
                e.preventDefault(), n && d.Q6.isExpanded(n) ? d.KE.deleteFragment(N, {
                  direction: "forward"
                }) : d.KE.deleteForward(N, {
                  unit: "line"
                });
                return
              }
              if (e2.isDeleteWordBackward(t)) {
                e.preventDefault(), n && d.Q6.isExpanded(n) ? d.KE.deleteFragment(N, {
                  direction: "backward"
                }) : d.KE.deleteBackward(N, {
                  unit: "word"
                });
                return
              }
              if (e2.isDeleteWordForward(t)) {
                e.preventDefault(), n && d.Q6.isExpanded(n) ? d.KE.deleteFragment(N, {
                  direction: "forward"
                }) : d.KE.deleteForward(N, {
                  unit: "word"
                });
                return
              }
            }
          }
        }
      }, [p, C.onKeyDown]),
      onPaste: (0, c.useCallback)(e => {
        !p && eb.hasEditableTarget(N, e.target) && !tx(e, C.onPaste) && (!ey || X(e.nativeEvent) || eu) && (e.preventDefault(), eb.insertData(N, e.clipboardData))
      }, [p, C.onPaste])
    }), c.createElement(tN, {
      decorations: et,
      node: N,
      renderElement: _,
      renderPlaceholder: m,
      renderLeaf: h,
      selection: N.selection
    })))))
  },
  tR = e => {
    var {
      attributes: t,
      children: n
    } = e;
    return c.createElement("span", Object.assign({}, t), n, el && c.createElement("br", null))
  },
  tP = () => [],
  tD = (e, t) => {
    if (t.getBoundingClientRect && (!e.selection || e.selection && d.Q6.isCollapsed(e.selection))) {
      var n = t.startContainer.parentElement;
      n.getBoundingClientRect = t.getBoundingClientRect.bind(t), (0, u.A)(n, {
        scrollMode: "if-needed"
      }), delete n.getBoundingClientRect
    }
  },
  tx = (e, t) => {
    if (!t) returnfalse;
    var n = t(e);
    return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped()
  },
  tL = (e, t) => {
    if (!t) returnfalse;
    var n = t(e);
    return null != n ? n : e.defaultPrevented
  },
  tj = (0, Chunk64700.createContext)(false),
  tM = () => (0, c.useContext)(tj);

function tk(e) {
  return e instanceof Error
}
var tU = (0, Chunk64700.createContext)({}),
  tG = (e, t) => e === t;

function tV(e) {
  var t = (0, c.useRef)([]).current,
    n = (0, c.useRef)({
      editor: e
    }).current,
    r = (0, c.useCallback)(e => {
      n.editor = e, t.forEach(t => t(e))
    }, []);
  return {
    selectorContext: (0, c.useMemo)(() => ({
      getSlate: () => n.editor,
      addEventListener: e => (t.push(e), () => {
        t.splice(t.indexOf(e), 1)
      })
    }), [t, n]),
    onChange: r
  }
}
var tF = ["editor", "children", "onChange", "value"],
  tB = e => {
    var {
      editor: t,
      children: n,
      onChange: r,
      value: i
    } = e, a = g(e, tF), s = (0, c.useRef)(false), [o, l] = c.useState(() => {
      if (!d.bP.isNodeList(i)) throw Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(d.h6.stringify(i)));
      if (!d.KE.isEditor(t)) throw Error("[Slate] editor is invalid! You passed: ".concat(d.h6.stringify(t)));
      return t.children = i, Object.assign(t, a), {
        v: 0,
        editor: t
      }
    }), {
      selectorContext: u,
      onChange: f
    } = tV(t), p = (0, c.useCallback)(() => {
      r && r(t.children), l(e => ({
        v: e.v + 1,
        editor: t
      })), f(t)
    }, [r]);
    (0, c.useEffect)(() => (x.set(t, p), () => {
      x.set(t, () => {}), s.current = true
    }), [p]);
    var [_, h] = (0, c.useState)(eb.isFocused(t));
    return (0, c.useEffect)(() => {
      h(eb.isFocused(t))
    }), eC(() => {
      var e = () => h(eb.isFocused(t));
      return ea ? (document.addEventListener("focusin", e), document.addEventListener("focusout", e), () => {
        document.removeEventListener("focusin", e), document.removeEventListener("focusout", e)
      }) : (document.addEventListener("focus", e, true), document.addEventListener("blur", e, true), () => {
        document.removeEventListener("focus", e, true), document.removeEventListener("blur", e, true)
      })
    }, []), c.createElement(tU.Provider, {
      value: u
    }, c.createElement(eZ.Provider, {
      value: o
    }, c.createElement(eD.Provider, {
      value: o.editor
    }, c.createElement(tj.Provider, {
      value: _
    }, n))))
  },
  tH = (e, t) => {
    var n = (t.top + t.bottom) / 2;
    return e.top <= n && e.bottom >= n
  },
  tY = (e, t, n) => {
    var r = eb.toDOMRange(e, t).getBoundingClientRect(),
      i = eb.toDOMRange(e, n).getBoundingClientRect();
    return tH(r, i) && tH(i, r)
  },
  tW = (e, t) => {
    var n = d.KE.range(e, d.Q6.end(t)),
      r = Array.from(d.KE.positions(e, {
        at: t
      })),
      i = 0,
      a = r.length,
      s = Math.floor(a / 2);
    if (tY(e, d.KE.range(e, r[i]), n)) return d.KE.range(e, r[i], n);
    if (r.length < 2) return d.KE.range(e, r[r.length - 1], n);
    for (; s !== r.length && s !== i;) tY(e, d.KE.range(e, r[s]), n) ? a = s : i = s, s = Math.floor((i + a) / 2);
    return d.KE.range(e, r[a], n)
  };

function tK(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function tz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? tK(Object(n), true).forEach(function(t) {
      h(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tK(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var tq = function(e) {
    var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "x-slate-fragment",
      n = e,
      {
        apply: r,
        onChange: i,
        deleteBackward: a,
        addMark: s,
        removeMark: o
      } = n;
    return N.set(n, new WeakMap), n.addMark = (e, t) => {
      var r, i;
      null == (r = L.get(n)) || r(), !j.get(n) && null != (i = k.get(n)) && i.length && j.set(n, null), M.delete(n), s(e, t)
    }, n.removeMark = e => {
      var t;
      !j.get(n) && null != (t = k.get(n)) && t.length && j.set(n, null), M.delete(n), o(e)
    }, n.deleteBackward = e => {
      if ("line" !== e) return a(e);
      if (n.selection && d.Q6.isCollapsed(n.selection)) {
        var t = d.KE.above(n, {
          match: e => d.Hg.isElement(e) && d.KE.isBlock(n, e),
          at: n.selection
        });
        if (t) {
          var [, r] = t, i = d.KE.range(n, r, n.selection.anchor), s = tW(n, i);
          d.Q6.isCollapsed(s) || d.gB.delete(n, {
            at: s
          })
        }
      }
    }, n.apply = e => {
      var t, i = [],
        a = k.get(n);
      if (null != a && a.length) {
        var s = a.map(t => tl(t, e)).filter(Boolean);
        k.set(n, s)
      }
      var o = G.get(n);
      o && G.set(n, to(n, o, e));
      var l = U.get(n);
      if (null != l && l.at) {
        var c = d.bR.isPoint(null == l ? true : l.at) ? ts(n, l.at, e) : to(n, l.at, e);
        U.set(n, c ? tz(tz({}, l), {}, {
          at: c
        }) : null)
      }
      switch (e.type) {
        case "insert_text":
        case "remove_text":
        case "set_node":
        case "split_node":
          i.push(...tZ(n, e.path));
          break;
        case "set_selection":
          null == (t = D.get(n)) || t.unref(), D.delete(n);
          break;
        case "insert_node":
        case "remove_node":
          i.push(...tZ(n, d.wA.parent(e.path)));
          break;
        case "merge_node":
          i.push(...tZ(n, d.wA.previous(e.path)));
          break;
        case "move_node":
          i.push(...tZ(n, d.wA.common(d.wA.parent(e.path), d.wA.parent(e.newPath))))
      }
      for (var [u, f] of(r(e), i)) {
        var [p] = d.KE.node(n, u);
        C.set(p, f)
      }
    }, n.setFragmentData = e => {
      var {
        selection: r
      } = n;
      if (r) {
        var [i, a] = d.Q6.edges(r), s = d.KE.void(n, {
          at: i.path
        }), o = d.KE.void(n, {
          at: a.path
        });
        if (!d.Q6.isCollapsed(r) || s) {
          var l = eb.toDOMRange(n, r),
            c = l.cloneContents(),
            u = c.childNodes[0];
          if (c.childNodes.forEach(e => {
              e.textContent && "" !== e.textContent.trim() && (u = e)
            }), o) {
            var [f] = o, p = l.cloneRange(), _ = eb.toDOMNode(n, f);
            p.setEndAfter(_), c = p.cloneContents()
          }
          if (s && (u = c.querySelector("[data-slate-spacer]")), Array.from(c.querySelectorAll("[data-slate-zero-width]")).forEach(e => {
              var t = "n" === e.getAttribute("data-slate-zero-width");
              e.textContent = t ? "\n" : ""
            }), Z(u)) {
            var h = u.ownerDocument.createElement("span");
            h.style.whiteSpace = "pre", h.appendChild(u), c.appendChild(h), u = h
          }
          var m = n.getFragment(),
            g = JSON.stringify(m),
            E = window.btoa(encodeURIComponent(g));
          u.setAttribute("data-slate-fragment", E), e.setData("application/".concat(t), E);
          var y = c.ownerDocument.createElement("div");
          return y.appendChild(c), y.setAttribute("hidden", "true"), c.ownerDocument.body.appendChild(y), e.setData("text/html", y.innerHTML), e.setData("text/plain", et(y)), c.ownerDocument.body.removeChild(y), e
        }
      }
    }, n.insertData = e => {
      n.insertFragmentData(e) || n.insertTextData(e)
    }, n.insertFragmentData = e => {
      var r = e.getData("application/".concat(t)) || er(e);
      if (r) {
        var i = JSON.parse(decodeURIComponent(window.atob(r)));
        return n.insertFragment(i), true
      }
      returnfalse
    }, n.insertTextData = e => {
      var t = e.getData("text/plain");
      if (t) {
        var r = t.split(/\r\n|\r|\n/),
          i = false;
        for (var a of r) i && d.gB.splitNodes(n, {
          always: true
        }), n.insertText(a), i = true;
        returntrue
      }
      returnfalse
    }, n.onChange = e => {
      _.unstable_batchedUpdates(() => {
        var t = x.get(n);
        t && t(), i(e)
      })
    }, n
  },
  tZ = (e, t) => {
    var n = [];
    for (var [r, i] of d.KE.levels(e, {
        at: t
      })) {
      var a = eb.findKey(e, r);
      n.push([i, a])
    }
    return n
  }