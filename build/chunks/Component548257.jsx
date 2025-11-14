/** Chunk was on 45620 **/
/** chunk id: 548257, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk636977 = require("./636977.js"),
  Chunk685816 = require("./685816.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk870289 = require("./870289.js"),
  Chunk794324 = require("./794324.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk497788 = require("./497788.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
(0, Chunk884697.IC)(90);
let y = {
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
  j = e => {
    var t;
    let {
      isLoading: n = false,
      handleTransition: l,
      heroBlock: s,
      tab: C,
      onVisibilityChange: j
    } = e, k = (0, a.O)(e => {
      null == j || j(e)
    }, .1, null != j), I = (0, c.e7)([g.default], () => g.default.getCurrentUser()), T = (0, h.sp)(), {
      bannerStyleOverrides: L,
      logoStyleOverrides: B,
      heroLogo: P,
      heroBannerStatic: N,
      heroBannerAnimated: A
    } = (0, _.hr)(s), R = null != (t = null == L ? true : L.responsive) && t, Z = null == L ? true : L.backgroundStyle, w = C === x.AW.ORBS ? O.intl.string(O.t["1CdL8d"]) : O.intl.string(O.t.xYKa1T), H = (0, m.FF)("CollectiblesContent");
    return null != I && (n || s !== y) ? (0, r.jsxs)("div", {
      ref: k,
      className: S.heroBlock,
      children: [(0, r.jsx)("div", {
        className: S.banner,
        style: null != Z ? {
          background: Z
        } : true,
        children: null != N && (0, r.jsx)(b.Z, {
          bannerStatic: N,
          bannerAnimated: A,
          isResponsive: R
        })
      }), (0, r.jsxs)("div", {
        className: S.heroBlockContent,
        children: [(0, r.jsxs)("div", {
          className: i()(S.heroHeaderContainer, {
            [S.responsive]: R
          }),
          children: [n ? (0, r.jsx)("div", {
            className: S.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: S.heroHeaderBadgeLogoSummaryContainer,
            children: [null != s.unpublishedAt && (0, r.jsx)(u.IGR, {
              disableColor: true,
              text: O.intl.string(O.t["h/uBCR"]),
              className: S.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: S.heroLogoNameContainer,
              children: [null != P && (0, r.jsx)("img", {
                className: S.heroHeaderLogo,
                src: P,
                alt: s.name,
                style: null == B ? true : B.toDesktopStyles()
              }), null != s.title && (0, r.jsx)(u.Heading, {
                variant: "heading-xxl/bold",
                className: S.title,
                color: "header-primary",
                children: s.title
              }), "" !== s.summary && (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                className: S.subHeaderText,
                style: null != s.bannerTextColor ? {
                  color: s.bannerTextColor
                } : true,
                children: s.summary
              })]
            })]
          }), !n && (0, r.jsx)("div", {
            className: S.heroHeaderButtonContainer,
            children: (0, r.jsx)(u.Button, {
              variant: "overlay-primary",
              onClick: () => {
                C === x.AW.ORBS ? ((0, p.Y)({
                  pageType: E.ZY5.SHOP_ORBS_TAB,
                  sectionType: E.jXE.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: E.qAy.CTA_TO_QUEST_HOME
                }), (0, d.navigateToQuestHome)({
                  fromContent: o.j.ORBS_SHOP_HERO_CTA
                })) : (l({
                  sourceButton: "shop reward category hero",
                  categorySkuId: H ? true : s.categorySkuId,
                  isInternalShopDeeplink: true
                }), f.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == T ? true : T.sessionId,
                  sku_id: s.categorySkuId,
                  page_type: C,
                  page_section: null == T ? true : T.pageSection,
                  page_category: null == T ? true : T.pageCategory,
                  cta_name: "shop reward category hero button"
                }))
              },
              text: w
            })
          })]
        }), (0, r.jsx)(v.Z, {
          isBlockLoading: n,
          heroBlock: s,
          tab: C
        })]
      })]
    }) : null
  }