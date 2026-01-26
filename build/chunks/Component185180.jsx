/** Chunk was on web.js **/
/** chunk id: 185180, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => B
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
let V = "section",
  F = "orbs",
  B = e => {
    let {
      userId: t
    } = e, n = (0, o.zy)(), a = i.useRef(null);
    i.useEffect(() => {
      d.h.wait(async () => {
        let e = [(0, m.A)()];
        null != t && e.push((0, O.A)(t)), await Promise.all(e)
      })
    }, [t]), i.useEffect(() => {
      Z(true)
    }, []), (0, h.P)(_.b);
    let B = i.useRef(null),
      H = i.useRef(null),
      Y = (0, l.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
      {
        isReady: W,
        programReward: K
      } = (0, l.cf)([g.A], () => ({
        isReady: g.A.isReady(),
        programReward: g.A.getRewardForProgram(E.W.NITRO)
      })),
      z = i.useMemo(() => !!W && new URLSearchParams(n.search).get(V) === F, [n.search, W]);
    (0, b.A)(a, z);
    let [q, Z] = i.useState(false), X = (0, S.p)(), Q = i.useRef(null), [J, $] = i.useState(false), [ee, et] = i.useState(false), en = null != X && null != Y && Y.status === M.Dmq.CANCELED, er = (0, T.iU)(j.gD.PREMIUM_MONTH_TIER_2, X, Y), ei = !ee && en, {
      analyticsLocations: ea
    } = (0, p.Ay)(f.A.PREMIUM_SUBSCRIBER_NITRO_HOME), [es, eo] = i.useState(false), el = (0, l.bG)([y.A], () => null != t ? y.A.getUserProfile(t) : null), ec = (0, I.A)({
      location: "SubscriberNitroHome"
    });
    return null != el && (W || null != K) ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(u.GtU, {
        className: U.xW,
        ref: B,
        children: [(0, r.jsx)(u.hLv, {
          color: "nitro-pink",
          className: s()(U.kL, U.Gd, {
            [U.fv]: !ec
          }),
          children: (0, r.jsxs)(p.f5, {
            value: ea,
            children: [(0, r.jsx)(c.L, {
              innerRef: Q,
              onChange: e => et(e),
              threshold: .1,
              active: true,
              children: (0, r.jsx)(R.A, {
                buttonVisibilityRef: Q,
                className: U.v1,
                enablePremiumBrandRefresh: ec,
                userDiscountOffer: X,
                discountedPrice: er
              })
            }), (0, r.jsx)(N.A, {
              variant: D.cJ.WHATS_NEW,
              className: U.Iw,
              noBackground: true,
              leftAlignHeaders: true
            }), (0, r.jsx)(N.A, {
              className: U.xU,
              variant: D.cJ.PERKS_DISCOVERABILITY,
              noBackground: true,
              leftAlignHeaders: true,
              showAllPerksButton: (0, r.jsx)(L.A, {
                setIsAllPerksVisible: $,
                previousComponent: D.A2.HOME
              })
            }), null != K && g.A.isInProperTreatments() && (0, r.jsx)(P.A, {
              location: f.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
              sectionRef: a
            }), (0, r.jsx)(w.A, {
              className: U.Zy,
              location: f.A.PREMIUM_MARKETING_GIFT_SECTION,
              analyticsLocation: {
                page: M.liQ.NITRO_HOME,
                section: M.JJy.GIFT_BANNER
              }
            }), (0, r.jsx)("div", {
              className: U.hz
            }), (0, r.jsx)(c.L, {
              innerRef: H,
              onChange: e => {
                e && !es && (A.default.track(M.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: ea
                }), eo(true))
              },
              children: (0, r.jsx)("div", {
                ref: H,
                className: U._Z
              })
            }), (0, r.jsx)("img", {
              src: G,
              className: U.Kw,
              width: 112,
              height: 85,
              alt: k.intl.string(k.t.X4IxWL)
            })]
          })
        }), en && null != er && (0, r.jsx)(C.A, {
          isVisible: ei && q,
          premiumSubscription: Y,
          churnDiscountOffer: X,
          discountedPrice: er
        })]
      }), (0, r.jsx)(x.A, {
        isAllPerksVisible: J,
        setIsAllPerksVisible: $,
        previousComponent: D.A2.HOME,
        enablePremiumBrandRefresh: ec
      })]
    }) : (0, r.jsx)("div", {
      className: s()(U.kL, U.Lq),
      children: (0, r.jsx)(u.y$y, {})
    })
  }