/** Chunk was on 89382 **/
/** chunk id: 775666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EQ: () => p,
  T5: () => N,
  ZP: () => f
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

function f(e) {
  let t = p(e);
  return e.type === u.d4z.GUILD_VOICE ? null : (0, i.jsx)(o.sNh, {
    id: "channel_notification_settings",
    label: b.intl.string(b.t.HcoRu7),
    children: t
  })
}

function p(e) {
  let t = (0, s.ZA)(e),
    n = (0, s.yN)(e),
    l = t.preset === d.s8.CUSTOM && !n.inherited,
    [g, h] = a.useState(l),
    [S, f] = a.useState(false),
    p = S ? d.s8.CUSTOM : t.preset,
    E = N(e, () => f(false)),
    L = (0, r.e7)([_.ZP], () => _.ZP.getNewForumThreadsCreated(e)),
    O = "parent" === n.inheritedFrom ? b.intl.string(b.t.wlrV1d) : b.intl.string(b.t["1Wn2Mz"]);
  return e.type === u.d4z.GUILD_STAGE_VOICE ? (0, i.jsxs)(o.kSQ, {
    children: [(0, i.jsx)(o.k5B, {
      id: "cns_default",
      label: O,
      checked: n.inherited,
      group: "channel_notification_settings",
      subtext: t.notification === u.bL.NO_MESSAGES ? b.intl.string(b.t.CtVGyc) : b.intl.string(b.t["BENn//"]),
      action: () => (0, s.JK)(e.guild_id, e.id)
    }), (0, i.jsx)(o.k5B, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !n.inherited && t.notification !== u.bL.NO_MESSAGES,
      label: b.intl.string(b.t["BENn//"]),
      action: () => (0, s.ft)(e.guild_id, e.id, u.bL.ONLY_MENTIONS)
    }), (0, i.jsx)(o.k5B, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: b.intl.string(b.t.CtVGyc),
      checked: !n.inherited && t.notification === u.bL.NO_MESSAGES,
      action: () => (0, s.ft)(e.guild_id, e.id, u.bL.NO_MESSAGES)
    })]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.S89, {
        id: "new-forum-threads-created",
        label: b.intl.string(b.t.Rkgjpq),
        checked: L,
        action: () => c.Z.setForumThreadsCreated(e, !L)
      }), (0, i.jsx)(o.Clw, {})]
    }) : null, (0, i.jsxs)(o.kSQ, {
      children: [(0, i.jsx)(o.k5B, {
        id: "cns_default",
        label: O,
        group: "channel_notification_settings",
        checked: n.inherited && !S,
        subtext: n.inheritedPreset,
        action: () => ((0, s.JK)(e.guild_id, e.id), f(false))
      }), (0, i.jsx)(o.k5B, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: b.intl.string(b.t.hZrr6u),
        checked: !n.inherited && p === d.s8.ALL_MESSAGES,
        action: () => ((0, s._m)(e.guild_id, e.id, d.s8.ALL_MESSAGES), f(false))
      }), (0, i.jsx)(o.k5B, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: b.intl.string(b.t.y59NJi),
        checked: !n.inherited && p === d.s8.MENTIONS,
        action: () => ((0, s._m)(e.guild_id, e.id, d.s8.MENTIONS), f(false))
      }), (0, i.jsx)(o.k5B, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: b.intl.string(b.t["pGn/bG"]),
        checked: !n.inherited && p === d.s8.NOTHING,
        action: () => ((0, s._m)(e.guild_id, e.id, d.s8.NOTHING), f(false))
      }), (0, i.jsx)(o.k5B, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: b.intl.string(b.t["32yow8"]),
        checked: S || !n.inherited && p === d.s8.CUSTOM,
        action: () => (h(true), f(true))
      })]
    }), (g || l) && E]
  })
}

function N(e, t) {
  let {
    notification: n,
    unread: a
  } = (0, s.ZA)(e), r = e => {
    e(), t()
  }, d = t => {
    let n = {
      message_notifications: t
    };
    t === u.bL.ALL_MESSAGES && a !== h.i.ALL_MESSAGES && (n.flags = (0, l.pq)(_.ZP.getChannelIdFlags(e.guild_id, e.id), S.ic.UNREADS_ALL_MESSAGES)), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, n, g.UE.notifications(t))
  };
  return (0, i.jsxs)(o.kSQ, {
    children: [(0, i.jsxs)(o.sNh, {
      id: "unread_setting",
      label: "Unread Badges",
      children: [(0, i.jsx)(o.k5B, {
        id: "unread_setting_all_messages",
        group: "unread_setting",
        checked: a === h.i.ALL_MESSAGES,
        label: b.intl.string(b.t["HVah//"]),
        action: () => r(() => (0, s.IG)(e.guild_id, e.id, h.i.ALL_MESSAGES))
      }), (0, i.jsx)(o.k5B, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: a === h.i.ONLY_MENTIONS,
        label: b.intl.string(b.t["tu+ZWF"]),
        disabled: a !== h.i.ONLY_MENTIONS && n === u.bL.ALL_MESSAGES,
        subtext: a !== h.i.ONLY_MENTIONS && n === u.bL.ALL_MESSAGES ? b.intl.string(b.t.eP8yWV) : true,
        action: () => r(() => (0, s.IG)(e.guild_id, e.id, h.i.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, i.jsxs)(o.sNh, {
      id: "push_settings",
      label: b.intl.string(b.t.HcoRu7),
      children: [(0, i.jsx)(o.k5B, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: b.intl.string(b.t["HVah//"]),
        checked: n === u.bL.ALL_MESSAGES,
        subtext: a !== h.i.ALL_MESSAGES && n !== u.bL.ALL_MESSAGES ? b.intl.string(b.t.idXSbG) : true,
        action: () => r(() => d(u.bL.ALL_MESSAGES))
      }), (0, i.jsx)(o.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: n === u.bL.ONLY_MENTIONS,
        label: b.intl.string(b.t["tu+ZWF"]),
        action: () => r(() => d(u.bL.ONLY_MENTIONS))
      }), (0, i.jsx)(o.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: b.intl.string(b.t.X4wWUl),
        checked: n === u.bL.NO_MESSAGES,
        action: () => r(() => d(u.bL.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}