/** Chunk was on 62987 **/
/** chunk id: 532239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk340541 = require("./340541.js"),
  Chunk493754 = require("./493754.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n, d) {
  let p = {
      streamUserId: n,
      channel: e,
      applicationId: d,
      appContext: (0, l.bp)()
    },
    h = () => {
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
    {
      entrypoints: f
    } = (0, a._k)({
      location: "more_settings_invite_item"
    }),
    m = f ? i.oLu : i.ejJ;
  if (null != d) return (0, r.jsx)(i.sNh, {
    id: "invite-to-stream",
    label: u.intl.string(u.t["OzOM/v"]),
    action: h,
    icon: i.ejJ
  });
  if (null == t || null == e || !s.Z.can(c.Plq.CREATE_INSTANT_INVITE, e)) return null;
  let g = f ? u.intl.string(u.t["EE+P0N"]) : u.intl.string(u.t["6Qgren"]);
  return (0, r.jsx)(i.sNh, {
    id: "invite-friends",
    label: g,
    action: h,
    icon: m
  })
}