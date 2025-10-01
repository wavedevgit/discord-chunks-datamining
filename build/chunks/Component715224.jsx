/** Chunk was on 29679 **/
/** chunk id: 715224, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk890477 = require("./890477.js"),
  Chunk649179 = require("./649179.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk35125 = require("./35125.js"),
  Chunk630388 = require("./630388.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk752830 = require("./752830.js");
let f = "NO_SYSTEM_CHANNEL";

function h(e) {
  var t;
  let {
    guild: n,
    canManageGuild: h,
    switchClassName: x
  } = e, {
    enableDeadchat: b
  } = s.Z.useExperiment({
    guildId: n.id,
    location: "guild_settings"
  }, {
    disable: null == n,
    autoTrackExposure: true
  }), {
    enabled: j
  } = a.Z.useExperiment({
    guildId: n.id,
    location: "guild_settings"
  }, {
    disable: null == n,
    autoTrackExposure: false
  }), v = i.useCallback((e, t) => {
    let r = (0, d.mB)(n.systemChannelFlags, e, t);
    u.Z.updateGuild({
      systemChannelFlags: r
    })
  }, [n.systemChannelFlags]), _ = i.useCallback(e => v(m.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [v]), O = i.useCallback(e => v(m.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [v]), y = i.useCallback(e => v(m.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS, !e), [v]), C = i.useCallback(e => v(m.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [v]), N = i.useCallback(e => v(m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [v]), E = i.useCallback(e => v(m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [v]), I = i.useCallback(e => v(m.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [v]), S = i.useCallback(e => v(m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [v]), T = null != (t = n.systemChannelId) ? t : f, P = (0, c.eI)(n), w = P || (0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS), R = P || (0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.j7V, {
      className: x,
      onChange: _,
      value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
      hideBorder: true,
      disabled: !h || T === f,
      children: g.intl.string(g.t["+f0bXV"])
    }), (0, r.jsx)(l.j7V, {
      className: x,
      onChange: N,
      value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
      hideBorder: true,
      disabled: !h || T === f,
      children: g.intl.string(g.t["72k7jY"])
    }), (0, r.jsx)(l.j7V, {
      className: x,
      onChange: O,
      value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
      hideBorder: true,
      disabled: !h || T === f,
      children: g.intl.string(g.t["2L8NCA"])
    }), (0, r.jsx)(l.j7V, {
      className: x,
      onChange: C,
      value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
      hideBorder: true,
      disabled: !h || T === f,
      children: g.intl.string(g.t["NvnW+f"])
    }), j && (0, r.jsx)(l.j7V, {
      className: x,
      onChange: y,
      value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_UGC_ADDED_NOTIFICATIONS),
      hideBorder: true,
      disabled: !h || T === f,
      children: g.intl.string(g.t.CLCoc3)
    }), w && (0, r.jsx)(l.j7V, {
      className: x,
      onChange: E,
      value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
      hideBorder: true,
      disabled: !h || T === f,
      children: g.intl.string(g.t["54n19f"])
    }), R && (0, r.jsx)(l.j7V, {
      className: x,
      onChange: S,
      value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
      hideBorder: true,
      disabled: !h || T === f,
      children: g.intl.string(g.t.IhF5d3)
    }), b && (0, r.jsx)(l.j7V, {
      className: x,
      onChange: I,
      value: !(0, d.yE)(n.systemChannelFlags, m.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
      hideBorder: true,
      disabled: !h || T === f,
      children: (0, r.jsxs)("div", {
        className: p.flexRow,
        children: [g.intl.string(g.t["3yOX19"]), (0, r.jsx)(o.Z, {})]
      })
    })]
  })
}