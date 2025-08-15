/** Chunk was on web.js **/
/** chunk id: 460347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d,
  m: () => u
}), require("./997841.js");
var Chunk442837 = require("./442837.js"),
  Chunk160404 = require("./160404.js"),
  Chunk271383 = require("./271383.js"),
  Chunk70956 = require("./70956.js"),
  Chunk630388 = require("./630388.js"),
  Chunk372897 = require("./372897.js");

function c(e, t, n) {
  var r;
  if (n.isFullServerPreview(e)) returntrue;
  let i = t.getSelfMember(e);
  if (null == i) returnfalse;
  let a = t.getSelfMemberJoinedAt(e);
  return !(null == a || (0, s.yE)(null != (r = i.flags) ? r : 0, l.q.COMPLETED_HOME_ACTIONS)) && Date.now() - a.getTime() < o.Z.Millis.WEEK
}

function u(e) {
  return c(e, a.ZP, i.Z)
}

function d(e) {
  return (0, r.e7)([a.ZP, i.Z], () => c(e, a.ZP, i.Z))
}