/** Chunk was on 78528 **/
/** chunk id: 246084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => i
});
var Chunk405018 = require("./405018.js"),
  Chunk652215 = require("./652215.js");

function i(e) {
  let {
    channel: t,
    locked: n,
    video: i,
    selected: s
  } = e;
  return function(e) {
    let {
      channel: t,
      video: n,
      considerMaxStageVoiceUserLimit: i = true
    } = e, {
      limit: s
    } = (0, r.A)(t), a = false;
    return (t.userLimit > 0 && (a = t.userLimit), n && s > 0 && (a = a > 0 ? Math.min(a, s) : s), i && a === l.RCc) ? 0 : a
  }({
    channel: t,
    video: i
  }) > 0 && !n && !s
}