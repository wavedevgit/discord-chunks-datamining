/** Chunk was on 86115 **/
/** chunk id: 775666, original params: e,n,i (module,exports,require) **/
require.d(exports, {
  EQ: () => E,
  T5: () => L,
  ZP: () => N
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

function N(e) {
  let n = E(e);
  return e.type === h.d4z.GUILD_VOICE ? null : (0, t.jsx)(s.sNh, {
    id: "channel_notification_settings",
    label: u.intl.string(u.t.HcoRu0),
    children: n
  })
}

function E(e) {
  let n = (0, r.ZA)(e),
    i = (0, r.yN)(e),
    c = n.preset === l.s8.CUSTOM && !i.inherited,
    [g, b] = a.useState(c),
    [S, N] = a.useState(false),
    E = S ? l.s8.CUSTOM : n.preset,
    p = L(e, () => N(false)),
    M = (0, d.e7)([_.ZP], () => _.ZP.getNewForumThreadsCreated(e)),
    m = "parent" === i.inheritedFrom ? u.intl.string(u.t.wlrV1c) : u.intl.string(u.t["1Wn2M4"]);
  return e.type === h.d4z.GUILD_STAGE_VOICE ? (0, t.jsxs)(s.kSQ, {
    children: [(0, t.jsx)(s.k5B, {
      id: "cns_default",
      label: m,
      checked: i.inherited,
      group: "channel_notification_settings",
      subtext: n.notification === h.bL.NO_MESSAGES ? u.intl.string(u.t.CtVGyQ) : u.intl.string(u.t["BENn/6"]),
      action: () => (0, r.JK)(e.guild_id, e.id)
    }), (0, t.jsx)(s.k5B, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !i.inherited && n.notification !== h.bL.NO_MESSAGES,
      label: u.intl.string(u.t["BENn/6"]),
      action: () => (0, r.ft)(e.guild_id, e.id, h.bL.ONLY_MENTIONS)
    }), (0, t.jsx)(s.k5B, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: u.intl.string(u.t.CtVGyQ),
      checked: !i.inherited && n.notification === h.bL.NO_MESSAGES,
      action: () => (0, r.ft)(e.guild_id, e.id, h.bL.NO_MESSAGES)
    })]
  }) : (0, t.jsxs)(t.Fragment, {
    children: [e.isForumLikeChannel() ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(s.S89, {
        id: "new-forum-threads-created",
        label: u.intl.string(u.t.Rkgjph),
        checked: M,
        action: () => o.Z.setForumThreadsCreated(e, !M)
      }), (0, t.jsx)(s.Clw, {})]
    }) : null, (0, t.jsxs)(s.kSQ, {
      children: [(0, t.jsx)(s.k5B, {
        id: "cns_default",
        label: m,
        group: "channel_notification_settings",
        checked: i.inherited && !S,
        subtext: i.inheritedPreset,
        action: () => ((0, r.JK)(e.guild_id, e.id), N(false))
      }), (0, t.jsx)(s.k5B, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: u.intl.string(u.t.hZrr6k),
        checked: !i.inherited && E === l.s8.ALL_MESSAGES,
        action: () => ((0, r._m)(e.guild_id, e.id, l.s8.ALL_MESSAGES), N(false))
      }), (0, t.jsx)(s.k5B, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: u.intl.string(u.t.y59NJm),
        checked: !i.inherited && E === l.s8.MENTIONS,
        action: () => ((0, r._m)(e.guild_id, e.id, l.s8.MENTIONS), N(false))
      }), (0, t.jsx)(s.k5B, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: u.intl.string(u.t["pGn/bJ"]),
        checked: !i.inherited && E === l.s8.NOTHING,
        action: () => ((0, r._m)(e.guild_id, e.id, l.s8.NOTHING), N(false))
      }), (0, t.jsx)(s.k5B, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: u.intl.string(u.t["32yow9"]),
        checked: S || !i.inherited && E === l.s8.CUSTOM,
        action: () => (b(true), N(true))
      })]
    }), (g || c) && p]
  })
}

function L(e, n) {
  let {
    notification: i,
    unread: a
  } = (0, r.ZA)(e), d = e => {
    e(), n()
  }, l = n => {
    let i = {
      message_notifications: n
    };
    n === h.bL.ALL_MESSAGES && a !== b.i.ALL_MESSAGES && (i.flags = (0, c.pq)(_.ZP.getChannelIdFlags(e.guild_id, e.id), S.ic.UNREADS_ALL_MESSAGES)), o.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.UE.notifications(n))
  };
  return (0, t.jsxs)(s.kSQ, {
    children: [(0, t.jsxs)(s.sNh, {
      id: "unread_setting",
      label: "Unread Badges",
      children: [(0, t.jsx)(s.k5B, {
        id: "unread_setting_all_messages",
        group: "unread_setting",
        checked: a === b.i.ALL_MESSAGES,
        label: u.intl.string(u.t["HVah/3"]),
        action: () => d(() => (0, r.IG)(e.guild_id, e.id, b.i.ALL_MESSAGES))
      }), (0, t.jsx)(s.k5B, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: a === b.i.ONLY_MENTIONS,
        label: u.intl.string(u.t["tu+ZWJ"]),
        disabled: a !== b.i.ONLY_MENTIONS && i === h.bL.ALL_MESSAGES,
        subtext: a !== b.i.ONLY_MENTIONS && i === h.bL.ALL_MESSAGES ? u.intl.string(u.t.eP8yWU) : true,
        action: () => d(() => (0, r.IG)(e.guild_id, e.id, b.i.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, t.jsxs)(s.sNh, {
      id: "push_settings",
      label: u.intl.string(u.t.HcoRu0),
      children: [(0, t.jsx)(s.k5B, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: u.intl.string(u.t["HVah/3"]),
        checked: i === h.bL.ALL_MESSAGES,
        subtext: a !== b.i.ALL_MESSAGES && i !== h.bL.ALL_MESSAGES ? u.intl.string(u.t.idXSbI) : true,
        action: () => d(() => l(h.bL.ALL_MESSAGES))
      }), (0, t.jsx)(s.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: i === h.bL.ONLY_MENTIONS,
        label: u.intl.string(u.t["tu+ZWJ"]),
        action: () => d(() => l(h.bL.ONLY_MENTIONS))
      }), (0, t.jsx)(s.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: u.intl.string(u.t.X4wWUi),
        checked: i === h.bL.NO_MESSAGES,
        action: () => d(() => l(h.bL.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}