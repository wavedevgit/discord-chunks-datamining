/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk636977 = require("./636977.js"),
  Chunk685816 = require("./685816.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk763941 = require("./763941.js"),
  Chunk794324 = require("./794324.js"),
  Chunk126026 = require("./126026.jsx"),
  Chunk190157 = require("./190157.jsx"),
  Chunk811847 = require("./811847.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk986105 = require("./986105.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk222194 = require("./222194.js");
let L = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    categorySkuId: true,
    summary: true,
    type: Chunk685816.z.HERO,
    categoryStoreListingId: ""
  },
  A = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: A,
      heroBlock: B,
      tab: N,
      onVisibilityChange: R
    } = e, P = (0, i.O)(e => {
      null == R || R(e)
    }, .1, null != R), w = l.useRef(null), Z = (0, O.B)("HeroBlock"), D = (0, u.e7)([p.default], () => p.default.getCurrentUser()), M = (0, h.sp)(), H = l.useMemo(() => {
      var e;
      return null != B ? B : null == A ? L : {
        rankedSkuIds: null != (e = A.heroRanking) ? e : [],
        name: A.name,
        unpublishedAt: A.unpublishedAt,
        categorySkuId: A.skuId,
        summary: A.summary,
        type: c.z.HERO,
        categoryStoreListingId: A.storeListingId,
        bannerDisplayConfig: A.heroBannerDisplayConfig,
        logoDisplayConfig: A.heroLogoDisplayConfig,
        heroLogoUrl: A.heroLogoUrl,
        heroBannerUrl: A.heroBannerUrl,
        heroBannerAnimatedUrl: A.heroBannerAnimatedUrl
      }
    }, [B, A]), F = (0, E.Pc)("HeroBlock") && H.categorySkuId === j.Hi, {
      bannerDisplayConfig: W,
      logoDisplayConfig: U,
      heroLogo: z,
      heroBannerStatic: V,
      heroBannerAnimated: G,
      heroBannerRive: K
    } = (0, v.hr)(H), Y = null != (t = null == W ? true : W.responsive) && t, q = null == W ? true : W.backgroundStyle, Q = null != K, J = N === j.AW.ORBS, X = null != A && A.isOrbsExclusive, $ = J ? T.intl.string(T.t["1CdL8d"]) : T.intl.string(T.t.xYKa1T);
    J && F && ($ = T.intl.string(T.t.dVz4hi));
    let {
      analyticsLocations: ee
    } = (0, f.ZP)(), et = () => {
      J ? ((0, b.Y)({
        pageType: k.ZY5.SHOP_ORBS_TAB,
        sectionType: k.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: k.qAy.CTA_TO_QUEST_HOME
      }), F ? (0, x.Z)({
        analyticsLocations: ee
      }) : (0, g.navigateToQuestHome)({
        fromContent: o.j.ORBS_SHOP_HERO_CTA
      })) : (a({
        sourceButton: "shop latest category hero",
        categorySkuId: X ? H.categorySkuId : true,
        isInternalShopDeeplink: true,
        isOrbsExclusive: X
      }), m.default.track(k.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == M ? true : M.sessionId,
        sku_id: H.categorySkuId,
        page_type: N,
        page_section: null == M ? true : M.pageSection,
        page_category: null == M ? true : M.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != D && (n || H !== L) ? (0, r.jsxs)("div", {
      ref: P,
      className: I.heroBlock,
      children: [Q ? (0, S.gT)({
        isCustomCursorEnabled: Z,
        className: I.riveEventOverlay,
        riveEventTargetRef: w
      }) : null, (0, r.jsx)("div", {
        className: s()(I.banner, {
          [I.rivBanner]: Q,
          [I.responsive]: Y
        }),
        style: null != q ? {
          background: q
        } : true,
        children: null != V && (0, r.jsx)(_.Z, {
          bannerStatic: V,
          bannerAnimated: G,
          bannerRive: K,
          isResponsive: Y,
          eventTargetRef: w
        })
      }), (0, r.jsxs)("div", {
        className: I.heroBlockContent,
        children: [Q ? (0, r.jsx)("div", {
          className: I.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: et,
            text: $
          })
        }) : (0, r.jsxs)("div", {
          className: s()(I.heroHeaderContainer, {
            [I.responsive]: Y
          }),
          children: [n ? (0, r.jsx)("div", {
            className: I.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: I.heroHeaderBadgeLogoSummaryContainer,
            children: [(0, C.L9)(H.unpublishedAt) && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: T.intl.string(T.t["h/uBCR"]),
              className: I.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: I.heroLogoNameContainer,
              children: [null != z && (0, r.jsx)("img", {
                className: I.heroHeaderLogo,
                src: z,
                alt: H.name,
                style: null == U ? true : U.toDesktopStyles()
              }), null != H.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: I.title,
                color: "text-strong",
                children: H.title
              }), null != H.summary && "" !== H.summary && (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: J ? I.orbsSubHeaderText : I.subHeaderText,
                style: null != H.bannerTextColor ? {
                  color: H.bannerTextColor
                } : true,
                children: H.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: I.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: et,
              text: $
            })
          })]
        }), (0, r.jsx)(y.Z, {
          heroBlockRecord: H,
          tab: N,
          isBlockLoading: n,
          layout: N === j.AW.HOME ? "hscroll" : F ? "row" : "feed"
        })]
      })]
    }) : null
  }