/** Chunk was on 81899 **/
/** chunk id: 428978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Zq: () => u,
  jD: () => f
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk625142 = require("./625142.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    isActive: t,
    isUserLurking: n,
    rsvped: l,
    canInvite: u,
    isChannelPublic: f = true,
    entityType: b,
    onJoinClick: _,
    onRsvpClick: m,
    onStartClick: h,
    onInviteClick: x,
    onEndClick: v,
    onJoinGuildClick: g,
    isJoined: p = false,
    channel: j
  } = e, A = true !== _, y = function(e) {
    let {
      onInviteClick: t,
      canInvite: n,
      isChannelPublic: l,
      channel: d
    } = e, u = new c.Ep, [f, b] = a.useState(false);
    return ((0, r.Ay)(() => () => {
      u.stop()
    }), null == t) ? null : (0, s.y)(null != n && n, null != l && l, d) ? {
      variant: "secondary",
      icon: i.liv,
      onClick: t,
      text: o.intl.string(o.t.RDE0Sc),
      "aria-label": o.intl.string(o.t.Ej3B3Y)
    } : {
      variant: "secondary",
      icon: f ? i.A9s : i.qYV,
      onClick: e => {
        null != t && t(e), b(true), u.start(1e3, () => b(false))
      },
      disabled: f,
      text: f ? o.intl.string(o.t.t5VZ88) : o.intl.string(o.t.WqhZss),
      "aria-label": o.intl.string(o.t.WqhZss)
    }
  }({
    onInviteClick: x,
    canInvite: u,
    isChannelPublic: f,
    channel: j
  }), k = [];
  if (null != y && k.push(y), t && b !== d.Ps.EXTERNAL && k.push({
      variant: "active",
      size: "sm",
      onClick: _,
      text: function(e) {
        let {
          isJoined: t,
          canJoin: n,
          isVoiceChannel: l
        } = e;
        return n ? t ? o.intl.string(o.t.aW2YlJ) : l ? o.intl.string(o.t.nxUtoQ) : o.intl.string(o.t.ZYO5OK) : o.intl.string(o.t.TVBCKZ)
      }({
        isJoined: p,
        canJoin: A,
        isVoiceChannel: b === d.Ps.VOICE
      }),
      disabled: !A
    }), n && null != g && k.push({
      variant: "active",
      size: "sm",
      text: o.intl.string(o.t["2BP08E"]),
      onClick: g
    }), !n && !t && null != m) {
    let e = l && !n;
    k.push({
      variant: e ? "active" : "secondary",
      size: "sm",
      icon: e ? i.A9s : i.XFE,
      text: o.intl.string(o.t.DlcqlU),
      onClick: m,
      disabled: n
    })
  }
  return t || null == h || k.push({
    variant: "primary",
    size: "sm",
    onClick: h,
    text: o.intl.string(o.t.I0v0Qv)
  }), t && null != v && k.push({
    variant: "secondary",
    size: "sm",
    onClick: v,
    text: o.intl.string(o.t.qaYzPA)
  }), k
}

function f(e) {
  let {
    onClick: t
  } = e;
  return (0, l.jsx)(i.K0, {
    icon: i.jNK,
    variant: "secondary",
    "aria-label": o.intl.string(o.t.bt75uw),
    onClick: t
  })
}