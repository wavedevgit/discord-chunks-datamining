/** Chunk was on web.js **/
/** chunk id: 230900, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cS: () => s,
  nE: () => o,
  xC: () => c,
  xV: () => l
});
var Chunk592125 = require("./592125.js"),
  Chunk765305 = require("./765305.js");

function o(e) {
  let t, {
    entity_type: n,
    channel_id: o
  } = e;
  if (n in i.nz && null != o) {
    var a;
    t = null != (a = r.Z.getChannel(e.channel_id)) ? a : true
  }
  return t
}

function a(e, t) {
  let n = null;
  return e === i.WX.EXTERNAL && null != t && "location" in t && (n = t.location), n
}

function s(e) {
  let {
    entity_type: t,
    entity_metadata: n
  } = e;
  return a(t, n)
}

function l(e) {
  let {
    entityType: t,
    entityMetadata: n
  } = e;
  return a(t, n)
}

function c(e) {
  return e === i.WX.VOICE || e === i.WX.STAGE_INSTANCE ? i.nz[e] : true
}