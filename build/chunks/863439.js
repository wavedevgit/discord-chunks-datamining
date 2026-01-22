/** Chunk was on web.js **/
/** chunk id: 863439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  z: () => l
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

function l(e) {
  let t = (0, r.bG)([a.A], () => a.A.can(s.xBc.MANAGE_MESSAGES, e));
  return !o(i.gs.useSetting(), t)
}