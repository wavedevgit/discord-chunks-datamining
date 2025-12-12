/** Chunk was on web.js **/
/** chunk id: 725096, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk15624 = require("./15624.js"),
  Chunk70956 = require("./70956.js"),
  Chunk22095 = require("./22095.js"),
  Chunk616022 = require("./616022.js"),
  Chunk704161 = require("./704161.js"),
  Chunk862657 = require("./862657.js");
let d = 10 * Chunk70956.Z.Millis.MINUTE;

function f(e) {
  return null != e && e.fetchedAt + e.ttlMillis >= Date.now()
}

function p(e, t, n) {
  if ("focused" !== o.Z.getState() || f(e) || l.Z.isFetchingQuestToDeliverByPlacement(t)) return;
  let {
    enableNewRequestBehavior: r
  } = c.Z.getConfig({
    location: "maybeRefreshAd"
  });
  r && ((0, s.xw)(), (0, s.w)(t, n))
}

function _(e) {
  let t = (0, r.useRef)(null),
    n = (0, i.e7)([l.Z], () => l.Z.questDeliveryOverride),
    o = (0, i.e7)([l.Z], () => {
      var t;
      return null != (t = l.Z.questAdDecisionByPlacement.get(e)) ? t : null
    }),
    a = (0, i.e7)([l.Z], () => {
      var e;
      return (null == o ? true : o.questId) != null && null != (e = l.Z.quests.get(o.questId)) ? e : null
    });
  return ((0, r.useEffect)(() => {
    if (null != t.current && clearInterval(t.current), null != n) return;
    p(o, e, "questBar-open"), t.current = setInterval(() => {
      var t;
      p(null != (t = l.Z.questAdDecisionByPlacement.get(e)) ? t : null, e, "questBar-interval")
    }, d);
    let r = t.current;
    return () => {
      null != r && clearInterval(r)
    }
  }, [o, e, n]), null != n) ? n : null == a || (0, u.zi)(a) ? null : a
}