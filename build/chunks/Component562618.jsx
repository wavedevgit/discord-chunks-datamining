/** Chunk was on web.js **/
/** chunk id: 562618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk313666 = require("./313666.jsx"),
  Chunk756715 = require("./756715.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk929618 = require("./929618.js");

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

function f(e) {
  var t;
  let {
    title: n,
    body: i,
    badge: o,
    className: u,
    textLink: d
  } = e, f = null == (t = null == d ? true : d.external) || t;
  return (0, r.jsxs)("div", {
    className: a()(c.header, u),
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(_, {
        badge: o
      }), (0, r.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        className: c.title,
        children: n
      })]
    }), (0, r.jsx)(p, {
      body: i
    }), null != d && (0, r.jsx)(s.Anchor, {
      onClick: d.onClick,
      href: d.link,
      target: f && null != d.link ? "_blank" : true,
      rel: f && null != d.link ? "noopener noreferrer" : true,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: c.footerLink,
        children: d.text
      })
    })]
  })
}

function _(e) {
  let {
    badge: t
  } = e;
  if (null == t) return null;
  let n = (0, o.R)(t);
  return (0, r.jsx)("div", {
    className: c.badgeContainer,
    children: (0, r.jsx)(o.C, d({}, n))
  })
}

function p(e) {
  let {
    body: t
  } = e;
  if (null == t) return null;
  let n = Array.isArray(t) ? t : [t];
  return 0 === n.length || n.every(e => null == e || "" === e) ? null : (0, r.jsx)("div", {
    className: c.headerBody,
    children: n.map((e, t) => (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "none",
      children: e
    }, t))
  })
}