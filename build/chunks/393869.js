/** Chunk was on 9343 **/
/** chunk id: 393869, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => i,
  w: () => l
});
var Chunk990547 = require("./990547.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");

function i() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return Chunk573261.Z.put({
    url: Chunk981631.ANM.USER_EMAIL,
    trackedActionData: {
      event: Chunk990547.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
      properties: {
        is_resend: module
      }
    },
    rejectWithError: false
  })
}
async function l(e) {
  return (await s.Z.post({
    url: r.ANM.USER_EMAIL_VERIFY_CODE,
    body: {
      code: e
    },
    trackedActionData: {
      event: a.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE
    },
    rejectWithError: false
  })).body
}