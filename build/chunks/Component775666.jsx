/** Chunk was on 99964 **/
/** chunk id: 775666, original params: e,n,t (module,exports,require) **/
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
  return e.type === u.d4z.GUILD_VOICE ? null : (0, i.jsx)(s.sNh, {
    id: "channel_notification_settings",
    label: b.intl.string(b.t.HcoRu7),
    children: n
  })
}

function p(e) {
  let n = (0, r.ZA)(e),
    t = (0, r.yN)(e),
    c = n.preset === l.s8.CUSTOM && !t.inherited,
    [g, S] = a.useState(c),
    [h, N] = a.useState(false),
    p = h ? l.s8.CUSTOM : n.preset,
    L = E(e, () => N(false)),
    f = (0, o.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(e)),
    m = "parent" === t.inheritedFrom ? b.intl.string(b.t.wlrV1d) : b.intl.string(b.t["1Wn2Mz"]);
  return e.type === u.d4z.GUILD_STAGE_VOICE ? (0, i.jsxs)(s.kSQ, {
    children: [(0, i.jsx)(s.k5B, {
      id: "cns_default",
      label: m,
      checked: t.inherited,
      group: "channel_notification_settings",
      subtext: n.notification === u.bL.NO_MESSAGES ? b.intl.string(b.t.CtVGyc) : b.intl.string(b.t["BENn//"]),
      action: () => (0, r.JK)(e.guild_id, e.id)
    }), (0, i.jsx)(s.k5B, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !t.inherited && n.notification !== u.bL.NO_MESSAGES,
      label: b.intl.string(b.t["BENn//"]),
      action: () => (0, r.ft)(e.guild_id, e.id, u.bL.ONLY_MENTIONS)
    }), (0, i.jsx)(s.k5B, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: b.intl.string(b.t.CtVGyc),
      checked: !t.inherited && n.notification === u.bL.NO_MESSAGES,
      action: () => (0, r.ft)(e.guild_id, e.id, u.bL.NO_MESSAGES)
    })]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(s.S89, {
        id: "new-forum-threads-created",
        label: b.intl.string(b.t.Rkgjpq),
        checked: f,
        action: () => _.Z.setForumThreadsCreated(e, !f)
      }), (0, i.jsx)(s.Clw, {})]
    }) : null, (0, i.jsxs)(s.kSQ, {
      children: [(0, i.jsx)(s.k5B, {
        id: "cns_default",
        label: m,
        group: "channel_notification_settings",
        checked: t.inherited && !h,
        subtext: t.inheritedPreset,
        action: () => ((0, r.JK)(e.guild_id, e.id), N(false))
      }), (0, i.jsx)(s.k5B, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: b.intl.string(b.t.hZrr6u),
        checked: !t.inherited && p === l.s8.ALL_MESSAGES,
        action: () => ((0, r._m)(e.guild_id, e.id, l.s8.ALL_MESSAGES), N(false))
      }), (0, i.jsx)(s.k5B, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: b.intl.string(b.t.y59NJi),
        checked: !t.inherited && p === l.s8.MENTIONS,
        action: () => ((0, r._m)(e.guild_id, e.id, l.s8.MENTIONS), N(false))
      }), (0, i.jsx)(s.k5B, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: b.intl.string(b.t["pGn/bG"]),
        checked: !t.inherited && p === l.s8.NOTHING,
        action: () => ((0, r._m)(e.guild_id, e.id, l.s8.NOTHING), N(false))
      }), (0, i.jsx)(s.k5B, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: b.intl.string(b.t["32yow8"]),
        checked: h || !t.inherited && p === l.s8.CUSTOM,
        action: () => (S(true), N(true))
      })]
    }), (g || c) && L]
  })
}

function E(e, n) {
  let {
    notification: t,
    unread: a
  } = (0, r.ZA)(e), o = e => {
    e(), n()
  }, l = n => {
    let t = {
      message_notifications: n
    };
    n === u.bL.ALL_MESSAGES && a !== S.i.ALL_MESSAGES && (t.flags = (0, c.pq)(d.ZP.getChannelIdFlags(e.guild_id, e.id), h.ic.UNREADS_ALL_MESSAGES)), _.Z.updateChannelOverrideSettings(e.guild_id, e.id, t, g.UE.notifications(n))
  };
  return (0, i.jsxs)(s.kSQ, {
    children: [(0, i.jsxs)(s.sNh, {
      id: "unread_setting",
      label: "Unread Badges",
      children: [(0, i.jsx)(s.k5B, {
        id: "unread_setting_all_messages",
        group: "unread_setting",
        checked: a === S.i.ALL_MESSAGES,
        label: b.intl.string(b.t["HVah//"]),
        action: () => o(() => (0, r.IG)(e.guild_id, e.id, S.i.ALL_MESSAGES))
      }), (0, i.jsx)(s.k5B, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: a === S.i.ONLY_MENTIONS,
        label: b.intl.string(b.t["tu+ZWF"]),
        disabled: a !== S.i.ONLY_MENTIONS && t === u.bL.ALL_MESSAGES,
        subtext: a !== S.i.ONLY_MENTIONS && t === u.bL.ALL_MESSAGES ? b.intl.string(b.t.eP8yWV) : true,
        action: () => o(() => (0, r.IG)(e.guild_id, e.id, S.i.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, i.jsxs)(s.sNh, {
      id: "push_settings",
      label: b.intl.string(b.t.HcoRu7),
      children: [(0, i.jsx)(s.k5B, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: b.intl.string(b.t["HVah//"]),
        checked: t === u.bL.ALL_MESSAGES,
        subtext: a !== S.i.ALL_MESSAGES && t !== u.bL.ALL_MESSAGES ? b.intl.string(b.t.idXSbG) : true,
        action: () => o(() => l(u.bL.ALL_MESSAGES))
      }), (0, i.jsx)(s.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: t === u.bL.ONLY_MENTIONS,
        label: b.intl.string(b.t["tu+ZWF"]),
        action: () => o(() => l(u.bL.ONLY_MENTIONS))
      }), (0, i.jsx)(s.k5B, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: b.intl.string(b.t.X4wWUl),
        checked: t === u.bL.NO_MESSAGES,
        action: () => o(() => l(u.bL.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}