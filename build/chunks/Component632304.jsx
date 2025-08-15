/** Chunk was on 96750 **/
/** chunk id: 632304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk358085 = require("./358085.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let t = (0, i.e7)([o.Z], () => (0, s.P)(o.Z.getOutputVolume()));
  return (0, r.jsx)(l.II_, {
    id: "output",
    label: u.intl.string(u.t.eATD2N),
    control: (n, i) => {
      var o, d;
      return (0, r.jsx)(l._wy, (o = function(e) {
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
      }({}, n), d = d = {
        ref: i,
        value: t,
        maxValue: c.isPlatformEmbedded ? 200 : 100,
        onChange: t => a.Z.setOutputVolume((0, s.A)(t), {
          analyticsLocations: e
        }),
        "aria-label": u.intl.string(u.t.eATD2N)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(d)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(d, e))
      }), o))
    }
  })
}