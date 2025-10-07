/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk636977 = require("./636977.js"),
  Chunk685816 = require("./685816.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
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
    } = e, K = (0, d.O)(e => {
      null == G || G(e)
    }, .1, null != G), q = l.useRef(null), Y = (0, R.G)("HeroBlock"), X = (0, c.e7)([h.default], () => h.default.getCurrentUser()), Q = (0, N.Z)(), J = (0, m.sp)(), $ = x.Z.useConfig({
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
        type: o.z.HERO,
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
      heroBannerAnimated: ea
    } = (0, P.hr)(et), ei = null != (t = null == en ? true : en.responsive) && t, eo = null == en ? true : en.backgroundStyle, ec = (0, A.Dp)(ea), eu = (0, c.e7)([b.Z], () => b.Z.products), ed = l.useMemo(() => n ? [] : eu.size > 0 ? Q(et.rankedSkuIds) : [], [n, Q, et.rankedSkuIds, eu]), eg = l.useMemo(() => !n && 0 !== et.rankedSkuIds.length && !(ed.length > 0) && et.rankedSkuIds.every(e => {
      var t;
      return (null == (t = b.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, et.rankedSkuIds, ed.length]), {
      cardContainerRef: ep,
      totalCards: ef
    } = (e => {
      let [t, n] = l.useState(1), r = (0, u.dQu)(u.TVs.space.SPACE_XL), s = (0, p.Z)(() => {
        (null == a ? true : a.current) != null && n(Math.max(1, Math.floor((a.current.offsetWidth + r) / (246 + r))))
      }), a = (0, g.y)(s, [r, e], {
        fireOnMount: true,
        fireOnDepsChange: true,
        enabled: e
      });
      return {
        cardContainerRef: l.useCallback(t => {
          a.current = t, null != t && e && s()
        }, [s, a, e]),
        totalCards: e ? t : 4
      }
    })(z !== w.AW.ORBS), eC = (0, y.a)()(ed), eh = (0, T.l)(eC).slice(0, ef), e_ = (0, B.St)(eh), em = z === w.AW.ORBS ? F.intl.string(F.t["1CdL8f"]) : Y ? F.intl.string(F.t.guWAg4) : ee ? F.intl.string(F.t["/QvRam"]) : F.intl.string(F.t.xYKa1d), eb = (0, v.FF)("CollectiblesContent"), eE = (0, E.$2)(et.categorySkuId), eS = S.Z.useConfig({
      location: "HeroBlock"
    }).showCardsV2, ev = () => {
      z === w.AW.ORBS ? ((0, C.Y)({
        pageType: H.ZY5.SHOP_ORBS_TAB,
        sectionType: H.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: H.qAy.CTA_TO_QUEST_HOME
      }), (0, f.navigateToQuestHome)({
        fromContent: i.j.ORBS_SHOP_HERO_CTA
      })) : (s("shop latest category hero", !eb || eE ? et.categorySkuId : true), _.default.track(H.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == J ? true : J.sessionId,
        sku_id: et.categorySkuId,
        page_type: z,
        page_section: null == J ? true : J.pageSection,
        page_category: null == J ? true : J.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != X && (n || et !== W) ? (0, r.jsxs)("div", {
      ref: K,
      className: D.heroBlock,
      children: [ec ? (0, A.gT)({
        isCustomCursorEnabled: Y,
        className: D.riveEventOverlay,
        riveEventTargetRef: q
      }) : null, (0, r.jsx)("div", {
        className: a()(D.banner, {
          [D.rivBanner]: ec
        }),
        style: null != eo ? {
          background: eo
        } : true,
        children: null != es && (0, r.jsx)(Z.Z, {
          bannerStatic: es,
          bannerAnimated: ea,
          isResponsive: ei,
          eventTargetRef: q
        })
      }), (0, r.jsxs)("div", {
        className: D.heroBlockContent,
        children: [ec ? (0, r.jsx)("div", {
          className: D.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(u.zxk, {
            variant: "overlay-primary",
            onClick: ev,
            text: em
          })
        }) : (0, r.jsxs)("div", {
          className: a()($ ? D.heroHeaderContainerStacked : D.heroHeaderContainer, {
            [D.responsive]: ei
          }),
          children: [n ? (0, r.jsx)("div", {
            className: D.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: D.heroHeaderBadgeLogoSummaryContainer,
            children: [null != et.unpublishedAt && (0, r.jsx)(u.IGR, {
              disableColor: true,
              text: F.intl.string(F.t["h/uBCQ"]),
              className: D.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: a()(D.heroLogoNameContainer, {
                [D.heroLogoNameContainerStacked]: $
              }),
              children: [null != el && (0, r.jsx)("img", {
                className: D.heroHeaderLogo,
                src: el,
                alt: et.name,
                style: null == er ? true : er.toDesktopStyles()
              }), null != et.title && (0, r.jsx)(u.X6q, {
                variant: "heading-xxl/bold",
                className: D.title,
                color: "header-primary",
                children: et.title
              }), "" !== et.summary && (0, r.jsx)(u.Text, {
                variant: eE ? "text-lg/medium" : "text-md/normal",
                className: eE ? D.orbsSubHeaderText : D.subHeaderText,
                style: null != et.bannerTextColor ? {
                  color: et.bannerTextColor
                } : true,
                children: et.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: $ ? D.heroHeaderButtonContainerStacked : D.heroHeaderButtonContainer,
            children: (0, r.jsx)(u.zxk, {
              variant: "overlay-primary",
              onClick: ev,
              text: em
            })
          })]
        }), (0, r.jsx)("div", {
          className: a()({
            [D.row]: z === w.AW.HOME,
            [D.feed]: z === w.AW.ORBS
          }),
          ref: ep,
          children: n || eg ? (0, r.jsx)(r.Fragment, {
            children: [...Array(ef)].map((e, t) => eS ? (0, r.jsx)(I.Z, {}, t) : (0, r.jsx)(L.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: e_.map((e, t) => {
              let n = b.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(m.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: eS && (null == e ? true : e.skuId) != null ? (0, r.jsx)(k.Z, {
                  skuId: null == e ? true : e.skuId
                }, e.skuId) : (0, r.jsx)(j.Z, {
                  product: e,
                  category: n,
                  user: X,
                  tab: z,
                  shopBlockType: o.z.HERO
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }