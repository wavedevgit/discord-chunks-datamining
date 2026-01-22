/** Chunk was on 22477 **/
/** chunk id: 666055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk803306 = require("./803306.js"),
  Chunk112848 = require("./112848.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");
let x = [{
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

function b() {
  var e, t;
  let [n, b] = l.useState(false), g = (0, i.bG)([u.default], () => u.default.getCurrentUser()), v = (0, d.Lh)(), j = (0, i.bG)([m.A], () => m.A.getPremiumTypeSubscription()), y = null != v && null != (e = null == (t = f.VD[v]) ? true : t.tenureReqNumMonths) ? e : 0, _ = l.useCallback(async e => {
    let t = new Date;
    e > 0 ? t.setMonth(t.getMonth() - e) : t.setDate(t.getDate() - 7), t.setDate(t.getDate() - 2);
    let n = {
      subscription_status: h.Dmq.ACTIVE,
      endedAt: true,
      premium_streak_started_at: p.default.fromTimestamp(t.getTime())
    };
    b(true), await r.Bo.patch({
      url: "/debug/subscriptions/".concat(j.id),
      body: n,
      rejectWithError: false
    }), await (0, c.eO)(g.id), await (0, o.hP)(), b(false)
  }, [j, g]);
  if (null != g && null != j) return (0, a.jsx)(s.l6P, {
    label: "Tenure",
    hideLabel: true,
    selectionMode: "single",
    disabled: n,
    value: y,
    options: x,
    onSelectionChange: _
  })
}