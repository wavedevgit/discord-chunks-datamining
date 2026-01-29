/** Chunk was on 4670 **/
/** chunk id: 719587, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  L: () => A
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
let A = (0, Chunk419954.zD)(Chunk780964.X.DATA_USAGE_STATISTICS_SETTING, {
  useTitle: () => c.intl.string(c.t.XuADY2),
  useSubtitle: () => c.intl.format(c.t["igTSG/"], {
    helpdeskArticle: u.A.getArticleURL(T.MVz.DATA_PRIVACY_CONTROLS)
  }),
  useValue: function() {
    return (0, n.bG)([a.A], () => a.A.hasConsented(T.YAq.USAGE_STATISTICS))
  },
  setValue: function(e) {
    e ? (0, l.U)([T.YAq.USAGE_STATISTICS], []).catch(d.i) : (0, d.O)({
      header: c.intl.string(c.t.OdPCbN),
      body: c.intl.string(c.t.MGWabA),
      confirmText: c.intl.string(c.t["D3+rU4"]),
      cancelText: c.intl.string(c.t.kYpG0u),
      onConfirm: () => (0, l.U)([], [T.YAq.USAGE_STATISTICS]).catch(d.i)
    })
  },
  useSearchTerms: () => [c.intl.string(c.t.XuADY2)],
  useDisabled: Chunk171316.uM
})