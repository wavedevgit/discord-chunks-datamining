/** Chunk was on web.js **/
/** chunk id: 539086, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => y
});
var Chunk473749 = require("./473749.js"),
  Chunk286379 = require("./286379.js"),
  Chunk399606 = require("./399606.js"),
  Chunk493773 = require("./493773.js"),
  Chunk758119 = require("./758119.js"),
  Chunk797614 = require("./797614.js"),
  Chunk108427 = require("./108427.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk914788 = require("./914788.js"),
  Chunk841409 = require("./841409.js"),
  Chunk652262 = require("./652262.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js");

function y(e) {
  let {
    location: t,
    onMountEffect: n
  } = e, y = (0, m.Z)(), O = (0, h.M8)(), {
    familyCenterInitialized: v,
    isLoading: S
  } = (0, a.cj)([f.Z], () => ({
    familyCenterInitialized: f.Z.getIsInitialized(),
    isLoading: f.Z.isLoading()
  })), I = (0, _.M)(), {
    selectedTab: T,
    handleTabChange: C
  } = (0, p.Z)(), A = u.default.getCurrentUser(), N = null != y, P = v && null != A && !N;
  (0, o.ZP)(() => {
    (0, c.e)("family-center"), null != n && n()
  });
  let R = {
      isConsideredAdult: y,
      numOfAcceptedRequests: O,
      selectedTab: T,
      selectedTeenId: I
    },
    w = r.useRef(R);
  return r.useEffect(() => {
    w.current = R
  }), r.useEffect(() => {
    if (v && N) {
      let {
        isConsideredAdult: e,
        numOfAcceptedRequests: n,
        selectedTab: r,
        selectedTeenId: a
      } = w.current;
      d.default.track(E.rMx.FAMILY_CENTER_VIEWED, {
        is_considered_adult: e,
        num_of_accepted_links: n,
        selected_teen_id: a,
        initial_page: g.QH[r],
        source: g._6[t]
      }), l.Z.increment({
        name: i.V.FAMILY_CENTER_VIEW
      })
    }
  }, [v, N, t]), r.useEffect(() => {
    P && (0, s.mN)(b.L0.FAMILY_CENTER)
  }, [P]), {
    isLoading: S,
    selectedTab: T,
    handleTabChange: C,
    showAgeGateModal: P
  }
}