/** Chunk was on 22347 **/
/** chunk id: 187443, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  u: () => s
}), require("./539854.js"), require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk285784 = require("./285784.js"),
  Chunk388032 = require("./388032.js");

function s(t) {
  let {
    isActive: e,
    isUserLurking: n,
    rsvped: s,
    onRsvpClick: a,
    onGoToGuildClick: u,
    isDetailsView: c = false,
    isMember: o,
    onJoinGuildClick: d,
    guildName: h,
    onInviteClick: g,
    canInvite: m,
    isChannelPublic: p
  } = t, v = (0, i.Ns)({
    onInviteClick: g,
    canInvite: m,
    isChannelPublic: p
  }), f = [];
  if (o && null != v && f.push(v), o && !n && !e && null != a) {
    let t = s && !n;
    f.push({
      variant: t ? "active" : "secondary",
      size: "sm",
      icon: t ? l.dz2 : l.Dkj,
      text: r.intl.string(r.t.DlcqlZ),
      onClick: a,
      disabled: n
    })
  }
  return o && !n && (!c || e) && f.push({
    variant: "primary",
    size: "sm",
    onClick: u,
    text: r.intl.string(r.t["N+TB5u"])
  }), o || f.push({
    variant: "primary",
    size: "sm",
    onClick: d,
    text: r.intl.format(r.t["4BiO8f"], {
      guildName: h
    })
  }), f
}