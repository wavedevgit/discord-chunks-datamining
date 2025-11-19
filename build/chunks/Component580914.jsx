/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => z
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
  Chunk906732 = require("./906732.jsx"),
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
  Chunk126026 = require("./126026.jsx"),
  Chunk619899 = require("./619899.js"),
  Chunk190157 = require("./190157.jsx"),
  Chunk811847 = require("./811847.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let V = (0, Chunk884697.IC)(90),
  U = {
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
  z = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: i,
      category: z,
      heroBlock: G,
      tab: K,
      onVisibilityChange: Y
    } = e, q = (0, s.O)(e => {
      null == Y || Y(e)
    }, .1, null != Y), J = l.useRef(null), Q = (0, w.B)("HeroBlock"), X = (0, u.e7)([C.default], () => C.default.getCurrentUser()), $ = (0, N.Z)(), ee = (0, b.sp)(), et = l.useMemo(() => {
      var e, t;
      return null != G ? G : null == z ? U : {
        rankedSkuIds: null != (e = z.heroRanking) ? e : [],
        name: z.name,
        unpublishedAt: z.unpublishedAt,
        logoUrl: (0, x.uV)(null != (t = z.heroLogo) ? t : z.logo, {
          size: V
        }),
        categorySkuId: z.skuId,
        bannerAsset: z.heroBannerAsset,
        summary: z.summary,
        type: c.z.HERO,
        categoryStoreListingId: z.storeListingId,
        bannerDisplayConfig: z.heroBannerDisplayConfig,
        logoDisplayConfig: z.heroLogoDisplayConfig,
        heroLogoUrl: z.heroLogoUrl,
        heroBannerUrl: z.heroBannerUrl,
        heroBannerAnimatedUrl: z.heroBannerAnimatedUrl
      }
    }, [G, z]), en = (0, S.Pc)("HeroBlock") && et.categorySkuId === H.Hi, er = (0, S.IT)("HeroBlock"), {
      bannerStyleOverrides: el,
      logoStyleOverrides: ei,
      heroLogo: ea,
      heroBannerStatic: es,
      heroBannerAnimated: eo,
      heroBannerRive: ec
    } = (0, P.hr)(et), eu = null != (t = null == el ? true : el.responsive) && t, ed = null == el ? true : el.backgroundStyle, ef = null != ec, ep = (0, u.e7)([v.Z], () => v.Z.products), eg = l.useMemo(() => n ? [] : ep.size > 0 ? $(et.rankedSkuIds) : [], [n, $, et.rankedSkuIds, ep]), em = l.useMemo(() => !n && 0 !== et.rankedSkuIds.length && !(eg.length > 0) && et.rankedSkuIds.every(e => {
      var t;
      return (null == (t = v.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, et.rankedSkuIds, eg.length]), eh = K === H.AW.ORBS, eC = null != z && z.isOrbsExclusive, {
      cardContainerRef: e_,
      totalCards: eb
    } = (e => {
      let [t, n] = l.useState(1), r = (0, d.dQu)(d.TVs.space.SPACE_XL), i = (0, p.Z)(() => {
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
    })(!eh || en), ev = (0, y.a)()(eg), ex = (0, j.l)(ev).slice(0, eb), eE = (0, R.St)(ex), eO = eh ? F.intl.string(F.t["1CdL8d"]) : F.intl.string(F.t.xYKa1T);
    eh && en && (eO = F.intl.string(F.t.dVz4hi));
    let eS = (0, O.FF)("CollectiblesContent"),
      ey = E.Z.useConfig({
        location: "HeroBlock"
      }).showCardsV2,
      {
        analyticsLocations: ej
      } = (0, g.ZP)(),
      ek = () => {
        eh ? ((0, h.Y)({
          pageType: M.ZY5.SHOP_ORBS_TAB,
          sectionType: M.jXE.ORBS_SHOP_HERO_BLOCK,
          ctaObject: M.qAy.CTA_TO_QUEST_HOME
        }), en ? (0, A.Z)({
          analyticsLocations: ej
        }) : (0, m.navigateToQuestHome)({
          fromContent: o.j.ORBS_SHOP_HERO_CTA
        })) : (i({
          sourceButton: "shop latest category hero",
          categorySkuId: !eS || eC ? et.categorySkuId : true,
          isInternalShopDeeplink: true,
          isOrbsExclusive: eC
        }), _.default.track(M.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == ee ? true : ee.sessionId,
          sku_id: et.categorySkuId,
          page_type: K,
          page_section: null == ee ? true : ee.pageSection,
          page_category: null == ee ? true : ee.pageCategory,
          cta_name: "shop latest category hero button"
        }))
      };
    return null != X && (n || et !== U) ? (0, r.jsxs)("div", {
      ref: q,
      className: W.heroBlock,
      children: [ef ? (0, Z.gT)({
        isCustomCursorEnabled: Q,
        className: W.riveEventOverlay,
        riveEventTargetRef: J
      }) : null, (0, r.jsx)("div", {
        className: a()(W.banner, {
          [W.rivBanner]: ef,
          [W.responsive]: eu
        }),
        style: null != ed ? {
          background: ed
        } : true,
        children: null != es && (0, r.jsx)(D.Z, {
          bannerStatic: es,
          bannerAnimated: eo,
          bannerRive: ec,
          isResponsive: eu,
          eventTargetRef: J
        })
      }), (0, r.jsxs)("div", {
        className: W.heroBlockContent,
        children: [ef ? (0, r.jsx)("div", {
          className: W.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: ek,
            text: eO
          })
        }) : (0, r.jsxs)("div", {
          className: a()(W.heroHeaderContainer, {
            [W.responsive]: eu
          }),
          children: [n ? (0, r.jsx)("div", {
            className: W.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: W.heroHeaderBadgeLogoSummaryContainer,
            children: [null != et.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: F.intl.string(F.t["h/uBCR"]),
              className: W.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: W.heroLogoNameContainer,
              children: [null != ea && (0, r.jsx)("img", {
                className: W.heroHeaderLogo,
                src: ea,
                alt: et.name,
                style: null == ei ? true : ei.toDesktopStyles()
              }), null != et.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: W.title,
                color: "header-primary",
                children: et.title
              }), "" !== et.summary && (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: eh ? W.orbsSubHeaderText : W.subHeaderText,
                style: null != et.bannerTextColor ? {
                  color: et.bannerTextColor
                } : true,
                children: et.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: W.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: ek,
              text: eO
            })
          })]
        }), (0, r.jsx)("div", {
          className: a()({
            [W.row]: K === H.AW.HOME,
            [W.feed]: K === H.AW.ORBS
          }),
          ref: e_,
          children: n || em ? (0, r.jsx)(r.Fragment, {
            children: [...Array(null != eb ? eb : 4)].map((e, t) => ey ? (0, r.jsx)(B.Z, {}, t) : (0, r.jsx)(k.K, {}, t))
          }) : (0, r.jsx)(L.zp.Provider, {
            value: {
              isRental: en,
              rentalDuration: er
            },
            children: eE.map((e, t) => {
              let n = v.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(b.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: ey && (null == e ? true : e.skuId) != null ? (0, r.jsx)(T.Z, {
                  skuId: null == e ? true : e.skuId,
                  prioritizedCurrency: K === H.AW.ORBS ? L.tA.ORBS : true,
                  onClickAnalytics: (0, L.wO)(e, K, ee)
                }, e.skuId) : (0, r.jsx)(I.Z, {
                  product: e,
                  category: n,
                  user: X,
                  tab: K
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }