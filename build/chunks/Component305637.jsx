/** Chunk was on 78572 **/
/** chunk id: 305637, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  let {
    isCurrentUser: t,
    applicationStream: n,
    onAction: _
  } = e, {
    defaultWatchMultipleStreams: h
  } = (0, u.W)({
    location: "WatchStreamButton"
  }), {
    activeStream: A,
    watchingOtherStream: v
  } = (0, i.cf)([f.A], () => ({
    activeStream: f.A.getActiveStreamForApplicationStream(n),
    watchingOtherStream: null != n && f.A.getAllActiveStreamsForChannel(n.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== n.ownerId
    }).length > 0
  })), O = (0, i.bG)([m.A], () => m.A.getChannel(null == n ? true : n.channelId)), [S, j] = (0, d.zP)(O), x = (0, p.aL)(), I = null != A && null != n && A.state !== y.XYD.ENDED && A.ownerId === n.ownerId, T = e => {
    null != n && (null == _ || _(), o.default.selectVoiceChannel(n.channelId), I || (0, c.Nl)(n, {
      forceMultiple: e
    }), x.dispatch(y.jej.POPOUT_CLOSE), g._.dispatch(y.jej.MODAL_CLOSE), s.A.popAll())
  };
  if (null == n) return null;
  let P = (0, d.CT)(j);
  return t ? P = b.intl.string(b.t.XvBdeT) : I && (P = b.intl.string(b.t["JH1SJ+"])), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Button, {
      size: "sm",
      variant: I ? "secondary" : "active",
      icon: a.Fzq,
      text: P,
      disabled: t || I || !S,
      onClick: () => T(false),
      fullWidth: true
    }), !v || I || h ? null : (0, r.jsx)(l.m, {
      text: b.intl.string(b.t.wCrzut),
      children: (0, r.jsx)(a.K0, {
        variant: "secondary",
        size: "sm",
        icon: a.vAm,
        "aria-label": b.intl.string(b.t.wCrzut),
        onClick: () => {
          T(true)
        }
      })
    })]
  })
}