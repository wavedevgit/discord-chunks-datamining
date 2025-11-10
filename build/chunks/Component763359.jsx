/** Chunk was on 15076 **/
/** chunk id: 763359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk487419 = require("./487419.js"),
  Chunk675478 = require("./675478.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([r.Z], () => r.Z.getGuildAlertSettings()[t]);
  return (0, i.jsxs)(s.Kqy, {
    gap: 24,
    children: [(0, i.jsx)(s.rsf, {
      checked: !(null == n ? true : n.disableRaidAlertNag),
      label: o.intl.string(o.t.u6dc5B),
      description: o.intl.string(o.t.z8Td48),
      onChange: () => (0, a.PS)(t, e => {
        e.disableRaidAlertNag = !e.disableRaidAlertNag
      }, a.fy.INFREQUENT_USER_ACTION)
    }), (0, i.jsx)(s.rsf, {
      checked: !(null == n ? true : n.disableRaidAlertPush),
      label: o.intl.string(o.t.P8MG6q),
      description: o.intl.string(o.t.PyxXs8),
      onChange: () => (0, a.PS)(t, e => {
        e.disableRaidAlertPush = !e.disableRaidAlertPush
      }, a.fy.INFREQUENT_USER_ACTION)
    })]
  })
}