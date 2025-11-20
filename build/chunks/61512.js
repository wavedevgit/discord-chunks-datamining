/** Chunk was on 9452 **/
/** chunk id: 61512, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk491731 = require("./491731.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk291011 = require("./291011.js"),
  Chunk392231 = require("./392231.js"),
  Chunk271524 = require("./271524.js"),
  Chunk388032 = require("./388032.jsx");
let c = Chunk313789.n.NOTIFICATIONS_ADVANCED_ACCORDION,
  E = (0, Chunk509613.CB)(c, {
    useTitle: t => t ? o.intl.string(o.t.RyimDk) : o.intl.string(o.t.CUICbO),
    useSubtitle: function() {
      return (0, Chunk491731.F)(c, {
        formatter: t => {
          let {
            title: e,
            index: n
          } = t;
          return "string" != typeof e ? e : 0 === n ? "".concat(e.charAt(0).toLocaleUpperCase()).concat(e.slice(1).toLocaleLowerCase()) : e.toLocaleLowerCase()
        }
      })
    },
    buildLayout: () => [Chunk291011.Z, Chunk392231.Z, Chunk271524.Z]
  }),
  T = (0, Chunk509613.k4)(Chunk313789.n.NOTIFICATIONS_ADVANCED_CATEGORY, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["31DySj"]),
    buildLayout: () => [E]
  })