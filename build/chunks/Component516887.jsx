/** Chunk was on 56011 **/
/** chunk id: 516887, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk826298 = require("./826298.js"),
  Chunk688919 = require("./688919.js");
let u = Chunk647438.memo(function(e) {
  var t;
  let {
    className: n,
    channel: i,
    section: l
  } = e, u = null != l ? (0, s.ky)(l) : null, d = null != u ? (0, r.jsx)(o.ua7, {
    text: null != (t = null == l ? true : l.name) ? t : "",
    position: "top",
    children: e => {
      var t, n;
      return (0, r.jsx)(u, (t = function(e) {
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
      }({}, e), n = n = {
        channel: i,
        section: l,
        width: 24,
        height: 24
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  }) : null;
  return (0, r.jsx)("div", {
    className: a()(n, c.wrapper),
    children: (0, r.jsx)("div", {
      className: c.icon,
      children: d
    })
  })
})