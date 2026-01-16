/** Chunk was on 99726 **/
/** chunk id: 162190, original params: a,e,m (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk442837 = require("./442837.js"),
  Chunk404577 = require("./404577.js"),
  Chunk768581 = require("./768581.js");

function r(a, e) {
  let m = (0, g.e7)([c.Z], () => c.Z.getDetectableGame(null != a ? a : ""));
  if (null == m) return;
  let r = "cover" === e ? m.cover_image_hash : m.icon;
  return i.ZP.getApplicationIconURL({
    id: m.id,
    icon: r,
    keepAspectRatio: true
  })
}