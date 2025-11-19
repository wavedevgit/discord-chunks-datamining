/** Chunk was on 95307 **/
/** chunk id: 778123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let t = (0, s.e7)([c.ZP], () => c.ZP.isMuteScheduledEventsEnabled(e), [e]);
  return (0, i.jsx)(d.S89, {
    id: "mute-events",
    label: u.intl.string(u.t.ONG3Yz),
    action: () => {
      var n;
      return n = {
        mute_scheduled_events: !t
      }, void r.Z.updateGuildNotificationSettings(e, n, a.UE.mutedEvents(n.mute_scheduled_events))
    },
    checked: t
  })
}