/** Chunk was on 77069 **/
/** chunk id: 883626, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  M: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk915009 = require("./915009.js"),
  Chunk631885 = require("./631885.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk997950 = require("./997950.js"),
  Chunk639814 = require("./639814.js"),
  Chunk342386 = require("./342386.js"),
  Chunk625245 = require("./625245.jsx"),
  Chunk769851 = require("./769851.js"),
  Chunk627531 = require("./627531.js"),
  Chunk347854 = require("./347854.js"),
  Chunk696467 = require("./696467.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517319 = require("./517319.js");
let f = (0, Chunk509613.k4)(Chunk313789.n.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["y62Z/d"]),
  useNotice: () => {
    let t = (0, Chunk639814.is)(),
      e = (0, Chunk915009.LN)(),
      n = (0, Chunk631885.ZM)(),
      o = Chunk473749.useCallback(() => {
        (0, Chunk342386.default)(), Chunk493683.Z.openPrivateChannel({
          recipientIds: require
        })
      }, [require]);
    return Chunk473749.useMemo(() => {
      if (module === Chunk997950.Th && exports) return {
        type: Chunk970013.v.INLINE_NOTICE,
        noticeType: "info",
        useText: () => Chunk388032.intl.format(Chunk517319.default.i284fU, {
          hook: (t, e) => (0, i.jsx)(s.Anchor, {
            onClick: o,
            children: t
          }, e),
          count: require.length
        })
      }
    }, [Chunk509613, exports, require.length, module])
  },
  buildLayout: () => [Chunk625245.N, Chunk347854.k, Chunk696467.u, Chunk627531.S, Chunk769851.n]
})