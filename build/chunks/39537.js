/** Chunk was on 87557 **/
/** chunk id: 39537, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $R: () => i,
  Rt: () => s
});
var Chunk110259 = require("./110259.js");
require("./181658.js");
var Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js");
async function i() {
  let e = await l.A.get({
    url: r.Rsh.SAFETY_FLOWS_TASK,
    trackedActionData: {
      event: a.NetworkActionNames.USER_VERIFY
    },
    rejectWithError: true
  });
  return 204 === e.status ? null : e.body
}
async function s(e) {
  return (await l.A.post({
    url: r.Rsh.SAFETY_FLOWS_TASK,
    body: e,
    trackedActionData: {
      event: a.NetworkActionNames.USER_VERIFY
    },
    rejectWithError: true
  })).body
}