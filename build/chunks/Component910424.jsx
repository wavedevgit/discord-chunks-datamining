/** Chunk was on web.js **/
/** chunk id: 910424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572691 = require("./572691.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk595816 = require("./595816.js"),
  Chunk102172 = require("./102172.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let {
    isCurrentUser: t,
    applicationStream: n,
    onAction: E
  } = e, {
    defaultWatchMultipleStreams: b
  } = (0, u.P)({
    location: "WatchStreamButton"
  }), {
    activeStream: y,
    watchingOtherStream: O
  } = (0, i.cj)([p.Z], () => ({
    activeStream: p.Z.getActiveStreamForApplicationStream(n),
    watchingOtherStream: null != n && p.Z.getAllActiveStreamsForChannel(n.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== n.ownerId
    }).length > 0
  })), v = (0, i.e7)([_.Z], () => _.Z.getChannel(null == n ? true : n.channelId)), [S, I] = (0, d.wq)(v), T = (0, f.Aq)(), C = null != y && null != n && y.state !== h.jm8.ENDED && y.ownerId === n.ownerId, A = e => {
    null != n && (null == E || E(), l.default.selectVoiceChannel(n.channelId), C || (0, c.iV)(n, {
      forceMultiple: e
    }), T.dispatch(h.CkL.POPOUT_CLOSE), m.S.dispatch(h.CkL.MODAL_CLOSE), s.Z.popAll())
  };
  if (null == n) return null;
  let N = (0, d.P9)(I);
  return t ? N = g.intl.string(g.t.XvBdeT) : C && (N = g.intl.string(g.t["JH1SJ+"])), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Button, {
      size: "sm",
      variant: C ? "secondary" : "active",
      icon: a.hGI,
      text: N,
      disabled: t || C || !S,
      onClick: () => A(false),
      fullWidth: true
    }), !O || C || b ? null : (0, r.jsx)(o.u, {
      text: g.intl.string(g.t.wCrzut),
      children: (0, r.jsx)(a.hU, {
        variant: "secondary",
        size: "sm",
        icon: a.OgY,
        "aria-label": g.intl.string(g.t.wCrzut),
        onClick: () => {
          A(true)
        }
      })
    })]
  })
}