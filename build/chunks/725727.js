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

function h(e, t, n, o) {
  let a = (0, i.Wu)([_.Z], () => _.Z.outboundPromotions),
    s = (0, i.e7)([_.Z], () => _.Z.consumedInboundPromotionId);
  return r.useMemo(() => a.filter(r => r.id !== s && !!(0, f.ZC)(r) && !n && (!e && !t || (0, f.Qf)(r, o))), [a, s, n, e, t, o])
}

function g() {
  let e = (0, Chunk442837.e7)([Chunk1844.Z], () => Chunk1844.Z.lastFetchedActivePromotions),
    t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    n = (0, Chunk775412._O)(),
    g = (0, Chunk442837.e7)([Chunk431.Z], () => Chunk431.Z.hasAnyUnexpiredOffer()),
    E = (0, Chunk695349.W)(),
    [b, y] = Chunk473749.useState(false),
    [O, v] = Chunk473749.useState([]);
  Chunk473749.useEffect(() => {
    (null != module || E) && Chunk570140.Z.wait(() => Chunk748770.ZP.markOutboundPromotionsSeen())
  }, [module, E]);
  let S = Chunk473749.useCallback(e => {
      v(t => t.some(t => {
        let {
          promotion: n
        } = t;
        return n.id === e.promotion.id
      }) ? t : [...t, e])
    }, []),
    I = Chunk74538.ZP.isPremiumExactly(exports, Chunk474936.PremiumTypes.TIER_2),
    T = Chunk163684.g.useExperiment({
      location: "useOutboundPromotions"
    }, {
      autoTrackExposure: false,
      disable: I
    }).enabled || I;
  Chunk473749.useEffect(() => {
    Chunk570140.Z.wait(() => {
      T && (null == module || E) && Chunk748770.ZP.fetchActivePromotions()
    })
  }, [module, T, E]), Chunk473749.useEffect(() => {
    Chunk570140.Z.wait(() => {
      (0, Chunk518638.t8)().then(e => {
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
    of O) C[exports.id] = module;
  let A = h(require, g, E, C),
    N = new Set(A.map(e => {
      let {
        id: t
      } = e;
      return t
    }));
  return {
    promotionsLoaded: b && (!T || null != module || E),
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
  let e = (0, Chunk442837.e7)([Chunk1844.Z], () => Chunk1844.Z.lastSeenOutboundPromotionStartDate),
    t = (0, Chunk775412._O)(),
    n = h(exports, (0, Chunk442837.e7)([Chunk431.Z], () => Chunk431.Z.hasAnyUnexpiredOffer()), (0, Chunk695349.W)(), {});
  return Chunk473749.useMemo(() => null == module ? require : require.filter(t => {
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