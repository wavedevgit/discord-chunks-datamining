/** Chunk was on 77069 **/
/** chunk id: 613852, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Q: () => E
});
var Chunk442837 = require("./442837.js"),
  Chunk924628 = require("./924628.js"),
  Chunk915009 = require("./915009.js"),
  Chunk509613 = require("./509613.js"),
  Chunk480294 = require("./480294.js"),
  Chunk63063 = require("./63063.js"),
  Chunk313789 = require("./313789.js"),
  Chunk922628 = require("./922628.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.qs)(Chunk313789.n.DATA_USAGE_STATISTICS_SETTING, {
  useTitle: () => c.intl.string(c.t.XuADY2),
  useSubtitle: () => c.intl.format(c.t["igTSG/"], {
    helpdeskArticle: a.Z.getArticleURL(S.BhN.DATA_PRIVACY_CONTROLS)
  }),
  useValue: function() {
    return (0, i.e7)([r.Z], () => r.Z.hasConsented(S.pjP.USAGE_STATISTICS))
  },
  setValue: function(t) {
    t ? (0, l.g)([S.pjP.USAGE_STATISTICS], []).catch(T.S) : (0, T.V)({
      header: c.intl.string(c.t.OdPCbN),
      body: c.intl.string(c.t.MGWabA),
      confirmText: c.intl.string(c.t["D3+rU4"]),
      cancelText: c.intl.string(c.t.kYpG0u),
      onConfirm: () => (0, l.g)([], [S.pjP.USAGE_STATISTICS]).catch(T.S)
    })
  },
  useSearchTerms: () => [c.intl.string(c.t.XuADY2)],
  useDisabled: Chunk915009.LN
})