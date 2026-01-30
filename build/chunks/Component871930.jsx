/** Chunk was on 78376 **/
/** chunk id: 871930, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => p,
  h: () => f
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk725010 = require("./725010.js"),
  Chunk446541 = require("./446541.jsx"),
  Chunk480357 = require("./480357.js"),
  Chunk606360 = require("./606360.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function p(e) {
  let {
    header: t,
    description: n,
    relatedId: i,
    disabled: a
  } = e;
  return (0, r.jsxs)("div", {
    className: u.wx,
    children: [(0, r.jsx)(s.Heading, {
      variant: "text-md/medium",
      color: "text-strong",
      children: (0, r.jsx)("label", {
        htmlFor: i,
        className: l()(u.DD, {
          [u.r9]: a
        }),
        children: t
      })
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      className: l()(u.h_, {
        [u.r9]: a
      }),
      children: n
    })]
  })
}

function m(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)("div", {
    className: l()(u.kL, t),
    children: n
  })
}

function g(e) {
  let {
    setting: t,
    className: n,
    children: i
  } = e;
  return (0, r.jsx)(a.x, {
    setting: t,
    children: (0, r.jsx)("div", {
      className: l()(u.kL, n),
      children: i
    })
  })
}

function A(e) {
  let {
    setting: t,
    className: n,
    children: i,
    scrollPosition: s,
    scrollHighlightDelay: _
  } = e, p = (0, o.s)(s);
  return (0, r.jsx)(a.x, {
    setting: t,
    children: (0, r.jsxs)("div", {
      className: l()(u.kL, n, {
        [d.m]: null != s
      }),
      ref: p,
      children: [i, null != s ? (0, r.jsx)(c.A, {
        animationDelay: _,
        scrollPosition: s
      }) : null]
    })
  })
}

function f(e) {
  return null != e.scrollPosition ? (0, r.jsx)(A, _({}, e)) : null != e.setting ? (0, r.jsx)(g, _({}, e)) : (0, r.jsx)(m, _({}, e))
}