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
  Chunk310582 = require("./310582.js");
let M = (0, Chunk884697.IC)(90),
  F = {
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
  W = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: i,
      category: W,
      heroBlock: V,
      tab: U,
      onVisibilityChange: z
    } = e, G = (0, o.O)(e => {
      null == z || z(e)
    }, .1, null != z), K = l.useRef(null), Y = (0, N.B)("HeroBlock"), q = (0, u.e7)([C.default], () => C.default.getCurrentUser()), J = (0, B.Z)(), Q = (0, _.sp)(), X = l.useMemo(() => {
      var e, t;
      return null != V ? V : null == W ? F : {
        rankedSkuIds: null != (e = W.heroRanking) ? e : [],
        name: W.name,
        unpublishedAt: W.unpublishedAt,
        logoUrl: (0, v.uV)(null != (t = W.heroLogo) ? t : W.logo, {
          size: M
        }),
        categorySkuId: W.skuId,
        bannerAsset: W.heroBannerAsset,
        summary: W.summary,
        type: c.z.HERO,
        categoryStoreListingId: W.storeListingId,
        bannerDisplayConfig: W.heroBannerDisplayConfig,
        logoDisplayConfig: W.heroLogoDisplayConfig,
        heroLogoUrl: W.heroLogoUrl,
        heroBannerUrl: W.heroBannerUrl,
        heroBannerAnimatedUrl: W.heroBannerAnimatedUrl
      }
    }, [V, W]), {
      bannerStyleOverrides: $,
      logoStyleOverrides: ee,
      heroLogo: et,
      heroBannerStatic: en,
      heroBannerAnimated: er,
      heroBannerRive: el
    } = (0, L.hr)(X), ei = null != (t = null == $ ? true : $.responsive) && t, ea = null == $ ? true : $.backgroundStyle, eo = null != el, es = (0, u.e7)([b.Z], () => b.Z.products), ec = l.useMemo(() => n ? [] : es.size > 0 ? J(X.rankedSkuIds) : [], [n, J, X.rankedSkuIds, es]), eu = l.useMemo(() => !n && 0 !== X.rankedSkuIds.length && !(ec.length > 0) && X.rankedSkuIds.every(e => {
      var t;
      return (null == (t = b.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, X.rankedSkuIds, ec.length]), {
      cardContainerRef: ed,
      totalCards: ep
    } = (e => {
      let [t, n] = l.useState(1), r = (0, d.dQu)(d.TVs.space.SPACE_XL), i = (0, g.Z)(() => {
        (null == a ? true : a.current) != null && n(Math.max(1, Math.floor((a.current.offsetWidth + r) / (246 + r))))
      }), a = (0, p.y)(i, [r, e], {
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
    })(U !== Z.AW.ORBS), eg = (0, S.a)()(ec), ef = (0, O.l)(eg).slice(0, ep), eh = (0, P.St)(ef), eC = U === Z.AW.ORBS ? H.intl.string(H.t["1CdL8d"]) : H.intl.string(H.t.xYKa1T), em = (0, E.FF)("CollectiblesContent"), e_ = null != W && W.isOrbsExclusive, eb = x.Z.useConfig({
      location: "HeroBlock"
    }).showCardsV2, ev = () => {
      U === Z.AW.ORBS ? ((0, h.Y)({
        pageType: w.ZY5.SHOP_ORBS_TAB,
        sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: w.qAy.CTA_TO_QUEST_HOME
      }), (0, f.navigateToQuestHome)({
        fromContent: s.j.ORBS_SHOP_HERO_CTA
      })) : (i({
        sourceButton: "shop latest category hero",
        categorySkuId: !em || e_ ? X.categorySkuId : true,
        isInternalShopDeeplink: true,
        isOrbsExclusive: e_
      }), m.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == Q ? true : Q.sessionId,
        sku_id: X.categorySkuId,
        page_type: U,
        page_section: null == Q ? true : Q.pageSection,
        page_category: null == Q ? true : Q.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != q && (n || X !== F) ? (0, r.jsxs)("div", {
      ref: G,
      className: D.heroBlock,
      children: [eo ? (0, A.gT)({
        isCustomCursorEnabled: Y,
        className: D.riveEventOverlay,
        riveEventTargetRef: K
      }) : null, (0, r.jsx)("div", {
        className: a()(D.banner, {
          [D.rivBanner]: eo,
          [D.responsive]: ei
        }),
        style: null != ea ? {
          background: ea
        } : true,
        children: null != en && (0, r.jsx)(R.Z, {
          bannerStatic: en,
          bannerAnimated: er,
          bannerRive: el,
          isResponsive: ei,
          eventTargetRef: K
        })
      }), (0, r.jsxs)("div", {
        className: D.heroBlockContent,
        children: [eo ? (0, r.jsx)("div", {
          className: D.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: ev,
            text: eC
          })
        }) : (0, r.jsxs)("div", {
          className: a()(D.heroHeaderContainer, {
            [D.responsive]: ei
          }),
          children: [n ? (0, r.jsx)("div", {
            className: D.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: D.heroHeaderBadgeLogoSummaryContainer,
            children: [null != X.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: H.intl.string(H.t["h/uBCR"]),
              className: D.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: D.heroLogoNameContainer,
              children: [null != et && (0, r.jsx)("img", {
                className: D.heroHeaderLogo,
                src: et,
                alt: X.name,
                style: null == ee ? true : ee.toDesktopStyles()
              }), null != X.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: D.title,
                color: "header-primary",
                children: X.title
              }), "" !== X.summary && (0, r.jsx)(d.Text, {
                variant: e_ ? "text-lg/medium" : "text-md/normal",
                className: e_ ? D.orbsSubHeaderText : D.subHeaderText,
                style: null != X.bannerTextColor ? {
                  color: X.bannerTextColor
                } : true,
                children: X.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: D.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: ev,
              text: eC
            })
          })]
        }), (0, r.jsx)("div", {
          className: a()({
            [D.row]: U === Z.AW.HOME,
            [D.feed]: U === Z.AW.ORBS
          }),
          ref: ed,
          children: n || eu ? (0, r.jsx)(r.Fragment, {
            children: [...Array(null != ep ? ep : 4)].map((e, t) => eb ? (0, r.jsx)(T.Z, {}, t) : (0, r.jsx)(y.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: eh.map((e, t) => {
              let n = b.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(_.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: eb && (null == e ? true : e.skuId) != null ? (0, r.jsx)(k.Z, {
                  skuId: null == e ? true : e.skuId,
                  prioritizedCurrency: U === Z.AW.ORBS ? I.tA.ORBS : true,
                  onClickAnalytics: (0, I.wO)(e, U, Q)
                }, e.skuId) : (0, r.jsx)(j.Z, {
                  product: e,
                  category: n,
                  user: q,
                  tab: U
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }