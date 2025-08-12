/** Chunk was on 28102 **/
/** chunk id: 534828, original params: e,r,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk103269 = require("./103269.js"),
  Chunk616259 = require("./616259.js"),
  Chunk995895 = require("./995895.js");

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
let p = (0, Chunk103269.iS)(e => {
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
  u = Chunk73800.memo(p)