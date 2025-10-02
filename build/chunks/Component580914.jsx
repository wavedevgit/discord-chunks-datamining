/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
let F = (0, Chunk884697.IC)(90),
  H = {
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
      heroBlock: D,
      tab: W,
      onVisibilityChange: U
    } = e, V = (0, d.O)(e => {
      null == U || U(e)
    }, .1, null != U), z = l.useRef(null), G = (0, N.G)("HeroBlock"), K = (0, c.e7)([f.default], () => f.default.getCurrentUser()), q = (0, k.Z)(), Y = (0, _.sp)(), X = v.Z.useConfig({
      location: "HeroBlock"
    }).showButtonLeftAligned && W !== B.AW.ORBS, Q = (0, S.x)("HeroBlock"), J = l.useMemo(() => {
      var e, t;
      return null != D ? D : null == M ? H : {
        rankedSkuIds: null != (e = M.heroRanking) ? e : [],
        name: M.name,
        unpublishedAt: M.unpublishedAt,
        logoUrl: (0, m.uV)(null != (t = M.heroLogo) ? t : M.logo, {
          size: F
        }),
        categorySkuId: M.skuId,
        bannerAsset: M.heroBannerAsset,
        fallbackBannerUrl: (0, m.uV)(M.heroBanner, {
          size: B.pv,
          format: "jpg"
        }),
        summary: M.summary,
        type: o.z.HERO,
        categoryStoreListingId: M.storeListingId,
        bannerConfig: M.heroBannerConfig,
        logoConfig: M.heroLogoDisplayConfig
      }
    }, [D, M]), {
      bannerStyleOverrides: $,
      logoStyleOverrides: ee,
      heroLogo: et,
      heroBannerStatic: en,
      heroBannerAnimated: er
    } = (0, j.hr)(J), el = null != (t = null == $ ? true : $.responsive) && t, ea = null == $ ? true : $.backgroundStyle, ei = (0, P.Dp)(er), es = (0, c.e7)([h.Z], () => h.Z.products), eo = l.useMemo(() => n ? [] : es.size > 0 ? q(J.rankedSkuIds) : [], [n, q, J.rankedSkuIds, es]), ec = l.useMemo(() => !n && 0 !== J.rankedSkuIds.length && !(eo.length > 0) && J.rankedSkuIds.every(e => {
      var t;
      return (null == (t = h.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, J.rankedSkuIds, eo.length]), eu = (0, x.a)()(eo), ed = (0, O.l)(eu).slice(0, 4), eg = (0, I.St)(ed), ep = W === B.AW.ORBS ? Z.intl.string(Z.t["1CdL8f"]) : G ? Z.intl.string(Z.t.guWAg4) : Q ? Z.intl.string(Z.t["/QvRam"]) : Z.intl.string(Z.t.xYKa1d), ef = (0, E.FF)("CollectiblesContent"), eC = (0, m.$2)(J.categorySkuId), e_ = b.Z.useConfig({
      location: "HeroBlock"
    }).showCardsV2, eh = () => {
      W === B.AW.ORBS ? ((0, p.Y)({
        pageType: R.ZY5.SHOP_ORBS_TAB,
        sectionType: R.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: R.qAy.CTA_TO_QUEST_HOME
      }), (0, g.navigateToQuestHome)({
        fromContent: s.j.ORBS_SHOP_HERO_CTA
      })) : (a("shop latest category hero", !ef || eC ? J.categorySkuId : true), C.default.track(R.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == Y ? true : Y.sessionId,
        sku_id: J.categorySkuId,
        page_type: W,
        page_section: null == Y ? true : Y.pageSection,
        page_category: null == Y ? true : Y.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != K && (n || J !== H) ? (0, r.jsxs)("div", {
      ref: V,
      className: w.heroBlock,
      children: [ei ? (0, P.gT)({
        isCustomCursorEnabled: G,
        className: w.riveEventOverlay,
        riveEventTargetRef: z
      }) : null, (0, r.jsx)("div", {
        className: i()(w.banner, {
          [w.rivBanner]: ei
        }),
        style: null != ea ? {
          background: ea
        } : true,
        children: (0, r.jsx)(A.Z, {
          bannerStatic: en,
          bannerAnimated: er,
          isResponsive: el,
          eventTargetRef: z
        })
      }), (0, r.jsxs)("div", {
        className: w.heroBlockContent,
        children: [ei ? (0, r.jsx)("div", {
          className: w.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(u.zxk, {
            variant: "overlay-primary",
            onClick: eh,
            text: ep
          })
        }) : (0, r.jsxs)("div", {
          className: i()(X ? w.heroHeaderContainerStacked : w.heroHeaderContainer, {
            [w.responsive]: el
          }),
          children: [n ? (0, r.jsx)("div", {
            className: w.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: w.heroHeaderBadgeLogoSummaryContainer,
            children: [null != J.unpublishedAt && (0, r.jsx)(u.IGR, {
              disableColor: true,
              text: Z.intl.string(Z.t["h/uBCQ"]),
              className: w.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: i()(w.heroLogoNameContainer, {
                [w.heroLogoNameContainerStacked]: X
              }),
              children: [null != J.logoUrl && (0, r.jsx)("img", {
                className: w.heroHeaderLogo,
                src: et,
                alt: J.name,
                style: null == ee ? true : ee.toDesktopStyles()
              }), null != J.title && (0, r.jsx)(u.X6q, {
                variant: "heading-xxl/bold",
                className: w.title,
                color: "header-primary",
                children: J.title
              }), "" !== J.summary && (0, r.jsx)(u.Text, {
                variant: eC ? "text-lg/medium" : "text-md/normal",
                className: eC ? w.orbsSubHeaderText : w.subHeaderText,
                style: null != J.bannerTextColor ? {
                  color: J.bannerTextColor
                } : true,
                children: J.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: X ? w.heroHeaderButtonContainerStacked : w.heroHeaderButtonContainer,
            children: (0, r.jsx)(u.zxk, {
              variant: "overlay-primary",
              onClick: eh,
              text: ep
            })
          })]
        }), (0, r.jsx)("div", {
          className: i()(w.row, w.feed, {
            [w.feedSingleRow]: W !== B.AW.ORBS
          }),
          children: n || ec ? (0, r.jsx)(r.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, r.jsx)(T.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: eg.map((e, t) => {
              let n = h.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(_.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: e_ ? (0, r.jsx)(L.Z, {
                  skuId: null == e ? true : e.skuId
                }, e.skuId) : (0, r.jsx)(y.Z, {
                  product: e,
                  category: n,
                  user: K,
                  tab: W,
                  shopBlockType: o.z.HERO
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }