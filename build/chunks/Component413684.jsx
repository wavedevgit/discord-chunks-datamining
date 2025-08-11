/** Chunk was on 5863 **/
/** chunk id: 413684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk920271 = require("./920271.js");

function h(e) {
  let {
    guildId: t
  } = e, n = (0, s.cj)([a.ZP], () => ({
    highligths: a.ZP.getNotifyHighlights(t),
    mobilePush: a.ZP.isMobilePushEnabled(t),
    suppressRoles: a.ZP.isSuppressRolesEnabled(t),
    suppressEveryone: a.ZP.isSuppressEveryoneEnabled(t),
    muteScheduledEvents: a.ZP.isMuteScheduledEventsEnabled(t)
  })), h = r.Z.updateGuildNotificationSettings;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(g, {
      value: n.suppressEveryone,
      title: c.intl.format(c.t.OWiWAg, {}),
      onChange: e => h(t, {
        suppress_everyone: e
      }, o.UE.suppressEveryone(e))
    }), (0, i.jsx)(g, {
      value: n.suppressRoles,
      title: c.intl.string(c.t["O/QdoK"]),
      onChange: e => h(t, {
        suppress_roles: e
      }, o.UE.suppressRoles(e))
    }), (0, i.jsx)(g, {
      title: (0, i.jsxs)("div", {
        className: u.advanceSettingTitle,
        children: [c.intl.string(c.t.gPuteH), (0, i.jsx)(l.ua7, {
          text: c.intl.string(c.t["Vw/Xn5"]),
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: n
            } = e;
            return (0, i.jsx)(l.d3s, {
              size: "custom",
              width: 14,
              height: 14,
              onMouseEnter: t,
              onMouseLeave: n,
              color: l.TVs.colors.ICON_MUTED,
              className: u.settingTitleIcon
            })
          }
        })]
      }),
      value: n.highligths === d.gLR.ENABLED,
      onChange: e => h(t, {
        notify_highlights: e ? d.gLR.ENABLED : d.gLR.DISABLED
      }, o.UE.highlights(e))
    }), (0, i.jsx)(g, {
      value: n.muteScheduledEvents,
      title: c.intl.string(c.t.ONG3Y2),
      onChange: e => h(t, {
        mute_scheduled_events: e
      }, o.UE.mutedEvents(e))
    }), (0, i.jsx)(g, {
      value: n.mobilePush,
      title: c.intl.string(c.t["h1DL6+"]),
      onChange: e => h(t, {
        mobile_push: e
      }, o.UE.mobilePush(e))
    })]
  })
}

function g(e) {
  return (0, i.jsx)(l.j7V, {
    hideBorder: true,
    className: u.advanceSetting,
    value: e.value,
    onChange: e.onChange,
    note: e.subtitle,
    children: e.title
  })
}