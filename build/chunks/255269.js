/** Chunk was on web.js **/
/** chunk id: 255269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  _: () => l
});
var Chunk399606 = require("./399606.js"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function s(e, t) {
  switch (e) {
    case o.A2N.ALWAYS:
      returntrue;
    case o.A2N.IF_MODERATOR:
      return t;
    case o.A2N.ON_CLICK:
    default:
      returnfalse
  }
}

function l(e) {
  let t = (0, r.e7)([a.Z], () => a.Z.can(o.Plq.MANAGE_MESSAGES, e));
  return !s(i.cC.useSetting(), t)
}