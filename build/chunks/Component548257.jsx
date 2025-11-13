/** Chunk was on 45620 **/
/** chunk id: 548257, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => F
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
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk870289 = require("./870289.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk373183 = require("./373183.jsx"),
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
let D = (0, Chunk884697.IC)(90),
  M = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    logoUrl: "",
    categorySkuId: true,
    bannerAsset: true,
    summary: "",
    type: Chunk685816.z.REWARD_HERO,
    categoryStoreListingId: "",
    rewardSkuId: true
  },
  F = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: i,
      category: F,
      heroBlock: W,
      tab: V,
      onVisibilityChange: U
    } = e, z = (0, o.O)(e => {
      null == U || U(e)
    }, .1, null != U), G = l.useRef(null), K = (0, A.B)("HeroBlock"), Y = (0, u.e7)([C.default], () => C.default.getCurrentUser()), q = (0, L.Z)(), J = (0, _.sp)(), Q = l.useMemo(() => {
      var e, t;
      return null != W ? W : null == F ? M : {
        rankedSkuIds: null != (e = F.heroRanking) ? e : [],
        name: F.name,
        unpublishedAt: F.unpublishedAt,
        logoUrl: (0, x.uV)(null != (t = F.heroLogo) ? t : F.logo, {
          size: D
        }),
        categorySkuId: F.skuId,
        bannerAsset: F.heroBannerAsset,
        summary: F.summary,
        type: c.z.REWARD_HERO,
        categoryStoreListingId: F.storeListingId,
        bannerDisplayConfig: F.heroBannerDisplayConfig,
        logoDisplayConfig: F.heroLogoDisplayConfig,
        heroLogoUrl: F.heroLogoUrl,
        heroBannerUrl: F.heroBannerUrl,
        heroBannerAnimatedUrl: F.heroBannerAnimatedUrl
      }
    }, [W, F]), X = l.useMemo(() => null != F ? F : b.Z.getCategoryForProduct(Q.rewardSkuId), [F, Q.rewardSkuId]), {
      bannerStyleOverrides: $,
      logoStyleOverrides: ee,
      heroLogo: et,
      heroBannerStatic: en,
      heroBannerAnimated: er,
      heroBannerRive: el
    } = (0, T.hr)(Q), ei = null != (t = null == $ ? true : $.responsive) && t, ea = null == $ ? true : $.backgroundStyle, eo = null != el, es = (0, u.e7)([b.Z], () => b.Z.products), ec = (0, u.e7)([v.Z], () => v.Z.getPurchase(Q.rewardSkuId)), eu = l.useMemo(() => n ? [] : es.size > 0 ? q(Q.rankedSkuIds).filter(e => e.skuId !== Q.rewardSkuId || null != ec) : [], [n, q, Q.rankedSkuIds, es, ec, Q.rewardSkuId]), ed = l.useMemo(() => !n && 0 !== Q.rankedSkuIds.length && !(eu.length > 0) && Q.rankedSkuIds.every(e => {
      var t;
      return (null == (t = b.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, Q.rankedSkuIds, eu.length]), {
      cardContainerRef: eg,
      totalCards: ep
    } = (e => {
      let [t, n] = l.useState(1), r = (0, d.dQu)(d.TVs.space.SPACE_XL), i = (0, p.Z)(() => {
        (null == a ? true : a.current) != null && n(Math.max(1, Math.floor((a.current.offsetWidth + r) / (246 + r))))
      }), a = (0, g.y)(i, [r, e], {
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
    })(V !== R.AW.ORBS), ef = (0, S.a)()(eu), eh = (0, O.l)(ef).slice(0, ep), eC = (0, B.St)(eh), em = V === R.AW.ORBS ? w.intl.string(w.t["1CdL8d"]) : w.intl.string(w.t.xYKa1T), e_ = (0, E.FF)("CollectiblesContent"), eb = null != F && F.isOrbsExclusive, ev = () => {
      V === R.AW.ORBS ? ((0, h.Y)({
        pageType: Z.ZY5.SHOP_ORBS_TAB,
        sectionType: Z.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: Z.qAy.CTA_TO_QUEST_HOME
      }), (0, f.navigateToQuestHome)({
        fromContent: s.j.ORBS_SHOP_HERO_CTA
      })) : (i({
        sourceButton: "shop reward category hero",
        categorySkuId: !e_ || eb ? Q.categorySkuId : true,
        isInternalShopDeeplink: true,
        isOrbsExclusive: eb
      }), m.default.track(Z.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == J ? true : J.sessionId,
        sku_id: Q.categorySkuId,
        page_type: V,
        page_section: null == J ? true : J.pageSection,
        page_category: null == J ? true : J.pageCategory,
        cta_name: "shop reward category hero button"
      }))
    };
    return null != Y && (n || Q !== M) ? (0, r.jsxs)("div", {
      ref: z,
      className: H.heroBlock,
      children: [eo ? (0, P.gT)({
        isCustomCursorEnabled: K,
        className: H.riveEventOverlay,
        riveEventTargetRef: G
      }) : null, (0, r.jsx)("div", {
        className: a()(H.banner, {
          [H.rivBanner]: eo
        }),
        style: null != ea ? {
          background: ea
        } : true,
        children: null != en && (0, r.jsx)(N.Z, {
          bannerStatic: en,
          bannerAnimated: er,
          bannerRive: el,
          isResponsive: ei,
          eventTargetRef: G
        })
      }), (0, r.jsxs)("div", {
        className: H.heroBlockContent,
        children: [eo ? (0, r.jsx)("div", {
          className: H.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            onClick: ev,
            text: em
          })
        }) : (0, r.jsxs)("div", {
          className: a()(H.heroHeaderContainer, {
            [H.responsive]: ei
          }),
          children: [n ? (0, r.jsx)("div", {
            className: H.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: H.heroHeaderBadgeLogoSummaryContainer,
            children: [null != Q.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: w.intl.string(w.t["h/uBCR"]),
              className: H.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: H.heroLogoNameContainer,
              children: [null != et && (0, r.jsx)("img", {
                className: H.heroHeaderLogo,
                src: et,
                alt: Q.name,
                style: null == ee ? true : ee.toDesktopStyles()
              }), null != Q.title && (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/bold",
                className: H.title,
                color: "header-primary",
                children: Q.title
              }), "" !== Q.summary && (0, r.jsx)(d.Text, {
                variant: eb ? "text-lg/medium" : "text-md/normal",
                className: eb ? H.orbsSubHeaderText : H.subHeaderText,
                style: null != Q.bannerTextColor ? {
                  color: Q.bannerTextColor
                } : true,
                children: Q.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: H.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.Button, {
              variant: "overlay-primary",
              onClick: ev,
              text: em
            })
          })]
        }), (0, r.jsx)("div", {
          className: a()({
            [H.row]: V === R.AW.HOME,
            [H.feed]: V === R.AW.ORBS
          }),
          ref: eg,
          children: n || ed ? (0, r.jsx)(r.Fragment, {
            children: [...Array(null != ep ? ep : 4)].map((e, t) => (0, r.jsx)(k.Z, {}, t))
          }) : (0, r.jsxs)(r.Fragment, {
            children: [null == ec && null != Q.rewardSkuId && null != X && (0, r.jsx)(_.k0, {
              newValue: {
                tilePosition: 0,
                pageSection: "top 4",
                categoryPosition: 0
              },
              children: (0, r.jsx)(I.Z, {
                category: X,
                rewardSkuId: Q.rewardSkuId
              })
            }, Q.rewardSkuId), eC.map((e, t) => {
              let n = b.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(_.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(y.Z, {
                  skuId: null == e ? true : e.skuId,
                  prioritizedCurrency: V === R.AW.ORBS ? j.tA.ORBS : true,
                  onClickAnalytics: (0, j.wO)(e, V, J)
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })]
          })
        })]
      })]
    }) : null
  }