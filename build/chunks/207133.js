/** Chunk was on web.js **/
/** chunk id: 207133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk417597 = require("./417597.js"),
  Chunk734057 = require("./734057.js"),
  Chunk746080 = require("./746080.js");

function s(e) {
  let t = (0, r.bG)([i.A], () => {
    let t = i.A.getChannel(e);
    return (null == t ? true : t.parent_id) != null && t.isForumPost() ? i.A.getChannel(null == t ? true : t.parent_id) : null
  });
  return (null == t ? true : t.hasFlag(a.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === true
}