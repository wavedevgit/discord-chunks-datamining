/** Chunk was on web.js **/
/** chunk id: 301679, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h,
  L: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk844222 = require("./844222.js"),
  Chunk350535 = require("./350535.js"),
  Chunk642481 = require("./642481.jsx"),
  Chunk525576 = require("./525576.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = 200;

function _(e) {
  let {
    children: t,
    targetElementRef: n,
    estimatedTooltipHeight: c,
    delay: d = 300,
    onShow: _,
    title: h,
    body: m,
    graphic: g,
    size: E = "md",
    actions: b,
    gradientColor: y
  } = e, O = i.useContext(a.C), [A, v] = i.useState("closed"), S = i.useRef(null), I = i.useRef(false), T = "opening-mouse" === A || "open-mouse" === A, C = "opening-keyboard" === A || "open-keyboard" === A, N = "open-mouse" === A || "open-keyboard" === A, R = (O.keyboardModeEnabled || C) && null != b, w = R, [P, D] = i.useState(0), x = (0, l._)(n, c, A), L = i.useCallback(() => {
    null != S.current && (clearTimeout(S.current), S.current = null)
  }, []), j = i.useCallback(e => {
    e && (I.current = true), L(), v("closing")
  }, [L]);
  i.useEffect(() => L, [L]);
  let M = i.useCallback(() => {
      ("closed" === A || "closing" === A) && (L(), v("opening-mouse"))
    }, [L, A]),
    k = i.useCallback(() => {
      T && j(false)
    }, [j, T]),
    U = i.useCallback(() => {
      if (I.current || "closed" !== A && "closing" !== A) {
        I.current = false;
        return
      }
      L(), v("opening-keyboard")
    }, [L, A]),
    G = i.useCallback(() => {
      R && "opening-keyboard" !== A || j(false)
    }, [j, A, R]);
  i.useEffect(() => {
    if ("opening-mouse" === A) return S.current = window.setTimeout(() => {
      S.current = null, v("open-mouse"), null == _ || _()
    }, d), L
  }, [A, d, _, L]), i.useEffect(() => {
    if ("opening-keyboard" === A) return S.current = window.setTimeout(() => {
      S.current = null, v("open-keyboard"), null == _ || _()
    }, d), L
  }, [A, d, _, L]), i.useEffect(() => {
    if ("closing" === A) return S.current = window.setTimeout(() => {
      S.current = null, v("closed")
    }, p), L
  }, [A, L]), i.useEffect(() => {
    if (!N) return;
    let e = e => {
      ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), j(true))
    };
    return document.addEventListener("keydown", e, true), () => {
      document.removeEventListener("keydown", e, true)
    }
  }, [N, j]);
  let V = i.useMemo(() => null == b ? b : b.map(e => f(u({}, e), {
      onClick: t => {
        var n;
        null == (n = e.onClick) || n.call(e, t), j(false)
      }
    })), [b, j]),
    F = i.useCallback(e => {
      D(e)
    }, []);
  return (0, r.jsxs)("div", {
    onMouseEnter: M,
    onMouseLeave: k,
    onFocus: U,
    onBlur: G,
    children: [t, (0, r.jsx)(o.j, {
      targetElementRef: n,
      shouldShow: N,
      position: x,
      align: "center",
      title: h,
      body: m,
      graphic: g,
      size: E,
      actions: V,
      gradientColor: y,
      showCloseButton: w,
      shouldTrapFocus: R,
      returnRef: R ? n : true,
      isCaretHoverable: true,
      caretConfig: {
        align: "custom",
        customOffset: P
      },
      onNudgeChange: F,
      onRequestClose: e => {
        j(null != e && (0, s.sg)(e))
      }
    })]
  })
}
let h = _