/** Chunk was on 92414 **/
/** chunk id: 863439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o,
  z: () => a
});
var Chunk417597 = require("./417597.js"),
  Chunk253932 = require("./253932.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function o(e, t) {
  switch (e) {
    case s.P6Q.ALWAYS:
      returntrue;
    case s.P6Q.IF_MODERATOR:
      return t;
    case s.P6Q.ON_CLICK:
    default:
      returnfalse
  }
}

function a(e) {
  let t = (0, r.bG)([l.A], () => l.A.can(s.xBc.MANAGE_MESSAGES, e));
  return !o(i.gs.useSetting(), t)
}