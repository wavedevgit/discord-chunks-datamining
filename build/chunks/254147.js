/** Chunk was on web.js **/
"use strict";
n.d(t, {
  W: () => _
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
let _ = e => {
  var t, n, {
      size: s = "md",
      width: c,
      height: f,
      color: _ = i.Z.colors.INTERACTIVE_NORMAL,
      colorClass: p = ""
    } = e,
    h = d(e, ["size", "width", "height", "color", "colorClass"]);
  let m = (0, a.m)(s),
    g = null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : c,
    E = null !== (n = null == m ? void 0 : m.height) && void 0 !== n ? n : f;
  return (0, r.jsx)("svg", u(l({}, (0, o.Z)(h)), {
    xmlns: "http://www.w3.org/2000/svg",
    width: g,
    height: E,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      fillRule: "evenodd",
      d: "M4.45 6.9 5 6.61v4.88c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5V10a2 2 0 1 1 4 0v1.5c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5V6.62l.55.27a1 1 0 1 0 .9-1.78l-7.1-3.56a3 3 0 0 0-2.7 0l-7.1 3.56a1 1 0 1 0 .9 1.78ZM13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 13a1 1 0 1 0 0 2h1.59L9 19.41V22a1 1 0 1 0 2 0v-1h2v1a1 1 0 1 0 2 0v-2.59L19.41 15H21a1 1 0 1 0 0-2H3Zm13.59 2H15v1.59L16.59 15ZM13 19v-1h-2v1h2Zm-4-2.41L7.41 15H9v1.59Zm4-.59v-1h-2v1h2Z",
      clipRule: "evenodd",
      className: p
    })
  }))
}