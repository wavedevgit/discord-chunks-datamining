/** Chunk was on web.js **/
/** chunk id: 326255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

function o(e) {
  var t;
  let {
    activities: n,
    status: o,
    applicationStream: a,
    voiceChannel: s
  } = e;
  if (o === i.Sk.OFFLINE || o === i.Sk.INVISIBLE) returnfalse;
  let l = null == n ? true : n.filter(e => e.type !== r.IIU.HANG_STATUS || null != s);
  return null != a || null != s || (null != (t = null == l ? true : l.length) ? t : 0) > 0
}