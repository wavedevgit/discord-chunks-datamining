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
    actions: y,
    gradientColor: b
  } = e, O = i.useContext(a.C), [v, A] = i.useState("closed"), I = i.useRef(null), S = i.useRef(false), T = "opening-mouse" === v || "open-mouse" === v, C = "opening-keyboard" === v || "open-keyboard" === v, N = "open-mouse" === v || "open-keyboard" === v, w = (O.keyboardModeEnabled || C) && null != y, R = w, [P, D] = i.useState(0), L = (0, l._)(n, c, v), x = i.useCallback(() => {
    null != I.current && (clearTimeout(I.current), I.current = null)
  }, []), M = i.useCallback(e => {
    e && (S.current = true), x(), A("closing")
  }, [x]);
  i.useEffect(() => x, [x]);
  let j = i.useCallback(() => {
      ("closed" === v || "closing" === v) && (x(), A("opening-mouse"))
    }, [x, v]),
    k = i.useCallback(() => {
      T && M(false)
    }, [M, T]),
    U = i.useCallback(() => {
      if (S.current || "closed" !== v && "closing" !== v) {
        S.current = false;
        return
      }
      x(), A("opening-keyboard")
    }, [x, v]),
    G = i.useCallback(() => {
      w && "opening-keyboard" !== v || M(false)
    }, [M, v, w]);
  i.useEffect(() => {
    if ("opening-mouse" === v) return I.current = window.setTimeout(() => {
      I.current = null, A("open-mouse"), null == _ || _()
    }, d), x
  }, [v, d, _, x]), i.useEffect(() => {
    if ("opening-keyboard" === v) return I.current = window.setTimeout(() => {
      I.current = null, A("open-keyboard"), null == _ || _()
    }, d), x
  }, [v, d, _, x]), i.useEffect(() => {
    if ("closing" === v) return I.current = window.setTimeout(() => {
      I.current = null, A("closed")
    }, p), x
  }, [v, x]), i.useEffect(() => {
    if (!N) return;
    let e = e => {
      ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), M(true))
    };
    return document.addEventListener("keydown", e, true), () => {
      document.removeEventListener("keydown", e, true)
    }
  }, [N, M]);
  let V = i.useMemo(() => null == y ? y : y.map(e => f(u({}, e), {
      onClick: t => {
        var n;
        null == (n = e.onClick) || n.call(e, t), M(false)
      }
    })), [y, M]),
    F = i.useCallback(e => {
      D(e)
    }, []);
  return (0, r.jsxs)("div", {
    onMouseEnter: j,
    onMouseLeave: k,
    onFocus: U,
    onBlur: G,
    children: [t, (0, r.jsx)(s.j, {
      targetElementRef: n,
      shouldShow: N,
      position: L,
      align: "center",
      title: h,
      body: m,
      graphic: g,
      size: E,
      actions: V,
      gradientColor: b,
      showCloseButton: R,
      shouldTrapFocus: w,
      returnRef: w ? n : true,
      isCaretHoverable: true,
      caretConfig: {
        align: "custom",
        customOffset: P
      },
      onNudgeChange: F,
      onRequestClose: e => {
        M(null != e && (0, o.sg)(e))
      }
    })]
  })
}
let h = _