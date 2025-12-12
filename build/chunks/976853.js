/** Chunk was on web.js **/
/** chunk id: 976853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk399606 = require("./399606.js"),
  Chunk592125 = require("./592125.js"),
  Chunk176505 = require("./176505.js");

function o(e) {
  let t = (0, r.e7)([i.Z], () => {
    let t = i.Z.getChannel(e);
    return (null == t ? true : t.parent_id) != null && t.isForumPost() ? i.Z.getChannel(null == t ? true : t.parent_id) : null
  });
  return (null == t ? true : t.hasFlag(a.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === true
}