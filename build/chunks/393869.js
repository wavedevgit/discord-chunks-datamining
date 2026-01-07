/** Chunk was on 9343 **/
/** chunk id: 393869, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  i: () => l,
  w: () => s
});
var Chunk990547 = require("./990547.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");

function l() {
  let t = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return i.Z.put({
    url: a.ANM.USER_EMAIL,
    trackedActionData: {
      event: r.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
      properties: {
        is_resend: t
      }
    },
    rejectWithError: false
  })
}
async function s(t) {
  return (await i.Z.post({
    url: a.ANM.USER_EMAIL_VERIFY_CODE,
    body: {
      code: t
    },
    trackedActionData: {
      event: r.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE
    },
    rejectWithError: false
  })).body
}