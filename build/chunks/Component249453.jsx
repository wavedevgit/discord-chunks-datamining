/** Chunk was on 34684 **/
/** chunk id: 249453, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk765250 = require("./765250.js"),
  Chunk444295 = require("./444295.js"),
  Chunk388032 = require("./388032.jsx");
let s = (0, Chunk392711.throttle)((t, e) => {
  (0, l.JS)(t.type, {
    opacity: e
  })
}, 1e3);

function p(t) {
  let e = o.useCallback(e => s(t, e), [t]);
  return (0, n.jsx)(a.II_, {
    id: "opacity",
    "aria-haspopup": true,
    label: u.intl.string(u.t.OVovCb),
    control: (r, o) => {
      var i, l;
      return (0, n.jsx)(a._wy, (i = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable
          }))), n.forEach(function(e) {
            var n;
            n = r[e], e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = n
          })
        }
        return t
      }({}, r), l = l = {
        ref: o,
        value: 100 * t.opacity,
        maxValue: 100,
        onChange: r => {
          (0, c.nv)({
            widgetId: t.id,
            opacity: r / 100
          }), e(Math.floor(r))
        },
        "aria-label": u.intl.string(u.t.kbFsAD)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          r.push.apply(r, n)
        }
        return r
      })(Object(l)).forEach(function(t) {
        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(l, t))
      }), i))
    }
  })
}