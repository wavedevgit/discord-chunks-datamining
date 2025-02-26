/** Chunk was on web.js **/
"use strict";
n.d(t, {
  BU: () => tz,
  CX: () => tR,
  F3: () => eb,
  UE: () => tk,
  _7: () => eL,
  mH: () => tF,
  vt: () => eW
});
var r = n(653603),
  i = n.n(r),
  o = n(889678),
  a = n.n(o),
  s = n(123763),
  l = n.n(s),
  c = n(192379),
  u = n(367989),
  d = n(327432),
  f = n(690096),
  _ = n(247187),
  p = n(995295);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
var E = 0;
class v {
  constructor() {
    this.id = "".concat(E++)
  }
}
var b = new WeakMap,
  y = new WeakMap,
  O = new WeakMap,
  S = new WeakMap,
  I = new WeakMap,
  T = new WeakMap,
  N = new WeakMap,
  A = new WeakMap,
  C = new WeakMap,
  R = new WeakMap,
  P = new WeakMap,
  D = new WeakMap,
  w = new WeakMap,
  L = new WeakMap,
  x = new WeakMap,
  M = new WeakMap,
  k = new WeakMap,
  j = new WeakMap,
  U = new WeakMap,
  G = new WeakMap,
  B = new WeakMap,
  V = Symbol("placeholder"),
  F = Symbol("mark-placeholder"),
  Z = globalThis.Text,
  H = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
  W = e => K(e) && 8 === e.nodeType,
  Y = e => K(e) && 1 === e.nodeType,
  K = e => {
    var t = H(e);
    return !!t && e instanceof t.Node
  },
  z = e => {
    var t = e && e.anchorNode && H(e.anchorNode);
    return !!t && e instanceof t.Selection
  },
  q = e => K(e) && 3 === e.nodeType,
  Q = e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
  X = e => {
    var [t, n] = e;
    if (Y(t) && t.childNodes.length) {
      var r = n === t.childNodes.length,
        i = r ? n - 1 : n;
      for ([t, i] = $(t, i, r ? "backward" : "forward"), r = i < n; Y(t) && t.childNodes.length;) {
        var o = r ? t.childNodes.length - 1 : 0;
        t = ee(t, o, r ? "backward" : "forward")
      }
      n = r && null != t.textContent ? t.textContent.length : 0
    }
    return [t, n]
  },
  J = e => {
    for (var t = e && e.parentNode; t;) {
      if ("[object ShadowRoot]" === t.toString()) return !0;
      t = t.parentNode
    }
    return !1
  },
  $ = (e, t, n) => {
    for (var {
        childNodes: r
      } = e, i = r[t], o = t, a = !1, s = !1;
      (W(i) || Y(i) && 0 === i.childNodes.length || Y(i) && "false" === i.getAttribute("contenteditable")) && (!a || !s);) {
      if (o >= r.length) {
        a = !0, o = t - 1, n = "backward";
        continue
      }
      if (o < 0) {
        s = !0, o = t + 1, n = "forward";
        continue
      }
      i = r[o], t = o, o += "forward" === n ? 1 : -1
    }
    return [i, t]
  },
  ee = (e, t, n) => {
    var [r] = $(e, t, n);
    return r
  },
  et = e => {
    var t = "";
    if (q(e) && e.nodeValue) return e.nodeValue;
    if (Y(e)) {
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
    if (Y(r) && r.matches('[contentEditable="false"]')) return !1;
    var {
      document: i
    } = eb.getWindow(e);
    if (i.contains(r)) return eb.hasDOMNode(e, r, {
      editable: !0
    });
    var o = n.find(e => {
      var {
        addedNodes: t,
        removedNodes: n
      } = e;
      for (var i of t)
        if (i === r || i.contains(r)) return !0;
      for (var o of n)
        if (o === r || o.contains(r)) return !0
    });
    return !!o && o !== t && ei(e, o, n)
  },
  eo = parseInt(c.version.split(".")[0], 10) >= 17,
  ea = "undefined" != typeof navigator && "undefined" != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
  es = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
  el = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
  ec = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
  eu = "undefined" != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
  ed = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
  ef = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent),
  e_ = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
  ep = el && "undefined" != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
  eh = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
  eg = "undefined" != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
  em = "undefined" != typeof navigator && /.*Wechat/.test(navigator.userAgent),
  eE = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
  ev = (!e_ || !ep) && !ed && "undefined" != typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
  eb = {
    isComposing: e => !!D.get(e),
    getWindow(e) {
      var t = O.get(e);
      if (!t) throw Error("Unable to find a host window element for this editor");
      return t
    },
    findKey(e, t) {
      var n = A.get(t);
      return n || (n = new v, A.set(t, n)), n
    },
    findPath(e, t) {
      for (var n = [], r = t;;) {
        var i = y.get(r);
        if (null == i) {
          if (d.ML.isEditor(r)) return n;
          break
        }
        var o = b.get(r);
        if (null == o) break;
        n.unshift(o), r = i
      }
      throw Error("Unable to find the path for Slate node: ".concat(d.o4.stringify(t)))
    },
    findDocumentOrShadowRoot(e) {
      var t = eb.toDOMNode(e, e),
        n = t.getRootNode();
      return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument
    },
    isFocused: e => !!P.get(e),
    isReadOnly: e => !!R.get(e),
    blur(e) {
      var t = eb.toDOMNode(e, e),
        n = eb.findDocumentOrShadowRoot(e);
      P.set(e, !1), n.activeElement === t && t.blur()
    },
    focus(e) {
      var t = eb.toDOMNode(e, e),
        n = eb.findDocumentOrShadowRoot(e);
      P.set(e, !0), n.activeElement !== t && t.focus({
        preventScroll: !0
      })
    },
    deselect(e) {
      var {
        selection: t
      } = e, n = eb.findDocumentOrShadowRoot(e).getSelection();
      n && n.rangeCount > 0 && n.removeAllRanges(), t && d.YR.deselect(e)
    },
    hasDOMNode(e, t) {
      var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        {
          editable: i = !1
        } = r,
        o = eb.toDOMNode(e, e);
      try {
        n = Y(t) ? t : t.parentElement
      } catch (e) {
        if (!e.message.includes('Permission denied to access property "nodeType"')) throw e
      }
      return !!n && n.closest("[data-slate-editor]") === o && (!i || !!n.isContentEditable || "boolean" == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === o || !!n.getAttribute("data-slate-zero-width"))
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
      var n = C.get(e),
        r = d.ML.isEditor(t) ? S.get(e) : null == n ? void 0 : n.get(eb.findKey(e, t));
      if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(d.o4.stringify(t)));
      return r
    },
    toDOMPoint(e, t) {
      var [n] = d.ML.node(e, t.path), r = eb.toDOMNode(e, n);
      d.ML.void(e, {
        at: t
      }) && (t = {
        path: t.path,
        offset: 0
      });
      for (var i = "[data-slate-string], [data-slate-zero-width]", o = Array.from(r.querySelectorAll(i)), a = 0, s = 0; s < o.length; s++) {
        var l = o[s],
          c = l.childNodes[0];
        if (null != c && null != c.textContent) {
          var {
            length: u
          } = c.textContent, f = l.getAttribute("data-slate-length"), _ = a + (null == f ? u : parseInt(f, 10)), p = o[s + 1];
          if (t.offset === _ && null != p && p.hasAttribute("data-slate-mark-placeholder")) {
            var h, g, m = p.childNodes[0];
            h = [m instanceof Z ? m : p, null !== (g = p.textContent) && void 0 !== g && g.startsWith("\uFEFF") ? 1 : 0];
            break
          }
          if (t.offset <= _) {
            h = [c, Math.min(u, Math.max(0, t.offset - a))];
            break
          }
          a = _
        }
      }
      if (!h) throw Error("Cannot resolve a DOM point from Slate point: ".concat(d.o4.stringify(t)));
      return h
    },
    toDOMRange(e, t) {
      var {
        anchor: n,
        focus: r
      } = t, i = d.e6.isBackward(t), o = eb.toDOMPoint(e, n), a = d.e6.isCollapsed(t) ? o : eb.toDOMPoint(e, r), s = eb.getWindow(e).document.createRange(), [l, c] = i ? a : o, [u, f] = i ? o : a, _ = !!(Y(l) ? l : l.parentElement).getAttribute("data-slate-zero-width"), p = !!(Y(u) ? u : u.parentElement).getAttribute("data-slate-zero-width");
      return s.setStart(l, _ ? 1 : c), s.setEnd(u, p ? 1 : f), s
    },
    toSlateNode(e, t) {
      var n = Y(t) ? t : t.parentElement;
      n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
      var r = n ? T.get(n) : null;
      if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
      return r
    },
    findEventRange(e, t) {
      "nativeEvent" in t && (t = t.nativeEvent);
      var n, {
        clientX: r,
        clientY: i,
        target: o
      } = t;
      if (null == r || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
      var a = eb.toSlateNode(e, t.target),
        s = eb.findPath(e, a);
      if (d.W_.isElement(a) && d.ML.isVoid(e, a)) {
        var l = o.getBoundingClientRect(),
          c = e.isInline(a) ? r - l.left < l.left + l.width - r : i - l.top < l.top + l.height - i,
          u = d.ML.point(e, s, {
            edge: c ? "start" : "end"
          }),
          f = c ? d.ML.before(e, u) : d.ML.after(e, u);
        if (f) return d.ML.range(e, f)
      }
      var {
        document: _
      } = eb.getWindow(e);
      if (_.caretRangeFromPoint) n = _.caretRangeFromPoint(r, i);
      else {
        var p = _.caretPositionFromPoint(r, i);
        p && ((n = _.createRange()).setStart(p.offsetNode, p.offset), n.setEnd(p.offsetNode, p.offset))
      }
      if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
      return eb.toSlateRange(e, n, {
        exactMatch: !1,
        suppressThrow: !1
      })
    },
    toSlatePoint(e, t, n) {
      var {
        exactMatch: r,
        suppressThrow: i
      } = n, [o, a] = r ? t : X(t), s = o.parentNode, l = null, c = 0;
      if (s) {
        var u, f, _ = eb.toDOMNode(e, e),
          p = s.closest('[data-slate-void="true"]'),
          h = p && _.contains(p) ? p : null,
          g = s.closest("[data-slate-leaf]"),
          m = null;
        if (g) {
          if (l = g.closest('[data-slate-node="text"]')) {
            var E = eb.getWindow(e).document.createRange();
            E.setStart(l, 0), E.setEnd(o, a);
            var v = E.cloneContents();
            [...Array.prototype.slice.call(v.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(v.querySelectorAll("[contenteditable=false]"))].forEach(e => {
              if (el && !r && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\uFEFF" !== e.textContext) {
                e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                return
              }
              e.parentNode.removeChild(e)
            }), c = v.textContent.length, m = l
          }
        } else if (h) {
          for (var b = h.querySelectorAll("[data-slate-leaf]"), y = 0; y < b.length; y++) {
            var O = b[y];
            if (eb.hasDOMNode(e, O)) {
              g = O;
              break
            }
          }
          g ? (l = g.closest('[data-slate-node="text"]'), c = (m = g).textContent.length, m.querySelectorAll("[data-slate-zero-width]").forEach(e => {
            c -= e.textContent.length
          })) : c = 1
        }
        m && c === m.textContent.length && el && "z" === m.getAttribute("data-slate-zero-width") && null !== (u = m.textContent) && void 0 !== u && u.startsWith("\uFEFF") && (s.hasAttribute("data-slate-zero-width") || ec && null !== (f = m.textContent) && void 0 !== f && f.endsWith("\n\n")) && c--
      }
      if (el && !l && !r) {
        var S = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
        if (S && eb.hasDOMNode(e, S, {
            editable: !0
          })) {
          var I = eb.toSlateNode(e, S),
            {
              path: T,
              offset: N
            } = d.ML.start(e, eb.findPath(e, I));
          return S.querySelector("[data-slate-leaf]") || (N = a), {
            path: T,
            offset: N
          }
        }
      }
      if (!l) {
        if (i) return null;
        throw Error("Cannot resolve a Slate point from DOM point: ".concat(t))
      }
      var A = eb.toSlateNode(e, l);
      return {
        path: eb.findPath(e, A),
        offset: c
      }
    },
    toSlateRange(e, t, n) {
      var r, i, o, a, s, l, {
        exactMatch: c,
        suppressThrow: u
      } = n;
      if ((z(t) ? t.anchorNode : t.startContainer) && (z(t) ? (r = t.anchorNode, i = t.anchorOffset, o = t.focusNode, a = t.focusOffset, s = ef && J(r) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed) : (r = t.startContainer, i = t.startOffset, o = t.endContainer, a = t.endOffset, s = t.collapsed)), null == r || null == o || null == i || null == a) throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
      "getAttribute" in o && "false" === o.getAttribute("contenteditable") && (o = r, a = (null === (l = r.textContent) || void 0 === l ? void 0 : l.length) || 0);
      var f = eb.toSlatePoint(e, [r, i], {
        exactMatch: c,
        suppressThrow: u
      });
      if (!f) return null;
      var _ = s ? f : eb.toSlatePoint(e, [o, a], {
        exactMatch: c,
        suppressThrow: u
      });
      if (!_) return null;
      if (ec && !s && r !== o) {
        var p = d.ML.isEnd(e, f, f.path),
          h = d.ML.isStart(e, _, _.path);
        p && (f = d.ML.after(e, f) || f), h && (_ = d.ML.before(e, _) || _)
      }
      var g = {
        anchor: f,
        focus: _
      };
      return d.e6.isExpanded(g) && d.e6.isForward(g) && Y(o) && d.ML.void(e, {
        at: g.focus,
        mode: "highest"
      }) && (g = d.ML.unhangRange(e, g, {
        voids: !0
      })), g
    },
    hasRange(e, t) {
      var {
        anchor: n,
        focus: r
      } = t;
      return d.ML.hasPath(e, n.path) && d.ML.hasPath(e, r.path)
    },
    hasTarget: (e, t) => K(t) && eb.hasDOMNode(e, t),
    hasEditableTarget: (e, t) => K(t) && eb.hasDOMNode(e, t, {
      editable: !0
    }),
    hasSelectableTarget: (e, t) => eb.hasEditableTarget(e, t) || eb.isTargetInsideNonReadonlyVoid(e, t),
    isTargetInsideNonReadonlyVoid(e, t) {
      if (R.get(e)) return !1;
      var n = eb.hasTarget(e, t) && eb.toSlateNode(e, t);
      return d.W_.isElement(n) && d.ML.isVoid(e, n)
    },
    androidScheduleFlush(e) {
      var t;
      null === (t = x.get(e)) || void 0 === t || t()
    },
    androidPendingDiffs: e => j.get(e)
  },
  ey = ["anchor", "focus"],
  eO = ["anchor", "focus"],
  eS = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(n => t.hasOwnProperty(n) && e[n] === t[n]),
  eI = (e, t) => {
    var n = m(e, ey),
      r = m(t, eO);
    return e[V] === t[V] && eS(n, r)
  },
  eT = (e, t) => {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = t[n];
      if (!d.e6.equals(r, i) || !eI(r, i)) return !1
    }
    return !0
  },
  eN = (e, t) => {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = t[n];
      if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !eI(r, i)) return !1
    }
    return !0
  },
  eA = eE ? c.useLayoutEffect : c.useEffect,
  eC = e => {
    var {
      isLast: t,
      leaf: n,
      parent: r,
      text: i
    } = e, o = eL(), a = eb.findPath(o, i), s = d.y$.parent(a), l = !0 === n[F];
    return o.isVoid(r) ? c.createElement(eD, {
      length: d.NB.string(r).length
    }) : "" !== n.text || r.children[r.children.length - 1] !== i || o.isInline(r) || "" !== d.ML.string(o, s) ? "" === n.text ? c.createElement(eD, {
      isMarkPlaceholder: l
    }) : t && "\n" === n.text.slice(-1) ? c.createElement(eR, {
      isTrailing: !0,
      text: n.text
    }) : c.createElement(eR, {
      text: n.text
    }) : c.createElement(eD, {
      isLineBreak: !0,
      isMarkPlaceholder: l
    })
  },
  eR = e => {
    var {
      text: t,
      isTrailing: n = !1
    } = e, r = (0, c.useRef)(null), i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""), [o] = (0, c.useState)(i);
    return eA(() => {
      var e = i();
      r.current && r.current.textContent !== e && (r.current.textContent = e)
    }), c.createElement(eP, {
      ref: r
    }, o)
  },
  eP = (0, c.memo)((0, c.forwardRef)((e, t) => c.createElement("span", {
    "data-slate-string": !0,
    ref: t
  }, e.children))),
  eD = e => {
    var {
      length: t = 0,
      isLineBreak: n = !1,
      isMarkPlaceholder: r = !1
    } = e, i = {
      "data-slate-zero-width": n ? "n" : "z",
      "data-slate-length": t
    };
    return r && (i["data-slate-mark-placeholder"] = !0), c.createElement("span", Object.assign({}, i), el && n ? null : "\uFEFF", n ? c.createElement("br", null) : null)
  },
  ew = (0, c.createContext)(null),
  eL = () => {
    var e = (0, c.useContext)(ew);
    if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
    return e
  },
  ex = e => {
    var {
      leaf: t,
      isLast: n,
      text: r,
      parent: i,
      renderPlaceholder: o,
      renderLeaf: a = e => c.createElement(ek, Object.assign({}, e))
    } = e, s = (0, c.useRef)(null), l = (0, c.useRef)(null), u = eL(), d = (0, c.useRef)(null);
    (0, c.useEffect)(() => () => {
      d.current && d.current.disconnect()
    }, []), (0, c.useEffect)(() => {
      var e = null == l ? void 0 : l.current;
      if (e ? I.set(u, e) : I.delete(u), d.current) d.current.disconnect(), e && d.current.observe(e);
      else if (e) {
        var t = window.ResizeObserver || f.do;
        d.current = new t(() => {
          var e = B.get(u);
          null == e || e()
        }), d.current.observe(e)
      }
      if (!e && s.current) {
        var n = B.get(u);
        null == n || n()
      }
      return s.current = l.current, () => {
        I.delete(u)
      }
    }, [l, t]);
    var _ = c.createElement(eC, {
      isLast: n,
      leaf: t,
      parent: i,
      text: r
    });
    if (t[V]) {
      var p = {
        children: t.placeholder,
        attributes: {
          "data-slate-placeholder": !0,
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
          contentEditable: !1,
          ref: l
        }
      };
      _ = c.createElement(c.Fragment, null, o(p), _)
    }
    return a({
      attributes: {
        "data-slate-leaf": !0
      },
      children: _,
      leaf: t,
      text: r
    })
  },
  eM = c.memo(ex, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && d.xv.equals(t.leaf, e.leaf) && t.leaf[V] === e.leaf[V]),
  ek = e => {
    var {
      attributes: t,
      children: n
    } = e;
    return c.createElement("span", Object.assign({}, t), n)
  },
  ej = e => {
    for (var {
        decorations: t,
        isLast: n,
        parent: r,
        renderPlaceholder: i,
        renderLeaf: o,
        text: a
      } = e, s = eL(), l = (0, c.useRef)(null), u = d.xv.decorations(a, t), f = eb.findKey(s, a), _ = [], p = 0; p < u.length; p++) {
      var h = u[p];
      _.push(c.createElement(eM, {
        isLast: n && p === u.length - 1,
        key: "".concat(f.id, "-").concat(p),
        renderPlaceholder: i,
        leaf: h,
        text: a,
        parent: r,
        renderLeaf: o
      }))
    }
    var g = (0, c.useCallback)(e => {
      var t = C.get(s);
      e ? (null == t || t.set(f, e), N.set(a, e), T.set(e, a)) : (null == t || t.delete(f), N.delete(a), l.current && T.delete(l.current)), l.current = e
    }, [l, s, f, a]);
    return c.createElement("span", {
      "data-slate-node": "text",
      ref: g
    }, _)
  },
  eU = c.memo(ej, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && eN(t.decorations, e.decorations)),
  eG = e => {
    var {
      decorations: t,
      element: n,
      renderElement: r = e => c.createElement(eV, Object.assign({}, e)),
      renderPlaceholder: o,
      renderLeaf: a,
      selection: s
    } = e, l = eL(), u = ez(), f = l.isInline(n), _ = eb.findKey(l, n), p = (0, c.useCallback)(e => {
      var t = C.get(l);
      e ? (null == t || t.set(_, e), N.set(n, e), T.set(e, n)) : (null == t || t.delete(_), N.delete(n))
    }, [l, _, n]), h = eY({
      decorations: t,
      node: n,
      renderElement: r,
      renderPlaceholder: o,
      renderLeaf: a,
      selection: s
    }), g = {
      "data-slate-node": "element",
      ref: p
    };
    if (f && (g["data-slate-inline"] = !0), !f && d.ML.hasInlines(l, n)) {
      var m = d.NB.string(n),
        E = i()(m);
      "rtl" === E && (g.dir = E)
    }
    if (d.ML.isVoid(l, n)) {
      g["data-slate-void"] = !0, !u && f && (g.contentEditable = !1);
      var v = f ? "span" : "div",
        [
          [O]
        ] = d.NB.texts(n);
      h = c.createElement(v, {
        "data-slate-spacer": !0,
        style: {
          height: "0",
          color: "transparent",
          outline: "none",
          position: "absolute"
        }
      }, c.createElement(eU, {
        renderPlaceholder: o,
        decorations: [],
        isLast: !1,
        parent: n,
        text: O
      })), b.set(O, 0), y.set(O, n)
    }
    return r({
      attributes: g,
      children: h,
      element: n,
      decorations: t
    })
  },
  eB = c.memo(eG, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && eT(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && d.e6.equals(e.selection, t.selection))),
  eV = e => {
    var {
      attributes: t,
      children: n,
      element: r
    } = e, i = eL().isInline(r) ? "span" : "div";
    return c.createElement(i, Object.assign({}, t, {
      style: {
        position: "relative"
      }
    }), n)
  },
  eF = (0, c.createContext)(() => []),
  eZ = () => (0, c.useContext)(eF),
  eH = (0, c.createContext)(!1),
  eW = () => (0, c.useContext)(eH),
  eY = e => {
    for (var {
        decorations: t,
        node: n,
        renderElement: r,
        renderPlaceholder: i,
        renderLeaf: o,
        selection: a
      } = e, s = eZ(), l = eL(), u = eb.findPath(l, n), f = [], _ = d.W_.isElement(n) && !l.isInline(n) && d.ML.hasInlines(l, n), p = 0; p < n.children.length; p++) {
      var h = u.concat(p),
        g = n.children[p],
        m = eb.findKey(l, g),
        E = d.ML.range(l, h),
        v = a && d.e6.intersection(E, a),
        O = s([g, h]);
      for (var S of t) {
        var I = d.e6.intersection(S, E);
        I && O.push(I)
      }
      d.W_.isElement(g) ? f.push(c.createElement(eH.Provider, {
        key: "provider-".concat(m.id),
        value: !!v
      }, c.createElement(eB, {
        decorations: O,
        element: g,
        key: m.id,
        renderElement: r,
        renderPlaceholder: i,
        renderLeaf: o,
        selection: v
      }))) : f.push(c.createElement(eU, {
        decorations: O,
        key: m.id,
        isLast: _ && p === n.children.length - 1,
        parent: n,
        renderPlaceholder: i,
        renderLeaf: o,
        text: g
      })), b.set(g, p), y.set(g, n)
    }
    return f
  },
  eK = (0, c.createContext)(!1),
  ez = () => (0, c.useContext)(eK),
  eq = (0, c.createContext)(null),
  eQ = () => {
    var e = (0, c.useContext)(eq);
    if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
    var {
      editor: t
    } = e;
    return t
  },
  eX = 3,
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
      i = t && (0, _.isKeyHotkey)(t),
      o = n && (0, _.isKeyHotkey)(n),
      a = r && (0, _.isKeyHotkey)(r);
    return e => !!(i && i(e) || es && o && o(e) || !es && a && a(e))
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
  e4 = {
    subtree: !0,
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0
  };
