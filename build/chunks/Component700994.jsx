/** Chunk was on 92524 **/
/** chunk id: 700994, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function f(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
    f = arguments.length > 2 && true !== arguments[2] ? arguments[2] : true,
    m = (0, i.e7)([o.Z], () => o.Z.getLocalVolume(e, n), [e, n]),
    b = e === (null == (t = u.default.getCurrentUser()) ? true : t.id),
    Z = n === c.Yn.STREAM;
  return b ? null : (0, l.jsx)(r.II_, {
    id: "user-volume",
    label: Z ? g.intl.string(g.t.t4JBnI) : g.intl.string(g.t.m7TNdF),
    control: (t, i) => {
      var o, u;
      return (0, l.jsx)(r._wy, (o = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, t), u = u = {
        ref: i,
        value: (0, s.P)(m),
        maxValue: d.isPlatformEmbedded ? 200 : 100,
        onChange: t => {
          a.Z.setLocalVolume(e, (0, s.A)(t), n), null == f || f(t)
        },
        "aria-label": Z ? g.intl.string(g.t.t4JBnI) : g.intl.string(g.t.m7TNdF)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(u)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(u, e))
      }), o))
    }
  })
}