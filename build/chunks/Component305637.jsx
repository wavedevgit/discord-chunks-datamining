/** Chunk was on web.js **/
/** chunk id: 305637, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk630054 = require("./630054.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk315606 = require("./315606.js"),
  Chunk279250 = require("./279250.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function E(e) {
  let {
    isCurrentUser: t,
    applicationStream: n,
    onAction: E
  } = e, {
    defaultWatchMultipleStreams: b
  } = (0, u.W)({
    location: "WatchStreamButton"
  }), {
    activeStream: y,
    watchingOtherStream: O
  } = (0, i.cf)([p.A], () => ({
    activeStream: p.A.getActiveStreamForApplicationStream(n),
    watchingOtherStream: null != n && p.A.getAllActiveStreamsForChannel(n.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== n.ownerId
    }).length > 0
  })), A = (0, i.bG)([_.A], () => _.A.getChannel(null == n ? true : n.channelId)), [v, S] = (0, d.zP)(A), I = (0, f.aL)(), T = null != y && null != n && y.state !== m.XYD.ENDED && y.ownerId === n.ownerId, C = e => {
    null != n && (null == E || E(), l.default.selectVoiceChannel(n.channelId), T || (0, c.Nl)(n, {
      forceMultiple: e
    }), I.dispatch(m.jej.POPOUT_CLOSE), h._.dispatch(m.jej.MODAL_CLOSE), o.A.popAll())
  };
  if (null == n) return null;
  let N = (0, d.CT)(S);
  return t ? N = g.intl.string(g.t.XvBdeT) : T && (N = g.intl.string(g.t["JH1SJ+"])), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Button, {
      size: "sm",
      variant: T ? "secondary" : "active",
      icon: s.Fzq,
      text: N,
      disabled: t || T || !v,
      onClick: () => C(false),
      fullWidth: true
    }), !O || T || b ? null : (0, r.jsx)(a.m, {
      text: g.intl.string(g.t.wCrzut),
      children: (0, r.jsx)(s.K0, {
        variant: "secondary",
        size: "sm",
        icon: s.vAm,
        "aria-label": g.intl.string(g.t.wCrzut),
        onClick: () => {
          C(true)
        }
      })
    })]
  })
}