class e6 extends c.Component {
  constructor() {
    super(...arguments), this.context = null, this.manager = null, this.mutationObserver = null
  }
  observe() {
    var e, {
      node: t
    } = this.props;
    if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
    null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, e4)
  }
  componentDidMount() {
    var {
      receivedUserInput: e
    } = this.props, t = this.context;
    this.manager = e3(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe()
  }
  getSnapshotBeforeUpdate() {
    var e, t, n, r, i = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
    return null != i && i.length && (null === (r = this.manager) || void 0 === r || r.registerMutations(i)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (n = this.manager) || void 0 === n || n.restoreDOM(), null
  }
  componentDidUpdate() {
    var e;
    null === (e = this.manager) || void 0 === e || e.clear(), this.observe()
  }
  componentWillUnmount() {
    var e;
    null === (e = this.mutationObserver) || void 0 === e || e.disconnect()
  }
  render() {
    return this.props.children
  }
}
e6.contextType = ew;
var e5 = el ? e6 : e => {
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
  if (!d.ML.hasPath(e, n)) return !1;
  var i = d.NB.get(e, n);
  if (!d.xv.isText(i)) return !1;
  if (r.start !== i.text.length || 0 === r.text.length) return i.text.slice(r.start, r.start + r.text.length) === r.text;
  var o = d.y$.next(n);
  if (!d.ML.hasPath(e, o)) return !1;
  var a = d.NB.get(e, o);
  return d.xv.isText(a) && a.text.startsWith(r.text)
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
  } = t, o = e.slice(n, r), a = e9(o, i), s = Math.min(o.length - a, i.length - a), l = te(o, i, s), c = {
    start: n + a,
    end: r - l,
    text: i.slice(a, i.length - l)
  };
  return c.start === c.end && 0 === c.text.length ? null : c
}

