/** Chunk was on 77069 **/
/** chunk id: 735901, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  f: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk699516 = require("./699516.js"),
  Chunk63063 = require("./63063.js"),
  Chunk313789 = require("./313789.js"),
  Chunk564428 = require("./564428.js"),
  Chunk738070 = require("./738070.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.k4)(Chunk313789.n.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["3wRort"]),
  useSubtitle: () => Chunk388032.intl.format(Chunk388032.t["0aNQo9"], {
    helpArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE)
  }),
  buildLayout: () => [Chunk564428.a, Chunk738070.s],
  usePredicate: () => {
    let {
      hasBlockedUsers: t,
      hasIgnoredUsers: e
    } = (0, Chunk442837.cj)([Chunk699516.Z], () => ({
      hasBlockedUsers: Chunk699516.Z.getBlockedIDs().length > 0,
      hasIgnoredUsers: Chunk699516.Z.getIgnoredIDs().length > 0
    }));
    return exports || module
  }
})