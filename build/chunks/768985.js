/** Chunk was on web.js **/
/** chunk id: 768985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => b
});
var Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk417597 = require("./417597.js"),
  Chunk964486 = require("./964486.js"),
  Chunk612200 = require("./612200.js"),
  Chunk831062 = require("./831062.js"),
  Chunk210714 = require("./210714.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk695515 = require("./695515.js"),
  Chunk809697 = require("./809697.js"),
  Chunk500470 = require("./500470.js"),
  Chunk945276 = require("./945276.js"),
  Chunk834981 = require("./834981.js"),
  Chunk191627 = require("./191627.js"),
  Chunk652215 = require("./652215.js"),
  Chunk204925 = require("./204925.js");

function b(e) {
  let {
    location: t,
    onMountEffect: n
  } = e, b = (0, h.A)(), O = (0, m.W1)(), {
    familyCenterInitialized: v,
    isLoading: A
  } = (0, a.cf)([f.A], () => ({
    familyCenterInitialized: f.A.getIsInitialized(),
    isLoading: f.A.isLoading()
  })), I = (0, _.k)(), {
    selectedTab: S,
    handleTabChange: T
  } = (0, p.A)(), C = u.default.getCurrentUser(), N = null != b, R = v && null != C && !N;
  (0, s.Ay)(() => {
    (0, c.d)("family-center"), null != n && n()
  });
  let w = {
      isConsideredAdult: b,
      numOfAcceptedRequests: O,
      selectedTab: S,
      selectedTeenId: I
    },
    P = r.useRef(w);
  return r.useEffect(() => {
    P.current = w
  }), r.useEffect(() => {
    if (v && N) {
      let {
        isConsideredAdult: e,
        numOfAcceptedRequests: n,
        selectedTab: r,
        selectedTeenId: a
      } = P.current;
      d.default.track(E.HAw.FAMILY_CENTER_VIEWED, {
        is_considered_adult: e,
        num_of_accepted_links: n,
        selected_teen_id: a,
        initial_page: g.zu[r],
        source: g.iN[t]
      }), l.A.increment({
        name: i.K.FAMILY_CENTER_VIEW
      })
    }
  }, [v, N, t]), r.useEffect(() => {
    R && (0, o.yO)(y.w_.FAMILY_CENTER)
  }, [R]), {
    isLoading: A,
    selectedTab: S,
    handleTabChange: T,
    showAgeGateModal: R
  }
}