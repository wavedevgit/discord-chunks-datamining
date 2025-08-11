/** Chunk was on web.js **/
/** chunk id: 501517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let o = {
  resolveFlag: e => r.tn.post({
    url: i.ANM.MODERATOR_REPORT_CLOSE(e),
    body: {},
    rejectWithError: true
  }),
  reopenModReport: e => r.tn.put({
    url: i.ANM.REPORT_TO_MOD_REOPEN(e),
    rejectWithError: true
  })
}