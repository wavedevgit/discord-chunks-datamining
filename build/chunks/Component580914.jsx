/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk128922 = require("./128922.js"),
  Chunk870289 = require("./870289.js"),
  Chunk254690 = require("./254690.js"),
  Chunk655283 = require("./655283.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk653126 = require("./653126.jsx"),
  Chunk794324 = require("./794324.js"),
  Chunk934760 = require("./934760.js"),
  Chunk619899 = require("./619899.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let w = (0, Chunk884697.IC)(90),
  F = {
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
  H = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: H,
      heroBlock: M,
      tab: D,
      onVisibilityChange: W
    } = e, U = (0, g.O)(e => {
      null == W || W(e)
    }, .1, null != W), V = (0, u.e7)([h.default], () => h.default.getCurrentUser()), z = (0, I.Z)(), G = (0, _.sp)(), q = x.Z.useConfig({
      location: "HeroBlock"
    }).showButtonLeftAligned && D !== B.AW.ORBS, K = (0, v.MG)("HeroBlock"), Y = (0, v.xh)("HeroBlock"), X = l.useMemo(() => {
      var e, t;
      return null != M ? M : null == H ? F : {
        rankedSkuIds: null != (e = H.heroRanking) ? e : [],
        name: H.name,
        unpublishedAt: H.unpublishedAt,
        logoUrl: (0, b.uV)(null != (t = H.heroLogo) ? t : H.logo, {
          size: w
        }),
        categorySkuId: H.skuId,
        bannerAsset: H.heroBannerAsset,
        fallbackBannerUrl: (0, b.uV)(H.heroBanner, {
          size: B.pv,
          format: "jpg"
        }),
        summary: H.summary,
        type: c.z.HERO,
        categoryStoreListingId: H.storeListingId,
        bannerConfig: H.heroBannerConfig,
        logoConfig: H.heroLogoDisplayConfig
      }
    }, [M, H]), {
      bannerStyleOverrides: Q,
      logoStyleOverrides: J,
      heroLogo: $,
      heroBannerStatic: ee,
      heroBannerAnimated: et
    } = (0, k.hr)(X), en = null != (t = null == Q ? true : Q.responsive) && t, er = null == Q ? true : Q.backgroundStyle, el = null == et ? true : et.endsWith(".riv"), ea = (0, u.e7)([m.Z], () => m.Z.products), ei = l.useMemo(() => n ? [] : ea.size > 0 ? z(X.rankedSkuIds) : [], [n, z, X.rankedSkuIds, ea]), es = l.useMemo(() => !n && 0 !== X.rankedSkuIds.length && !(ei.length > 0) && X.rankedSkuIds.every(e => {
      var t;
      return (null == (t = m.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [n, X.rankedSkuIds, ei.length]), eo = (0, O.a)()(ei), ec = (0, T.l)(eo).slice(0, 4), eu = (0, P.St)(ec), ed = D === B.AW.ORBS ? R.intl.string(R.t["1CdL8f"]) : K ? Y ? R.intl.string(R.t["/QvRam"]) : R.intl.string(R.t.xYKa1d) : R.intl.formatToPlainString(R.t.wvKYCg, {
      category_name: X.name
    }), eg = (0, S.FF)("CollectiblesContent"), ep = X.categorySkuId === s.T.ORB, ef = E.Z.useConfig({
      location: "HeroBlock"
    }).showCardsV2, eh = () => {
      D === B.AW.ORBS ? ((0, f.Y)({
        pageType: N.ZY5.SHOP_ORBS_TAB,
        sectionType: N.jXE.ORBS_SHOP_HERO_BLOCK,
        ctaObject: N.qAy.CTA_TO_QUEST_HOME
      }), (0, p.navigateToQuestHome)({
        fromContent: o.j.ORBS_SHOP_HERO_CTA
      })) : (a("shop latest category hero", !eg || ep ? X.categorySkuId : true), C.default.track(N.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == G ? true : G.sessionId,
        sku_id: X.categorySkuId,
        page_type: D,
        page_section: null == G ? true : G.pageSection,
        page_category: null == G ? true : G.pageCategory,
        cta_name: "shop latest category hero button"
      }))
    };
    return null != V && (n || X !== F) ? (0, r.jsxs)("div", {
      ref: U,
      className: Z.heroBlock,
      children: [(0, r.jsx)("div", {
        className: i()(Z.banner, {
          [Z.rivBanner]: el
        }),
        style: null != er ? {
          background: er
        } : true,
        children: (0, r.jsx)(A.Z, {
          bannerStatic: ee,
          bannerAnimated: et,
          isResponsive: en
        })
      }), (0, r.jsxs)("div", {
        className: Z.heroBlockContent,
        children: [el ? (0, r.jsx)("div", {
          className: Z.rivBannerButtonContainer,
          children: !n && (0, r.jsx)(d.zxk, {
            variant: "overlay-primary",
            onClick: eh,
            text: ed
          })
        }) : (0, r.jsxs)("div", {
          className: i()(q ? Z.heroHeaderContainerStacked : Z.heroHeaderContainer, {
            [Z.responsive]: en
          }),
          children: [n ? (0, r.jsx)("div", {
            className: Z.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: Z.heroHeaderBadgeLogoSummaryContainer,
            children: [null != X.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: true,
              text: R.intl.string(R.t["h/uBCQ"]),
              className: Z.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: i()(Z.heroLogoNameContainer, {
                [Z.heroLogoNameContainerStacked]: q
              }),
              children: [null != X.logoUrl && (0, r.jsx)("img", {
                className: Z.heroHeaderLogo,
                src: $,
                alt: X.name,
                style: null == J ? true : J.toDesktopStyles()
              }), null != X.title && (0, r.jsx)(d.X6q, {
                variant: "heading-xxl/bold",
                className: Z.title,
                color: "header-primary",
                children: X.title
              }), "" !== X.summary && (0, r.jsx)(d.Text, {
                variant: ep ? "text-lg/medium" : "text-md/normal",
                className: ep ? Z.orbsSubHeaderText : Z.subHeaderText,
                style: null != X.bannerTextColor ? {
                  color: X.bannerTextColor
                } : true,
                children: X.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: q ? Z.heroHeaderButtonContainerStacked : Z.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.zxk, {
              variant: "overlay-primary",
              onClick: eh,
              text: ed
            })
          })]
        }), (0, r.jsx)("div", {
          className: i()(Z.row, Z.feed, {
            [Z.feedSingleRow]: D !== B.AW.ORBS
          }),
          children: n || es ? (0, r.jsx)(r.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, r.jsx)(y.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: eu.map((e, t) => {
              let n = m.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(_.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: ef ? (0, r.jsx)(j.Z, {
                  skuId: null == e ? true : e.skuId,
                  config: {
                    tab: D,
                    shopBlockType: c.z.HERO
                  }
                }, e.skuId) : (0, r.jsx)(L.Z, {
                  product: e,
                  category: n,
                  user: V,
                  tab: D,
                  shopBlockType: c.z.HERO
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }