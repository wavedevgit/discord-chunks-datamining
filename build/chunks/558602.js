/** Chunk was on web.js **/
/** chunk id: 558602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk339085 = require("./339085.js"),
  Chunk131704 = require("./131704.js"),
  Chunk176354 = require("./176354.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let {
    activity: t,
    user: n,
    channel: l
  } = e;
  if (null == n || (null == t ? true : t.type) !== s.IIU.CUSTOM_STATUS || null == t.emoji) returnfalse;
  let c = t.emoji;
  if (null == c.id || null == l || !(0, i.zi)(l.type)) returntrue;
  let u = r.ZP.getUsableCustomEmojiById(c.id),
    d = a.ZP.isInternalEmojiForGuildId(u, l.getGuildId()),
    f = o.BT({
      permission: s.Plq.USE_EXTERNAL_EMOJIS,
      user: n,
      context: l
    });
  return !d || f
}