/** Chunk was on 470 **/
/** chunk id: 124422, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk924301 = require("./924301.js"),
  Chunk554747 = require("./554747.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(t, e, d) {
  var g;
  let {
    canManageGuildEvent: f
  } = (0, u.XJ)(null != d ? d : e), v = (0, i.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(t), [t]), b = f(v), E = null != (0, c.qY)(null != (g = null == d ? true : d.id) ? g : a.lds), p = null != v && (0, o.xt)(v);
  return !b || p || E ? null : (0, l.jsx)(r.sNh, {
    id: s.intl.string(s.t.cK1GGY),
    label: s.intl.string(s.t.cK1GGY),
    action: function() {
      null != v && (0, r.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("84722"), n.e("65413")]).then(n.bind(n, 296864));
        return e => {
          var n, i;
          return (0, l.jsx)(t, (n = function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              }))), l.forEach(function(e) {
                var l;
                l = n[e], e in t ? Object.defineProperty(t, e, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = l
              })
            }
            return t
          }({}, e), i = i = {
            event: v
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(t);
              n.push.apply(n, l)
            }
            return n
          })(Object(i)).forEach(function(t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t))
          }), n))
        }
      })
    }
  })
}