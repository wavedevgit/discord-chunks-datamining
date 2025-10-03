/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk401975 = require("./401975.jsx"),
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
let F = (0, Chunk884697.IC)(90),
  D = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    logoUrl: "",
    categorySkuId: true,
    bannerAsset: true,
    fallbackBannerUrl: "",
    summary: "",
    type: Chunk685816.z.HERO,
    categoryStoreListingId: ""
  },
  M = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: M,
      heroBlock: W,
      tab: U,
      onVisibilityChange: V
    } = e, z = (0, d.O)(e => {
      null == V || V(e)
    }, .1, null != V), G = l.useRef(null), K = (0, B.G)("HeroBlock"), q = (0, c.e7)([f.default], () => f.default.getCurrentUser()), Y = (0, I.Z)(), X = (0, _.sp)(), Q = S.Z.useConfig({
      location: "HeroBlock"
    }).showButtonLeftAligned && U !== R.AW.ORBS, J = (0, v.x)("HeroBlock"), $ = l.useMemo(() => {
      var e, t;
      return null != W ? W : null == M ? D : {
        rankedSkuIds: null != (e = M.heroRanking) ? e : [],
        name: M.name,
        unpublishedAt: M.unpublishedAt,
        logoUrl: (0, m.uV)(null != (t = M.heroLogo) ? t : M.logo, {
          size: F
        }),
        categorySkuId: M.skuId,
        bannerAsset: M.heroBannerAsset,
        fallbackBannerUrl: (0, m.uV)(M.heroBanner, {
          size: R.pv,
          format: "jpg"
        }),
        summary: M.summary,
        type: o.z.HERO,
        categoryStoreListingId: M.storeListingId,
        bannerConfig: M.heroBannerConfig,
        logoConfig: M.heroLogoDisplayConfig
      }
    }, [W, M]), {
      bannerStyleOverrides: ee,
      logoStyleOverrides: et,
      heroLogo: en,
      heroBannerStatic: er,
      heroBannerAnimated: el
    } = (0, k.hr)($), ea = null != (t = null == ee ? true : ee.responsive) && t, es = null == ee ? true : ee.backgroundStyle, ei = (0, N.Dp)(el), eo = (0, c.e7)([h.Z], () => h.Z.products), ec = l.useMemo(() => n ? [] : eo.size > 0 ? Y($.rankedSkuIds) : [], [n, Y, $.rankedSkuIds, eo]), eu = l.useMemo(() => !n && 0 !== $.rankedSkuIds.length && !(ec.length > 0) && $.rankedSkuIds.every(e => {
      var t;
      return (null == (t = h.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, $.rankedSkuIds, ec.length]), ed = (0, x.a)()(ec), eg = (0, O.l)(ed).slice(0, 4), ep = (0, P.St)(eg), ef = U === R.AW.ORBS ? w.intl.string(w.t["1CdL8f"]) : K ? w.intl.string(w.t.guWAg4) : J ? w.intl.string(w.t["/QvRam"]) : w.intl.string(w.t.xYKa1d), eC = (0, E.FF)("CollectiblesContent"), e_ = (0, m.$2)($.categorySkuId), eh = b.Z.useConfig({
      location: "HeroBlock"
    }).showCardsV2, em = () => {
      U === R.AW.ORBS ? ((0, p.Y)({
        pageType: Z.ZY5.SHOP_ORBS_TAB,
        sectionType: Z.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: Z.qAy.CTA_TO_QUEST_HOME
      }), (0, g.navigateToQuestHome)({
        fromContent: i.j.ORBS_SHOP_HERO_CTA
      })) : (a("shop latest category hero", !eC || e_ ? $.categorySkuId : true), C.default.track(Z.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == X ? true : X.sessionId,
        sku_id: $.categorySkuId,
        page_type: U,
        page_section: null == X ? true : X.pageSection,
        page_category: null == X ? true : X.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != q && (n || $ !== D) ? (0, r.jsxs)("div", {
      ref: z,
      className: H.heroBlock,
      children: [ei ? (0, N.gT)({
        isCustomCursorEnabled: K,
        className: H.riveEventOverlay,
        riveEventTargetRef: G
      }) : null, (0, r.jsx)("div", {
        className: s()(H.banner, {
          [H.rivBanner]: ei
        }),
        style: null != es ? {
          background: es
        } : true,
        children: (0, r.jsx)(A.Z, {
          bannerStatic: er,
          bannerAnimated: el,
          isResponsive: ea,
          eventTargetRef: G
        })
      }), (0, r.jsxs)("div", {
        className: H.heroBlockContent,
        children: [ei ? (0, r.jsx)("div", {
          className: H.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(u.zxk, {
            variant: "overlay-primary",
            onClick: em,
            text: ef
          })
        }) : (0, r.jsxs)("div", {
          className: s()(Q ? H.heroHeaderContainerStacked : H.heroHeaderContainer, {
            [H.responsive]: ea
          }),
          children: [n ? (0, r.jsx)("div", {
            className: H.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: H.heroHeaderBadgeLogoSummaryContainer,
            children: [null != $.unpublishedAt && (0, r.jsx)(u.IGR, {
              disableColor: true,
              text: w.intl.string(w.t["h/uBCQ"]),
              className: H.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: s()(H.heroLogoNameContainer, {
                [H.heroLogoNameContainerStacked]: Q
              }),
              children: [null != $.logoUrl && (0, r.jsx)("img", {
                className: H.heroHeaderLogo,
                src: en,
                alt: $.name,
                style: null == et ? true : et.toDesktopStyles()
              }), null != $.title && (0, r.jsx)(u.X6q, {
                variant: "heading-xxl/bold",
                className: H.title,
                color: "header-primary",
                children: $.title
              }), "" !== $.summary && (0, r.jsx)(u.Text, {
                variant: e_ ? "text-lg/medium" : "text-md/normal",
                className: e_ ? H.orbsSubHeaderText : H.subHeaderText,
                style: null != $.bannerTextColor ? {
                  color: $.bannerTextColor
                } : true,
                children: $.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: Q ? H.heroHeaderButtonContainerStacked : H.heroHeaderButtonContainer,
            children: (0, r.jsx)(u.zxk, {
              variant: "overlay-primary",
              onClick: em,
              text: ef
            })
          })]
        }), (0, r.jsx)("div", {
          className: s()(H.row, H.feed, {
            [H.feedSingleRow]: U !== R.AW.ORBS
          }),
          children: n || eu ? (0, r.jsx)(r.Fragment, {
            children: [true, true, true, true].map((e, t) => eh ? (0, r.jsx)(L.Z, {}, t) : (0, r.jsx)(T.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: ep.map((e, t) => {
              let n = h.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(_.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: eh ? (0, r.jsx)(j.Z, {
                  skuId: null == e ? true : e.skuId
                }, e.skuId) : (0, r.jsx)(y.Z, {
                  product: e,
                  category: n,
                  user: q,
                  tab: U,
                  shopBlockType: o.z.HERO
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }