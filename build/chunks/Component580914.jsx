/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk763941 = require("./763941.js"),
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
  Chunk811847 = require("./811847.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk687983 = require("./687983.js");
let F = (0, Chunk884697.IC)(90),
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
  V = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: i,
      category: V,
      heroBlock: U,
      tab: z,
      onVisibilityChange: G
    } = e, K = (0, s.O)(e => {
      null == G || G(e)
    }, .1, null != G), Y = l.useRef(null), q = (0, R.B)("HeroBlock"), J = (0, u.e7)([h.default], () => h.default.getCurrentUser()), Q = (0, P.Z)(), X = (0, _.sp)(), $ = l.useMemo(() => {
      var e, t;
      return null != U ? U : null == V ? W : {
        rankedSkuIds: null != (e = V.heroRanking) ? e : [],
        name: V.name,
        unpublishedAt: V.unpublishedAt,
        logoUrl: (0, v.uV)(null != (t = V.heroLogo) ? t : V.logo, {
          size: F
        }),
        categorySkuId: V.skuId,
        bannerAsset: V.heroBannerAsset,
        summary: V.summary,
        type: c.z.HERO,
        categoryStoreListingId: V.storeListingId,
        bannerDisplayConfig: V.heroBannerDisplayConfig,
        logoDisplayConfig: V.heroLogoDisplayConfig,
        heroLogoUrl: V.heroLogoUrl,
        heroBannerUrl: V.heroBannerUrl,
        heroBannerAnimatedUrl: V.heroBannerAnimatedUrl
      }
    }, [U, V]), {
      bannerStyleOverrides: ee,
      logoStyleOverrides: et,
      heroLogo: en,
      heroBannerStatic: er,
      heroBannerAnimated: el,
      heroBannerRive: ei
    } = (0, B.hr)($), ea = null != (t = null == ee ? true : ee.responsive) && t, es = null == ee ? true : ee.backgroundStyle, eo = null != ei, ec = (0, u.e7)([b.Z], () => b.Z.products), eu = l.useMemo(() => n ? [] : ec.size > 0 ? Q($.rankedSkuIds) : [], [n, Q, $.rankedSkuIds, ec]), ed = l.useMemo(() => !n && 0 !== $.rankedSkuIds.length && !(eu.length > 0) && $.rankedSkuIds.every(e => {
      var t;
      return (null == (t = b.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, $.rankedSkuIds, eu.length]), ef = z === w.AW.ORBS, eg = null != V && V.isOrbsExclusive, {
      cardContainerRef: ep,
      totalCards: em
    } = (e => {
      let [t, n] = l.useState(1), r = (0, d.dQu)(d.TVs.space.SPACE_XL), i = (0, g.Z)(() => {
        (null == a ? true : a.current) != null && n(Math.max(1, Math.floor((a.current.offsetWidth + r) / (246 + r))))
      }), a = (0, f.y)(i, [r, e], {
        fireOnMount: true,
        fireOnDepsChange: true,
        enabled: e
      });
      return {
        cardContainerRef: l.useCallback(t => {
          a.current = t, null != t && e && i()
        }, [i, a, e]),
        totalCards: e ? t : true
      }
    })(z !== w.AW.ORBS), eh = (0, S.a)()(eu), eC = (0, y.l)(eh).slice(0, em), e_ = (0, N.St)(eC), eb = ef ? D.intl.string(D.t["1CdL8d"]) : D.intl.string(D.t.xYKa1T), ev = (0, E.FF)("CollectiblesContent"), ex = x.Z.useConfig({
      location: "HeroBlock"
    }).showCardsV2, eE = (0, O.Pc)("HeroBlock") && $.categorySkuId === w.Hi, eO = (0, O.IT)("HeroBlock"), eS = () => {
      ef ? ((0, m.Y)({
        pageType: H.ZY5.SHOP_ORBS_TAB,
        sectionType: H.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: H.qAy.CTA_TO_QUEST_HOME
      }), (0, p.navigateToQuestHome)({
        fromContent: o.j.ORBS_SHOP_HERO_CTA
      })) : (i({
        sourceButton: "shop latest category hero",
        categorySkuId: !ev || eg ? $.categorySkuId : true,
        isInternalShopDeeplink: true,
        isOrbsExclusive: eg
      }), C.default.track(H.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == X ? true : X.sessionId,
        sku_id: $.categorySkuId,
        page_type: z,
        page_section: null == X ? true : X.pageSection,
        page_category: null == X ? true : X.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != J && (n || $ !== W) ? (0, r.jsxs)("div", {
      ref: K,
      className: M.heroBlock,
      children: [eo ? (0, A.gT)({
        isCustomCursorEnabled: q,
        className: M.riveEventOverlay,
        riveEventTargetRef: Y
      }) : null, (0, r.jsx)("div", {
        className: a()(M.banner, {
          [M.rivBanner]: eo,
          [M.responsive]: ea
        }),
        style: null != es ? {
          background: es
        } : true,
        children: null != er && (0, r.jsx)(Z.Z, {
          bannerStatic: er,
          bannerAnimated: el,
          bannerRive: ei,
          isResponsive: ea,
          eventTargetRef: Y
        })
      }), (0, r.jsxs)("div", {
        className: M.heroBlockContent,
        children: [eo ? (0, r.jsx)("div", {
          className: M.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: eS,
            text: eb
          })
        }) : (0, r.jsxs)("div", {
          className: a()(M.heroHeaderContainer, {
            [M.responsive]: ea
          }),
          children: [n ? (0, r.jsx)("div", {
            className: M.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: M.heroHeaderBadgeLogoSummaryContainer,
            children: [null != $.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: D.intl.string(D.t["h/uBCR"]),
              className: M.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: M.heroLogoNameContainer,
              children: [null != en && (0, r.jsx)("img", {
                className: M.heroHeaderLogo,
                src: en,
                alt: $.name,
                style: null == et ? true : et.toDesktopStyles()
              }), null != $.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: M.title,
                color: "header-primary",
                children: $.title
              }), "" !== $.summary && (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: ef ? M.orbsSubHeaderText : M.subHeaderText,
                style: null != $.bannerTextColor ? {
                  color: $.bannerTextColor
                } : true,
                children: $.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: M.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: eS,
              text: eb
            })
          })]
        }), (0, r.jsx)("div", {
          className: a()({
            [M.row]: z === w.AW.HOME,
            [M.feed]: z === w.AW.ORBS
          }),
          ref: ep,
          children: n || ed ? (0, r.jsx)(r.Fragment, {
            children: [...Array(null != em ? em : 4)].map((e, t) => ex ? (0, r.jsx)(L.Z, {}, t) : (0, r.jsx)(j.K, {}, t))
          }) : (0, r.jsx)(T.zp.Provider, {
            value: {
              isRental: eE,
              rentalDuration: eO
            },
            children: e_.map((e, t) => {
              let n = b.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(_.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: ex && (null == e ? true : e.skuId) != null ? (0, r.jsx)(I.Z, {
                  skuId: null == e ? true : e.skuId,
                  prioritizedCurrency: z === w.AW.ORBS ? T.tA.ORBS : true,
                  onClickAnalytics: (0, T.wO)(e, z, X)
                }, e.skuId) : (0, r.jsx)(k.Z, {
                  product: e,
                  category: n,
                  user: J,
                  tab: z
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }