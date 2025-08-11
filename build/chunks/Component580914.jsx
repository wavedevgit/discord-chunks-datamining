/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk26931 = require("./26931.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk823941 = require("./823941.jsx"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk794324 = require("./794324.js"),
  Chunk619899 = require("./619899.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk806734 = require("./806734.js");
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
    var t, r, n, l;
    return null == e ? R : {
      rankedSkuIds: null != (t = e.heroRanking) ? t : [],
      name: e.name,
      unpublishedAt: e.unpublishedAt,
      logoUrl: (0, C.uV)(null != (n = null != (r = e.heroLogo) ? r : e.logo) ? n : "", {
        size: j.n
      }),
      categorySkuId: e.skuId,
      bannerAsset: e.heroBannerAsset,
      fallbackBannerUrl: (0, C.uV)(null != (l = e.heroBanner) ? l : "", {
        size: N.pv,
        format: "jpg"
      }),
      summary: e.summary,
      type: c.z.HERO,
      categoryStoreListingId: e.storeListingId,
      bannerConfig: e.heroBannerConfig,
      logoConfig: e.heroLogoDisplayConfig
    }
  },
  D = e => {
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
  M = e => {
    var t;
    let {
      isLoading: r,
      handleTransition: a,
      category: c,
      heroBlock: C,
      tab: j,
      onVisibilityChange: M
    } = e, F = (0, p.O)(e => {
      null == M || M(e)
    }, .1, null != M), H = (0, u.e7)([m.default], () => m.default.getCurrentUser()), W = (0, S.u)(), V = (0, v.sp)(), {
      showBetaTag: U
    } = h.Z.useExperiment({
      location: "collectible_hero_block"
    }), z = l.useMemo(() => null != C ? C : Z(c), [C, c]), {
      bannerOverrides: G,
      bannerStyleOverrides: q,
      logoStyleOverrides: K,
      heroLogo: Y,
      heroBannerStatic: X,
      heroBannerAnimated: J
    } = (0, L.hr)(z), Q = null == G ? true : G.heroBanner, $ = null != (t = null == q ? true : q.responsive) && t, ee = null == q ? true : q.backgroundStyle, et = l.useMemo(() => W(z.rankedSkuIds), [r, W, z.rankedSkuIds]), er = (0, y.a)()(et), en = (0, x.l)(er).slice(0, 4), el = (0, k.St)(en), ea = j === N.AW.ORBS ? w.intl.string(w.t["1CdL8f"]) : w.intl.formatToPlainString(w.t.wvKYCg, {
      category_name: z.name
    }), ei = (0, E.FF)("CollectiblesContent");
    return null != H && (r || z !== R) ? (0, n.jsxs)("div", {
      ref: F,
      className: B.heroBlock,
      children: [(0, n.jsxs)("div", {
        className: B.banner,
        style: null != ee ? {
          background: ee
        } : true,
        children: [(0, n.jsx)(I.Z, {
          bannerStatic: X,
          bannerAnimated: J,
          isResponsive: $
        }), (null == q ? true : q.hideSideShadow) === true ? null : (0, n.jsx)(D, {
          heroBannerOverrides: Q,
          isResponsive: $
        })]
      }), (0, n.jsxs)("div", {
        className: B.heroBlockContent,
        children: [(0, n.jsxs)("div", {
          className: i()(B.heroHeaderContainer, {
            [B.responsive]: $
          }),
          children: [r ? (0, n.jsx)("div", {
            className: B.heroHeaderBadgeLogoSummaryContainer
          }) : (0, n.jsxs)("div", {
            className: B.heroHeaderBadgeLogoSummaryContainer,
            children: [null != z.unpublishedAt && (0, n.jsx)(d.IGR, {
              disableColor: true,
              text: w.intl.string(w.t["h/uBCQ"]),
              className: B.limitedTimeBadge
            }), (0, n.jsxs)("div", {
              className: B.heroLogoNameContainer,
              children: [null != z.logoUrl && (0, n.jsx)("img", {
                className: B.heroHeaderLogo,
                src: Y,
                alt: z.name,
                style: null == K ? true : K.toDesktopStyles()
              }), null != z.title && (0, n.jsxs)(d.X6q, {
                variant: "heading-xxl/bold",
                className: B.title,
                color: "header-primary",
                children: [z.title, j === N.AW.ORBS && U && (0, n.jsx)(g.Z, {})]
              }), "" !== z.summary && (0, n.jsx)(d.Text, {
                variant: z.categorySkuId === o.T.ORB ? "text-lg/medium" : "text-md/normal",
                className: z.categorySkuId === o.T.ORB ? B.orbsSubHeaderText : (null == G ? true : G.showDarkBannerText) ? B.subHeaderTextDark : B.subHeaderText,
                style: null != z.bannerTextColor ? {
                  color: z.bannerTextColor
                } : true,
                children: z.summary
              })]
            })]
          }), !r && (0, n.jsx)("div", {
            className: B.heroHeaderButtonContainer,
            children: (0, n.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: () => {
                j === N.AW.ORBS ? ((0, b.Y)({
                  pageType: A.ZY5.SHOP_ORBS_TAB,
                  sectionType: A.jXE.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: A.qAy.CTA_TO_QUEST_HOME
                }), (0, f.navigateToQuestHome)({
                  fromContent: s.j.ORBS_SHOP_HERO_CTA
                })) : (a("shop latest category hero", ei && z.categorySkuId !== o.T.ORB ? true : z.categorySkuId), _.default.track(A.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == V ? true : V.sessionId,
                  sku_id: z.categorySkuId,
                  page_type: j,
                  page_section: null == V ? true : V.pageSection,
                  page_category: null == V ? true : V.pageCategory,
                  cta_name: "shop latest category hero button"
                }))
              },
              text: ea
            })
          })]
        }), (0, n.jsx)("div", {
          className: i()(B.row, B.feed, {
            [B.feedSingleRow]: j !== N.AW.ORBS
          }),
          children: r ? (0, n.jsx)(n.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, n.jsx)(T.K, {}, t))
          }) : (0, n.jsx)(n.Fragment, {
            children: el.map((e, t) => {
              let r = O.Z.getCategoryForProduct(e.skuId);
              return null == e || null == r ? null : (0, n.jsx)(v.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, n.jsx)(P.Z, {
                  product: e,
                  category: r,
                  user: H,
                  tab: j,
                  _isInHeroBlock: true
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }