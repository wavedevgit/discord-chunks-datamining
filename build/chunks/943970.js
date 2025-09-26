/** Chunk was on 60728 **/
/** chunk id: 943970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk442837 = require("./442837.js"),
  Chunk77498 = require("./77498.js"),
  Chunk768581 = require("./768581.js");

function r(e, t) {
  let n = (0, l.e7)([i.Z], () => i.Z.getDetectableGame(null != e ? e : ""));
  if (null == n) return;
  let r = "cover" === t ? n.cover_image_hash : n.icon;
  return a.ZP.getApplicationIconURL({
    id: n.id,
    icon: r,
    keepAspectRatio: true
  })
}