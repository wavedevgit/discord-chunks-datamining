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
  d = n(481060),
  c = n(782568),
  u = n(607070),
  m = n(70097),
  g = n(594174),
  h = n(451478),
  f = n(381585),
  p = n(597688),
  b = n(884697),
  C = n(937510),
  _ = n(823941),
  v = n(38900),
  x = n(709999),
  k = n(794324),
  j = n(957058),
  S = n(215023),
  y = n(388032),
  O = n(39532);
let B = {
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
  E = e => {
    var t, n, r, l;
    return null == e ? B : {
      rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
      name: e.name,
      unpublishedAt: e.unpublishedAt,
      logoUrl: (0, b.uV)(null !== (r = null !== (n = e.heroLogo) && void 0 !== n ? n : e.logo) && void 0 !== r ? r : "", {
        size: _.n
      }),
      categorySkuId: e.skuId,
      bannerAsset: e.heroBannerAsset,
      fallbackBannerUrl: (0, b.uV)(null !== (l = e.heroBanner) && void 0 !== l ? l : "", {
        size: S.pv,
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
    } = e, _ = (0, i.e7)([u.Z], () => u.Z.useReducedMotion), T = (0, i.e7)([h.Z], () => h.Z.isFocused()), I = (0, i.e7)([g.default], () => g.default.getCurrentUser()), N = (0, j.u)(), L = l.useMemo(() => null != o ? o : E(a), [o, a]), {
      bannerOverride: Z,
      heroLogo: w,
      heroBannerStatic: P,
      heroBannerAnimated: A
    } = (0, k.hr)(L), W = null == Z ? void 0 : Z.heroBanner, H = l.useMemo(() => N(L.rankedSkuIds), [t, N, L.rankedSkuIds]), R = (0, C.l)(H).slice(0, 4), F = b === S.AW.ORBS ? y.NW.string(y.t.qQq91t) : y.NW.formatToPlainString(y.t.wvKYCg, {
      category_name: L.name
    });
    return null != I && (t || L !== B) ? (0, r.jsxs)("div", {
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
            backgroundImage: "url(".concat(P, ")")
          }
        }), (0, r.jsx)("div", {
          className: s()(O.bannerShadow, O.left, {
            [O.darker]: null == W ? void 0 : W.darker
          }),
          style: (null == W ? void 0 : W.gradientLeft) != null ? {
            background: null == W ? void 0 : W.gradientLeft
          } : void 0
        }), (0, r.jsx)("div", {
          className: s()(O.bannerShadow, O.right, {
            [O.darker]: null == W ? void 0 : W.darker
          }),
          style: (null == W ? void 0 : W.gradientRight) != null ? {
            background: null == W ? void 0 : W.gradientRight
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
            children: [null != L.unpublishedAt && (0, r.jsx)(d.IGR, {
              disableColor: !0,
              text: y.NW.string(y.t["h/uBCQ"]),
              className: O.limitedTimeBadge
            }), (0, r.jsxs)("div", {
              className: O.heroLogoNameContainer,
              children: [null != L.logoUrl && (0, r.jsx)("img", {
                className: O.heroHeaderLogo,
                src: w,
                alt: L.name
              }), null != L.title && (0, r.jsx)(d.X6q, {
                variant: "heading-xxl/bold",
                color: "always-white",
                className: O.title,
                children: L.title
              }), (0, r.jsx)(d.Text, {
                variant: b === S.AW.ORBS ? "text-lg/medium" : "text-md/normal",
                className: b === S.AW.ORBS ? O.orbsSubHeaderText : (null == Z ? void 0 : Z.showDarkBannerText) ? O.subHeaderTextDark : O.subHeaderText,
                children: L.summary
              })]
            })]
          }), !t && (0, r.jsx)("div", {
            className: O.heroHeaderButtonContainer,
            children: (0, r.jsx)(d.zxk, {
              className: O.heroHeaderButton,
              color: d.Ttl.WHITE,
              onClick: () => {
                b === S.AW.ORBS ? (0, c.Z)("https://support.discord.com/") : n("shop latest category hero", L.categorySkuId)
              },
              children: F
            })
          })]
        }), (0, r.jsx)("div", {
          className: s()(O.row, O.feed, O.feedSingleRow),
          children: t ? (0, r.jsx)(r.Fragment, {
            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(v.K, {}, t))
          }) : (0, r.jsx)(r.Fragment, {
            children: R.map((e, t) => {
              let n = p.Z.getCategoryForProduct(e.skuId);
              return null == e || null == n ? null : (0, r.jsx)(f.k0, {
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