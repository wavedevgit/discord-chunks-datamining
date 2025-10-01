/** Chunk was on 76126 **/
/** chunk id: 943970, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk442837 = require("./442837.js"),
  Chunk77498 = require("./77498.js"),
  Chunk768581 = require("./768581.js");

function r(e, a) {
  let t = (0, c.e7)([n.Z], () => n.Z.getDetectableGame(null != e ? e : ""));
  if (null == t) return;
  let r = "cover" === a ? t.cover_image_hash : t.icon;
  return i.ZP.getApplicationIconURL({
    id: t.id,
    icon: r,
    keepAspectRatio: true
  })
}