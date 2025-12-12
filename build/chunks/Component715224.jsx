/** Chunk was on 384 **/
/** chunk id: 715224, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk481060 = require("./481060.js"),
  Chunk890477 = require("./890477.js"),
  Chunk649179 = require("./649179.js"),
  Chunk35125 = require("./35125.js"),
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
  } = o.Z.useExperiment({
    guildId: n.id,
    location: "guild_settings"
  }, {
    disable: null == n,
    autoTrackExposure: false
  }), x = i.useCallback((e, t) => {
    let r = (0, l.mB)(n.systemChannelFlags, e, t);
    u.Z.updateGuild({
      systemChannelFlags: r
    })
  }, [n.systemChannelFlags]), b = i.useCallback(e => x(d.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [x]), j = i.useCallback(e => x(d.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [x]), _ = i.useCallback(e => x(d.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS, !e), [x]), v = i.useCallback(e => x(d.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [x]), O = i.useCallback(e => x(d.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [x]), C = i.useCallback(e => x(d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [x]), y = i.useCallback(e => x(d.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [x]), N = i.useCallback(e => x(d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [x]), E = null != (t = n.systemChannelId) ? t : m, I = (0, c.eI)(n), S = I || (0, l.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS), T = I || (0, l.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.rsf, {
      label: g.intl.string(g.t["+f0bXQ"]),
      checked: !(0, l.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
      onChange: b,
      disabled: !p || E === m
    }), (0, r.jsx)(s.rsf, {
      label: g.intl.string(g.t["72k7jf"]),
      checked: !(0, l.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
      onChange: O,
      disabled: !p || E === m
    }), (0, r.jsx)(s.rsf, {
      label: g.intl.string(g.t["2L8NCN"]),
      checked: !(0, l.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
      onChange: j,
      disabled: !p || E === m
    }), (0, r.jsx)(s.rsf, {
      label: g.intl.string(g.t["NvnW+V"]),
      checked: !(0, l.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
      onChange: v,
      disabled: !p || E === m
    }), h && (0, r.jsx)(s.rsf, {
      label: g.intl.string(g.t["CLCoc+"]),
      checked: !(0, l.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS),
      onChange: _,
      disabled: !p || E === m
    }), S && (0, r.jsx)(s.rsf, {
      label: g.intl.string(g.t["54n19R"]),
      checked: !(0, l.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
      onChange: C,
      disabled: !p || E === m
    }), T && (0, r.jsx)(s.rsf, {
      label: g.intl.string(g.t["IhF5d+"]),
      checked: !(0, l.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
      onChange: N,
      disabled: !p || E === m
    }), f && (0, r.jsx)(s.rsf, {
      label: g.intl.string(g.t["3yOX1/"]),
      badge: "beta",
      checked: !(0, l.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
      onChange: y,
      disabled: !p || E === m
    })]
  })
}