/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  Q: () => p
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
      color: p = i.Z.colors.INTERACTIVE_NORMAL,
      colorClass: _ = ""
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
      fill: "string" == typeof p ? p : p.css,
      fillRule: "evenodd",
      d: "M15 4a1 1 0 0 0-.95 1.32l.9 2.68h-4.6l-.92-2.36A1 1 0 0 0 8.5 5H5a1 1 0 0 0 0 2h2.82l.5 1.27a1 1 0 0 0-.2.26L6.7 11.16a4.5 4.5 0 1 0 1.76.95l.78-1.45 1.83 4.7a1 1 0 1 0 1.86-.72L11.13 10h4.48l.55 1.65a4.5 4.5 0 1 0 1.9-.63L16.4 6h1.86c.41 0 .75.34.75.75V7a1 1 0 1 0 2 0v-.25A2.75 2.75 0 0 0 18.25 4H15Zm-9.3 9-1.08 2.03a1 1 0 0 0 1.76.94l1.09-2.01A2.5 2.5 0 1 1 5.7 13Zm11.13.64.72 2.18a1 1 0 0 0 1.9-.64l-.73-2.17a2.5 2.5 0 1 1-1.9.63Z",
      clipRule: "evenodd",
      className: _
    })
  }))
}