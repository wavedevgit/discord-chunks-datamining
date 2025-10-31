/** Chunk was on 28532 **/
/** chunk id: 923576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk232567 = require("./232567.js"),
  Chunk848572 = require("./848572.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk709054 = require("./709054.js"),
  Chunk246992 = require("./246992.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");
let f = [{
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

function b() {
  var e, t;
  let [n, b] = Chunk647438.useState(false), v = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), j = (0, Chunk848572.kG)(), _ = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()), y = null != j && null != (t = null == (e = Chunk474936.vK[j]) ? true : module.tenureReqNumMonths) ? exports : 0, C = Chunk647438.useCallback(async e => {
    let t = new Date;
    e > 0 ? t.setMonth(t.getMonth() - e) : t.setDate(t.getDate() - 7), t.setDate(t.getDate() - 2);
    let n = {
      subscription_status: x.O0b.ACTIVE,
      endedAt: true,
      premium_streak_started_at: p.default.fromTimestamp(t.getTime())
    };
    b(true), await r.tn.patch({
      url: "/debug/subscriptions/".concat(_.id),
      body: n,
      rejectWithError: false
    }), await (0, c.In)(v.id), await (0, o.jg)(), b(false)
  }, [_, v]);
  if (null != v && null != _) return (0, Chunk951288.jsx)(Chunk481060.PhF, {
    isDisabled: require,
    serialize: e => "".concat(e),
    isSelected: e => e === y,
    options: f,
    select: C,
    popoutLayerContext: Chunk246992.O$,
    popoutWidth: 200
  })
}