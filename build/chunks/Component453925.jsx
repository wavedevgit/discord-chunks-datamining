/** Chunk was on 96750 **/
/** chunk id: 453925, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, i.e7)([o.Z], () => (0, s.P)(o.Z.getInputVolume()));
  return (0, r.jsx)(l.II_, {
    id: "input",
    label: c.intl.string(c.t.OX2Bnp),
    control: (n, i) => {
      var o, u;
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
      }({}, n), u = u = {
        ref: i,
        value: t,
        onChange: t => a.Z.setInputVolume((0, s.A)(t), {
          analyticsLocations: e
        }),
        "aria-label": c.intl.string(c.t.OX2Bnp)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(u)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(u, e))
      }), o))
    }
  })
}