/** Chunk was on 59275 **/
/** chunk id: 227205, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk172218 = require("./172218.js"),
  Chunk696292 = require("./696292.js"),
  Chunk651162 = require("./651162.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk318346 = require("./318346.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk993408 = require("./993408.js"),
  Chunk379177 = require("./379177.js"),
  Chunk212407 = require("./212407.js"),
  Chunk333034 = require("./333034.jsx"),
  Chunk521000 = require("./521000.jsx"),
  Chunk938191 = require("./938191.js"),
  Chunk815280 = require("./815280.jsx"),
  Chunk60140 = require("./60140.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk201073 = require("./201073.js");
let I = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    categorySkuId: true,
    summary: true,
    type: Chunk651162.g.HERO,
    categoryStoreListingId: ""
  },
  N = e => {
    var t;
    let {
      isLoading: l,
      handleTransition: s,
      category: N,
      heroBlock: k,
      tab: R,
      onVisibilityChange: P
    } = e, D = (0, i.K)(e => {
      null == P || P(e)
    }, .1, null != P), w = r.useRef(null), B = (0, C.y)("HeroBlock"), M = (0, u.bG)([m.default], () => m.default.getCurrentUser()), H = (0, h.uM)(), G = r.useMemo(() => {
      var e;
      return null != k ? k : null == N ? I : {
        rankedSkuIds: null != (e = N.heroRanking) ? e : [],
        name: N.name,
        unpublishedAt: N.unpublishedAt,
        categorySkuId: N.skuId,
        summary: N.summary,
        type: c.g.HERO,
        categoryStoreListingId: N.storeListingId,
        bannerDisplayConfig: N.heroBannerDisplayConfig,
        logoDisplayConfig: N.heroLogoDisplayConfig,
        heroLogoUrl: N.heroLogoUrl,
        heroBannerUrl: N.heroBannerUrl,
        heroBannerAnimatedUrl: N.heroBannerAnimatedUrl
      }
    }, [k, N]), U = (0, v.rR)("HeroBlock") && G.categorySkuId === y.op, {
      bannerDisplayConfig: F,
      logoDisplayConfig: z,
      heroLogo: V,
      heroBannerStatic: K,
      heroBannerAnimated: W,
      heroBannerRive: Y
    } = (0, A.Kk)(G), q = null != (t = null == F ? true : F.responsive) && t, Z = null == F ? true : F.backgroundStyle, X = null != Y, J = R === y.G2.ORBS, Q = null != N && N.isOrbsExclusive, $ = J ? L.intl.string(L.t["1CdL8d"]) : L.intl.string(L.t.xYKa1T);
    J && U && ($ = L.intl.string(L.t.dVz4hi));
    let {
      analyticsLocations: ee
    } = (0, f.Ay)(), et = () => {
      J ? ((0, g.Y)({
        pageType: j.liQ.SHOP_ORBS_TAB,
        sectionType: j.JJy.ORBS_SHOP_HERO_BLOCK,
        ctaObject: j.ZSU.CTA_TO_QUEST_HOME
      }), U ? (0, x.A)({
        analyticsLocations: ee
      }) : (0, b.navigateToQuestHome)({
        fromContent: o.u.ORBS_SHOP_HERO_CTA
      })) : (s({
        sourceButton: "shop latest category hero",
        categorySkuId: Q ? G.categorySkuId : true,
        isInternalShopDeeplink: true,
        isOrbsExclusive: Q
      }), p.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == H ? true : H.sessionId,
        sku_id: G.categorySkuId,
        page_type: R,
        page_section: null == H ? true : H.pageSection,
        page_category: null == H ? true : H.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != M && (l || G !== I) ? (0, n.jsxs)("div", {
      ref: D,
      className: T.os,
      children: [X ? (0, S.VA)({
        isCustomCursorEnabled: B,
        className: T.Xt,
        riveEventTargetRef: w
      }) : null, (0, n.jsx)("div", {
        className: a()(T.vK, {
          [T.cN]: X,
          [T.no]: q
        }),
        style: null != Z ? {
          background: Z
        } : true,
        children: null != K && (0, n.jsx)(O.A, {
          bannerStatic: K,
          bannerAnimated: W,
          bannerRive: Y,
          isResponsive: q,
          eventTargetRef: w
        })
      }), (0, n.jsxs)("div", {
        className: T.xX,
        children: [X ? (0, n.jsx)("div", {
          className: T.fy,
          children: !l && (0, n.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: et,
            text: $
          })
        }) : (0, n.jsxs)("div", {
          className: a()(T.bC, {
            [T.no]: q
          }),
          children: [l ? (0, n.jsx)("div", {
            className: T.Hw
          }) : (0, n.jsxs)("div", {
            className: T.Hw,
            children: [(0, E.HF)(G.unpublishedAt) && (0, n.jsx)(d.LpS, {
              disableColor: true,
              text: L.intl.string(L.t["h/uBCR"]),
              className: T.v0
            }), (0, n.jsxs)("div", {
              className: T.Wq,
              children: [null != V && (0, n.jsx)("img", {
                className: T.rm,
                src: V,
                alt: G.name,
                style: null == z ? true : z.toDesktopStyles()
              }), null != G.title && (0, n.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: T.DD,
                color: "text-strong",
                children: G.title
              }), null != G.summary && "" !== G.summary && (0, n.jsx)(d.Text, {
                variant: "text-md/normal",
                className: J ? T.h4 : T.Tm,
                style: null != G.bannerTextColor ? {
                  color: G.bannerTextColor
                } : true,
                children: G.summary
              })]
            })]
          }), !l && (0, n.jsx)("div", {
            className: T.IS,
            children: (0, n.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: et,
              text: $
            })
          })]
        }), (0, n.jsx)(_.A, {
          heroBlockRecord: G,
          tab: R,
          isBlockLoading: l,
          layout: R === y.G2.HOME ? "hscroll" : U ? "row" : "feed"
        })]
      })]
    }) : null
  }