function tn(e, t, n) {
  var r = Math.min(t.start, n.start),
    i = Math.max(0, Math.min(t.start + t.text.length, n.end) - n.start),
    o = e8(e, t, n),
    a = Math.max(n.start + n.text.length, t.start + t.text.length + (t.start + t.text.length > n.start ? n.text.length : 0) - i),
    s = o.slice(r, a);
  return tt(e, {
    start: r,
    end: Math.max(t.end, n.end - t.text.length + (t.end - t.start)),
    text: s
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
  if (!d.ML.hasPath(e, n)) return null;
  var i = d.NB.get(e, n);
  if (!d.xv.isText(i)) return null;
  var o = d.ML.above(e, {
    match: t => d.W_.isElement(t) && d.ML.isBlock(e, t),
    at: n
  });
  if (!o) return null;
  for (; r > i.text.length;) {
    var a = d.ML.next(e, {
      at: n,
      match: d.xv.isText
    });
    if (!a || !d.y$.isDescendant(a[1], o[1])) return null;
    r -= i.text.length, i = a[0], n = a[1]
  }
  return {
    path: n,
    offset: r
  }
}

function to(e, t) {
  var n = ti(e, t.anchor);
  if (!n) return null;
  if (d.e6.isCollapsed(t)) return {
    anchor: n,
    focus: n
  };
  var r = ti(e, t.focus);
  return r ? {
    anchor: n,
    focus: r
  } : null
}

function ta(e, t, n) {
  var r = j.get(e),
    i = null == r ? void 0 : r.find(e => {
      var {
        path: n
      } = e;
      return d.y$.equals(n, t.path)
    });
  if (!i || t.offset <= i.diff.start) return d.E9.transform(t, n, {
    affinity: "backward"
  });
  var {
    diff: o
  } = i;
  if (t.offset <= o.start + o.text.length) {
    var a = {
        path: t.path,
        offset: o.start
      },
      s = d.E9.transform(a, n, {
        affinity: "backward"
      });
    return s ? {
      path: s.path,
      offset: s.offset + t.offset - o.start
    } : null
  }
  var l = {
      path: t.path,
      offset: t.offset - o.text.length + o.end - o.start
    },
    c = d.E9.transform(l, n, {
      affinity: "backward"
    });
  return c ? "split_node" === n.type && d.y$.equals(n.path, t.path) && l.offset < n.position && o.start < n.position ? c : {
    path: c.path,
    offset: c.offset + o.text.length - o.end + o.start
  } : null
}

function ts(e, t, n) {
  var r = ta(e, t.anchor, n);
  if (!r) return null;
  if (d.e6.isCollapsed(t)) return {
    anchor: r,
    focus: r
  };
  var i = ta(e, t.focus, n);
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
      if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
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
      if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
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
      if (!d.y$.equals(t.path, n) || t.position >= r.end) return {
        diff: r,
        id: i,
        path: d.y$.transform(n, t, {
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
        }, id: i, path: d.y$.transform(n, t, {
          affinity: "forward"
        })
      };
    case "merge_node":
      if (!d.y$.equals(t.path, n)) return {
        diff: r,
        id: i,
        path: d.y$.transform(n, t)
      };
      return {
        diff: {
          start: r.start + t.position,
          end: r.end + t.position,
          text: r.text
        }, id: i, path: d.y$.transform(n, t)
      }
  }
  var o = d.y$.transform(n, t);
  return o ? {
    diff: r,
    path: o,
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
    t % 2 ? tc(Object(n), !0).forEach(function(t) {
      h(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tc(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var td = 25,
  tf = 200,
  t_ = function() {},
  tp = e => (null == e ? void 0 : e.constructor.name) === "DataTransfer";

function th(e) {
  var {
    editor: t,
    scheduleOnDOMSelectionChange: n,
    onDOMSelectionChange: r
  } = e, i = !1, o = null, a = null, s = null, l = 0, c = !1, u = () => {
    var e = G.get(t);
    if (G.delete(t), e) {
      var {
        selection: n
      } = t, r = to(t, e);
      !r || n && d.e6.equals(r, n) || d.YR.select(t, r)
    }
  }, f = () => {
    var e = U.get(t);
    if (U.delete(t), e) {
      if (e.at) {
        var n = d.E9.isPoint(e.at) ? ti(t, e.at) : to(t, e.at);
        if (!n) return;
        var r = d.ML.range(t, n);
        t.selection && d.e6.equals(t.selection, r) || d.YR.select(t, n)
      }
      e.run()
    }
  }, _ = () => {
    if (a && (clearTimeout(a), a = null), s && (clearTimeout(s), s = null), !b() && !v()) {
      u();
      return
    }
    i || (i = !0, setTimeout(() => i = !1)), v() && (i = "action");
    var e = t.selection && d.ML.rangeRef(t, t.selection, {
      affinity: "forward"
    });
    k.set(t, t.marks), t_("flush", U.get(t), j.get(t));
    for (var o = b(); l = null === (_ = j.get(t)) || void 0 === _ ? void 0 : _[0];) {
      var l, _, p, h = M.get(t);
      void 0 !== h && (M.delete(t), t.marks = h), h && !1 === c && (c = null);
      var g = tr(l);
      t.selection && d.e6.equals(t.selection, g) || d.YR.select(t, g), l.diff.text ? d.ML.insertText(t, l.diff.text) : d.ML.deleteFragment(t), j.set(t, null === (p = j.get(t)) || void 0 === p ? void 0 : p.filter(e => {
        var {
          id: t
        } = e;
        return t !== l.id
      })), e7(t, l) || (o = !1, U.delete(t), k.delete(t), i = "action", G.delete(t), n.cancel(), r.cancel(), null == e || e.unref())
    }
    var m = null == e ? void 0 : e.unref();
    if (!m || G.get(t) || t.selection && d.e6.equals(m, t.selection) || d.YR.select(t, m), v()) {
      f();
      return
    }
    o && n(), n.flush(), r.flush(), u();
    var E = k.get(t);
    k.delete(t), void 0 !== E && (t.marks = E, t.onChange())
  }, p = e => {
    o && clearTimeout(o), o = setTimeout(() => {
      D.set(t, !1), _()
    }, td)
  }, h = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      n = I.get(t);
    if (n) {
      if (b() || e) {
        n.style.display = "none";
        return
      }
      n.style.removeProperty("display")
    }
  }, g = (e, n) => {
    var r, i = null !== (r = j.get(t)) && void 0 !== r ? r : [];
    j.set(t, i);
    var o = d.NB.leaf(t, e),
      a = i.findIndex(t => d.y$.equals(t.path, e));
    if (a < 0) {
      tt(o.text, n) && i.push({
        path: e,
        diff: n,
        id: l++
      }), h();
      return
    }
    var s = tn(o.text, i[a].diff, n);
    if (!s) {
      i.splice(a, 1), h();
      return
    }
    i[a] = tu(tu({}, i[a]), {}, {
      diff: s
    })
  }, m = function(e) {
    var {
      at: i
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    c = !1, G.delete(t), n.cancel(), r.cancel(), v() && _(), U.set(t, {
      at: i,
      run: e
    }), s = setTimeout(_)
  }, E = e => {
    a && (clearTimeout(a), a = null);
    var {
      inputType: n
    } = e, r = null, i = e.dataTransfer || e.data || void 0;
    !1 !== c && "insertText" !== n && "insertCompositionText" !== n && (c = !1);
    var [o] = e.getTargetRanges();
    o && (r = eb.toSlateRange(t, o, {
      exactMatch: !1,
      suppressThrow: !0
    }));
    var s = eb.getWindow(t).getSelection();
    if (!r && s && (o = s, r = eb.toSlateRange(t, s, {
        exactMatch: !1,
        suppressThrow: !0
      })), r = null !== (P = r) && void 0 !== P ? P : t.selection) {
      var l = !0;
      if (n.startsWith("delete")) {
        if (d.e6.isExpanded(r)) {
          var [u, f] = d.e6.edges(r);
          if (d.NB.leaf(t, u.path).text.length === u.offset && 0 === f.offset) {
            var _ = d.ML.next(t, {
              at: u.path,
              match: d.xv.isText
            });
            _ && d.y$.equals(_[1], f.path) && (r = {
              anchor: f,
              focus: f
            })
          }
        }
        var p = n.endsWith("Backward") ? "backward" : "forward",
          [h, E] = d.e6.edges(r),
          [v, b] = d.ML.leaf(t, h.path),
          y = {
            text: "",
            start: h.offset,
            end: E.offset
          },
          S = j.get(t),
          I = null == S ? void 0 : S.find(e => d.y$.equals(e.path, b)),
          T = I ? [I.diff, y] : [y];
        if (0 === e8(v.text, ...T).length && (l = !1), d.e6.isExpanded(r)) {
          if (l && d.y$.equals(r.anchor.path, r.focus.path)) {
            var A = {
              path: r.anchor.path,
              offset: h.offset
            };
            return O(d.ML.range(t, A, A)), g(r.anchor.path, {
              text: "",
              end: E.offset,
              start: h.offset
            })
          }
          return m(() => d.ML.deleteFragment(t, {
            direction: p
          }), {
            at: r
          })
        }
      }
      switch (n) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return m(() => d.ML.deleteFragment(t), {
            at: r
          });
        case "deleteContent":
        case "deleteContentForward":
          var {
            anchor: C
          } = r;
          if (l && d.e6.isCollapsed(r)) {
            var R = d.NB.leaf(t, C.path);
            if (C.offset < R.text.length) return g(C.path, {
              text: "",
              start: C.offset,
              end: C.offset + 1
            })
          }
          return m(() => d.ML.deleteForward(t), {
            at: r
          });
        case "deleteContentBackward":
          var P, D, {
              anchor: w
            } = r,
            L = z(o) ? o.isCollapsed : !!(null !== (D = o) && void 0 !== D && D.collapsed);
          if (l && L && d.e6.isCollapsed(r) && w.offset > 0) return g(w.path, {
            text: "",
            start: w.offset - 1,
            end: w.offset
          });
          return m(() => d.ML.deleteBackward(t), {
            at: r
          });
        case "deleteEntireSoftLine":
          return m(() => {
            d.ML.deleteBackward(t, {
              unit: "line"
            }), d.ML.deleteForward(t, {
              unit: "line"
            })
          }, {
            at: r
          });
        case "deleteHardLineBackward":
          return m(() => d.ML.deleteBackward(t, {
            unit: "block"
          }), {
            at: r
          });
        case "deleteSoftLineBackward":
          return m(() => d.ML.deleteBackward(t, {
            unit: "line"
          }), {
            at: r
          });
        case "deleteHardLineForward":
          return m(() => d.ML.deleteForward(t, {
            unit: "block"
          }), {
            at: r
          });
        case "deleteSoftLineForward":
          return m(() => d.ML.deleteForward(t, {
            unit: "line"
          }), {
            at: r
          });
        case "deleteWordBackward":
          return m(() => d.ML.deleteBackward(t, {
            unit: "word"
          }), {
            at: r
          });
        case "deleteWordForward":
          return m(() => d.ML.deleteForward(t, {
            unit: "word"
          }), {
            at: r
          });
        case "insertLineBreak":
          return m(() => d.ML.insertSoftBreak(t), {
            at: r
          });
        case "insertParagraph":
          return m(() => d.ML.insertBreak(t), {
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
          if (tp(i)) return m(() => eb.insertData(t, i), {
            at: r
          });
          var x = null != i ? i : "";
          if (M.get(t) && (x = x.replace("\uFEFF", "")), "insertText" === n && /.*\n.*\n$/.test(x) && (x = x.slice(0, -1)), x.includes("\n")) return m(() => {
            var e = x.split("\n");
            e.forEach((n, r) => {
              n && d.ML.insertText(t, n), r !== e.length - 1 && d.ML.insertSoftBreak(t)
            })
          }, {
            at: r
          });
          if (d.y$.equals(r.anchor.path, r.focus.path)) {
            var [k, U] = d.e6.edges(r), G = {
              start: k.offset,
              end: U.offset,
              text: x
            };
            if (x && c && "insertCompositionText" === n) {
              var B = c.start + c.text.search(/\S|$/);
              G.start + G.text.search(/\S|$/) === B + 1 && G.end === c.start + c.text.length ? (G.start -= 1, c = null, N()) : c = !1
            } else c = "insertText" === n && (null === c ? G : !!(c && d.e6.isCollapsed(r)) && c.end + c.text.length === k.offset && tu(tu({}, c), {}, {
              text: c.text + x
            }));
            if (l) {
              g(k.path, G);
              return
            }
          }
          return m(() => d.ML.insertText(t, x), {
            at: r
          })
      }
    }
  }, v = () => !!U.get(t), b = () => {
    var e;
    return !!(null !== (e = j.get(t)) && void 0 !== e && e.length)
  }, y = () => v() || b(), O = e => {
    G.set(t, e), a && (clearTimeout(a), a = null);
    var {
      selection: n
    } = t;
    if (e) {
      var r = !n || !d.y$.equals(n.anchor.path, e.anchor.path),
        i = !n || !d.y$.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
      (r && c || i) && (c = !1), (r || b()) && (a = setTimeout(_, tf))
    }
  }, S = () => {
    (v() || !b()) && _()
  }, T = e => {
    b() || (h(!0), setTimeout(h))
  }, N = () => {
    v() || (s = setTimeout(_))
  }, A = e => {
    if (!(b() || v()) && e.some(n => ei(t, n, e))) {
      var n;
      null === (n = B.get(t)) || void 0 === n || n()
    }
  };
  return {
    flush: _,
    scheduleFlush: N,
    hasPendingDiffs: b,
    hasPendingAction: v,
    hasPendingChanges: y,
    isFlushing: () => i,
    handleUserSelect: O,
    handleCompositionEnd: p,
    handleCompositionStart: e => {
      D.set(t, !0), o && (clearTimeout(o), o = null)
    },
    handleDOMBeforeInput: E,
    handleKeyDown: T,
    handleDomMutations: A,
    handleInput: S
  }
}

function tg() {
  var e = (0, c.useRef)(!1);
  return (0, c.useEffect)(() => (e.current = !0, () => {
    e.current = !1
  }), []), e.current
}

function tm(e, t, n) {
  var [r] = (0, c.useState)(() => new MutationObserver(t));
  eA(() => {
    r.takeRecords()
  }), (0, c.useEffect)(() => {
    if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
    return r.observe(e.current, n), () => r.disconnect()
  }, [])
}
var tE = ["node"];

function tv(e, t) {
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
    t % 2 ? tv(Object(n), !0).forEach(function(t) {
      h(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tv(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var ty = {
  subtree: !0,
  childList: !0,
  characterData: !0
};

function tO(e) {
  var {
    node: t
  } = e, n = m(e, tE);
  if (!el) return null;
  var r = eL(),
    i = tg(),
    [o] = (0, c.useState)(() => th(tb({
      editor: r
    }, n)));
  return tm(t, o.handleDomMutations, ty), x.set(r, o.scheduleFlush), i && o.flush(), o
}

function tS() {
  var e = eL(),
    t = (0, c.useRef)(!1),
    n = (0, c.useRef)(0),
    r = (0, c.useCallback)(() => {
      if (!t.current) {
        t.current = !0;
        var r = eb.getWindow(e);
        r.cancelAnimationFrame(n.current), n.current = r.requestAnimationFrame(() => {
          t.current = !1
        })
      }
    }, []);
  return (0, c.useEffect)(() => () => cancelAnimationFrame(n.current), []), {
    receivedUserInput: t,
    onUserInput: r
  }
}
var tI = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
  tT = ["text"];

function tN(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function tA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? tN(Object(n), !0).forEach(function(t) {
      h(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tN(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var tC = e => c.createElement(c.Fragment, null, eY(e)),
  tR = e => {
    var t, n, r = (0, c.useCallback)(e => c.createElement(tP, Object.assign({}, e)), []),
      {
        autoFocus: o,
        decorate: s = tD,
        onDOMBeforeInput: u,
        placeholder: f,
        readOnly: _ = !1,
        renderElement: p,
        renderLeaf: h,
        renderPlaceholder: g = r,
        scrollSelectionIntoView: E = tw,
        style: v = {},
        as: b = "div",
        disableDefaultStyles: y = !1
      } = e,
      A = m(e, tI),
      C = eQ(),
      [L, x] = (0, c.useState)(!1),
      j = (0, c.useRef)(null),
      U = (0, c.useRef)([]),
      {
        onUserInput: G,
        receivedUserInput: Z
      } = tS(),
      [, W] = (0, c.useReducer)(e => e + 1, 0);
    B.set(C, W), R.set(C, _);
    var z = (0, c.useMemo)(() => ({
      isDraggingInternally: !1,
      isUpdatingSelection: !1,
      latestElement: null,
      hasMarkPlaceholder: !1
    }), []);
    (0, c.useLayoutEffect)(() => () => {
      null != z && null != z.latestElement && (z.latestElement.remove(), z.latestElement = null)
    }, []), (0, c.useEffect)(() => {
      j.current && o && j.current.focus()
    }, [o]);
    var q = (0, c.useCallback)(l()(() => {
        if ((el || !eb.isComposing(C)) && (!z.isUpdatingSelection || null != J && J.isFlushing()) && !z.isDraggingInternally) {
          var e = eb.findDocumentOrShadowRoot(C),
            {
              activeElement: t
            } = e,
            n = eb.toDOMNode(C, C),
            r = e.getSelection();
          if (t === n ? (z.latestElement = t, P.set(C, !0)) : P.delete(C), !r) return d.YR.deselect(C);
          var {
            anchorNode: i,
            focusNode: o
          } = r, a = eb.hasEditableTarget(C, i) || eb.isTargetInsideNonReadonlyVoid(C, i), s = eb.hasEditableTarget(C, o) || eb.isTargetInsideNonReadonlyVoid(C, o);
          if (a && s) {
            var l = eb.toSlateRange(C, r, {
              exactMatch: !1,
              suppressThrow: !0
            });
            l && (eb.isComposing(C) || null != J && J.hasPendingChanges() || null != J && J.isFlushing() ? null == J || J.handleUserSelect(l) : d.YR.select(C, l))
          }!_ || a && s || d.YR.deselect(C)
        }
      }, 100), [_]),
      X = (0, c.useMemo)(() => a()(q, 0), [q]),
      J = tO({
        node: j,
        onDOMSelectionChange: q,
        scheduleOnDOMSelectionChange: X
      });
    eA(() => {
      j.current && (e = H(j.current)) ? (O.set(C, e), S.set(C, j.current), N.set(C, j.current), T.set(j.current, C)) : N.delete(C);
      var e, {
          selection: t
        } = C,
        n = eb.findDocumentOrShadowRoot(C).getSelection();
      if (!(!n || !eb.isFocused(C) || null != J && J.hasPendingAction())) {
        var r = e => {
            var r = "None" !== n.type;
            if (t || r) {
              var i = S.get(C),
                o = !1;
              if (i.contains(n.anchorNode) && i.contains(n.focusNode) && (o = !0), r && o && t && !e) {
                var a = eb.toSlateRange(C, n, {
                  exactMatch: !0,
                  suppressThrow: !0
                });
                if (a && d.e6.equals(a, t)) {
                  if (!z.hasMarkPlaceholder) return;
                  var s, {
                    anchorNode: l
                  } = n;
                  if (null != l && null !== (s = l.parentElement) && void 0 !== s && s.hasAttribute("data-slate-mark-placeholder")) return
                }
              }
              if (t && !eb.hasRange(C, t)) {
                C.selection = eb.toSlateRange(C, n, {
                  exactMatch: !1,
                  suppressThrow: !0
                });
                return
              }
              z.isUpdatingSelection = !0;
              var c = t && eb.toDOMRange(C, t);
              return c ? (d.e6.isBackward(t) ? n.setBaseAndExtent(c.endContainer, c.endOffset, c.startContainer, c.startOffset) : n.setBaseAndExtent(c.startContainer, c.startOffset, c.endContainer, c.endOffset), E(C, c)) : n.removeAllRanges(), c
            }
          },
          i = r(),
          o = (null == J ? void 0 : J.isFlushing()) === "action";
        if (!el || !o) {
          setTimeout(() => {
            i && ec && eb.toDOMNode(C, C).focus(), z.isUpdatingSelection = !1
          });
          return
        }
        var a = null,
          s = requestAnimationFrame(() => {
            if (o) {
              var e = e => {
                try {
                  eb.toDOMNode(C, C).focus(), r(e)
                } catch (e) {}
              };
              e(), a = setTimeout(() => {
                e(!0), z.isUpdatingSelection = !1
              })
            }
          });
        return () => {
          cancelAnimationFrame(s), a && clearTimeout(a)
        }
      }
    });
    var $ = (0, c.useCallback)(e => {
        if (G(), !_ && eb.hasEditableTarget(C, e.target) && !tx(e, u)) {
          if (J) return J.handleDOMBeforeInput(e);
          X.flush(), q.flush();
          var {
            selection: t
          } = C, {
            inputType: n
          } = e, r = e.dataTransfer || e.data || void 0, i = "insertCompositionText" === n || "deleteCompositionText" === n;
          if (!(i && eb.isComposing(C))) {
            var o = !1;
            if ("insertText" === n && t && d.e6.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
              o = !0, C.marks && (o = !1);
              var {
                anchor: a
              } = t, [s, l] = eb.toDOMPoint(C, a), c = null === (h = s.parentElement) || void 0 === h ? void 0 : h.closest("a"), f = eb.getWindow(C);
              if (o && c && eb.hasDOMNode(C, c)) {
                var p, h, g, m, E = null == f ? void 0 : f.document.createTreeWalker(c, NodeFilter.SHOW_TEXT).lastChild();
                E === s && (null === (m = E.textContent) || void 0 === m ? void 0 : m.length) === l && (o = !1)
              }
              if (o && s.parentElement && (null == f ? void 0 : null === (g = f.getComputedStyle(s.parentElement)) || void 0 === g ? void 0 : g.whiteSpace) === "pre") {
                var v = d.ML.above(C, {
                  at: a.path,
                  match: e => d.W_.isElement(e) && d.ML.isBlock(C, e)
                });
                v && d.NB.string(v[0]).includes("	") && (o = !1)
              }
            }
            if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
              var [b] = e.getTargetRanges();
              if (b) {
                var y = eb.toSlateRange(C, b, {
                  exactMatch: !1,
                  suppressThrow: !1
                });
                if (!t || !d.e6.equals(t, y)) {
                  o = !1;
                  var O = !i && C.selection && d.ML.rangeRef(C, C.selection);
                  d.YR.select(C, y), O && w.set(C, O)
                }
              }
            }
            if (!i) {
              if (o || e.preventDefault(), t && d.e6.isExpanded(t) && n.startsWith("delete")) {
                var S = n.endsWith("Backward") ? "backward" : "forward";
                d.ML.deleteFragment(C, {
                  direction: S
                });
                return
              }
              switch (n) {
                case "deleteByComposition":
                case "deleteByCut":
                case "deleteByDrag":
                  d.ML.deleteFragment(C);
                  break;
                case "deleteContent":
                case "deleteContentForward":
                  d.ML.deleteForward(C);
                  break;
                case "deleteContentBackward":
                  d.ML.deleteBackward(C);
                  break;
                case "deleteEntireSoftLine":
                  d.ML.deleteBackward(C, {
                    unit: "line"
                  }), d.ML.deleteForward(C, {
                    unit: "line"
                  });
                  break;
                case "deleteHardLineBackward":
                  d.ML.deleteBackward(C, {
                    unit: "block"
                  });
                  break;
                case "deleteSoftLineBackward":
                  d.ML.deleteBackward(C, {
                    unit: "line"
                  });
                  break;
                case "deleteHardLineForward":
                  d.ML.deleteForward(C, {
                    unit: "block"
                  });
                  break;
                case "deleteSoftLineForward":
                  d.ML.deleteForward(C, {
                    unit: "line"
                  });
                  break;
                case "deleteWordBackward":
                  d.ML.deleteBackward(C, {
                    unit: "word"
                  });
                  break;
                case "deleteWordForward":
                  d.ML.deleteForward(C, {
                    unit: "word"
                  });
                  break;
                case "insertLineBreak":
                  d.ML.insertSoftBreak(C);
                  break;
                case "insertParagraph":
                  d.ML.insertBreak(C);
                  break;
                case "insertFromComposition":
                case "insertFromDrop":
                case "insertFromPaste":
                case "insertFromYank":
                case "insertReplacementText":
                case "insertText":
                  "insertFromComposition" === n && eb.isComposing(C) && (x(!1), D.set(C, !1)), (null == r ? void 0 : r.constructor.name) === "DataTransfer" ? eb.insertData(C, r) : "string" == typeof r && (o ? U.current.push(() => d.ML.insertText(C, r)) : d.ML.insertText(C, r))
              }
              var I = null === (p = w.get(C)) || void 0 === p ? void 0 : p.unref();
              w.delete(C), !I || C.selection && d.e6.equals(C.selection, I) || d.YR.select(C, I)
            }
          }
        }
      }, [_, u]),
      ee = (0, c.useCallback)(e => {
        null == e ? (q.cancel(), X.cancel(), S.delete(C), N.delete(C), j.current && ev && j.current.removeEventListener("beforeinput", $)) : ev && e.addEventListener("beforeinput", $), j.current = e
      }, [j, $, q, X]);
    eA(() => {
      var e = eb.getWindow(C);
      return e.document.addEventListener("selectionchange", X), () => {
        e.document.removeEventListener("selectionchange", X)
      }
    }, [X]);
    var et = s([C, []]);
    if (f && 1 === C.children.length && 1 === Array.from(d.NB.texts(C)).length && "" === d.NB.string(C) && !L) {
      var en = d.ML.start(C, []);
      et.push({
        [V]: !0,
        placeholder: f,
        anchor: en,
        focus: en
      })
    }
    var {
      marks: er
    } = C;
    if (z.hasMarkPlaceholder = !1, C.selection && d.e6.isCollapsed(C.selection) && er) {
      var {
        anchor: ei
      } = C.selection, eo = d.NB.leaf(C, ei.path), es = m(eo, tT);
      if (!d.xv.equals(eo, er, {
          loose: !0
        })) {
        z.hasMarkPlaceholder = !0;
        var ed = Object.fromEntries(Object.keys(es).map(e => [e, null]));
        et.push(tA(tA(tA({
          [F]: !0
        }, ed), er), {}, {
          anchor: ei,
          focus: ei
        }))
      }
    }(0, c.useEffect)(() => {
      setTimeout(() => {
        var {
          selection: e
        } = C;
        if (e) {
          var {
            anchor: t
          } = e, n = d.NB.leaf(C, t.path);
          if (er && !d.xv.equals(n, er, {
              loose: !0
            })) {
            M.set(C, er);
            return
          }
        }
        M.delete(C)
      })
    });
    var e_ = null === (t = I.get(C)) || void 0 === t ? void 0 : null === (n = t.getBoundingClientRect()) || void 0 === n ? void 0 : n.height;
    return c.createElement(eK.Provider, {
      value: _
    }, c.createElement(eF.Provider, {
      value: s
    }, c.createElement(e5, {
      node: j,
      receivedUserInput: Z
    }, c.createElement(b, Object.assign({
      role: _ ? void 0 : "textbox",
      "aria-multiline": !_ || void 0
    }, A, {
      spellCheck: (!!ev || !eE) && A.spellCheck,
      autoCorrect: ev || !eE ? A.autoCorrect : "false",
      autoCapitalize: ev || !eE ? A.autoCapitalize : "false",
      "data-slate-editor": !0,
      "data-slate-node": "value",
      contentEditable: !_,
      zindex: -1,
      suppressContentEditableWarning: !0,
      ref: ee,
      style: tA(tA({}, y ? {} : tA({
        position: "relative",
        outline: "none",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      }, e_ ? {
        minHeight: e_
      } : {})), v),
      onBeforeInput: (0, c.useCallback)(e => {
        if (!ev && !_ && !tL(e, A.onBeforeInput) && eb.hasSelectableTarget(C, e.target) && (e.preventDefault(), !eb.isComposing(C))) {
          var t = e.data;
          d.ML.insertText(C, t)
        }
      }, [_]),
      onInput: (0, c.useCallback)(e => {
        if (!tL(e, A.onInput)) {
          if (J) {
            J.handleInput();
            return
          }
          for (var t of U.current) t();
          U.current = []
        }
      }, []),
      onBlur: (0, c.useCallback)(e => {
        if (!(_ || z.isUpdatingSelection || !eb.hasSelectableTarget(C, e.target) || tL(e, A.onBlur))) {
          var t = eb.findDocumentOrShadowRoot(C);
          if (z.latestElement !== t.activeElement) {
            var {
              relatedTarget: n
            } = e;
            if (!(n === eb.toDOMNode(C, C) || Y(n) && n.hasAttribute("data-slate-spacer"))) {
              if (null != n && K(n) && eb.hasDOMNode(C, n)) {
                var r = eb.toSlateNode(C, n);
                if (d.W_.isElement(r) && !C.isVoid(r)) return
              }
              if (eu) {
                var i = t.getSelection();
                null == i || i.removeAllRanges()
              }
              P.delete(C)
            }
          }
        }
      }, [_, A.onBlur]),
      onClick: (0, c.useCallback)(e => {
        if (eb.hasTarget(C, e.target) && !tL(e, A.onClick) && K(e.target)) {
          var t = eb.toSlateNode(C, e.target),
            n = eb.findPath(C, t);
          if (d.ML.hasPath(C, n) && d.NB.get(C, n) === t) {
            if (e.detail === eX && n.length >= 1) {
              var r = n;
              if (!(d.W_.isElement(t) && d.ML.isBlock(C, t))) {
                var i, o = d.ML.above(C, {
                  match: e => d.W_.isElement(e) && d.ML.isBlock(C, e),
                  at: n
                });
                r = null !== (i = null == o ? void 0 : o[1]) && void 0 !== i ? i : n.slice(0, 1)
              }
              var a = d.ML.range(C, r);
              d.YR.select(C, a);
              return
            }
            if (!_) {
              var s = d.ML.start(C, n),
                l = d.ML.end(C, n),
                c = d.ML.void(C, {
                  at: s
                }),
                u = d.ML.void(C, {
                  at: l
                });
              if (c && u && d.y$.equals(c[1], u[1])) {
                var f = d.ML.range(C, s);
                d.YR.select(C, f)
              }
            }
          }
        }
      }, [_, A.onClick]),
      onCompositionEnd: (0, c.useCallback)(e => {
        if (eb.hasSelectableTarget(C, e.target) && (eb.isComposing(C) && (x(!1), D.set(C, !1)), null == J || J.handleCompositionEnd(e), !tL(e, A.onCompositionEnd) && !el && !eu && !eh && !ea && !em && !eg && e.data)) {
          var t = M.get(C);
          M.delete(C), void 0 !== t && (k.set(C, C.marks), C.marks = t), d.ML.insertText(C, e.data);
          var n = k.get(C);
          k.delete(C), void 0 !== n && (C.marks = n)
        }
      }, [A.onCompositionEnd]),
      onCompositionUpdate: (0, c.useCallback)(e => {
        !eb.hasSelectableTarget(C, e.target) || tL(e, A.onCompositionUpdate) || eb.isComposing(C) || (x(!0), D.set(C, !0))
      }, [A.onCompositionUpdate]),
      onCompositionStart: (0, c.useCallback)(e => {
        if (eb.hasSelectableTarget(C, e.target) && (null == J || J.handleCompositionStart(e), !tL(e, A.onCompositionStart) && !el)) {
          x(!0);
          var {
            selection: t
          } = C;
          if (t) {
            if (d.e6.isExpanded(t)) {
              d.ML.deleteFragment(C);
              return
            }
            var n = d.ML.above(C, {
              match: e => d.W_.isElement(e) && d.ML.isInline(C, e),
              mode: "highest"
            });
            if (n) {
              var [, r] = n;
              if (d.ML.isEnd(C, t.anchor, r)) {
                var i = d.ML.after(C, r);
                d.YR.setSelection(C, {
                  anchor: i,
                  focus: i
                })
              }
            }
          }
        }
      }, [A.onCompositionStart]),
      onCopy: (0, c.useCallback)(e => {
        eb.hasSelectableTarget(C, e.target) && !tL(e, A.onCopy) && (e.preventDefault(), eb.setFragmentData(C, e.clipboardData, "copy"))
      }, [A.onCopy]),
      onCut: (0, c.useCallback)(e => {
        if (!_ && eb.hasSelectableTarget(C, e.target) && !tL(e, A.onCut)) {
          e.preventDefault(), eb.setFragmentData(C, e.clipboardData, "cut");
          var {
            selection: t
          } = C;
          if (t) {
            if (d.e6.isExpanded(t)) d.ML.deleteFragment(C);
            else {
              var n = d.NB.parent(C, t.anchor.path);
              d.ML.isVoid(C, n) && d.YR.delete(C)
            }
          }
        }
      }, [_, A.onCut]),
      onDragOver: (0, c.useCallback)(e => {
        if (eb.hasTarget(C, e.target) && !tL(e, A.onDragOver)) {
          var t = eb.toSlateNode(C, e.target);
          d.W_.isElement(t) && d.ML.isVoid(C, t) && e.preventDefault()
        }
      }, [A.onDragOver]),
      onDragStart: (0, c.useCallback)(e => {
        if (!_ && eb.hasTarget(C, e.target) && !tL(e, A.onDragStart)) {
          var t = eb.toSlateNode(C, e.target),
            n = eb.findPath(C, t);
          if (d.W_.isElement(t) && d.ML.isVoid(C, t) || d.ML.void(C, {
              at: n,
              voids: !0
            })) {
            var r = d.ML.range(C, n);
            d.YR.select(C, r)
          }
          z.isDraggingInternally = !0, eb.setFragmentData(C, e.dataTransfer, "drag")
        }
      }, [_, A.onDragStart]),
      onDrop: (0, c.useCallback)(e => {
        if (!_ && eb.hasTarget(C, e.target) && !tL(e, A.onDrop)) {
          e.preventDefault();
          var t = C.selection,
            n = eb.findEventRange(C, e),
            r = e.dataTransfer;
          d.YR.select(C, n), z.isDraggingInternally && t && !d.e6.equals(t, n) && !d.ML.void(C, {
            at: n,
            voids: !0
          }) && d.YR.delete(C, {
            at: t
          }), eb.insertData(C, r), eb.isFocused(C) || eb.focus(C)
        }
        z.isDraggingInternally = !1
      }, [_, A.onDrop]),
      onDragEnd: (0, c.useCallback)(e => {
        !_ && z.isDraggingInternally && A.onDragEnd && eb.hasTarget(C, e.target) && A.onDragEnd(e), z.isDraggingInternally = !1
      }, [_, A.onDragEnd]),
      onFocus: (0, c.useCallback)(e => {
        if (!_ && !z.isUpdatingSelection && eb.hasEditableTarget(C, e.target) && !tL(e, A.onFocus)) {
          var t = eb.toDOMNode(C, C),
            n = eb.findDocumentOrShadowRoot(C);
          if (z.latestElement = n.activeElement, ec && e.target !== t) {
            t.focus();
            return
          }
          P.set(C, !0)
        }
      }, [_, A.onFocus]),
      onKeyDown: (0, c.useCallback)(e => {
        if (!_ && eb.hasEditableTarget(C, e.target)) {
          null == J || J.handleKeyDown(e);
          var {
            nativeEvent: t
          } = e;
          if (eb.isComposing(C) && !1 === t.isComposing && (D.set(C, !1), x(!1)), !(tL(e, A.onKeyDown) || eb.isComposing(C))) {
            var {
              selection: n
            } = C, r = C.children[null !== n ? n.focus.path[0] : 0], o = "rtl" === i()(d.NB.string(r));
            if (e2.isRedo(t)) {
              e.preventDefault();
              var a = C;
              "function" == typeof a.redo && a.redo();
              return
            }
            if (e2.isUndo(t)) {
              e.preventDefault();
              var s = C;
              "function" == typeof s.undo && s.undo();
              return
            }
            if (e2.isMoveLineBackward(t)) {
              e.preventDefault(), d.YR.move(C, {
                unit: "line",
                reverse: !0
              });
              return
            }
            if (e2.isMoveLineForward(t)) {
              e.preventDefault(), d.YR.move(C, {
                unit: "line"
              });
              return
            }
            if (e2.isExtendLineBackward(t)) {
              e.preventDefault(), d.YR.move(C, {
                unit: "line",
                edge: "focus",
                reverse: !0
              });
              return
            }
            if (e2.isExtendLineForward(t)) {
              e.preventDefault(), d.YR.move(C, {
                unit: "line",
                edge: "focus"
              });
              return
            }
            if (e2.isMoveBackward(t)) {
              e.preventDefault(), n && d.e6.isCollapsed(n) ? d.YR.move(C, {
                reverse: !o
              }) : d.YR.collapse(C, {
                edge: "start"
              });
              return
            }
            if (e2.isMoveForward(t)) {
              e.preventDefault(), n && d.e6.isCollapsed(n) ? d.YR.move(C, {
                reverse: o
              }) : d.YR.collapse(C, {
                edge: "end"
              });
              return
            }
            if (e2.isMoveWordBackward(t)) {
              e.preventDefault(), n && d.e6.isExpanded(n) && d.YR.collapse(C, {
                edge: "focus"
              }), d.YR.move(C, {
                unit: "word",
                reverse: !o
              });
              return
            }
            if (e2.isMoveWordForward(t)) {
              e.preventDefault(), n && d.e6.isExpanded(n) && d.YR.collapse(C, {
                edge: "focus"
              }), d.YR.move(C, {
                unit: "word",
                reverse: o
              });
              return
            }
            if (ev) {
              if ((ef || eu) && n && (e2.isDeleteBackward(t) || e2.isDeleteForward(t)) && d.e6.isCollapsed(n)) {
                var l = d.NB.parent(C, n.anchor.path);
                if (d.W_.isElement(l) && d.ML.isVoid(C, l) && (d.ML.isInline(C, l) || d.ML.isBlock(C, l))) {
                  e.preventDefault(), d.ML.deleteBackward(C, {
                    unit: "block"
                  });
                  return
                }
              }
            } else {
              if (e2.isBold(t) || e2.isItalic(t) || e2.isTransposeCharacter(t)) {
                e.preventDefault();
                return
              }
              if (e2.isSoftBreak(t)) {
                e.preventDefault(), d.ML.insertSoftBreak(C);
                return
              }
              if (e2.isSplitBlock(t)) {
                e.preventDefault(), d.ML.insertBreak(C);
                return
              }
              if (e2.isDeleteBackward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(C, {
                  direction: "backward"
                }) : d.ML.deleteBackward(C);
                return
              }
              if (e2.isDeleteForward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(C, {
                  direction: "forward"
                }) : d.ML.deleteForward(C);
                return
              }
              if (e2.isDeleteLineBackward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(C, {
                  direction: "backward"
                }) : d.ML.deleteBackward(C, {
                  unit: "line"
                });
                return
              }
              if (e2.isDeleteLineForward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(C, {
                  direction: "forward"
                }) : d.ML.deleteForward(C, {
                  unit: "line"
                });
                return
              }
              if (e2.isDeleteWordBackward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(C, {
                  direction: "backward"
                }) : d.ML.deleteBackward(C, {
                  unit: "word"
                });
                return
              }
              if (e2.isDeleteWordForward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(C, {
                  direction: "forward"
                }) : d.ML.deleteForward(C, {
                  unit: "word"
                });
                return
              }
            }
          }
        }
      }, [_, A.onKeyDown]),
      onPaste: (0, c.useCallback)(e => {
        !_ && eb.hasEditableTarget(C, e.target) && !tL(e, A.onPaste) && (!ev || Q(e.nativeEvent) || eu) && (e.preventDefault(), eb.insertData(C, e.clipboardData))
      }, [_, A.onPaste])
    }), c.createElement(tC, {
      decorations: et,
      node: C,
      renderElement: p,
      renderPlaceholder: g,
      renderLeaf: h,
      selection: C.selection
    })))))
  },
  tP = e => {
    var {
      attributes: t,
      children: n
    } = e;
    return c.createElement("span", Object.assign({}, t), n, el && c.createElement("br", null))
  },
  tD = () => [],
  tw = (e, t) => {
    if (t.getBoundingClientRect && (!e.selection || e.selection && d.e6.isCollapsed(e.selection))) {
      var n = t.startContainer.parentElement;
      n.getBoundingClientRect = t.getBoundingClientRect.bind(t), (0, u.Z)(n, {
        scrollMode: "if-needed"
      }), delete n.getBoundingClientRect
    }
  },
  tL = (e, t) => {
    if (!t) return !1;
    var n = t(e);
    return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped()
  },
  tx = (e, t) => {
    if (!t) return !1;
    var n = t(e);
    return null != n ? n : e.defaultPrevented
  },
  tM = (0, c.createContext)(!1),
  tk = () => (0, c.useContext)(tM);

function tj(e) {
  return e instanceof Error
}
var tU = (0, c.createContext)({}),
  tG = (e, t) => e === t;

function tB(e) {
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
var tV = ["editor", "children", "onChange", "value"],
  tF = e => {
    var {
      editor: t,
      children: n,
      onChange: r,
      value: i
    } = e, o = m(e, tV), a = (0, c.useRef)(!1), [s, l] = c.useState(() => {
      if (!d.NB.isNodeList(i)) throw Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(d.o4.stringify(i)));
      if (!d.ML.isEditor(t)) throw Error("[Slate] editor is invalid! You passed: ".concat(d.o4.stringify(t)));
      return t.children = i, Object.assign(t, o), {
        v: 0,
        editor: t
      }
    }), {
      selectorContext: u,
      onChange: f
    } = tB(t), _ = (0, c.useCallback)(() => {
      r && r(t.children), l(e => ({
        v: e.v + 1,
        editor: t
      })), f(t)
    }, [r]);
    (0, c.useEffect)(() => (L.set(t, _), () => {
      L.set(t, () => {}), a.current = !0
    }), [_]);
    var [p, h] = (0, c.useState)(eb.isFocused(t));
    return (0, c.useEffect)(() => {
      h(eb.isFocused(t))
    }), eA(() => {
      var e = () => h(eb.isFocused(t));
      return eo ? (document.addEventListener("focusin", e), document.addEventListener("focusout", e), () => {
        document.removeEventListener("focusin", e), document.removeEventListener("focusout", e)
      }) : (document.addEventListener("focus", e, !0), document.addEventListener("blur", e, !0), () => {
        document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0)
      })
    }, []), c.createElement(tU.Provider, {
      value: u
    }, c.createElement(eq.Provider, {
      value: s
    }, c.createElement(ew.Provider, {
      value: s.editor
    }, c.createElement(tM.Provider, {
      value: p
    }, n))))
  },
  tZ = (e, t) => {
    var n = (t.top + t.bottom) / 2;
    return e.top <= n && e.bottom >= n
  },
  tH = (e, t, n) => {
    var r = eb.toDOMRange(e, t).getBoundingClientRect(),
      i = eb.toDOMRange(e, n).getBoundingClientRect();
    return tZ(r, i) && tZ(i, r)
  },
  tW = (e, t) => {
    var n = d.ML.range(e, d.e6.end(t)),
      r = Array.from(d.ML.positions(e, {
        at: t
      })),
      i = 0,
      o = r.length,
      a = Math.floor(o / 2);
    if (tH(e, d.ML.range(e, r[i]), n)) return d.ML.range(e, r[i], n);
    if (r.length < 2) return d.ML.range(e, r[r.length - 1], n);
    for (; a !== r.length && a !== i;) tH(e, d.ML.range(e, r[a]), n) ? o = a : i = a, a = Math.floor((i + o) / 2);
    return d.ML.range(e, r[o], n)
  };

function tY(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function tK(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? tY(Object(n), !0).forEach(function(t) {
      h(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tY(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var tz = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
      n = e,
      {
        apply: r,
        onChange: i,
        deleteBackward: o,
        addMark: a,
        removeMark: s
      } = n;
    return C.set(n, new WeakMap), n.addMark = (e, t) => {
      var r, i;
      null === (r = x.get(n)) || void 0 === r || r(), !M.get(n) && null !== (i = j.get(n)) && void 0 !== i && i.length && M.set(n, null), k.delete(n), a(e, t)
    }, n.removeMark = e => {
      var t;
      !M.get(n) && null !== (t = j.get(n)) && void 0 !== t && t.length && M.set(n, null), k.delete(n), s(e)
    }, n.deleteBackward = e => {
      if ("line" !== e) return o(e);
      if (n.selection && d.e6.isCollapsed(n.selection)) {
        var t = d.ML.above(n, {
          match: e => d.W_.isElement(e) && d.ML.isBlock(n, e),
          at: n.selection
        });
        if (t) {
          var [, r] = t, i = d.ML.range(n, r, n.selection.anchor), a = tW(n, i);
          d.e6.isCollapsed(a) || d.YR.delete(n, {
            at: a
          })
        }
      }
    }, n.apply = e => {
      var t, i = [],
        o = j.get(n);
      if (null != o && o.length) {
        var a = o.map(t => tl(t, e)).filter(Boolean);
        j.set(n, a)
      }
      var s = G.get(n);
      s && G.set(n, ts(n, s, e));
      var l = U.get(n);
      if (null != l && l.at) {
        var c = d.E9.isPoint(null == l ? void 0 : l.at) ? ta(n, l.at, e) : ts(n, l.at, e);
        U.set(n, c ? tK(tK({}, l), {}, {
          at: c
        }) : null)
      }
      switch (e.type) {
        case "insert_text":
        case "remove_text":
        case "set_node":
        case "split_node":
          i.push(...tq(n, e.path));
          break;
        case "set_selection":
          null === (t = w.get(n)) || void 0 === t || t.unref(), w.delete(n);
          break;
        case "insert_node":
        case "remove_node":
          i.push(...tq(n, d.y$.parent(e.path)));
          break;
        case "merge_node":
          i.push(...tq(n, d.y$.previous(e.path)));
          break;
        case "move_node":
          i.push(...tq(n, d.y$.common(d.y$.parent(e.path), d.y$.parent(e.newPath))))
      }
      for (var [u, f] of(r(e), i)) {
        var [_] = d.ML.node(n, u);
        A.set(_, f)
      }
    }, n.setFragmentData = e => {
      var {
        selection: r
      } = n;
      if (r) {
        var [i, o] = d.e6.edges(r), a = d.ML.void(n, {
          at: i.path
        }), s = d.ML.void(n, {
          at: o.path
        });
        if (!d.e6.isCollapsed(r) || a) {
          var l = eb.toDOMRange(n, r),
            c = l.cloneContents(),
            u = c.childNodes[0];
          if (c.childNodes.forEach(e => {
              e.textContent && "" !== e.textContent.trim() && (u = e)
            }), s) {
            var [f] = s, _ = l.cloneRange(), p = eb.toDOMNode(n, f);
            _.setEndAfter(p), c = _.cloneContents()
          }
          if (a && (u = c.querySelector("[data-slate-spacer]")), Array.from(c.querySelectorAll("[data-slate-zero-width]")).forEach(e => {
              var t = "n" === e.getAttribute("data-slate-zero-width");
              e.textContent = t ? "\n" : ""
            }), q(u)) {
            var h = u.ownerDocument.createElement("span");
            h.style.whiteSpace = "pre", h.appendChild(u), c.appendChild(h), u = h
          }
          var g = JSON.stringify(n.getFragment()),
            m = window.btoa(encodeURIComponent(g));
          u.setAttribute("data-slate-fragment", m), e.setData("application/".concat(t), m);
          var E = c.ownerDocument.createElement("div");
          return E.appendChild(c), E.setAttribute("hidden", "true"), c.ownerDocument.body.appendChild(E), e.setData("text/html", E.innerHTML), e.setData("text/plain", et(E)), c.ownerDocument.body.removeChild(E), e
        }
      }
    }, n.insertData = e => {
      n.insertFragmentData(e) || n.insertTextData(e)
    }, n.insertFragmentData = e => {
      var r = e.getData("application/".concat(t)) || er(e);
      if (r) {
        var i = JSON.parse(decodeURIComponent(window.atob(r)));
        return n.insertFragment(i), !0
      }
      return !1
    }, n.insertTextData = e => {
      var t = e.getData("text/plain");
      if (t) {
        var r = t.split(/\r\n|\r|\n/),
          i = !1;
        for (var o of r) i && d.YR.splitNodes(n, {
          always: !0
        }), n.insertText(o), i = !0;
        return !0
      }
      return !1
    }, n.onChange = e => {
      p.unstable_batchedUpdates(() => {
        var t = L.get(n);
        t && t(), i(e)
      })
    }, n
  },
  tq = (e, t) => {
    var n = [];
    for (var [r, i] of d.ML.levels(e, {
        at: t
      })) {
      var o = eb.findKey(e, r);
      n.push([i, o])
    }
    return n
  }