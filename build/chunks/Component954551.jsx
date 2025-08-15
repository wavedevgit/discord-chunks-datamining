/** Chunk was on 54157 **/
/** chunk id: 954551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk388035 = require("./388035.jsx"),
  Chunk453473 = require("./453473.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    onOpen: t,
    onClose: n,
    className: c
  } = e;
  return (0, r.jsx)(i.P, {
    onOpen: t,
    onClose: n,
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, n, i, u) => {
      var d, h;
      return (0, r.jsx)(a.U, {
        location: "bookmarks-button",
        targetElementRef: u,
        children: (0, r.jsx)(l.JO, (d = function(e) {
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
        }({}, n), h = h = {
          ref: u,
          className: c,
          onClick: e,
          icon: s.plf,
          "aria-label": o.intl.string(o.t["2pAkDA"]),
          tooltip: t ? null : o.intl.string(o.t["2pAkDA"]),
          selected: t,
          showBadge: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(h)).forEach(function(e) {
          Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(h, e))
        }), d))
      })
    }
  })
}