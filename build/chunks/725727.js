/** Chunk was on web.js **/
/** chunk id: 725727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YO: () => E,
  lG: () => g,
  mq: () => b
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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

function m(e, t, n, a) {
  let o = (0, i.Wu)([p.Z], () => p.Z.outboundPromotions),
    s = (0, i.e7)([p.Z], () => p.Z.consumedInboundPromotionId);
  return r.useMemo(() => o.filter(r => r.id !== s && !!(0, f.ZC)(r) && !n && (!e && !t || (0, f.Qf)(r, a))), [o, s, n, e, t, a])
}

function g() {
  let e = (0, Chunk442837.e7)([Chunk1844.Z], () => Chunk1844.Z.lastFetchedActivePromotions),
    t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    n = (0, Chunk775412._O)(),
    g = (0, Chunk442837.e7)([Chunk431.Z], () => Chunk431.Z.hasAnyUnexpiredOffer()),
    E = (0, Chunk695349.W)(),
    [b, y] = Chunk647438.useState(false),
    [O, v] = Chunk647438.useState([]);
  Chunk647438.useEffect(() => {
    (null != module || E) && Chunk570140.Z.wait(() => Chunk748770.ZP.markOutboundPromotionsSeen())
  }, [module, E]);
  let I = Chunk647438.useCallback(e => {
      v(t => t.some(t => {
        let {
          promotion: n
        } = t;
        return n.id === e.promotion.id
      }) ? t : [...t, e])
    }, []),
    S = Chunk74538.ZP.isPremiumExactly(exports, Chunk474936.PremiumTypes.TIER_2),
    T = Chunk163684.g.useExperiment({
      location: "useOutboundPromotions"
    }, {
      autoTrackExposure: false,
      disable: S
    }).enabled || S;
  Chunk647438.useEffect(() => {
    Chunk570140.Z.wait(() => {
      T && (null == module || E) && Chunk748770.ZP.fetchActivePromotions()
    })
  }, [module, T, E]), Chunk647438.useEffect(() => {
    Chunk570140.Z.wait(() => {
      (0, Chunk518638.t8)().then(e => {
        v(e), y(true)
      }).catch(() => {
        v([]), y(true)
      })
    })
  }, []);
  let A = {};
  for (let {
      code: e,
      promotion: t
    }
    of O) A[exports.id] = module;
  let C = m(require, g, E, A),
    N = new Set(C.map(e => {
      let {
        id: t
      } = e;
      return t
    }));
  return {
    promotionsLoaded: b && (!T || null != module || E),
    activeOutboundPromotions: C,
    claimedEndedOutboundPromotions: O.filter(e => {
      let {
        promotion: t
      } = e;
      return !N.has(t.id) && false === (0, f.pD)({
        promotionPartner: t.outboundTitle
      })
    }).filter(e => (0, f.ZC)(e.promotion)),
    claimedOutboundPromotionCodeMap: A,
    addClaimedOutboundPromotionCode: I
  }
}

function E() {
  let e = (0, Chunk442837.e7)([Chunk1844.Z], () => Chunk1844.Z.lastSeenOutboundPromotionStartDate),
    t = (0, Chunk775412._O)(),
    n = m(exports, (0, Chunk442837.e7)([Chunk431.Z], () => Chunk431.Z.hasAnyUnexpiredOffer()), (0, Chunk695349.W)(), {});
  return Chunk647438.useMemo(() => null == module ? require : require.filter(t => {
    let {
      startDate: n
    } = t;
    return new Date(n) > new Date(e)
  }), [require, module]).filter(e => (0, f.ZC)(e))
}

function b() {
  return {
    promotion: (0, Chunk442837.e7)([Chunk1844.Z], () => Chunk1844.Z.bogoPromotion)
  }
}