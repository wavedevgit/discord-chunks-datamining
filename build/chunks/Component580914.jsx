/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => W
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
      heroBlock: U,
      tab: z,
      onVisibilityChange: V
    } = e, G = (0, o.O)(e => {
      null == V || V(e)
    }, .1, null != V), K = l.useRef(null), Y = (0, P.B)("HeroBlock"), q = (0, u.e7)([h.default], () => h.default.getCurrentUser()), Q = (0, L.Z)(), J = (0, b.sp)(), X = l.useMemo(() => {
      var e, t;
      return null != U ? U : null == W ? F : {
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
    }, [U, W]), $ = (0, O.Pc)("HeroBlock") && X.categorySkuId === Z.Hi, ee = (0, O.IT)("HeroBlock"), {
      bannerStyleOverrides: et,
      logoStyleOverrides: en,
      heroLogo: er,
      heroBannerStatic: el,
      heroBannerAnimated: ei,
      heroBannerRive: es
    } = (0, I.hr)(X), eo = null != (t = null == et ? true : et.responsive) && t, ea = null == et ? true : et.backgroundStyle, ec = null != es, eu = (0, u.e7)([E.Z], () => E.Z.products), ed = l.useMemo(() => n ? [] : eu.size > 0 ? Q(X.rankedSkuIds) : [], [n, Q, X.rankedSkuIds, eu]), eg = l.useMemo(() => !n && 0 !== X.rankedSkuIds.length && !(ed.length > 0) && X.rankedSkuIds.every(e => {
      var t;
      return (null == (t = E.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, X.rankedSkuIds, ed.length]), ef = z === Z.AW.ORBS, ep = null != W && W.isOrbsExclusive, {
      cardContainerRef: em,
      totalCards: eC
    } = (e => {
      let [t, n] = l.useState(1), r = (0, d.dQu)(d.TVs.space.SPACE_XL), i = (0, f.Z)(() => {
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
    })(!ef || $), eh = (0, x.a)()(ed), e_ = (0, y.l)(eh).slice(0, eC), eb = (0, A.St)(e_), eE = ef ? D.intl.string(D.t["1CdL8d"]) : D.intl.string(D.t.xYKa1T);
    ef && $ && (eE = D.intl.string(D.t.dVz4hi));
    let ev = (0, S.FF)("CollectiblesContent"),
      {
        analyticsLocations: eS
      } = (0, p.ZP)(),
      eO = () => {
        ef ? ((0, C.Y)({
          pageType: w.ZY5.SHOP_ORBS_TAB,
          sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
          ctaObject: w.qAy.CTA_TO_QUEST_HOME
        }), $ ? (0, B.Z)({
          analyticsLocations: eS
        }) : (0, m.navigateToQuestHome)({
          fromContent: a.j.ORBS_SHOP_HERO_CTA
        })) : (i({
          sourceButton: "shop latest category hero",
          categorySkuId: !ev || ep ? X.categorySkuId : true,
          isInternalShopDeeplink: true,
          isOrbsExclusive: ep
        }), _.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == J ? true : J.sessionId,
          sku_id: X.categorySkuId,
          page_type: z,
          page_section: null == J ? true : J.pageSection,
          page_category: null == J ? true : J.pageCategory,
          cta_name: "shop latest category hero button"
        }))
      };
    return null != q && (n || X !== F) ? (0, r.jsxs)("div", {
      ref: G,
      className: H.heroBlock,
      children: [ec ? (0, N.gT)({
        isCustomCursorEnabled: Y,
        className: H.riveEventOverlay,
        riveEventTargetRef: K
      }) : null, (0, r.jsx)("div", {
        className: s()(H.banner, {
          [H.rivBanner]: ec,
          [H.responsive]: eo
        }),
        style: null != ea ? {
          background: ea
        } : true,
        children: null != el && (0, r.jsx)(R.Z, {
          bannerStatic: el,
          bannerAnimated: ei,
          bannerRive: es,
          isResponsive: eo,
          eventTargetRef: K
        })
      }), (0, r.jsxs)("div", {
        className: H.heroBlockContent,
        children: [ec ? (0, r.jsx)("div", {
          className: H.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: eO,
            text: eE
          })
        }) : (0, r.jsxs)("div", {
          className: s()(H.heroHeaderContainer, {
            [H.responsive]: eo
          }),
          children: [n ? (0, r.jsx)("div", {
            className: H.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: H.heroHeaderBadgeLogoSummaryContainer,
            children: [null != X.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: D.intl.string(D.t["h/uBCR"]),
              className: H.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: H.heroLogoNameContainer,
              children: [null != er && (0, r.jsx)("img", {
                className: H.heroHeaderLogo,
                src: er,
                alt: X.name,
                style: null == en ? true : en.toDesktopStyles()
              }), null != X.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: H.title,
                color: "header-primary",
                children: X.title
              }), "" !== X.summary && (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: ef ? H.orbsSubHeaderText : H.subHeaderText,
                style: null != X.bannerTextColor ? {
                  color: X.bannerTextColor
                } : true,
                children: X.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: H.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: eO,
              text: eE
            })
          })]
        }), (0, r.jsx)("div", {
          className: s()({
            [H.row]: z === Z.AW.HOME,
            [H.feed]: z === Z.AW.ORBS
          }),
          ref: em,
          children: n || eg ? (0, r.jsx)(r.Fragment, {
            children: [...Array(null != eC ? eC : 4)].map((e, t) => (0, r.jsx)(k.Z, {}, t))
          }) : (0, r.jsx)(j.zp.Provider, {
            value: {
              rentalDuration: $ ? ee : true
            },
            children: eb.map((e, t) => {
              let n = E.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(b.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(T.Z, {
                  skuId: null == e ? true : e.skuId,
                  prioritizedCurrency: z === Z.AW.ORBS ? j.tA.ORBS : true,
                  onClickAnalytics: (0, j.wO)(e, z, J)
                }, e.skuId)
              }, e.skuId)
            })
          })
        })]
      })]
    }) : null
  }