/** Chunk was on 76334 **/
/** chunk id: 170731, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk454399 = require("./454399.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk164670 = require("./164670.js"),
  Chunk81939 = require("./81939.js"),
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
  Chunk689201 = require("./689201.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk694781 = require("./694781.js");
let N = {
  FULL_WISHLIST: {
    title: Chunk388032.intl.string(Chunk388032.t["7lZ31J"]),
    getSubtitle: e => O.intl.formatToPlainString(O.t.BjEX38, {
      username: e
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => O.intl.formatToPlainString(O.t.dIDKgi, {
      username: e
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => O.intl.formatToPlainString(O.t.wyMp1j, {
      username: e
    }),
    showIcons: false
  }
};

function T(e) {
  let {
    title: t,
    subtitle: i,
    themeClass: r
  } = e;
  return (0, n.jsx)("div", {
    className: a()(y.wishlistBannerHeader, r),
    children: (0, n.jsxs)("div", {
      className: y.wishlistBannerTitleContainer,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-lg/bold",
        children: t
      }), (0, n.jsx)(d.Text, {
        variant: "text-sm/medium",
        children: i
      })]
    })
  })
}

function Z() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.nn4, {
      children: Chunk388032.intl.string(Chunk388032.t.pfChQr)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk694781.wishlistBannerGrid,
      children: Array.from({
        length: Chunk602733.zL
      }, (e, t) => (0, n.jsx)(C.Z, {
        cardSize: v.U.SMALL
      }, "placeholder-".concat(t)))
    })]
  })
}

function E(e) {
  let {
    lastItem: t,
    remainingCount: i,
    giftRecipient: r,
    onOpenWishlist: l
  } = e;
  return null == t ? null : (0, n.jsx)("li", {
    className: y.wishlistBannerListItem,
    children: (0, n.jsx)(I.BO, {
      item: t.item,
      remainingCount: i,
      onClick: l,
      cardSize: v.U.SMALL,
      renderItemPreview: e => (0, j.Q)(t.item) ? (0, n.jsx)(b.Z, {
        item: t.item,
        profileOwner: r,
        isHighlighted: e,
        cardSize: v.U.SMALL
      }) : null
    })
  }, "overflow-".concat(t.item.skuId))
}

function R(e) {
  let {
    items: t,
    hasOverflow: i,
    overflowItem: r,
    overflowCount: l,
    showIcons: a,
    giftRecipient: s,
    defaultWishlistId: d,
    onOpenWishlist: u,
    onWishlistItemClick: m,
    tooltipConfigs: h
  } = e;
  return (0, n.jsxs)("ul", {
    className: y.wishlistBannerGrid,
    children: [t.map((e, t) => {
      let {
        item: i,
        source: r
      } = e;
      return (0, n.jsx)("li", {
        className: y.wishlistBannerListItem,
        children: ((e, t) => {
          var i, r;
          let {
            item: l,
            source: u
          } = e, _ = h[t], f = (0, n.jsx)(w.Z, {
            item: l,
            profileOwner: s,
            wishlistId: d,
            isOwner: false,
            cardSize: v.U.SMALL,
            showOverlayButton: false,
            giftingOrigin: L.Wt.DM_CHANNEL_WISHLIST,
            source: u,
            showIcons: a,
            onWishlistItemClick: m
          });
          return _.shouldShow ? null != _.title && null == _.body && null == _.renderIcon ? (0, n.jsx)(c.u, {
            text: _.title,
            position: "top",
            asContainer: true,
            delay: x.rq,
            children: f
          }) : (0, n.jsx)(o.i, {
            title: _.title,
            body: null != (r = _.body) ? r : "",
            asset: null == (i = _.renderIcon) ? true : i.call(_, l),
            assetSize: x.EU,
            position: "top",
            asContainer: true,
            delay: x.rq,
            children: f
          }) : f
        })({
          item: i,
          source: r
        }, t)
      }, i.skuId)
    }), i && (0, n.jsx)(E, {
      lastItem: r,
      remainingCount: l,
      giftRecipient: s,
      onOpenWishlist: u
    })]
  })
}
let A = function(e) {
  let {
    giftRecipient: t,
    onWishlistItemClick: i
  } = e, {
    analyticsLocations: l
  } = (0, u.ZP)(), o = (0, _.ZP)(null == t ? true : t.id), {
    defaultWishlistId: c,
    wishlist: I,
    popularCollectiblesProducts: b,
    isFetchingWishlist: w,
    isValidatingPopularProducts: v,
    isFetchingPopularProducts: C,
    wishlistError: j
  } = (0, x.ZL)(t), {
    wishlistItems: L
  } = (0, h.Z)({
    guildId: (0, m.ac)(),
    numWishlistItems: x.zL
  }), {
    displayItems: O,
    hasMoreItems: E,
    totalWishlistItemCount: A,
    wishlistItemCountToBeDisplayed: H
  } = (0, x.UD)({
    wishlist: I,
    popularCollectiblesProducts: b,
    popularSocialLayerStorefrontItems: L,
    wishlistError: j
  }), G = B.ZP.getName(t), {
    theme: W,
    primaryColor: D,
    secondaryColor: z
  } = (0, f.Z)({
    user: t,
    displayProfile: o
  }), {
    profileThemeStyle: U,
    profileThemeClassName: F
  } = (0, p.Z)({
    theme: W,
    themeType: null,
    primaryColor: D,
    secondaryColor: z
  }), Y = r.useCallback(() => {
    (0, g.openUserProfileModal)({
      userId: t.id,
      section: M.oh.WISHLIST
    })
  }, [t.id]), X = N[r.useMemo(() => H >= x.zL ? "FULL_WISHLIST" : H > 0 ? "MIXED" : "SHOP_ONLY", [H])], q = null == o ? true : o.getBannerURL({
    canAnimate: false,
    size: 713
  }), K = w || v || C, Q = r.useMemo(() => E ? O.slice(0, x.zL - 1) : O, [O, E]), J = (0, S.g)(Q, t), V = E ? O[x.zL - 1] : null, $ = A - x.zL + 1, [ee, et] = r.useState(false), ei = r.useCallback(e => {
    if (e && !K && O.length > 0) {
      let e = O.map(e => {
        let {
          item: t
        } = e;
        return t.skuId
      });
      k.default.track(P.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: t.id,
        sku_ids: e,
        location_stack: l,
        product_lines: Array.from(new Set(O.map(e => {
          let {
            item: t
          } = e;
          return t.skuProductLine
        })))
      }), et(true)
    }
  }, [K, O, t.id, l]), en = (0, s.O)(ei, true, !K && !ee);
  return null != j ? null : (0, n.jsxs)("div", {
    ref: en,
    className: a()(y.wishlistBanner, F),
    style: U,
    children: [null != q && (0, n.jsx)("div", {
      className: y.backgroundImage,
      style: {
        backgroundImage: "url(".concat(q, ")")
      }
    }), (0, n.jsx)(d.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(T, {
          title: X.title,
          subtitle: X.getSubtitle(G),
          themeClass: e
        }), (0, n.jsx)("div", {
          className: e,
          children: K || 0 === O.length ? (0, n.jsx)(Z, {}) : (0, n.jsx)(R, {
            items: Q,
            hasOverflow: E,
            overflowItem: V,
            overflowCount: $,
            showIcons: X.showIcons,
            giftRecipient: t,
            defaultWishlistId: c,
            onOpenWishlist: Y,
            onWishlistItemClick: i,
            tooltipConfigs: J
          })
        })]
      })
    })]
  })
}