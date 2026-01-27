/** Chunk was on web.js **/
/** chunk id: 978165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  j: () => u
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk164956 = require("./164956.js"),
  Chunk696451 = require("./696451.js"),
  Chunk927813 = require("./927813.js"),
  Chunk340837 = require("./340837.js");

function c(e, t, n) {
  var i;
  if (n.isFullServerPreview(e)) returntrue;
  let a = t.getSelfMember(e);
  if (null == a) returnfalse;
  let o = t.getSelfMemberJoinedAt(e);
  return !(null == o || (0, r.Lt)(null != (i = a.flags) ? i : 0, l.D.COMPLETED_HOME_ACTIONS)) && Date.now() - o.getTime() < s.A.Millis.WEEK
}

function u(e) {
  return c(e, o.Ay, a.A)
}

function d(e) {
  return (0, i.bG)([o.Ay, a.A], () => c(e, o.Ay, a.A))
}