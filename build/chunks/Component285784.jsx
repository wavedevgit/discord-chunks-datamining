/** Chunk was on 28099 **/
/** chunk id: 285784, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Zs: () => d,
  b5: () => u
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    isActive: n,
    isUserLurking: t,
    rsvped: i,
    canInvite: d,
    isChannelPublic: u = true,
    entityType: _,
    onJoinClick: b,
    onRsvpClick: p,
    onStartClick: h,
    onInviteClick: f,
    onEndClick: g,
    onJoinGuildClick: m,
    isJoined: v = false
  } = e, x = true !== b, C = function(e) {
    let {
      onInviteClick: n,
      canInvite: t,
      isChannelPublic: i
    } = e, c = new a.V7, [d, u] = r.useState(false);
    return ((0, o.ZP)(() => () => {
      c.stop()
    }), null == n) ? null : t && i ? {
      variant: "secondary",
      icon: l.aAc,
      onClick: n,
      text: s.intl.string(s.t.RDE0SU),
      "aria-label": s.intl.string(s.t.Ej3B3d)
    } : {
      variant: "secondary",
      icon: d ? l.dz2 : l.xPt,
      onClick: e => {
        null != n && n(e), u(true), c.start(1e3, () => u(false))
      },
      disabled: d,
      text: d ? s.intl.string(s.t["t5VZ8/"]) : s.intl.string(s.t.RDE0SU),
      "aria-label": s.intl.string(s.t.Ej3B3d)
    }
  }({
    onInviteClick: f,
    canInvite: d,
    isChannelPublic: u
  }), j = [];
  if (null != C && j.push(C), n && _ !== c.WX.EXTERNAL && j.push({
      variant: "active",
      size: "sm",
      onClick: b,
      text: function(e) {
        let {
          isJoined: n,
          canJoin: t,
          isVoiceChannel: i
        } = e;
        return t ? n ? s.intl.string(s.t.aW2YlJ) : i ? s.intl.string(s.t.nxUtoa) : s.intl.string(s.t.ZYO5OD) : s.intl.string(s.t.TVBCKS)
      }({
        isJoined: v,
        canJoin: x,
        isVoiceChannel: _ === c.WX.VOICE
      }),
      disabled: !x
    }), t && null != m && j.push({
      variant: "active",
      size: "sm",
      text: s.intl.string(s.t["2BP08P"]),
      onClick: m
    }), !t && !n && null != p) {
    let e = i && !t;
    j.push({
      variant: e ? "active" : "secondary",
      size: "sm",
      icon: e ? l.dz2 : l.Dkj,
      text: s.intl.string(s.t.DlcqlZ),
      onClick: p,
      disabled: t
    })
  }
  return n || null == h || j.push({
    variant: "primary",
    size: "sm",
    onClick: h,
    text: s.intl.string(s.t.I0v0Qk)
  }), n && null != g && j.push({
    variant: "secondary",
    size: "sm",
    onClick: g,
    text: s.intl.string(s.t.qaYzPD)
  }), j
}

function u(e) {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(l.hU, {
    icon: l.xhG,
    variant: "secondary",
    "aria-label": s.intl.string(s.t.bt75u7),
    onClick: n
  })
}