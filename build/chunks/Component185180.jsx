/** Chunk was on 60667 **/
/** chunk id: 185180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => V
}), require("./321073.js"), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk726649 = require("./726649.js"),
  Chunk611924 = require("./611924.js"),
  Chunk961250 = require("./961250.js"),
  Chunk895944 = require("./895944.js"),
  Chunk649032 = require("./649032.js"),
  Chunk622543 = require("./622543.js"),
  Chunk94343 = require("./94343.js"),
  Chunk576622 = require("./576622.js"),
  Chunk166403 = require("./166403.js"),
  Chunk954571 = require("./954571.js"),
  Chunk170887 = require("./170887.js"),
  Chunk131168 = require("./131168.js"),
  Chunk511484 = require("./511484.js"),
  Chunk703982 = require("./703982.jsx"),
  Chunk326736 = require("./326736.jsx"),
  Chunk810036 = require("./810036.jsx"),
  Chunk160116 = require("./160116.jsx"),
  Chunk530060 = require("./530060.jsx"),
  Chunk322631 = require("./322631.js"),
  Chunk891858 = require("./891858.jsx"),
  Chunk807676 = require("./807676.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk70338 = require("./70338.js"),
  Chunk288894 = require("./288894.js");
let V = e => {
  let {
    userId: t
  } = e, n = (0, a.zy)(), l = i.useRef(null);
  i.useEffect(() => {
    u.h.wait(async () => {
      let e = [(0, A.A)()];
      null != t && e.push((0, x.A)(t)), await Promise.all(e)
    })
  }, [t]), i.useEffect(() => {
    K(true)
  }, []), (0, g.P)(m.b);
  let V = i.useRef(null),
    H = i.useRef(null),
    B = (0, o.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
    {
      isReady: F,
      programReward: Y
    } = (0, o.cf)([f.A], () => ({
      isReady: f.A.isReady(),
      programReward: f.A.getRewardForProgram(h.W.NITRO)
    })),
    W = i.useMemo(() => !!F && "orbs" === new URLSearchParams(n.search).get("section"), [n.search, F]);
  (0, E.A)(l, W);
  let [z, K] = i.useState(false), Z = (0, I.p)(), X = i.useRef(null), [q, J] = i.useState(false), [Q, $] = i.useState(false), ee = null != Z && null != B && B.status === M.Dmq.CANCELED, et = (0, S.iU)(L.gD.PREMIUM_MONTH_TIER_2, Z, B), en = !Q && ee, {
    analyticsLocations: er
  } = (0, p.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME), [ei, el] = i.useState(false), es = (0, o.bG)([b.A], () => null != t ? b.A.getUserProfile(t) : null), ea = (0, T.A)({
    location: "SubscriberNitroHome"
  });
  return null != es && (F || null != Y) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.GtU, {
      className: G.xW,
      ref: V,
      children: [(0, r.jsx)(d.hLv, {
        color: "nitro-pink",
        className: s()(G.kL, G.Gd, {
          [G.fv]: !ea
        }),
        children: (0, r.jsxs)(p.f5, {
          value: er,
          children: [(0, r.jsx)(c.L, {
            innerRef: X,
            onChange: e => $(e),
            threshold: .1,
            active: true,
            children: (0, r.jsx)(y.A, {
              buttonVisibilityRef: X,
              className: G.v1,
              enablePremiumBrandRefresh: ea,
              userDiscountOffer: Z,
              discountedPrice: et
            })
          }), (0, r.jsx)(v.A, {
            variant: R.cJ.WHATS_NEW,
            className: G.Iw,
            noBackground: true,
            leftAlignHeaders: true
          }), (0, r.jsx)(v.A, {
            className: G.xU,
            variant: R.cJ.PERKS_DISCOVERABILITY,
            noBackground: true,
            leftAlignHeaders: true,
            showAllPerksButton: (0, r.jsx)(w.A, {
              setIsAllPerksVisible: J,
              previousComponent: R.A2.HOME
            })
          }), null != Y && f.A.isInProperTreatments() && (0, r.jsx)(P.A, {
            location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
            sectionRef: l
          }), (0, r.jsx)(N.A, {
            className: G.Zy,
            location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: M.liQ.NITRO_HOME,
              section: M.JJy.GIFT_BANNER
            }
          }), (0, r.jsx)("div", {
            className: G.hz
          }), (0, r.jsx)(c.L, {
            innerRef: H,
            onChange: e => {
              e && !ei && (C.default.track(M.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: er
              }), el(true))
            },
            children: (0, r.jsx)("div", {
              ref: H,
              className: G._Z
            })
          }), (0, r.jsx)("img", {
            src: k,
            className: G.Kw,
            width: 112,
            height: 85,
            alt: U.intl.string(U.t.X4IxWL)
          })]
        })
      }), ee && null != et && (0, r.jsx)(j.A, {
        isVisible: en && z,
        premiumSubscription: B,
        churnDiscountOffer: Z,
        discountedPrice: et
      })]
    }), (0, r.jsx)(D.A, {
      isAllPerksVisible: q,
      setIsAllPerksVisible: J,
      previousComponent: R.A2.HOME,
      enablePremiumBrandRefresh: ea
    })]
  }) : (0, r.jsx)("div", {
    className: s()(G.kL, G.Lq),
    children: (0, r.jsx)(d.y$y, {})
  })
}