/** Chunk was on 91284 **/
/** chunk id: 225180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk311907 = require("./311907.js"),
  Chunk760751 = require("./760751.js"),
  Chunk486020 = require("./486020.js");

function r(e, t) {
  let n = (0, l.bG)([i.A], () => i.A.getDetectableGame(null != e ? e : ""));
  if (null == n) return;
  let r = "cover" === t ? n.cover_image_hash : n.icon;
  return a.Ay.getApplicationIconURL({
    id: n.id,
    icon: r,
    keepAspectRatio: true
  })
}