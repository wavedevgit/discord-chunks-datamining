/** Chunk was on web.js **/
/** chunk id: 92951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk531057 = require("./531057.js");

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

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function p(e) {
  e.removeAttribute("src"), Array.from(e.children).forEach(e => {
    (0, o.kK)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, o.kK)(e, HTMLImageElement) && e.removeAttribute("src")
  });
  try {
    e.load()
  } catch (e) {}
}
let _ = e => {
    var {
      alt: t,
      externalRef: n,
      autoPlay: o,
      playOnHover: s,
      responsive: c,
      mediaLayoutType: u,
      useReducedMotion: f
    } = e, _ = d(e, ["alt", "externalRef", "autoPlay", "playOnHover", "responsive", "mediaLayoutType", "useReducedMotion"]);
    let m = !f && !s && o,
      h = i.useRef(null);

    function g() {
      var e;
      s && (null == h || null == (e = h.current) || e.play())
    }

    function E() {
      var e;
      s && (null == h || null == (e = h.current) || e.pause())
    }

    function b() {
      return u === a.h.MOSAIC ? {
        width: "100%",
        height: "100%",
        maxHeight: "inherit",
        objectFit: "contain"
      } : c ? y() : {}
    }

    function y() {
      return {
        maxWidth: _.width,
        maxHeight: _.height,
        width: "100%",
        height: "100%"
      }
    }
    return i.useLayoutEffect(() => () => {
      let {
        current: e
      } = h;
      null != e && p(e)
    }, []), i.useLayoutEffect(() => ("function" == typeof n ? (n(null), n(h.current)) : null != n && (n.current = h.current), () => {
      "function" == typeof n ? n(null) : null != n && (n.current = null)
    }), [n, h]), (0, r.jsx)("video", l({
      "aria-label": t,
      ref: h,
      autoPlay: m,
      onMouseEnter: g,
      onMouseLeave: E,
      onFocus: g,
      onBlur: E,
      style: b()
    }, _))
  },
  m = Chunk473749.forwardRef((e, t) => (0, r.jsx)(_, u(l({}, e), {
    externalRef: t
  })))