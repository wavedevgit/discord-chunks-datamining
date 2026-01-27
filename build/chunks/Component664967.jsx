/** Chunk was on 59735 **/
/** chunk id: 664967, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk585510 = require("./585510.js"),
  Chunk834409 = require("./834409.js"),
  Chunk903093 = require("./903093.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      shouldShowIncidentActions: p,
      isUnderLockdown: b,
      incidentData: O
    } = (0, c.Li)(e.id),
    d = i.useCallback(() => {
      let t = {
        source: l.Eo.CONTEXT_MENU,
        alertType: (0, a.$5)(O)
      };
      (0, o.mMO)(async () => {
        let {
          default: i
        } = await r.e("43233").then(r.bind(r, 671576));
        return r => {
          var o, c;
          return (0, n.jsx)(i, (o = function(e) {
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
          }({}, r), c = c = {
            guildId: e.id,
            analyticsData: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(c)).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e))
          }), o))
        }
      })
    }, [e.id, O]);
  return e.features.has(u.GuildFeatures.COMMUNITY) && p ? (0, n.jsx)(o.Drp, {
    id: "server-lockdown",
    label: b ? s.intl.string(s.t["+tSVi3"]) : s.intl.string(s.t.EPlEdu),
    icon: t ? b ? o.wUM : o.XAi : true,
    leadingAccessory: t ? {
      type: "icon",
      icon: b ? o.wUM : o.XAi
    } : true,
    action: d,
    color: "danger"
  }) : null
}