/** Chunk was on 51275 **/
/** chunk id: 170731, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
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
  Chunk541699 = require("./541699.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk967362 = require("./967362.js");
let y = {
  FULL_WISHLIST: {
    title: Chunk388032.intl.string(Chunk388032.t["7lZ31J"]),
    getSubtitle: e => C.intl.formatToPlainString(C.t.BjEX38, {
      username: e
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => C.intl.formatToPlainString(C.t.dIDKgi, {
      username: e
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => C.intl.formatToPlainString(C.t.wyMp1j, {
      username: e
    }),
    showIcons: false
  }
};

function k(e) {
  let {
    title: t,
    subtitle: i,
    themeClass: n
  } = e;
  return (0, r.jsx)("div", {
    className: l()(P.wishlistBannerHeader, n),
    children: (0, r.jsxs)("div", {
      className: P.wishlistBannerTitleContainer,
      children: [(0, r.jsx)(o.Heading, {
        variant: "display-md",
        className: P.wishlistBannerTitle,
        children: t
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        children: i
      })]
    })
  })
}

function L() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.nn4, {
      children: Chunk388032.intl.string(Chunk388032.t.pfChQr)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk967362.wishlistBannerGrid,
      children: Array.from({
        length: Chunk602733.zL
      }, (e, t) => (0, r.jsx)(_.Z, {
        cardSize: b.U.SMALL
      }, "placeholder-".concat(t)))
    })]
  })
}

function N(e) {
  let {
    lastItem: t,
    remainingCount: i,
    giftRecipient: n,
    onOpenWishlist: a
  } = e;
  return null == t ? null : (0, r.jsx)("li", {
    className: P.wishlistBannerListItem,
    children: (0, r.jsx)(h.BO, {
      item: t.item,
      remainingCount: i,
      onClick: a,
      cardSize: b.U.SMALL,
      renderItemPreview: e => (0, O.Q)(t.item) ? (0, r.jsx)(p.Z, {
        item: t.item,
        profileOwner: n,
        isHighlighted: e,
        cardSize: b.U.SMALL
      }) : null
    })
  }, "overflow-".concat(t.item.skuId))
}

function B(e) {
  let {
    items: t,
    hasOverflow: i,
    overflowItem: n,
    overflowCount: a,
    showIcons: l,
    giftRecipient: s,
    defaultWishlistId: o,
    onOpenWishlist: c,
    onWishlistItemClick: d
  } = e;
  return (0, r.jsxs)("ul", {
    className: P.wishlistBannerGrid,
    children: [t.map(e => {
      let {
        item: t,
        source: i
      } = e;
      return (0, r.jsx)("li", {
        className: P.wishlistBannerListItem,
        children: (0, r.jsx)(g.Z, {
          item: t,
          profileOwner: s,
          wishlistId: o,
          isOwner: false,
          cardSize: b.U.SMALL,
          showOverlayButton: false,
          giftingOrigin: v.Wt.DM_CHANNEL_WISHLIST,
          source: i,
          showIcons: l,
          onWishlistItemClick: d
        })
      }, t.skuId)
    }), i && (0, r.jsx)(N, {
      lastItem: n,
      remainingCount: a,
      giftRecipient: s,
      onOpenWishlist: c
    })]
  })
}
let T = function(e) {
  let {
    giftRecipient: t,
    onWishlistItemClick: i
  } = e, {
    analyticsLocations: a
  } = (0, c.ZP)(), h = (0, d.ZP)(null == t ? true : t.id), {
    defaultWishlistId: p,
    wishlist: g,
    popularCollectiblesProducts: b,
    isFetchingWishlist: _,
    isValidatingPopularProducts: O,
    isFetchingPopularProducts: v,
    wishlistError: C
  } = (0, I.ZL)(t), {
    displayItems: N,
    hasMoreItems: T,
    totalWishlistItemCount: E,
    wishlistItemCountToBeDisplayed: M
  } = (0, I.UD)({
    wishlist: g,
    popularCollectiblesProducts: b,
    wishlistError: C
  }), {
    theme: R,
    primaryColor: Z,
    secondaryColor: A
  } = (0, u.Z)({
    user: t,
    displayProfile: h
  }), {
    profileThemeStyle: H,
    profileThemeClassName: W
  } = (0, m.Z)({
    theme: R,
    themeType: null,
    primaryColor: Z,
    secondaryColor: A
  }), G = n.useCallback(() => {
    (0, f.openUserProfileModal)({
      userId: t.id,
      section: x.oh.WISHLIST
    })
  }, [t.id]), U = y[n.useMemo(() => M >= I.zL ? "FULL_WISHLIST" : M > 0 ? "MIXED" : "SHOP_ONLY", [M])], D = w.ZP.getName(t), z = null == h ? true : h.getBannerURL({
    canAnimate: false,
    size: 713
  }), F = _ || O || v, Y = T ? N.slice(0, I.zL - 1) : N, Q = T ? N[I.zL - 1] : null, q = E - I.zL + 1, [K, X] = n.useState(false), V = n.useCallback(e => {
    if (e && !F && N.length > 0) {
      let e = N.map(e => {
        let {
          item: t
        } = e;
        return t.skuId
      });
      j.default.track(S.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: t.id,
        sku_ids: e,
        location_stack: a
      }), X(true)
    }
  }, [F, N, t.id, a]), J = (0, s.O)(V, true, !F && !K);
  return null != C ? null : (0, r.jsxs)("div", {
    ref: J,
    className: l()(P.wishlistBanner, W),
    style: H,
    children: [null != z && (0, r.jsx)("div", {
      className: P.backgroundImage,
      style: {
        backgroundImage: "url(".concat(z, ")")
      }
    }), (0, r.jsx)(o.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(k, {
          title: U.title,
          subtitle: U.getSubtitle(D),
          themeClass: e
        }), (0, r.jsx)("div", {
          className: e,
          children: F || 0 === N.length ? (0, r.jsx)(L, {}) : (0, r.jsx)(B, {
            items: Y,
            hasOverflow: T,
            overflowItem: Q,
            overflowCount: q,
            showIcons: U.showIcons,
            giftRecipient: t,
            defaultWishlistId: p,
            onOpenWishlist: G,
            onWishlistItemClick: i
          })
        })]
      })
    })]
  })
}