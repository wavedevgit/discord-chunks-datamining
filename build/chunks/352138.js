/** Chunk was on web.js **/
/** chunk id: 352138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
async function a() {
  return (await Chunk544891.tn.post({
    url: Chunk981631.ANM.VERIFY_AGE,
    body: {},
    rejectWithError: true
  })).body
}