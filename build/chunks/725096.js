/** Chunk was on web.js **/
/** chunk id: 725096, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk15624 = require("./15624.js"),
  Chunk70956 = require("./70956.js"),
  Chunk455971 = require("./455971.js"),
  Chunk22095 = require("./22095.js"),
  Chunk616022 = require("./616022.js"),
  Chunk704161 = require("./704161.js"),
  Chunk862657 = require("./862657.js");
let f = 10 * Chunk70956.Z.Millis.MINUTE;

function p(e) {
  return null != e && e.fetchedAt + e.ttlMillis >= Date.now()
}

function _(e, t, n) {
  if ((0, s.C)() || p(e)) return;
  if ("focused" !== a.Z.getState()) {
    null != e && (0, l.jo)(t, e.ttlMillis);
    return
  }
  if (c.Z.isFetchingQuestToDeliverByPlacement(t)) return;
  let {
    enableNewRequestBehavior: r
  } = u.Z.getConfig({
    location: "maybeRefreshAd"
  });
  r && ((0, l.xw)(), (0, l.w)(t, n))
}

function h(e) {
  let t = (0, r.useRef)(null),
    n = (0, i.e7)([c.Z], () => c.Z.questDeliveryOverride),
    a = (0, i.e7)([c.Z], () => {
      var t;
      return null != (t = c.Z.questAdDecisionByPlacement.get(e)) ? t : null
    }),
    o = (0, i.e7)([c.Z], () => {
      var e;
      return (null == a ? true : a.questId) != null && null != (e = c.Z.quests.get(a.questId)) ? e : null
    });
  return ((0, r.useEffect)(() => {
    if (null != t.current && clearInterval(t.current), null != n) return;
    _(a, e, "questBar-open"), t.current = setInterval(() => {
      var t;
      _(null != (t = c.Z.questAdDecisionByPlacement.get(e)) ? t : null, e, "questBar-interval")
    }, f);
    let r = t.current;
    return () => {
      null != r && clearInterval(r)
    }
  }, [a, e, n]), null != n) ? n : null == o || (0, d.zi)(o) ? null : o
}