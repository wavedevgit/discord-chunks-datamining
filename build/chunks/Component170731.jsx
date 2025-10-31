/** Chunk was on 84743 **/
/** chunk id: 170731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
    className: l()(v.wishlistBannerHeader, i),
    children: (0, r.jsxs)("div", {
      className: v.wishlistBannerTitleContainer,
      children: [(0, r.jsx)(o.Heading, {
        variant: "display-md",
        className: v.wishlistBannerTitle,
        children: t
      }), (0, r.jsx)(o.Text, {
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
      }, (e, t) => (0, r.jsx)(m.Z, {
        surface: h.Y.GIFTING_FLOW
      }, "placeholder-".concat(t)))
    })]
  })
}

function w(e) {
  let {
    lastItem: t,
    remainingCount: n,
    giftRecipient: i,
    onOpenWishlist: a
  } = e;
  return null == t ? null : (0, r.jsx)("li", {
    className: v.wishlistBannerListItem,
    children: (0, r.jsx)(u.BO, {
      item: t.item,
      remainingCount: n,
      onClick: a,
      size: "sm",
      renderItemPreview: e => (0, x.Q)(t.item) ? (0, r.jsx)(p.Z, {
        item: t.item,
        profileOwner: i,
        isHighlighted: e,
        surface: h.Y.GIFTING_FLOW
      }) : null
    })
  }, "overflow-".concat(t.item.skuId))
}

function O(e) {
  let {
    items: t,
    hasOverflow: n,
    overflowItem: i,
    overflowCount: a,
    showIcons: l,
    giftRecipient: o,
    defaultWishlistId: s,
    onOpenWishlist: d
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
        children: (0, r.jsx)(_.Z, {
          item: t,
          profileOwner: o,
          wishlistId: s,
          isOwner: false,
          surface: h.Y.GIFTING_FLOW,
          giftingOrigin: b.Wt.DM_CHANNEL_WISHLIST,
          source: n,
          showIcons: l
        })
      }, t.skuId)
    }), n && (0, r.jsx)(w, {
      lastItem: i,
      remainingCount: a,
      giftRecipient: o,
      onOpenWishlist: d
    })]
  })
}
let P = function(e) {
  let {
    giftRecipient: t
  } = e, n = (0, s.ZP)(null == t ? true : t.id), {
    defaultWishlistId: a,
    wishlist: u,
    popularCollectiblesProducts: p,
    isFetchingWishlist: _,
    isFetchingShopHome: h,
    isFetchingCategories: m,
    isValidatingPopularProducts: x,
    wishlistError: b,
    fetchShopHomeError: L
  } = (0, f.ZL)(t), {
    displayItems: w,
    hasMoreItems: P,
    totalWishlistItemCount: E,
    wishlistItemCountToBeDisplayed: T
  } = (0, f.UD)({
    wishlist: u,
    popularCollectiblesProducts: p,
    wishlistError: b,
    fetchShopHomeError: L
  }), {
    theme: k,
    primaryColor: M,
    secondaryColor: A
  } = (0, d.Z)({
    user: t,
    displayProfile: n
  }), {
    profileThemeStyle: B,
    profileThemeClassName: Z
  } = (0, C.Z)({
    theme: k,
    themeType: null,
    primaryColor: M,
    secondaryColor: A
  }), N = i.useCallback(() => {
    (0, c.openUserProfileModal)({
      userId: t.id,
      section: j.oh.WISHLIST
    })
  }, [t.id]), R = y[i.useMemo(() => T >= f.zL ? "FULL_WISHLIST" : T > 0 ? "MIXED" : "SHOP_ONLY", [T])], F = g.ZP.getName(t), H = null == n ? true : n.getBannerURL({
    canAnimate: false,
    size: 713
  }), G = _ || h || m || x, U = P ? w.slice(0, f.zL - 1) : w, D = P ? w[f.zL - 1] : null, z = E - f.zL + 1;
  return null != b || null != L ? null : (0, r.jsxs)("div", {
    className: l()(v.wishlistBanner, Z),
    style: B,
    children: [null != H && (0, r.jsx)("div", {
      className: v.backgroundImage,
      style: {
        backgroundImage: "url(".concat(H, ")")
      }
    }), (0, r.jsx)(o.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(S, {
          title: R.title,
          subtitle: R.getSubtitle(F),
          themeClass: e
        }), (0, r.jsx)("div", {
          className: e,
          children: G || 0 === w.length ? (0, r.jsx)(I, {}) : (0, r.jsx)(O, {
            items: U,
            hasOverflow: P,
            overflowItem: D,
            overflowCount: z,
            showIcons: R.showIcons,
            giftRecipient: t,
            defaultWishlistId: a,
            onOpenWishlist: N
          })
        })]
      })
    })]
  })
}