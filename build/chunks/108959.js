/** Chunk was on web.js **/
/** chunk id: 108959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk478437 = require("./478437.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js");

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a.A,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : s.A,
    l = t.getChannel(e),
    c = n.getVoiceChannelId();
  return null != l && (l.type === r.r.GUILD_VOICE || !!l.isPrivate() && (l.id === c || null != o.A.getVoiceStatesForChannel(l.id)[i.default.getId()]))
}