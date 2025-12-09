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
  Chunk870289 = require("./870289.js"),
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
let B = (0, Chunk884697.IC)(90),
  N = {
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
  A = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: i,
      category: A,
      heroBlock: P,
      tab: R,
      onVisibilityChange: Z
    } = e, w = (0, o.O)(e => {
      null == Z || Z(e)
    }, .1, null != Z), D = l.useRef(null), H = (0, x.B)("HeroBlock"), M = (0, u.e7)([m.default], () => m.default.getCurrentUser()), F = (0, h.sp)(), W = l.useMemo(() => {
      var e, t;
      return null != P ? P : null == A ? N : {
        rankedSkuIds: null != (e = A.heroRanking) ? e : [],
        name: A.name,
        unpublishedAt: A.unpublishedAt,
        logoUrl: (0, _.uV)(null != (t = A.heroLogo) ? t : A.logo, {
          size: B
        }),
        categorySkuId: A.skuId,
        bannerAsset: A.heroBannerAsset,
        summary: A.summary,
        type: c.z.HERO,
        categoryStoreListingId: A.storeListingId,
        bannerDisplayConfig: A.heroBannerDisplayConfig,
        logoDisplayConfig: A.heroLogoDisplayConfig,
        heroLogoUrl: A.heroLogoUrl,
        heroBannerUrl: A.heroBannerUrl,
        heroBannerAnimatedUrl: A.heroBannerAnimatedUrl
      }
    }, [P, A]), U = (0, v.Pc)("HeroBlock") && W.categorySkuId === k.Hi, {
      bannerStyleOverrides: V,
      logoStyleOverrides: z,
      heroLogo: G,
      heroBannerStatic: K,
      heroBannerAnimated: Y,
      heroBannerRive: q
    } = (0, E.hr)(W), Q = null != (t = null == V ? true : V.responsive) && t, J = null == V ? true : V.backgroundStyle, X = null != q, $ = R === k.AW.ORBS, ee = null != A && A.isOrbsExclusive, et = $ ? I.intl.string(I.t["1CdL8d"]) : I.intl.string(I.t.xYKa1T);
    $ && U && (et = I.intl.string(I.t.dVz4hi));
    let en = (0, b.FF)("CollectiblesContent"),
      {
        analyticsLocations: er
      } = (0, g.ZP)(),
      el = () => {
        $ ? ((0, p.Y)({
          pageType: T.ZY5.SHOP_ORBS_TAB,
          sectionType: T.jXE.ORBS_SHOP_HERO_BLOCK,
          ctaObject: T.qAy.CTA_TO_QUEST_HOME
        }), U ? (0, O.Z)({
          analyticsLocations: er
        }) : (0, f.navigateToQuestHome)({
          fromContent: a.j.ORBS_SHOP_HERO_CTA
        })) : (i({
          sourceButton: "shop latest category hero",
          categorySkuId: !en || ee ? W.categorySkuId : true,
          isInternalShopDeeplink: true,
          isOrbsExclusive: ee
        }), C.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == F ? true : F.sessionId,
          sku_id: W.categorySkuId,
          page_type: R,
          page_section: null == F ? true : F.pageSection,
          page_category: null == F ? true : F.pageCategory,
          cta_name: "shop latest category hero button"
        }))
      };
    return null != M && (n || W !== N) ? (0, r.jsxs)("div", {
      ref: w,
      className: L.heroBlock,
      children: [X ? (0, S.gT)({
        isCustomCursorEnabled: H,
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
            onClick: el,
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
            children: [null != W.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: I.intl.string(I.t["h/uBCR"]),
              className: L.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: L.heroLogoNameContainer,
              children: [null != G && (0, r.jsx)("img", {
                className: L.heroHeaderLogo,
                src: G,
                alt: W.name,
                style: null == z ? true : z.toDesktopStyles()
              }), null != W.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: L.title,
                color: "header-primary",
                children: W.title
              }), "" !== W.summary && (0, r.jsx)(d.Text, {
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
              onClick: el,
              text: et
            })
          })]
        }), (0, r.jsx)(j.Z, {
          heroBlockRecord: W,
          tab: R,
          isBlockLoading: n,
          layout: R === k.AW.HOME || U ? "row" : "feed"
        })]
      })]
    }) : null
  }