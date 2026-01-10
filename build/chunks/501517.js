/** Chunk was on 92091 **/
/** chunk id: 501517, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let r = {
  resolveFlag: t => e.tn.post({
    url: l.ANM.MODERATOR_REPORT_CLOSE(t),
    body: {},
    rejectWithError: true
  }),
  reopenModReport: t => e.tn.put({
    url: l.ANM.REPORT_TO_MOD_REOPEN(t),
    rejectWithError: true
  })
}