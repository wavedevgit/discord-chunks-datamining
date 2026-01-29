/** Chunk was on 4670 **/
/** chunk id: 129267, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  X: () => c
});
var Chunk419117 = require("./419117.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk931852 = require("./931852.js"),
  Chunk528237 = require("./528237.js"),
  Chunk693804 = require("./693804.js"),
  Chunk985018 = require("./985018.jsx");
let d = Chunk780964.X.NOTIFICATIONS_ADVANCED_ACCORDION,
  T = (0, Chunk419954.bd)(d, {
    useTitle: e => e ? o.intl.string(o.t.RyimDk) : o.intl.string(o.t.CUICbO),
    useCollapsedSubtitle: function() {
      return (0, n.A)(d, {
        formatter: e => {
          let {
            title: t,
            index: i
          } = e;
          return "string" != typeof t ? t : 0 === i ? "".concat(t.charAt(0).toLocaleUpperCase()).concat(t.slice(1).toLocaleLowerCase()) : t.toLocaleLowerCase()
        }
      })
    },
    buildLayout: () => [r.z, a.m, u.j]
  }),
  c = (0, Chunk419954.zZ)(Chunk780964.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
    useTitle: () => o.intl.string(o.t["31DySj"]),
    buildLayout: () => [T]
  })