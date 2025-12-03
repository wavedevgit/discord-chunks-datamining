/** Chunk was on 98335 **/
/** chunk id: 38346, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk943094 = require("./943094.js"),
  Chunk594190 = require("./594190.js"),
  Chunk173747 = require("./173747.js"),
  Chunk417363 = require("./417363.js"),
  Chunk346329 = require("./346329.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(t) {
  let e = (0, i.e7)([c.ZP], () => c.ZP.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
    n = (0, i.e7)([u.Z], () => u.Z.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
    f = (0, i.e7)([o.Z], () => o.Z.getTargetManifests(t.id, t.branchId), [t.branchId, t.id]);
  return n ? e ? null : (0, r.jsx)(l.sNh, {
    id: "uninstall",
    label: b.intl.string(b.t.DwgfOM),
    action: () => (0, a.W)(t.id, t.branchId, d.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
  }) : null == f ? null : (0, r.jsx)(l.sNh, {
    id: "install",
    label: b.intl.string(b.t["N+XVnt"]),
    action: () => s.installApplication(t.id, t.branchId, d.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
  })
}