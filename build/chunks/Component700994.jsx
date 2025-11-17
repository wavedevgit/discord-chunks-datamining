/** Chunk was on 80125 **/
/** chunk id: 700994, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk36703 = require("./36703.js"),
  Chunk358085 = require("./358085.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
    b = arguments.length > 2 && true !== arguments[2] ? arguments[2] : true,
    g = (0, r.e7)([c.Z], () => c.Z.getLocalVolume(e, n), [e, n]),
    j = e === (null == (t = s.default.getCurrentUser()) ? true : t.id),
    m = n === d.Yn.STREAM;
  return j ? null : (0, i.jsx)(l.II_, {
    id: "user-volume",
    label: m ? f.intl.string(f.t.t4JBnI) : f.intl.string(f.t.m7TNdF),
    control: (t, r) => {
      var c, s;
      return (0, i.jsx)(l._wy, (c = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, t), s = s = {
        ref: r,
        value: (0, a.P)(g),
        maxValue: u.isPlatformEmbedded ? 200 : 100,
        onChange: t => {
          o.Z.setLocalVolume(e, (0, a.A)(t), n), null == b || b(t)
        },
        "aria-label": m ? f.intl.string(f.t.t4JBnI) : f.intl.string(f.t.m7TNdF)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(s, e))
      }), c))
    }
  })
}