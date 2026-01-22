/** Chunk was on 22477 **/
/** chunk id: 39537, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $R: () => r,
  Rt: () => s
});
var Chunk110259 = require("./110259.js");
require("./181658.js");
var Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js");
async function r() {
  let e = await l.A.get({
    url: i.Rsh.SAFETY_FLOWS_TASK,
    trackedActionData: {
      event: a.NetworkActionNames.USER_VERIFY
    },
    rejectWithError: true
  });
  return 204 === e.status ? null : e.body
}
async function s(e) {
  return (await l.A.post({
    url: i.Rsh.SAFETY_FLOWS_TASK,
    body: e,
    trackedActionData: {
      event: a.NetworkActionNames.USER_VERIFY
    },
    rejectWithError: true
  })).body
}