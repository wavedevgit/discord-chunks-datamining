/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => W
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk501678 = require("./501678.jsx"),
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
let H = (0, Chunk884697.IC)(90),
  D = {
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
  W = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: i,
      category: W,
      heroBlock: U,
      tab: V,
      onVisibilityChange: z
    } = e, G = (0, g.O)(e => {
      null == z || z(e)
    }, .1, null != z), q = l.useRef(null), K = (0, B.G)("HeroBlock"), Y = (0, u.e7)([h.default], () => h.default.getCurrentUser()), X = (0, P.Z)(), Q = (0, _.sp)(), J = x.Z.useConfig({
      location: "HeroBlock"
    }).showButtonLeftAligned && V !== Z.AW.ORBS, $ = (0, O.MG)("HeroBlock"), ee = (0, O.xh)("HeroBlock"), et = l.useMemo(() => {
      var e, t;
      return null != U ? U : null == W ? D : {
        rankedSkuIds: null != (e = W.heroRanking) ? e : [],
        name: W.name,
        unpublishedAt: W.unpublishedAt,
        logoUrl: (0, E.uV)(null != (t = W.heroLogo) ? t : W.logo, {
          size: H
        }),
        categorySkuId: W.skuId,
        bannerAsset: W.heroBannerAsset,
        fallbackBannerUrl: (0, E.uV)(W.heroBanner, {
          size: Z.pv,
          format: "jpg"
        }),
        summary: W.summary,
        type: c.z.HERO,
        categoryStoreListingId: W.storeListingId,
        bannerConfig: W.heroBannerConfig,
        logoConfig: W.heroLogoDisplayConfig
      }
    }, [U, W]), {
      bannerStyleOverrides: en,
      logoStyleOverrides: er,
      heroLogo: el,
      heroBannerStatic: ei,
      heroBannerAnimated: ea
    } = (0, I.hr)(et), es = null != (t = null == en ? true : en.responsive) && t, eo = null == en ? true : en.backgroundStyle, ec = (0, A.Dp)(ea), eu = (0, u.e7)([m.Z], () => m.Z.products), ed = l.useMemo(() => n ? [] : eu.size > 0 ? X(et.rankedSkuIds) : [], [n, X, et.rankedSkuIds, eu]), eg = l.useMemo(() => !n && 0 !== et.rankedSkuIds.length && !(ed.length > 0) && et.rankedSkuIds.every(e => {
      var t;
      return (null == (t = m.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, et.rankedSkuIds, ed.length]), ep = (0, T.a)()(ed), ef = (0, y.l)(ep).slice(0, 4), eh = (0, N.St)(ef), eC = V === Z.AW.ORBS ? F.intl.string(F.t["1CdL8f"]) : $ ? ee ? F.intl.string(F.t["/QvRam"]) : F.intl.string(F.t.xYKa1d) : F.intl.formatToPlainString(F.t.wvKYCg, {
      category_name: et.name
    }), e_ = (0, v.FF)("CollectiblesContent"), em = et.categorySkuId === s.T.ORB, eb = S.Z.useConfig({
      location: "HeroBlock"
    }).showCardsV2, eE = () => {
      V === Z.AW.ORBS ? ((0, f.Y)({
        pageType: w.ZY5.SHOP_ORBS_TAB,
        sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: w.qAy.CTA_TO_QUEST_HOME
      }), (0, p.navigateToQuestHome)({
        fromContent: o.j.ORBS_SHOP_HERO_CTA
      })) : (i("shop latest category hero", !e_ || em ? et.categorySkuId : true), C.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == Q ? true : Q.sessionId,
        sku_id: et.categorySkuId,
        page_type: V,
        page_section: null == Q ? true : Q.pageSection,
        page_category: null == Q ? true : Q.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != Y && (n || et !== D) ? (0, r.jsx)(b.g6, {
      blockType: c.z.HERO,
      children: (0, r.jsxs)("div", {
        ref: G,
        className: M.heroBlock,
        children: [ec ? (0, A.gT)({
          isCustomCursorEnabled: K,
          className: M.riveEventOverlay,
          riveEventTargetRef: q
        }) : null, (0, r.jsx)("div", {
          className: a()(M.banner, {
            [M.rivBanner]: ec
          }),
          style: null != eo ? {
            background: eo
          } : true,
          children: (0, r.jsx)(R.Z, {
            bannerStatic: ei,
            bannerAnimated: ea,
            isResponsive: es,
            eventTargetRef: q
          })
        }), (0, r.jsxs)("div", {
          className: M.heroBlockContent,
          children: [ec ? (0, r.jsx)("div", {
            className: M.rivBannerButtonContainer,
            children: !n && (0, r.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: eE,
              text: eC
            })
          }) : (0, r.jsxs)("div", {
            className: a()(J ? M.heroHeaderContainerStacked : M.heroHeaderContainer, {
              [M.responsive]: es
            }),
            children: [n ? (0, r.jsx)("div", {
              className: M.heroHeaderBadgeLogoSummaryContainer
            }) : (0, r.jsxs)("div", {
              className: M.heroHeaderBadgeLogoSummaryContainer,
              children: [null != et.unpublishedAt && (0, r.jsx)(d.IGR, {
                disableColor: true,
                text: F.intl.string(F.t["h/uBCQ"]),
                className: M.limitedTimeBadge
              }), (0, r.jsxs)("div", {
                className: a()(M.heroLogoNameContainer, {
                  [M.heroLogoNameContainerStacked]: J
                }),
                children: [null != et.logoUrl && (0, r.jsx)("img", {
                  className: M.heroHeaderLogo,
                  src: el,
                  alt: et.name,
                  style: null == er ? true : er.toDesktopStyles()
                }), null != et.title && (0, r.jsx)(d.X6q, {
                  variant: "heading-xxl/bold",
                  className: M.title,
                  color: "header-primary",
                  children: et.title
                }), "" !== et.summary && (0, r.jsx)(d.Text, {
                  variant: em ? "text-lg/medium" : "text-md/normal",
                  className: em ? M.orbsSubHeaderText : M.subHeaderText,
                  style: null != et.bannerTextColor ? {
                    color: et.bannerTextColor
                  } : true,
                  children: et.summary
                })]
              })]
            }), !n && (0, r.jsx)("div", {
              className: J ? M.heroHeaderButtonContainerStacked : M.heroHeaderButtonContainer,
              children: (0, r.jsx)(d.zxk, {
                variant: "overlay-primary",
                onClick: eE,
                text: eC
              })
            })]
          }), (0, r.jsx)("div", {
            className: a()(M.row, M.feed, {
              [M.feedSingleRow]: V !== Z.AW.ORBS
            }),
            children: n || eg ? (0, r.jsx)(r.Fragment, {
              children: [true, true, true, true].map((e, t) => (0, r.jsx)(L.K, {}, t))
            }) : (0, r.jsx)(r.Fragment, {
              children: eh.map((e, t) => {
                let n = m.Z.getCategoryForProduct(e.skuId);
                return null == e || null == n ? null : (0, r.jsx)(_.k0, {
                  newValue: {
                    tilePosition: t,
                    pageSection: "top 4",
                    categoryPosition: 0
                  },
                  children: eb ? (0, r.jsx)(k.Z, {
                    skuId: null == e ? true : e.skuId
                  }, e.skuId) : (0, r.jsx)(j.Z, {
                    product: e,
                    category: n,
                    user: Y,
                    tab: V,
                    shopBlockType: c.z.HERO
                  }, e.skuId)
                }, null == e ? true : e.skuId)
              })
            })
          })]
        })]
      })
    }) : null
  }