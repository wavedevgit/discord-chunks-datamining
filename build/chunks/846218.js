/** Chunk was on web.js **/
/** chunk id: 846218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => o
});
var Chunk508675 = require("./508675.js"),
  Chunk690521 = require("./690521.js"),
  Chunk307731 = require("./307731.js");

function o(e, t) {
  if (null == e.id) returntrue;
  let n = r.Ay.getCustomEmojiById(e.id);
  return null != n && !i.Ay.isEmojiDisabled({
    emoji: n,
    channel: t,
    intention: a.b_.STATUS
  })
}