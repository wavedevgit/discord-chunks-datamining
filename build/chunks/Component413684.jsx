/** Chunk was on 15076 **/
/** chunk id: 413684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    guildId: t
  } = e, n = (0, s.cj)([a.ZP], () => ({
    highligths: a.ZP.getNotifyHighlights(t),
    mobilePush: a.ZP.isMobilePushEnabled(t),
    suppressRoles: a.ZP.isSuppressRolesEnabled(t),
    suppressEveryone: a.ZP.isSuppressEveryoneEnabled(t),
    muteScheduledEvents: a.ZP.isMuteScheduledEventsEnabled(t)
  })), u = r.Z.updateGuildNotificationSettings;
  return (0, i.jsxs)(l.Kqy, {
    gap: 24,
    children: [(0, i.jsx)(l.rsf, {
      checked: n.suppressEveryone,
      label: c.intl.format(c.t.OWiWAp, {}),
      onChange: e => u(t, {
        suppress_everyone: e
      }, o.UE.suppressEveryone(e))
    }), (0, i.jsx)(l.rsf, {
      checked: n.suppressRoles,
      label: c.intl.string(c.t["O/QdoD"]),
      onChange: e => u(t, {
        suppress_roles: e
      }, o.UE.suppressRoles(e))
    }), (0, i.jsx)(l.rsf, {
      label: c.intl.string(c.t.gPuteJ),
      description: c.intl.string(c.t["Vw/Xn8"]),
      checked: n.highligths === d.gLR.ENABLED,
      onChange: e => u(t, {
        notify_highlights: e ? d.gLR.ENABLED : d.gLR.DISABLED
      }, o.UE.highlights(e))
    }), (0, i.jsx)(l.rsf, {
      checked: n.muteScheduledEvents,
      label: c.intl.string(c.t.ONG3Yz),
      onChange: e => u(t, {
        mute_scheduled_events: e
      }, o.UE.mutedEvents(e))
    }), (0, i.jsx)(l.rsf, {
      checked: n.mobilePush,
      label: c.intl.string(c.t.h1DL66),
      onChange: e => u(t, {
        mobile_push: e
      }, o.UE.mobilePush(e))
    })]
  })
}