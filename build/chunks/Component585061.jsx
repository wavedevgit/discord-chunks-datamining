/** Chunk was on web.js **/
/** chunk id: 585061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk854627 = require("./854627.js"),
  Chunk427262 = require("./427262.js"),
  Chunk236834 = require("./236834.js"),
  Chunk243809 = require("./243809.jsx"),
  Chunk165856 = require("./165856.jsx"),
  Chunk778712 = require("./778712.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk617705 = require("./617705.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}
let g = () => {
  let e = (0, c.A)(),
    {
      avatarSrc: t,
      eventHandlers: n
    } = (0, o.A)({
      userId: null == e ? true : e.id,
      size: f._3.SIZE_32,
      animateOnHover: true
    }),
    h = (0, s.DP)(),
    g = (0, i.qB)(h),
    E = l.Ay.getName(e),
    b = g ? u.A : d.A;
  return null == e ? null : (0, r.jsxs)("div", {
    className: _.$6,
    children: [(0, r.jsx)("div", {
      className: _.H,
      children: (0, r.jsx)(a.euF, m({
        src: t,
        "aria-label": e.username,
        size: f._3.SIZE_32
      }, n))
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/bold",
      className: _.U_,
      children: p.intl.format(p.t.oxhCOl, {
        userName: E
      })
    }), (0, r.jsx)(b, {
      className: _.q3
    })]
  })
}