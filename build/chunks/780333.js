/** Chunk was on 83269 **/
/** chunk id: 780333, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $: () => s,
  B: () => l
});
var Chunk110259 = require("./110259.js"),
  Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js");

function l() {
  let t = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return r.A.put({
    url: i.Rsh.USER_EMAIL,
    trackedActionData: {
      event: a.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
      properties: {
        is_resend: t
      }
    },
    rejectWithError: false
  })
}
async function s(t) {
  return (await r.A.post({
    url: i.Rsh.USER_EMAIL_VERIFY_CODE,
    body: {
      code: t
    },
    trackedActionData: {
      event: a.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE
    },
    rejectWithError: false
  })).body
}