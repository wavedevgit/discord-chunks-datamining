/** Chunk was on 30485 **/
/** chunk id: 719587, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  L: () => S
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
let S = (0, Chunk419954.zD)(Chunk780964.X.DATA_USAGE_STATISTICS_SETTING, {
  useTitle: () => A.intl.string(A.t.XuADY2),
  useSubtitle: () => A.intl.format(A.t["igTSG/"], {
    helpdeskArticle: a.A.getArticleURL(T.MVz.DATA_PRIVACY_CONTROLS)
  }),
  useValue: function() {
    return (0, n.bG)([u.A], () => u.A.hasConsented(T.YAq.USAGE_STATISTICS))
  },
  setValue: function(t) {
    t ? (0, l.U)([T.YAq.USAGE_STATISTICS], []).catch(d.i) : (0, d.O)({
      header: A.intl.string(A.t.OdPCbN),
      body: A.intl.string(A.t.MGWabA),
      confirmText: A.intl.string(A.t["D3+rU4"]),
      cancelText: A.intl.string(A.t.kYpG0u),
      onConfirm: () => (0, l.U)([], [T.YAq.USAGE_STATISTICS]).catch(d.i)
    })
  },
  useSearchTerms: () => [A.intl.string(A.t.XuADY2)],
  useDisabled: Chunk171316.uM
})