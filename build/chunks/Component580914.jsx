/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => B
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
  Chunk667090 = require("./667090.js"),
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
let A = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    categorySkuId: true,
    summary: true,
    type: Chunk685816.z.HERO,
    categoryStoreListingId: ""
  },
  B = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: B,
      heroBlock: N,
      tab: R,
      onVisibilityChange: P
    } = e, w = (0, E.W)("HeroBlock"), Z = (0, i.O)(e => {
      null == P || P(e)
    }, .1, null != P), D = l.useRef(null), M = (0, _.B)("HeroBlock"), H = (0, u.e7)([p.default], () => p.default.getCurrentUser()), F = (0, h.sp)(), W = l.useMemo(() => {
      var e;
      return null != N ? N : null == B ? A : {
        rankedSkuIds: null != (e = B.heroRanking) ? e : [],
        name: B.name,
        unpublishedAt: B.unpublishedAt,
        categorySkuId: B.skuId,
        summary: B.summary,
        type: c.z.HERO,
        categoryStoreListingId: B.storeListingId,
        bannerDisplayConfig: B.heroBannerDisplayConfig,
        logoDisplayConfig: B.heroLogoDisplayConfig,
        heroLogoUrl: B.heroLogoUrl,
        heroBannerUrl: B.heroBannerUrl,
        heroBannerAnimatedUrl: B.heroBannerAnimatedUrl
      }
    }, [N, B]), U = (0, v.Pc)("HeroBlock") && W.categorySkuId === k.Hi, {
      bannerDisplayConfig: z,
      logoDisplayConfig: V,
      heroLogo: G,
      heroBannerStatic: K,
      heroBannerAnimated: Y,
      heroBannerRive: q
    } = (0, S.hr)(W), Q = null != (t = null == z ? true : z.responsive) && t, J = null == z ? true : z.backgroundStyle, X = null != q, $ = R === k.AW.ORBS, ee = null != B && B.isOrbsExclusive, et = $ ? I.intl.string(I.t["1CdL8d"]) : I.intl.string(I.t.xYKa1T);
    $ && U && (et = I.intl.string(I.t.dVz4hi));
    let {
      analyticsLocations: en
    } = (0, f.ZP)(), er = () => {
      $ ? ((0, b.Y)({
        pageType: T.ZY5.SHOP_ORBS_TAB,
        sectionType: T.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: T.qAy.CTA_TO_QUEST_HOME
      }), U ? (0, x.Z)({
        analyticsLocations: en
      }) : (0, g.navigateToQuestHome)({
        fromContent: o.j.ORBS_SHOP_HERO_CTA
      })) : (a({
        sourceButton: "shop latest category hero",
        categorySkuId: ee ? W.categorySkuId : true,
        isInternalShopDeeplink: true,
        isOrbsExclusive: ee
      }), m.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == F ? true : F.sessionId,
        sku_id: W.categorySkuId,
        page_type: R,
        page_section: null == F ? true : F.pageSection,
        page_category: null == F ? true : F.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != H && (n || W !== A) ? (0, r.jsxs)("div", {
      ref: Z,
      className: L.heroBlock,
      children: [X ? (0, O.gT)({
        isCustomCursorEnabled: M,
        className: L.riveEventOverlay,
        riveEventTargetRef: D
      }) : null, (0, r.jsx)("div", {
        className: s()(L.banner, {
          [L.rivBanner]: X,
          [L.responsive]: Q
        }),
        style: null != J ? {
          background: J
        } : true,
        children: null != K && (0, r.jsx)(y.Z, {
          bannerStatic: K,
          bannerAnimated: Y,
          bannerRive: q,
          isResponsive: Q,
          eventTargetRef: D
        })
      }), (0, r.jsxs)("div", {
        className: L.heroBlockContent,
        children: [X ? (0, r.jsx)("div", {
          className: L.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: er,
            text: et
          })
        }) : (0, r.jsxs)("div", {
          className: s()(L.heroHeaderContainer, {
            [L.responsive]: Q
          }),
          children: [n ? (0, r.jsx)("div", {
            className: L.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: L.heroHeaderBadgeLogoSummaryContainer,
            children: [(0, C.L9)(W.unpublishedAt) && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: I.intl.string(I.t["h/uBCR"]),
              className: L.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: L.heroLogoNameContainer,
              children: [null != G && (0, r.jsx)("img", {
                className: L.heroHeaderLogo,
                src: G,
                alt: W.name,
                style: null == V ? true : V.toDesktopStyles()
              }), null != W.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: L.title,
                color: "text-strong",
                children: W.title
              }), null != W.summary && "" !== W.summary && (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: $ ? L.orbsSubHeaderText : L.subHeaderText,
                style: null != W.bannerTextColor ? {
                  color: W.bannerTextColor
                } : true,
                children: W.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: L.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: er,
              text: et
            })
          })]
        }), (0, r.jsx)(j.Z, {
          heroBlockRecord: W,
          tab: R,
          isBlockLoading: n,
          layout: R === k.AW.HOME ? w ? "hscroll" : "row" : U ? "row" : "feed"
        })]
      })]
    }) : null
  }