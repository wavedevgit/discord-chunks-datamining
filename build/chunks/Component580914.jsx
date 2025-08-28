/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => Z
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
  Chunk859788 = require("./859788.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let A = {
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
  R = e => {
    let {
      isResponsive: t,
      heroBannerOverrides: n
    } = e;
    return (0, r.jsxs)("div", {
      className: s()(P.heroBannerSheenContainer, {
        [P.responsive]: t
      }),
      children: [(0, r.jsx)("div", {
        id: "hero-block-left-shadow",
        className: s()(P.bannerShadow, P.left, {
          [P.darker]: null == n ? true : n.darker
        }),
        style: (null == n ? true : n.gradientLeft) != null ? {
          background: null == n ? true : n.gradientLeft
        } : true
      }), (0, r.jsx)("div", {
        id: "hero-block-right-shadow",
        className: s()(P.bannerShadow, P.right, {
          [P.darker]: null == n ? true : n.darker
        }),
        style: (null == n ? true : n.gradientRight) != null ? {
          background: null == n ? true : n.gradientRight
        } : true
      })]
    })
  },
  Z = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: Z,
      heroBlock: w,
      tab: F,
      onVisibilityChange: D
    } = e, M = (0, g.O)(e => {
      null == D || D(e)
    }, .1, null != D), H = (0, u.e7)([m.default], () => m.default.getCurrentUser()), W = (0, L.Z)(), U = (0, h.sp)(), V = l.useMemo(() => {
      var e, t;
      return null != w ? w : null == Z ? A : {
        rankedSkuIds: null != (e = Z.heroRanking) ? e : [],
        name: Z.name,
        unpublishedAt: Z.unpublishedAt,
        logoUrl: (0, C.uV)(null != (t = Z.heroLogo) ? t : Z.logo, {
          size: v.n
        }),
        categorySkuId: Z.skuId,
        bannerAsset: Z.heroBannerAsset,
        fallbackBannerUrl: (0, C.uV)(Z.heroBanner, {
          size: I.pv,
          format: "jpg"
        }),
        summary: Z.summary,
        type: c.z.HERO,
        categoryStoreListingId: Z.storeListingId,
        bannerConfig: Z.heroBannerConfig,
        logoConfig: Z.heroLogoDisplayConfig
      }
    }, [w, Z]), {
      bannerOverrides: z,
      bannerStyleOverrides: G,
      logoStyleOverrides: q,
      heroLogo: K,
      heroBannerStatic: Y,
      heroBannerAnimated: X
    } = (0, T.hr)(V), Q = null == z ? true : z.heroBanner, J = null != (t = null == G ? true : G.responsive) && t, $ = null == G ? true : G.backgroundStyle, ee = l.useMemo(() => W(V.rankedSkuIds), [n, W, V.rankedSkuIds]), et = (0, S.a)()(ee), en = (0, O.l)(et).slice(0, 4), er = (0, j.St)(en), el = F === I.AW.ORBS ? N.intl.string(N.t["1CdL8f"]) : N.intl.formatToPlainString(N.t.wvKYCg, {
      category_name: V.name
    }), ea = (0, E.FF)("CollectiblesContent");
    return null != H && (n || V !== A) ? (0, r.jsxs)("div", {
      ref: M,
      className: P.heroBlock,
      children: [(0, r.jsxs)("div", {
        className: P.banner,
        style: null != $ ? {
          background: $
        } : true,
        children: [(0, r.jsx)(k.Z, {
          bannerStatic: Y,
          bannerAnimated: X,
          isResponsive: J
        }), (null == G ? true : G.hideSideShadow) === true ? null : (0, r.jsx)(R, {
          heroBannerOverrides: Q,
          isResponsive: J
        })]
      }), (0, r.jsxs)("div", {
        className: P.heroBlockContent,
        children: [(0, r.jsxs)("div", {
          className: s()(P.heroHeaderContainer, {
            [P.responsive]: J
          }),
          children: [n ? (0, r.jsx)("div", {
            className: P.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: P.heroHeaderBadgeLogoSummaryContainer,
            children: [null != V.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: N.intl.string(N.t["h/uBCQ"]),
              className: P.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: P.heroLogoNameContainer,
              children: [null != V.logoUrl && (0, r.jsx)("img", {
                className: P.heroHeaderLogo,
                src: K,
                alt: V.name,
                style: null == q ? true : q.toDesktopStyles()
              }), null != V.title && (0, r.jsx)(d.X6q, {
                variant: "heading-xxl/bold",
                className: P.title,
                color: "header-primary",
                children: V.title
              }), "" !== V.summary && (0, r.jsx)(d.Text, {
                variant: V.categorySkuId === i.T.ORB ? "text-lg/medium" : "text-md/normal",
                className: V.categorySkuId === i.T.ORB ? P.orbsSubHeaderText : (null == z ? true : z.showDarkBannerText) ? P.subHeaderTextDark : P.subHeaderText,
                style: null != V.bannerTextColor ? {
                  color: V.bannerTextColor
                } : true,
                children: V.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: P.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: () => {
                F === I.AW.ORBS ? ((0, f.Y)({
                  pageType: B.ZY5.SHOP_ORBS_TAB,
                  sectionType: B.jXE.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: B.qAy.CTA_TO_QUEST_HOME
                }), (0, p.navigateToQuestHome)({
                  fromContent: o.j.ORBS_SHOP_HERO_CTA
                })) : (a("shop latest category hero", ea && V.categorySkuId !== i.T.ORB ? true : V.categorySkuId), _.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == U ? true : U.sessionId,
                  sku_id: V.categorySkuId,
                  page_type: F,
                  page_section: null == U ? true : U.pageSection,
                  page_category: null == U ? true : U.pageCategory,
                  cta_name: "shop latest category hero button"
                }))
              },
              text: el
            })
          })]
        }), (0, r.jsx)("div", {
          className: s()(P.row, P.feed, {
            [P.feedSingleRow]: F !== I.AW.ORBS
          }),
          children: n ? (0, r.jsx)(r.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, r.jsx)(x.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: er.map((e, t) => {
              let n = b.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(h.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(y.Z, {
                  product: e,
                  category: n,
                  user: H,
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