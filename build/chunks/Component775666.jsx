/** Chunk was on 27208 **/
/** chunk id: 775666, original params: e,n,i (module,exports,require) **/
require.d(exports, {
  EQ: () => p,
  T5: () => E,
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
  return e.type === h.d4z.GUILD_VOICE ? null : (0, t.jsx)(r.sNh, {
    id: "channel_notification_settings",
    label: b.intl.string(b.t.HcoRu7),
    children: n
  })
}

function p(e) {
  let n = (0, o.ZA)(e),
    i = (0, o.yN)(e),
    d = n.preset === c.s8.CUSTOM && !i.inherited,
    [g, u] = a.useState(d),
    [S, N] = a.useState(false),
    p = S ? c.s8.CUSTOM : n.preset,
    L = E(e, () => N(false)),
    f = (0, s.e7)([l.ZP], () => l.ZP.getNewForumThreadsCreated(e)),
    m = "parent" === i.inheritedFrom ? b.intl.string(b.t.wlrV1d) : b.intl.string(b.t["1Wn2Mz"]);
  return e.type === h.d4z.GUILD_STAGE_VOICE ? (0, t.jsxs)(r.kSQ, {
    children: [(0, t.jsx)(r.k5B, {
      id: "cns_default",
      label: m,
      checked: i.inherited,
      group: "channel_notification_settings",
      subtext: n.notification === h.bL.NO_MESSAGES ? b.intl.string(b.t.CtVGyc) : b.intl.string(b.t["BENn//"]),
      action: () => (0, o.JK)(e.guild_id, e.id)
    }), (0, t.jsx)(r.k5B, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !i.inherited && n.notification !== h.bL.NO_MESSAGES,
      label: b.intl.string(b.t["BENn//"]),
      action: () => (0, o.ft)(e.guild_id, e.id, h.bL.ONLY_MENTIONS)
    }), (0, t.jsx)(r.k5B, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: b.intl.string(b.t.CtVGyc),
      checked: !i.inherited && n.notification === h.bL.NO_MESSAGES,
      action: () => (0, o.ft)(e.guild_id, e.id, h.bL.NO_MESSAGES)
    })]
  }) : (0, t.jsxs)(t.Fragment, {
    children: [e.isForumLikeChannel() ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(r.S89, {
        id: "new-forum-threads-created",
        label: b.intl.string(b.t.Rkgjpq),
        checked: f,
        action: () => _.Z.setForumThreadsCreated(e, !f)
      }), (0, t.jsx)(r.Clw, {})]
    }) : null, (0, t.jsxs)(r.kSQ, {
      children: [(0, t.jsx)(r.k5B, {
        id: "cns_default",
        label: m,
        group: "channel_notification_settings",
        checked: i.inherited && !S,
        subtext: i.inheritedPreset,
        action: () => ((0, o.JK)(e.guild_id, e.id), N(false))
      }), (0, t.jsx)(r.k5B, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: b.intl.string(b.t.hZrr6u),
        checked: !i.inherited && p === c.s8.ALL_MESSAGES,
        action: () => ((0, o._m)(e.guild_id, e.id, c.s8.ALL_MESSAGES), N(false))
      }), (0, t.jsx)(r.k5B, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: b.intl.string(b.t.y59NJi),
        checked: !i.inherited && p === c.s8.MENTIONS,
        action: () => ((0, o._m)(e.guild_id, e.id, c.s8.MENTIONS), N(false))
      }), (0, t.jsx)(r.k5B, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: b.intl.string(b.t["pGn/bG"]),
        checked: !i.inherited && p === c.s8.NOTHING,
        action: () => ((0, o._m)(e.guild_id, e.id, c.s8.NOTHING), N(false))
      }), (0, t.jsx)(r.k5B, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: b.intl.string(b.t["32yow8"]),
        checked: S || !i.inherited && p === c.s8.CUSTOM,
        action: () => (u(true), N(true))
      })]
    }), (g || d) && L]
  })
}

function E(e, n) {
  let {
    notification: i,
    unread: a
  } = (0, o.ZA)(e), s = e => {
    e(), n()
  }, c = n => {
    let i = {
      message_notifications: n
    };
    n === h.bL.ALL_MESSAGES && a !== u.i.ALL_MESSAGES && (i.flags = (0, d.pq)(l.ZP.getChannelIdFlags(e.guild_id, e.id), S.ic.UNREADS_ALL_MESSAGES)), _.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.UE.notifications(n))
  };
  return (0, t.jsxs)(r.kSQ, {
    children: [(0, t.jsxs)(r.sNh, {
      id: "unread_setting",
      label: "Unread Badges",
      children: [(0, t.jsx)(r.k5B, {
        id: "unread_setting_all_messages",
        group: "unread_setting",
        checked: a === u.i.ALL_MESSAGES,
        label: b.intl.string(b.t["HVah//"]),
        action: () => s(() => (0, o.IG)(e.guild_id, e.id, u.i.ALL_MESSAGES))
      }), (0, t.jsx)(r.k5B, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: a === u.i.ONLY_MENTIONS,
        label: b.intl.string(b.t["tu+ZWF"]),
        disabled: a !== u.i.ONLY_MENTIONS && i === h.bL.ALL_MESSAGES,
        subtext: a !== u.i.ONLY_MENTIONS && i === h.bL.ALL_MESSAGES ? b.intl.string(b.t.eP8yWV) : true,
        action: () => s(() => (0, o.IG)(e.guild_id, e.id, u.i.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, t.jsxs)(r.sNh, {
      id: "push_settings",
      label: b.intl.string(b.t.HcoRu7),
      children: [(0, t.jsx)(r.k5B, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: b.intl.string(b.t["HVah//"]),
        checked: i === h.bL.ALL_MESSAGES,
        subtext: a !== u.i.ALL_MESSAGES && i !== h.bL.ALL_MESSAGES ? b.intl.string(b.t.idXSbG) : true,
        action: () => s(() => c(h.bL.ALL_MESSAGES))
      }), (0, t.jsx)(r.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: i === h.bL.ONLY_MENTIONS,
        label: b.intl.string(b.t["tu+ZWF"]),
        action: () => s(() => c(h.bL.ONLY_MENTIONS))
      }), (0, t.jsx)(r.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: b.intl.string(b.t.X4wWUl),
        checked: i === h.bL.NO_MESSAGES,
        action: () => s(() => c(h.bL.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}