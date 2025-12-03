/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => W
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk870289 = require("./870289.js"),
  Chunk763941 = require("./763941.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
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
    } = e, G = (0, a.O)(e => {
      null == z || z(e)
    }, .1, null != z), K = l.useRef(null), Y = (0, A.B)("HeroBlock"), q = (0, u.e7)([C.default], () => C.default.getCurrentUser()), J = (0, L.Z)(), Q = (0, b.sp)(), X = l.useMemo(() => {
      var e, t;
      return null != V ? V : null == W ? F : {
        rankedSkuIds: null != (e = W.heroRanking) ? e : [],
        name: W.name,
        unpublishedAt: W.unpublishedAt,
        logoUrl: (0, x.uV)(null != (t = W.heroLogo) ? t : W.logo, {
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
    }, [V, W]), $ = (0, O.Pc)("HeroBlock") && X.categorySkuId === Z.Hi, ee = (0, O.IT)("HeroBlock"), {
      bannerStyleOverrides: et,
      logoStyleOverrides: en,
      heroLogo: er,
      heroBannerStatic: el,
      heroBannerAnimated: ei,
      heroBannerRive: eo
    } = (0, T.hr)(X), ea = null != (t = null == et ? true : et.responsive) && t, es = null == et ? true : et.backgroundStyle, ec = null != eo, eu = (0, u.e7)([v.Z], () => v.Z.products), ed = l.useMemo(() => n ? [] : eu.size > 0 ? J(X.rankedSkuIds) : [], [n, J, X.rankedSkuIds, eu]), ef = l.useMemo(() => !n && 0 !== X.rankedSkuIds.length && !(ed.length > 0) && X.rankedSkuIds.every(e => {
      var t;
      return (null == (t = v.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, X.rankedSkuIds, ed.length]), eg = U === Z.AW.ORBS, ep = null != W && W.isOrbsExclusive, {
      cardContainerRef: em,
      totalCards: eh
    } = (e => {
      let [t, n] = l.useState(1), r = (0, d.dQu)(d.TVs.space.SPACE_XL), i = (0, g.Z)(() => {
        (null == o ? true : o.current) != null && n(Math.max(1, Math.floor((o.current.offsetWidth + r) / (246 + r))))
      }), o = (0, f.y)(i, [r, e], {
        fireOnMount: true,
        fireOnDepsChange: true,
        enabled: e
      });
      return {
        cardContainerRef: l.useCallback(t => {
          o.current = t, null != t && e && i()
        }, [i, o, e]),
        totalCards: e ? t : true
      }
    })(!eg || $), eC = (0, S.a)()(ed), e_ = (0, y.l)(eC).slice(0, eh), eb = (0, B.St)(e_), ev = eg ? H.intl.string(H.t["1CdL8d"]) : H.intl.string(H.t.xYKa1T);
    eg && $ && (ev = H.intl.string(H.t.dVz4hi));
    let ex = (0, E.FF)("CollectiblesContent"),
      {
        analyticsLocations: eE
      } = (0, p.ZP)(),
      eO = () => {
        eg ? ((0, h.Y)({
          pageType: w.ZY5.SHOP_ORBS_TAB,
          sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
          ctaObject: w.qAy.CTA_TO_QUEST_HOME
        }), $ ? (0, P.Z)({
          analyticsLocations: eE
        }) : (0, m.navigateToQuestHome)({
          fromContent: s.j.ORBS_SHOP_HERO_CTA
        })) : (i({
          sourceButton: "shop latest category hero",
          categorySkuId: !ex || ep ? X.categorySkuId : true,
          isInternalShopDeeplink: true,
          isOrbsExclusive: ep
        }), _.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
      children: [ec ? (0, N.gT)({
        isCustomCursorEnabled: Y,
        className: D.riveEventOverlay,
        riveEventTargetRef: K
      }) : null, (0, r.jsx)("div", {
        className: o()(D.banner, {
          [D.rivBanner]: ec,
          [D.responsive]: ea
        }),
        style: null != es ? {
          background: es
        } : true,
        children: null != el && (0, r.jsx)(R.Z, {
          bannerStatic: el,
          bannerAnimated: ei,
          bannerRive: eo,
          isResponsive: ea,
          eventTargetRef: K
        })
      }), (0, r.jsxs)("div", {
        className: D.heroBlockContent,
        children: [ec ? (0, r.jsx)("div", {
          className: D.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: eO,
            text: ev
          })
        }) : (0, r.jsxs)("div", {
          className: o()(D.heroHeaderContainer, {
            [D.responsive]: ea
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
              children: [null != er && (0, r.jsx)("img", {
                className: D.heroHeaderLogo,
                src: er,
                alt: X.name,
                style: null == en ? true : en.toDesktopStyles()
              }), null != X.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: D.title,
                color: "header-primary",
                children: X.title
              }), "" !== X.summary && (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: eg ? D.orbsSubHeaderText : D.subHeaderText,
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
              onClick: eO,
              text: ev
            })
          })]
        }), (0, r.jsx)("div", {
          className: o()({
            [D.row]: U === Z.AW.HOME,
            [D.feed]: U === Z.AW.ORBS
          }),
          ref: em,
          children: n || ef ? (0, r.jsx)(r.Fragment, {
            children: [...Array(null != eh ? eh : 4)].map((e, t) => (0, r.jsx)(k.Z, {}, t))
          }) : (0, r.jsx)(I.zp.Provider, {
            value: {
              rentalDuration: $ ? ee : true
            },
            children: eb.map((e, t) => {
              let n = v.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(b.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(j.Z, {
                  skuId: null == e ? true : e.skuId,
                  prioritizedCurrency: U === Z.AW.ORBS ? I.tA.ORBS : true,
                  onClickAnalytics: (0, I.wO)(e, U, Q)
                }, e.skuId)
              }, e.skuId)
            })
          })
        })]
      })]
    }) : null
  }