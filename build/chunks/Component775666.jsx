/** Chunk was on 24358 **/
/** chunk id: 775666, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  EQ: () => h,
  T5: () => f,
  ZP: () => N
}), require("./388685.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function N(t) {
  let i = h(t);
  return t.type === _.d4z.GUILD_VOICE ? null : (0, n.jsx)(a.sNh, {
    id: "channel_notification_settings",
    label: E.intl.string(E.t.HcoRu7),
    children: i
  })
}

function h(t) {
  let i = (0, d.ZA)(t),
    e = (0, d.yN)(t),
    o = i.preset === c.s8.CUSTOM && !e.inherited,
    [g, S] = l.useState(o),
    [L, N] = l.useState(false),
    h = L ? c.s8.CUSTOM : i.preset,
    b = f(t, () => N(false)),
    p = (0, s.e7)([u.ZP], () => u.ZP.getNewForumThreadsCreated(t)),
    A = "parent" === e.inheritedFrom ? E.intl.string(E.t.wlrV1d) : E.intl.string(E.t["1Wn2Mz"]);
  return t.type === _.d4z.GUILD_STAGE_VOICE ? (0, n.jsxs)(a.kSQ, {
    children: [(0, n.jsx)(a.k5B, {
      id: "cns_default",
      label: A,
      checked: e.inherited,
      group: "channel_notification_settings",
      subtext: i.notification === _.bL.NO_MESSAGES ? E.intl.string(E.t.CtVGyc) : E.intl.string(E.t["BENn//"]),
      action: () => (0, d.JK)(t.guild_id, t.id)
    }), (0, n.jsx)(a.k5B, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !e.inherited && i.notification !== _.bL.NO_MESSAGES,
      label: E.intl.string(E.t["BENn//"]),
      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.ONLY_MENTIONS)
    }), (0, n.jsx)(a.k5B, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: E.intl.string(E.t.CtVGyc),
      checked: !e.inherited && i.notification === _.bL.NO_MESSAGES,
      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.NO_MESSAGES)
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [t.isForumLikeChannel() ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(a.S89, {
        id: "new-forum-threads-created",
        label: E.intl.string(E.t.Rkgjpq),
        checked: p,
        action: () => r.Z.setForumThreadsCreated(t, !p)
      }), (0, n.jsx)(a.Clw, {})]
    }) : null, (0, n.jsxs)(a.kSQ, {
      children: [(0, n.jsx)(a.k5B, {
        id: "cns_default",
        label: A,
        group: "channel_notification_settings",
        checked: e.inherited && !L,
        subtext: e.inheritedPreset,
        action: () => ((0, d.JK)(t.guild_id, t.id), N(false))
      }), (0, n.jsx)(a.k5B, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: E.intl.string(E.t.hZrr6u),
        checked: !e.inherited && h === c.s8.ALL_MESSAGES,
        action: () => ((0, d._m)(t.guild_id, t.id, c.s8.ALL_MESSAGES), N(false))
      }), (0, n.jsx)(a.k5B, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: E.intl.string(E.t.y59NJi),
        checked: !e.inherited && h === c.s8.MENTIONS,
        action: () => ((0, d._m)(t.guild_id, t.id, c.s8.MENTIONS), N(false))
      }), (0, n.jsx)(a.k5B, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: E.intl.string(E.t["pGn/bG"]),
        checked: !e.inherited && h === c.s8.NOTHING,
        action: () => ((0, d._m)(t.guild_id, t.id, c.s8.NOTHING), N(false))
      }), (0, n.jsx)(a.k5B, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: E.intl.string(E.t["32yow8"]),
        checked: L || !e.inherited && h === c.s8.CUSTOM,
        action: () => (S(true), N(true))
      })]
    }), (g || o) && b]
  })
}

function f(t, i) {
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
        label: E.intl.string(E.t["HVah//"]),
        action: () => s(() => (0, d.IG)(t.guild_id, t.id, S.i.ALL_MESSAGES))
      }), (0, n.jsx)(a.k5B, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: l === S.i.ONLY_MENTIONS,
        label: E.intl.string(E.t["tu+ZWF"]),
        disabled: l !== S.i.ONLY_MENTIONS && e === _.bL.ALL_MESSAGES,
        subtext: l !== S.i.ONLY_MENTIONS && e === _.bL.ALL_MESSAGES ? E.intl.string(E.t.eP8yWV) : true,
        action: () => s(() => (0, d.IG)(t.guild_id, t.id, S.i.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, n.jsxs)(a.sNh, {
      id: "push_settings",
      label: E.intl.string(E.t.HcoRu7),
      children: [(0, n.jsx)(a.k5B, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: E.intl.string(E.t["HVah//"]),
        checked: e === _.bL.ALL_MESSAGES,
        subtext: l !== S.i.ALL_MESSAGES && e !== _.bL.ALL_MESSAGES ? E.intl.string(E.t.idXSbG) : true,
        action: () => s(() => c(_.bL.ALL_MESSAGES))
      }), (0, n.jsx)(a.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: e === _.bL.ONLY_MENTIONS,
        label: E.intl.string(E.t["tu+ZWF"]),
        action: () => s(() => c(_.bL.ONLY_MENTIONS))
      }), (0, n.jsx)(a.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: E.intl.string(E.t.X4wWUl),
        checked: e === _.bL.NO_MESSAGES,
        action: () => s(() => c(_.bL.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}