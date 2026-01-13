/** Chunk was on web.js **/
/** chunk id: 706302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk812236 = require("./812236.js"),
  Chunk686440 = require("./686440.js"),
  Chunk989573 = require("./989573.js");

function o(e) {
  let {
    context: t,
    application: n,
    botUserId: o
  } = e, s = (0, i.A)(n), l = (0, r.ms)({
    context: t,
    applicationId: n.id,
    botUserId: o
  }), c = (0, a.Z)("channel" === t.type ? t.channel : true);
  return !s && l && null != o && !c
}