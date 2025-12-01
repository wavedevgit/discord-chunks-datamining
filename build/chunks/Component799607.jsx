/** Chunk was on web.js **/
/** chunk id: 799607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => p,
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk13140 = require("./13140.js"),
  Chunk645917 = require("./645917.jsx"),
  Chunk106767 = require("./106767.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = 200;

function p(e) {
  let {
    children: t,
    targetElementRef: n,
    estimatedTooltipHeight: l,
    delay: u = 300,
    onShow: p,
    title: _,
    body: m,
    graphic: h,
    size: g = "md",
    actions: E,
    gradientColor: b
  } = e, [y, O] = i.useState("closed"), v = i.useRef(null), S = i.useRef(false), I = "opening-mouse" === y || "open-mouse" === y, T = "opening-keyboard" === y || "open-keyboard" === y, A = "open-mouse" === y || "open-keyboard" === y, C = T, N = C, [P, R] = i.useState(0), w = (0, s.$)(n, l, y), D = i.useCallback(() => {
    null != v.current && (clearTimeout(v.current), v.current = null)
  }, []), x = i.useCallback(e => {
    e && (S.current = true), D(), O("closing")
  }, [D]);
  i.useEffect(() => D, [D]);
  let L = i.useCallback(() => {
      ("closed" === y || "closing" === y) && (D(), O("opening-mouse"))
    }, [D, y]),
    j = i.useCallback(() => {
      I && x(false)
    }, [x, I]),
    M = i.useCallback(() => {
      if (S.current || "closed" !== y && "closing" !== y) {
        S.current = false;
        return
      }
      D(), O("opening-keyboard")
    }, [D, y]),
    k = i.useCallback(() => {
      "opening-keyboard" === y && x(false)
    }, [x, y]);
  i.useEffect(() => {
    if ("opening-mouse" === y) return v.current = window.setTimeout(() => {
      v.current = null, O("open-mouse"), null == p || p()
    }, u), D
  }, [y, u, p, D]), i.useEffect(() => {
    if ("opening-keyboard" === y) return v.current = window.setTimeout(() => {
      v.current = null, O("open-keyboard"), null == p || p()
    }, u), D
  }, [y, u, p, D]), i.useEffect(() => {
    if ("closing" === y) return v.current = window.setTimeout(() => {
      v.current = null, O("closed")
    }, f), D
  }, [y, D]), i.useEffect(() => {
    if (!A) return;
    let e = e => {
      ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), x(true))
    };
    return document.addEventListener("keydown", e, true), () => {
      document.removeEventListener("keydown", e, true)
    }
  }, [A, x]);
  let U = i.useMemo(() => null == E ? E : E.map(e => d(c({}, e), {
      onClick: t => {
        var n;
        null == (n = e.onClick) || n.call(e, t), x(false)
      }
    })), [E, x]),
    G = i.useCallback(e => {
      R(e)
    }, []);
  return (0, r.jsxs)("div", {
    onMouseEnter: L,
    onMouseLeave: j,
    onFocus: M,
    onBlur: k,
    children: [t, (0, r.jsx)(o.R, {
      targetElementRef: n,
      shouldShow: A,
      position: w,
      align: "center",
      title: _,
      body: m,
      graphic: h,
      size: g,
      actions: U,
      gradientColor: b,
      showCloseButton: N,
      shouldTrapFocus: C,
      returnRef: C ? n : true,
      isCaretHoverable: true,
      caretConfig: {
        align: "custom",
        customOffset: P
      },
      onNudgeChange: G,
      onRequestClose: e => {
        x(null != e && (0, a.Al)(e))
      }
    })]
  })
}
let _ = p