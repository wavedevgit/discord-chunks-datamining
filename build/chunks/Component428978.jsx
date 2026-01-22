/** Chunk was on 51354 **/
/** chunk id: 428978, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Zq: () => d,
  jD: () => h
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk625142 = require("./625142.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  let {
    isActive: e,
    isUserLurking: n,
    rsvped: l,
    canInvite: d,
    isChannelPublic: h = true,
    entityType: v,
    onJoinClick: m,
    onRsvpClick: g,
    onStartClick: f,
    onInviteClick: x,
    onEndClick: p,
    onJoinGuildClick: j,
    isJoined: A = false,
    channel: y
  } = t, E = true !== m, b = function(t) {
    let {
      onInviteClick: e,
      canInvite: n,
      isChannelPublic: l,
      channel: c
    } = t, d = new r.Ep, [h, v] = i.useState(false);
    return ((0, a.Ay)(() => () => {
      d.stop()
    }), null == e) ? null : (0, u.y)(null != n && n, null != l && l, c) ? {
      variant: "secondary",
      icon: s.liv,
      onClick: e,
      text: o.intl.string(o.t.RDE0Sc),
      "aria-label": o.intl.string(o.t.Ej3B3Y)
    } : {
      variant: "secondary",
      icon: h ? s.A9s : s.qYV,
      onClick: t => {
        null != e && e(t), v(true), d.start(1e3, () => v(false))
      },
      disabled: h,
      text: h ? o.intl.string(o.t.t5VZ88) : o.intl.string(o.t.WqhZss),
      "aria-label": o.intl.string(o.t.WqhZss)
    }
  }({
    onInviteClick: x,
    canInvite: d,
    isChannelPublic: h,
    channel: y
  }), _ = [];
  if (null != b && _.push(b), e && v !== c.Ps.EXTERNAL && _.push({
      variant: "active",
      size: "sm",
      onClick: m,
      text: function(t) {
        let {
          isJoined: e,
          canJoin: n,
          isVoiceChannel: l
        } = t;
        return n ? e ? o.intl.string(o.t.aW2YlJ) : l ? o.intl.string(o.t.nxUtoQ) : o.intl.string(o.t.ZYO5OK) : o.intl.string(o.t.TVBCKZ)
      }({
        isJoined: A,
        canJoin: E,
        isVoiceChannel: v === c.Ps.VOICE
      }),
      disabled: !E
    }), n && null != j && _.push({
      variant: "active",
      size: "sm",
      text: o.intl.string(o.t["2BP08E"]),
      onClick: j
    }), !n && !e && null != g) {
    let t = l && !n;
    _.push({
      variant: t ? "active" : "secondary",
      size: "sm",
      icon: t ? s.A9s : s.XFE,
      text: o.intl.string(o.t.DlcqlU),
      onClick: g,
      disabled: n
    })
  }
  return e || null == f || _.push({
    variant: "primary",
    size: "sm",
    onClick: f,
    text: o.intl.string(o.t.I0v0Qv)
  }), e && null != p && _.push({
    variant: "secondary",
    size: "sm",
    onClick: p,
    text: o.intl.string(o.t.qaYzPA)
  }), _
}

function h(t) {
  let {
    onClick: e
  } = t;
  return (0, l.jsx)(s.K0, {
    icon: s.jNK,
    variant: "secondary",
    "aria-label": o.intl.string(o.t.bt75uw),
    onClick: e
  })
}