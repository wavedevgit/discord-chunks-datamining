/** Chunk was on 97492 **/
/** chunk id: 834857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk993952 = require("./993952.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t, n, u) {
  let d = {
      streamUserId: n,
      channel: e,
      applicationId: u,
      appContext: (0, i.Us)()
    },
    p = () => {
      null != t && e.type === o.rbe.GUILD_VOICE && (0, s.X)(function(e) {
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
      }, d))
    };
  return null != u ? (0, r.jsx)(l.Drp, {
    id: "invite-to-stream",
    label: c.intl.string(c.t["OzOM/q"]),
    action: p,
    icon: l.DpX
  }) : null != t && null != e && a.A.can(o.xBc.CREATE_INSTANT_INVITE, e) ? (0, r.jsx)(l.Drp, {
    id: "invite-friends",
    label: c.intl.string(c.t["EE+P0H"]),
    action: p,
    icon: l.Rvf
  }) : null
}