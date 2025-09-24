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
  Chunk254690 = require("./254690.js"),
  Chunk655283 = require("./655283.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk794324 = require("./794324.js"),
  Chunk934760 = require("./934760.js"),
  Chunk619899 = require("./619899.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let R = (0, Chunk884697.IC)(90),
  Z = {
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
  w = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: w,
      heroBlock: M,
      tab: F,
      onVisibilityChange: H
    } = e, D = (0, g.O)(e => {
      null == H || H(e)
    }, .1, null != H), W = (0, u.e7)([h.default], () => h.default.getCurrentUser()), U = (0, j.Z)(), V = (0, C.sp)(), z = S.Z.useConfig({
      location: "HeroBlock"
    }).showButtonLeftAligned && F !== B.AW.ORBS, G = (0, O.MG)("HeroBlock"), q = (0, O.xh)("HeroBlock"), K = l.useMemo(() => {
      var e, t;
      return null != M ? M : null == w ? Z : {
        rankedSkuIds: null != (e = w.heroRanking) ? e : [],
        name: w.name,
        unpublishedAt: w.unpublishedAt,
        logoUrl: (0, b.uV)(null != (t = w.heroLogo) ? t : w.logo, {
          size: R
        }),
        categorySkuId: w.skuId,
        bannerAsset: w.heroBannerAsset,
        fallbackBannerUrl: (0, b.uV)(w.heroBanner, {
          size: B.pv,
          format: "jpg"
        }),
        summary: w.summary,
        type: c.z.HERO,
        categoryStoreListingId: w.storeListingId,
        bannerConfig: w.heroBannerConfig,
        logoConfig: w.heroLogoDisplayConfig
      }
    }, [M, w]), {
      bannerStyleOverrides: Y,
      logoStyleOverrides: X,
      heroLogo: Q,
      heroBannerStatic: J,
      heroBannerAnimated: $
    } = (0, L.hr)(K), ee = null != (t = null == Y ? true : Y.responsive) && t, et = null == Y ? true : Y.backgroundStyle, en = null == $ ? true : $.endsWith(".riv"), er = (0, u.e7)([m.Z], () => m.Z.products), el = l.useMemo(() => n ? [] : er.size > 0 ? U(K.rankedSkuIds) : [], [n, U, K.rankedSkuIds, er]), ea = l.useMemo(() => !n && 0 !== K.rankedSkuIds.length && !(el.length > 0) && K.rankedSkuIds.every(e => {
      var t;
      return (null == (t = m.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, K.rankedSkuIds, el.length]), es = (0, v.a)()(el), ei = (0, x.l)(es).slice(0, 4), eo = (0, k.St)(ei), ec = F === B.AW.ORBS ? A.intl.string(A.t["1CdL8f"]) : G ? q ? A.intl.string(A.t["/QvRam"]) : A.intl.string(A.t.xYKa1d) : A.intl.formatToPlainString(A.t.wvKYCg, {
      category_name: K.name
    }), eu = (0, E.FF)("CollectiblesContent"), ed = K.categorySkuId === i.T.ORB, eg = () => {
      F === B.AW.ORBS ? ((0, f.Y)({
        pageType: N.ZY5.SHOP_ORBS_TAB,
        sectionType: N.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: N.qAy.CTA_TO_QUEST_HOME
      }), (0, p.navigateToQuestHome)({
        fromContent: o.j.ORBS_SHOP_HERO_CTA
      })) : (a("shop latest category hero", !eu || ed ? K.categorySkuId : true), _.default.track(N.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == V ? true : V.sessionId,
        sku_id: K.categorySkuId,
        page_type: F,
        page_section: null == V ? true : V.pageSection,
        page_category: null == V ? true : V.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != W && (n || K !== Z) ? (0, r.jsxs)("div", {
      ref: D,
      className: P.heroBlock,
      children: [(0, r.jsx)("div", {
        className: s()(P.banner, {
          [P.rivBanner]: en
        }),
        style: null != et ? {
          background: et
        } : true,
        children: (0, r.jsx)(I.Z, {
          bannerStatic: J,
          bannerAnimated: $,
          isResponsive: ee
        })
      }), (0, r.jsxs)("div", {
        className: P.heroBlockContent,
        children: [en ? (0, r.jsx)("div", {
          className: P.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.zxk, {
            variant: "overlay-primary",
            onClick: eg,
            text: ec
          })
        }) : (0, r.jsxs)("div", {
          className: s()(z ? P.heroHeaderContainerStacked : P.heroHeaderContainer, {
            [P.responsive]: ee
          }),
          children: [n ? (0, r.jsx)("div", {
            className: P.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: P.heroHeaderBadgeLogoSummaryContainer,
            children: [null != K.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: A.intl.string(A.t["h/uBCQ"]),
              className: P.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: s()(P.heroLogoNameContainer, {
                [P.heroLogoNameContainerStacked]: z
              }),
              children: [null != K.logoUrl && (0, r.jsx)("img", {
                className: P.heroHeaderLogo,
                src: Q,
                alt: K.name,
                style: null == X ? true : X.toDesktopStyles()
              }), null != K.title && (0, r.jsx)(d.X6q, {
                variant: "heading-xxl/bold",
                className: P.title,
                color: "header-primary",
                children: K.title
              }), "" !== K.summary && (0, r.jsx)(d.Text, {
                variant: ed ? "text-lg/medium" : "text-md/normal",
                className: ed ? P.orbsSubHeaderText : P.subHeaderText,
                style: null != K.bannerTextColor ? {
                  color: K.bannerTextColor
                } : true,
                children: K.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: z ? P.heroHeaderButtonContainerStacked : P.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: eg,
              text: ec
            })
          })]
        }), (0, r.jsx)("div", {
          className: s()(P.row, P.feed, {
            [P.feedSingleRow]: F !== B.AW.ORBS
          }),
          children: n || ea ? (0, r.jsx)(r.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, r.jsx)(T.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: eo.map((e, t) => {
              let n = m.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(C.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(y.Z, {
                  product: e,
                  category: n,
                  user: W,
                  tab: F,
                  shopBlockType: c.z.HERO
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }