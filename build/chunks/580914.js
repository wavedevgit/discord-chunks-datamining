/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => T
}), n(47120);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  a = n.n(o),
  i = n(685816),
  s = n(442837),
  c = n(481060),
  u = n(782568),
  d = n(607070),
  b = n(70097),
  p = n(594174),
  f = n(451478),
  g = n(63063),
  h = n(381585),
  m = n(597688),
  v = n(884697),
  _ = n(370039),
  C = n(937510),
  x = n(823941),
  O = n(38900),
  y = n(709999),
  j = n(794324),
  k = n(957058),
  S = n(215023),
  P = n(981631),
  E = n(388032),
  I = n(39532);
let w = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: void 0,
    logoUrl: "",
    categorySkuId: "",
    bannerAsset: void 0,
    fallbackBannerUrl: "",
    summary: "",
    type: i.z.HERO,
    categoryStoreListingId: ""
  },
  B = e => {
    var t, n, r, l;
    return null == e ? w : {
      rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
      name: e.name,
      unpublishedAt: e.unpublishedAt,
      logoUrl: (0, v.uV)(null !== (r = null !== (n = e.heroLogo) && void 0 !== n ? n : e.logo) && void 0 !== r ? r : "", {
        size: x.n
      }),
      categorySkuId: e.skuId,
      bannerAsset: e.heroBannerAsset,
      fallbackBannerUrl: (0, v.uV)(null !== (l = e.heroBanner) && void 0 !== l ? l : "", {
        size: S.pv,
        format: "jpg"
      }),
      summary: e.summary,
      type: i.z.HERO,
      categoryStoreListingId: e.storeListingId
    }
  },
  T = e => {
    let {
      isLoading: t,
      handleTransition: n,
      category: o,
      heroBlock: i,
      tab: v
    } = e, x = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), T = (0, s.e7)([f.Z], () => f.Z.isFocused()), N = (0, s.e7)([p.default], () => p.default.getCurrentUser()), L = (0, k.u)(), Z = l.useMemo(() => null != i ? i : B(o), [i, o]), {
      isPreviewingStaticBanner: R,
      bannerOverrides: A,
      bannerStyleOverrides: F,
      heroLogo: W,
      heroBannerStatic: D,
      heroBannerAnimated: H
    } = (0, j.hr)(Z), M = null == A ? void 0 : A.heroBanner, V = l.useMemo(() => L(Z.rankedSkuIds), [t, L, Z.rankedSkuIds]), U = (0, _.a)()(V), G = (0, C.l)(U).slice(0, 4), z = v === S.AW.ORBS ? E.NW.string(E.t.hvVgAQ) : E.NW.formatToPlainString(E.t.wvKYCg, {
      category_name: Z.name
    });
    return null != N && (t || Z !== w) ? (0, r.jsxs)("div", {
      className: a()(I.heroBlock, {
        [I.responsiveHero]: null == F ? void 0 : F.responsive
      }),
      children: [(0, r.jsxs)("div", {
        className: I.banner,
        style: (null == F ? void 0 : F.backgroundStyle) != null ? {
          background: F.backgroundStyle
        } : void 0,
        children: [null == H || x || !T || R ? (0, r.jsx)("div", {
          className: I.bannerImage,
          style: {
            backgroundImage: "url(".concat(D, ")")
          }
        }) : (0, r.jsx)(b.Z, {
          className: I.bannerVideoBackground,
          src: H,
          autoPlay: !0,
          loop: !0
        }), (0, r.jsx)("div", {
          className: a()(I.bannerShadow, I.left, {
            [I.darker]: null == M ? void 0 : M.darker
          }),
          style: (null == M ? void 0 : M.gradientLeft) != null ? {
            background: null == M ? void 0 : M.gradientLeft
          } : void 0
        }), (0, r.jsx)("div", {
          className: a()(I.bannerShadow, I.right, {
            [I.darker]: null == M ? void 0 : M.darker
          }),
          style: (null == M ? void 0 : M.gradientRight) != null ? {
            background: null == M ? void 0 : M.gradientRight
          } : void 0
        })]
      }), (0, r.jsxs)("div", {
        className: I.heroBlockContent,
        children: [(0, r.jsxs)("div", {
          className: I.heroHeaderContainer,
          children: [t ? (0, r.jsx)("div", {
            className: I.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: I.heroHeaderBadgeLogoSummaryContainer,
            children: [null != Z.unpublishedAt && (0, r.jsx)(c.IGR, {
              disableColor: !0,
              text: E.NW.string(E.t["h/uBCQ"]),
              className: I.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: I.heroLogoNameContainer,
              children: [null != Z.logoUrl && (0, r.jsx)("img", {
                className: I.heroHeaderLogo,
                src: W,
                alt: Z.name
              }), null != Z.title && (0, r.jsx)(c.X6q, {
                variant: "heading-xxl/bold",
                color: "always-white",
                className: I.title,
                children: Z.title
              }), (0, r.jsx)(c.Text, {
                variant: v === S.AW.ORBS ? "text-lg/medium" : "text-md/normal",
                className: v === S.AW.ORBS ? I.orbsSubHeaderText : (null == A ? void 0 : A.showDarkBannerText) ? I.subHeaderTextDark : I.subHeaderText,
                style: null != Z.bannerTextColor ? {
                  color: Z.bannerTextColor
                } : void 0,
                children: Z.summary
              })]
            })]
          }), !t && (0, r.jsx)("div", {
            className: I.heroHeaderButtonContainer,
            children: (0, r.jsx)(c.zxk, {
              className: I.heroHeaderButton,
              color: c.Ttl.WHITE,
              onClick: () => {
                v === S.AW.ORBS ? (0, u.Z)(g.Z.getArticleURL(P.BhN.VIRTUAL_CURRENCY_LEARN_MORE)) : n("shop latest category hero", Z.categorySkuId)
              },
              children: z
            })
          })]
        }), (0, r.jsx)("div", {
          className: a()(I.row, I.feed, I.feedSingleRow),
          children: t ? (0, r.jsx)(r.Fragment, {
            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(O.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: G.map((e, t) => {
              let n = m.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(h.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(y.Z, {
                  product: e,
                  category: n,
                  user: N,
                  tab: v,
                  isInFeedView: !0
                }, e.skuId)
              }, null == e ? void 0 : e.skuId)
            })
          })
        })]
      })]
    }) : null
  }