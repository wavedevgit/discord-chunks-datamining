/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk636977 = require("./636977.js"),
  Chunk685816 = require("./685816.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
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
let M = (0, Chunk884697.IC)(90),
  W = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    logoUrl: "",
    categorySkuId: true,
    bannerAsset: true,
    summary: "",
    type: Chunk685816.z.HERO,
    categoryStoreListingId: ""
  },
  U = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: s,
      category: U,
      heroBlock: V,
      tab: z,
      onVisibilityChange: G
    } = e, K = (0, a.O)(e => {
      null == G || G(e)
    }, .1, null != G), q = l.useRef(null), Y = (0, R.G)("HeroBlock"), Q = (0, u.e7)([h.default], () => h.default.getCurrentUser()), X = (0, N.Z)(), J = (0, m.sp)(), $ = x.Z.useConfig({
      location: "HeroBlock"
    }).showButtonLeftAligned && z !== w.AW.ORBS, ee = (0, O.x)("HeroBlock"), et = l.useMemo(() => {
      var e, t;
      return null != V ? V : null == U ? W : {
        rankedSkuIds: null != (e = U.heroRanking) ? e : [],
        name: U.name,
        unpublishedAt: U.unpublishedAt,
        logoUrl: (0, E.uV)(null != (t = U.heroLogo) ? t : U.logo, {
          size: M
        }),
        categorySkuId: U.skuId,
        bannerAsset: U.heroBannerAsset,
        summary: U.summary,
        type: c.z.HERO,
        categoryStoreListingId: U.storeListingId,
        bannerDisplayConfig: U.heroBannerDisplayConfig,
        logoDisplayConfig: U.heroLogoDisplayConfig,
        heroLogoUrl: U.heroLogoUrl,
        heroBannerUrl: U.heroBannerUrl,
        heroBannerAnimatedUrl: U.heroBannerAnimatedUrl
      }
    }, [V, U]), {
      bannerStyleOverrides: en,
      logoStyleOverrides: er,
      heroLogo: el,
      heroBannerStatic: es,
      heroBannerAnimated: ei,
      heroBannerRive: ea
    } = (0, P.hr)(et), eo = null != (t = null == en ? true : en.responsive) && t, ec = null == en ? true : en.backgroundStyle, eu = null != ea, ed = (0, u.e7)([b.Z], () => b.Z.products), eg = l.useMemo(() => n ? [] : ed.size > 0 ? X(et.rankedSkuIds) : [], [n, X, et.rankedSkuIds, ed]), ef = l.useMemo(() => !n && 0 !== et.rankedSkuIds.length && !(eg.length > 0) && et.rankedSkuIds.every(e => {
      var t;
      return (null == (t = b.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, et.rankedSkuIds, eg.length]), {
      cardContainerRef: ep,
      totalCards: eC
    } = (e => {
      let [t, n] = l.useState(1), r = (0, d.dQu)(d.TVs.space.SPACE_XL), s = (0, f.Z)(() => {
        (null == i ? true : i.current) != null && n(Math.max(1, Math.floor((i.current.offsetWidth + r) / (246 + r))))
      }), i = (0, g.y)(s, [r, e], {
        fireOnMount: true,
        fireOnDepsChange: true,
        enabled: e
      });
      return {
        cardContainerRef: l.useCallback(t => {
          i.current = t, null != t && e && s()
        }, [s, i, e]),
        totalCards: e ? t : 4
      }
    })(z !== w.AW.ORBS), eh = (0, y.a)()(eg), e_ = (0, j.l)(eh).slice(0, eC), em = (0, B.St)(e_), eb = z === w.AW.ORBS ? H.intl.string(H.t["1CdL8f"]) : Y ? H.intl.string(H.t.guWAg4) : ee ? H.intl.string(H.t["/QvRam"]) : H.intl.string(H.t.xYKa1d), eE = (0, S.FF)("CollectiblesContent"), ev = (0, E.$2)(et.categorySkuId), eS = v.Z.useConfig({
      location: "HeroBlock"
    }).showCardsV2, ex = () => {
      z === w.AW.ORBS ? ((0, C.Y)({
        pageType: F.ZY5.SHOP_ORBS_TAB,
        sectionType: F.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: F.qAy.CTA_TO_QUEST_HOME
      }), (0, p.navigateToQuestHome)({
        fromContent: o.j.ORBS_SHOP_HERO_CTA
      })) : (s("shop latest category hero", !eE || ev ? et.categorySkuId : true), _.default.track(F.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == J ? true : J.sessionId,
        sku_id: et.categorySkuId,
        page_type: z,
        page_section: null == J ? true : J.pageSection,
        page_category: null == J ? true : J.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != Q && (n || et !== W) ? (0, r.jsxs)("div", {
      ref: K,
      className: D.heroBlock,
      children: [eu ? (0, A.gT)({
        isCustomCursorEnabled: Y,
        className: D.riveEventOverlay,
        riveEventTargetRef: q
      }) : null, (0, r.jsx)("div", {
        className: i()(D.banner, {
          [D.rivBanner]: eu
        }),
        style: null != ec ? {
          background: ec
        } : true,
        children: null != es && (0, r.jsx)(Z.Z, {
          bannerStatic: es,
          bannerAnimated: ei,
          bannerRive: ea,
          isResponsive: eo,
          eventTargetRef: q
        })
      }), (0, r.jsxs)("div", {
        className: D.heroBlockContent,
        children: [eu ? (0, r.jsx)("div", {
          className: D.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.zxk, {
            variant: "overlay-primary",
            onClick: ex,
            text: eb
          })
        }) : (0, r.jsxs)("div", {
          className: i()($ ? D.heroHeaderContainerStacked : D.heroHeaderContainer, {
            [D.responsive]: eo
          }),
          children: [n ? (0, r.jsx)("div", {
            className: D.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: D.heroHeaderBadgeLogoSummaryContainer,
            children: [null != et.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: H.intl.string(H.t["h/uBCQ"]),
              className: D.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: i()(D.heroLogoNameContainer, {
                [D.heroLogoNameContainerStacked]: $
              }),
              children: [null != el && (0, r.jsx)("img", {
                className: D.heroHeaderLogo,
                src: el,
                alt: et.name,
                style: null == er ? true : er.toDesktopStyles()
              }), null != et.title && (0, r.jsx)(d.X6q, {
                variant: "heading-xxl/bold",
                className: D.title,
                color: "header-primary",
                children: et.title
              }), "" !== et.summary && (0, r.jsx)(d.Text, {
                variant: ev ? "text-lg/medium" : "text-md/normal",
                className: ev ? D.orbsSubHeaderText : D.subHeaderText,
                style: null != et.bannerTextColor ? {
                  color: et.bannerTextColor
                } : true,
                children: et.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: $ ? D.heroHeaderButtonContainerStacked : D.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: ex,
              text: eb
            })
          })]
        }), (0, r.jsx)("div", {
          className: i()({
            [D.row]: z === w.AW.HOME,
            [D.feed]: z === w.AW.ORBS
          }),
          ref: ep,
          children: n || ef ? (0, r.jsx)(r.Fragment, {
            children: [...Array(eC)].map((e, t) => eS ? (0, r.jsx)(I.Z, {}, t) : (0, r.jsx)(k.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: em.map((e, t) => {
              let n = b.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(m.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: eS && (null == e ? true : e.skuId) != null ? (0, r.jsx)(L.Z, {
                  skuId: null == e ? true : e.skuId
                }, e.skuId) : (0, r.jsx)(T.Z, {
                  product: e,
                  category: n,
                  user: Q,
                  tab: z,
                  shopBlockType: c.z.HERO
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }