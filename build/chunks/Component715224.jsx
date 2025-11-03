/** Chunk was on 64982 **/
/** chunk id: 715224, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk890477 = require("./890477.js"),
  Chunk649179 = require("./649179.js"),
  Chunk35125 = require("./35125.js"),
  Chunk630388 = require("./630388.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let m = "NO_SYSTEM_CHANNEL";

function p(e) {
  var t;
  let {
    guild: n,
    canManageGuild: p
  } = e, {
    enableDeadchat: f
  } = a.Z.useExperiment({
    guildId: n.id,
    location: "guild_settings"
  }, {
    disable: null == n,
    autoTrackExposure: true
  }), {
    enabled: h
  } = s.Z.useExperiment({
    guildId: n.id,
    location: "guild_settings"
  }, {
    disable: null == n,
    autoTrackExposure: false
  }), b = i.useCallback((e, t) => {
    let r = (0, c.mB)(n.systemChannelFlags, e, t);
    d.Z.updateGuild({
      systemChannelFlags: r
    })
  }, [n.systemChannelFlags]), x = i.useCallback(e => b(u.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [b]), j = i.useCallback(e => b(u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [b]), v = i.useCallback(e => b(u.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS, !e), [b]), _ = i.useCallback(e => b(u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [b]), O = i.useCallback(e => b(u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [b]), C = i.useCallback(e => b(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [b]), y = i.useCallback(e => b(u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [b]), N = i.useCallback(e => b(u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [b]), E = null != (t = n.systemChannelId) ? t : m, I = (0, o.eI)(n), S = I || (0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS), T = I || (0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.rsf, {
      label: g.intl.string(g.t["+f0bXQ"]),
      checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
      onChange: x,
      disabled: !p || E === m
    }), (0, r.jsx)(l.rsf, {
      label: g.intl.string(g.t["72k7jf"]),
      checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
      onChange: O,
      disabled: !p || E === m
    }), (0, r.jsx)(l.rsf, {
      label: g.intl.string(g.t["2L8NCN"]),
      checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
      onChange: j,
      disabled: !p || E === m
    }), (0, r.jsx)(l.rsf, {
      label: g.intl.string(g.t["NvnW+V"]),
      checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
      onChange: _,
      disabled: !p || E === m
    }), h && (0, r.jsx)(l.rsf, {
      label: g.intl.string(g.t["CLCoc+"]),
      checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS),
      onChange: v,
      disabled: !p || E === m
    }), S && (0, r.jsx)(l.rsf, {
      label: g.intl.string(g.t["54n19R"]),
      checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
      onChange: C,
      disabled: !p || E === m
    }), T && (0, r.jsx)(l.rsf, {
      label: g.intl.string(g.t["IhF5d+"]),
      checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
      onChange: N,
      disabled: !p || E === m
    }), f && (0, r.jsx)(l.rsf, {
      label: g.intl.string(g.t["3yOX1/"]),
      badge: "beta",
      checked: !(0, c.yE)(n.systemChannelFlags, u.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
      onChange: y,
      disabled: !p || E === m
    })]
  })
}