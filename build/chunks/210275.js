/** Chunk was on 36878 **/
/** chunk id: 210275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk292556 = require("./292556.js"),
  Chunk509613 = require("./509613.js"),
  Chunk292959 = require("./292959.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");
let c = (0, Chunk509613.qs)("DesktopNotifications", {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["/0WClp"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.wF9ih4),
  useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getDesktopType()) !== Chunk981631.qrD.NEVER,
  setValue: e => o.default.setDesktopType(e ? a.qrD.ALL : a.qrD.NEVER)
})