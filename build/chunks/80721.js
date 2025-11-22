/** Chunk was on 86948 **/
/** chunk id: 80721, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  MT: () => s,
  cD: () => a
});
var Chunk544891 = require("./544891.js");
require("./504518.js");
var Chunk981631 = require("./981631.js");
async function s(e) {
  return (await n.tn.get({
    url: i.ANM.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
    rejectWithError: true
  })).body
}
async function a(e, t) {
  try {
    return await n.tn.post({
      url: i.ANM.BILLING_SUBSCRIPTION_INVITES(e),
      body: {
        user_ids: t
      },
      rejectWithError: true
    })
  } catch (e) {}
}