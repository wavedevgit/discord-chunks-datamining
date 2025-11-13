/** Chunk was on 93582 **/
/** chunk id: 170731, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk694781 = require("./694781.js");
let k = {
  FULL_WISHLIST: {
    title: Chunk388032.intl.string(Chunk388032.t["7lZ31J"]),
    getSubtitle: e => N.intl.formatToPlainString(N.t.BjEX38, {
      username: e
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => N.intl.formatToPlainString(N.t.dIDKgi, {
      username: e
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => N.intl.formatToPlainString(N.t.wyMp1j, {
      username: e
    }),
    showIcons: false
  }
};

function T(e) {
  let {
    title: i,
    subtitle: t,
    themeClass: r
  } = e;
  return (0, n.jsx)("div", {
    className: a()(S.wishlistBannerHeader, r),
    children: (0, n.jsxs)("div", {
      className: S.wishlistBannerTitleContainer,
      children: [(0, n.jsx)(o.Heading, {
        variant: "display-md",
        className: S.wishlistBannerTitle,
        children: i
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        children: t
      })]
    })
  })
}

function L() {
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.nn4, {
      children: Chunk388032.intl.string(Chunk388032.t.pfChQr)
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk694781.wishlistBannerGrid,
      children: Array.from({
        length: Chunk602733.zL
      }, (e, i) => (0, n.jsx)(g.Z, {
        surface: I.Y.GIFTING_FLOW
      }, "placeholder-".concat(i)))
    })]
  })
}

function O(e) {
  let {
    lastItem: i,
    remainingCount: t,
    giftRecipient: r,
    onOpenWishlist: s
  } = e;
  return null == i ? null : (0, n.jsx)("li", {
    className: S.wishlistBannerListItem,
    children: (0, n.jsx)(_.BO, {
      item: i.item,
      remainingCount: t,
      onClick: s,
      size: "sm",
      renderItemPreview: e => (0, x.Q)(i.item) ? (0, n.jsx)(f.Z, {
        item: i.item,
        profileOwner: r,
        isHighlighted: e,
        surface: I.Y.GIFTING_FLOW
      }) : null
    })
  }, "overflow-".concat(i.item.skuId))
}

function B(e) {
  let {
    items: i,
    hasOverflow: t,
    overflowItem: r,
    overflowCount: s,
    showIcons: a,
    giftRecipient: l,
    defaultWishlistId: o,
    onOpenWishlist: c,
    onWishlistItemClick: d
  } = e;
  return (0, n.jsxs)("ul", {
    className: S.wishlistBannerGrid,
    children: [i.map(e => {
      let {
        item: i,
        source: t
      } = e;
      return (0, n.jsx)("li", {
        className: S.wishlistBannerListItem,
        children: (0, n.jsx)(p.Z, {
          item: i,
          profileOwner: l,
          wishlistId: o,
          isOwner: false,
          surface: I.Y.GIFTING_FLOW,
          giftingOrigin: C.Wt.DM_CHANNEL_WISHLIST,
          source: t,
          showIcons: a,
          onWishlistItemClick: d
        })
      }, i.skuId)
    }), t && (0, n.jsx)(O, {
      lastItem: r,
      remainingCount: s,
      giftRecipient: l,
      onOpenWishlist: c
    })]
  })
}
let E = function(e) {
  let {
    giftRecipient: i,
    onWishlistItemClick: t
  } = e, {
    analyticsLocations: s
  } = (0, c.ZP)(), _ = (0, d.ZP)(null == i ? true : i.id), {
    defaultWishlistId: f,
    wishlist: p,
    popularCollectiblesProducts: I,
    isFetchingWishlist: g,
    isValidatingPopularProducts: x,
    isFetchingPopularProducts: C,
    wishlistError: N
  } = (0, w.ZL)(i), {
    displayItems: O,
    hasMoreItems: E,
    totalWishlistItemCount: R,
    wishlistItemCountToBeDisplayed: H
  } = (0, w.UD)({
    wishlist: p,
    popularCollectiblesProducts: I,
    wishlistError: N
  }), {
    theme: y,
    primaryColor: G,
    secondaryColor: M
  } = (0, u.Z)({
    user: i,
    displayProfile: _
  }), {
    profileThemeStyle: W,
    profileThemeClassName: F
  } = (0, m.Z)({
    theme: y,
    themeType: null,
    primaryColor: G,
    secondaryColor: M
  }), Z = r.useCallback(() => {
    (0, h.openUserProfileModal)({
      userId: i.id,
      section: P.oh.WISHLIST
    })
  }, [i.id]), A = k[r.useMemo(() => H >= w.zL ? "FULL_WISHLIST" : H > 0 ? "MIXED" : "SHOP_ONLY", [H])], D = v.ZP.getName(i), z = null == _ ? true : _.getBannerURL({
    canAnimate: false,
    size: 713
  }), Y = g || x || C, U = E ? O.slice(0, w.zL - 1) : O, K = E ? O[w.zL - 1] : null, X = R - w.zL + 1, [q, V] = r.useState(false), Q = r.useCallback(e => {
    if (e && !Y && O.length > 0) {
      let e = O.map(e => {
        let {
          item: i
        } = e;
        return i.skuId
      });
      j.default.track(b.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: i.id,
        sku_ids: e,
        location_stack: s
      }), V(true)
    }
  }, [Y, O, i.id, s]), J = (0, l.O)(Q, true, !Y && !q);
  return null != N ? null : (0, n.jsxs)("div", {
    ref: J,
    className: a()(S.wishlistBanner, F),
    style: W,
    children: [null != z && (0, n.jsx)("div", {
      className: S.backgroundImage,
      style: {
        backgroundImage: "url(".concat(z, ")")
      }
    }), (0, n.jsx)(o.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(T, {
          title: A.title,
          subtitle: A.getSubtitle(D),
          themeClass: e
        }), (0, n.jsx)("div", {
          className: e,
          children: Y || 0 === O.length ? (0, n.jsx)(L, {}) : (0, n.jsx)(B, {
            items: U,
            hasOverflow: E,
            overflowItem: K,
            overflowCount: X,
            showIcons: A.showIcons,
            giftRecipient: i,
            defaultWishlistId: f,
            onOpenWishlist: Z,
            onWishlistItemClick: t
          })
        })]
      })
    })]
  })
}