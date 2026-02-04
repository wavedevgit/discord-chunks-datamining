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
  Chunk576622 = require("./576622.js"),
  Chunk166403 = require("./166403.js"),
  Chunk954571 = require("./954571.js"),
  Chunk170887 = require("./170887.js"),
  Chunk131168 = require("./131168.js"),
  Chunk511484 = require("./511484.js"),
  Chunk703982 = require("./703982.jsx"),
  Chunk891858 = require("./891858.jsx"),
  Chunk807676 = require("./807676.jsx"),
  Chunk322631 = require("./322631.js"),
  Chunk568031 = require("./568031.jsx"),
  Chunk518491 = require("./518491.jsx"),
  Chunk157839 = require("./157839.jsx"),
  Chunk235365 = require("./235365.jsx"),
  Chunk994763 = require("./994763.js"),
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
      null != t && e.push((0, O.A)(t)), await Promise.all(e)
    })
  }, [t]), i.useEffect(() => {
    X(true)
  }, []), (0, g.P)(m.b);
  let H = i.useRef(null),
    V = i.useRef(null),
    F = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
    {
      isReady: Y,
      programReward: W
    } = (0, o.cf)([f.A], () => ({
      isReady: f.A.isReady(),
      programReward: f.A.getRewardForProgram(b.W.NITRO)
    })),
    K = (0, h.Qs)("PremiumSubscriberHome"),
    z = i.useMemo(() => !!Y && null != W && !!K && "orbs" === new URLSearchParams(n.search).get("section"), [n.search, Y, W, K]);
  (0, w.A)(l, z);
  let [Z, X] = i.useState(false), q = (0, T.p)(), J = i.useRef(null), [Q, $] = i.useState(false), [ee, et] = i.useState(false), en = null != q && null != F && F.status === G.Dmq.CANCELED, er = (0, I.iU)(M.gD.PREMIUM_MONTH_TIER_2, q, F), ei = !ee && en, {
    analyticsLocations: el
  } = (0, p.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME), [es, ea] = i.useState(false), eo = (0, o.bG)([E.A], () => null != t ? E.A.getUserProfile(t) : null), ec = (0, S.A)({
    location: "PremiumSubscriberHome"
  });
  return null != eo && (Y || null != W) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(d.GtU, {
      className: k.xW,
      ref: H,
      children: [(0, r.jsx)(d.hLv, {
        color: "nitro-pink",
        className: s()(k.kL, k.Gd, {
          [k.fv]: !ec
        }),
        children: (0, r.jsxs)(p.f5, {
          value: el,
          children: [(0, r.jsx)(c.L, {
            innerRef: J,
            onChange: e => et(e),
            threshold: .1,
            active: true,
            children: (0, r.jsx)(R.A, {
              buttonVisibilityRef: J,
              className: k.v1,
              enablePremiumBrandRefresh: ec,
              userDiscountOffer: q,
              discountedPrice: er
            })
          }), (0, r.jsx)(D.A, {
            variant: v.cJ.WHATS_NEW,
            className: k.Iw,
            noBackground: true,
            leftAlignHeaders: true
          }), null != W && K && (0, r.jsx)(L.A, {
            location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
            sectionRef: l
          }), (0, r.jsx)(D.A, {
            className: k.xU,
            variant: v.cJ.PERKS_DISCOVERABILITY,
            noBackground: true,
            leftAlignHeaders: true,
            showAllPerksButton: (0, r.jsx)(y.A, {
              setIsAllPerksVisible: $,
              previousComponent: v.A2.HOME
            })
          }), (0, r.jsx)(P.A, {
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
              e && !es && (C.default.track(G.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: el
              }), ea(true))
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
      }), en && null != er && (0, r.jsx)(N.A, {
        isVisible: ei && Z,
        premiumSubscription: F,
        churnDiscountOffer: q,
        discountedPrice: er
      })]
    }), (0, r.jsx)(j.A, {
      isAllPerksVisible: Q,
      setIsAllPerksVisible: $,
      previousComponent: v.A2.HOME,
      enablePremiumBrandRefresh: ec
    })]
  }) : (0, r.jsx)("div", {
    className: s()(k.kL, k.Lq),
    children: (0, r.jsx)(d.y$y, {})
  })
}