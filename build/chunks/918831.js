/** Chunk was on web.js **/
/** chunk id: 918831, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk361926 = require("./361926.js"),
  Chunk207371 = require("./207371.js"),
  Chunk177640 = require("./177640.js");

function s(e) {
  let {
    context: t,
    application: n,
    botUserId: s
  } = e, o = (0, i.e)(n), l = (0, r.Vr)({
    context: t,
    applicationId: n.id,
    botUserId: s
  }), c = (0, a.A)("channel" === t.type ? t.channel : true);
  return !o && l && null != s && !c
}