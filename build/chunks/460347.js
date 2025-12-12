/** Chunk was on web.js **/
/** chunk id: 460347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d,
  m: () => u
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk160404 = require("./160404.js"),
  Chunk271383 = require("./271383.js"),
  Chunk70956 = require("./70956.js"),
  Chunk372897 = require("./372897.js");

function c(e, t, n) {
  var i;
  if (n.isFullServerPreview(e)) returntrue;
  let a = t.getSelfMember(e);
  if (null == a) returnfalse;
  let o = t.getSelfMemberJoinedAt(e);
  return !(null == o || (0, r.yE)(null != (i = a.flags) ? i : 0, l.q.COMPLETED_HOME_ACTIONS)) && Date.now() - o.getTime() < s.Z.Millis.WEEK
}

function u(e) {
  return c(e, o.ZP, a.Z)
}

function d(e) {
  return (0, i.e7)([o.ZP, a.Z], () => c(e, o.ZP, a.Z))
}