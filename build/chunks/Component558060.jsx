/** Chunk was on 78870 **/
/** chunk id: 558060, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => d,
  R: () => a
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk284683 = require("./284683.js");
let c = Chunk64700.createContext(true);

function a() {
  let e = i.useContext(c);
  return l()(null != e, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), e
}

function d(e) {
  let {
    children: t,
    defaultSortOption: r = s.p$.NEWEST_ARRIVALS
  } = e, [o, l] = i.useState(r);
  return (0, n.jsx)(c.Provider, {
    value: {
      sortOption: o,
      setSortOption: l,
      onReset: () => l(r)
    },
    children: t
  })
}