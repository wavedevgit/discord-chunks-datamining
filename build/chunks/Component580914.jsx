/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
let R = {
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
  Z = e => {
    let {
      isResponsive: t,
      heroBannerOverrides: r
    } = e;
    return (0, n.jsxs)("div", {
      className: i()(B.heroBannerSheenContainer, {
        [B.responsive]: t
      }),
      children: [(0, n.jsx)("div", {
        id: "hero-block-left-shadow",
        className: i()(B.bannerShadow, B.left, {
          [B.darker]: null == r ? true : r.darker
        }),
        style: (null == r ? true : r.gradientLeft) != null ? {
          background: null == r ? true : r.gradientLeft
        } : true
      }), (0, n.jsx)("div", {
        id: "hero-block-right-shadow",
        className: i()(B.bannerShadow, B.right, {
          [B.darker]: null == r ? true : r.darker
        }),
        style: (null == r ? true : r.gradientRight) != null ? {
          background: null == r ? true : r.gradientRight
        } : true
      })]
    })
  },
  D = e => {
    var t;
    let {
      isLoading: r,
      handleTransition: a,
      category: D,
      heroBlock: M,
      tab: F,
      onVisibilityChange: H
    } = e, W = (0, p.O)(e => {
      null == H || H(e)
    }, .1, null != H), U = (0, u.e7)([h.default], () => h.default.getCurrentUser()), V = (0, L.Z)(), z = (0, v.sp)(), {
      showBetaTag: G
    } = b.Z.useExperiment({
      location: "collectible_hero_block"
    }), q = l.useMemo(() => {
      var e, t;
      return null != M ? M : null == D ? R : {
        rankedSkuIds: null != (e = D.heroRanking) ? e : [],
        name: D.name,
        unpublishedAt: D.unpublishedAt,
        logoUrl: (0, C.uV)(null != (t = D.heroLogo) ? t : D.logo, {
          size: x.n
        }),
        categorySkuId: D.skuId,
        bannerAsset: D.heroBannerAsset,
        fallbackBannerUrl: (0, C.uV)(D.heroBanner, {
          size: N.pv,
          format: "jpg"
        }),
        summary: D.summary,
        type: c.z.HERO,
        categoryStoreListingId: D.storeListingId,
        bannerConfig: D.heroBannerConfig,
        logoConfig: D.heroLogoDisplayConfig
      }
    }, [M, D]), {
      bannerOverrides: K,
      bannerStyleOverrides: Y,
      logoStyleOverrides: X,
      heroLogo: Q,
      heroBannerStatic: J,
      heroBannerAnimated: $
    } = (0, P.hr)(q), ee = null == K ? true : K.heroBanner, et = null != (t = null == Y ? true : Y.responsive) && t, er = null == Y ? true : Y.backgroundStyle, en = l.useMemo(() => V(q.rankedSkuIds), [r, V, q.rankedSkuIds]), el = (0, y.a)()(en), ea = (0, S.l)(el).slice(0, 4), ei = (0, k.St)(ea), eo = F === N.AW.ORBS ? w.intl.string(w.t["1CdL8f"]) : w.intl.formatToPlainString(w.t.wvKYCg, {
      category_name: q.name
    }), es = (0, E.FF)("CollectiblesContent");
    return null != U && (r || q !== R) ? (0, n.jsxs)("div", {
      ref: W,
      className: B.heroBlock,
      children: [(0, n.jsxs)("div", {
        className: B.banner,
        style: null != er ? {
          background: er
        } : true,
        children: [(0, n.jsx)(I.Z, {
          bannerStatic: J,
          bannerAnimated: $,
          isResponsive: et
        }), (null == Y ? true : Y.hideSideShadow) === true ? null : (0, n.jsx)(Z, {
          heroBannerOverrides: ee,
          isResponsive: et
        })]
      }), (0, n.jsxs)("div", {
        className: B.heroBlockContent,
        children: [(0, n.jsxs)("div", {
          className: i()(B.heroHeaderContainer, {
            [B.responsive]: et
          }),
          children: [r ? (0, n.jsx)("div", {
            className: B.heroHeaderBadgeLogoSummaryContainer
          }) : (0, n.jsxs)("div", {
            className: B.heroHeaderBadgeLogoSummaryContainer,
            children: [null != q.unpublishedAt && (0, n.jsx)(d.IGR, {
              disableColor: true,
              text: w.intl.string(w.t["h/uBCQ"]),
              className: B.limitedTimeBadge
            }), (0, n.jsxs)("div", {
              className: B.heroLogoNameContainer,
              children: [null != q.logoUrl && (0, n.jsx)("img", {
                className: B.heroHeaderLogo,
                src: Q,
                alt: q.name,
                style: null == X ? true : X.toDesktopStyles()
              }), null != q.title && (0, n.jsxs)(d.X6q, {
                variant: "heading-xxl/bold",
                className: B.title,
                color: "header-primary",
                children: [q.title, F === N.AW.ORBS && G && (0, n.jsx)(g.Z, {})]
              }), "" !== q.summary && (0, n.jsx)(d.Text, {
                variant: q.categorySkuId === o.T.ORB ? "text-lg/medium" : "text-md/normal",
                className: q.categorySkuId === o.T.ORB ? B.orbsSubHeaderText : (null == K ? true : K.showDarkBannerText) ? B.subHeaderTextDark : B.subHeaderText,
                style: null != q.bannerTextColor ? {
                  color: q.bannerTextColor
                } : true,
                children: q.summary
              })]
            })]
          }), !r && (0, n.jsx)("div", {
            className: B.heroHeaderButtonContainer,
            children: (0, n.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: () => {
                F === N.AW.ORBS ? ((0, m.Y)({
                  pageType: A.ZY5.SHOP_ORBS_TAB,
                  sectionType: A.jXE.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: A.qAy.CTA_TO_QUEST_HOME
                }), (0, f.navigateToQuestHome)({
                  fromContent: s.j.ORBS_SHOP_HERO_CTA
                })) : (a("shop latest category hero", es && q.categorySkuId !== o.T.ORB ? true : q.categorySkuId), _.default.track(A.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == z ? true : z.sessionId,
                  sku_id: q.categorySkuId,
                  page_type: F,
                  page_section: null == z ? true : z.pageSection,
                  page_category: null == z ? true : z.pageCategory,
                  cta_name: "shop latest category hero button"
                }))
              },
              text: eo
            })
          })]
        }), (0, n.jsx)("div", {
          className: i()(B.row, B.feed, {
            [B.feedSingleRow]: F !== N.AW.ORBS
          }),
          children: r ? (0, n.jsx)(n.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, n.jsx)(j.K, {}, t))
          }) : (0, n.jsx)(n.Fragment, {
            children: ei.map((e, t) => {
              let r = O.Z.getCategoryForProduct(e.skuId);
              return null == e || null == r ? null : (0, n.jsx)(v.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, n.jsx)(T.Z, {
                  product: e,
                  category: r,
                  user: U,
                  tab: F,
                  _isInHeroBlock: true
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }