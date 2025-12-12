/** Chunk was on 24358 **/
/** chunk id: 775666, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  EQ: () => f,
  T5: () => h,
  ZP: () => E
}), require("./388685.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk221259 = require("./221259.js"),
  Chunk113449 = require("./113449.js"),
  Chunk686660 = require("./686660.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function E(t) {
  let i = f(t);
  return t.type === _.d4z.GUILD_VOICE ? null : (0, n.jsx)(a.sNh, {
    id: "channel_notification_settings",
    label: N.intl.string(N.t.HcoRu0),
    children: i
  })
}

function f(t) {
  let i = (0, d.ZA)(t),
    e = (0, d.yN)(t),
    o = i.preset === c.s8.CUSTOM && !e.inherited,
    [g, S] = l.useState(o),
    [L, E] = l.useState(false),
    f = L ? c.s8.CUSTOM : i.preset,
    b = h(t, () => E(false)),
    A = (0, s.e7)([u.ZP], () => u.ZP.getNewForumThreadsCreated(t)),
    O = "parent" === e.inheritedFrom ? N.intl.string(N.t.wlrV1c) : N.intl.string(N.t["1Wn2M4"]);
  return t.type === _.d4z.GUILD_STAGE_VOICE ? (0, n.jsxs)(a.kSQ, {
    children: [(0, n.jsx)(a.k5B, {
      id: "cns_default",
      label: O,
      checked: e.inherited,
      group: "channel_notification_settings",
      subtext: i.notification === _.bL.NO_MESSAGES ? N.intl.string(N.t.CtVGyQ) : N.intl.string(N.t["BENn/6"]),
      action: () => (0, d.JK)(t.guild_id, t.id)
    }), (0, n.jsx)(a.k5B, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !e.inherited && i.notification !== _.bL.NO_MESSAGES,
      label: N.intl.string(N.t["BENn/6"]),
      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.ONLY_MENTIONS)
    }), (0, n.jsx)(a.k5B, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: N.intl.string(N.t.CtVGyQ),
      checked: !e.inherited && i.notification === _.bL.NO_MESSAGES,
      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.NO_MESSAGES)
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [t.isForumLikeChannel() ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(a.S89, {
        id: "new-forum-threads-created",
        label: N.intl.string(N.t.Rkgjph),
        checked: A,
        action: () => r.Z.setForumThreadsCreated(t, !A)
      }), (0, n.jsx)(a.Clw, {})]
    }) : null, (0, n.jsxs)(a.kSQ, {
      children: [(0, n.jsx)(a.k5B, {
        id: "cns_default",
        label: O,
        group: "channel_notification_settings",
        checked: e.inherited && !L,
        subtext: e.inheritedPreset,
        action: () => ((0, d.JK)(t.guild_id, t.id), E(false))
      }), (0, n.jsx)(a.k5B, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: N.intl.string(N.t.hZrr6k),
        checked: !e.inherited && f === c.s8.ALL_MESSAGES,
        action: () => ((0, d._m)(t.guild_id, t.id, c.s8.ALL_MESSAGES), E(false))
      }), (0, n.jsx)(a.k5B, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: N.intl.string(N.t.y59NJm),
        checked: !e.inherited && f === c.s8.MENTIONS,
        action: () => ((0, d._m)(t.guild_id, t.id, c.s8.MENTIONS), E(false))
      }), (0, n.jsx)(a.k5B, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: N.intl.string(N.t["pGn/bJ"]),
        checked: !e.inherited && f === c.s8.NOTHING,
        action: () => ((0, d._m)(t.guild_id, t.id, c.s8.NOTHING), E(false))
      }), (0, n.jsx)(a.k5B, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: N.intl.string(N.t["32yow9"]),
        checked: L || !e.inherited && f === c.s8.CUSTOM,
        action: () => (S(true), E(true))
      })]
    }), (g || o) && b]
  })
}

function h(t, i) {
  let {
    notification: e,
    unread: l
  } = (0, d.ZA)(t), s = t => {
    t(), i()
  }, c = i => {
    let e = {
      message_notifications: i
    };
    i === _.bL.ALL_MESSAGES && l !== S.i.ALL_MESSAGES && (e.flags = (0, o.pq)(u.ZP.getChannelIdFlags(t.guild_id, t.id), L.ic.UNREADS_ALL_MESSAGES)), r.Z.updateChannelOverrideSettings(t.guild_id, t.id, e, g.UE.notifications(i))
  };
  return (0, n.jsxs)(a.kSQ, {
    children: [(0, n.jsxs)(a.sNh, {
      id: "unread_setting",
      label: "Unread Badges",
      children: [(0, n.jsx)(a.k5B, {
        id: "unread_setting_all_messages",
        group: "unread_setting",
        checked: l === S.i.ALL_MESSAGES,
        label: N.intl.string(N.t["HVah/3"]),
        action: () => s(() => (0, d.IG)(t.guild_id, t.id, S.i.ALL_MESSAGES))
      }), (0, n.jsx)(a.k5B, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: l === S.i.ONLY_MENTIONS,
        label: N.intl.string(N.t["tu+ZWJ"]),
        disabled: l !== S.i.ONLY_MENTIONS && e === _.bL.ALL_MESSAGES,
        subtext: l !== S.i.ONLY_MENTIONS && e === _.bL.ALL_MESSAGES ? N.intl.string(N.t.eP8yWU) : true,
        action: () => s(() => (0, d.IG)(t.guild_id, t.id, S.i.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, n.jsxs)(a.sNh, {
      id: "push_settings",
      label: N.intl.string(N.t.HcoRu0),
      children: [(0, n.jsx)(a.k5B, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: N.intl.string(N.t["HVah/3"]),
        checked: e === _.bL.ALL_MESSAGES,
        subtext: l !== S.i.ALL_MESSAGES && e !== _.bL.ALL_MESSAGES ? N.intl.string(N.t.idXSbI) : true,
        action: () => s(() => c(_.bL.ALL_MESSAGES))
      }), (0, n.jsx)(a.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: e === _.bL.ONLY_MENTIONS,
        label: N.intl.string(N.t["tu+ZWJ"]),
        action: () => s(() => c(_.bL.ONLY_MENTIONS))
      }), (0, n.jsx)(a.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: N.intl.string(N.t.X4wWUi),
        checked: e === _.bL.NO_MESSAGES,
        action: () => s(() => c(_.bL.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}