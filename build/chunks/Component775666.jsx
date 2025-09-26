/** Chunk was on 25759 **/
/** chunk id: 775666, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  EQ: () => p,
  T5: () => L,
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

function N(e) {
  let n = p(e);
  return e.type === h.d4z.GUILD_VOICE ? null : (0, i.jsx)(_.sNh, {
    id: "channel_notification_settings",
    label: b.intl.string(b.t.HcoRu7),
    children: n
  })
}

function p(e) {
  let n = (0, o.ZA)(e),
    t = (0, o.yN)(e),
    d = n.preset === c.s8.CUSTOM && !t.inherited,
    [g, u] = a.useState(d),
    [S, N] = a.useState(false),
    p = S ? c.s8.CUSTOM : n.preset,
    E = L(e, () => N(false)),
    m = (0, s.e7)([l.ZP], () => l.ZP.getNewForumThreadsCreated(e)),
    f = "parent" === t.inheritedFrom ? b.intl.string(b.t.wlrV1d) : b.intl.string(b.t["1Wn2Mz"]);
  return e.type === h.d4z.GUILD_STAGE_VOICE ? (0, i.jsxs)(_.kSQ, {
    children: [(0, i.jsx)(_.k5B, {
      id: "cns_default",
      label: f,
      checked: t.inherited,
      group: "channel_notification_settings",
      subtext: n.notification === h.bL.NO_MESSAGES ? b.intl.string(b.t.CtVGyc) : b.intl.string(b.t["BENn//"]),
      action: () => (0, o.JK)(e.guild_id, e.id)
    }), (0, i.jsx)(_.k5B, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !t.inherited && n.notification !== h.bL.NO_MESSAGES,
      label: b.intl.string(b.t["BENn//"]),
      action: () => (0, o.ft)(e.guild_id, e.id, h.bL.ONLY_MENTIONS)
    }), (0, i.jsx)(_.k5B, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: b.intl.string(b.t.CtVGyc),
      checked: !t.inherited && n.notification === h.bL.NO_MESSAGES,
      action: () => (0, o.ft)(e.guild_id, e.id, h.bL.NO_MESSAGES)
    })]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(_.S89, {
        id: "new-forum-threads-created",
        label: b.intl.string(b.t.Rkgjpq),
        checked: m,
        action: () => r.Z.setForumThreadsCreated(e, !m)
      }), (0, i.jsx)(_.Clw, {})]
    }) : null, (0, i.jsxs)(_.kSQ, {
      children: [(0, i.jsx)(_.k5B, {
        id: "cns_default",
        label: f,
        group: "channel_notification_settings",
        checked: t.inherited && !S,
        subtext: t.inheritedPreset,
        action: () => ((0, o.JK)(e.guild_id, e.id), N(false))
      }), (0, i.jsx)(_.k5B, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: b.intl.string(b.t.hZrr6u),
        checked: !t.inherited && p === c.s8.ALL_MESSAGES,
        action: () => ((0, o._m)(e.guild_id, e.id, c.s8.ALL_MESSAGES), N(false))
      }), (0, i.jsx)(_.k5B, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: b.intl.string(b.t.y59NJi),
        checked: !t.inherited && p === c.s8.MENTIONS,
        action: () => ((0, o._m)(e.guild_id, e.id, c.s8.MENTIONS), N(false))
      }), (0, i.jsx)(_.k5B, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: b.intl.string(b.t["pGn/bG"]),
        checked: !t.inherited && p === c.s8.NOTHING,
        action: () => ((0, o._m)(e.guild_id, e.id, c.s8.NOTHING), N(false))
      }), (0, i.jsx)(_.k5B, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: b.intl.string(b.t["32yow8"]),
        checked: S || !t.inherited && p === c.s8.CUSTOM,
        action: () => (u(true), N(true))
      })]
    }), (g || d) && E]
  })
}

function L(e, n) {
  let {
    notification: t,
    unread: a
  } = (0, o.ZA)(e), s = e => {
    e(), n()
  }, c = n => {
    let t = {
      message_notifications: n
    };
    n === h.bL.ALL_MESSAGES && a !== u.i.ALL_MESSAGES && (t.flags = (0, d.pq)(l.ZP.getChannelIdFlags(e.guild_id, e.id), S.ic.UNREADS_ALL_MESSAGES)), r.Z.updateChannelOverrideSettings(e.guild_id, e.id, t, g.UE.notifications(n))
  };
  return (0, i.jsxs)(_.kSQ, {
    children: [(0, i.jsxs)(_.sNh, {
      id: "unread_setting",
      label: "Unread Badges",
      children: [(0, i.jsx)(_.k5B, {
        id: "unread_setting_all_messages",
        group: "unread_setting",
        checked: a === u.i.ALL_MESSAGES,
        label: b.intl.string(b.t["HVah//"]),
        action: () => s(() => (0, o.IG)(e.guild_id, e.id, u.i.ALL_MESSAGES))
      }), (0, i.jsx)(_.k5B, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: a === u.i.ONLY_MENTIONS,
        label: b.intl.string(b.t["tu+ZWF"]),
        disabled: a !== u.i.ONLY_MENTIONS && t === h.bL.ALL_MESSAGES,
        subtext: a !== u.i.ONLY_MENTIONS && t === h.bL.ALL_MESSAGES ? b.intl.string(b.t.eP8yWV) : true,
        action: () => s(() => (0, o.IG)(e.guild_id, e.id, u.i.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, i.jsxs)(_.sNh, {
      id: "push_settings",
      label: b.intl.string(b.t.HcoRu7),
      children: [(0, i.jsx)(_.k5B, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: b.intl.string(b.t["HVah//"]),
        checked: t === h.bL.ALL_MESSAGES,
        subtext: a !== u.i.ALL_MESSAGES && t !== h.bL.ALL_MESSAGES ? b.intl.string(b.t.idXSbG) : true,
        action: () => s(() => c(h.bL.ALL_MESSAGES))
      }), (0, i.jsx)(_.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: t === h.bL.ONLY_MENTIONS,
        label: b.intl.string(b.t["tu+ZWF"]),
        action: () => s(() => c(h.bL.ONLY_MENTIONS))
      }), (0, i.jsx)(_.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: b.intl.string(b.t.X4wWUl),
        checked: t === h.bL.NO_MESSAGES,
        action: () => s(() => c(h.bL.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}