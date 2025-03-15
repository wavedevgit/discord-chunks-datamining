/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => T
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  o = n.n(a),
  s = n(685816),
  i = n(442837),
  c = n(481060),
  d = n(782568),
  u = n(607070),
  g = n(70097),
  h = n(594174),
  f = n(451478),
  m = n(381585),
  p = n(597688),
  b = n(884697),
  C = n(937510),
  _ = n(823941),
  v = n(38900),
  k = n(709999),
  x = n(219778),
  j = n(794324),
  S = n(957058),
  y = n(215023),
  O = n(388032),
  E = n(681560);
let I = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: void 0,
    logoUrl: "",
    categorySkuId: "",
    bannerAsset: void 0,
    fallbackBannerUrl: "",
    summary: "",
    type: s.z.HERO,
    categoryStoreListingId: ""
  },
  B = e => {
    var t, n, r, l;
    return null == e ? I : {
      rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
      name: e.name,
      unpublishedAt: e.unpublishedAt,
      logoUrl: (0, b.uV)(null !== (r = null !== (n = e.heroLogo) && void 0 !== n ? n : e.logo) && void 0 !== r ? r : "", {
        size: _.n
      }),
      categorySkuId: e.skuId,
      bannerAsset: e.heroBannerAsset,
      fallbackBannerUrl: (0, b.uV)(null !== (l = e.heroBanner) && void 0 !== l ? l : "", {
        size: y.pv,
        format: "jpg"
      }),
      summary: e.summary,
      type: s.z.HERO,
      categoryStoreListingId: e.storeListingId
    }
  },
  T = e => {
    let {
      isLoading: t,
      handleTransition: n,
      category: a,
      heroBlock: s,
      tab: b
    } = e, _ = (0, i.e7)([u.Z], () => u.Z.useReducedMotion), T = (0, i.e7)([f.Z], () => f.Z.isFocused()), L = (0, i.e7)([h.default], () => h.default.getCurrentUser()), w = (0, S.u)(), P = l.useMemo(() => null != s ? s : B(a), [s, a]), {
      bannerOverride: N,
      heroLogo: Z,
      heroBannerStatic: A,
      heroBannerAnimated: W
    } = (0, j.hr)(P), H = null == N ? void 0 : N.heroBanner, R = l.useMemo(() => w(P.rankedSkuIds), [t, w, P.rankedSkuIds]), F = (0, C.l)(R).slice(0, 4), M = b === y.AW.ORBS ? O.NW.string(O.t.qQq91t) : O.NW.formatToPlainString(O.t.wvKYCg, {
      category_name: P.name
    }), V = (0, x.n)(null == s ? void 0 : s.categorySkuId);
    return null != L && (t || P !== I) ? (0, r.jsxs)("div", {
      className: o()(E.heroBlock, {
        [E.responsiveHero]: V.responsive
      }),
      children: [(0, r.jsxs)("div", {
        className: E.banner,
        style: null != V.backgroundStyle ? {
          background: V.backgroundStyle
        } : void 0,
        children: [null != W && !_ && T ? (0, r.jsx)(g.Z, {
          className: E.bannerVideoBackground,
          src: W,
          autoPlay: !0,
          loop: !0
        }) : (0, r.jsx)("div", {
          className: E.bannerImage,
          style: {
            backgroundImage: "url(".concat(A, ")")
          }
        }), (0, r.jsx)("div", {
          className: o()(E.bannerShadow, E.left, {
            [E.darker]: null == H ? void 0 : H.darker
          }),
          style: (null == H ? void 0 : H.gradientLeft) != null ? {
            background: null == H ? void 0 : H.gradientLeft
          } : void 0
        }), (0, r.jsx)("div", {
          className: o()(E.bannerShadow, E.right, {
            [E.darker]: null == H ? void 0 : H.darker
          }),
          style: (null == H ? void 0 : H.gradientRight) != null ? {
            background: null == H ? void 0 : H.gradientRight
          } : void 0
        })]
      }), (0, r.jsxs)("div", {
        className: E.heroBlockContent,
        children: [(0, r.jsxs)("div", {
          className: E.heroHeaderContainer,
          children: [t ? (0, r.jsx)("div", {
            className: E.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: E.heroHeaderBadgeLogoSummaryContainer,
            children: [null != P.unpublishedAt && (0, r.jsx)(c.IGR, {
              disableColor: !0,
              text: O.NW.string(O.t["h/uBCQ"]),
              className: E.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: E.heroLogoNameContainer,
              children: [null != P.logoUrl && (0, r.jsx)("img", {
                className: E.heroHeaderLogo,
                src: Z,
                alt: P.name
              }), null != P.title && (0, r.jsx)(c.X6q, {
                variant: "heading-xxl/bold",
                color: "always-white",
                className: E.title,
                children: P.title
              }), (0, r.jsx)(c.Text, {
                variant: b === y.AW.ORBS ? "text-lg/medium" : "text-md/normal",
                className: b === y.AW.ORBS ? E.orbsSubHeaderText : (null == N ? void 0 : N.showDarkBannerText) ? E.subHeaderTextDark : E.subHeaderText,
                children: P.summary
              })]
            })]
          }), !t && (0, r.jsx)("div", {
            className: E.heroHeaderButtonContainer,
            children: (0, r.jsx)(c.zxk, {
              className: E.heroHeaderButton,
              color: c.Ttl.WHITE,
              onClick: () => {
                b === y.AW.ORBS ? (0, d.Z)("https://support.discord.com/") : n("shop latest category hero", P.categorySkuId)
              },
              children: M
            })
          })]
        }), (0, r.jsx)("div", {
          className: o()(E.row, E.feed, E.feedSingleRow),
          children: t ? (0, r.jsx)(r.Fragment, {
            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(v.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: F.map((e, t) => {
              let n = p.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(m.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(k.Z, {
                  product: e,
                  category: n,
                  user: L,
                  tab: b,
                  isInFeedView: !0
                }, e.skuId)
              }, null == e ? void 0 : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }