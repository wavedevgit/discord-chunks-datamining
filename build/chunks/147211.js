/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  N: () => p
});
var r = n(200651);
n(192379);
var i = n(692547),
  o = n(331595),
  a = n(267843);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let p = e => {
  var t, n, {
      size: s = "md",
      width: c,
      height: f,
      secondaryColor: p = i.Z.colors.STATUS_DANGER,
      secondaryColorClass: _ = "",
      color: h = i.Z.colors.INTERACTIVE_NORMAL,
      colorClass: m = ""
    } = e,
    g = d(e, ["size", "width", "height", "secondaryColor", "secondaryColorClass", "color", "colorClass"]);
  let E = (0, a.m)(s),
    v = null !== (t = null == E ? void 0 : E.width) && void 0 !== t ? t : c,
    b = null !== (n = null == E ? void 0 : E.height) && void 0 !== n ? n : f;
  return (0, r.jsxs)("svg", u(l({}, (0, o.Z)(g)), {
    xmlns: "http://www.w3.org/2000/svg",
    width: v,
    height: b,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("circle", {
      cx: "19",
      cy: "19",
      r: "5",
      fill: "string" == typeof p ? p : p.css,
      className: _
    }), (0, r.jsx)("path", {
      fill: "string" == typeof h ? h : h.css,
      d: "M9.92 2.08c-.07-.45.18-.93.64-.99a11.1 11.1 0 0 1 2.88 0c.46.06.7.54.64.99-.18 1.16.19 2.2.98 2.53.8.33 1.79-.14 2.49-1.1.27-.36.78-.52 1.14-.24.77.59 1.45 1.27 2.04 2.04.28.36.12.87-.24 1.14-.96.7-1.43 1.7-1.1 2.49.33.8 1.37 1.16 2.53.98.45-.07.93.18.99.64a11.1 11.1 0 0 1 .08 1.82c0 .38-.43.58-.77.4a6.97 6.97 0 0 0-5.63-.35c-.28.1-.59-.14-.59-.43a4 4 0 1 0-4 4c.3 0 .53.31.43.59a6.99 6.99 0 0 0 .35 5.63c.18.34-.02.76-.4.77a11.39 11.39 0 0 1-1.82-.08c-.46-.06-.7-.54-.64-.99.18-1.16-.19-2.2-.98-2.53-.8-.33-1.79.15-2.49 1.1-.27.36-.78.52-1.14.24a11.06 11.06 0 0 1-2.04-2.04c-.28-.36-.12-.87.24-1.14.96-.7 1.43-1.7 1.1-2.49-.33-.8-1.37-1.16-2.53-.98-.45.07-.93-.18-.99-.64a11.1 11.1 0 0 1 0-2.88c.06-.46.54-.7.99-.64 1.16.18 2.2-.19 2.53-.98.33-.8-.14-1.79-1.1-2.49-.36-.27-.52-.78-.24-1.14.59-.77 1.27-1.45 2.04-2.04.36-.28.87-.12 1.14.24.7.95 1.7 1.43 2.49 1.1.8-.33 1.16-1.37.98-2.53Z",
      className: m
    })]
  }))
}