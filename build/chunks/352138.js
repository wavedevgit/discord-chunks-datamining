/** Chunk was on web.js **/
/** chunk id: 352138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => a
});
var Chunk544891 = require("./544891.js");
require("./570140.js");
var Chunk981631 = require("./981631.js");
async function a(e) {
  return (await r.tn.post({
    url: i.ANM.VERIFY_AGE,
    body: {
      method: e
    },
    rejectWithError: true
  })).body
}