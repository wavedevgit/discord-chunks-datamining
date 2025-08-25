/** Chunk was on web.js **/
/** chunk id: 687516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cf: () => f,
  L2: () => u,
  Um: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk158776 = require("./158776.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  return e.type === a.IIU.PLAYING
}

function l(e, t) {
  return t.findActivity(e, s)
}

function c(e, t) {
  return null != e ? l(e.ownerId, t) : null
}

function u(e, t) {
  if (null == e) return null;
  let n = c(e, t);
  return null == n ? null : {
    id: n.application_id,
    name: n.name
  }
}

function d(e, t) {
  return e === t || null != e && null != t && (0, i.Z)(e, t)
}

function f(e) {
  return (0, r.e7)([o.Z], () => u(e, o.Z), [e], d)
}