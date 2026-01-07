/** Chunk was on 1272 **/
/** chunk id: 736683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk968843 = require("./968843.js"),
  Chunk786089 = require("./786089.jsx"),
  Chunk383747 = require("./383747.jsx"),
  Chunk799323 = require("./799323.js");

function c(e) {
  let {
    onSelectTab: t
  } = e, {
    claimedQuests: n,
    isFetchingClaimedQuests: c
  } = (0, l.eN)();
  return c && 0 === n.length ? (0, r.jsx)(i.$jN, {
    className: s.spinner
  }) : 0 === n.length ? (0, r.jsx)(o.Z, {
    onClick: () => t(l.e5.ALL)
  }) : (0, r.jsx)("div", {
    className: s.gridContainer,
    children: [...n].sort((e, t) => {
      var n, r, i, l;
      return (null != (i = null == (n = t.userStatus) ? true : n.claimedAt) ? i : "").localeCompare(null != (l = null == (r = e.userStatus) ? true : r.claimedAt) ? l : "")
    }).map(e => (0, r.jsx)(a.Z, {
      quest: e
    }, e.id))
  })
}