/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(200651),
  i = n(192379),
  o = n(374470),
  a = n(442837),
  s = n(607070),
  l = n(217702);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  e.removeAttribute("src"), Array.from(e.children).forEach(e => {
    (0, o.k)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, o.k)(e, HTMLImageElement) && e.removeAttribute("src")
  });
  try {
    e.load()
  } catch (e) {}
}
let g = e => {
    var {
      externalRef: t,
      autoPlay: n,
      playOnHover: o,
      responsive: c,
      mediaLayoutType: d
    } = e, f = _(e, ["externalRef", "autoPlay", "playOnHover", "responsive", "mediaLayoutType"]);
    let p = !(0, a.e7)([s.Z], () => s.Z.useReducedMotion) && !o && n,
      g = i.useRef(null);

    function m() {
      var e;
      o && (null == g || null === (e = g.current) || void 0 === e || e.play())
    }

    function E() {
      var e;
      o && (null == g || null === (e = g.current) || void 0 === e || e.pause())
    }

    function v() {
      return d === l.hV.MOSAIC ? {
        width: "100%",
        height: "100%",
        maxHeight: "inherit",
        objectFit: "contain"
      } : c ? b() : {}
    }

    function b() {
      return {
        maxWidth: f.width,
        maxHeight: f.height,
        width: "100%",
        height: "100%"
      }
    }
    return i.useLayoutEffect(() => () => {
      let {
        current: e
      } = g;
      null != e && h(e)
    }, []), i.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(g.current)) : null != t && (t.current = g.current), () => {
      "function" == typeof t ? t(null) : null != t && (t.current = null)
    }), [t, g]), (0, r.jsx)("video", u({
      ref: g,
      autoPlay: p,
      onMouseEnter: m,
      onMouseLeave: E,
      onFocus: m,
      onBlur: E,
      style: v()
    }, f))
  },
  m = i.forwardRef((e, t) => (0, r.jsx)(g, f(u({}, e), {
    externalRef: t
  })))