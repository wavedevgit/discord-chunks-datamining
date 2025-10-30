/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk786040 = require("./786040.js"),
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
  Chunk687983 = require("./687983.js");
let W = (0, Chunk884697.IC)(90),
  V = {
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
      handleTransition: i,
      category: U,
      heroBlock: z,
      tab: G,
      onVisibilityChange: K
    } = e, Y = (0, a.O)(e => {
      null == K || K(e)
    }, .1, null != K), q = l.useRef(null), J = (0, Z.G)("HeroBlock"), Q = (0, u.e7)([C.default], () => C.default.getCurrentUser()), X = (0, A.Z)(), $ = (0, m.sp)(), ee = O.Z.useConfig({
      location: "HeroBlock"
    }).showButtonLeftAligned && G !== H.AW.ORBS, et = (0, S.x)("HeroBlock"), en = l.useMemo(() => {
      var e, t;
      return null != z ? z : null == U ? V : {
        rankedSkuIds: null != (e = U.heroRanking) ? e : [],
        name: U.name,
        unpublishedAt: U.unpublishedAt,
        logoUrl: (0, v.uV)(null != (t = U.heroLogo) ? t : U.logo, {
          size: W
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
    }, [z, U]), {
      bannerStyleOverrides: er,
      logoStyleOverrides: el,
      heroLogo: ei,
      heroBannerStatic: es,
      heroBannerAnimated: ea,
      heroBannerRive: eo
    } = (0, P.hr)(en), ec = null != (t = null == er ? true : er.responsive) && t, eu = null == er ? true : er.backgroundStyle, ed = null != eo, eg = (0, u.e7)([b.Z], () => b.Z.products), ep = l.useMemo(() => n ? [] : eg.size > 0 ? X(en.rankedSkuIds) : [], [n, X, en.rankedSkuIds, eg]), ef = l.useMemo(() => !n && 0 !== en.rankedSkuIds.length && !(ep.length > 0) && en.rankedSkuIds.every(e => {
      var t;
      return (null == (t = b.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, en.rankedSkuIds, ep.length]), {
      cardContainerRef: eh,
      totalCards: eC
    } = (e => {
      let [t, n] = l.useState(1), r = (0, d.dQu)(d.TVs.space.SPACE_XL), i = (0, p.Z)(() => {
        (null == s ? true : s.current) != null && n(Math.max(1, Math.floor((s.current.offsetWidth + r) / (246 + r))))
      }), s = (0, g.y)(i, [r, e], {
        fireOnMount: true,
        fireOnDepsChange: true,
        enabled: e
      });
      return {
        cardContainerRef: l.useCallback(t => {
          s.current = t, null != t && e && i()
        }, [i, s, e]),
        totalCards: e ? t : true
      }
    })(G !== H.AW.ORBS), e_ = (0, y.a)()(ep), em = (0, j.l)(e_).slice(0, eC), eb = (0, N.St)(em), ev = G === H.AW.ORBS ? M.intl.string(M.t["1CdL8d"]) : J ? M.intl.string(M.t.guWAg1) : et ? M.intl.string(M.t["/QvRak"]) : M.intl.string(M.t.xYKa1T), eE = (0, x.FF)("CollectiblesContent"), ex = null != U && U.isOrbsExclusive, eO = E.Z.useConfig({
      location: "HeroBlock"
    }).showCardsV2, eS = () => {
      G === H.AW.ORBS ? ((0, h.Y)({
        pageType: D.ZY5.SHOP_ORBS_TAB,
        sectionType: D.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: D.qAy.CTA_TO_QUEST_HOME
      }), (0, f.navigateToQuestHome)({
        fromContent: o.j.ORBS_SHOP_HERO_CTA
      })) : (i({
        sourceButton: "shop latest category hero",
        categorySkuId: !eE || ex ? en.categorySkuId : true,
        isInternalShopDeeplink: true,
        isOrbsExclusive: ex
      }), _.default.track(D.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == $ ? true : $.sessionId,
        sku_id: en.categorySkuId,
        page_type: G,
        page_section: null == $ ? true : $.pageSection,
        page_category: null == $ ? true : $.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != Q && (n || en !== V) ? (0, r.jsxs)("div", {
      ref: Y,
      className: F.heroBlock,
      children: [ed ? (0, R.gT)({
        isCustomCursorEnabled: J,
        className: F.riveEventOverlay,
        riveEventTargetRef: q
      }) : null, (0, r.jsx)("div", {
        className: s()(F.banner, {
          [F.rivBanner]: ed
        }),
        style: null != eu ? {
          background: eu
        } : true,
        children: null != es && (0, r.jsx)(w.Z, {
          bannerStatic: es,
          bannerAnimated: ea,
          bannerRive: eo,
          isResponsive: ec,
          eventTargetRef: q
        })
      }), (0, r.jsxs)("div", {
        className: F.heroBlockContent,
        children: [ed ? (0, r.jsx)("div", {
          className: F.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: eS,
            text: ev
          })
        }) : (0, r.jsxs)("div", {
          className: s()(ee ? F.heroHeaderContainerStacked : F.heroHeaderContainer, {
            [F.responsive]: ec
          }),
          children: [n ? (0, r.jsx)("div", {
            className: F.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: F.heroHeaderBadgeLogoSummaryContainer,
            children: [null != en.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: M.intl.string(M.t["h/uBCR"]),
              className: F.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: s()(F.heroLogoNameContainer, {
                [F.heroLogoNameContainerStacked]: ee
              }),
              children: [null != ei && (0, r.jsx)("img", {
                className: F.heroHeaderLogo,
                src: ei,
                alt: en.name,
                style: null == el ? true : el.toDesktopStyles()
              }), null != en.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: F.title,
                color: "header-primary",
                children: en.title
              }), "" !== en.summary && (0, r.jsx)(d.Text, {
                variant: ex ? "text-lg/medium" : "text-md/normal",
                className: ex ? F.orbsSubHeaderText : F.subHeaderText,
                style: null != en.bannerTextColor ? {
                  color: en.bannerTextColor
                } : true,
                children: en.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: ee ? F.heroHeaderButtonContainerStacked : F.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: eS,
              text: ev
            })
          })]
        }), (0, r.jsx)("div", {
          className: s()({
            [F.row]: G === H.AW.HOME,
            [F.feed]: G === H.AW.ORBS
          }),
          ref: eh,
          children: n || ef ? (0, r.jsx)(r.Fragment, {
            children: [...Array(null != eC ? eC : 4)].map((e, t) => eO ? (0, r.jsx)(B.Z, {}, t) : (0, r.jsx)(k.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: eb.map((e, t) => {
              let n = b.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(m.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: eO && (null == e ? true : e.skuId) != null ? (0, r.jsx)(I.Z, {
                  skuId: null == e ? true : e.skuId,
                  prioritizedCurrency: G === H.AW.ORBS ? L.tA.ORBS : true,
                  onClickAnalytics: (0, L.wO)(e, G, $)
                }, e.skuId) : (0, r.jsx)(T.Z, {
                  product: e,
                  category: n,
                  user: Q,
                  tab: G,
                  shopBlockType: c.z.HERO
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }