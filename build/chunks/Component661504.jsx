/** Chunk was on 90432 **/
/** chunk id: 661504, original params: e,n,i (module,exports,require) **/
require.d(exports, {
  A0: () => E,
  Ay: () => N,
  d_: () => b
}), require("./896048.js"), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk887560 = require("./887560.js"),
  Chunk393432 = require("./393432.js"),
  Chunk24873 = require("./24873.js"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");

function N(e) {
  let n = E(e);
  return e.type === h.rbe.GUILD_VOICE ? null : (0, t.jsx)(r.Drp, {
    id: "channel_notification_settings",
    label: A.intl.string(A.t.HcoRu0),
    children: n
  })
}

function E(e) {
  let n = (0, d.bH)(e),
    i = (0, d.UD)(e),
    o = n.preset === c.N9.CUSTOM && !i.inherited,
    [g, S] = _.useState(o),
    [u, N] = _.useState(false),
    E = u ? c.N9.CUSTOM : n.preset,
    p = b(e, () => N(false)),
    L = (0, s.bG)([l.Ay], () => l.Ay.getNewForumThreadsCreated(e)),
    M = "parent" === i.inheritedFrom ? A.intl.string(A.t.wlrV1c) : A.intl.string(A.t["1Wn2M4"]);
  return e.type === h.rbe.GUILD_STAGE_VOICE ? (0, t.jsxs)(r.rXV, {
    children: [(0, t.jsx)(r.iDA, {
      id: "cns_default",
      label: M,
      checked: i.inherited,
      group: "channel_notification_settings",
      subtext: n.notification === h.orn.NO_MESSAGES ? A.intl.string(A.t.CtVGyQ) : A.intl.string(A.t["BENn/6"]),
      action: () => (0, d.Au)(e.guild_id, e.id)
    }), (0, t.jsx)(r.iDA, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !i.inherited && n.notification !== h.orn.NO_MESSAGES,
      label: A.intl.string(A.t["BENn/6"]),
      action: () => (0, d.qk)(e.guild_id, e.id, h.orn.ONLY_MENTIONS)
    }), (0, t.jsx)(r.iDA, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: A.intl.string(A.t.CtVGyQ),
      checked: !i.inherited && n.notification === h.orn.NO_MESSAGES,
      action: () => (0, d.qk)(e.guild_id, e.id, h.orn.NO_MESSAGES)
    })]
  }) : (0, t.jsxs)(t.Fragment, {
    children: [e.isForumLikeChannel() ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(r.sLh, {
        id: "new-forum-threads-created",
        label: A.intl.string(A.t.Rkgjph),
        checked: L,
        action: () => a.A.setForumThreadsCreated(e, !L)
      }), (0, t.jsx)(r.bXX, {})]
    }) : null, (0, t.jsxs)(r.rXV, {
      children: [(0, t.jsx)(r.iDA, {
        id: "cns_default",
        label: M,
        group: "channel_notification_settings",
        checked: i.inherited && !u,
        subtext: i.inheritedPreset,
        action: () => ((0, d.Au)(e.guild_id, e.id), N(false))
      }), (0, t.jsx)(r.iDA, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: A.intl.string(A.t.hZrr6k),
        checked: !i.inherited && E === c.N9.ALL_MESSAGES,
        action: () => ((0, d.gN)(e.guild_id, e.id, c.N9.ALL_MESSAGES), N(false))
      }), (0, t.jsx)(r.iDA, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: A.intl.string(A.t.y59NJm),
        checked: !i.inherited && E === c.N9.MENTIONS,
        action: () => ((0, d.gN)(e.guild_id, e.id, c.N9.MENTIONS), N(false))
      }), (0, t.jsx)(r.iDA, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: A.intl.string(A.t["pGn/bJ"]),
        checked: !i.inherited && E === c.N9.NOTHING,
        action: () => ((0, d.gN)(e.guild_id, e.id, c.N9.NOTHING), N(false))
      }), (0, t.jsx)(r.iDA, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: A.intl.string(A.t["32yow9"]),
        checked: u || !i.inherited && E === c.N9.CUSTOM,
        action: () => (S(true), N(true))
      })]
    }), (g || o) && p]
  })
}

function b(e, n) {
  let {
    notification: i,
    unread: _
  } = (0, d.bH)(e), s = e => {
    e(), n()
  }, c = n => {
    let i = {
      message_notifications: n
    };
    n === h.orn.ALL_MESSAGES && _ !== S.e.ALL_MESSAGES && (i.flags = (0, o.mD)(l.Ay.getChannelIdFlags(e.guild_id, e.id), u.vv.UNREADS_ALL_MESSAGES)), a.A.updateChannelOverrideSettings(e.guild_id, e.id, i, g.G_.notifications(n))
  };
  return (0, t.jsxs)(r.rXV, {
    children: [(0, t.jsxs)(r.Drp, {
      id: "unread_setting",
      label: "Unread Badges",
      children: [(0, t.jsx)(r.iDA, {
        id: "unread_setting_all_messages",
        group: "unread_setting",
        checked: _ === S.e.ALL_MESSAGES,
        label: A.intl.string(A.t["HVah/3"]),
        action: () => s(() => (0, d.mA)(e.guild_id, e.id, S.e.ALL_MESSAGES))
      }), (0, t.jsx)(r.iDA, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: _ === S.e.ONLY_MENTIONS,
        label: A.intl.string(A.t["tu+ZWJ"]),
        disabled: _ !== S.e.ONLY_MENTIONS && i === h.orn.ALL_MESSAGES,
        subtext: _ !== S.e.ONLY_MENTIONS && i === h.orn.ALL_MESSAGES ? A.intl.string(A.t.eP8yWU) : true,
        action: () => s(() => (0, d.mA)(e.guild_id, e.id, S.e.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, t.jsxs)(r.Drp, {
      id: "push_settings",
      label: A.intl.string(A.t.HcoRu0),
      children: [(0, t.jsx)(r.iDA, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: A.intl.string(A.t["HVah/3"]),
        checked: i === h.orn.ALL_MESSAGES,
        subtext: _ !== S.e.ALL_MESSAGES && i !== h.orn.ALL_MESSAGES ? A.intl.string(A.t.idXSbI) : true,
        action: () => s(() => c(h.orn.ALL_MESSAGES))
      }), (0, t.jsx)(r.iDA, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: i === h.orn.ONLY_MENTIONS,
        label: A.intl.string(A.t["tu+ZWJ"]),
        action: () => s(() => c(h.orn.ONLY_MENTIONS))
      }), (0, t.jsx)(r.iDA, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: A.intl.string(A.t.X4wWUi),
        checked: i === h.orn.NO_MESSAGES,
        action: () => s(() => c(h.orn.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}