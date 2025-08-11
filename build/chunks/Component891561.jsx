/** Chunk was on 78431 **/
/** chunk id: 891561, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d,
  s: () => a
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk333866 = require("./333866.js");
let c = Chunk73800.createContext(true);

function a() {
  let e = Chunk73800.useContext(c);
  return l()(null != module, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), module
}

function d(e) {
  let {
    children: t,
    defaultSortOption: r = s.zJ.NEWEST_ARRIVALS
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