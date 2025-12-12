/** Chunk was on 97476 **/
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
    onJoinClick: h,
    onRsvpClick: p,
    onStartClick: v,
    onInviteClick: m,
    onEndClick: g,
    onJoinGuildClick: x,
    isJoined: _ = false,
    channel: C
  } = e, I = true !== h, k = function(e) {
    let {
      onInviteClick: n,
      canInvite: t,
      isChannelPublic: a,
      channel: d
    } = e, u = new r.V7, [b, f] = i.useState(false);
    return ((0, c.ZP)(() => () => {
      u.stop()
    }), null == n) ? null : (0, o.T)(null != t && t, null != a && a, d) ? {
      variant: "secondary",
      icon: l.aAc,
      onClick: n,
      text: s.intl.string(s.t.RDE0Sc),
      "aria-label": s.intl.string(s.t.Ej3B3Y)
    } : {
      variant: "secondary",
      icon: b ? l.dz2 : l.xPt,
      onClick: e => {
        null != n && n(e), f(true), u.start(1e3, () => f(false))
      },
      disabled: b,
      text: b ? s.intl.string(s.t.t5VZ88) : s.intl.string(s.t.WqhZss),
      "aria-label": s.intl.string(s.t.WqhZss)
    }
  }({
    onInviteClick: m,
    canInvite: u,
    isChannelPublic: b,
    channel: C
  }), Z = [];
  if (null != k && Z.push(k), n && f !== d.WX.EXTERNAL && Z.push({
      variant: "active",
      size: "sm",
      onClick: h,
      text: function(e) {
        let {
          isJoined: n,
          canJoin: t,
          isVoiceChannel: a
        } = e;
        return t ? n ? s.intl.string(s.t.aW2YlJ) : a ? s.intl.string(s.t.nxUtoQ) : s.intl.string(s.t.ZYO5OK) : s.intl.string(s.t.TVBCKZ)
      }({
        isJoined: _,
        canJoin: I,
        isVoiceChannel: f === d.WX.VOICE
      }),
      disabled: !I
    }), t && null != x && Z.push({
      variant: "active",
      size: "sm",
      text: s.intl.string(s.t["2BP08E"]),
      onClick: x
    }), !t && !n && null != p) {
    let e = a && !t;
    Z.push({
      variant: e ? "active" : "secondary",
      size: "sm",
      icon: e ? l.dz2 : l.Dkj,
      text: s.intl.string(s.t.DlcqlU),
      onClick: p,
      disabled: t
    })
  }
  return n || null == v || Z.push({
    variant: "primary",
    size: "sm",
    onClick: v,
    text: s.intl.string(s.t.I0v0Qv)
  }), n && null != g && Z.push({
    variant: "secondary",
    size: "sm",
    onClick: g,
    text: s.intl.string(s.t.qaYzPA)
  }), Z
}

function b(e) {
  let {
    onClick: n
  } = e;
  return (0, a.jsx)(l.hU, {
    icon: l.xhG,
    variant: "secondary",
    "aria-label": s.intl.string(s.t.bt75uw),
    onClick: n
  })
}