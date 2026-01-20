/** Chunk was on 6164 **/
/** chunk id: 632304, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk358085 = require("./358085.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let t = (0, o.e7)([l.Z], () => (0, c.P)(l.Z.getOutputVolume()));
  return (0, n.jsx)(u.II_, {
    id: "output",
    label: s.intl.string(s.t.eATD2B),
    control: (r, o) => {
      var l, b;
      return (0, n.jsx)(u._wy, (l = function(e) {
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
      }({}, r), b = b = {
        ref: o,
        value: t,
        maxValue: a.isPlatformEmbedded ? 200 : 100,
        onChange: t => i.Z.setOutputVolume((0, c.A)(t), {
          analyticsLocations: e
        }),
        "aria-label": s.intl.string(s.t.eATD2B)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(b)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(b)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(b, e))
      }), l))
    }
  })
}