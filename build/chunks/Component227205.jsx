/** Chunk was on 59275 **/
/** chunk id: 227205, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => k
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
  k = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: s,
      category: k,
      heroBlock: N,
      tab: R,
      onVisibilityChange: P
    } = e, B = (0, i.K)(e => {
      null == P || P(e)
    }, .1, null != P), w = l.useRef(null), D = (0, S.y)("HeroBlock"), M = (0, u.bG)([p.default], () => p.default.getCurrentUser()), H = (0, b.uM)(), G = l.useMemo(() => {
      var e;
      return null != N ? N : null == k ? I : {
        rankedSkuIds: null != (e = k.heroRanking) ? e : [],
        name: k.name,
        unpublishedAt: k.unpublishedAt,
        categorySkuId: k.skuId,
        summary: k.summary,
        type: c.g.HERO,
        categoryStoreListingId: k.storeListingId,
        bannerDisplayConfig: k.heroBannerDisplayConfig,
        logoDisplayConfig: k.heroLogoDisplayConfig,
        heroLogoUrl: k.heroLogoUrl,
        heroBannerUrl: k.heroBannerUrl,
        heroBannerAnimatedUrl: k.heroBannerAnimatedUrl
      }
    }, [N, k]), U = (0, E.rR)("HeroBlock") && G.categorySkuId === y.op, {
      bannerDisplayConfig: F,
      logoDisplayConfig: z,
      heroLogo: V,
      heroBannerStatic: K,
      heroBannerAnimated: W,
      heroBannerRive: Y
    } = (0, v.Kk)(G), q = null != (t = null == F ? true : F.responsive) && t, Z = null == F ? true : F.backgroundStyle, X = null != Y, J = R === y.G2.ORBS, Q = null != k && k.isOrbsExclusive, $ = J ? T.intl.string(T.t["1CdL8d"]) : T.intl.string(T.t.xYKa1T);
    J && U && ($ = T.intl.string(T.t.dVz4hi));
    let {
      analyticsLocations: ee
    } = (0, g.Ay)(), et = () => {
      J ? ((0, m.Y)({
        pageType: j.liQ.SHOP_ORBS_TAB,
        sectionType: j.JJy.ORBS_SHOP_HERO_BLOCK,
        ctaObject: j.ZSU.CTA_TO_QUEST_HOME
      }), U ? (0, C.A)({
        analyticsLocations: ee
      }) : (0, f.navigateToQuestHome)({
        fromContent: o.u.ORBS_SHOP_HERO_CTA
      })) : (s({
        sourceButton: "shop latest category hero",
        categorySkuId: Q ? G.categorySkuId : true,
        isInternalShopDeeplink: true,
        isOrbsExclusive: Q
      }), _.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == H ? true : H.sessionId,
        sku_id: G.categorySkuId,
        page_type: R,
        page_section: null == H ? true : H.pageSection,
        page_category: null == H ? true : H.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != M && (n || G !== I) ? (0, r.jsxs)("div", {
      ref: B,
      className: L.os,
      children: [X ? (0, A.VA)({
        isCustomCursorEnabled: D,
        className: L.Xt,
        riveEventTargetRef: w
      }) : null, (0, r.jsx)("div", {
        className: a()(L.vK, {
          [L.cN]: X,
          [L.no]: q
        }),
        style: null != Z ? {
          background: Z
        } : true,
        children: null != K && (0, r.jsx)(x.A, {
          bannerStatic: K,
          bannerAnimated: W,
          bannerRive: Y,
          isResponsive: q,
          eventTargetRef: w
        })
      }), (0, r.jsxs)("div", {
        className: L.xX,
        children: [X ? (0, r.jsx)("div", {
          className: L.fy,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: et,
            text: $
          })
        }) : (0, r.jsxs)("div", {
          className: a()(L.bC, {
            [L.no]: q
          }),
          children: [n ? (0, r.jsx)("div", {
            className: L.Hw
          }) : (0, r.jsxs)("div", {
            className: L.Hw,
            children: [(0, h.HF)(G.unpublishedAt) && (0, r.jsx)(d.LpS, {
              disableColor: true,
              text: T.intl.string(T.t["h/uBCR"]),
              className: L.v0
            }), (0, r.jsxs)("div", {
              className: L.Wq,
              children: [null != V && (0, r.jsx)("img", {
                className: L.rm,
                src: V,
                alt: G.name,
                style: null == z ? true : z.toDesktopStyles()
              }), null != G.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: L.DD,
                color: "text-strong",
                children: G.title
              }), null != G.summary && "" !== G.summary && (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: J ? L.h4 : L.Tm,
                style: null != G.bannerTextColor ? {
                  color: G.bannerTextColor
                } : true,
                children: G.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: L.IS,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: et,
              text: $
            })
          })]
        }), (0, r.jsx)(O.A, {
          heroBlockRecord: G,
          tab: R,
          isBlockLoading: n,
          layout: R === y.G2.HOME ? "hscroll" : U ? "row" : "feed"
        })]
      })]
    }) : null
  }