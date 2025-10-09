/** Chunk was on 99726 **/
/** chunk id: 162190, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk442837 = require("./442837.js"),
  Chunk77498 = require("./77498.js"),
  Chunk768581 = require("./768581.js");

function r(e, t) {
  let a = (0, c.e7)([n.Z], () => n.Z.getDetectableGame(null != e ? e : ""));
  if (null == a) return;
  let r = "cover" === t ? a.cover_image_hash : a.icon;
  return i.ZP.getApplicationIconURL({
    id: a.id,
    icon: r,
    keepAspectRatio: true
  })
}