/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Y: () => _
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
  let g = (0, a.m)(s),
    m = null !== (t = null == g ? void 0 : g.width) && void 0 !== t ? t : c,
    E = null !== (n = null == g ? void 0 : g.height) && void 0 !== n ? n : f;
  return (0, r.jsxs)("svg", u(l({}, (0, o.Z)(h)), {
    xmlns: "http://www.w3.org/2000/svg",
    width: m,
    height: E,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      d: "M9 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z",
      className: p
    }), (0, r.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      fillRule: "evenodd",
      d: "M2.75 3.02A3 3 0 0 1 5 2h10a3 3 0 0 1 3 3v7.5a.5.5 0 0 1-.5.5H16a3 3 0 0 0-3 3v3.5a2.5 2.5 0 0 1-3.68 2.2l-5.8-3.09A3 3 0 0 1 2 16V5a3 3 0 0 1 .76-1.98Zm1.3 1.95A.04.04 0 0 0 4 5v11c0 .36.2.68.49.86l5.77 3.08a.5.5 0 0 0 .74-.44V8.02a.5.5 0 0 0-.32-.46l-6.63-2.6Z",
      clipRule: "evenodd",
      className: p
    }), (0, r.jsx)("path", {
      fill: "string" == typeof _ ? _ : _.css,
      d: "M15 18.5V22a1 1 0 1 0 2 0v-3.59l4.3 4.3a1 1 0 0 0 1.4-1.42L18.42 17H22a1 1 0 1 0 0-2h-6a1 1 0 0 0-1 1v2.5Z",
      className: p
    })]
  }))
}