/** Chunk was on 85372 **/
/** chunk id: 255269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a,
  _: () => s
});
var Chunk399606 = require("./399606.js"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function a(e, t) {
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

function s(e) {
  let t = (0, r.e7)([l.Z], () => l.Z.can(o.Plq.MANAGE_MESSAGES, e));
  return !a(i.cC.useSetting(), t)
}