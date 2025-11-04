/** Chunk was on 98783 **/
/** chunk id: 700994, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    b = (0, l.e7)([o.Z], () => o.Z.getLocalVolume(e, n), [e, n]),
    Z = e === (null == (t = s.default.getCurrentUser()) ? true : t.id),
    m = n === c.Yn.STREAM;
  return Z ? null : (0, i.jsx)(r.II_, {
    id: "user-volume",
    label: m ? g.intl.string(g.t.t4JBnI) : g.intl.string(g.t.m7TNdF),
    control: (t, l) => {
      var o, s;
      return (0, i.jsx)(r._wy, (o = function(e) {
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
        ref: l,
        value: (0, u.P)(b),
        maxValue: d.isPlatformEmbedded ? 200 : 100,
        onChange: t => {
          a.Z.setLocalVolume(e, (0, u.A)(t), n), null == f || f(t)
        },
        "aria-label": m ? g.intl.string(g.t.t4JBnI) : g.intl.string(g.t.m7TNdF)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
      }), o))
    }
  })
}