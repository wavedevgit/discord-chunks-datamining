/** Chunk was on 28979 **/
/** chunk id: 402089, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  s: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk130771 = require("./130771.js"),
  Chunk287809 = require("./287809.js"),
  Chunk780964 = require("./780964.js"),
  Chunk457684 = require("./457684.jsx"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.E2)(Chunk780964.X.ACCOUNT_REMOVAL_SETTING, {
    useSearchTerms: () => [T.intl.string(T.t.ZKsIks), T.intl.string(T.t.jf5GGb), T.intl.string(T.t["8lQ2rR"])],
    Component: function() {
      let t = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        {
          teams: e,
          loading: i
        } = (0, r.A)({
          refreshOnDepChange: true
        });
      return null == t ? null : (0, n.jsx)(o.A, {
        currentUser: t,
        userTeamsLoading: i,
        userTeams: e
      })
    }
  }),
  S = (0, Chunk419954.zZ)(Chunk780964.X.ACCOUNT_REMOVAL_CATEGORY, {
    buildLayout: () => [A]
  })