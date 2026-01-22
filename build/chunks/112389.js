/** Chunk was on web.js **/
/** chunk id: 112389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => c
});
var Chunk136722 = require("./136722.js");
require("./311907.js");
var Chunk717125 = require("./717125.js"),
  Chunk734057 = require("./734057.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  return null != e && o.kvI.GUILD_VOCAL.has(e.type) ? r.kg(o.xBc.VIEW_CHANNEL, o.xBc.CONNECT) : o.xBc.VIEW_CHANNEL
}

function c(e, t) {
  let n = l(a.A.getChannel(t));
  return i.A.isChannelGated(e, t) || s.MJ(n, a.A.getChannel(t))
}