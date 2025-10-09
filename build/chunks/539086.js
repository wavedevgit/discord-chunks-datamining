/** Chunk was on web.js **/
/** chunk id: 539086, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => I
});
var Chunk647438 = require("./647438.js"),
  Chunk286379 = require("./286379.js"),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk493773 = require("./493773.js"),
  Chunk758119 = require("./758119.js"),
  Chunk266454 = require("./266454.js"),
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
  Chunk723359 = require("./723359.js"),
  Chunk921944 = require("./921944.js");

function I(e) {
  let {
    location: t,
    onMountEffect: n
  } = e, I = (0, g.Z)(), T = (0, E.M8)(), S = (0, c.Nj)(o.z.FAMILY_CENTER_NEW_BADGE), {
    familyCenterInitialized: A,
    isLoading: C
  } = (0, a.cj)([p.Z], () => ({
    familyCenterInitialized: p.Z.getIsInitialized(),
    isLoading: p.Z.isLoading()
  })), N = (0, m.M)(), {
    selectedTab: R,
    handleTabChange: P
  } = (0, h.Z)(), w = f.default.getCurrentUser(), D = null != I, x = A && null != w && !D;
  (0, s.ZP)(() => {
    (0, d.e)("family-center"), null != n && n(), S || (0, c.Q3)(o.z.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: v.L.AUTO,
      forceTrack: true
    })
  });
  let L = {
      isConsideredAdult: I,
      numOfAcceptedRequests: T,
      selectedTab: R,
      selectedTeenId: N
    },
    M = r.useRef(L);
  return r.useEffect(() => {
    M.current = L
  }), r.useEffect(() => {
    if (A && D) {
      let {
        isConsideredAdult: e,
        numOfAcceptedRequests: n,
        selectedTab: r,
        selectedTeenId: a
      } = M.current;
      _.default.track(y.rMx.FAMILY_CENTER_VIEWED, {
        is_considered_adult: e,
        num_of_accepted_links: n,
        selected_teen_id: a,
        initial_page: b.QH[r],
        source: b._6[t]
      }), u.Z.increment({
        name: i.V.FAMILY_CENTER_VIEW
      })
    }
  }, [A, D, t]), r.useEffect(() => {
    x && (0, l.mN)(O.L0.FAMILY_CENTER)
  }, [x]), {
    isLoading: C,
    selectedTab: R,
    handleTabChange: P,
    showAgeGateModal: x
  }
}