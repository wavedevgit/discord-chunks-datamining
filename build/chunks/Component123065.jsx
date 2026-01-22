/** Chunk was on 881 **/
/** chunk id: 123065, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk258057 = require("./258057.js"),
  Chunk15285 = require("./15285.js"),
  Chunk568004 = require("./568004.js"),
  Chunk194871 = require("./194871.js"),
  Chunk715671 = require("./715671.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(t) {
  let e = (0, i.bG)([c.Ay], () => c.Ay.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
    n = (0, i.bG)([u.A], () => u.A.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
    p = (0, i.bG)([o.A], () => o.A.getTargetManifests(t.id, t.branchId), [t.branchId, t.id]);
  return n ? e ? null : (0, r.jsx)(l.Drp, {
    id: "uninstall",
    label: s.intl.string(s.t.DwgfOM),
    action: () => (0, a.z)(t.id, t.branchId, b.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
  }) : null == p ? null : (0, r.jsx)(l.Drp, {
    id: "install",
    label: s.intl.string(s.t["N+XVnt"]),
    action: () => d.installApplication(t.id, t.branchId, b.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
  })
}