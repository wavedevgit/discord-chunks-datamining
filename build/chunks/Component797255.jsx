/** Chunk was on 5606 **/
/** chunk id: 797255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk778712 = require("./778712.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk431543 = require("./431543.js");

function c(e) {
  let {
    referrer: t,
    enablePremiumBrandRefresh: n
  } = e, {
    avatarSrc: c,
    eventHandlers: d
  } = (0, l.A)({
    userId: null == t ? true : t.id,
    size: n ? s._3.SIZE_24 : s._3.SIZE_32,
    animateOnHover: true
  });
  return (0, r.jsx)("div", {
    className: o.E2,
    children: (0, r.jsxs)("div", {
      className: o.hA,
      children: [(0, r.jsx)("div", {
        className: o.kR,
        children: (0, r.jsx)(i.euF, function(e) {
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
        }({
          className: o.Kk,
          src: c,
          "aria-label": t.username,
          size: s._3.SIZE_32
        }, d))
      }), (0, r.jsx)(i.Heading, {
        variant: "heading-sm/normal",
        className: o.Mn,
        color: "text-strong",
        children: a.intl.format(a.t.IqxblS, {
          username: null != t.globalName ? t.globalName : t.username
        })
      })]
    })
  })
}