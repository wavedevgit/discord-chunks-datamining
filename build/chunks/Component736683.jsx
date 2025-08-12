/** Chunk was on 1272 **/
/** chunk id: 736683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u,
  j: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk786089 = require("./786089.jsx"),
  Chunk383747 = require("./383747.jsx"),
  Chunk710914 = require("./710914.jsx"),
  Chunk572791 = require("./572791.js");

function u(e) {
  let {
    onSelectTab: t
  } = e, {
    claimedQuests: n,
    isFetchingClaimedQuests: s
  } = (0, l.eN)();
  return s && 0 === n.length ? (0, r.jsx)(i.$jN, {
    className: c.spinner
  }) : 0 === n.length ? (0, r.jsx)(o.Z, {
    onClick: () => t(l.e5.ALL)
  }) : (0, r.jsx)("div", {
    className: c.gridContainer,
    children: n.map(e => (0, r.jsx)(a.Z, {
      quest: e
    }, e.id))
  })
}

function d(e) {
  let {
    onSelectTab: t
  } = e, {
    quests: n,
    isFetchingCurrentQuests: a
  } = (0, l.bA)(l.e5.CLAIMED);
  return a && 0 === n.length ? (0, r.jsx)(i.$jN, {
    className: c.spinner
  }) : 0 === n.length ? (0, r.jsx)(o.Z, {
    onClick: () => t(l.e5.ALL)
  }) : (0, r.jsx)(s.Z, {
    quests: n,
    isFetching: a
  })
}