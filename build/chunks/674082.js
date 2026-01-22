/** Chunk was on 28979 **/
/** chunk id: 674082, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Y: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk994500 = require("./994500.js"),
  Chunk975571 = require("./975571.js"),
  Chunk780964 = require("./780964.js"),
  Chunk961583 = require("./961583.js"),
  Chunk276221 = require("./276221.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zZ)(Chunk780964.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
  useTitle: () => A.intl.string(A.t["3wRort"]),
  useSubtitle: () => A.intl.format(A.t["0aNQo9"], {
    helpArticle: r.A.getArticleURL(T.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
  }),
  buildLayout: () => [a.T, o.H],
  usePredicate: () => {
    let {
      hasBlockedUsers: t,
      hasIgnoredUsers: e
    } = (0, n.cf)([s.A], () => ({
      hasBlockedUsers: s.A.getBlockedIDs().length > 0,
      hasIgnoredUsers: s.A.getIgnoredIDs().length > 0
    }));
    return e || t
  }
})