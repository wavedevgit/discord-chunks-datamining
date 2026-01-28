/** Chunk was on 5606 **/
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
  } = e, E = (0, g.A)(), x = (0, f.W1)(), {
    familyCenterInitialized: O,
    isLoading: C
  } = (0, l.cf)([p.A], () => ({
    familyCenterInitialized: p.A.getIsInitialized(),
    isLoading: p.A.isLoading()
  })), y = (0, m.k)(), {
    selectedTab: j,
    handleTabChange: T
  } = (0, _.A)(), v = d.default.getCurrentUser(), S = null != E, I = O && null != v && !S;
  (0, s.Ay)(() => {
    (0, c.d)("family-center"), null != n && n()
  });
  let N = {
      isConsideredAdult: "adult" === E,
      numOfAcceptedRequests: x,
      selectedTab: j,
      selectedTeenId: y
    },
    P = r.useRef(N);
  return r.useEffect(() => {
    P.current = N
  }), r.useEffect(() => {
    if (O && S) {
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
        initial_page: b.zu[r],
        source: b.iN[t]
      }), o.A.increment({
        name: i.K.FAMILY_CENTER_VIEW
      })
    }
  }, [O, S, t]), r.useEffect(() => {
    I && (0, a.yO)(A.w_.FAMILY_CENTER)
  }, [I]), {
    isLoading: C,
    selectedTab: j,
    handleTabChange: T,
    showAgeGateModal: I
  }
}