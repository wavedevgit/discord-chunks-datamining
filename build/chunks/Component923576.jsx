/** Chunk was on 6043 **/
/** chunk id: 923576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk355467 = require("./355467.js"),
  Chunk232567 = require("./232567.js"),
  Chunk848572 = require("./848572.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk709054 = require("./709054.js"),
  Chunk246992 = require("./246992.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");
let b = [{
  label: "1 Week",
  value: 0
}, {
  label: "1 Month (Bronze)",
  value: 1
}, {
  label: "3 Months (Silver)",
  value: 3
}, {
  label: "6 Months (Gold)",
  value: 6
}, {
  label: "1 Year (Platinum)",
  value: 12
}, {
  label: "2 Years (Diamond)",
  value: 24
}, {
  label: "3 Years (Emerald)",
  value: 36
}, {
  label: "5 Years (Ruby)",
  value: 60
}, {
  label: "6 Years (Opal)",
  value: 72
}];

function g() {
  var e, t;
  let [n, g] = r.useState(false), v = (0, i.e7)([u.default], () => u.default.getCurrentUser()), j = (0, d.kG)(), C = (0, i.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), y = null != j && null != (t = null == (e = x.vK[j]) ? true : e.tenureReqNumMonths) ? t : 0, _ = r.useCallback(async e => {
    let t = new Date;
    e > 0 ? t.setMonth(t.getMonth() - e) : t.setDate(t.getDate() - 7), t.setDate(t.getDate() - 2);
    let n = {
      subscription_status: h.O0b.ACTIVE,
      endedAt: true,
      premium_streak_started_at: p.default.fromTimestamp(t.getTime())
    };
    g(true), await l.tn.patch({
      url: "/debug/subscriptions/".concat(C.id),
      body: n,
      rejectWithError: false
    }), await (0, c.In)(v.id), await (0, o.jg)(), g(false)
  }, [C, v]);
  if (null != v && null != C) return (0, a.jsx)(s.B6, {
    isDisabled: n,
    serialize: e => "".concat(e),
    isSelected: e => e === y,
    options: b,
    select: _,
    popoutLayerContext: f.O$,
    popoutWidth: 200
  })
}