/** Chunk was on 30485 **/
/** chunk id: 819188, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  B: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk256311 = require("./256311.js"),
  Chunk883600 = require("./883600.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk31760 = require("./31760.jsx");
let d = (0, Chunk419954.E2)(Chunk780964.X.CHANGE_LOG_OVERRIDE, {
  useSearchTerms: () => ["changelog override", "change log override"],
  Component: function() {
    let t = (0, l.bG)([r.A], () => r.A.overrideId()),
      e = async t => {
        var e;
        let i = r.A.getChangelog(t, "en-US");
        return null != i ? i : null != (e = await s.A.fetchChangelog(t, "en-US", false, true)) ? e : null
      };
    return (0, n.jsx)(o.q, {
      label: "Change Log Override",
      description: "Provide a change log ID to override the change log shown to this user.",
      placeholder: "Enter Change Log ID...",
      overrideId: null != t ? t : null,
      setOverride: t => s.A.setChangelogOverride(t),
      fetchOverride: e
    })
  }
})