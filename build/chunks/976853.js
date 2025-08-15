/** Chunk was on 96473 **/
/** chunk id: 976853, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk399606 = require("./399606.js"),
  Chunk592125 = require("./592125.js"),
  Chunk176505 = require("./176505.js");

function a(t) {
  let n = (0, l.e7)([i.Z], () => {
    let n = i.Z.getChannel(t);
    return (null == n ? true : n.parent_id) != null && n.isForumPost() ? i.Z.getChannel(null == n ? true : n.parent_id) : null
  });
  return (null == n ? true : n.hasFlag(r.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === true
}