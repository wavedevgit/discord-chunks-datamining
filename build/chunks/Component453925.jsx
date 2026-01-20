/** Chunk was on 6164 **/
/** chunk id: 453925, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t = (0, o.e7)([l.Z], () => (0, c.P)(l.Z.getInputVolume()));
  return (0, n.jsx)(u.II_, {
    id: "input",
    label: a.intl.string(a.t.OX2Bnr),
    control: (r, o) => {
      var l, s;
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
      }({}, r), s = s = {
        ref: o,
        value: t,
        onChange: t => i.Z.setInputVolume((0, c.A)(t), {
          analyticsLocations: e
        }),
        "aria-label": a.intl.string(a.t.OX2Bnr)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
      }), l))
    }
  })
}