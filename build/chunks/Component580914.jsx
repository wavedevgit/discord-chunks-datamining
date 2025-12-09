/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
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
  Chunk870289 = require("./870289.js"),
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
  Chunk310582 = require("./310582.js");
let N = (0, Chunk884697.IC)(90),
  A = {
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
  P = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: i,
      category: P,
      heroBlock: R,
      tab: Z,
      onVisibilityChange: w
    } = e, H = (0, v.W)("HeroBlock"), D = (0, o.O)(e => {
      null == w || w(e)
    }, .1, null != w), M = l.useRef(null), F = (0, y.B)("HeroBlock"), W = (0, u.e7)([m.default], () => m.default.getCurrentUser()), U = (0, h.sp)(), V = l.useMemo(() => {
      var e, t;
      return null != R ? R : null == P ? A : {
        rankedSkuIds: null != (e = P.heroRanking) ? e : [],
        name: P.name,
        unpublishedAt: P.unpublishedAt,
        logoUrl: (0, _.uV)(null != (t = P.heroLogo) ? t : P.logo, {
          size: N
        }),
        categorySkuId: P.skuId,
        bannerAsset: P.heroBannerAsset,
        summary: P.summary,
        type: c.z.HERO,
        categoryStoreListingId: P.storeListingId,
        bannerDisplayConfig: P.heroBannerDisplayConfig,
        logoDisplayConfig: P.heroLogoDisplayConfig,
        heroLogoUrl: P.heroLogoUrl,
        heroBannerUrl: P.heroBannerUrl,
        heroBannerAnimatedUrl: P.heroBannerAnimatedUrl
      }
    }, [R, P]), z = (0, E.Pc)("HeroBlock") && V.categorySkuId === T.Hi, {
      bannerStyleOverrides: G,
      logoStyleOverrides: K,
      heroLogo: Y,
      heroBannerStatic: q,
      heroBannerAnimated: Q,
      heroBannerRive: J
    } = (0, S.hr)(V), X = null != (t = null == G ? true : G.responsive) && t, $ = null == G ? true : G.backgroundStyle, ee = null != J, et = Z === T.AW.ORBS, en = null != P && P.isOrbsExclusive, er = et ? L.intl.string(L.t["1CdL8d"]) : L.intl.string(L.t.xYKa1T);
    et && z && (er = L.intl.string(L.t.dVz4hi));
    let el = (0, b.FF)("CollectiblesContent"),
      {
        analyticsLocations: ei
      } = (0, g.ZP)(),
      es = () => {
        et ? ((0, p.Y)({
          pageType: I.ZY5.SHOP_ORBS_TAB,
          sectionType: I.jXE.ORBS_SHOP_HERO_BLOCK,
          ctaObject: I.qAy.CTA_TO_QUEST_HOME
        }), z ? (0, O.Z)({
          analyticsLocations: ei
        }) : (0, f.navigateToQuestHome)({
          fromContent: a.j.ORBS_SHOP_HERO_CTA
        })) : (i({
          sourceButton: "shop latest category hero",
          categorySkuId: !el || en ? V.categorySkuId : true,
          isInternalShopDeeplink: true,
          isOrbsExclusive: en
        }), C.default.track(I.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == U ? true : U.sessionId,
          sku_id: V.categorySkuId,
          page_type: Z,
          page_section: null == U ? true : U.pageSection,
          page_category: null == U ? true : U.pageCategory,
          cta_name: "shop latest category hero button"
        }))
      };
    return null != W && (n || V !== A) ? (0, r.jsxs)("div", {
      ref: D,
      className: B.heroBlock,
      children: [ee ? (0, x.gT)({
        isCustomCursorEnabled: F,
        className: B.riveEventOverlay,
        riveEventTargetRef: M
      }) : null, (0, r.jsx)("div", {
        className: s()(B.banner, {
          [B.rivBanner]: ee,
          [B.responsive]: X
        }),
        style: null != $ ? {
          background: $
        } : true,
        children: null != q && (0, r.jsx)(j.Z, {
          bannerStatic: q,
          bannerAnimated: Q,
          bannerRive: J,
          isResponsive: X,
          eventTargetRef: M
        })
      }), (0, r.jsxs)("div", {
        className: B.heroBlockContent,
        children: [ee ? (0, r.jsx)("div", {
          className: B.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: es,
            text: er
          })
        }) : (0, r.jsxs)("div", {
          className: s()(B.heroHeaderContainer, {
            [B.responsive]: X
          }),
          children: [n ? (0, r.jsx)("div", {
            className: B.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: B.heroHeaderBadgeLogoSummaryContainer,
            children: [null != V.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: L.intl.string(L.t["h/uBCR"]),
              className: B.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: B.heroLogoNameContainer,
              children: [null != Y && (0, r.jsx)("img", {
                className: B.heroHeaderLogo,
                src: Y,
                alt: V.name,
                style: null == K ? true : K.toDesktopStyles()
              }), null != V.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: B.title,
                color: "header-primary",
                children: V.title
              }), "" !== V.summary && (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: et ? B.orbsSubHeaderText : B.subHeaderText,
                style: null != V.bannerTextColor ? {
                  color: V.bannerTextColor
                } : true,
                children: V.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: B.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: es,
              text: er
            })
          })]
        }), (0, r.jsx)(k.Z, {
          heroBlockRecord: V,
          tab: Z,
          isBlockLoading: n,
          layout: Z === T.AW.HOME ? H ? "hscroll" : "row" : z ? "row" : "feed"
        })]
      })]
    }) : null
  }