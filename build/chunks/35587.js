/** Chunk was on web.js **/
/** chunk id: 35587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Eu: () => y,
  IO: () => E,
  y7: () => g
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk287809 = require("./287809.js"),
  Chunk816733 = require("./816733.js"),
  Chunk927578 = require("./927578.js"),
  Chunk89366 = require("./89366.js"),
  Chunk637073 = require("./637073.js"),
  Chunk728364 = require("./728364.js"),
  Chunk264779 = require("./264779.js"),
  Chunk597758 = require("./597758.js"),
  Chunk412260 = require("./412260.js"),
  Chunk788868 = require("./788868.js");

function m(e, t, n, a) {
  let s = (0, i.yK)([_.A], () => _.A.outboundPromotions),
    o = (0, i.bG)([_.A], () => _.A.consumedInboundPromotionId);
  return r.useMemo(() => s.filter(r => r.id !== o && !!(0, f.OP)(r) && !n && (!e && !t || (0, f.S0)(r, a))), [s, o, n, e, t, a])
}

function g() {
  let e = (0, i.bG)([_.A], () => _.A.lastFetchedActivePromotions),
    t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
    n = (0, c.QQ)(),
    g = (0, i.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()),
    E = (0, u.d)(),
    [y, b] = r.useState(false),
    [O, v] = r.useState([]);
  r.useEffect(() => {
    (null != e || E) && a.h.wait(() => p.Ay.markOutboundPromotionsSeen())
  }, [e, E]);
  let A = r.useCallback(e => {
      v(t => t.some(t => {
        let {
          promotion: n
        } = t;
        return n.id === e.promotion.id
      }) ? t : [...t, e])
    }, []),
    I = l.Ay.isPremiumExactly(t, h.PremiumTypes.TIER_2),
    S = d.m.useExperiment({
      location: "useOutboundPromotions"
    }, {
      autoTrackExposure: false,
      disable: I
    }).enabled || I;
  r.useEffect(() => {
    a.h.wait(() => {
      S && (null == e || E) && p.Ay.fetchActivePromotions()
    })
  }, [e, S, E]), r.useEffect(() => {
    a.h.wait(() => {
      (0, f.b3)().then(e => {
        v(e), b(true)
      }).catch(() => {
        v([]), b(true)
      })
    })
  }, []);
  let T = {};
  for (let {
      code: e,
      promotion: t
    }
    of O) T[t.id] = e;
  let C = m(n, g, E, T),
    N = new Set(C.map(e => {
      let {
        id: t
      } = e;
      return t
    }));
  return {
    promotionsLoaded: y && (!S || null != e || E),
    activeOutboundPromotions: C,
    claimedEndedOutboundPromotions: O.filter(e => {
      let {
        promotion: t
      } = e;
      return !N.has(t.id) && false === (0, f.HB)({
        promotionPartner: t.outboundTitle,
        promotionType: t.promotionType
      })
    }).filter(e => (0, f.OP)(e.promotion)),
    claimedOutboundPromotionCodeMap: T,
    addClaimedOutboundPromotionCode: A
  }
}

function E() {
  let e = (0, i.bG)([_.A], () => _.A.lastSeenOutboundPromotionStartDate),
    t = m((0, c.QQ)(), (0, i.bG)([o.A], () => o.A.hasAnyUnexpiredOffer()), (0, u.d)(), {});
  return r.useMemo(() => null == e ? t : t.filter(t => {
    let {
      startDate: n
    } = t;
    return new Date(n) > new Date(e)
  }), [t, e]).filter(e => (0, f.OP)(e))
}

function y() {
  return {
    promotion: (0, i.bG)([_.A], () => _.A.bogoPromotion)
  }
}