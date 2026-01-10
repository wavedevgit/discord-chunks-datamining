/** Chunk was on 76246 **/
/** chunk id: 285784, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Zs: () => u,
  b5: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk118998 = require("./118998.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    isActive: n,
    isUserLurking: t,
    rsvped: a,
    canInvite: u,
    isChannelPublic: b = true,
    entityType: f,
    onJoinClick: p,
    onRsvpClick: h,
    onStartClick: m,
    onInviteClick: g,
    onEndClick: v,
    onJoinGuildClick: x,
    isJoined: _ = false,
    channel: C
  } = e, j = true !== p, k = function(e) {
    let {
      onInviteClick: n,
      canInvite: t,
      isChannelPublic: a,
      channel: s
    } = e, u = new r.V7, [b, f] = i.useState(false);
    return ((0, o.ZP)(() => () => {
      u.stop()
    }), null == n) ? null : (0, c.T)(null != t && t, null != a && a, s) ? {
      variant: "secondary",
      icon: l.aAc,
      onClick: n,
      text: d.intl.string(d.t.RDE0Sc),
      "aria-label": d.intl.string(d.t.Ej3B3Y)
    } : {
      variant: "secondary",
      icon: b ? l.dz2 : l.xPt,
      onClick: e => {
        null != n && n(e), f(true), u.start(1e3, () => f(false))
      },
      disabled: b,
      text: b ? d.intl.string(d.t.t5VZ88) : d.intl.string(d.t.WqhZss),
      "aria-label": d.intl.string(d.t.WqhZss)
    }
  }({
    onInviteClick: g,
    canInvite: u,
    isChannelPublic: b,
    channel: C
  }), I = [];
  if (null != k && I.push(k), n && f !== s.WX.EXTERNAL && I.push({
      variant: "active",
      size: "sm",
      onClick: p,
      text: function(e) {
        let {
          isJoined: n,
          canJoin: t,
          isVoiceChannel: a
        } = e;
        return t ? n ? d.intl.string(d.t.aW2YlJ) : a ? d.intl.string(d.t.nxUtoQ) : d.intl.string(d.t.ZYO5OK) : d.intl.string(d.t.TVBCKZ)
      }({
        isJoined: _,
        canJoin: j,
        isVoiceChannel: f === s.WX.VOICE
      }),
      disabled: !j
    }), t && null != x && I.push({
      variant: "active",
      size: "sm",
      text: d.intl.string(d.t["2BP08E"]),
      onClick: x
    }), !t && !n && null != h) {
    let e = a && !t;
    I.push({
      variant: e ? "active" : "secondary",
      size: "sm",
      icon: e ? l.dz2 : l.Dkj,
      text: d.intl.string(d.t.DlcqlU),
      onClick: h,
      disabled: t
    })
  }
  return n || null == m || I.push({
    variant: "primary",
    size: "sm",
    onClick: m,
    text: d.intl.string(d.t.I0v0Qv)
  }), n && null != v && I.push({
    variant: "secondary",
    size: "sm",
    onClick: v,
    text: d.intl.string(d.t.qaYzPA)
  }), I
}

function b(e) {
  let {
    onClick: n
  } = e;
  return (0, a.jsx)(l.hU, {
    icon: l.xhG,
    variant: "secondary",
    "aria-label": d.intl.string(d.t.bt75uw),
    onClick: n
  })
}