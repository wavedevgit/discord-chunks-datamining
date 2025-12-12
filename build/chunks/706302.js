/** Chunk was on web.js **/
/** chunk id: 706302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk812236 = require("./812236.js"),
  Chunk989573 = require("./989573.js");

function o(e) {
  let {
    context: t,
    application: n,
    botUserId: o
  } = e, a = (0, r.ms)({
    context: t,
    applicationId: n.id,
    botUserId: o
  }), s = (0, i.Z)("channel" === t.type ? t.channel : true);
  return a && null != o && !s
}