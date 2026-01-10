/** Chunk was on 84249 **/
/** chunk id: 257665, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F0: () => l,
  cN: () => s,
  vc: () => o
});
var a, r, Chunk544891 = require("./544891.js"),
  l = ((a = {})[a.DEFAULT = 0] = "DEFAULT", a[a.SUCCESSFUL = 1] = "SUCCESSFUL", a[a.FAILURE = 2] = "FAILURE", a[a.NONE = 3] = "NONE", a),
  s = ((r = {})[r.REWIND = 1] = "REWIND", r[r.RENEW = 2] = "RENEW", r[r.CANCEL = 3] = "CANCEL", r[r.UNCANCEL = 4] = "UNCANCEL", r[r.TIME_TRAVEL = 5] = "TIME_TRAVEL", r[r.RESET = 6] = "RESET", r[r.PAY_INVOICE = 7] = "PAY_INVOICE", r[r.END = 8] = "END", r[r.RESUME = 9] = "RESUME", r);
async function o(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    {
      targetDate: a,
      paymentType: r,
      sendReminderEmail: l
    } = n;
  return (await i.tn.post({
    url: "/debug/subscriptions/".concat(e, "/transition"),
    body: {
      target_datetime: null == a ? true : a.toISOString(),
      payment_type: null != r ? r : 0,
      transition: t,
      send_reminder_email: null != l && l
    },
    rejectWithError: true
  })).body
}