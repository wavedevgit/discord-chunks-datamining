/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk180650 = require("./180650.js"),
  Chunk636977 = require("./636977.js"),
  Chunk685816 = require("./685816.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk794231 = require("./794231.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk870289 = require("./870289.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk823941 = require("./823941.jsx"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk794324 = require("./794324.js"),
  Chunk934760 = require("./934760.js"),
  Chunk619899 = require("./619899.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let Z = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    logoUrl: "",
    categorySkuId: "",
    bannerAsset: true,
    fallbackBannerUrl: "",
    summary: "",
    type: Chunk685816.z.HERO,
    categoryStoreListingId: ""
  },
  w = e => {
    let {
      isResponsive: t,
      heroBannerOverrides: n
    } = e;
    return (0, r.jsxs)("div", {
      className: s()(R.heroBannerSheenContainer, {
        [R.responsive]: t
      }),
      children: [(0, r.jsx)("div", {
        id: "hero-block-left-shadow",
        className: s()(R.bannerShadow, R.left, {
          [R.darker]: null == n ? true : n.darker
        }),
        style: (null == n ? true : n.gradientLeft) != null ? {
          background: null == n ? true : n.gradientLeft
        } : true
      }), (0, r.jsx)("div", {
        id: "hero-block-right-shadow",
        className: s()(R.bannerShadow, R.right, {
          [R.darker]: null == n ? true : n.darker
        }),
        style: (null == n ? true : n.gradientRight) != null ? {
          background: null == n ? true : n.gradientRight
        } : true
      })]
    })
  },
  F = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: F,
      heroBlock: D,
      tab: M,
      onVisibilityChange: H
    } = e, W = (0, g.O)(e => {
      null == H || H(e)
    }, .1, null != H), U = (0, u.e7)([h.default], () => h.default.getCurrentUser()), V = (0, k.Z)(), z = (0, C.sp)(), {
      showBetaTag: G
    } = _.Z.useExperiment({
      location: "collectible_hero_block"
    }), q = l.useMemo(() => {
      var e, t;
      return null != D ? D : null == F ? Z : {
        rankedSkuIds: null != (e = F.heroRanking) ? e : [],
        name: F.name,
        unpublishedAt: F.unpublishedAt,
        logoUrl: (0, S.uV)(null != (t = F.heroLogo) ? t : F.logo, {
          size: y.n
        }),
        categorySkuId: F.skuId,
        bannerAsset: F.heroBannerAsset,
        fallbackBannerUrl: (0, S.uV)(F.heroBanner, {
          size: N.pv,
          format: "jpg"
        }),
        summary: F.summary,
        type: c.z.HERO,
        categoryStoreListingId: F.storeListingId,
        bannerConfig: F.heroBannerConfig,
        logoConfig: F.heroLogoDisplayConfig
      }
    }, [D, F]), {
      bannerOverrides: K,
      bannerStyleOverrides: Y,
      logoStyleOverrides: X,
      heroLogo: Q,
      heroBannerStatic: J,
      heroBannerAnimated: $
    } = (0, j.hr)(q), ee = null == K ? true : K.heroBanner, et = null != (t = null == Y ? true : Y.responsive) && t, en = null == Y ? true : Y.backgroundStyle, er = l.useMemo(() => V(q.rankedSkuIds), [n, V, q.rankedSkuIds]), el = (0, v.a)()(er), ea = (0, x.l)(el).slice(0, 4), es = (0, I.St)(ea), ei = M === N.AW.ORBS ? A.intl.string(A.t["1CdL8f"]) : A.intl.formatToPlainString(A.t.wvKYCg, {
      category_name: q.name
    }), eo = (0, O.FF)("CollectiblesContent");
    return null != U && (n || q !== Z) ? (0, r.jsxs)("div", {
      ref: W,
      className: R.heroBlock,
      children: [(0, r.jsxs)("div", {
        className: R.banner,
        style: null != en ? {
          background: en
        } : true,
        children: [(0, r.jsx)(B.Z, {
          bannerStatic: J,
          bannerAnimated: $,
          isResponsive: et
        }), (null == Y ? true : Y.hideSideShadow) === true ? null : (0, r.jsx)(w, {
          heroBannerOverrides: ee,
          isResponsive: et
        })]
      }), (0, r.jsxs)("div", {
        className: R.heroBlockContent,
        children: [(0, r.jsxs)("div", {
          className: s()(R.heroHeaderContainer, {
            [R.responsive]: et
          }),
          children: [n ? (0, r.jsx)("div", {
            className: R.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: R.heroHeaderBadgeLogoSummaryContainer,
            children: [null != q.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: A.intl.string(A.t["h/uBCQ"]),
              className: R.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: R.heroLogoNameContainer,
              children: [null != q.logoUrl && (0, r.jsx)("img", {
                className: R.heroHeaderLogo,
                src: Q,
                alt: q.name,
                style: null == X ? true : X.toDesktopStyles()
              }), null != q.title && (0, r.jsxs)(d.X6q, {
                variant: "heading-xxl/bold",
                className: R.title,
                color: "header-primary",
                children: [q.title, M === N.AW.ORBS && G && (0, r.jsx)(p.Z, {})]
              }), "" !== q.summary && (0, r.jsx)(d.Text, {
                variant: q.categorySkuId === i.T.ORB ? "text-lg/medium" : "text-md/normal",
                className: q.categorySkuId === i.T.ORB ? R.orbsSubHeaderText : (null == K ? true : K.showDarkBannerText) ? R.subHeaderTextDark : R.subHeaderText,
                style: null != q.bannerTextColor ? {
                  color: q.bannerTextColor
                } : true,
                children: q.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: R.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: () => {
                M === N.AW.ORBS ? ((0, m.Y)({
                  pageType: P.ZY5.SHOP_ORBS_TAB,
                  sectionType: P.jXE.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: P.qAy.CTA_TO_QUEST_HOME
                }), (0, f.navigateToQuestHome)({
                  fromContent: o.j.ORBS_SHOP_HERO_CTA
                })) : (a("shop latest category hero", eo && q.categorySkuId !== i.T.ORB ? true : q.categorySkuId), b.default.track(P.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == z ? true : z.sessionId,
                  sku_id: q.categorySkuId,
                  page_type: M,
                  page_section: null == z ? true : z.pageSection,
                  page_category: null == z ? true : z.pageCategory,
                  cta_name: "shop latest category hero button"
                }))
              },
              text: ei
            })
          })]
        }), (0, r.jsx)("div", {
          className: s()(R.row, R.feed, {
            [R.feedSingleRow]: M !== N.AW.ORBS
          }),
          children: n ? (0, r.jsx)(r.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, r.jsx)(T.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: es.map((e, t) => {
              let n = E.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(C.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(L.Z, {
                  product: e,
                  category: n,
                  user: U,
                  tab: M,
                  _isInHeroBlock: true
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }