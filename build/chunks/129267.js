/** Chunk was on 28979 **/
/** chunk id: 129267, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  X: () => d
});
var Chunk419117 = require("./419117.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk931852 = require("./931852.js"),
  Chunk528237 = require("./528237.js"),
  Chunk693804 = require("./693804.js"),
  Chunk985018 = require("./985018.jsx");
let T = Chunk780964.X.NOTIFICATIONS_ADVANCED_ACCORDION,
  A = (0, Chunk419954.bd)(T, {
    useTitle: t => t ? o.intl.string(o.t.RyimDk) : o.intl.string(o.t.CUICbO),
    useCollapsedSubtitle: function() {
      return (0, n.A)(T, {
        formatter: t => {
          let {
            title: e,
            index: i
          } = t;
          return "string" != typeof e ? e : 0 === i ? "".concat(e.charAt(0).toLocaleUpperCase()).concat(e.slice(1).toLocaleLowerCase()) : e.toLocaleLowerCase()
        }
      })
    },
    buildLayout: () => [r.z, u.m, a.j]
  }),
  d = (0, Chunk419954.zZ)(Chunk780964.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
    useTitle: () => o.intl.string(o.t["31DySj"]),
    buildLayout: () => [A]
  })