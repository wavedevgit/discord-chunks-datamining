/** Chunk was on 87154 **/
/** chunk id: 429824, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk528011 = require("./528011.js"),
  Chunk666657 = require("./666657.js"),
  Chunk533244 = require("./533244.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      shouldShowIncidentActions: b,
      isUnderLockdown: O,
      incidentData: p
    } = (0, o.mI)(e.id),
    f = i.useCallback(() => {
      let t = {
        source: c.Zu.CONTEXT_MENU,
        alertType: (0, a.T1)(p)
      };
      (0, l.ZDy)(async () => {
        let {
          default: i
        } = await r.e("58175").then(r.bind(r, 664452));
        return r => {
          var l, o;
          return (0, n.jsx)(i, (l = function(e) {
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
          }({}, r), o = o = {
            guildId: e.id,
            analyticsData: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
          }), l))
        }
      })
    }, [e.id, p]);
  return e.features.has(u.GuildFeatures.COMMUNITY) && b ? (0, n.jsx)(l.sNh, {
    id: "server-lockdown",
    label: O ? s.intl.string(s.t["+tSVi3"]) : s.intl.string(s.t.EPlEdu),
    icon: t ? O ? l.d$P : l.mBM : true,
    action: f,
    color: "danger"
  }) : null
}