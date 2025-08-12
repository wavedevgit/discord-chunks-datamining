/** Chunk was on 26628 **/
/** chunk id: 355363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => l
});
var Chunk829750 = require("./829750.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let {
    channel: t,
    locked: n,
    video: l,
    selected: o
  } = e;
  return function(e) {
    let {
      channel: t,
      video: n,
      considerMaxStageVoiceUserLimit: l = true
    } = e, {
      limit: o
    } = (0, r.Z)(t), s = false;
    return (t.userLimit > 0 && (s = t.userLimit), n && o > 0 && (s = s > 0 ? Math.min(s, o) : o), l && s === i.xGv) ? 0 : s
  }({
    channel: t,
    video: l
  }) > 0 && !n && !o
}