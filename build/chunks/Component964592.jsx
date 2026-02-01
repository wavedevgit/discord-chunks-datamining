/** Chunk was on 30819 **/
/** chunk id: 964592, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk430452 = require("./430452.js"),
  Chunk824744 = require("./824744.js"),
  Chunk723702 = require("./723702.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let t = (0, o.bG)([a.A], () => (0, u.M)(a.A.getOutputVolume()));
  return (0, n.jsx)(i.aK1, {
    id: "output",
    label: s.intl.string(s.t.eATD2B),
    control: (r, o) => {
      var a, b;
      return (0, n.jsx)(i.i42, (a = function(e) {
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
        maxValue: c.isPlatformEmbedded ? 200 : 100,
        onChange: t => l.A.setOutputVolume((0, u.w)(t), {
          analyticsLocations: e
        }),
        "aria-label": s.intl.string(s.t.eATD2B)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(b)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(b, e))
      }), a))
    }
  })
}