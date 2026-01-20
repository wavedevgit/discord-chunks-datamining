/** Chunk was on 22979 **/
/** chunk id: 923576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk232567 = require("./232567.js"),
  Chunk848572 = require("./848572.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");
let b = [{
  id: "1week",
  label: "1 Week",
  value: 0
}, {
  id: "1month",
  label: "1 Month (Bronze)",
  value: 1
}, {
  id: "3months",
  label: "3 Months (Silver)",
  value: 3
}, {
  id: "6months",
  label: "6 Months (Gold)",
  value: 6
}, {
  id: "1year",
  label: "1 Year (Platinum)",
  value: 12
}, {
  id: "2years",
  label: "2 Years (Diamond)",
  value: 24
}, {
  id: "3years",
  label: "3 Years (Emerald)",
  value: 36
}, {
  id: "5years",
  label: "5 Years (Ruby)",
  value: 60
}, {
  id: "6years",
  label: "6 Years (Opal)",
  value: 72
}];

function x() {
  var e, t;
  let [n, x] = r.useState(false), g = (0, i.e7)([u.default], () => u.default.getCurrentUser()), v = (0, d.kG)(), j = (0, i.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), y = null != v && null != (t = null == (e = f.vK[v]) ? true : e.tenureReqNumMonths) ? t : 0, C = r.useCallback(async e => {
    let t = new Date;
    e > 0 ? t.setMonth(t.getMonth() - e) : t.setDate(t.getDate() - 7), t.setDate(t.getDate() - 2);
    let n = {
      subscription_status: h.O0b.ACTIVE,
      endedAt: true,
      premium_streak_started_at: p.default.fromTimestamp(t.getTime())
    };
    x(true), await l.tn.patch({
      url: "/debug/subscriptions/".concat(j.id),
      body: n,
      rejectWithError: false
    }), await (0, c.In)(g.id), await (0, o.jg)(), x(false)
  }, [j, g]);
  if (null != g && null != j) return (0, a.jsx)(s.PhF, {
    label: "Tenure",
    hideLabel: true,
    selectionMode: "single",
    disabled: n,
    value: y,
    options: b,
    onSelectionChange: C
  })
}