/** Chunk was on 47841 **/
/** chunk id: 308889, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk397927 = require("./397927.js"),
  Chunk149305 = require("./149305.js"),
  Chunk349327 = require("./349327.js"),
  Chunk942075 = require("./942075.js"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let m = "NO_SYSTEM_CHANNEL";

function p(e) {
  var t;
  let {
    guild: n,
    canManageGuild: p
  } = e, {
    enableDeadchat: f
  } = a.c.useExperiment({
    guildId: n.id,
    location: "guild_settings"
  }, {
    disable: null == n,
    autoTrackExposure: true
  }), {
    enabled: b
  } = o.A.useExperiment({
    guildId: n.id,
    location: "guild_settings"
  }, {
    disable: null == n,
    autoTrackExposure: false
  }), h = i.useCallback((e, t) => {
    let r = (0, l.lA)(n.systemChannelFlags, e, t);
    d.A.updateGuild({
      systemChannelFlags: r
    })
  }, [n.systemChannelFlags]), x = i.useCallback(e => h(u.ogj.SUPPRESS_JOIN_NOTIFICATIONS, !e), [h]), j = i.useCallback(e => h(u.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [h]), _ = i.useCallback(e => h(u.ogj.SUPPRESS_UGC_ADDED_NOTIFICATIONS, !e), [h]), O = i.useCallback(e => h(u.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [h]), v = i.useCallback(e => h(u.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [h]), y = i.useCallback(e => h(u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [h]), A = i.useCallback(e => h(u.ogj.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [h]), E = i.useCallback(e => h(u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [h]), N = null != (t = n.systemChannelId) ? t : m, S = (0, c.g6)(n), I = S || (0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS), T = S || (0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.dOG, {
      label: g.intl.string(g.t["+f0bXQ"]),
      checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_JOIN_NOTIFICATIONS),
      onChange: x,
      disabled: !p || N === m
    }), (0, r.jsx)(s.dOG, {
      label: g.intl.string(g.t["72k7jf"]),
      checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
      onChange: v,
      disabled: !p || N === m
    }), (0, r.jsx)(s.dOG, {
      label: g.intl.string(g.t["2L8NCN"]),
      checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
      onChange: j,
      disabled: !p || N === m
    }), (0, r.jsx)(s.dOG, {
      label: g.intl.string(g.t["NvnW+V"]),
      checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
      onChange: O,
      disabled: !p || N === m
    }), b && (0, r.jsx)(s.dOG, {
      label: g.intl.string(g.t["CLCoc+"]),
      checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_UGC_ADDED_NOTIFICATIONS),
      onChange: _,
      disabled: !p || N === m
    }), I && (0, r.jsx)(s.dOG, {
      label: g.intl.string(g.t["54n19R"]),
      checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
      onChange: y,
      disabled: !p || N === m
    }), T && (0, r.jsx)(s.dOG, {
      label: g.intl.string(g.t["IhF5d+"]),
      checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
      onChange: E,
      disabled: !p || N === m
    }), f && (0, r.jsx)(s.dOG, {
      label: g.intl.string(g.t["3yOX1/"]),
      badge: "beta",
      checked: !(0, l.Lt)(n.systemChannelFlags, u.ogj.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
      onChange: A,
      disabled: !p || N === m
    })]
  })
}