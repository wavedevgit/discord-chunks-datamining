/** Chunk was on 26628 **/
/** chunk id: 441248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk727196 = require("./727196.js");

function m(e) {
  let {
    name: t,
    applicationId: n
  } = e, i = (0, h.Z)({
    location: "ActivityPanelGameCard",
    applicationId: n,
    source: d.m1.RtcPanel,
    trackEntryPointImpression: true
  });
  return (0, r.jsx)(o.P3F, {
    onClick: i,
    className: l()(null != i && g.clickableGameName),
    children: (0, r.jsx)(p.Z, {
      className: g.gameName,
      children: t
    })
  })
}

function b(e) {
  let {
    isStreaming: t,
    application: n,
    game: i,
    onClickNotSharing: l,
    isForceShowSharingPopout: d,
    setIsForceShowSharingPopout: h
  } = e, p = null != n ? n.name : null != i ? i.name : f.intl.string(f.t["UQMV/P"]);
  return (0, c.V)(), (0, r.jsxs)("div", {
    className: g.gameWrapper,
    children: [(0, r.jsxs)("div", {
      className: g.gameIconWrapper,
      children: [(0, r.jsx)(u.Z, {
        className: g.gameIcon,
        game: n,
        pid: null == i ? true : i.pid
      }), t ? (0, r.jsx)(o.Odl, {
        size: "md",
        color: "currentColor",
        className: g.liveBadge
      }) : null]
    }), (0, r.jsx)(a.j, {
      isForceShowSharingPopout: d,
      setIsForceShowSharingPopout: h,
      children: (0, r.jsxs)("div", {
        className: g.info,
        children: [null != p ? (0, r.jsx)(m, {
          name: p,
          applicationId: null == n ? true : n.id
        }) : null, (0, r.jsx)(s.V, {
          onClick: l
        })]
      })
    })]
  })
}