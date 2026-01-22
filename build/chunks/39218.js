/** Chunk was on 28979 **/
/** chunk id: 39218, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  x: () => S
});
var Chunk64700 = require("./64700.js"),
  Chunk419954 = require("./419954.js"),
  Chunk975571 = require("./975571.js"),
  Chunk809505 = require("./809505.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk84373 = require("./84373.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let S = (0, Chunk419954.Qx)(Chunk780964.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
  useTitle: () => A.intl.string(A.t.tiCXaH),
  useSubtitle: () => A.intl.format(A.t.RvjRRI, {
    appealLink: s.A.getArticleURL(T.MVz.SAFE_DIRECT_MESSAGING)
  }),
  useValue: Chunk84373.o,
  setValue: t => u.he.updateSetting(t),
  useOptions: function() {
    return n.useMemo(() => (0, r.YS)(), [])
  },
  useSearchTerms: () => [A.intl.string(A.t.JzaP4h), A.intl.string(A.t.H9XOl3), A.intl.string(A.t.k4W40P)]
})