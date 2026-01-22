/** Chunk was on web.js **/
/** chunk id: 552618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => c,
  c: () => l
});
var Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");
let o = Chunk652215.hVb.VIEW_CHANNEL | Chunk652215.hVb.READ_MESSAGE_HISTORY;

function l(e) {
  return null != e && (e.type === s.rbe.DM || e.type === s.rbe.GROUP_DM || (0, r.pQ)(e.type) && a.A.canBasicChannel(o, e))
}

function c(e) {
  return null != e && l(i.A.getBasicChannel(e))
}