/** Chunk was on 78650 **/
/** chunk id: 501517, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let l = {
  resolveFlag: e => i.tn.post({
    url: r.ANM.MODERATOR_REPORT_CLOSE(e),
    body: {},
    rejectWithError: true
  }),
  reopenModReport: e => i.tn.put({
    url: r.ANM.REPORT_TO_MOD_REOPEN(e),
    rejectWithError: true
  })
}