/** Chunk was on web.js **/
/** chunk id: 490427, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk508675 = require("./508675.js"),
  Chunk95701 = require("./95701.js"),
  Chunk690521 = require("./690521.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let {
    activity: t,
    user: n,
    channel: l
  } = e;
  if (null == n || (null == t ? true : t.type) !== o.$pd.CUSTOM_STATUS || null == t.emoji) returnfalse;
  let c = t.emoji;
  if (null == c.id || null == l || !(0, i.ke)(l.type)) returntrue;
  let u = r.Ay.getUsableCustomEmojiById(c.id),
    d = a.Ay.isInternalEmojiForGuildId(u, l.getGuildId()),
    f = s.$3({
      permission: o.xBc.USE_EXTERNAL_EMOJIS,
      user: n,
      context: l
    });
  return !d || f
}