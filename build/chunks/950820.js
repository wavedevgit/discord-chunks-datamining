/** Chunk was on 77069 **/
/** chunk id: 950820, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  T: () => E
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
let E = (0, Chunk509613.qs)(Chunk313789.n.DATA_USAGE_PERSONALIZATION_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.MNKzyg),
  useSubtitle: () => Chunk388032.intl.format(Chunk388032.t["eQL/Mr"], {
    helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.DATA_USED_FOR_RECOMMENDED)
  }),
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk480294.Z], () => Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION))
  },
  setValue: function(t) {
    t ? (0, l.g)([T.pjP.PERSONALIZATION], []).catch(S.S) : (0, S.V)({
      header: c.intl.string(c.t["9SNpzv"]),
      confirmText: c.intl.string(c.t["9g5UGw"]),
      cancelText: c.intl.string(c.t["+ZLPw9"]),
      onConfirm: () => {
        (0, l.g)([], [T.pjP.PERSONALIZATION]).catch(S.S)
      },
      body: c.intl.string(c.t.gJvDDh)
    })
  },
  useDisabled: Chunk915009.LN
})