/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
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
  Chunk110560 = require("./110560.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk128922 = require("./128922.js"),
  Chunk870289 = require("./870289.js"),
  Chunk254690 = require("./254690.js"),
  Chunk655283 = require("./655283.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk653126 = require("./653126.jsx"),
  Chunk794324 = require("./794324.js"),
  Chunk934760 = require("./934760.js"),
  Chunk619899 = require("./619899.js"),
  Chunk190157 = require("./190157.jsx"),
  Chunk642909 = require("./642909.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let M = (0, Chunk884697.IC)(90),
  H = {
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
  D = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: D,
      heroBlock: W,
      tab: U,
      onVisibilityChange: V
    } = e, z = (0, g.O)(e => {
      null == V || V(e)
    }, .1, null != V), G = l.useRef(null), q = (0, A.G)("HeroBlock"), K = (0, u.e7)([h.default], () => h.default.getCurrentUser()), Y = (0, I.Z)(), X = (0, _.sp)(), Q = x.Z.useConfig({
      location: "HeroBlock"
    }).showButtonLeftAligned && U !== R.AW.ORBS, J = (0, v.MG)("HeroBlock"), $ = (0, v.xh)("HeroBlock"), ee = l.useMemo(() => {
      var e, t;
      return null != W ? W : null == D ? H : {
        rankedSkuIds: null != (e = D.heroRanking) ? e : [],
        name: D.name,
        unpublishedAt: D.unpublishedAt,
        logoUrl: (0, b.uV)(null != (t = D.heroLogo) ? t : D.logo, {
          size: M
        }),
        categorySkuId: D.skuId,
        bannerAsset: D.heroBannerAsset,
        fallbackBannerUrl: (0, b.uV)(D.heroBanner, {
          size: R.pv,
          format: "jpg"
        }),
        summary: D.summary,
        type: c.z.HERO,
        categoryStoreListingId: D.storeListingId,
        bannerConfig: D.heroBannerConfig,
        logoConfig: D.heroLogoDisplayConfig
      }
    }, [W, D]), {
      bannerStyleOverrides: et,
      logoStyleOverrides: en,
      heroLogo: er,
      heroBannerStatic: el,
      heroBannerAnimated: ea
    } = (0, k.hr)(ee), ei = null != (t = null == et ? true : et.responsive) && t, es = null == et ? true : et.backgroundStyle, eo = (0, B.Dp)(ea), ec = (0, u.e7)([m.Z], () => m.Z.products), eu = l.useMemo(() => n ? [] : ec.size > 0 ? Y(ee.rankedSkuIds) : [], [n, Y, ee.rankedSkuIds, ec]), ed = l.useMemo(() => !n && 0 !== ee.rankedSkuIds.length && !(eu.length > 0) && ee.rankedSkuIds.every(e => {
      var t;
      return (null == (t = m.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, ee.rankedSkuIds, eu.length]), eg = (0, O.a)()(eu), ep = (0, T.l)(eg).slice(0, 4), ef = (0, P.St)(ep), eh = U === R.AW.ORBS ? w.intl.string(w.t["1CdL8f"]) : J ? $ ? w.intl.string(w.t["/QvRam"]) : w.intl.string(w.t.xYKa1d) : w.intl.formatToPlainString(w.t.wvKYCg, {
      category_name: ee.name
    }), eC = (0, S.FF)("CollectiblesContent"), e_ = ee.categorySkuId === s.T.ORB, em = E.Z.useConfig({
      location: "HeroBlock"
    }).showCardsV2, eb = () => {
      U === R.AW.ORBS ? ((0, f.Y)({
        pageType: Z.ZY5.SHOP_ORBS_TAB,
        sectionType: Z.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: Z.qAy.CTA_TO_QUEST_HOME
      }), (0, p.navigateToQuestHome)({
        fromContent: o.j.ORBS_SHOP_HERO_CTA
      })) : (a("shop latest category hero", !eC || e_ ? ee.categorySkuId : true), C.default.track(Z.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == X ? true : X.sessionId,
        sku_id: ee.categorySkuId,
        page_type: U,
        page_section: null == X ? true : X.pageSection,
        page_category: null == X ? true : X.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != K && (n || ee !== H) ? (0, r.jsxs)("div", {
      ref: z,
      className: F.heroBlock,
      children: [eo ? (0, B.gT)({
        isCustomCursorEnabled: q,
        className: F.riveEventOverlay,
        riveEventTargetRef: G
      }) : null, (0, r.jsx)("div", {
        className: i()(F.banner, {
          [F.rivBanner]: eo
        }),
        style: null != es ? {
          background: es
        } : true,
        children: (0, r.jsx)(N.Z, {
          bannerStatic: el,
          bannerAnimated: ea,
          isResponsive: ei,
          eventTargetRef: G
        })
      }), (0, r.jsxs)("div", {
        className: F.heroBlockContent,
        children: [eo ? (0, r.jsx)("div", {
          className: F.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.zxk, {
            variant: "overlay-primary",
            onClick: eb,
            text: eh
          })
        }) : (0, r.jsxs)("div", {
          className: i()(Q ? F.heroHeaderContainerStacked : F.heroHeaderContainer, {
            [F.responsive]: ei
          }),
          children: [n ? (0, r.jsx)("div", {
            className: F.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: F.heroHeaderBadgeLogoSummaryContainer,
            children: [null != ee.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: w.intl.string(w.t["h/uBCQ"]),
              className: F.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: i()(F.heroLogoNameContainer, {
                [F.heroLogoNameContainerStacked]: Q
              }),
              children: [null != ee.logoUrl && (0, r.jsx)("img", {
                className: F.heroHeaderLogo,
                src: er,
                alt: ee.name,
                style: null == en ? true : en.toDesktopStyles()
              }), null != ee.title && (0, r.jsx)(d.X6q, {
                variant: "heading-xxl/bold",
                className: F.title,
                color: "header-primary",
                children: ee.title
              }), "" !== ee.summary && (0, r.jsx)(d.Text, {
                variant: e_ ? "text-lg/medium" : "text-md/normal",
                className: e_ ? F.orbsSubHeaderText : F.subHeaderText,
                style: null != ee.bannerTextColor ? {
                  color: ee.bannerTextColor
                } : true,
                children: ee.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: Q ? F.heroHeaderButtonContainerStacked : F.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: eb,
              text: eh
            })
          })]
        }), (0, r.jsx)("div", {
          className: i()(F.row, F.feed, {
            [F.feedSingleRow]: U !== R.AW.ORBS
          }),
          children: n || ed ? (0, r.jsx)(r.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, r.jsx)(y.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: ef.map((e, t) => {
              let n = m.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(_.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: em ? (0, r.jsx)(j.Z, {
                  skuId: null == e ? true : e.skuId,
                  config: {
                    tab: U,
                    shopBlockType: c.z.HERO
                  }
                }, e.skuId) : (0, r.jsx)(L.Z, {
                  product: e,
                  category: n,
                  user: K,
                  tab: U,
                  shopBlockType: c.z.HERO
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }