/** Chunk was on web.js **/
/** chunk id: 725096, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk70956 = require("./70956.js"),
  Chunk22095 = require("./22095.js"),
  Chunk509212 = require("./509212.js"),
  Chunk569984 = require("./569984.js"),
  Chunk704161 = require("./704161.js");
let u = 10 * Chunk70956.Z.Millis.MINUTE;

function d(e) {
  return null != e && e.fetchedAt + e.ttlMillis >= Date.now()
}

function f(e, t, n) {
  if (d(e) || l.Z.isFetchingQuestToDeliverByPlacement(t)) return;
  let {
    enableNewRequestBehavior: r
  } = c.Z.getConfig({
    location: "maybeRefreshAd"
  });
  r && ((0, o.xw)(), (0, o.w)(t, n))
}

function _(e) {
  let t = (0, r.useRef)(null),
    n = (0, i.e7)([l.Z], () => l.Z.questDeliveryOverride),
    a = (0, i.e7)([l.Z], () => {
      var t;
      return null != (t = l.Z.questAdDecisionByPlacement.get(e)) ? t : null
    }),
    o = (0, i.e7)([l.Z], () => {
      var e;
      return (null == a ? true : a.questId) != null && null != (e = l.Z.quests.get(a.questId)) ? e : null
    });
  return ((0, r.useEffect)(() => {
    if (null != t.current && clearInterval(t.current), null != n) return;
    f(a, e, "questBar-open"), t.current = setInterval(() => {
      var t;
      f(null != (t = l.Z.questAdDecisionByPlacement.get(e)) ? t : null, e, "questBar-interval")
    }, u);
    let r = t.current;
    return () => {
      null != r && clearInterval(r)
    }
  }, [a, e, n]), null != n) ? n : null == o || (0, s.zi)(o) ? null : o
}