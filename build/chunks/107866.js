/** Chunk was on web.js **/
/** chunk id: 107866, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => l
}), require("./388685.js");
var Chunk661869 = require("./661869.js"),
  Chunk26033 = require("./26033.js"),
  Chunk180335 = require("./180335.js"),
  Chunk561308 = require("./561308.js"),
  Chunk981631 = require("./981631.js");

function l(e, t) {
  return (0, o.n2)(e) ? null : (0, o.kr)(e) && e.author_type === r.i.USER ? t.getActivities(e.author_id).find(t => t.type === s.IIU.PLAYING && (0, i.m9)(e) ? (0, a.cN)(e, t) : !!(t.type === s.IIU.LISTENING && (0, i.dU)(e)) && (0, a.pB)(e, t)) : true
}