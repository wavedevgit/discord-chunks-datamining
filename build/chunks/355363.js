/** Chunk was on 82477 **/
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
    selected: a
  } = e;
  return function(e) {
    let {
      channel: t,
      video: n,
      considerMaxStageVoiceUserLimit: l = true
    } = e, {
      limit: a
    } = (0, r.Z)(t), o = false;
    return (t.userLimit > 0 && (o = t.userLimit), n && a > 0 && (o = o > 0 ? Math.min(o, a) : a), l && o === i.xGv) ? 0 : o
  }({
    channel: t,
    video: l
  }) > 0 && !n && !a
}