/** Chunk was on 91173 **/
/** chunk id: 897325, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => a,
  _: () => o
}), require("./314940.js");
var Chunk278074 = require("./278074.js"),
  Chunk263568 = require("./263568.js"),
  Chunk807554 = require("./807554.js");

function o(e, t) {
  let n = (0, r.EQ)(t).with(i.C.IMAGE_ONLY_ANSWERS, () => l.normalStylesImageOnlyAnswers).otherwise(() => l.normalStylesDefault);
  return {
    styles: {
      loserSelected: n,
      normal: n,
      notVoted: n,
      selected: n,
      voted: l.votedStyles,
      victorSelected: l.victorStyles,
      victorNotSelected: l.victorStyles,
      normalVote: n
    }
  }
}

function a(e, t) {
  return e.getAvatarURL(t, 20, false)
}