/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk254690 = require("./254690.js"),
  Chunk655283 = require("./655283.js"),
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
  Chunk687983 = require("./687983.js");
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
      className: o()(R.heroBannerSheenContainer, {
        [R.responsive]: t
      }),
      children: [(0, r.jsx)("div", {
        id: "hero-block-left-shadow",
        className: o()(R.bannerShadow, R.left, {
          [R.darker]: null == n ? true : n.darker
        }),
        style: (null == n ? true : n.gradientLeft) != null ? {
          background: null == n ? true : n.gradientLeft
        } : true
      }), (0, r.jsx)("div", {
        id: "hero-block-right-shadow",
        className: o()(R.bannerShadow, R.right, {
          [R.darker]: null == n ? true : n.darker
        }),
        style: (null == n ? true : n.gradientRight) != null ? {
          background: null == n ? true : n.gradientRight
        } : true
      })]
    })
  },
  M = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: M,
      heroBlock: F,
      tab: H,
      onVisibilityChange: D
    } = e, W = (0, g.O)(e => {
      null == D || D(e)
    }, .1, null != D), U = (0, u.e7)([h.default], () => h.default.getCurrentUser()), V = (0, k.Z)(), z = (0, _.sp)(), G = S.Z.useConfig({
      location: "HeroBlock"
    }).showButtonLeftAligned && H !== N.AW.ORBS, q = (0, O.MG)("HeroBlock"), K = (0, O.xh)("HeroBlock"), Y = l.useMemo(() => {
      var e, t;
      return null != F ? F : null == M ? Z : {
        rankedSkuIds: null != (e = M.heroRanking) ? e : [],
        name: M.name,
        unpublishedAt: M.unpublishedAt,
        logoUrl: (0, b.uV)(null != (t = M.heroLogo) ? t : M.logo, {
          size: y.n
        }),
        categorySkuId: M.skuId,
        bannerAsset: M.heroBannerAsset,
        fallbackBannerUrl: (0, b.uV)(M.heroBanner, {
          size: N.pv,
          format: "jpg"
        }),
        summary: M.summary,
        type: c.z.HERO,
        categoryStoreListingId: M.storeListingId,
        bannerConfig: M.heroBannerConfig,
        logoConfig: M.heroLogoDisplayConfig
      }
    }, [F, M]), {
      bannerOverrides: X,
      bannerStyleOverrides: Q,
      logoStyleOverrides: J,
      heroLogo: $,
      heroBannerStatic: ee,
      heroBannerAnimated: et
    } = (0, j.hr)(Y), en = null == X ? true : X.heroBanner, er = null != (t = null == Q ? true : Q.responsive) && t, el = null == et ? true : et.endsWith(".riv"), ea = null == Q ? true : Q.backgroundStyle, eo = l.useMemo(() => V(Y.rankedSkuIds), [n, V, Y.rankedSkuIds]), es = (0, v.a)()(eo), ei = (0, x.l)(es).slice(0, 4), ec = (0, B.St)(ei), eu = H === N.AW.ORBS ? A.intl.string(A.t["1CdL8f"]) : q ? K ? A.intl.string(A.t["/QvRam"]) : A.intl.string(A.t.xYKa1d) : A.intl.formatToPlainString(A.t.wvKYCg, {
      category_name: Y.name
    }), ed = (0, E.FF)("CollectiblesContent"), eg = () => {
      H === N.AW.ORBS ? ((0, p.Y)({
        pageType: P.ZY5.SHOP_ORBS_TAB,
        sectionType: P.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: P.qAy.CTA_TO_QUEST_HOME
      }), (0, f.navigateToQuestHome)({
        fromContent: i.j.ORBS_SHOP_HERO_CTA
      })) : (a("shop latest category hero", ed && Y.categorySkuId !== s.T.ORB ? true : Y.categorySkuId), m.default.track(P.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == z ? true : z.sessionId,
        sku_id: Y.categorySkuId,
        page_type: H,
        page_section: null == z ? true : z.pageSection,
        page_category: null == z ? true : z.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != U && (n || Y !== Z) ? (0, r.jsxs)("div", {
      ref: W,
      className: R.heroBlock,
      children: [(0, r.jsxs)("div", {
        className: o()(R.banner, {
          [R.rivBanner]: el
        }),
        style: null != ea ? {
          background: ea
        } : true,
        children: [(0, r.jsx)(I.Z, {
          bannerStatic: ee,
          bannerAnimated: et,
          isResponsive: er
        }), (null == Q ? true : Q.hideSideShadow) === true || el ? null : (0, r.jsx)(w, {
          heroBannerOverrides: en,
          isResponsive: er
        })]
      }), (0, r.jsxs)("div", {
        className: R.heroBlockContent,
        children: [el ? (0, r.jsx)("div", {
          className: R.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.zxk, {
            variant: "overlay-primary",
            onClick: eg,
            text: eu
          })
        }) : (0, r.jsxs)("div", {
          className: o()(G ? R.heroHeaderContainerStacked : R.heroHeaderContainer, {
            [R.responsive]: er
          }),
          children: [n ? (0, r.jsx)("div", {
            className: R.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: R.heroHeaderBadgeLogoSummaryContainer,
            children: [null != Y.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: A.intl.string(A.t["h/uBCQ"]),
              className: R.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: o()(R.heroLogoNameContainer, {
                [R.heroLogoNameContainerStacked]: G
              }),
              children: [null != Y.logoUrl && (0, r.jsx)("img", {
                className: R.heroHeaderLogo,
                src: $,
                alt: Y.name,
                style: null == J ? true : J.toDesktopStyles()
              }), null != Y.title && (0, r.jsx)(d.X6q, {
                variant: "heading-xxl/bold",
                className: R.title,
                color: "header-primary",
                children: Y.title
              }), "" !== Y.summary && (0, r.jsx)(d.Text, {
                variant: Y.categorySkuId === s.T.ORB ? "text-lg/medium" : "text-md/normal",
                className: Y.categorySkuId === s.T.ORB ? R.orbsSubHeaderText : (null == X ? true : X.showDarkBannerText) ? R.subHeaderTextDark : R.subHeaderText,
                style: null != Y.bannerTextColor ? {
                  color: Y.bannerTextColor
                } : true,
                children: Y.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: G ? R.heroHeaderButtonContainerStacked : R.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: eg,
              text: eu
            })
          })]
        }), (0, r.jsx)("div", {
          className: o()(R.row, R.feed, {
            [R.feedSingleRow]: H !== N.AW.ORBS
          }),
          children: n ? (0, r.jsx)(r.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, r.jsx)(T.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: ec.map((e, t) => {
              let n = C.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(_.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(L.Z, {
                  product: e,
                  category: n,
                  user: U,
                  tab: H,
                  shopBlockType: c.z.HERO
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }