/** Chunk was on 17534 **/
/** chunk id: 535111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk275667 = require("./275667.jsx"),
  Chunk576437 = require("./576437.jsx"),
  Chunk408486 = require("./408486.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk485599 = require("./485599.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk237235 = require("./237235.js");

function m(e) {
  let {
    name: t,
    applicationId: n
  } = e, l = (0, h.A)({
    location: "ActivityPanelGameCard",
    applicationId: n,
    source: d.Ob.RtcPanel,
    trackEntryPointImpression: true
  });
  return (0, r.jsx)(s.DUT, {
    onClick: l,
    className: i()(null != l && f.On),
    children: (0, r.jsx)(p.A, {
      className: f.mO,
      children: t
    })
  })
}

function b(e) {
  let {
    isStreaming: t,
    application: n,
    game: l,
    onClickNotSharing: i,
    isForceShowSharingPopout: d,
    setIsForceShowSharingPopout: h,
    ref: p,
    popoutTargetRef: b
  } = e, A = null != n ? n.name : null != l ? l.name : g.intl.string(g.t["UQMV/E"]);
  return (0, c.z)(), (0, r.jsxs)("div", {
    className: f.cm,
    children: [(0, r.jsxs)("div", {
      className: f.f9,
      children: [(0, r.jsx)(u.A, {
        className: f.Gt,
        game: n,
        pid: null == l ? true : l.pid,
        ref: p
      }), t ? (0, r.jsx)(s.npA, {
        size: "md",
        color: "currentColor",
        className: f.it
      }) : null]
    }), (0, r.jsx)(o.M, {
      popoutTargetRef: b,
      isForceShowSharingPopout: d,
      setIsForceShowSharingPopout: h,
      children: (0, r.jsxs)("div", {
        className: f.pq,
        children: [null != A ? (0, r.jsx)(m, {
          name: A,
          applicationId: null == n ? true : n.id
        }) : null, (0, r.jsx)(a.G, {
          onClick: i
        })]
      })
    })]
  })
}