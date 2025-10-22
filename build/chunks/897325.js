/** Chunk was on web.js **/
/** chunk id: 897325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => s,
  _: () => o
}), require("./314940.js");
var Chunk278074 = require("./278074.js"),
  Chunk263568 = require("./263568.js"),
  Chunk867200 = require("./867200.js");

function o(e, t) {
  let n = (0, r.EQ)(t).with(i.C.IMAGE_ONLY_ANSWERS, () => a.normalStylesImageOnlyAnswers).otherwise(() => a.normalStylesDefault);
  return {
    styles: {
      loserSelected: n,
      normal: n,
      notVoted: n,
      selected: n,
      voted: a.votedStyles,
      victorSelected: a.victorStyles,
      victorNotSelected: a.victorStyles,
      normalVote: n
    }
  }
}

function s(e, t) {
  return e.getAvatarURL(t, 20, false)
}