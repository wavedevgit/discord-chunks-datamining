/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => T
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(685816),
  i = n(442837),
  c = n(481060),
  d = n(782568),
  u = n(607070),
  m = n(70097),
  g = n(594174),
  f = n(451478),
  h = n(381585),
  p = n(597688),
  b = n(884697),
  C = n(937510),
  _ = n(823941),
  v = n(38900),
  x = n(709999),
  j = n(794324),
  k = n(957058),
  y = n(215023),
  S = n(388032),
  O = n(39532);
let E = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: void 0,
    logoUrl: "",
    categorySkuId: "",
    bannerAsset: void 0,
    fallbackBannerUrl: "",
    summary: "",
    type: o.z.HERO,
    categoryStoreListingId: ""
  },
  B = e => {
    var t, n, r, l;
    return null == e ? E : {
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
      type: o.z.HERO,
      categoryStoreListingId: e.storeListingId
    }
  },
  T = e => {
    let {
      isLoading: t,
      handleTransition: n,
      category: a,
      heroBlock: o,
      tab: b
    } = e, _ = (0, i.e7)([u.Z], () => u.Z.useReducedMotion), T = (0, i.e7)([f.Z], () => f.Z.isFocused()), I = (0, i.e7)([g.default], () => g.default.getCurrentUser()), L = (0, k.u)(), w = l.useMemo(() => null != o ? o : B(a), [o, a]), {
      bannerOverride: N,
      heroLogo: P,
      heroBannerStatic: Z,
      heroBannerAnimated: A
    } = (0, j.hr)(w), R = null == N ? void 0 : N.heroBanner, W = l.useMemo(() => L(w.rankedSkuIds), [t, L, w.rankedSkuIds]), H = (0, C.l)(W).slice(0, 4), F = b === y.AW.ORBS ? S.NW.string(S.t.qQq91t) : S.NW.formatToPlainString(S.t.wvKYCg, {
      category_name: w.name
    });
    return null != I && (t || w !== E) ? (0, r.jsxs)("div", {
      className: O.heroBlock,
      children: [(0, r.jsxs)("div", {
        className: O.banner,
        children: [null != A && !_ && T ? (0, r.jsx)(m.Z, {
          className: O.bannerVideoBackground,
          src: A,
          autoPlay: !0,
          loop: !0
        }) : (0, r.jsx)("div", {
          className: O.bannerImage,
          style: {
            backgroundImage: "url(".concat(Z, ")")
          }
        }), (0, r.jsx)("div", {
          className: s()(O.bannerShadow, O.left, {
            [O.darker]: null == R ? void 0 : R.darker
          }),
          style: (null == R ? void 0 : R.gradientLeft) != null ? {
            background: null == R ? void 0 : R.gradientLeft
          } : void 0
        }), (0, r.jsx)("div", {
          className: s()(O.bannerShadow, O.right, {
            [O.darker]: null == R ? void 0 : R.darker
          }),
          style: (null == R ? void 0 : R.gradientRight) != null ? {
            background: null == R ? void 0 : R.gradientRight
          } : void 0
        })]
      }), (0, r.jsxs)("div", {
        className: O.heroBlockContent,
        children: [(0, r.jsxs)("div", {
          className: O.heroHeaderContainer,
          children: [t ? (0, r.jsx)("div", {
            className: O.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsxs)("div", {
            className: O.heroHeaderBadgeLogoSummaryContainer,
            children: [null != w.unpublishedAt && (0, r.jsx)(c.IGR, {
              disableColor: !0,
              text: S.NW.string(S.t["h/uBCQ"]),
              className: O.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: O.heroLogoNameContainer,
              children: [null != w.logoUrl && (0, r.jsx)("img", {
                className: O.heroHeaderLogo,
                src: P,
                alt: w.name
              }), null != w.title && (0, r.jsx)(c.X6q, {
                variant: "heading-xxl/bold",
                color: "always-white",
                className: O.title,
                children: w.title
              }), (0, r.jsx)(c.Text, {
                variant: b === y.AW.ORBS ? "text-lg/medium" : "text-md/normal",
                className: b === y.AW.ORBS ? O.orbsSubHeaderText : (null == N ? void 0 : N.showDarkBannerText) ? O.subHeaderTextDark : O.subHeaderText,
                children: w.summary
              })]
            })]
          }), !t && (0, r.jsx)("div", {
            className: O.heroHeaderButtonContainer,
            children: (0, r.jsx)(c.zxk, {
              className: O.heroHeaderButton,
              color: c.Ttl.WHITE,
              onClick: () => {
                b === y.AW.ORBS ? (0, d.Z)("https://support.discord.com/") : n("shop latest category hero", w.categorySkuId)
              },
              children: F
            })
          })]
        }), (0, r.jsx)("div", {
          className: s()(O.row, O.feed, O.feedSingleRow),
          children: t ? (0, r.jsx)(r.Fragment, {
            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(v.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: H.map((e, t) => {
              let n = p.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(h.k0, {
                newValue: {
                  tilePosition: t,
                  pageSection: "top 4",
                  categoryPosition: 0
                },
                children: (0, r.jsx)(x.Z, {
                  product: e,
                  category: n,
                  user: I,
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