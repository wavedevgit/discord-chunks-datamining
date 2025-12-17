/** Chunk was on 77069 **/
/** chunk id: 61512, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  G: () => c
});
var Chunk323472 = require("./323472.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk291011 = require("./291011.js"),
  Chunk392231 = require("./392231.js"),
  Chunk271524 = require("./271524.js"),
  Chunk388032 = require("./388032.jsx");
let S = Chunk313789.n.NOTIFICATIONS_ADVANCED_ACCORDION,
  T = (0, Chunk509613.CB)(S, {
    useTitle: t => t ? o.intl.string(o.t.RyimDk) : o.intl.string(o.t.CUICbO),
    useCollapsedSubtitle: function() {
      return (0, Chunk323472.u)(S, {
        formatter: t => {
          let {
            title: e,
            index: n
          } = t;
          return "string" != typeof e ? e : 0 === n ? "".concat(e.charAt(0).toLocaleUpperCase()).concat(e.slice(1).toLocaleLowerCase()) : e.toLocaleLowerCase()
        }
      })
    },
    buildLayout: () => [Chunk291011.i, Chunk392231.F, Chunk271524.l]
  }),
  c = (0, Chunk509613.k4)(Chunk313789.n.NOTIFICATIONS_ADVANCED_CATEGORY, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["31DySj"]),
    buildLayout: () => [T]
  })