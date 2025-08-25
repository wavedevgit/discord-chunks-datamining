/** Chunk was on 76210 **/
/** chunk id: 558141, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk292556 = require("./292556.js"),
  Chunk509613 = require("./509613.js"),
  Chunk292959 = require("./292959.js"),
  Chunk388032 = require("./388032.jsx");
let u = (0, Chunk509613.qs)("EnableUnreadMessageBadge", {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.VH8AIC),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["9K4qwc"]),
  useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => !Chunk292959.Z.getDisableUnreadBadge()),
  setValue: e => i.default.setDisableUnreadBadge(!e)
})