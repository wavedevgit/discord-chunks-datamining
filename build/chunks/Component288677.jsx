/** Chunk was on 881 **/
/** chunk id: 288677, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk15285 = require("./15285.js"),
  Chunk134861 = require("./134861.js"),
  Chunk189081 = require("./189081.js"),
  Chunk194871 = require("./194871.js"),
  Chunk144914 = require("./144914.js"),
  Chunk715671 = require("./715671.js"),
  Chunk651743 = require("./651743.js"),
  Chunk985018 = require("./985018.jsx");

function A(t, e) {
  let n = (0, i.bG)([a.Ay], () => a.Ay.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
    A = (0, i.bG)([o.A, s.A, u.A, c.A], () => (0, d.A)({
      LibraryApplicationStore: o.A,
      LaunchableGameStore: s.A,
      DispatchApplicationStore: u.A,
      ConnectedAppsStore: c.A,
      applicationId: t.id,
      branchId: t.branchId
    }), [t.branchId, t.id]);
  return n || !A ? null : (0, r.jsx)(l.Drp, {
    id: "launch",
    label: p.intl.string(p.t.XKUw8m),
    action: () => b.playApplication(t.id, t, {
      analyticsParams: {
        location: e
      }
    })
  })
}