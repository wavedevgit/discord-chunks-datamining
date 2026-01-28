/** Chunk was on 60667 **/
/** chunk id: 768985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => E
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
  Chunk33666 = require("./33666.js"),
  Chunk834981 = require("./834981.js"),
  Chunk191627 = require("./191627.js"),
  Chunk652215 = require("./652215.js"),
  Chunk204925 = require("./204925.js");

function E(e) {
  let {
    location: t,
    onMountEffect: n
  } = e, E = (0, g.A)(), x = (0, A.W1)(), {
    familyCenterInitialized: O,
    isLoading: C
  } = (0, l.cf)([_.A], () => ({
    familyCenterInitialized: _.A.getIsInitialized(),
    isLoading: _.A.isLoading()
  })), T = (0, m.k)(), {
    selectedTab: I,
    handleTabChange: S
  } = (0, p.A)(), j = d.default.getCurrentUser(), v = null != E, N = O && null != j && !v;
  (0, s.Ay)(() => {
    (0, c.d)("family-center"), null != n && n()
  });
  let y = {
      isConsideredAdult: "adult" === E,
      numOfAcceptedRequests: x,
      selectedTab: I,
      selectedTeenId: T
    },
    P = r.useRef(y);
  return r.useEffect(() => {
    P.current = y
  }), r.useEffect(() => {
    if (O && v) {
      let {
        isConsideredAdult: e,
        numOfAcceptedRequests: n,
        selectedTab: r,
        selectedTeenId: l
      } = P.current;
      u.default.track(h.HAw.FAMILY_CENTER_VIEWED, {
        is_considered_adult: e,
        num_of_accepted_links: n,
        selected_teen_id: l,
        initial_page: f.zu[r],
        source: f.iN[t]
      }), o.A.increment({
        name: i.K.FAMILY_CENTER_VIEW
      })
    }
  }, [O, v, t]), r.useEffect(() => {
    N && (0, a.yO)(b.w_.FAMILY_CENTER)
  }, [N]), {
    isLoading: C,
    selectedTab: I,
    handleTabChange: S,
    showAgeGateModal: N
  }
}