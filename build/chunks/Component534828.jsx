/** Chunk was on 28102 **/
/** chunk id: 534828, original params: e,r,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk843178 = require("./843178.js"),
  Chunk393608 = require("./393608.js"),
  Chunk838583 = require("./838583.js");

function s(e) {
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
let p = (0, Chunk843178.iS)(e => {
    var r, t;
    return (0, n.jsxs)("div", {
      className: a.wrapper,
      children: [(0, n.jsx)("div", {
        className: a.saturation,
        children: (0, n.jsx)(i.Saturation, s({}, e))
      }), (0, n.jsx)("div", {
        className: a.hue,
        children: (0, n.jsx)(i.Hue, (r = s({}, e), t = t = {
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
  u = Chunk647438.memo(p)