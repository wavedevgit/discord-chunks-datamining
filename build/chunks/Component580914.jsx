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
    summary: "",
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
    } = e, Z = (0, E.W)("HeroBlock"), D = (0, o.O)(e => {
      null == w || w(e)
    }, .1, null != w), H = l.useRef(null), M = (0, O.B)("HeroBlock"), F = (0, u.e7)([p.default], () => p.default.getCurrentUser()), W = (0, h.sp)(), U = l.useMemo(() => {
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
    }, [R, N]), z = (0, v.Pc)("HeroBlock") && U.categorySkuId === T.Hi, {
      bannerStyleOverrides: V,
      logoStyleOverrides: G,
      heroLogo: K,
      heroBannerStatic: Y,
      heroBannerAnimated: q,
      heroBannerRive: Q
    } = (0, S.hr)(U), J = null != (t = null == V ? true : V.responsive) && t, X = null == V ? true : V.backgroundStyle, $ = null != Q, ee = P === T.AW.ORBS, et = null != N && N.isOrbsExclusive, en = ee ? L.intl.string(L.t["1CdL8d"]) : L.intl.string(L.t.xYKa1T);
    ee && z && (en = L.intl.string(L.t.dVz4hi));
    let {
      analyticsLocations: er
    } = (0, f.ZP)(), el = () => {
      ee ? ((0, b.Y)({
        pageType: j.ZY5.SHOP_ORBS_TAB,
        sectionType: j.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: j.qAy.CTA_TO_QUEST_HOME
      }), z ? (0, _.Z)({
        analyticsLocations: er
      }) : (0, g.navigateToQuestHome)({
        fromContent: i.j.ORBS_SHOP_HERO_CTA
      })) : (a({
        sourceButton: "shop latest category hero",
        categorySkuId: et ? U.categorySkuId : true,
        isInternalShopDeeplink: true,
        isOrbsExclusive: et
      }), m.default.track(j.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
      className: I.heroBlock,
      children: [$ ? (0, x.gT)({
        isCustomCursorEnabled: M,
        className: I.riveEventOverlay,
        riveEventTargetRef: H
      }) : null, (0, r.jsx)("div", {
        className: s()(I.banner, {
          [I.rivBanner]: $,
          [I.responsive]: J
        }),
        style: null != X ? {
          background: X
        } : true,
        children: null != Y && (0, r.jsx)(y.Z, {
          bannerStatic: Y,
          bannerAnimated: q,
          bannerRive: Q,
          isResponsive: J,
          eventTargetRef: H
        })
      }), (0, r.jsxs)("div", {
        className: I.heroBlockContent,
        children: [$ ? (0, r.jsx)("div", {
          className: I.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: el,
            text: en
          })
        }) : (0, r.jsxs)("div", {
          className: s()(I.heroHeaderContainer, {
            [I.responsive]: J
          }),
          children: [n ? (0, r.jsx)("div", {
            className: I.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: I.heroHeaderBadgeLogoSummaryContainer,
            children: [null != U.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: L.intl.string(L.t["h/uBCR"]),
              className: I.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: I.heroLogoNameContainer,
              children: [null != K && (0, r.jsx)("img", {
                className: I.heroHeaderLogo,
                src: K,
                alt: U.name,
                style: null == G ? true : G.toDesktopStyles()
              }), null != U.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: I.title,
                color: "text-strong",
                children: U.title
              }), "" !== U.summary && (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: ee ? I.orbsSubHeaderText : I.subHeaderText,
                style: null != U.bannerTextColor ? {
                  color: U.bannerTextColor
                } : true,
                children: U.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: I.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: el,
              text: en
            })
          })]
        }), (0, r.jsx)(k.Z, {
          heroBlockRecord: U,
          tab: P,
          isBlockLoading: n,
          layout: P === T.AW.HOME ? Z ? "hscroll" : "row" : z ? "row" : "feed"
        })]
      })]
    }) : null
  }