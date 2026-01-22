/** Chunk was on 881 **/
/** chunk id: 186171, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk15285 = require("./15285.js"),
  Chunk194871 = require("./194871.js"),
  Chunk715671 = require("./715671.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(t) {
  let e = (0, i.bG)([a.Ay], () => a.Ay.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
    [n, b] = (0, i.yK)([c.A], () => [c.A.isUpToDate(t.id, t.branchId), c.A.shouldPatch(t.id, t.branchId)], [t.branchId, t.id]);
  return n && !e && b ? (0, r.jsx)(l.Drp, {
    id: "repair",
    label: d.intl.string(d.t.CKCcdz),
    action: () => o.repairApplication(t.id, t.branchId, u.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
  }) : null
}