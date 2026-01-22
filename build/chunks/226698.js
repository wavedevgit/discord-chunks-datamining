/** Chunk was on 94390 **/
/** chunk id: 226698, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
let l = {
  resolveFlag: t => a.Bo.post({
    url: i.Rsh.MODERATOR_REPORT_CLOSE(t),
    body: {},
    rejectWithError: true
  }),
  reopenModReport: t => a.Bo.put({
    url: i.Rsh.REPORT_TO_MOD_REOPEN(t),
    rejectWithError: true
  })
}