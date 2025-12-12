/** Chunk was on 3472 **/
/** chunk id: 170731, original params: i,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => W
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk454399 = require("./454399.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk216541 = require("./216541.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk576635 = require("./576635.js"),
  Chunk213053 = require("./213053.js"),
  Chunk892001 = require("./892001.js"),
  Chunk835255 = require("./835255.jsx"),
  Chunk221300 = require("./221300.jsx"),
  Chunk796483 = require("./796483.jsx"),
  Chunk688192 = require("./688192.jsx"),
  Chunk372263 = require("./372263.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk176879 = require("./176879.js"),
  Chunk541699 = require("./541699.js"),
  Chunk321947 = require("./321947.js"),
  Chunk689201 = require("./689201.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk968394 = require("./968394.js");
let R = {
  FULL_WISHLIST: {
    title: Chunk388032.intl.string(Chunk388032.t["7lZ31J"]),
    getSubtitle: i => E.intl.formatToPlainString(E.t.BjEX38, {
      username: i
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: i => E.intl.formatToPlainString(E.t.dIDKgi, {
      username: i
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: i => E.intl.formatToPlainString(E.t.wyMp1j, {
      username: i
    }),
    showIcons: false
  },
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
    title: Chunk388032.intl.string(Chunk388032.t.BCi1gT),
    getSubtitle: i => E.intl.formatToPlainString(E.t.BjEX38, {
      username: i
    }),
    showIcons: false
  }
};

function M(i) {
  let {
    title: e,
    subtitle: t,
    themeClass: s
  } = i;
  return (0, n.jsx)("div", {
    className: a()(P.wishlistBannerHeader, s),
    children: (0, n.jsxs)("div", {
      className: P.wishlistBannerTitleContainer,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-lg/bold",
        children: e
      }), (0, n.jsx)(d.Text, {
        variant: "text-sm/medium",
        children: t
      })]
    })
  })
}

function A() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.nn4, {
      children: Chunk388032.intl.string(Chunk388032.t.pfChQr)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk968394.wishlistBannerGrid,
      children: Array.from({
        length: Chunk602733.zL
      }, (i, e) => (0, n.jsx)(S.Z, {
        cardSize: w.U.SMALL
      }, "placeholder-".concat(e)))
    })]
  })
}

function H(i) {
  let {
    lastItem: e,
    remainingCount: t,
    giftRecipient: s,
    onOpenWishlist: r
  } = i;
  return null == e ? null : (0, n.jsx)("li", {
    className: P.wishlistBannerListItem,
    children: (0, n.jsx)(b.BO, {
      item: e.item,
      remainingCount: t,
      onClick: r,
      cardSize: w.U.SMALL,
      renderItemPreview: i => {
        if ((0, _.Q)(e.item)) {
          if (null != e.item.bundleItems && e.item.bundleItems.length > 0) {
            let t = {
              items: e.item.bundleItems
            };
            return (0, n.jsx)("div", {
              className: P.bundlePreviewBanner,
              children: (0, n.jsx)(h.d, {
                product: t,
                isPurchased: false,
                isHighlighted: i,
                user: s
              })
            })
          }
          return (0, n.jsx)(j.Z, {
            item: e.item,
            profileOwner: s,
            isHighlighted: i,
            cardSize: w.U.SMALL
          })
        }
        return null
      }
    })
  }, "overflow-".concat(e.item.skuId))
}

function G(i) {
  let {
    items: e,
    hasOverflow: t,
    overflowItem: s,
    overflowCount: r,
    showIcons: a,
    giftRecipient: l,
    defaultWishlistId: d,
    onOpenWishlist: u,
    onWishlistItemClick: m,
    tooltipConfigs: h,
    analyticsLocations: f
  } = i;
  return (0, n.jsxs)("ul", {
    className: P.wishlistBannerGrid,
    children: [e.map((i, e) => {
      let {
        item: t,
        source: s
      } = i;
      return (0, n.jsx)("li", {
        className: P.wishlistBannerListItem,
        children: ((i, e) => {
          var t, s;
          let {
            item: r,
            source: u
          } = i, g = h[e], p = (0, n.jsx)(x.Z, {
            item: r,
            profileOwner: l,
            wishlistId: d,
            isOwner: false,
            cardSize: w.U.SMALL,
            showOverlayButton: false,
            giftingOrigin: y.Wt.DM_CHANNEL_WISHLIST,
            source: u,
            showIcons: a,
            onWishlistItemClick: m,
            analyticsLocations: f
          });
          return g.shouldShow ? null != g.title && null == g.body && null == g.renderIcon ? (0, n.jsx)(c.u, {
            text: g.title,
            position: "top",
            asContainer: true,
            delay: L.rq,
            children: p
          }) : (0, n.jsx)(o.i, {
            title: g.title,
            body: null != (s = g.body) ? s : "",
            asset: null == (t = g.renderIcon) ? true : t.call(g, r),
            assetSize: L.EU,
            position: "top",
            asContainer: true,
            delay: L.rq,
            children: p
          }) : p
        })({
          item: t,
          source: s
        }, e)
      }, t.skuId)
    }), t && (0, n.jsx)(H, {
      lastItem: s,
      remainingCount: r,
      giftRecipient: l,
      onOpenWishlist: u
    })]
  })
}
let W = function(i) {
  let {
    giftRecipient: e,
    onWishlistItemClick: t
  } = i, {
    analyticsLocations: r
  } = (0, m.ZP)(u.Z.WISHLIST_BANNER), o = (0, f.ZP)(null == e ? true : e.id), {
    displayItems: c,
    hasMoreItems: h,
    totalWishlistItemCount: b,
    wishlistItemCountToBeDisplayed: j,
    fetchState: x,
    defaultWishlistId: w
  } = (0, C.ZP)({
    user: e,
    numItems: L.zL,
    location: "Wishlist Banner",
    source: L.bd.WISHLIST_BANNER
  }), S = s.useMemo(() => "loading" === x.status, [x.status]), _ = T.ZP.getName(e), {
    theme: y,
    primaryColor: E,
    secondaryColor: H
  } = (0, g.Z)({
    user: e,
    displayProfile: o
  }), {
    profileThemeStyle: W,
    profileThemeClassName: Z
  } = (0, p.Z)({
    theme: y,
    themeType: null,
    primaryColor: E,
    secondaryColor: H
  }), z = s.useCallback(() => {
    (0, I.openUserProfileModal)({
      userId: e.id,
      section: k.oh.WISHLIST
    })
  }, [e.id]), F = R[s.useMemo(() => j >= L.zL ? "FULL_WISHLIST" : j > 0 ? "MIXED" : c.length > 0 && c.every(i => {
    let {
      item: e,
      source: t
    } = i;
    return t === L.lr.POPULAR && (0, O.F)(e)
  }) ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" : "SHOP_ONLY", [j, c])], D = null == o ? true : o.getBannerURL({
    canAnimate: false,
    size: 713
  }), U = s.useMemo(() => h ? c.slice(0, L.zL - 1) : c, [c, h]), Y = (0, N.g)(U, e), X = h ? c[L.zL - 1] : null, K = b - L.zL + 1, [q, Q] = s.useState(false), J = s.useCallback(i => {
    if (i && !S && c.length > 0) {
      let i = c.map(i => {
        let {
          item: e
        } = i;
        return e.skuId
      });
      B.default.track(v.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: e.id,
        sku_ids: i,
        location_stack: r,
        product_lines: Array.from(new Set(c.map(i => {
          let {
            item: e
          } = i;
          return e.skuProductLine
        })))
      }), Q(true)
    }
  }, [S, c, e.id, r]), V = (0, l.O)(J, true, !S && !q);
  return "error" === x.status ? null : (0, n.jsxs)("div", {
    ref: V,
    className: a()(P.wishlistBanner, Z),
    style: W,
    children: [null != D && (0, n.jsx)("div", {
      className: P.backgroundImage,
      style: {
        backgroundImage: "url(".concat(D, ")")
      }
    }), (0, n.jsx)(d.f6W, {
      disableAdaptiveTheme: true,
      children: i => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(M, {
          title: F.title,
          subtitle: F.getSubtitle(_),
          themeClass: i
        }), (0, n.jsx)("div", {
          className: i,
          children: S || 0 === c.length ? (0, n.jsx)(A, {}) : (0, n.jsx)(G, {
            items: U,
            hasOverflow: h,
            overflowItem: X,
            overflowCount: K,
            showIcons: F.showIcons,
            giftRecipient: e,
            defaultWishlistId: w,
            onOpenWishlist: z,
            onWishlistItemClick: t,
            tooltipConfigs: Y,
            analyticsLocations: r
          })
        })]
      })
    })]
  })
}