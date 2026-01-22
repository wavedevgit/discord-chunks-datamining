/** Chunk was on 97492 **/
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
    selected: a
  } = e;
  return function(e) {
    let {
      channel: t,
      video: n,
      considerMaxStageVoiceUserLimit: i = true
    } = e, {
      limit: a
    } = (0, r.A)(t), s = false;
    return (t.userLimit > 0 && (s = t.userLimit), n && a > 0 && (s = s > 0 ? Math.min(s, a) : a), i && s === l.RCc) ? 0 : s
  }({
    channel: t,
    video: i
  }) > 0 && !n && !a
}