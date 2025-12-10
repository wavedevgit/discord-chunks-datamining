/** Chunk was on web.js **/
/** chunk id: 980824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NI: () => ed,
  XI: () => x,
  YF: () => ec,
  Y_: () => eE,
  bQ: () => es,
  xp: () => ev,
  y0: () => er
});
var r, Chunk473749 = require("./473749.js"),
  Chunk733387 = require("./733387.js"),
  Chunk54381 = require("./54381.js"),
  Chunk274676 = require("./274676.js"),
  Chunk24156 = require("./24156.js"),
  Chunk998976 = require("./998976.js");
let u = "data-floating-ui-focusable",
  d = "active",
  f = "selected",
  p = "ArrowLeft",
  _ = "ArrowRight",
  m = "ArrowUp",
  h = "ArrowDown",
  g = {
    ...r || (r = require.t(Chunk473749, 2))
  },
  E = false,
  b = 0,
  y = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + b++;

function O() {
  let [e, t] = Chunk473749.useState(() => E ? y() : true);
  return (0, Chunk733387.Xj)(() => {
    null == module && exports(y())
  }, []), Chunk473749.useEffect(() => {
    E = true
  }, []), module
}
let v = g.useId || O;

function S() {
  let e = new Map;
  return {
    emit(t, n) {
      var r;
      null == (r = e.get(t)) || r.forEach(e => e(n))
    },
    on(t, n) {
      e.has(t) || e.set(t, new Set), e.get(t).add(n)
    },
    off(t, n) {
      var r;
      null == (r = e.get(t)) || r.delete(n)
    }
  }
}
let I = Chunk473749.createContext(null),
  T = Chunk473749.createContext(null),
  C = () => {
    var e;
    return (null == (e = Chunk473749.useContext(I)) ? true : module.id) || null
  },
  A = () => Chunk473749.useContext(T);

function N(e) {
  return "data-floating-ui-" + e
}

function P(e) {
  false !== e.current && (clearTimeout(e.current), e.current = false)
}
let R = N("safe-polygon");

function D(e, t, n) {
  if (n && !(0, a.r)(n)) return 0;
  if ("number" == typeof e) return e;
  if ("function" == typeof e) {
    let n = e();
    return "number" == typeof n ? n : null == n ? true : n[t]
  }
  return null == e ? true : e[t]
}

function w(e) {
  return "function" == typeof e ? e() : e
}

function x(e, t) {
  true === t && (t = {});
  let {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: l,
    elements: c
  } = e, {
    enabled: u = true,
    delay: d = 0,
    handleClose: f = null,
    mouseOnly: p = false,
    restMs: _ = 0,
    move: m = true
  } = t, h = A(), g = C(), E = (0, a.II)(f), b = (0, a.II)(d), y = (0, a.II)(n), O = (0, a.II)(_), v = i.useRef(), S = i.useRef(false), I = i.useRef(), T = i.useRef(false), N = i.useRef(true), x = i.useRef(false), L = i.useRef(() => {}), j = i.useRef(false), M = (0, a.iW)(() => {
    var e;
    let t = null == (e = o.current.openEvent) ? true : e.type;
    return (null == t ? true : t.includes("mouse")) && "mousedown" !== t
  });
  i.useEffect(() => {
    if (u) return l.on("openchange", e), () => {
      l.off("openchange", e)
    };

    function e(e) {
      let {
        open: t
      } = e;
      t || (P(S), P(T), N.current = true, j.current = false)
    }
  }, [u, l]), i.useEffect(() => {
    if (!u || !E.current || !n) return;

    function e(e) {
      M() && r(false, e, "hover")
    }
    let t = (0, a.Me)(c.floating).documentElement;
    return t.addEventListener("mouseleave", e), () => {
      t.removeEventListener("mouseleave", e)
    }
  }, [c.floating, n, r, u, E, M]);
  let k = i.useCallback(function(e, t, n) {
      true === t && (t = true), true === n && (n = "hover");
      let i = D(b.current, "close", v.current);
      i && !I.current ? (P(S), S.current = window.setTimeout(() => r(false, e, n), i)) : t && (P(S), r(false, e, n))
    }, [b, r]),
    U = (0, a.iW)(() => {
      L.current(), I.current = true
    }),
    G = (0, a.iW)(() => {
      if (x.current) {
        let e = (0, a.Me)(c.floating).body;
        e.style.pointerEvents = "", e.removeAttribute(R), x.current = false
      }
    }),
    Z = (0, a.iW)(() => !!o.current.openEvent && ["click", "mousedown"].includes(o.current.openEvent.type));
  i.useEffect(() => {
    if (u && (0, s.kK)(c.domReference)) {
      let r = c.domReference,
        a = c.floating;
      return n && r.addEventListener("mouseleave", i), m && r.addEventListener("mousemove", e, {
        once: true
      }), r.addEventListener("mouseenter", e), r.addEventListener("mouseleave", t), a && (a.addEventListener("mouseleave", i), a.addEventListener("mouseenter", l), a.addEventListener("mouseleave", d)), () => {
        n && r.removeEventListener("mouseleave", i), m && r.removeEventListener("mousemove", e), r.removeEventListener("mouseenter", e), r.removeEventListener("mouseleave", t), a && (a.removeEventListener("mouseleave", i), a.removeEventListener("mouseenter", l), a.removeEventListener("mouseleave", d))
      }
    }

    function e(e) {
      if (P(S), N.current = false, p && !(0, a.r)(v.current) || w(O.current) > 0 && !D(b.current, "open")) return;
      let t = D(b.current, "open", v.current);
      t ? S.current = window.setTimeout(() => {
        y.current || r(true, e, "hover")
      }, t) : n || r(true, e, "hover")
    }

    function t(e) {
      if (Z()) return void G();
      L.current();
      let t = (0, a.Me)(c.floating);
      if (P(T), j.current = false, E.current && o.current.floatingContext) {
        n || P(S), I.current = E.current({
          ...o.current.floatingContext,
          tree: h,
          x: e.clientX,
          y: e.clientY,
          onClose() {
            G(), U(), Z() || k(e, true, "safe-polygon")
          }
        });
        let r = I.current;
        t.addEventListener("mousemove", r), L.current = () => {
          t.removeEventListener("mousemove", r)
        };
        return
      }
      "touch" === v.current && (0, a.r3)(c.floating, e.relatedTarget) || k(e)
    }

    function i(e) {
      !Z() && o.current.floatingContext && (null == E.current || E.current({
        ...o.current.floatingContext,
        tree: h,
        x: e.clientX,
        y: e.clientY,
        onClose() {
          G(), U(), Z() || k(e)
        }
      })(e))
    }

    function l() {
      P(S)
    }

    function d(e) {
      Z() || k(e, false)
    }
  }, [c, u, e, p, m, k, U, G, r, n, y, h, b, E, o, Z, O]), (0, a.Xj)(() => {
    var e, t;
    if (u && n && null != (e = E.current) && null != (e = e.__options) && e.blockPointerEvents && M()) {
      x.current = true;
      let e = c.floating;
      if ((0, s.kK)(c.domReference) && e) {
        let n = (0, a.Me)(c.floating).body;
        n.setAttribute(R, "");
        let r = c.domReference,
          i = null == h || null == (t = h.nodesRef.current.find(e => e.id === g)) || null == (t = t.context) ? true : t.elements.floating;
        return i && (i.style.pointerEvents = ""), n.style.pointerEvents = "none", r.style.pointerEvents = "auto", e.style.pointerEvents = "auto", () => {
          n.style.pointerEvents = "", r.style.pointerEvents = "", e.style.pointerEvents = ""
        }
      }
    }
  }, [u, n, g, c, h, E, M]), (0, a.Xj)(() => {
    n || (v.current = true, j.current = false, U(), G())
  }, [n, U, G]), i.useEffect(() => () => {
    U(), P(S), P(T), G()
  }, [u, c.domReference, U, G]);
  let B = i.useMemo(() => {
    function e(e) {
      v.current = e.pointerType
    }
    return {
      onPointerDown: e,
      onPointerEnter: e,
      onMouseMove(e) {
        let {
          nativeEvent: t
        } = e;

        function i() {
          N.current || y.current || r(true, t, "hover")
        }(!p || (0, a.r)(v.current)) && !n && 0 !== w(O.current) && (j.current && e.movementX ** 2 + e.movementY ** 2 < 2 || (P(T), "touch" === v.current ? i() : (j.current = true, T.current = window.setTimeout(i, w(O.current)))))
      }
    }
  }, [p, r, n, y, O]);
  return i.useMemo(() => u ? {
    reference: B
  } : {}, [u, B])
}
let L = null,
  j = 0;

function M(e, t) {
  if (!e || !t) returnfalse;
  let n = null == t.getRootNode ? true : t.getRootNode();
  if (e.contains(t)) returntrue;
  if (n && (0, s.Zq)(n)) {
    let n = t;
    for (; n;) {
      if (e === n) returntrue;
      n = n.parentNode || n.host
    }
  }
  returnfalse
}

function k(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target
}

function U(e) {
  return (null == e ? true : e.ownerDocument) || document
}
let G = {
  inert: new WeakMap,
  "aria-hidden": new WeakMap,
  none: new WeakMap
};

function Z(e) {
  return "inert" === e ? G.inert : "aria-hidden" === e ? G["aria-hidden"] : G.none
}
let B = new WeakSet,
  F = null,
  V = 0,
  H = e => e && (e.host || H(e.parentNode)),
  Y = (e, t) => t.map(t => {
    if (e.contains(t)) return t;
    let n = H(t);
    return e.contains(n) ? n : null
  }).filter(e => null != e);

function W(e, t, n, r) {
  let i = "data-floating-ui-inert",
    a = r ? "inert" : n ? "aria-hidden" : null,
    o = Y(t, e),
    s = new Set,
    l = new Set(o),
    c = [];
  F[i] || (F[i] = new WeakMap);
  let u = F[i];

  function d(e) {
    !(!e || s.has(e)) && (s.add(e), e.parentNode && d(e.parentNode))
  }

  function f(e) {
    !e || l.has(e) || [].forEach.call(e.children, e => {
      if ("script" !== getNodeName(e))
        if (s.has(e)) f(e);
        else {
          let t = a ? e.getAttribute(a) : null,
            n = null !== t && "false" !== t,
            r = Z(a),
            o = (r.get(e) || 0) + 1,
            s = (u.get(e) || 0) + 1;
          r.set(e, o), u.set(e, s), c.push(e), 1 === o && n && B.add(e), 1 === s && e.setAttribute(i, ""), !n && a && e.setAttribute(a, "inert" === a ? "" : "true")
        }
    })
  }
  return o.forEach(d), f(t), s.clear(), V++, () => {
    c.forEach(e => {
      let t = Z(a),
        n = (t.get(e) || 0) - 1,
        r = (u.get(e) || 0) - 1;
      t.set(e, n), u.set(e, r), n || (!B.has(e) && a && e.removeAttribute(a), B.delete(e)), r || e.removeAttribute(i)
    }), --V || (G.inert = new WeakMap, G["aria-hidden"] = new WeakMap, G.none = new WeakMap, B = new WeakSet, F = {})
  }
}
let K = null,
  z = null,
  q = () => React.useContext(K),
  Q = 20,
  X = null;

function J() {
  X = X.filter(e => e.isConnected)
}
let $ = 0,
  ee = "--floating-ui-scrollbar-width";

function et() {
  let e = (0, Chunk733387.Xf)(),
    t = /iP(hone|ad|od)|iOS/.test(module) || "MacIntel" === module && navigator.maxTouchPoints > 1,
    n = document.body.style,
    r = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight",
    i = window.innerWidth - document.documentElement.clientWidth,
    o = require.left ? parseFloat(require.left) : window.scrollX,
    s = require.top ? parseFloat(require.top) : window.scrollY;
  if (require.overflow = "hidden", require.setProperty(ee, Chunk473749 + "px"), Chunk473749 && (require[r] = Chunk473749 + "px"), exports) {
    var l, c;
    let e = (null == (l = window.visualViewport) ? true : Chunk24156.offsetLeft) || 0;
    Object.assign(require, {
      position: "fixed",
      top: -(Chunk274676 - Math.floor((null == (c = window.visualViewport) ? true : Chunk998976.offsetTop) || 0)) + "px",
      left: -(Chunk54381 - Math.floor(module)) + "px",
      right: "0"
    })
  }
  return () => {
    Object.assign(require, {
      overflow: "",
      [r]: ""
    }), require.removeProperty(ee), exports && (Object.assign(require, {
      position: "",
      top: "",
      left: "",
      right: ""
    }), window.scrollTo(Chunk54381, Chunk274676))
  }
}
let en = () => {},
  er = Chunk473749.forwardRef(function(e, t) {
    let {
      lockScroll: n = false,
      ...r
    } = e;
    return (0, a.Xj)(() => {
      if (n) return 1 == ++$ && (en = et()), () => {
        0 == --$ && en()
      }
    }, [n]), (0, o.jsx)("div", {
      ref: t,
      ...r,
      style: {
        position: "fixed",
        overflow: "auto",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...r.style
      }
    })
  }),
  ei = {
    pointerdown: "onPointerDown",
    mousedown: "onMouseDown",
    click: "onClick"
  },
  ea = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture"
  },
  eo = e => {
    var t, n;
    return {
      escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? true : e.escapeKey) && t,
      outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? true : e.outsidePress) || n
    }
  };

function es(e, t) {
  true === t && (t = {});
  let {
    open: n,
    onOpenChange: r,
    elements: o,
    dataRef: l
  } = e, {
    enabled: c = true,
    escapeKey: u = true,
    outsidePress: d = true,
    outsidePressEvent: f = "pointerdown",
    referencePress: p = false,
    referencePressEvent: _ = "pointerdown",
    ancestorScroll: m = false,
    bubbles: h,
    capture: g
  } = t, E = A(), b = (0, a.iW)("function" == typeof d ? d : () => false), y = "function" == typeof d ? b : d, O = i.useRef(false), {
    escapeKey: v,
    outsidePress: S
  } = eo(h), {
    escapeKey: I,
    outsidePress: T
  } = eo(g), C = i.useRef(false), P = (0, a.iW)(e => {
    var t;
    if (!n || !c || !u || "Escape" !== e.key || C.current) return;
    let i = null == (t = l.current.floatingContext) ? true : t.nodeId,
      o = E ? (0, a.El)(E.nodesRef.current, i) : [];
    if (!v && (e.stopPropagation(), o.length > 0)) {
      let e = true;
      if (o.forEach(t => {
          var n;
          if (null != (n = t.context) && n.open && !t.context.dataRef.current.__escapeKeyBubbles) {
            e = false;
            return
          }
        }), !e) return
    }
    r(false, (0, a.MM)(e) ? e.nativeEvent : e, "escape-key")
  }), R = (0, a.iW)(e => {
    var t;
    let n = () => {
      var t;
      P(e), null == (t = (0, a.U9)(e)) || t.removeEventListener("keydown", n)
    };
    null == (t = (0, a.U9)(e)) || t.addEventListener("keydown", n)
  }), D = (0, a.iW)(e => {
    var t;
    let n = l.current.insideReactTree;
    l.current.insideReactTree = false;
    let i = O.current;
    if (O.current = false, "click" === f && i || n || "function" == typeof y && !y(e)) return;
    let c = (0, a.U9)(e),
      u = "[" + N("inert") + "]",
      d = (0, a.Me)(o.floating).querySelectorAll(u),
      p = (0, s.kK)(c) ? c : null;
    for (; p && !(0, s.Py)(p);) {
      let e = (0, s.Ow)(p);
      if ((0, s.Py)(e) || !(0, s.kK)(e)) break;
      p = e
    }
    if (d.length && (0, s.kK)(c) && !(0, a.ex)(c) && !(0, a.r3)(c, o.floating) && Array.from(d).every(e => !(0, a.r3)(p, e))) return;
    if ((0, s.Re)(c) && L) {
      let t = (0, s.Py)(c),
        n = (0, s.Dx)(c),
        r = /auto|scroll/,
        i = t || r.test(n.overflowX),
        a = t || r.test(n.overflowY),
        o = i && c.clientWidth > 0 && c.scrollWidth > c.clientWidth,
        l = a && c.clientHeight > 0 && c.scrollHeight > c.clientHeight,
        u = "rtl" === n.direction,
        d = l && (u ? e.offsetX <= c.offsetWidth - c.clientWidth : e.offsetX > c.clientWidth),
        f = o && e.offsetY > c.clientHeight;
      if (d || f) return
    }
    let _ = null == (t = l.current.floatingContext) ? true : t.nodeId,
      m = E && (0, a.El)(E.nodesRef.current, _).some(t => {
        var n;
        return (0, a.Pe)(e, null == (n = t.context) ? true : n.elements.floating)
      });
    if ((0, a.Pe)(e, o.floating) || (0, a.Pe)(e, o.domReference) || m) return;
    let h = E ? (0, a.El)(E.nodesRef.current, _) : [];
    if (h.length > 0) {
      let e = true;
      if (h.forEach(t => {
          var n;
          if (null != (n = t.context) && n.open && !t.context.dataRef.current.__outsidePressBubbles) {
            e = false;
            return
          }
        }), !e) return
    }
    r(false, e, "outside-press")
  }), w = (0, a.iW)(e => {
    var t;
    let n = () => {
      var t;
      D(e), null == (t = (0, a.U9)(e)) || t.removeEventListener(f, n)
    };
    null == (t = (0, a.U9)(e)) || t.addEventListener(f, n)
  });
  i.useEffect(() => {
    if (!n || !c) return;
    l.current.__escapeKeyBubbles = v, l.current.__outsidePressBubbles = S;
    let e = false;

    function t(e) {
      r(false, e, "ancestor-scroll")
    }

    function i() {
      window.clearTimeout(e), C.current = true
    }

    function d() {
      e = window.setTimeout(() => {
        C.current = false
      }, 5 * !!(0, s.Pf)())
    }
    let p = (0, a.Me)(o.floating);
    u && (p.addEventListener("keydown", I ? R : P, I), p.addEventListener("compositionstart", i), p.addEventListener("compositionend", d)), y && p.addEventListener(f, T ? w : D, T);
    let _ = [];
    return m && ((0, s.kK)(o.domReference) && (_ = (0, s.Kx)(o.domReference)), (0, s.kK)(o.floating) && (_ = _.concat((0, s.Kx)(o.floating))), !(0, s.kK)(o.reference) && o.reference && o.reference.contextElement && (_ = _.concat((0, s.Kx)(o.reference.contextElement)))), (_ = _.filter(e => {
      var t;
      return e !== (null == (t = p.defaultView) ? true : t.visualViewport)
    })).forEach(e => {
      e.addEventListener("scroll", t, {
        passive: true
      })
    }), () => {
      u && (p.removeEventListener("keydown", I ? R : P, I), p.removeEventListener("compositionstart", i), p.removeEventListener("compositionend", d)), y && p.removeEventListener(f, T ? w : D, T), _.forEach(e => {
        e.removeEventListener("scroll", t)
      }), window.clearTimeout(e)
    }
  }, [l, o, u, y, f, n, r, m, c, v, S, P, I, R, D, T, w]), i.useEffect(() => {
    l.current.insideReactTree = false
  }, [l, y, f]);
  let x = i.useMemo(() => ({
      onKeyDown: P,
      ...p && {
        [ei[_]]: e => {
          r(false, e.nativeEvent, "reference-press")
        },
        ..."click" !== _ && {
          onClick(e) {
            r(false, e.nativeEvent, "reference-press")
          }
        }
      }
    }), [P, r, p, _]),
    L = i.useMemo(() => ({
      onKeyDown: P,
      onMouseDown() {
        O.current = true
      },
      onMouseUp() {
        O.current = true
      },
      [ea[f]]: () => {
        l.current.insideReactTree = true
      }
    }), [P, f, l]);
  return i.useMemo(() => c ? {
    reference: x,
    floating: L
  } : {}, [c, x, L])
}

function el(e) {
  let {
    open: t = false,
    onOpenChange: n,
    elements: r
  } = e, o = v(), s = i.useRef({}), [l] = i.useState(() => S()), c = null != C(), [u, d] = i.useState(r.reference), f = (0, a.iW)((e, t, r) => {
    s.current.openEvent = e ? t : true, l.emit("openchange", {
      open: e,
      event: t,
      reason: r,
      nested: c
    }), null == n || n(e, t, r)
  }), p = i.useMemo(() => ({
    setPositionReference: d
  }), []), _ = i.useMemo(() => ({
    reference: u || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [u, r.reference, r.floating]);
  return i.useMemo(() => ({
    dataRef: s,
    open: t,
    onOpenChange: f,
    elements: _,
    events: l,
    floatingId: o,
    refs: p
  }), [t, f, _, l, o, p])
}

function ec(e) {
  true === e && (e = {});
  let {
    nodeId: t
  } = e, n = el({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [l, u] = i.useState(null), [d, f] = i.useState(null), p = (null == o ? true : o.domReference) || l, _ = i.useRef(null), m = A();
  (0, a.Xj)(() => {
    p && (_.current = p)
  }, [p]);
  let h = (0, c.YF)({
      ...e,
      elements: {
        ...o,
        ...d && {
          reference: d
        }
      }
    }),
    g = i.useCallback(e => {
      let t = (0, s.kK)(e) ? {
        getBoundingClientRect: () => e.getBoundingClientRect(),
        getClientRects: () => e.getClientRects(),
        contextElement: e
      } : e;
      f(t), h.refs.setReference(t)
    }, [h.refs]),
    E = i.useCallback(e => {
      ((0, s.kK)(e) || null === e) && (_.current = e, u(e)), ((0, s.kK)(h.refs.reference.current) || null === h.refs.reference.current || null !== e && !(0, s.kK)(e)) && h.refs.setReference(e)
    }, [h.refs]),
    b = i.useMemo(() => ({
      ...h.refs,
      setReference: E,
      setPositionReference: g,
      domReference: _
    }), [h.refs, E, g]),
    y = i.useMemo(() => ({
      ...h.elements,
      domReference: p
    }), [h.elements, p]),
    O = i.useMemo(() => ({
      ...h,
      ...r,
      refs: b,
      elements: y,
      nodeId: t
    }), [h, b, y, t, r]);
  return (0, a.Xj)(() => {
    r.dataRef.current.floatingContext = O;
    let e = null == m ? true : m.nodesRef.current.find(e => e.id === t);
    e && (e.context = O)
  }), i.useMemo(() => ({
    ...h,
    context: O,
    refs: b,
    elements: y
  }), [h, b, y, O])
}

function eu(e, t, n) {
  let r = new Map,
    i = "item" === n,
    a = e;
  if (i && e) {
    let {
      [d]: t, [f]: n, ...r
    } = e;
    a = r
  }
  return {
    ..."floating" === n && {
      tabIndex: false,
      [u]: ""
    },
    ...a,
    ...t.map(t => {
      let r = t ? t[n] : null;
      return "function" == typeof r ? e ? r(e) : null : r
    }).concat(e).reduce((e, t) => (t && Object.entries(t).forEach(t => {
      let [n, a] = t;
      if (!(i && [d, f].includes(n)))
        if (0 === n.indexOf("on")) {
          if (r.has(n) || r.set(n, []), "function" == typeof a) {
            var o;
            null == (o = r.get(n)) || o.push(a), e[n] = function() {
              for (var e, t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
              return null == (e = r.get(n)) ? true : e.map(e => e(...i)).find(e => true !== e)
            }
          }
        } else e[n] = a
    }), e), {})
  }
}

function ed(e) {
  true === e && (e = []);
  let t = e.map(e => null == e ? true : e.reference),
    n = e.map(e => null == e ? true : e.floating),
    r = e.map(e => null == e ? true : e.item),
    a = i.useCallback(t => eu(t, e, "reference"), t),
    o = i.useCallback(t => eu(t, e, "floating"), n),
    s = i.useCallback(t => eu(t, e, "item"), r);
  return i.useMemo(() => ({
    getReferenceProps: a,
    getFloatingProps: o,
    getItemProps: s
  }), [a, o, s])
}
let ef = "Escape";

function ep(e, t, n) {
  switch (e) {
    case "vertical":
      return t;
    case "horizontal":
      return n;
    default:
      return t || n
  }
}
let e_ = e => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());

function em(e, t) {
  return "function" == typeof e ? e(t) : e
}

function eh(e, t) {
  let [n, r] = i.useState(e);
  return e && !n && r(true), i.useEffect(() => {
    if (!e && n) {
      let e = setTimeout(() => r(false), t);
      return () => clearTimeout(e)
    }
  }, [e, n, t]), n
}

function eg(e, t) {
  true === t && (t = {});
  let {
    open: n,
    elements: {
      floating: r
    }
  } = e, {
    duration: o = 250
  } = t, s = ("number" == typeof o ? o : o.close) || 0, [c, u] = i.useState("unmounted"), d = eh(n, s);
  return d || "close" !== c || u("unmounted"), (0, a.Xj)(() => {
    if (r) {
      if (n) {
        u("initial");
        let e = requestAnimationFrame(() => {
          l.flushSync(() => {
            u("open")
          })
        });
        return () => {
          cancelAnimationFrame(e)
        }
      }
      u("close")
    }
  }, [n, r]), {
    isMounted: d,
    status: c
  }
}

function eE(e, t) {
  true === t && (t = {});
  let {
    initial: n = {
      opacity: 0
    },
    open: r,
    close: o,
    common: s,
    duration: l = 250
  } = t, c = e.placement, u = c.split("-")[0], d = i.useMemo(() => ({
    side: u,
    placement: c
  }), [u, c]), f = "number" == typeof l, p = (f ? l : l.open) || 0, _ = (f ? l : l.close) || 0, [m, h] = i.useState(() => ({
    ...em(s, d),
    ...em(n, d)
  })), {
    isMounted: g,
    status: E
  } = eg(e, {
    duration: l
  }), b = (0, a.II)(n), y = (0, a.II)(r), O = (0, a.II)(o), v = (0, a.II)(s);
  return (0, a.Xj)(() => {
    let e = em(b.current, d),
      t = em(O.current, d),
      n = em(v.current, d),
      r = em(y.current, d) || Object.keys(e).reduce((e, t) => (e[t] = "", e), {});
    if ("initial" === E && h(t => ({
        transitionProperty: t.transitionProperty,
        ...n,
        ...e
      })), "open" === E && h({
        transitionProperty: Object.keys(r).map(e_).join(","),
        transitionDuration: p + "ms",
        ...n,
        ...r
      }), "close" === E) {
      let r = t || e;
      h({
        transitionProperty: Object.keys(r).map(e_).join(","),
        transitionDuration: _ + "ms",
        ...n,
        ...r
      })
    }
  }, [_, O, b, y, v, p, E, d]), {
    isMounted: g,
    styles: m
  }
}

function eb(e, t, n) {
  return true === n && (n = true), e.filter(e => {
    var r;
    return e.parentId === t && (!n || (null == (r = e.context) ? true : r.open))
  }).flatMap(t => [t, ...eb(e, t.id, n)])
}

function ey(e, t) {
  let [n, r] = e, i = false, a = t.length;
  for (let e = 0, o = a - 1; e < a; o = e++) {
    let [a, s] = t[e] || [0, 0], [l, c] = t[o] || [0, 0];
    s >= r != c >= r && n <= (l - a) * (r - s) / (c - s) + a && (i = !i)
  }
  return i
}

function eO(e, t) {
  return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height
}

function ev(e) {
  true === e && (e = {});
  let {
    buffer: t = .5,
    blockPointerEvents: n = false,
    requireIntent: r = true
  } = e, i = {
    current: false
  }, a = false, o = null, l = null, c = "undefined" != typeof performance ? performance.now() : 0;

  function u(e, t) {
    let n = performance.now(),
      r = n - c;
    if (null === o || null === l || 0 === r) return o = e, l = t, c = n, null;
    let i = e - o,
      a = t - l,
      s = Math.sqrt(i * i + a * a) / r;
    return o = e, l = t, c = n, s
  }
  let d = e => {
    let {
      x: n,
      y: o,
      placement: l,
      elements: c,
      onClose: d,
      nodeId: f,
      tree: p
    } = e;
    return function(e) {
      function _() {
        P(i), d()
      }
      if (P(i), !c.domReference || !c.floating || null == l || null == n || null == o) return;
      let {
        clientX: m,
        clientY: h
      } = e, g = [m, h], E = k(e), b = "mouseleave" === e.type, y = M(c.floating, E), O = M(c.domReference, E), v = c.domReference.getBoundingClientRect(), S = c.floating.getBoundingClientRect(), I = l.split("-")[0], T = n > S.right - S.width / 2, C = o > S.bottom - S.height / 2, A = eO(g, v), N = S.width > v.width, R = S.height > v.height, D = (N ? v : S).left, w = (N ? v : S).right, x = (R ? v : S).top, L = (R ? v : S).bottom;
      if (y && (a = true, !b)) return;
      if (O && (a = false), O && !b) {
        a = true;
        return
      }
      if (b && (0, s.kK)(e.relatedTarget) && M(c.floating, e.relatedTarget) || p && eb(p.nodesRef.current, f).length) return;
      if ("top" === I && o >= v.bottom - 1 || "bottom" === I && o <= v.top + 1 || "left" === I && n >= v.right - 1 || "right" === I && n <= v.left + 1) return _();
      let j = [];
      switch (I) {
        case "top":
          j = [
            [D, v.top + 1],
            [D, S.bottom - 1],
            [w, S.bottom - 1],
            [w, v.top + 1]
          ];
          break;
        case "bottom":
          j = [
            [D, S.top + 1],
            [D, v.bottom - 1],
            [w, v.bottom - 1],
            [w, S.top + 1]
          ];
          break;
        case "left":
          j = [
            [S.right - 1, L],
            [S.right - 1, x],
            [v.left + 1, x],
            [v.left + 1, L]
          ];
          break;
        case "right":
          j = [
            [v.right - 1, L],
            [v.right - 1, x],
            [S.left + 1, x],
            [S.left + 1, L]
          ]
      }

      function U(e) {
        let [n, r] = e;
        switch (I) {
          case "top":
            return [
              [N ? n + t / 2 : T ? n + 4 * t : n - 4 * t, r + t + 1],
              [N ? n - t / 2 : T ? n + 4 * t : n - 4 * t, r + t + 1],
              [S.left, T || N ? S.bottom - t : S.top],
              [S.right, T ? N ? S.bottom - t : S.top : S.bottom - t]
            ];
          case "bottom":
            return [
              [N ? n + t / 2 : T ? n + 4 * t : n - 4 * t, r - t],
              [N ? n - t / 2 : T ? n + 4 * t : n - 4 * t, r - t],
              [S.left, T || N ? S.top + t : S.bottom],
              [S.right, T ? N ? S.top + t : S.bottom : S.top + t]
            ];
          case "left": {
            let e = [n + t + 1, R ? r + t / 2 : C ? r + 4 * t : r - 4 * t],
              i = [n + t + 1, R ? r - t / 2 : C ? r + 4 * t : r - 4 * t];
            return [
              [C || R ? S.right - t : S.left, S.top],
              [C ? R ? S.right - t : S.left : S.right - t, S.bottom], e, i
            ]
          }
          case "right":
            return [
              [n - t, R ? r + t / 2 : C ? r + 4 * t : r - 4 * t],
              [n - t, R ? r - t / 2 : C ? r + 4 * t : r - 4 * t],
              [C || R ? S.left + t : S.right, S.top],
              [C ? R ? S.left + t : S.right : S.left + t, S.bottom]
            ]
        }
      }
      if (!ey([m, h], j)) {
        if (a && !A) return _();
        if (!b && r) {
          let t = u(e.clientX, e.clientY),
            n = .1;
          if (null !== t && t < n) return _()
        }
        ey([m, h], U([n, o])) ? !a && r && (i.current = window.setTimeout(_, 40)) : _()
      }
    }
  };
  return d.__options = {
    blockPointerEvents: n
  }, d
}