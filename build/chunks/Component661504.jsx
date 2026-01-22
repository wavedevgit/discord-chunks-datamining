/** Chunk was on 90432 **/
/** chunk id: 661504, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  A0: () => h,
  Ay: () => b,
  d_: () => N
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

function b(e) {
  let i = h(e);
  return e.type === f.rbe.GUILD_VOICE ? null : (0, n.jsx)(a.Drp, {
    id: "channel_notification_settings",
    label: u.intl.string(u.t.HcoRu0),
    children: i
  })
}

function h(e) {
  let i = (0, r.bH)(e),
    t = (0, r.UD)(e),
    _ = i.preset === l.N9.CUSTOM && !t.inherited,
    [g, S] = d.useState(_),
    [A, b] = d.useState(false),
    h = A ? l.N9.CUSTOM : i.preset,
    E = N(e, () => b(false)),
    p = (0, s.bG)([o.Ay], () => o.Ay.getNewForumThreadsCreated(e)),
    L = "parent" === t.inheritedFrom ? u.intl.string(u.t.wlrV1c) : u.intl.string(u.t["1Wn2M4"]);
  return e.type === f.rbe.GUILD_STAGE_VOICE ? (0, n.jsxs)(a.rXV, {
    children: [(0, n.jsx)(a.iDA, {
      id: "cns_default",
      label: L,
      checked: t.inherited,
      group: "channel_notification_settings",
      subtext: i.notification === f.orn.NO_MESSAGES ? u.intl.string(u.t.CtVGyQ) : u.intl.string(u.t["BENn/6"]),
      action: () => (0, r.Au)(e.guild_id, e.id)
    }), (0, n.jsx)(a.iDA, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !t.inherited && i.notification !== f.orn.NO_MESSAGES,
      label: u.intl.string(u.t["BENn/6"]),
      action: () => (0, r.qk)(e.guild_id, e.id, f.orn.ONLY_MENTIONS)
    }), (0, n.jsx)(a.iDA, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: u.intl.string(u.t.CtVGyQ),
      checked: !t.inherited && i.notification === f.orn.NO_MESSAGES,
      action: () => (0, r.qk)(e.guild_id, e.id, f.orn.NO_MESSAGES)
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [e.isForumLikeChannel() ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(a.sLh, {
        id: "new-forum-threads-created",
        label: u.intl.string(u.t.Rkgjph),
        checked: p,
        action: () => c.A.setForumThreadsCreated(e, !p)
      }), (0, n.jsx)(a.bXX, {})]
    }) : null, (0, n.jsxs)(a.rXV, {
      children: [(0, n.jsx)(a.iDA, {
        id: "cns_default",
        label: L,
        group: "channel_notification_settings",
        checked: t.inherited && !A,
        subtext: t.inheritedPreset,
        action: () => ((0, r.Au)(e.guild_id, e.id), b(false))
      }), (0, n.jsx)(a.iDA, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: u.intl.string(u.t.hZrr6k),
        checked: !t.inherited && h === l.N9.ALL_MESSAGES,
        action: () => ((0, r.gN)(e.guild_id, e.id, l.N9.ALL_MESSAGES), b(false))
      }), (0, n.jsx)(a.iDA, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: u.intl.string(u.t.y59NJm),
        checked: !t.inherited && h === l.N9.MENTIONS,
        action: () => ((0, r.gN)(e.guild_id, e.id, l.N9.MENTIONS), b(false))
      }), (0, n.jsx)(a.iDA, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: u.intl.string(u.t["pGn/bJ"]),
        checked: !t.inherited && h === l.N9.NOTHING,
        action: () => ((0, r.gN)(e.guild_id, e.id, l.N9.NOTHING), b(false))
      }), (0, n.jsx)(a.iDA, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: u.intl.string(u.t["32yow9"]),
        checked: A || !t.inherited && h === l.N9.CUSTOM,
        action: () => (S(true), b(true))
      })]
    }), (g || _) && E]
  })
}

function N(e, i) {
  let {
    notification: t,
    unread: d
  } = (0, r.bH)(e), s = e => {
    e(), i()
  }, l = i => {
    let t = {
      message_notifications: i
    };
    i === f.orn.ALL_MESSAGES && d !== S.e.ALL_MESSAGES && (t.flags = (0, _.mD)(o.Ay.getChannelIdFlags(e.guild_id, e.id), A.vv.UNREADS_ALL_MESSAGES)), c.A.updateChannelOverrideSettings(e.guild_id, e.id, t, g.G_.notifications(i))
  };
  return (0, n.jsxs)(a.rXV, {
    children: [(0, n.jsxs)(a.Drp, {
      id: "unread_setting",
      label: "Unread Badges",
      children: [(0, n.jsx)(a.iDA, {
        id: "unread_setting_all_messages",
        group: "unread_setting",
        checked: d === S.e.ALL_MESSAGES,
        label: u.intl.string(u.t["HVah/3"]),
        action: () => s(() => (0, r.mA)(e.guild_id, e.id, S.e.ALL_MESSAGES))
      }), (0, n.jsx)(a.iDA, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: d === S.e.ONLY_MENTIONS,
        label: u.intl.string(u.t["tu+ZWJ"]),
        disabled: d !== S.e.ONLY_MENTIONS && t === f.orn.ALL_MESSAGES,
        subtext: d !== S.e.ONLY_MENTIONS && t === f.orn.ALL_MESSAGES ? u.intl.string(u.t.eP8yWU) : true,
        action: () => s(() => (0, r.mA)(e.guild_id, e.id, S.e.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, n.jsxs)(a.Drp, {
      id: "push_settings",
      label: u.intl.string(u.t.HcoRu0),
      children: [(0, n.jsx)(a.iDA, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: u.intl.string(u.t["HVah/3"]),
        checked: t === f.orn.ALL_MESSAGES,
        subtext: d !== S.e.ALL_MESSAGES && t !== f.orn.ALL_MESSAGES ? u.intl.string(u.t.idXSbI) : true,
        action: () => s(() => l(f.orn.ALL_MESSAGES))
      }), (0, n.jsx)(a.iDA, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: t === f.orn.ONLY_MENTIONS,
        label: u.intl.string(u.t["tu+ZWJ"]),
        action: () => s(() => l(f.orn.ONLY_MENTIONS))
      }), (0, n.jsx)(a.iDA, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: u.intl.string(u.t.X4wWUi),
        checked: t === f.orn.NO_MESSAGES,
        action: () => s(() => l(f.orn.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}