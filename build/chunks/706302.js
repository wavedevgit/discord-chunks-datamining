/** Chunk was on web.js **/
/** chunk id: 706302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk812236 = require("./812236.js"),
  Chunk989573 = require("./989573.js");

function a(e) {
  let {
    context: t,
    application: n,
    botUserId: a
  } = e, o = (0, r.ms)({
    context: t,
    applicationId: n.id,
    botUserId: a
  }), s = (0, i.Z)("channel" === t.type ? t.channel : true);
  return o && null != a && !s
}