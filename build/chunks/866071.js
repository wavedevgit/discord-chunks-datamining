/** Chunk was on web.js **/
/** chunk id: 866071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => o
});
var Chunk339085 = require("./339085.js"),
  Chunk176354 = require("./176354.js"),
  Chunk185923 = require("./185923.js");

function o(e, t) {
  if (null == e.id) returntrue;
  let n = r.ZP.getCustomEmojiById(e.id);
  return null != n && !i.ZP.isEmojiDisabled({
    emoji: n,
    channel: t,
    intention: a.Hz.STATUS
  })
}