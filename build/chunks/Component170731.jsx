/** Chunk was on 76334 **/
/** chunk id: 170731, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk454399 = require("./454399.jsx"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk376521 = require("./376521.js"),
  Chunk602733 = require("./602733.js"),
  Chunk541699 = require("./541699.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
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

function N(e) {
  let {
    title: i,
    subtitle: t,
    themeClass: r
  } = e;
  return (0, n.jsx)("div", {
    className: s()(O.wishlistBannerHeader, r),
    children: (0, n.jsxs)("div", {
      className: O.wishlistBannerTitleContainer,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-lg/bold",
        children: i
      }), (0, n.jsx)(d.Text, {
        variant: "text-sm/medium",
        children: t
      })]
    })
  })
}

function M() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.nn4, {
      children: Chunk388032.intl.string(Chunk388032.t.pfChQr)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk694781.wishlistBannerGrid,
      children: Array.from({
        length: Chunk602733.zL
      }, (e, i) => (0, n.jsx)(w.Z, {
        cardSize: b.U.SMALL
      }, "placeholder-".concat(i)))
    })]
  })
}

function T(e) {
  let {
    lastItem: i,
    remainingCount: t,
    giftRecipient: r,
    onOpenWishlist: a
  } = e;
  return null == i ? null : (0, n.jsx)("li", {
    className: O.wishlistBannerListItem,
    children: (0, n.jsx)(f.BO, {
      item: i.item,
      remainingCount: t,
      onClick: a,
      cardSize: b.U.SMALL,
      renderItemPreview: e => (0, j.Q)(i.item) ? (0, n.jsx)(g.Z, {
        item: i.item,
        profileOwner: r,
        isHighlighted: e,
        cardSize: b.U.SMALL
      }) : null
    })
  }, "overflow-".concat(i.item.skuId))
}

function R(e) {
  let {
    items: i,
    hasOverflow: t,
    overflowItem: r,
    overflowCount: a,
    showIcons: s,
    giftRecipient: l,
    defaultWishlistId: d,
    onOpenWishlist: u,
    onWishlistItemClick: m,
    tooltipConfigs: h
  } = e;
  return (0, n.jsxs)("ul", {
    className: O.wishlistBannerGrid,
    children: [i.map((e, i) => {
      let {
        item: t,
        source: r
      } = e;
      return (0, n.jsx)("li", {
        className: O.wishlistBannerListItem,
        children: ((e, i) => {
          var t;
          let {
            item: r,
            source: a
          } = e, u = h[i], _ = (0, n.jsx)(I.Z, {
            item: r,
            profileOwner: l,
            wishlistId: d,
            isOwner: false,
            cardSize: b.U.SMALL,
            showOverlayButton: false,
            giftingOrigin: B.Wt.DM_CHANNEL_WISHLIST,
            source: a,
            showIcons: s,
            onWishlistItemClick: m
          });
          return u.shouldShow ? null != u.title && null == u.body && null == u.icon ? (0, n.jsx)(c.u, {
            text: u.title,
            position: "top",
            asContainer: true,
            delay: x.rq,
            children: _
          }) : (0, n.jsx)(o.i, {
            title: u.title,
            body: null != (t = u.body) ? t : "",
            asset: u.icon,
            assetSize: 24,
            position: "top",
            asContainer: true,
            delay: x.rq,
            children: _
          }) : _
        })({
          item: t,
          source: r
        }, i)
      }, t.skuId)
    }), t && (0, n.jsx)(T, {
      lastItem: r,
      remainingCount: a,
      giftRecipient: l,
      onOpenWishlist: u
    })]
  })
}
let H = function(e) {
  let {
    giftRecipient: i,
    onWishlistItemClick: t
  } = e, {
    analyticsLocations: a
  } = (0, u.ZP)(), o = (0, m.ZP)(null == i ? true : i.id), {
    defaultWishlistId: c,
    wishlist: f,
    popularCollectiblesProducts: g,
    isFetchingWishlist: I,
    isValidatingPopularProducts: b,
    isFetchingPopularProducts: w,
    wishlistError: j
  } = (0, x.ZL)(i), {
    displayItems: B,
    hasMoreItems: L,
    totalWishlistItemCount: T,
    wishlistItemCountToBeDisplayed: H
  } = (0, x.UD)({
    wishlist: f,
    popularCollectiblesProducts: g,
    wishlistError: j
  }), G = S.ZP.getName(i), {
    theme: E,
    primaryColor: A,
    secondaryColor: W
  } = (0, h.Z)({
    user: i,
    displayProfile: o
  }), {
    profileThemeStyle: Z,
    profileThemeClassName: z
  } = (0, _.Z)({
    theme: E,
    themeType: null,
    primaryColor: A,
    secondaryColor: W
  }), D = r.useCallback(() => {
    (0, p.openUserProfileModal)({
      userId: i.id,
      section: P.oh.WISHLIST
    })
  }, [i.id]), U = y[r.useMemo(() => H >= x.zL ? "FULL_WISHLIST" : H > 0 ? "MIXED" : "SHOP_ONLY", [H])], F = null == o ? true : o.getBannerURL({
    canAnimate: false,
    size: 713
  }), Y = I || b || w, X = L ? B.slice(0, x.zL - 1) : B, q = r.useMemo(() => {
    let e = X.map(e => {
      let {
        item: i,
        source: t
      } = e;
      return {
        productLine: i.skuProductLine,
        source: t
      }
    });
    return (0, C.z)(e, G)
  }, [X, G]), K = L ? B[x.zL - 1] : null, Q = T - x.zL + 1, [J, V] = r.useState(false), $ = r.useCallback(e => {
    if (e && !Y && B.length > 0) {
      let e = B.map(e => {
        let {
          item: i
        } = e;
        return i.skuId
      });
      v.default.track(k.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: i.id,
        sku_ids: e,
        location_stack: a,
        product_lines: Array.from(new Set(B.map(e => {
          let {
            item: i
          } = e;
          return i.skuProductLine
        })))
      }), V(true)
    }
  }, [Y, B, i.id, a]), ee = (0, l.O)($, true, !Y && !J);
  return null != j ? null : (0, n.jsxs)("div", {
    ref: ee,
    className: s()(O.wishlistBanner, z),
    style: Z,
    children: [null != F && (0, n.jsx)("div", {
      className: O.backgroundImage,
      style: {
        backgroundImage: "url(".concat(F, ")")
      }
    }), (0, n.jsx)(d.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(N, {
          title: U.title,
          subtitle: U.getSubtitle(G),
          themeClass: e
        }), (0, n.jsx)("div", {
          className: e,
          children: Y || 0 === B.length ? (0, n.jsx)(M, {}) : (0, n.jsx)(R, {
            items: X,
            hasOverflow: L,
            overflowItem: K,
            overflowCount: Q,
            showIcons: U.showIcons,
            giftRecipient: i,
            defaultWishlistId: c,
            onOpenWishlist: D,
            onWishlistItemClick: t,
            tooltipConfigs: q
          })
        })]
      })
    })]
  })
}