/** Chunk was on web.js **/
/** chunk id: 397244, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js");

function a(e) {
  var t;
  let {
    activities: n,
    status: a,
    applicationStream: s,
    voiceChannel: o
  } = e;
  if (a === i.cl.OFFLINE || a === i.cl.INVISIBLE) returnfalse;
  let l = null == n ? true : n.filter(e => e.type !== r.$pd.HANG_STATUS || null != o);
  return null != s || null != o || (null != (t = null == l ? true : l.length) ? t : 0) > 0
}