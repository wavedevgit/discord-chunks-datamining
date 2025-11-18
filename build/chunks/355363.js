/** Chunk was on 10023 **/
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
    } = (0, r.Z)(t), a = false;
    return (t.userLimit > 0 && (a = t.userLimit), n && o > 0 && (a = a > 0 ? Math.min(a, o) : o), l && a === i.xGv) ? 0 : a
  }({
    channel: t,
    video: l
  }) > 0 && !n && !o
}