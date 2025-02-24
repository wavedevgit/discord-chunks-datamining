/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  J: () => i
});
var r = n(314897);

function i(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
    n = t.getId(),
    i = t.getSessionId();
  return e.userId === n && (null == e.sessionId || void 0 === e.sessionId || e.sessionId === i)
}