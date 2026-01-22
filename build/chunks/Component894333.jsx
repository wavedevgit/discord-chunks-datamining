/** Chunk was on 64992 **/
/** chunk id: 894333, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk610136 = require("./610136.js"),
  Chunk594061 = require("./594061.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    guildId: t
  } = e, n = (0, s.bG)([r.A], () => r.A.getGuildAlertSettings()[t]);
  return (0, i.jsxs)(l.BJc, {
    gap: 24,
    children: [(0, i.jsx)(l.dOG, {
      checked: !(null == n ? true : n.disableRaidAlertNag),
      label: d.intl.string(d.t.u6dc5B),
      description: d.intl.string(d.t.z8Td48),
      onChange: e => (0, a.TG)(t, t => {
        t.disableRaidAlertNag = !e
      }, a.Sb.INFREQUENT_USER_ACTION)
    }), (0, i.jsx)(l.dOG, {
      checked: !(null == n ? true : n.disableRaidAlertPush),
      label: d.intl.string(d.t.P8MG6q),
      description: d.intl.string(d.t.PyxXs8),
      onChange: e => (0, a.TG)(t, t => {
        t.disableRaidAlertPush = !e
      }, a.Sb.INFREQUENT_USER_ACTION)
    })]
  })
}