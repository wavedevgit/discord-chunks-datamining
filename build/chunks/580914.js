/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => w
}), r(47120);
var n = r(200651),
  i = r(192379),
  l = r(120356),
  o = r.n(l),
  a = r(685816),
  s = r(442837),
  c = r(481060),
  d = r(782568),
  u = r(607070),
  p = r(70097),
  f = r(594174),
  h = r(451478),
  b = r(381585),
  C = r(597688),
  m = r(884697),
  g = r(937510),
  v = r(823941),
  x = r(38900),
  j = r(709999),
  _ = r(957058),
  y = r(215023),
  O = r(388032),
  k = r(974492);
let P = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: void 0,
    logoUrl: "",
    categorySkuId: "",
    bannerAsset: void 0,
    fallbackBannerUrl: "",
    summary: "",
    type: a.z.HERO,
    categoryStoreListingId: ""
  },
  S = e => {
    var t, r, n, i;
    return null == e ? P : {
      rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
      name: e.name,
      unpublishedAt: e.unpublishedAt,
      logoUrl: (0, m.uV)(null !== (n = null !== (r = e.heroLogo) && void 0 !== r ? r : e.logo) && void 0 !== n ? n : "", {
        size: v.n
      }),
      categorySkuId: e.skuId,
      bannerAsset: e.heroBannerAsset,
      fallbackBannerUrl: (0, m.uV)(null !== (i = e.heroBanner) && void 0 !== i ? i : "", {
        size: y.pv,
        format: "jpg"
      }),
      summary: e.summary,
      type: a.z.HERO,
      categoryStoreListingId: e.storeListingId
    }
  },
  w = e => {
    var t, r, l, a, m;
    let {
      isLoading: v,
      handleTransition: w,
      category: E,
      heroBlock: L,
      tab: I
    } = e, T = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), N = (0, s.e7)([h.Z], () => h.Z.isFocused()), B = (0, s.e7)([f.default], () => f.default.getCurrentUser()), Z = (0, _.u)(), F = i.useMemo(() => null != L ? L : S(E), [L, E]), A = i.useMemo(() => Z(F.rankedSkuIds), [v, Z, F.rankedSkuIds]), R = (0, g.l)(A).slice(0, 4), W = I === y.AW.ORBS ? O.NW.string(O.t.qQq91t) : O.NW.formatToPlainString(O.t.wvKYCg, {
      category_name: F.name
    });
    if (null == B || !v && F === P) return null;
    let D = null != F.categorySkuId ? (0, y.ZS)(F.categorySkuId) : void 0,
      H = null !== (l = null == D ? void 0 : D.heroBanner) && void 0 !== l ? l : void 0,
      M = null !== (a = null == H ? void 0 : H.animationSource) && void 0 !== a ? a : null === (t = F.bannerAsset) || void 0 === t ? void 0 : t.animated,
      V = null !== (m = null === (r = F.bannerAsset) || void 0 === r ? void 0 : r.static) && void 0 !== m ? m : F.fallbackBannerUrl;
    return (0, n.jsxs)("div", {
      className: k.heroBlock,
      children: [(0, n.jsxs)("div", {
        className: k.banner,
        children: [null != M && !T && N ? (0, n.jsx)(p.Z, {
          className: k.bannerVideoBackground,
          src: M,
          autoPlay: !0,
          loop: !0
        }) : (0, n.jsx)("div", {
          className: k.bannerImage,
          style: {
            backgroundImage: "url(".concat(V, ")")
          }
        }), (0, n.jsx)("div", {
          className: o()(k.bannerShadow, k.left, {
            [k.darker]: null == H ? void 0 : H.darker
          }),
          style: (null == H ? void 0 : H.gradientLeft) != null ? {
            background: null == H ? void 0 : H.gradientLeft
          } : void 0
        }), (0, n.jsx)("div", {
          className: o()(k.bannerShadow, k.right, {
            [k.darker]: null == H ? void 0 : H.darker
          }),
          style: (null == H ? void 0 : H.gradientRight) != null ? {
            background: null == H ? void 0 : H.gradientRight
          } : void 0
        })]
      }), (0, n.jsxs)("div", {
        className: k.heroBlockContent,
        children: [(0, n.jsxs)("div", {
          className: o()(k.heroHeaderContainer),
          children: [v ? (0, n.jsx)("div", {
            className: o()(k.heroHeaderBadgeLogoSummaryContainer)
          }) : (0, n.jsxs)("div", {
            className: o()(k.heroHeaderBadgeLogoSummaryContainer),
            children: [null != F.unpublishedAt && (0, n.jsx)(c.IGR, {
              disableColor: !0,
              text: O.NW.string(O.t["h/uBCQ"]),
              className: k.limitedTimeBadge
            }), (0, n.jsxs)("div", {
              className: o()(k.heroLogoNameContainer),
              children: [null != F.logoUrl && (0, n.jsx)("img", {
                className: k.heroHeaderLogo,
                src: F.logoUrl,
                alt: F.name
              }), null != F.title && (0, n.jsx)(c.X6q, {
                variant: "heading-xxl/bold",
                color: "always-white",
                className: k.title,
                children: F.title
              }), (0, n.jsx)(c.Text, {
                variant: I === y.AW.ORBS ? "text-lg/medium" : "text-md/normal",
                className: I === y.AW.ORBS ? k.orbsSubHeaderText : null != D && D.showDarkBannerText ? k.subHeaderTextDark : k.subHeaderText,
                children: F.summary
              })]
            })]
          }), !v && (0, n.jsx)("div", {
            className: k.heroHeaderButtonContainer,
            children: (0, n.jsx)(c.zxk, {
              className: k.heroHeaderButton,
              color: c.Ttl.WHITE,
              onClick: () => {
                I === y.AW.ORBS ? (0, d.Z)("https://support.discord.com/") : w("shop latest category hero", F.categorySkuId)
              },
              children: W
            })
          })]
        }), (0, n.jsx)("div", {
          className: o()(k.row, k.feed, k.feedSingleRow),
          children: v ? (0, n.jsx)(n.Fragment, {
            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(x.K, {}, t))
          }) : (0, n.jsx)(n.Fragment, {
            children: R.map((e, t) => {
              let r = C.Z.getCategoryForProduct(e.skuId);
              return null == e || null == r ? null : (0, n.jsx)(b.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, n.jsx)(j.Z, {
                  product: e,
                  category: r,
                  user: B,
                  tab: I,
                  isInFeedView: !0
                }, e.skuId)
              }, null == e ? void 0 : e.skuId)
            })
          })
        })]
      })]
    })
  }