/** Chunk was on 47129 **/
/** chunk id: 832783, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk292556 = require("./292556.js"),
  Chunk509613 = require("./509613.js"),
  Chunk292959 = require("./292959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.DESKTOP_NOTIFICATIONS, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["/0WClp"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.wF9ih4),
  useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getDesktopType()) !== Chunk981631.qrD.NEVER,
  setValue: e => i.default.setDesktopType(e ? s.qrD.ALL : s.qrD.NEVER)
})