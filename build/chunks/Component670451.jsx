/** Chunk was on web.js **/
/** chunk id: 670451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk386019 = require("./386019.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk663907 = require("./663907.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let t = i.useRef(null);
  return (0, r.jsx)(s.Z, _(d({}, e), {
    targetElementRef: t,
    children: e => (0, r.jsx)(a.u, {
      targetElementRef: t,
      text: l.intl.string(l.t["UKOtz+"]),
      "aria-label": false,
      children: (0, r.jsx)(o.P3F, _(d({}, e), {
        innerRef: t,
        "aria-label": l.intl.string(l.t["UKOtz+"]),
        onClick: t => {
          t.stopPropagation(), e.onClick(t)
        },
        onContextMenu: t => {
          t.preventDefault(), e.onClick(t)
        },
        className: c.contextMenu,
        children: (0, r.jsx)(o.xhG, {
          color: o.TVs.colors.INTERACTIVE_NORMAL,
          size: "xs"
        })
      }))
    })
  }))
}