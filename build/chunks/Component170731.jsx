/** Chunk was on 3270 **/
/** chunk id: 170731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
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
  Chunk694781 = require("./694781.js");
let y = {
  FULL_WISHLIST: {
    title: Chunk388032.intl.string(Chunk388032.t["7lZ31J"]),
    getSubtitle: e => L.intl.formatToPlainString(L.t.BjEX38, {
      username: e
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => L.intl.formatToPlainString(L.t.dIDKgi, {
      username: e
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => L.intl.formatToPlainString(L.t.wyMp1j, {
      username: e
    }),
    showIcons: false
  }
};

function S(e) {
  let {
    title: t,
    subtitle: n,
    themeClass: i
  } = e;
  return (0, r.jsx)("div", {
    className: a()(v.wishlistBannerHeader, i),
    children: (0, r.jsxs)("div", {
      className: v.wishlistBannerTitleContainer,
      children: [(0, r.jsx)(s.Heading, {
        variant: "display-md",
        className: v.wishlistBannerTitle,
        children: t
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        children: n
      })]
    })
  })
}

function I() {
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.nn4, {
      children: Chunk388032.intl.string(Chunk388032.t.pfChQr)
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk694781.wishlistBannerGrid,
      children: Array.from({
        length: Chunk602733.zL
      }, (e, t) => (0, r.jsx)(_.Z, {
        surface: m.Y.GIFTING_FLOW
      }, "placeholder-".concat(t)))
    })]
  })
}

function w(e) {
  let {
    lastItem: t,
    remainingCount: n,
    giftRecipient: i,
    onOpenWishlist: l
  } = e;
  return null == t ? null : (0, r.jsx)("li", {
    className: v.wishlistBannerListItem,
    children: (0, r.jsx)(u.BO, {
      item: t.item,
      remainingCount: n,
      onClick: l,
      size: "sm",
      renderItemPreview: e => (0, x.Q)(t.item) ? (0, r.jsx)(p.Z, {
        item: t.item,
        profileOwner: i,
        isHighlighted: e,
        surface: m.Y.GIFTING_FLOW
      }) : null
    })
  }, "overflow-".concat(t.item.skuId))
}

function O(e) {
  let {
    items: t,
    hasOverflow: n,
    overflowItem: i,
    overflowCount: l,
    showIcons: a,
    giftRecipient: s,
    defaultWishlistId: o,
    onOpenWishlist: d,
    onWishlistItemClick: c
  } = e;
  return (0, r.jsxs)("ul", {
    className: v.wishlistBannerGrid,
    children: [t.map(e => {
      let {
        item: t,
        source: n
      } = e;
      return (0, r.jsx)("li", {
        className: v.wishlistBannerListItem,
        children: (0, r.jsx)(h.Z, {
          item: t,
          profileOwner: s,
          wishlistId: o,
          isOwner: false,
          surface: m.Y.GIFTING_FLOW,
          giftingOrigin: g.Wt.DM_CHANNEL_WISHLIST,
          source: n,
          showIcons: a,
          onWishlistItemClick: c
        })
      }, t.skuId)
    }), n && (0, r.jsx)(w, {
      lastItem: i,
      remainingCount: l,
      giftRecipient: s,
      onOpenWishlist: d
    })]
  })
}
let P = function(e) {
  let {
    giftRecipient: t,
    onWishlistItemClick: n
  } = e, l = (0, o.ZP)(null == t ? true : t.id), {
    defaultWishlistId: u,
    wishlist: p,
    popularCollectiblesProducts: h,
    isFetchingWishlist: m,
    isValidatingPopularProducts: _,
    isFetchingPopularProducts: x,
    wishlistError: g
  } = (0, f.ZL)(t), {
    displayItems: L,
    hasMoreItems: w,
    totalWishlistItemCount: P,
    wishlistItemCountToBeDisplayed: E
  } = (0, f.UD)({
    wishlist: p,
    popularCollectiblesProducts: h,
    wishlistError: g
  }), {
    theme: k,
    primaryColor: M,
    secondaryColor: T
  } = (0, d.Z)({
    user: t,
    displayProfile: l
  }), {
    profileThemeStyle: A,
    profileThemeClassName: N
  } = (0, c.Z)({
    theme: k,
    themeType: null,
    primaryColor: M,
    secondaryColor: T
  }), Z = i.useCallback(() => {
    (0, C.openUserProfileModal)({
      userId: t.id,
      section: b.oh.WISHLIST
    })
  }, [t.id]), B = y[i.useMemo(() => E >= f.zL ? "FULL_WISHLIST" : E > 0 ? "MIXED" : "SHOP_ONLY", [E])], R = j.ZP.getName(t), H = null == l ? true : l.getBannerURL({
    canAnimate: false,
    size: 713
  }), U = m || _ || x, F = w ? L.slice(0, f.zL - 1) : L, G = w ? L[f.zL - 1] : null, D = P - f.zL + 1;
  return null != g ? null : (0, r.jsxs)("div", {
    className: a()(v.wishlistBanner, N),
    style: A,
    children: [null != H && (0, r.jsx)("div", {
      className: v.backgroundImage,
      style: {
        backgroundImage: "url(".concat(H, ")")
      }
    }), (0, r.jsx)(s.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(S, {
          title: B.title,
          subtitle: B.getSubtitle(R),
          themeClass: e
        }), (0, r.jsx)("div", {
          className: e,
          children: U || 0 === L.length ? (0, r.jsx)(I, {}) : (0, r.jsx)(O, {
            items: F,
            hasOverflow: w,
            overflowItem: G,
            overflowCount: D,
            showIcons: B.showIcons,
            giftRecipient: t,
            defaultWishlistId: u,
            onOpenWishlist: Z,
            onWishlistItemClick: n
          })
        })]
      })
    })]
  })
}