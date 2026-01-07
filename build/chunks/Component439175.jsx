/** Chunk was on 77069 **/
/** chunk id: 439175, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  v: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk577275 = require("./577275.js"),
  Chunk594174 = require("./594174.js"),
  Chunk313789 = require("./313789.js"),
  Chunk47863 = require("./47863.jsx"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.ON)(Chunk313789.n.ACCOUNT_REMOVAL_SETTING, {
    useSearchTerms: () => [T.intl.string(T.t.ZKsIks), T.intl.string(T.t.jf5GGb), T.intl.string(T.t["8lQ2rR"])],
    Component: function() {
      let t = (0, l.e7)([r.default], () => r.default.getCurrentUser()),
        {
          teams: e,
          loading: n
        } = (0, u.Z)({
          refreshOnDepChange: true
        });
      return null == t ? null : (0, i.jsx)(o.Z, {
        currentUser: t,
        userTeamsLoading: n,
        userTeams: e
      })
    }
  }),
  c = (0, Chunk509613.k4)(Chunk313789.n.ACCOUNT_REMOVAL_CATEGORY, {
    buildLayout: () => [S]
  })