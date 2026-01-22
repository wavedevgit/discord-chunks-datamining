/** Chunk was on web.js **/
/** chunk id: 842901, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => s,
  T: () => o
}), require("./801541.js");
var Chunk889137 = require("./889137.js"),
  Chunk966974 = require("./966974.js"),
  Chunk48693 = require("./48693.js");

function s(e, t) {
  let n = (0, r.YW)(t).with(i.Z.IMAGE_ONLY_ANSWERS, () => a.EK).otherwise(() => a.fD);
  return {
    styles: {
      loserSelected: n,
      normal: n,
      notVoted: n,
      selected: n,
      voted: a.pq,
      victorSelected: a.iu,
      victorNotSelected: a.iu,
      normalVote: n
    }
  }
}

function o(e, t) {
  return e.getAvatarURL(t, 20, false)
}