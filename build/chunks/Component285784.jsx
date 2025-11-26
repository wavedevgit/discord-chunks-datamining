/** Chunk was on 98878 **/
/** chunk id: 285784, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Zs: () => u,
  b5: () => _
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
    rsvped: i,
    canInvite: u,
    isChannelPublic: _ = true,
    entityType: p,
    onJoinClick: f,
    onRsvpClick: h,
    onStartClick: g,
    onInviteClick: m,
    onEndClick: v,
    onJoinGuildClick: b,
    isJoined: x = false,
    channel: C
  } = e, j = true !== f, k = function(e) {
    let {
      onInviteClick: n,
      canInvite: t,
      isChannelPublic: i,
      channel: s
    } = e, u = new a.V7, [_, p] = r.useState(false);
    return ((0, o.ZP)(() => () => {
      u.stop()
    }), null == n) ? null : (0, c.T)(null != t && t, null != i && i, s) ? {
      variant: "secondary",
      icon: l.aAc,
      onClick: n,
      text: d.intl.string(d.t.RDE0Sc),
      "aria-label": d.intl.string(d.t.Ej3B3Y)
    } : {
      variant: "secondary",
      icon: _ ? l.dz2 : l.xPt,
      onClick: e => {
        null != n && n(e), p(true), u.start(1e3, () => p(false))
      },
      disabled: _,
      text: _ ? d.intl.string(d.t.t5VZ88) : d.intl.string(d.t.WqhZss),
      "aria-label": d.intl.string(d.t.WqhZss)
    }
  }({
    onInviteClick: m,
    canInvite: u,
    isChannelPublic: _,
    channel: C
  }), I = [];
  if (null != k && I.push(k), n && p !== s.WX.EXTERNAL && I.push({
      variant: "active",
      size: "sm",
      onClick: f,
      text: function(e) {
        let {
          isJoined: n,
          canJoin: t,
          isVoiceChannel: i
        } = e;
        return t ? n ? d.intl.string(d.t.aW2YlJ) : i ? d.intl.string(d.t.nxUtoQ) : d.intl.string(d.t.ZYO5OK) : d.intl.string(d.t.TVBCKZ)
      }({
        isJoined: x,
        canJoin: j,
        isVoiceChannel: p === s.WX.VOICE
      }),
      disabled: !j
    }), t && null != b && I.push({
      variant: "active",
      size: "sm",
      text: d.intl.string(d.t["2BP08E"]),
      onClick: b
    }), !t && !n && null != h) {
    let e = i && !t;
    I.push({
      variant: e ? "active" : "secondary",
      size: "sm",
      icon: e ? l.dz2 : l.Dkj,
      text: d.intl.string(d.t.DlcqlU),
      onClick: h,
      disabled: t
    })
  }
  return n || null == g || I.push({
    variant: "primary",
    size: "sm",
    onClick: g,
    text: d.intl.string(d.t.I0v0Qv)
  }), n && null != v && I.push({
    variant: "secondary",
    size: "sm",
    onClick: v,
    text: d.intl.string(d.t.qaYzPA)
  }), I
}

function _(e) {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(l.hU, {
    icon: l.xhG,
    variant: "secondary",
    "aria-label": d.intl.string(d.t.bt75uw),
    onClick: n
  })
}