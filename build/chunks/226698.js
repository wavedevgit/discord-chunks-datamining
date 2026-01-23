/** Chunk was on 94390 **/
/** chunk id: 226698, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
let i = {
  resolveFlag: t => l.Bo.post({
    url: a.Rsh.MODERATOR_REPORT_CLOSE(t),
    body: {},
    rejectWithError: true
  }),
  reopenModReport: t => l.Bo.put({
    url: a.Rsh.REPORT_TO_MOD_REOPEN(t),
    rejectWithError: true
  })
}