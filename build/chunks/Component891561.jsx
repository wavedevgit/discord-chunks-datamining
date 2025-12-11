/** Chunk was on 78431 **/
/** chunk id: 891561, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d,
  s: () => a
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk333866 = require("./333866.js");
let s = Chunk473749.createContext(true);

function a() {
  let e = Chunk473749.useContext(s);
  return l()(null != module, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), module
}

function d(e) {
  let {
    children: t,
    defaultSortOption: r = c.zJ.NEWEST_ARRIVALS
  } = e, [o, l] = i.useState(r);
  return (0, n.jsx)(s.Provider, {
    value: {
      sortOption: o,
      setSortOption: l,
      onReset: () => l(r)
    },
    children: t
  })
}