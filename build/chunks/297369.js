/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(231338);

function i(e) {
  var t;
  let {
    activities: n,
    status: i,
    applicationStream: o,
    voiceChannel: a
  } = e;
  return i !== r.Sk.OFFLINE && i !== r.Sk.INVISIBLE && (null != o || null != a || (null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0)
}