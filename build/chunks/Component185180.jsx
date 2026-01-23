/** Chunk was on web.js **/
/** chunk id: 185180, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => U
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let U = e => {
  let {
    userId: t
  } = e;
  i.useEffect(() => {
    u.h.wait(async () => {
      let e = [(0, h.A)()];
      null != t && e.push((0, y.A)(t)), await Promise.all(e)
    })
  }, [t]), i.useEffect(() => {
    B(true)
  }, []), (0, _.P)(p.b);
  let n = i.useRef(null),
    a = i.useRef(null),
    U = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
    {
      isReady: G,
      programReward: V
    } = (0, o.cf)([m.A], () => ({
      isReady: m.A.isReady(),
      programReward: m.A.getRewardForProgram(g.W.NITRO)
    })),
    [F, B] = i.useState(false),
    H = (0, A.p)(),
    Y = i.useRef(null),
    [W, K] = i.useState(false),
    [z, q] = i.useState(false),
    Z = null != H && null != U && U.status === L.Dmq.CANCELED,
    X = (0, I.iU)(x.gD.PREMIUM_MONTH_TIER_2, H, U),
    Q = !z && Z,
    {
      analyticsLocations: J
    } = (0, f.Ay)(d.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [$, ee] = i.useState(false),
    et = (0, o.bG)([E.A], () => null != t ? E.A.getUserProfile(t) : null),
    en = (0, v.A)({
      location: "SubscriberNitroHome"
    });
  return null != et && (G || null != V) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(c.GtU, {
      className: M.xW,
      ref: n,
      children: [(0, r.jsx)(c.hLv, {
        color: "nitro-pink",
        className: s()(M.kL, M.Gd, {
          [M.fv]: !en
        }),
        children: (0, r.jsxs)(f.f5, {
          value: J,
          children: [(0, r.jsx)(l.L, {
            innerRef: Y,
            onChange: e => q(e),
            threshold: .1,
            active: true,
            children: (0, r.jsx)(N.A, {
              buttonVisibilityRef: Y,
              className: M.v1,
              enablePremiumBrandRefresh: en,
              userDiscountOffer: H,
              discountedPrice: X
            })
          }), (0, r.jsx)(T.A, {
            variant: R.cJ.WHATS_NEW,
            className: M.Iw,
            noBackground: true,
            leftAlignHeaders: true
          }), (0, r.jsx)(T.A, {
            className: M.xU,
            variant: R.cJ.PERKS_DISCOVERABILITY,
            noBackground: true,
            leftAlignHeaders: true,
            showAllPerksButton: (0, r.jsx)(D.A, {
              setIsAllPerksVisible: K,
              previousComponent: R.A2.HOME
            })
          }), null != V && m.A.isInProperTreatments() && (0, r.jsx)(w.A, {
            location: d.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION
          }), (0, r.jsx)(C.A, {
            className: M.Zy,
            location: d.A.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: L.liQ.NITRO_HOME,
              section: L.JJy.GIFT_BANNER
            }
          }), (0, r.jsx)("div", {
            className: M.hz
          }), (0, r.jsx)(l.L, {
            innerRef: a,
            onChange: e => {
              e && !$ && (O.default.track(L.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: J
              }), ee(true))
            },
            children: (0, r.jsx)("div", {
              ref: a,
              className: M._Z
            })
          }), (0, r.jsx)("img", {
            src: k,
            className: M.Kw,
            width: 112,
            height: 85,
            alt: j.intl.string(j.t.X4IxWL)
          })]
        })
      }), Z && null != X && (0, r.jsx)(S.A, {
        isVisible: Q && F,
        premiumSubscription: U,
        churnDiscountOffer: H,
        discountedPrice: X
      })]
    }), (0, r.jsx)(P.A, {
      isAllPerksVisible: W,
      setIsAllPerksVisible: K,
      previousComponent: R.A2.HOME,
      enablePremiumBrandRefresh: en
    })]
  }) : (0, r.jsx)("div", {
    className: s()(M.kL, M.Lq),
    children: (0, r.jsx)(c.y$y, {})
  })
}