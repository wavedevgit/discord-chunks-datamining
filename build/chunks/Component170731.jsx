/** Chunk was on 51275 **/
/** chunk id: 170731, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
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
  Chunk51144 = require("./51144.js"),
  Chunk474936 = require("./474936.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk967362 = require("./967362.js");
let b = {
  FULL_WISHLIST: {
    title: Chunk388032.intl.string(Chunk388032.t["7lZ31J"]),
    getSubtitle: e => v.intl.formatToPlainString(v.t.BjEX38, {
      username: e
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => v.intl.formatToPlainString(v.t.dIDKgi, {
      username: e
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => v.intl.formatToPlainString(v.t.wyMp1j, {
      username: e
    }),
    showIcons: false
  }
};

function P(e) {
  let {
    title: i,
    subtitle: t,
    themeClass: r
  } = e;
  return (0, n.jsx)("div", {
    className: a()(C.wishlistBannerHeader, r),
    children: (0, n.jsxs)("div", {
      className: C.wishlistBannerTitleContainer,
      children: [(0, n.jsx)(l.Heading, {
        variant: "display-md",
        className: C.wishlistBannerTitle,
        children: i
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/medium",
        children: t
      })]
    })
  })
}

function N() {
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.nn4, {
      children: Chunk388032.intl.string(Chunk388032.t.pfChQr)
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk967362.wishlistBannerGrid,
      children: Array.from({
        length: Chunk602733.zL
      }, (e, i) => (0, n.jsx)(p.Z, {
        surface: f.Y.GIFTING_FLOW
      }, "placeholder-".concat(i)))
    })]
  })
}

function L(e) {
  let {
    lastItem: i,
    remainingCount: t,
    giftRecipient: r,
    onOpenWishlist: s
  } = e;
  return null == i ? null : (0, n.jsx)("li", {
    className: C.wishlistBannerListItem,
    children: (0, n.jsx)(m.BO, {
      item: i.item,
      remainingCount: t,
      onClick: s,
      size: "sm",
      renderItemPreview: e => (0, g.Q)(i.item) ? (0, n.jsx)(h.Z, {
        item: i.item,
        profileOwner: r,
        isHighlighted: e,
        surface: f.Y.GIFTING_FLOW
      }) : null
    })
  }, "overflow-".concat(i.item.skuId))
}

function T(e) {
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
    className: C.wishlistBannerGrid,
    children: [i.map(e => {
      let {
        item: i,
        source: t
      } = e;
      return (0, n.jsx)("li", {
        className: C.wishlistBannerListItem,
        children: (0, n.jsx)(_.Z, {
          item: i,
          profileOwner: l,
          wishlistId: o,
          isOwner: false,
          surface: f.Y.GIFTING_FLOW,
          giftingOrigin: x.Wt.DM_CHANNEL_WISHLIST,
          source: t,
          showIcons: a,
          onWishlistItemClick: d
        })
      }, i.skuId)
    }), t && (0, n.jsx)(L, {
      lastItem: r,
      remainingCount: s,
      giftRecipient: l,
      onOpenWishlist: c
    })]
  })
}
let S = function(e) {
  let {
    giftRecipient: i,
    onWishlistItemClick: t
  } = e, s = (0, o.ZP)(null == i ? true : i.id), {
    defaultWishlistId: m,
    wishlist: h,
    popularCollectiblesProducts: _,
    isFetchingWishlist: f,
    isValidatingPopularProducts: p,
    isFetchingPopularProducts: g,
    wishlistError: x
  } = (0, I.ZL)(i), {
    displayItems: v,
    hasMoreItems: L,
    totalWishlistItemCount: S,
    wishlistItemCountToBeDisplayed: k
  } = (0, I.UD)({
    wishlist: h,
    popularCollectiblesProducts: _,
    wishlistError: x
  }), {
    theme: B,
    primaryColor: O,
    secondaryColor: E
  } = (0, c.Z)({
    user: i,
    displayProfile: s
  }), {
    profileThemeStyle: R,
    profileThemeClassName: H
  } = (0, d.Z)({
    theme: B,
    themeType: null,
    primaryColor: O,
    secondaryColor: E
  }), y = r.useCallback(() => {
    (0, u.openUserProfileModal)({
      userId: i.id,
      section: j.oh.WISHLIST
    })
  }, [i.id]), G = b[r.useMemo(() => k >= I.zL ? "FULL_WISHLIST" : k > 0 ? "MIXED" : "SHOP_ONLY", [k])], M = w.ZP.getName(i), F = null == s ? true : s.getBannerURL({
    canAnimate: false,
    size: 713
  }), W = f || p || g, Z = L ? v.slice(0, I.zL - 1) : v, A = L ? v[I.zL - 1] : null, D = S - I.zL + 1;
  return null != x ? null : (0, n.jsxs)("div", {
    className: a()(C.wishlistBanner, H),
    style: R,
    children: [null != F && (0, n.jsx)("div", {
      className: C.backgroundImage,
      style: {
        backgroundImage: "url(".concat(F, ")")
      }
    }), (0, n.jsx)(l.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(P, {
          title: G.title,
          subtitle: G.getSubtitle(M),
          themeClass: e
        }), (0, n.jsx)("div", {
          className: e,
          children: W || 0 === v.length ? (0, n.jsx)(N, {}) : (0, n.jsx)(T, {
            items: Z,
            hasOverflow: L,
            overflowItem: A,
            overflowCount: D,
            showIcons: G.showIcons,
            giftRecipient: i,
            defaultWishlistId: m,
            onOpenWishlist: y,
            onWishlistItemClick: t
          })
        })]
      })
    })]
  })
}