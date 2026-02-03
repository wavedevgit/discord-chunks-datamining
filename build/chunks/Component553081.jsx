/** Chunk was on 9207 **/
/** chunk id: 553081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => H
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
  Chunk26508 = require("./26508.js"),
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
  Chunk891858 = require("./891858.jsx"),
  Chunk807676 = require("./807676.jsx"),
  Chunk322631 = require("./322631.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk520089 = require("./520089.js"),
  Chunk288894 = require("./288894.js");
let H = e => {
  let {
    userId: t
  } = e, n = (0, a.zy)(), l = i.useRef(null);
  i.useEffect(() => {
    u.h.wait(async () => {
      let e = [(0, A.Ay)()];
      null != t && e.push((0, x.A)(t)), await Promise.all(e)
    })
  }, [t]), i.useEffect(() => {
    Z(true)
  }, []), (0, g.P)(m.b);
  let H = i.useRef(null),
    V = i.useRef(null),
    F = (0, o.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
    {
      isReady: Y,
      programReward: W
    } = (0, o.cf)([f.A], () => ({
      isReady: f.A.isReady(),
      programReward: f.A.getRewardForProgram(b.W.NITRO)
    })),
    K = i.useMemo(() => !!Y && "orbs" === new URLSearchParams(n.search).get("section"), [n.search, Y]);
  (0, O.A)(l, K);
  let [z, Z] = i.useState(false), X = (0, I.p)(), q = i.useRef(null), [J, Q] = i.useState(false), [$, ee] = i.useState(false), et = null != X && null != F && F.status === G.Dmq.CANCELED, en = (0, N.iU)(M.gD.PREMIUM_MONTH_TIER_2, X, F), er = !$ && et, {
    analyticsLocations: ei
  } = (0, p.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME), [el, es] = i.useState(false), ea = (0, o.bG)([E.A], () => null != t ? E.A.getUserProfile(t) : null), eo = (0, T.A)({
    location: "PremiumSubscriberHome"
  });
  return null != ea && (Y || null != W) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.GtU, {
      className: k.xW,
      ref: H,
      children: [(0, r.jsx)(d.hLv, {
        color: "nitro-pink",
        className: s()(k.kL, k.Gd, {
          [k.fv]: !eo
        }),
        children: (0, r.jsxs)(p.f5, {
          value: ei,
          children: [(0, r.jsx)(c.L, {
            innerRef: q,
            onChange: e => ee(e),
            threshold: .1,
            active: true,
            children: (0, r.jsx)(P.A, {
              buttonVisibilityRef: q,
              className: k.v1,
              enablePremiumBrandRefresh: eo,
              userDiscountOffer: X,
              discountedPrice: en
            })
          }), (0, r.jsx)(y.A, {
            variant: w.cJ.WHATS_NEW,
            className: k.Iw,
            noBackground: true,
            leftAlignHeaders: true
          }), (0, r.jsx)(y.A, {
            className: k.xU,
            variant: w.cJ.PERKS_DISCOVERABILITY,
            noBackground: true,
            leftAlignHeaders: true,
            showAllPerksButton: (0, r.jsx)(L.A, {
              setIsAllPerksVisible: Q,
              previousComponent: w.A2.HOME
            })
          }), null != W && (0, h.T0)("PremiumSubscriberHome") && (0, r.jsx)(R.A, {
            location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
            sectionRef: l
          }), (0, r.jsx)(v.A, {
            className: k.Zy,
            location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: G.liQ.NITRO_HOME,
              section: G.JJy.GIFT_BANNER
            }
          }), (0, r.jsx)("div", {
            className: k.hz
          }), (0, r.jsx)(c.L, {
            innerRef: V,
            onChange: e => {
              e && !el && (S.default.track(G.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: ei
              }), es(true))
            },
            children: (0, r.jsx)("div", {
              ref: V,
              className: k._Z
            })
          }), (0, r.jsx)("img", {
            src: B,
            className: k.Kw,
            width: 112,
            height: 85,
            alt: U.intl.string(U.t.X4IxWL)
          })]
        })
      }), et && null != en && (0, r.jsx)(j.A, {
        isVisible: er && z,
        premiumSubscription: F,
        churnDiscountOffer: X,
        discountedPrice: en
      })]
    }), (0, r.jsx)(D.A, {
      isAllPerksVisible: J,
      setIsAllPerksVisible: Q,
      previousComponent: w.A2.HOME,
      enablePremiumBrandRefresh: eo
    })]
  }) : (0, r.jsx)("div", {
    className: s()(k.kL, k.Lq),
    children: (0, r.jsx)(d.y$y, {})
  })
}