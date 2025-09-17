/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk180650 = require("./180650.js"),
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
  Chunk870289 = require("./870289.js"),
  Chunk826916 = require("./826916.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk823941 = require("./823941.jsx"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk794324 = require("./794324.js"),
  Chunk934760 = require("./934760.js"),
  Chunk619899 = require("./619899.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk687983 = require("./687983.js");
let R = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    logoUrl: "",
    categorySkuId: "",
    bannerAsset: true,
    fallbackBannerUrl: "",
    summary: "",
    type: Chunk685816.z.HERO,
    categoryStoreListingId: ""
  },
  Z = e => {
    let {
      isResponsive: t,
      heroBannerOverrides: n
    } = e;
    return (0, r.jsxs)("div", {
      className: s()(P.heroBannerSheenContainer, {
        [P.responsive]: t
      }),
      children: [(0, r.jsx)("div", {
        id: "hero-block-left-shadow",
        className: s()(P.bannerShadow, P.left, {
          [P.darker]: null == n ? true : n.darker
        }),
        style: (null == n ? true : n.gradientLeft) != null ? {
          background: null == n ? true : n.gradientLeft
        } : true
      }), (0, r.jsx)("div", {
        id: "hero-block-right-shadow",
        className: s()(P.bannerShadow, P.right, {
          [P.darker]: null == n ? true : n.darker
        }),
        style: (null == n ? true : n.gradientRight) != null ? {
          background: null == n ? true : n.gradientRight
        } : true
      })]
    })
  },
  w = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: w,
      heroBlock: F,
      tab: H,
      onVisibilityChange: D
    } = e, M = (0, g.O)(e => {
      null == D || D(e)
    }, .1, null != D), W = (0, u.e7)([h.default], () => h.default.getCurrentUser()), U = (0, j.Z)(), V = (0, m.sp)(), z = (0, S.N)("HeroBlock") && H !== I.AW.ORBS, G = (0, S.E)("HeroBlock"), q = l.useMemo(() => {
      var e, t;
      return null != F ? F : null == w ? R : {
        rankedSkuIds: null != (e = w.heroRanking) ? e : [],
        name: w.name,
        unpublishedAt: w.unpublishedAt,
        logoUrl: (0, b.uV)(null != (t = w.heroLogo) ? t : w.logo, {
          size: x.n
        }),
        categorySkuId: w.skuId,
        bannerAsset: w.heroBannerAsset,
        fallbackBannerUrl: (0, b.uV)(w.heroBanner, {
          size: I.pv,
          format: "jpg"
        }),
        summary: w.summary,
        type: c.z.HERO,
        categoryStoreListingId: w.storeListingId,
        bannerConfig: w.heroBannerConfig,
        logoConfig: w.heroLogoDisplayConfig
      }
    }, [F, w]), {
      bannerOverrides: K,
      bannerStyleOverrides: Y,
      logoStyleOverrides: X,
      heroLogo: Q,
      heroBannerStatic: J,
      heroBannerAnimated: $
    } = (0, L.hr)(q), ee = null == K ? true : K.heroBanner, et = null != (t = null == Y ? true : Y.responsive) && t, en = null == $ ? true : $.endsWith(".riv"), er = null == Y ? true : Y.backgroundStyle, el = l.useMemo(() => U(q.rankedSkuIds), [n, U, q.rankedSkuIds]), ea = (0, v.a)()(el), es = (0, O.l)(ea).slice(0, 4), ei = (0, k.St)(es), eo = H === I.AW.ORBS ? A.intl.string(A.t["1CdL8f"]) : G ? A.intl.string(A.t.xYKa1d) : A.intl.formatToPlainString(A.t.wvKYCg, {
      category_name: q.name
    }), ec = (0, E.FF)("CollectiblesContent"), eu = () => {
      H === I.AW.ORBS ? ((0, p.Y)({
        pageType: N.ZY5.SHOP_ORBS_TAB,
        sectionType: N.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: N.qAy.CTA_TO_QUEST_HOME
      }), (0, f.navigateToQuestHome)({
        fromContent: o.j.ORBS_SHOP_HERO_CTA
      })) : (a("shop latest category hero", ec && q.categorySkuId !== i.T.ORB ? true : q.categorySkuId), _.default.track(N.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == V ? true : V.sessionId,
        sku_id: q.categorySkuId,
        page_type: H,
        page_section: null == V ? true : V.pageSection,
        page_category: null == V ? true : V.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != W && (n || q !== R) ? (0, r.jsxs)("div", {
      ref: M,
      className: P.heroBlock,
      children: [(0, r.jsxs)("div", {
        className: s()(P.banner, {
          [P.rivBanner]: en
        }),
        style: null != er ? {
          background: er
        } : true,
        children: [(0, r.jsx)(B.Z, {
          bannerStatic: J,
          bannerAnimated: $,
          isResponsive: et
        }), (null == Y ? true : Y.hideSideShadow) === true || en ? null : (0, r.jsx)(Z, {
          heroBannerOverrides: ee,
          isResponsive: et
        })]
      }), (0, r.jsxs)("div", {
        className: P.heroBlockContent,
        children: [en ? (0, r.jsx)("div", {
          className: P.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.zxk, {
            variant: "overlay-primary",
            onClick: eu,
            text: eo
          })
        }) : (0, r.jsxs)("div", {
          className: s()(z ? P.heroHeaderContainerStacked : P.heroHeaderContainer, {
            [P.responsive]: et
          }),
          children: [n ? (0, r.jsx)("div", {
            className: P.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: P.heroHeaderBadgeLogoSummaryContainer,
            children: [null != q.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: A.intl.string(A.t["h/uBCQ"]),
              className: P.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: s()(P.heroLogoNameContainer, {
                [P.heroLogoNameContainerStacked]: z
              }),
              children: [null != q.logoUrl && (0, r.jsx)("img", {
                className: P.heroHeaderLogo,
                src: Q,
                alt: q.name,
                style: null == X ? true : X.toDesktopStyles()
              }), null != q.title && (0, r.jsx)(d.X6q, {
                variant: "heading-xxl/bold",
                className: P.title,
                color: "header-primary",
                children: q.title
              }), "" !== q.summary && (0, r.jsx)(d.Text, {
                variant: q.categorySkuId === i.T.ORB ? "text-lg/medium" : "text-md/normal",
                className: q.categorySkuId === i.T.ORB ? P.orbsSubHeaderText : (null == K ? true : K.showDarkBannerText) ? P.subHeaderTextDark : P.subHeaderText,
                style: null != q.bannerTextColor ? {
                  color: q.bannerTextColor
                } : true,
                children: q.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: z ? P.heroHeaderButtonContainerStacked : P.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: eu,
              text: eo
            })
          })]
        }), (0, r.jsx)("div", {
          className: s()(P.row, P.feed, {
            [P.feedSingleRow]: H !== I.AW.ORBS
          }),
          children: n ? (0, r.jsx)(r.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, r.jsx)(y.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: ei.map((e, t) => {
              let n = C.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(m.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(T.Z, {
                  product: e,
                  category: n,
                  user: W,
                  tab: H,
                  shopBlockType: c.z.HERO
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }