/** Chunk was on 45620 **/
/** chunk id: 653654, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  y: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk343817 = require("./343817.js"),
  Chunk411700 = require("./411700.js"),
  Chunk981631 = require("./981631.js");
let o = async e => {
  try {
    return (await r.tn.get({
      url: i.ANM.COLLECTIBLES_SEARCH,
      query: e,
      rejectWithError: true
    })).body
  } catch (t) {
    let e = new l.Hx(t);
    throw (0, a.G)(e), e
  }
}