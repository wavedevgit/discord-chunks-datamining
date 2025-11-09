/** Chunk was on 92822 **/
/** chunk id: 501517, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let l = {
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