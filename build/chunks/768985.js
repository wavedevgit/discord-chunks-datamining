/** Chunk was on 9207 **/
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
  } = e, E = (0, g.A)(), O = (0, A.W1)(), {
    familyCenterInitialized: x,
    isLoading: C
  } = (0, l.cf)([_.A], () => ({
    familyCenterInitialized: _.A.getIsInitialized(),
    isLoading: _.A.isLoading()
  })), S = (0, m.k)(), {
    selectedTab: T,
    handleTabChange: I
  } = (0, p.A)(), N = d.default.getCurrentUser(), y = null != E, v = x && null != N && !y;
  (0, s.Ay)(() => {
    (0, c.d)("family-center"), null != n && n()
  });
  let j = {
      isConsideredAdult: "adult" === E,
      numOfAcceptedRequests: O,
      selectedTab: T,
      selectedTeenId: S
    },
    P = r.useRef(j);
  return r.useEffect(() => {
    P.current = j
  }), r.useEffect(() => {
    if (x && y) {
      let {
        isConsideredAdult: e,
        numOfAcceptedRequests: n,
        selectedTab: r,
        selectedTeenId: l
      } = P.current;
      u.default.track(b.HAw.FAMILY_CENTER_VIEWED, {
        is_considered_adult: e,
        num_of_accepted_links: n,
        selected_teen_id: l,
        initial_page: f.zu[r],
        source: f.iN[t]
      }), o.A.increment({
        name: i.K.FAMILY_CENTER_VIEW
      })
    }
  }, [x, y, t]), r.useEffect(() => {
    v && (0, a.yO)(h.w_.FAMILY_CENTER)
  }, [v]), {
    isLoading: C,
    selectedTab: T,
    handleTabChange: I,
    showAgeGateModal: v
  }
}