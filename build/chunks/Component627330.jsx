/** Chunk was on web.js **/
/** chunk id: 627330, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk508770 = require("./508770.jsx"),
  Chunk349288 = require("./349288.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk248789 = require("./248789.js");

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
      children: [(0, r.jsx)(p, {
        badge: o
      }), (0, r.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        className: c.title,
        children: n
      })]
    }), (0, r.jsx)(_, {
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

function p(e) {
  let {
    badge: t
  } = e;
  if (null == t) return null;
  let n = (0, o.U)(t);
  return (0, r.jsx)("div", {
    className: c.badgeContainer,
    children: (0, r.jsx)(o.E, d({
      variant: "brand"
    }, n))
  })
}

function _(e) {
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