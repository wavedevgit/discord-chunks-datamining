/** Chunk was on web.js **/
/** chunk id: 773545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk183636 = require("./183636.js"),
  Chunk927813 = require("./927813.js"),
  Chunk67486 = require("./67486.js"),
  Chunk829219 = require("./829219.js"),
  Chunk859703 = require("./859703.js"),
  Chunk302654 = require("./302654.js"),
  Chunk710969 = require("./710969.js");
let f = 10 * Chunk927813.A.Millis.MINUTE;

function p(e) {
  return null != e && e.fetchedAt + e.ttlMillis >= Date.now()
}

function _(e, t, n) {
  if ((0, o.I)() || p(e)) return;
  if ("focused" !== a.A.getState()) {
    null != e && (0, l.Fr)(t, e.ttlMillis);
    return
  }
  if (c.A.isFetchingQuestToDeliverByPlacement(t)) return;
  let {
    enableNewRequestBehavior: r
  } = u.A.getConfig({
    location: "maybeRefreshAd"
  });
  r && ((0, l.N1)(), (0, l.r8)(t, n))
}

function h(e) {
  let t = (0, r.useRef)(null),
    n = (0, i.bG)([c.A], () => c.A.questDeliveryOverride),
    a = (0, i.bG)([c.A], () => {
      var t;
      return null != (t = c.A.questAdDecisionByPlacement.get(e)) ? t : null
    }),
    s = (0, i.bG)([c.A], () => {
      var e;
      return (null == a ? true : a.questId) != null && null != (e = c.A.quests.get(a.questId)) ? e : null
    });
  return ((0, r.useEffect)(() => {
    if (null != t.current && clearInterval(t.current), null != n) return;
    _(a, e, "questBar-open"), t.current = setInterval(() => {
      var t;
      _(null != (t = c.A.questAdDecisionByPlacement.get(e)) ? t : null, e, "questBar-interval")
    }, f);
    let r = t.current;
    return () => {
      null != r && clearInterval(r)
    }
  }, [a, e, n]), null != n) ? n : null == s || (0, d.Ic)(s) ? null : s
}