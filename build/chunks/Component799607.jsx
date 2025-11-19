/** Chunk was on web.js **/
/** chunk id: 799607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk645917 = require("./645917.jsx"),
  Chunk106767 = require("./106767.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = function(e) {
  let {
    children: t,
    targetElementRef: n,
    tooltipHeight: s,
    delay: c = 300,
    onShow: d,
    title: f,
    body: _,
    graphic: p,
    size: h = "md",
    actions: m,
    gradientColor: g
  } = e, [E, b] = i.useState("closed"), y = i.useRef(null), O = i.useRef(false), v = "opening-mouse" === E || "open-mouse" === E, I = "opening-keyboard" === E || "open-keyboard" === E, T = "open-mouse" === E || "open-keyboard" === E, S = I, A = S, C = i.useRef(null), [N, R] = i.useState(0), P = (0, o.$)(n, s, E), D = i.useCallback(() => {
    null != y.current && (clearTimeout(y.current), y.current = null)
  }, []), w = i.useCallback(e => {
    e && (O.current = true), D(), b("closing")
  }, [D]);
  i.useEffect(() => D, [D]);
  let L = i.useCallback(() => {
      "closed" === E && (D(), b("opening-mouse"))
    }, [D, E]),
    x = i.useCallback(() => {
      v && w(false)
    }, [w, v]),
    M = i.useCallback(() => {
      if (O.current || "closed" !== E) {
        O.current = false;
        return
      }
      D(), b("opening-keyboard")
    }, [D, E]),
    j = i.useCallback(() => {
      "opening-keyboard" === E && w(false)
    }, [w, E]);
  i.useEffect(() => {
    if ("opening-mouse" === E) return y.current = window.setTimeout(() => {
      b("open-mouse"), null == d || d()
    }, c), D
  }, [E, c, d, D]), i.useEffect(() => {
    if ("opening-keyboard" === E) return y.current = window.setTimeout(() => {
      b("open-keyboard"), null == d || d()
    }, c), D
  }, [E, c, d, D]), i.useEffect(() => {
    if ("closing" === E) {
      let e = window.setTimeout(() => {
        b("closed")
      }, 200);
      return () => clearTimeout(e)
    }
  }, [E]), i.useEffect(() => {
    if (!T) return;
    let e = e => {
      ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), w(true))
    };
    return document.addEventListener("keydown", e, true), () => document.removeEventListener("keydown", e, true)
  }, [T, w, n]);
  let k = i.useMemo(() => null == m ? m : m.map(e => u(l({}, e), {
      onClick: t => {
        var n;
        null == (n = e.onClick) || n.call(e, t), w(false)
      }
    })), [m, w]),
    U = i.useCallback(e => {
      R(e)
    }, []);
  return (0, r.jsxs)("div", {
    onMouseEnter: L,
    onMouseLeave: x,
    onFocus: M,
    onBlur: j,
    children: [t, (0, r.jsx)(a.RB, {
      targetElementRef: n,
      shouldShow: T,
      position: P,
      align: "center",
      title: f,
      body: _,
      graphic: p,
      size: h,
      actions: k,
      gradientColor: g,
      showCloseButton: A,
      modal: S,
      returnRef: S ? n : true,
      isTooltip: true,
      popoverRef: C,
      caretConfig: {
        align: "custom",
        customOffset: N
      },
      onNudgeChange: U,
      onRequestClose: e => {
        w(null != e && "object" == typeof e && "nativeEvent" in e && 0 === e.nativeEvent.clientX && 0 === e.nativeEvent.clientY)
      }
    })]
  })
}