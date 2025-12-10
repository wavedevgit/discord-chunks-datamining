/** Chunk was on 73755 **/
/** chunk id: 532239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk493754 = require("./493754.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n, u) {
  let d = {
      streamUserId: n,
      channel: e,
      applicationId: u,
      appContext: (0, l.bp)()
    },
    p = () => {
      null != t && e.type === s.d4z.GUILD_VOICE && (0, a.W)(function(e) {
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
      }({
        guild: t
      }, d))
    };
  return null != u ? (0, i.jsx)(r.sNh, {
    id: "invite-to-stream",
    label: c.intl.string(c.t["OzOM/q"]),
    action: p,
    icon: r.ejJ
  }) : null != t && null != e && o.Z.can(s.Plq.CREATE_INSTANT_INVITE, e) ? (0, i.jsx)(r.sNh, {
    id: "invite-friends",
    label: c.intl.string(c.t["EE+P0H"]),
    action: p,
    icon: r.oLu
  }) : null
}