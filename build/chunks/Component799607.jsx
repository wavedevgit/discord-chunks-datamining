/** Chunk was on web.js **/
/** chunk id: 799607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => _,
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk213305 = require("./213305.js"),
  Chunk13140 = require("./13140.js"),
  Chunk645917 = require("./645917.jsx"),
  Chunk106767 = require("./106767.js");

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
    title: m,
    body: h,
    graphic: g,
    size: E = "md",
    actions: b,
    gradientColor: y
  } = e, O = i.useContext(a.S), [v, S] = i.useState("closed"), I = i.useRef(null), T = i.useRef(false), A = "opening-mouse" === v || "open-mouse" === v, C = "opening-keyboard" === v || "open-keyboard" === v, N = "open-mouse" === v || "open-keyboard" === v, P = (O.keyboardModeEnabled || C) && null != b, R = P, [w, D] = i.useState(0), x = (0, l.$)(n, c, v), L = i.useCallback(() => {
    null != I.current && (clearTimeout(I.current), I.current = null)
  }, []), j = i.useCallback(e => {
    e && (T.current = true), L(), S("closing")
  }, [L]);
  i.useEffect(() => L, [L]);
  let M = i.useCallback(() => {
      ("closed" === v || "closing" === v) && (L(), S("opening-mouse"))
    }, [L, v]),
    k = i.useCallback(() => {
      A && j(false)
    }, [j, A]),
    U = i.useCallback(() => {
      if (T.current || "closed" !== v && "closing" !== v) {
        T.current = false;
        return
      }
      L(), S("opening-keyboard")
    }, [L, v]),
    G = i.useCallback(() => {
      P && "opening-keyboard" !== v || j(false)
    }, [j, v, P]);
  i.useEffect(() => {
    if ("opening-mouse" === v) return I.current = window.setTimeout(() => {
      I.current = null, S("open-mouse"), null == _ || _()
    }, d), L
  }, [v, d, _, L]), i.useEffect(() => {
    if ("opening-keyboard" === v) return I.current = window.setTimeout(() => {
      I.current = null, S("open-keyboard"), null == _ || _()
    }, d), L
  }, [v, d, _, L]), i.useEffect(() => {
    if ("closing" === v) return I.current = window.setTimeout(() => {
      I.current = null, S("closed")
    }, p), L
  }, [v, L]), i.useEffect(() => {
    if (!N) return;
    let e = e => {
      ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), j(true))
    };
    return document.addEventListener("keydown", e, true), () => {
      document.removeEventListener("keydown", e, true)
    }
  }, [N, j]);
  let Z = i.useMemo(() => null == b ? b : b.map(e => f(u({}, e), {
      onClick: t => {
        var n;
        null == (n = e.onClick) || n.call(e, t), j(false)
      }
    })), [b, j]),
    B = i.useCallback(e => {
      D(e)
    }, []);
  return (0, r.jsxs)("div", {
    onMouseEnter: M,
    onMouseLeave: k,
    onFocus: U,
    onBlur: G,
    children: [t, (0, r.jsx)(s.R, {
      targetElementRef: n,
      shouldShow: N,
      position: x,
      align: "center",
      title: m,
      body: h,
      graphic: g,
      size: E,
      actions: Z,
      gradientColor: y,
      showCloseButton: R,
      shouldTrapFocus: P,
      returnRef: P ? n : true,
      isCaretHoverable: true,
      caretConfig: {
        align: "custom",
        customOffset: w
      },
      onNudgeChange: B,
      onRequestClose: e => {
        j(null != e && (0, o.Al)(e))
      }
    })]
  })
}
let m = _