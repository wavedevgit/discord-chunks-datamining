/** Chunk was on 72920 **/
/** chunk id: 501517, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let a = {
  resolveFlag: t => l.tn.post({
    url: i.ANM.MODERATOR_REPORT_CLOSE(t),
    body: {},
    rejectWithError: true
  }),
  reopenModReport: t => l.tn.put({
    url: i.ANM.REPORT_TO_MOD_REOPEN(t),
    rejectWithError: true
  })
}