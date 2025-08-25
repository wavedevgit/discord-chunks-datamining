/** Chunk was on web.js **/
/** chunk id: 917107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk106351 = require("./106351.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js");

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o.Z,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : a.Z,
    l = t.getChannel(e),
    c = n.getVoiceChannelId();
  return null != l && (l.type === r.d.GUILD_VOICE || !!l.isPrivate() && (l.id === c || null != s.Z.getVoiceStatesForChannel(l.id)[i.default.getId()]))
}