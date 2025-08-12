/** Chunk was on 27434 **/
/** chunk id: 124422, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk924301 = require("./924301.js"),
  Chunk554747 = require("./554747.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(t, n, d) {
  var g;
  let {
    canManageGuildEvent: v
  } = (0, o.XJ)(null != d ? d : n), b = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(t), [t]), f = v(b), p = null != (0, c.qY)(null != (g = null == d ? true : d.id) ? g : s.lds), j = null != b && (0, a.xt)(b);
  return !f || j || p ? null : (0, l.jsx)(r.sNh, {
    id: u.intl.string(u.t.cK1GGR),
    label: u.intl.string(u.t.cK1GGR),
    action: function() {
      null != b && (0, r.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([e.e("84722"), e.e("23725")]).then(e.bind(e, 296864));
        return n => {
          var e, i;
          return (0, l.jsx)(t, (e = function(t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = null != arguments[n] ? arguments[n] : {},
                l = Object.keys(e);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              }))), l.forEach(function(n) {
                var l;
                l = e[n], n in t ? Object.defineProperty(t, n, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[n] = l
              })
            }
            return t
          }({}, n), i = i = {
            event: b
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, n) {
            var e = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(t);
              e.push.apply(e, l)
            }
            return e
          })(Object(i)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
          }), e))
        }
      })
    }
  })
}