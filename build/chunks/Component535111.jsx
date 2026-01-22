/** Chunk was on 97492 **/
/** chunk id: 535111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => m
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

function g(e) {
  let {
    name: t,
    applicationId: n
  } = e, l = (0, f.A)({
    location: "ActivityPanelGameCard",
    applicationId: n,
    source: d.Ob.RtcPanel,
    trackEntryPointImpression: true
  });
  return (0, r.jsx)(a.DUT, {
    onClick: l,
    className: i()(null != l && b.On),
    children: (0, r.jsx)(p.A, {
      className: b.mO,
      children: t
    })
  })
}

function m(e) {
  let {
    isStreaming: t,
    application: n,
    game: l,
    onClickNotSharing: i,
    isForceShowSharingPopout: d,
    setIsForceShowSharingPopout: f,
    ref: p,
    popoutTargetRef: m
  } = e, A = null != n ? n.name : null != l ? l.name : h.intl.string(h.t["UQMV/E"]);
  return (0, c.z)(), (0, r.jsxs)("div", {
    className: b.cm,
    children: [(0, r.jsxs)("div", {
      className: b.f9,
      children: [(0, r.jsx)(u.A, {
        className: b.Gt,
        game: n,
        pid: null == l ? true : l.pid,
        ref: p
      }), t ? (0, r.jsx)(a.npA, {
        size: "md",
        color: "currentColor",
        className: b.it
      }) : null]
    }), (0, r.jsx)(o.M, {
      popoutTargetRef: m,
      isForceShowSharingPopout: d,
      setIsForceShowSharingPopout: f,
      children: (0, r.jsxs)("div", {
        className: b.pq,
        children: [null != A ? (0, r.jsx)(g, {
          name: A,
          applicationId: null == n ? true : n.id
        }) : null, (0, r.jsx)(s.G, {
          onClick: i
        })]
      })
    })]
  })
}