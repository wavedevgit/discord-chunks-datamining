/** Chunk was on 98783 **/
/** chunk id: 700994, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
    f = (0, i.e7)([o.Z], () => o.Z.getLocalVolume(e, n), [e, n]),
    b = e === (null == (t = s.default.getCurrentUser()) ? true : t.id),
    Z = n === c.Yn.STREAM;
  return b ? null : (0, l.jsx)(r.II_, {
    id: "user-volume",
    label: Z ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH),
    control: (t, i) => {
      var o, s;
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
      }({}, t), s = s = {
        ref: i,
        value: (0, u.P)(f),
        maxValue: d.isPlatformEmbedded ? 200 : 100,
        onChange: t => a.Z.setLocalVolume(e, (0, u.A)(t), n),
        "aria-label": Z ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
      }), o))
    }
  })
}