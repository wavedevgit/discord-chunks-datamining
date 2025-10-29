/** Chunk was on 88647 **/
/** chunk id: 532239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk340541 = require("./340541.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk493754 = require("./493754.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n, d) {
  let p = {
      streamUserId: n,
      channel: e,
      applicationId: d,
      appContext: (0, a.bp)()
    },
    f = () => {
      null != t && e.type === c.d4z.GUILD_VOICE && (0, o.W)(function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        guild: t
      }, p))
    },
    h = (0, l._k)({
      location: "more_settings_invite_item"
    }),
    m = h.isInCallEntrypointEnabled ? i.oLu : i.ejJ;
  if (null != d) return (0, r.jsx)(i.sNh, {
    id: "invite-to-stream",
    label: u.intl.string(u.t["OzOM/q"]),
    action: f,
    icon: i.ejJ
  });
  if (null == t || null == e || !s.Z.can(c.Plq.CREATE_INSTANT_INVITE, e)) return null;
  let g = h.isInCallEntrypointEnabled ? u.intl.string(u.t["EE+P0H"]) : u.intl.string(u.t["6Qgrev"]);
  return (0, r.jsx)(i.sNh, {
    id: "invite-friends",
    label: g,
    action: f,
    icon: m
  })
}