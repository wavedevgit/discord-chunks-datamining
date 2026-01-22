/** Chunk was on web.js **/
/** chunk id: 9448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WN: () => a,
  dy: () => c,
  k5: () => l,
  oF: () => o
});
var Chunk734057 = require("./734057.js"),
  Chunk988794 = require("./988794.js");

function a(e) {
  let t, {
    entity_type: n,
    channel_id: a
  } = e;
  if (n in i.om && null != a) {
    var s;
    t = null != (s = r.A.getChannel(e.channel_id)) ? s : true
  }
  return t
}

function s(e, t) {
  let n = null;
  return e === i.Ps.EXTERNAL && null != t && "location" in t && (n = t.location), n
}

function o(e) {
  let {
    entity_type: t,
    entity_metadata: n
  } = e;
  return s(t, n)
}

function l(e) {
  let {
    entityType: t,
    entityMetadata: n
  } = e;
  return s(t, n)
}

function c(e) {
  return e === i.Ps.VOICE || e === i.Ps.STAGE_INSTANCE ? i.om[e] : true
}