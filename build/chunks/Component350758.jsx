/** Chunk was on 98335 **/
/** chunk id: 350758, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk417363 = require("./417363.js"),
  Chunk346329 = require("./346329.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(t) {
  let e = (0, i.e7)([a.ZP], () => a.ZP.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
    [n, b] = (0, i.Wu)([c.Z], () => [c.Z.isUpToDate(t.id, t.branchId), c.Z.shouldPatch(t.id, t.branchId)], [t.branchId, t.id]);
  return n && !e && b ? (0, r.jsx)(l.sNh, {
    id: "repair",
    label: s.intl.string(s.t.CKCcdz),
    action: () => o.repairApplication(t.id, t.branchId, u.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
  }) : null
}