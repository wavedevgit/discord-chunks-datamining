/** Chunk was on 52199 **/
/** chunk id: 922281, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk851580 = require("./851580.jsx"),
  Chunk44022 = require("./44022.jsx"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    onOpen: t,
    onClose: r,
    className: c
  } = e;
  return (0, n.jsx)(i.$, {
    onOpen: t,
    onClose: r,
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, r, i, u) => {
      var d, h;
      return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.In, (d = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, r), h = h = {
          ref: u,
          className: c,
          onClick: e,
          icon: l.cFy,
          "aria-label": o.intl.string(o.t["2pAkDA"]),
          tooltip: t ? null : o.intl.string(o.t["2pAkDA"]),
          selected: t,
          showBadge: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(h)).forEach(function(e) {
          Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(h, e))
        }), d)), (0, n.jsx)(a.v, {
          location: "bookmarks-button",
          targetElementRef: u
        })]
      })
    }
  })
}