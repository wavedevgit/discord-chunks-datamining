/** Chunk was on web.js **/
/** chunk id: 9448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WN: () => a,
  dy: () => c,
  k5: () => l,
  oF: () => s
});
var Chunk734057 = require("./734057.js"),
  Chunk988794 = require("./988794.js");

function a(e) {
  let t, {
    entity_type: n,
    channel_id: a
  } = e;
  if (n in i.om && null != a) {
    var o;
    t = null != (o = r.A.getChannel(e.channel_id)) ? o : true
  }
  return t
}

function o(e, t) {
  let n = null;
  return e === i.Ps.EXTERNAL && null != t && "location" in t && (n = t.location), n
}

function s(e) {
  let {
    entity_type: t,
    entity_metadata: n
  } = e;
  return o(t, n)
}

function l(e) {
  let {
    entityType: t,
    entityMetadata: n
  } = e;
  return o(t, n)
}

function c(e) {
  return e === i.Ps.VOICE || e === i.Ps.STAGE_INSTANCE ? i.om[e] : true
}