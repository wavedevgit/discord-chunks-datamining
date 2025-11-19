/** Chunk was on 74291 **/
/** chunk id: 965244, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666657 = require("./666657.js"),
  Chunk533244 = require("./533244.js"),
  Chunk487419 = require("./487419.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t) {
  let f = t === b.IlC.POPOUT,
    O = (0, c.e7)([u.Z], () => u.Z.getGuild(e), [e]),
    p = (0, c.e7)([l.Z], () => null != O ? l.Z.getGuildIncident(O.id) : null);
  return f ? null : (0, n.jsx)(o.sNh, {
    id: "nav-security-actions",
    label: s.intl.string(s.t.UgXhdn),
    action: () => {
      let t = {
        source: i.Zu.MESSAGE,
        alertType: (0, a.T1)(p)
      };
      (0, o.ZDy)(async () => {
        let {
          default: c
        } = await r.e("58175").then(r.bind(r, 664452));
        return r => {
          var o, i;
          return (0, n.jsx)(c, (o = function(e) {
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
          }({}, r), i = i = {
            guildId: e,
            analyticsData: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
          }), o))
        }
      })
    }
  })
}