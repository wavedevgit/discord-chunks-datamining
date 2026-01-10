/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
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
let A = (0, Chunk884697.IC)(90),
  B = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    logoUrl: "",
    categorySkuId: true,
    bannerAsset: true,
    summary: true,
    type: Chunk685816.z.HERO,
    categoryStoreListingId: ""
  },
  N = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: N,
      heroBlock: R,
      tab: P,
      onVisibilityChange: w
    } = e, Z = (0, E.W)("HeroBlock"), D = (0, i.O)(e => {
      null == w || w(e)
    }, .1, null != w), M = l.useRef(null), H = (0, _.B)("HeroBlock"), F = (0, u.e7)([p.default], () => p.default.getCurrentUser()), W = (0, h.sp)(), U = l.useMemo(() => {
      var e, t;
      return null != R ? R : null == N ? B : {
        rankedSkuIds: null != (e = N.heroRanking) ? e : [],
        name: N.name,
        unpublishedAt: N.unpublishedAt,
        logoUrl: (0, C.uV)(null != (t = N.heroLogo) ? t : N.logo, {
          size: A
        }),
        categorySkuId: N.skuId,
        bannerAsset: N.heroBannerAsset,
        summary: N.summary,
        type: c.z.HERO,
        categoryStoreListingId: N.storeListingId,
        bannerDisplayConfig: N.heroBannerDisplayConfig,
        logoDisplayConfig: N.heroLogoDisplayConfig,
        heroLogoUrl: N.heroLogoUrl,
        heroBannerUrl: N.heroBannerUrl,
        heroBannerAnimatedUrl: N.heroBannerAnimatedUrl
      }
    }, [R, N]), z = (0, v.Pc)("HeroBlock") && U.categorySkuId === k.Hi, {
      bannerStyleOverrides: V,
      logoStyleOverrides: G,
      heroLogo: K,
      heroBannerStatic: Y,
      heroBannerAnimated: q,
      heroBannerRive: Q
    } = (0, S.hr)(U), J = null != (t = null == V ? true : V.responsive) && t, X = null == V ? true : V.backgroundStyle, $ = null != Q, ee = P === k.AW.ORBS, et = null != N && N.isOrbsExclusive, en = ee ? I.intl.string(I.t["1CdL8d"]) : I.intl.string(I.t.xYKa1T);
    ee && z && (en = I.intl.string(I.t.dVz4hi));
    let {
      analyticsLocations: er
    } = (0, f.ZP)(), el = () => {
      ee ? ((0, b.Y)({
        pageType: T.ZY5.SHOP_ORBS_TAB,
        sectionType: T.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: T.qAy.CTA_TO_QUEST_HOME
      }), z ? (0, x.Z)({
        analyticsLocations: er
      }) : (0, g.navigateToQuestHome)({
        fromContent: o.j.ORBS_SHOP_HERO_CTA
      })) : (a({
        sourceButton: "shop latest category hero",
        categorySkuId: et ? U.categorySkuId : true,
        isInternalShopDeeplink: true,
        isOrbsExclusive: et
      }), m.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == W ? true : W.sessionId,
        sku_id: U.categorySkuId,
        page_type: P,
        page_section: null == W ? true : W.pageSection,
        page_category: null == W ? true : W.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != F && (n || U !== B) ? (0, r.jsxs)("div", {
      ref: D,
      className: L.heroBlock,
      children: [$ ? (0, O.gT)({
        isCustomCursorEnabled: H,
        className: L.riveEventOverlay,
        riveEventTargetRef: M
      }) : null, (0, r.jsx)("div", {
        className: s()(L.banner, {
          [L.rivBanner]: $,
          [L.responsive]: J
        }),
        style: null != X ? {
          background: X
        } : true,
        children: null != Y && (0, r.jsx)(y.Z, {
          bannerStatic: Y,
          bannerAnimated: q,
          bannerRive: Q,
          isResponsive: J,
          eventTargetRef: M
        })
      }), (0, r.jsxs)("div", {
        className: L.heroBlockContent,
        children: [$ ? (0, r.jsx)("div", {
          className: L.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: el,
            text: en
          })
        }) : (0, r.jsxs)("div", {
          className: s()(L.heroHeaderContainer, {
            [L.responsive]: J
          }),
          children: [n ? (0, r.jsx)("div", {
            className: L.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: L.heroHeaderBadgeLogoSummaryContainer,
            children: [(0, C.L9)(U.unpublishedAt) && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: I.intl.string(I.t["h/uBCR"]),
              className: L.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: L.heroLogoNameContainer,
              children: [null != K && (0, r.jsx)("img", {
                className: L.heroHeaderLogo,
                src: K,
                alt: U.name,
                style: null == G ? true : G.toDesktopStyles()
              }), null != U.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: L.title,
                color: "text-strong",
                children: U.title
              }), null != U.summary && "" !== U.summary && (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: ee ? L.orbsSubHeaderText : L.subHeaderText,
                style: null != U.bannerTextColor ? {
                  color: U.bannerTextColor
                } : true,
                children: U.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: L.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: el,
              text: en
            })
          })]
        }), (0, r.jsx)(j.Z, {
          heroBlockRecord: U,
          tab: P,
          isBlockLoading: n,
          layout: P === k.AW.HOME ? Z ? "hscroll" : "row" : z ? "row" : "feed"
        })]
      })]
    }) : null
  }