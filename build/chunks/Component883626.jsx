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
  useTitle: () => O.intl.string(O.t["y62Z/d"]),
  useNotice: () => {
    let t = (0, E.is)(),
      e = (0, r.LN)(),
      n = (0, a.ZM)(),
      o = l.useCallback(() => {
        (0, d.default)(), u.Z.openPrivateChannel({
          recipientIds: n
        })
      }, [n]);
    return l.useMemo(() => {
      if (t === c.Th && e) return {
        type: T.v.INLINE_NOTICE,
        noticeType: "info",
        useText: () => O.intl.format(C.default.i284fU, {
          hook: (t, e) => (0, i.jsx)(s.eee, {
            onClick: o,
            children: t
          }, e),
          count: n.length
        })
      }
    }, [o, e, n.length, t])
  },
  buildLayout: () => [_.N, N.k, A.u, I.S, g.n]
})