/** Chunk was on 45620 **/
/** chunk id: 580914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk180650 = require("./180650.js"),
  Chunk636977 = require("./636977.js"),
  Chunk685816 = require("./685816.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk688465 = require("./688465.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk794231 = require("./794231.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk870289 = require("./870289.js"),
  Chunk26931 = require("./26931.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk823941 = require("./823941.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.js"),
  Chunk794324 = require("./794324.js"),
  Chunk619899 = require("./619899.js"),
  Chunk859788 = require("./859788.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk806734 = require("./806734.js");
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
    var t, n, r, l;
    return null == e ? R : {
      rankedSkuIds: null != (t = e.heroRanking) ? t : [],
      name: e.name,
      unpublishedAt: e.unpublishedAt,
      logoUrl: (0, C.uV)(null != (r = null != (n = e.heroLogo) ? n : e.logo) ? r : "", {
        size: j.n
      }),
      categorySkuId: e.skuId,
      bannerAsset: e.heroBannerAsset,
      fallbackBannerUrl: (0, C.uV)(null != (l = e.heroBanner) ? l : "", {
        size: N.pv,
        format: "jpg"
      }),
      summary: e.summary,
      type: c.z.HERO,
      categoryStoreListingId: e.storeListingId,
      bannerConfig: e.heroBannerConfig,
      logoConfig: e.heroLogoDisplayConfig
    }
  },
  D = e => {
    let {
      isResponsive: t,
      heroBannerOverrides: n
    } = e;
    return <div className={i()(B.heroBannerSheenContainer, {
        [B.responsive]: t
      })}>{<div id={"hero-block-left-shadow"} className={i()(B.bannerShadow, B.left, {
          [B.darker]: null == n ? true : n.darker
        })} style={(null == n ? true : n.gradientLeft) != null ? {
          background: null == n ? true : n.gradientLeft
        } : true} />}{<div id={"hero-block-right-shadow"} className={i()(B.bannerShadow, B.right, {
          [B.darker]: null == n ? true : n.darker
        })} style={(null == n ? true : n.gradientRight) != null ? {
          background: null == n ? true : n.gradientRight
        } : true} />}</div>
  },
  F = e => {
    var t;
    let {
      isLoading: n,
      handleTransition: a,
      category: c,
      heroBlock: C,
      tab: j,
      onVisibilityChange: F
    } = e, M = (0, p.O)(e => {
      null == F || F(e)
    }, .1, null != F), H = (0, u.e7)([m.default], () => m.default.getCurrentUser()), W = (0, S.u)(), V = (0, v.sp)(), {
      showBetaTag: U
    } = h.Z.useExperiment({
      location: "collectible_hero_block"
    }), z = l.useMemo(() => null != C ? C : Z(c), [C, c]), {
      bannerOverrides: G,
      bannerStyleOverrides: q,
      logoStyleOverrides: K,
      heroLogo: Y,
      heroBannerStatic: X,
      heroBannerAnimated: J
    } = (0, L.hr)(z), Q = null == G ? true : G.heroBanner, $ = null != (t = null == q ? true : q.responsive) && t, ee = null == q ? true : q.backgroundStyle, et = l.useMemo(() => W(z.rankedSkuIds), [n, W, z.rankedSkuIds]), en = (0, y.a)()(et), er = (0, x.l)(en).slice(0, 4), el = (0, k.St)(er), ea = j === N.AW.ORBS ? A.intl.string(A.t["1CdL8f"]) : A.intl.formatToPlainString(A.t.wvKYCg, {
      category_name: z.name
    }), ei = (0, E.FF)("CollectiblesContent");
    return null != H && (n || z !== R) ? <div ref={M} className={B.heroBlock}>{<div className={B.banner} style={null != ee ? {
          background: ee
        } : true}>{<I.Z bannerStatic={X} bannerAnimated={J} isResponsive={$} />}{(null == q ? true : q.hideSideShadow) === true ? null : <D heroBannerOverrides={Q} isResponsive={$} />}</div>}{<div className={B.heroBlockContent}>{<div className={i()(B.heroHeaderContainer, {
            [B.responsive]: $
          })}>{n ? <div className={B.heroHeaderBadgeLogoSummaryContainer} /> : <div className={B.heroHeaderBadgeLogoSummaryContainer}>{null != z.unpublishedAt && <d.IGR disableColor={true} text={A.intl.string(A.t["h/uBCQ"])} className={B.limitedTimeBadge} />}{<div className={B.heroLogoNameContainer}>{null != z.logoUrl && <img className={B.heroHeaderLogo} src={Y} alt={z.name} style={null == K ? true : K.toDesktopStyles()} />}{null != z.title && <d.X6q variant={"heading-xxl/bold"} className={B.title} color={"header-primary"}>{z.title}{j === N.AW.ORBS && U && <g.Z />}</d.X6q>}{"" !== z.summary && <d.Text variant={z.categorySkuId === o.T.ORB ? "text-lg/medium" : "text-md/normal"} className={z.categorySkuId === o.T.ORB ? B.orbsSubHeaderText : (null == G ? true : G.showDarkBannerText) ? B.subHeaderTextDark : B.subHeaderText} style={null != z.bannerTextColor ? {
                  color: z.bannerTextColor
                } : true}>{z.summary}</d.Text>}</div>}</div>}{!n && <div className={B.heroHeaderButtonContainer}><d.zxk variant={"overlay-primary"} onClick={() => {
                j === N.AW.ORBS ? ((0, b.Y)({
                  pageType: w.ZY5.SHOP_ORBS_TAB,
                  sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: w.qAy.CTA_TO_QUEST_HOME
                }), (0, f.navigateToQuestHome)({
                  fromContent: s.j.ORBS_SHOP_HERO_CTA
                })) : (a("shop latest category hero", ei && z.categorySkuId !== o.T.ORB ? true : z.categorySkuId), _.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == V ? true : V.sessionId,
                  sku_id: z.categorySkuId,
                  page_type: j,
                  page_section: null == V ? true : V.pageSection,
                  page_category: null == V ? true : V.pageCategory,
                  cta_name: "shop latest category hero button"
                }))
              }} text={ea} /></div>}</div>}{<div className={i()(B.row, B.feed, {
            [B.feedSingleRow]: j !== N.AW.ORBS
          })}>{n ? (0, r.jsx)(r.Fragment, {
            children: [true, true, true, true].map((e, t) => (0, r.jsx)(T.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: el.map((e, t) => {
              let n = O.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(v.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(P.Z, {
                  product: e,
                  category: n,
                  user: H,
                  tab: j,
                  _isInHeroBlock: true
                }, e.skuId)
              }, null == e ? true : e.skuId)
            })
          })}</div>}</div>}</div> : null
  }