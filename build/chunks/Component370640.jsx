/** Chunk was on 87680 **/
/** chunk id: 370640, original params: e,r,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk868062 = require("./868062.js"),
  Chunk247366 = require("./247366.js"),
  Chunk132091 = require("./132091.js");

function a(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(r) {
      var n;
      n = t[r], r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = n
    })
  }
  return e
}
let p = (0, Chunk868062.kl)(e => {
    var r, t;
    return (0, n.jsxs)("div", {
      className: s.iE,
      children: [(0, n.jsx)("div", {
        className: s.Lr,
        children: (0, n.jsx)(i.Saturation, a({}, e))
      }), (0, n.jsx)("div", {
        className: s.lG,
        children: (0, n.jsx)(i.Hue, (r = a({}, e), t = t = {
          direction: "horizontal"
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : (function(e, r) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        })(Object(t)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
        }), r))
      })]
    })
  }),
  l = Chunk64700.memo(p)