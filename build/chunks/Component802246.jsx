/** Chunk was on 83782 **/
/** chunk id: 802246, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => F
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk172218 = require("./172218.js"),
  Chunk459192 = require("./459192.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk245068 = require("./245068.jsx"),
  Chunk950191 = require("./950191.js"),
  Chunk101928 = require("./101928.js"),
  Chunk195898 = require("./195898.js"),
  Chunk657331 = require("./657331.js"),
  Chunk804870 = require("./804870.jsx"),
  Chunk353157 = require("./353157.jsx"),
  Chunk18983 = require("./18983.jsx"),
  Chunk242640 = require("./242640.jsx"),
  Chunk834796 = require("./834796.jsx"),
  Chunk178213 = require("./178213.js"),
  Chunk594832 = require("./594832.js"),
  Chunk996353 = require("./996353.js"),
  Chunk872472 = require("./872472.js"),
  Chunk721932 = require("./721932.js"),
  Chunk878244 = require("./878244.jsx"),
  Chunk46537 = require("./46537.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk195416 = require("./195416.js");
let R = {
  FULL_WISHLIST: {
    title: Chunk985018.intl.string(Chunk985018.t["7lZ31J"]),
    getSubtitle: e => E.intl.formatToPlainString(E.t.BjEX38, {
      username: e
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk985018.intl.string(Chunk985018.t.SK5rmi),
    getSubtitle: e => E.intl.formatToPlainString(E.t.dIDKgi, {
      username: e
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk985018.intl.string(Chunk985018.t.SK5rmi),
    getSubtitle: e => E.intl.formatToPlainString(E.t.wyMp1j, {
      username: e
    }),
    showIcons: false
  },
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
    title: Chunk985018.intl.string(Chunk985018.t.BCi1gT),
    getSubtitle: e => E.intl.formatToPlainString(E.t.BjEX38, {
      username: e
    }),
    showIcons: false
  }
};

function B(e) {
  let {
    title: t,
    subtitle: i,
    themeClass: r
  } = e;
  return (0, n.jsx)("div", {
    className: s()(H.$R, r),
    children: (0, n.jsxs)("div", {
      className: H.hy,
      children: [(0, n.jsx)(c.Heading, {
        variant: "heading-lg/bold",
        children: t
      }), (0, n.jsx)(c.Text, {
        variant: "text-sm/medium",
        children: i
      })]
    })
  })
}

function G() {
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.AC4, {
      children: E.intl.string(E.t.pfChQr)
    }), (0, n.jsx)("div", {
      className: H.Md,
      children: Array.from({
        length: y.pl
      }, (e, t) => (0, n.jsx)(b.A, {
        cardSize: C.Y.SMALL
      }, "placeholder-".concat(t)))
    })]
  })
}

function W(e) {
  let {
    lastItem: t,
    remainingCount: i,
    giftRecipient: r,
    onOpenWishlist: l
  } = e;
  return null == t ? null : (0, n.jsx)("li", {
    className: H.XI,
    children: (0, n.jsx)(I.uz, {
      item: t.item,
      remainingCount: i,
      onClick: l,
      cardSize: C.Y.SMALL,
      renderItemPreview: e => {
        if ((0, j.L)(t.item)) {
          if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
            let i = {
              items: t.item.bundleItems
            };
            return (0, n.jsx)("div", {
              className: H.Tz,
              children: (0, n.jsx)(p.X, {
                product: i,
                isHighlighted: e,
                user: r
              })
            })
          }
          return (0, n.jsx)(S.A, {
            item: t.item,
            profileOwner: r,
            isHighlighted: e,
            cardSize: C.Y.SMALL
          })
        }
        return null
      }
    })
  }, "overflow-".concat(t.item.skuId))
}

function D(e) {
  let {
    items: t,
    hasOverflow: i,
    overflowItem: l,
    overflowCount: s,
    showIcons: a,
    giftRecipient: c,
    defaultWishlistId: d,
    onOpenWishlist: m,
    onWishlistItemClick: p,
    tooltipConfigs: f,
    analyticsLocations: _,
    totalUnownedWishlistItems: h,
    hasMultipleTypes: g,
    hasMultipleSources: I
  } = e, S = (0, w.G)("wishlist_banner"), b = r.useMemo(() => [...t, l].filter(e => null != e), [t, l]);
  return (0, n.jsx)("ul", {
    className: H.Md,
    children: S ? b.map((e, t) => {
      let {
        item: i,
        source: r
      } = e;
      return null == i || null == i.sku ? null : (0, n.jsx)("li", {
        className: H.XI,
        children: (0, n.jsx)(A.A, {
          index: t,
          sku: i.sku,
          wishlistId: d,
          source: r,
          wishlistOwner: c,
          hasMultipleTypes: g,
          hasMultipleSources: I,
          onOpenWishlist: m,
          onClick: p,
          analyticsLocations: _,
          totalUnownedWishlistItems: h
        })
      }, i.skuId)
    }) : (0, n.jsxs)(n.Fragment, {
      children: [t.map((e, t) => {
        let {
          item: i,
          source: r
        } = e;
        return (0, n.jsx)("li", {
          className: H.XI,
          children: ((e, t) => {
            var i, r;
            let {
              item: l,
              source: s
            } = e, m = f[t], h = (0, n.jsx)(x.A, {
              item: l,
              profileOwner: c,
              wishlistId: d,
              isOwner: false,
              cardSize: C.Y.SMALL,
              showOverlayButton: false,
              giftingOrigin: P.vQ.DM_CHANNEL_WISHLIST,
              source: s,
              showIcons: a,
              onWishlistItemClick: p,
              analyticsLocations: _
            });
            return m.shouldShow ? null != m.title && null == m.body && null == m.renderIcon ? (0, n.jsx)(u.m, {
              text: m.title,
              position: "top",
              asContainer: true,
              delay: y.Zh,
              children: h
            }) : (0, n.jsx)(o.u, {
              title: m.title,
              body: null != (i = m.body) ? i : "",
              asset: null == (r = m.renderIcon) ? true : r.call(m, l),
              assetSize: y.Q8,
              position: "top",
              asContainer: true,
              delay: y.Zh,
              children: h
            }) : h
          })({
            item: i,
            source: r
          }, t)
        }, i.skuId)
      }), i && (0, n.jsx)(W, {
        lastItem: l,
        remainingCount: s,
        giftRecipient: c,
        onOpenWishlist: m
      })]
    })
  })
}
let F = function(e) {
  let {
    giftRecipient: t,
    onWishlistItemClick: i
  } = e, {
    analyticsLocations: l
  } = (0, m.Ay)(d.A.WISHLIST_BANNER), o = (0, f.Ay)(null == t ? true : t.id), {
    displayItems: u,
    totalUnownedWishlistItemCount: p,
    fetchState: I,
    defaultWishlistId: S
  } = (0, O.A)({
    user: t,
    numItems: y.pl,
    location: "Wishlist Banner"
  }), x = r.useMemo(() => "loading" === I.status, [I.status]), C = L.Ay.getName(t), {
    theme: b,
    primaryColor: w,
    secondaryColor: j
  } = (0, _.A)({
    user: t,
    displayProfile: o
  }), {
    profileThemeStyle: A,
    profileThemeClassName: P
  } = (0, h.A)({
    theme: b,
    themeType: null,
    primaryColor: w,
    secondaryColor: j
  }), E = r.useCallback(() => {
    (0, g.openUserProfileModal)({
      userId: t.id,
      tabSection: N.RP.WISHLIST
    })
  }, [t.id]), W = R[r.useMemo(() => p >= y.pl ? "FULL_WISHLIST" : p > 0 ? "MIXED" : u.length > 0 && u.every(e => {
    let {
      item: t,
      source: i
    } = e;
    return i === y.uS.POPULAR && (0, T.$)(t)
  }) ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" : "SHOP_ONLY", [p, u])], F = null == o ? true : o.getBannerURL({
    canAnimate: false,
    size: 713
  }), U = p > y.pl, Y = r.useMemo(() => U ? u.slice(0, y.pl - 1) : u, [u, U]), z = (0, v.b)(Y, t), X = U ? u[y.pl - 1] : null, Q = p - y.pl + 1, [J, K] = r.useState(false), Z = r.useCallback(e => {
    if (e && !x && u.length > 0) {
      let e = u.map(e => {
        let {
          item: t
        } = e;
        return t.skuId
      });
      k.default.track(M.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: t.id,
        sku_ids: e,
        location_stack: l,
        product_lines: Array.from(new Set(u.map(e => {
          let {
            item: t
          } = e;
          return t.skuProductLine
        })))
      }), K(true)
    }
  }, [x, u, t.id, l]), q = (0, a.K)(Z, true, !x && !J), {
    hasMultipleTypes: V,
    hasMultipleSources: $
  } = r.useMemo(() => ({
    hasMultipleTypes: new Set(u.map(e => {
      let {
        item: t
      } = e;
      return t.skuProductLine
    })).size > 1,
    hasMultipleSources: new Set(u.map(e => {
      let {
        source: t
      } = e;
      return t
    })).size > 1
  }), [u]);
  return "error" === I.status ? null : (0, n.jsxs)("div", {
    ref: q,
    className: s()(H.A1, P),
    style: A,
    children: [null != F && (0, n.jsx)("div", {
      className: H.iL,
      style: {
        backgroundImage: "url(".concat(F, ")")
      }
    }), (0, n.jsx)(c.NPJ, {
      disableAdaptiveTheme: true,
      children: e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(B, {
          title: W.title,
          subtitle: W.getSubtitle(C),
          themeClass: e
        }), (0, n.jsx)("div", {
          className: e,
          children: x || 0 === u.length ? (0, n.jsx)(G, {}) : (0, n.jsx)(D, {
            items: Y,
            hasOverflow: U,
            overflowItem: X,
            overflowCount: Q,
            showIcons: W.showIcons,
            giftRecipient: t,
            defaultWishlistId: S,
            onOpenWishlist: E,
            onWishlistItemClick: i,
            tooltipConfigs: z,
            analyticsLocations: l,
            totalUnownedWishlistItems: p,
            hasMultipleTypes: V,
            hasMultipleSources: $
          })
        })]
      })
    })]
  })
}