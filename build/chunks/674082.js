/** Chunk was on 4670 **/
/** chunk id: 674082, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Y: () => c
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
let c = (0, Chunk419954.zZ)(Chunk780964.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
  useTitle: () => T.intl.string(T.t.LVwR56),
  useSubtitle: () => T.intl.format(T.t["0aNQo9"], {
    helpArticle: r.A.getArticleURL(d.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
  }),
  buildLayout: () => [u.T, o.H],
  usePredicate: () => {
    let {
      hasBlockedUsers: e,
      hasIgnoredUsers: t
    } = (0, n.cf)([s.A], () => ({
      hasBlockedUsers: s.A.getBlockedIDs().length > 0,
      hasIgnoredUsers: s.A.getIgnoredIDs().length > 0
    }));
    return t || e
  }
})