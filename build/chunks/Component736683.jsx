/** Chunk was on 1272 **/
/** chunk id: 736683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u,
  j: () => d
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk786089 = require("./786089.jsx"),
  Chunk383747 = require("./383747.jsx"),
  Chunk710914 = require("./710914.jsx"),
  Chunk741775 = require("./741775.js");

function u(e) {
  let {
    onSelectTab: t
  } = e, {
    claimedQuests: n,
    isFetchingClaimedQuests: o
  } = (0, l.eN)();
  return o && 0 === n.length ? (0, r.jsx)(i.$jN, {
    className: c.spinner
  }) : 0 === n.length ? (0, r.jsx)(s.Z, {
    onClick: () => t(l.e5.ALL)
  }) : (0, r.jsx)("div", {
    className: c.gridContainer,
    children: [...n].sort((e, t) => {
      var n, r, i, l;
      return (null != (i = null == (n = t.userStatus) ? true : n.claimedAt) ? i : "").localeCompare(null != (l = null == (r = e.userStatus) ? true : r.claimedAt) ? l : "")
    }).map(e => (0, r.jsx)(a.Z, {
      quest: e
    }, e.id))
  })
}

function d(e) {
  let {
    onSelectTab: t
  } = e, {
    quests: n,
    isFetchingCurrentQuests: a,
    hasFetched: u
  } = (0, l.bA)(l.e5.CLAIMED);
  return a && 0 === n.length ? (0, r.jsx)(i.$jN, {
    className: c.spinner
  }) : 0 === n.length ? (0, r.jsx)(s.Z, {
    onClick: () => t(l.e5.ALL)
  }) : (0, r.jsx)(o.Z, {
    quests: n,
    isFetching: a,
    hasFetched: u
  })
}