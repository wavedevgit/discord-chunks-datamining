/** Chunk was on 22477 **/
/** chunk id: 776935, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H7: () => s,
  J7: () => r,
  tB: () => o
});
var a, l, Chunk562465 = require("./562465.js"),
  r = ((a = {})[a.DEFAULT = 0] = "DEFAULT", a[a.SUCCESSFUL = 1] = "SUCCESSFUL", a[a.FAILURE = 2] = "FAILURE", a[a.NONE = 3] = "NONE", a),
  s = ((l = {})[l.REWIND = 1] = "REWIND", l[l.RENEW = 2] = "RENEW", l[l.CANCEL = 3] = "CANCEL", l[l.UNCANCEL = 4] = "UNCANCEL", l[l.TIME_TRAVEL = 5] = "TIME_TRAVEL", l[l.RESET = 6] = "RESET", l[l.PAY_INVOICE = 7] = "PAY_INVOICE", l[l.END = 8] = "END", l[l.RESUME = 9] = "RESUME", l);
async function o(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    {
      targetDate: a,
      paymentType: l,
      sendReminderEmail: r
    } = n;
  return (await i.Bo.post({
    url: "/debug/subscriptions/".concat(e, "/transition"),
    body: {
      target_datetime: null == a ? true : a.toISOString(),
      payment_type: null != l ? l : 0,
      transition: t,
      send_reminder_email: null != r && r
    },
    rejectWithError: true
  })).body
}