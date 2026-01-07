/** Chunk was on web.js **/
/** chunk id: 725727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YO: () => E,
  lG: () => g,
  mq: () => b
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk431 = require("./431.js"),
  Chunk74538 = require("./74538.js"),
  Chunk775412 = require("./775412.js"),
  Chunk695349 = require("./695349.js"),
  Chunk163684 = require("./163684.js"),
  Chunk518638 = require("./518638.js"),
  Chunk748770 = require("./748770.js"),
  Chunk1844 = require("./1844.js"),
  Chunk474936 = require("./474936.js");

function h(e, t, n, a) {
  let o = (0, i.Wu)([_.Z], () => _.Z.outboundPromotions),
    s = (0, i.e7)([_.Z], () => _.Z.consumedInboundPromotionId);
  return r.useMemo(() => o.filter(r => r.id !== s && !!(0, f.ZC)(r) && !n && (!e && !t || (0, f.Qf)(r, a))), [o, s, n, e, t, a])
}

function g() {
  let e = (0, i.e7)([_.Z], () => _.Z.lastFetchedActivePromotions),
    t = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
    n = (0, c._O)(),
    g = (0, i.e7)([s.Z], () => s.Z.hasAnyUnexpiredOffer()),
    E = (0, u.W)(),
    [b, y] = r.useState(false),
    [O, v] = r.useState([]);
  r.useEffect(() => {
    (null != e || E) && a.Z.wait(() => p.ZP.markOutboundPromotionsSeen())
  }, [e, E]);
  let S = r.useCallback(e => {
      v(t => t.some(t => {
        let {
          promotion: n
        } = t;
        return n.id === e.promotion.id
      }) ? t : [...t, e])
    }, []),
    I = l.ZP.isPremiumExactly(t, m.PremiumTypes.TIER_2),
    T = d.g.useExperiment({
      location: "useOutboundPromotions"
    }, {
      autoTrackExposure: false,
      disable: I
    }).enabled || I;
  r.useEffect(() => {
    a.Z.wait(() => {
      T && (null == e || E) && p.ZP.fetchActivePromotions()
    })
  }, [e, T, E]), r.useEffect(() => {
    a.Z.wait(() => {
      (0, f.t8)().then(e => {
        v(e), y(true)
      }).catch(() => {
        v([]), y(true)
      })
    })
  }, []);
  let C = {};
  for (let {
      code: e,
      promotion: t
    }
    of O) C[t.id] = e;
  let A = h(n, g, E, C),
    N = new Set(A.map(e => {
      let {
        id: t
      } = e;
      return t
    }));
  return {
    promotionsLoaded: b && (!T || null != e || E),
    activeOutboundPromotions: A,
    claimedEndedOutboundPromotions: O.filter(e => {
      let {
        promotion: t
      } = e;
      return !N.has(t.id) && false === (0, f.pD)({
        promotionPartner: t.outboundTitle
      })
    }).filter(e => (0, f.ZC)(e.promotion)),
    claimedOutboundPromotionCodeMap: C,
    addClaimedOutboundPromotionCode: S
  }
}

function E() {
  let e = (0, i.e7)([_.Z], () => _.Z.lastSeenOutboundPromotionStartDate),
    t = (0, c._O)(),
    n = h(t, (0, i.e7)([s.Z], () => s.Z.hasAnyUnexpiredOffer()), (0, u.W)(), {});
  return r.useMemo(() => null == e ? n : n.filter(t => {
    let {
      startDate: n
    } = t;
    return new Date(n) > new Date(e)
  }), [n, e]).filter(e => (0, f.ZC)(e))
}

function b() {
  return {
    promotion: (0, i.e7)([_.Z], () => _.Z.bogoPromotion)
  }
}