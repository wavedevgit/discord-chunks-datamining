/** Chunk was on web.js **/
/** chunk id: 918831, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk361926 = require("./361926.js"),
  Chunk207371 = require("./207371.js"),
  Chunk177640 = require("./177640.js");

function o(e) {
  let {
    context: t,
    application: n,
    botUserId: o
  } = e, s = (0, i.e)(n), l = (0, r.Vr)({
    context: t,
    applicationId: n.id,
    botUserId: o
  }), c = (0, a.A)("channel" === t.type ? t.channel : true);
  return !s && l && null != o && !c
}