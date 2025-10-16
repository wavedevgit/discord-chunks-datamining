/** Chunk was on 99726 **/
/** chunk id: 162190, original params: e,a,m (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk77498 = require("./77498.js"),
  Chunk768581 = require("./768581.js");

function s(e, a) {
  let m = (0, g.e7)([i.Z], () => i.Z.getDetectableGame(null != e ? e : ""));
  if (null == m) return;
  let s = "cover" === a ? m.cover_image_hash : m.icon;
  return r.ZP.getApplicationIconURL({
    id: m.id,
    icon: s,
    keepAspectRatio: true
  })
}