/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  W: () => m
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(890477),
  l = n(688465),
  o = n(35125),
  c = n(630388),
  A = n(434404),
  d = n(981631),
  u = n(388032),
  g = n(413165);
let f = "NO_SYSTEM_CHANNEL";

function m(e) {
  var t;
  let {
    guild: n,
    canManageGuild: m,
    switchClassName: p
  } = e, {
    enableDeadchat: h
  } = a.Z.useExperiment({
    guildId: n.id,
    location: "guild_settings"
  }, {
    disable: null == n,
    autoTrackExposure: !0
  }), C = i.useCallback((e, t) => {
    let r = (0, c.mB)(n.systemChannelFlags, e, t);
    A.Z.updateGuild({
      systemChannelFlags: r
    })
  }, [n.systemChannelFlags]), b = i.useCallback(e => C(d.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e), [C]), v = i.useCallback(e => C(d.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e), [C]), x = i.useCallback(e => C(d.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e), [C]), N = i.useCallback(e => C(d.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e), [C]), j = i.useCallback(e => C(d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e), [C]), E = i.useCallback(e => C(d.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e), [C]), I = i.useCallback(e => C(d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e), [C]), O = null !== (t = n.systemChannelId) && void 0 !== t ? t : f, y = (0, o.eI)(n), w = y || (0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS), P = y || (0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.j7V, {
      className: p,
      onChange: b,
      value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
      hideBorder: !0,
      disabled: !m || O === f,
      children: u.NW.string(u.t["+f0bXV"])
    }), (0, r.jsx)(s.j7V, {
      className: p,
      onChange: N,
      value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
      hideBorder: !0,
      disabled: !m || O === f,
      children: u.NW.string(u.t["72k7jY"])
    }), (0, r.jsx)(s.j7V, {
      className: p,
      onChange: v,
      value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
      hideBorder: !0,
      disabled: !m || O === f,
      children: u.NW.string(u.t["2L8NCA"])
    }), (0, r.jsx)(s.j7V, {
      className: p,
      onChange: x,
      value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
      hideBorder: !0,
      disabled: !m || O === f,
      children: u.NW.string(u.t["NvnW+f"])
    }), w && (0, r.jsx)(s.j7V, {
      className: p,
      onChange: j,
      value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
      hideBorder: !0,
      disabled: !m || O === f,
      children: u.NW.string(u.t["54n19f"])
    }), P && (0, r.jsx)(s.j7V, {
      className: p,
      onChange: I,
      value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
      hideBorder: !0,
      disabled: !m || O === f,
      children: u.NW.string(u.t.IhF5d3)
    }), h && (0, r.jsx)(s.j7V, {
      className: p,
      onChange: E,
      value: !(0, c.yE)(n.systemChannelFlags, d.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
      hideBorder: !0,
      disabled: !m || O === f,
      children: (0, r.jsxs)("div", {
        className: g.flexRow,
        children: [u.NW.string(u.t["3yOX19"]), (0, r.jsx)(l.Z, {})]
      })
    })]
  })
}