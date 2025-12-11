/** Chunk was on 51235 **/
/** chunk id: 441248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk40614 = require("./40614.jsx"),
  Chunk736409 = require("./736409.jsx"),
  Chunk12694 = require("./12694.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk115530 = require("./115530.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk867751 = require("./867751.js");

function b(e) {
  let {
    name: t,
    applicationId: n
  } = e, i = (0, f.Z)({
    location: "ActivityPanelGameCard",
    applicationId: n,
    source: d.m1.RtcPanel,
    trackEntryPointImpression: true
  });
  return (0, r.jsx)(a.P3F, {
    onClick: i,
    className: l()(null != i && g.clickableGameName),
    children: (0, r.jsx)(h.Z, {
      className: g.gameName,
      children: t
    })
  })
}

function m(e) {
  let {
    isStreaming: t,
    application: n,
    game: i,
    onClickNotSharing: l,
    isForceShowSharingPopout: d,
    setIsForceShowSharingPopout: f,
    ref: h,
    popoutTargetRef: m
  } = e, y = null != n ? n.name : null != i ? i.name : p.intl.string(p.t["UQMV/E"]);
  return (0, c.V)(), (0, r.jsxs)("div", {
    className: g.gameWrapper,
    children: [(0, r.jsxs)("div", {
      className: g.gameIconWrapper,
      children: [(0, r.jsx)(u.Z, {
        className: g.gameIcon,
        game: n,
        pid: null == i ? true : i.pid,
        ref: h
      }), t ? (0, r.jsx)(a.Odl, {
        size: "md",
        color: "currentColor",
        className: g.liveBadge
      }) : null]
    }), (0, r.jsx)(s.j, {
      popoutTargetRef: m,
      isForceShowSharingPopout: d,
      setIsForceShowSharingPopout: f,
      children: (0, r.jsxs)("div", {
        className: g.info,
        children: [null != y ? (0, r.jsx)(b, {
          name: y,
          applicationId: null == n ? true : n.id
        }) : null, (0, r.jsx)(o.V, {
          onClick: l
        })]
      })
    })]
  })
}