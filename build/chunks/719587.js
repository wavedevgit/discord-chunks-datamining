/** Chunk was on 28979 **/
/** chunk id: 719587, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  L: () => E
});
var Chunk311907 = require("./311907.js"),
  Chunk290595 = require("./290595.js"),
  Chunk171316 = require("./171316.js"),
  Chunk419954 = require("./419954.js"),
  Chunk153488 = require("./153488.js"),
  Chunk975571 = require("./975571.js"),
  Chunk780964 = require("./780964.js"),
  Chunk997913 = require("./997913.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let E = (0, Chunk419954.zD)(Chunk780964.X.DATA_USAGE_STATISTICS_SETTING, {
  useTitle: () => S.intl.string(S.t.XuADY2),
  useSubtitle: () => S.intl.format(S.t["igTSG/"], {
    helpdeskArticle: a.A.getArticleURL(A.MVz.DATA_PRIVACY_CONTROLS)
  }),
  useValue: function() {
    return (0, n.bG)([u.A], () => u.A.hasConsented(A.YAq.USAGE_STATISTICS))
  },
  setValue: function(t) {
    t ? (0, l.U)([A.YAq.USAGE_STATISTICS], []).catch(T.i) : (0, T.O)({
      header: S.intl.string(S.t.OdPCbN),
      body: S.intl.string(S.t.MGWabA),
      confirmText: S.intl.string(S.t["D3+rU4"]),
      cancelText: S.intl.string(S.t.kYpG0u),
      onConfirm: () => (0, l.U)([], [A.YAq.USAGE_STATISTICS]).catch(T.i)
    })
  },
  useSearchTerms: () => [S.intl.string(S.t.XuADY2)],
  useDisabled: Chunk171316.uM
})