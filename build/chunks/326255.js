/** Chunk was on web.js **/
/** chunk id: 326255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

function a(e) {
  var t;
  let {
    activities: n,
    status: a,
    applicationStream: o,
    voiceChannel: s
  } = e;
  if (a === i.Sk.OFFLINE || a === i.Sk.INVISIBLE) returnfalse;
  let l = null == n ? true : n.filter(e => e.type !== r.IIU.HANG_STATUS || null != s);
  return null != o || null != s || (null != (t = null == l ? true : l.length) ? t : 0) > 0
}