/** Chunk was on 77069 **/
/** chunk id: 563092, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  _: () => N
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
  Chunk342386 = require("./342386.js"),
  Chunk122145 = require("./122145.js"),
  Chunk523044 = require("./523044.js"),
  Chunk56404 = require("./56404.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517319 = require("./517319.js");
let N = (0, Chunk509613.k4)(Chunk313789.n.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["1Qn8iV"]),
  buildLayout: () => [Chunk122145.Y, Chunk523044.y, Chunk56404.Z],
  useNotice: () => {
    let t = (0, Chunk915009.LN)(),
      e = (0, Chunk631885.ZM)(),
      n = Chunk473749.useCallback(() => {
        (0, Chunk342386.default)(), Chunk493683.Z.openPrivateChannel({
          recipientIds: exports
        })
      }, [exports]);
    return Chunk473749.useMemo(() => {
      if (module) return {
        type: Chunk970013.v.INLINE_NOTICE,
        noticeType: "info",
        useText: () => Chunk388032.intl.format(Chunk517319.default.i284fU, {
          hook: (t, e) => (0, i.jsx)(s.eee, {
            onClick: n,
            children: t
          }, e),
          count: exports.length
        })
      }
    }, [require, module, exports.length])
  }
})