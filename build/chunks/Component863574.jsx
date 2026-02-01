/** Chunk was on 9753 **/
/** chunk id: 863574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Tm: () => u,
  Wb: () => p,
  ug: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk622413 = require("./622413.jsx"),
  Chunk797232 = require("./797232.js");

function o(e) {
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

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = 660,
  d = e => (0, r.jsx)(a.A, c(o({}, e), {
    className: l()(e.className, {
      [s.sN]: !e.isHorizontal,
      [s.wO]: e.isHorizontal
    })
  })),
  p = e => {
    let {
      isHorizontal: t
    } = e;
    return (0, r.jsx)(d, c(o({}, e), {
      media: () => (0, r.jsx)("div", {
        className: s.FR,
        children: (0, r.jsx)("div", {
          className: l()(s.Wv, {
            [s._n]: t
          }),
          children: (0, r.jsx)("div", {
            className: s.h$
          })
        })
      }),
      title: () => (0, r.jsx)("div", {
        className: l()(s.GE, {
          [s.E9]: t
        })
      })
    }))
  }