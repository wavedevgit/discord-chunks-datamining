/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => w
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
  Chunk110560 = require("./110560.jsx"),
  Chunk507808 = require("./507808.js"),
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
  Chunk642909 = require("./642909.js"),
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
      heroBannerOverrides: n
    } = e;
    return (0, r.jsxs)("div", {
      className: s()(A.heroBannerSheenContainer, {
        [A.responsive]: t
      }),
      children: [(0, r.jsx)("div", {
        id: "hero-block-left-shadow",
        className: s()(A.bannerShadow, A.left, {
          [A.darker]: null == n ? true : n.darker
        }),
        style: (null == n ? true : n.gradientLeft) != null ? {
          background: null == n ? true : n.gradientLeft
        } : true
      }), (0, r.jsx)("div", {
        id: "hero-block-right-shadow",
        className: s()(A.bannerShadow, A.right, {
          [A.darker]: null == n ? true : n.darker
        }),
        style: (null == n ? true : n.gradientRight) != null ? {
          background: null == n ? true : n.gradientRight
        } : true
      })]
    })
  },
  w = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: w,
      heroBlock: F,
      tab: D,
      onVisibilityChange: M
    } = e, H = (0, g.O)(e => {
      null == M || M(e)
    }, .1, null != M), W = (0, u.e7)([m.default], () => m.default.getCurrentUser()), U = (0, L.Z)(), V = (0, h.sp)(), z = l.useMemo(() => {
      var e, t;
      return null != F ? F : null == w ? R : {
        rankedSkuIds: null != (e = w.heroRanking) ? e : [],
        name: w.name,
        unpublishedAt: w.unpublishedAt,
        logoUrl: (0, b.uV)(null != (t = w.heroLogo) ? t : w.logo, {
          size: v.n
        }),
        categorySkuId: w.skuId,
        bannerAsset: w.heroBannerAsset,
        fallbackBannerUrl: (0, b.uV)(w.heroBanner, {
          size: N.pv,
          format: "jpg"
        }),
        summary: w.summary,
        type: c.z.HERO,
        categoryStoreListingId: w.storeListingId,
        bannerConfig: w.heroBannerConfig,
        logoConfig: w.heroLogoDisplayConfig
      }
    }, [F, w]), {
      bannerOverrides: G,
      bannerStyleOverrides: q,
      logoStyleOverrides: K,
      heroLogo: Y,
      heroBannerStatic: X,
      heroBannerAnimated: Q
    } = (0, T.hr)(z), J = null == G ? true : G.heroBanner, $ = null != (t = null == q ? true : q.responsive) && t, ee = null == q ? true : q.backgroundStyle, et = l.useMemo(() => U(z.rankedSkuIds), [n, U, z.rankedSkuIds]), en = (0, S.a)()(et), er = (0, O.l)(en).slice(0, 4), el = (0, j.St)(er), ea = D === N.AW.ORBS ? P.intl.string(P.t["1CdL8f"]) : P.intl.formatToPlainString(P.t.wvKYCg, {
      category_name: z.name
    }), es = (0, E.FF)("CollectiblesContent"), ei = (0, k.G)("CollectiblesShopTallCard");
    return null != W && (n || z !== R) ? (0, r.jsxs)("div", {
      ref: H,
      className: A.heroBlock,
      children: [(0, r.jsxs)("div", {
        className: A.banner,
        style: null != ee ? {
          background: ee
        } : true,
        children: [(0, r.jsx)(I.Z, {
          bannerStatic: X,
          bannerAnimated: Q,
          isResponsive: $
        }), (null == q ? true : q.hideSideShadow) === true ? null : (0, r.jsx)(Z, {
          heroBannerOverrides: J,
          isResponsive: $
        })]
      }), (0, r.jsxs)("div", {
        className: A.heroBlockContent,
        children: [(0, r.jsxs)("div", {
          className: s()(A.heroHeaderContainer, {
            [A.responsive]: $
          }),
          children: [n ? (0, r.jsx)("div", {
            className: A.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: A.heroHeaderBadgeLogoSummaryContainer,
            children: [null != z.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: P.intl.string(P.t["h/uBCQ"]),
              className: A.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: A.heroLogoNameContainer,
              children: [null != z.logoUrl && (0, r.jsx)("img", {
                className: A.heroHeaderLogo,
                src: Y,
                alt: z.name,
                style: null == K ? true : K.toDesktopStyles()
              }), null != z.title && (0, r.jsx)(d.X6q, {
                variant: "heading-xxl/bold",
                className: A.title,
                color: "header-primary",
                children: z.title
              }), "" !== z.summary && (0, r.jsx)(d.Text, {
                variant: z.categorySkuId === i.T.ORB ? "text-lg/medium" : "text-md/normal",
                className: z.categorySkuId === i.T.ORB ? A.orbsSubHeaderText : (null == G ? true : G.showDarkBannerText) ? A.subHeaderTextDark : A.subHeaderText,
                style: null != z.bannerTextColor ? {
                  color: z.bannerTextColor
                } : true,
                children: z.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: A.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: () => {
                D === N.AW.ORBS ? ((0, f.Y)({
                  pageType: B.ZY5.SHOP_ORBS_TAB,
                  sectionType: B.jXE.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: B.qAy.CTA_TO_QUEST_HOME
                }), (0, p.navigateToQuestHome)({
                  fromContent: o.j.ORBS_SHOP_HERO_CTA
                })) : (a("shop latest category hero", es && z.categorySkuId !== i.T.ORB ? true : z.categorySkuId), _.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == V ? true : V.sessionId,
                  sku_id: z.categorySkuId,
                  page_type: D,
                  page_section: null == V ? true : V.pageSection,
                  page_category: null == V ? true : V.pageCategory,
                  cta_name: "shop latest category hero button"
                }))
              },
              text: ea
            })
          })]
        }), (0, r.jsx)("div", {
          className: s()(A.row, A.feed, {
            [A.feedSingleRow]: D !== N.AW.ORBS
          }),
          children: n ? (0, r.jsx)(r.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, r.jsx)(x.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: el.map((e, t) => {
              let n = C.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(h.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(y.Z, {
                  product: e,
                  category: n,
                  user: W,
                  tab: D,
                  variantType: ei ? N.Ch.THUMBNAIL : N.Ch.DEFAULT
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }