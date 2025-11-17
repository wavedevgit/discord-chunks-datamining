/** Chunk was on 56049 **/
/** chunk id: 714447, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk36703 = require("./36703.js"),
  Chunk208049 = require("./208049.js"),
  Chunk242291 = require("./242291.js"),
  Chunk388032 = require("./388032.jsx");

function s() {
  let e = (0, Chunk242291.pI)(),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)();
  return (0, Chunk54381.jsx)(Chunk481060.II_, {
    id: "user-volume",
    "aria-haspopup": true,
    label: Chunk388032.intl.string(Chunk388032.t.kbFsAD),
    control: (r, c) => {
      var a, s;
      return (0, n.jsx)(o._wy, (a = function(e) {
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
      }({}, r), s = s = {
        ref: c,
        value: (0, l.P)(e),
        maxValue: 100,
        onChange: e => (0, i.xz)((0, l.A)(e), t),
        "aria-label": u.intl.string(u.t.kbFsAD)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e))
      }), a))
    }
  })
}