/** Chunk was on 6043 **/
/** chunk id: 845077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PA: () => l,
  Wl: () => s
});
var Chunk990547 = require("./990547.js");
require("./479531.js");
var Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");
async function l() {
  let e = await r.Z.get({
    url: i.ANM.SAFETY_FLOWS_TASK,
    trackedActionData: {
      event: a.NetworkActionNames.USER_VERIFY
    },
    rejectWithError: true
  });
  return 204 === e.status ? null : e.body
}
async function s(e) {
  return (await r.Z.post({
    url: i.ANM.SAFETY_FLOWS_TASK,
    body: e,
    trackedActionData: {
      event: a.NetworkActionNames.USER_VERIFY
    },
    rejectWithError: true
  })).body
}