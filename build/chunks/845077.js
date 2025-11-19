/** Chunk was on 91394 **/
/** chunk id: 845077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PA: () => r,
  Wl: () => s
});
var Chunk990547 = require("./990547.js");
require("./479531.js");
var Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");
async function r() {
  let e = await Chunk573261.Z.get({
    url: Chunk981631.ANM.SAFETY_FLOWS_TASK,
    trackedActionData: {
      event: Chunk990547.NetworkActionNames.USER_VERIFY
    },
    rejectWithError: true
  });
  return 204 === module.status ? null : module.body
}
async function s(e) {
  return (await l.Z.post({
    url: i.ANM.SAFETY_FLOWS_TASK,
    body: e,
    trackedActionData: {
      event: a.NetworkActionNames.USER_VERIFY
    },
    rejectWithError: true
  })).body
}