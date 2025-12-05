/** Chunk was on 29356 **/
/** chunk id: 170731, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk454399 = require("./454399.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk684263 = require("./684263.jsx"),
  Chunk164670 = require("./164670.js"),
  Chunk917967 = require("./917967.js"),
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
let E = {
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

function Z(e) {
  let {
    title: t,
    subtitle: i,
    themeClass: r
  } = e;
  return (0, n.jsx)("div", {
    className: l()(M.wishlistBannerHeader, r),
    children: (0, n.jsxs)("div", {
      className: M.wishlistBannerTitleContainer,
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

function H() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.nn4, {
      children: Chunk388032.intl.string(Chunk388032.t.pfChQr)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk694781.wishlistBannerGrid,
      children: Array.from({
        length: Chunk602733.zL
      }, (e, t) => (0, n.jsx)(S.Z, {
        cardSize: j.U.SMALL
      }, "placeholder-".concat(t)))
    })]
  })
}

function R(e) {
  let {
    lastItem: t,
    remainingCount: i,
    giftRecipient: r,
    onOpenWishlist: a
  } = e;
  return null == t ? null : (0, n.jsx)("li", {
    className: M.wishlistBannerListItem,
    children: (0, n.jsx)(v.BO, {
      item: t.item,
      remainingCount: i,
      onClick: a,
      cardSize: j.U.SMALL,
      renderItemPreview: e => {
        if ((0, L.Q)(t.item)) {
          if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
            let i = {
              items: t.item.bundleItems
            };
            return (0, n.jsx)("div", {
              className: M.bundlePreviewBanner,
              children: (0, n.jsx)(m.U, {
                product: i,
                isPurchased: false,
                isHighlighted: e,
                user: r
              })
            })
          }
          return (0, n.jsx)(b.Z, {
            item: t.item,
            profileOwner: r,
            isHighlighted: e,
            cardSize: j.U.SMALL
          })
        }
        return null
      }
    })
  }, "overflow-".concat(t.item.skuId))
}

function W(e) {
  let {
    items: t,
    hasOverflow: i,
    overflowItem: r,
    overflowCount: a,
    showIcons: l,
    giftRecipient: s,
    defaultWishlistId: d,
    onOpenWishlist: u,
    onWishlistItemClick: m,
    tooltipConfigs: _
  } = e;
  return (0, n.jsxs)("ul", {
    className: M.wishlistBannerGrid,
    children: [t.map((e, t) => {
      let {
        item: i,
        source: r
      } = e;
      return (0, n.jsx)("li", {
        className: M.wishlistBannerListItem,
        children: ((e, t) => {
          var i, r;
          let {
            item: a,
            source: u
          } = e, h = _[t], p = (0, n.jsx)(x.Z, {
            item: a,
            profileOwner: s,
            wishlistId: d,
            isOwner: false,
            cardSize: j.U.SMALL,
            showOverlayButton: false,
            giftingOrigin: y.Wt.DM_CHANNEL_WISHLIST,
            source: u,
            showIcons: l,
            onWishlistItemClick: m
          });
          return h.shouldShow ? null != h.title && null == h.body && null == h.renderIcon ? (0, n.jsx)(c.u, {
            text: h.title,
            position: "top",
            asContainer: true,
            delay: C.rq,
            children: p
          }) : (0, n.jsx)(o.i, {
            title: h.title,
            body: null != (r = h.body) ? r : "",
            asset: null == (i = h.renderIcon) ? true : i.call(h, a),
            assetSize: C.EU,
            position: "top",
            asContainer: true,
            delay: C.rq,
            children: p
          }) : p
        })({
          item: i,
          source: r
        }, t)
      }, i.skuId)
    }), i && (0, n.jsx)(R, {
      lastItem: r,
      remainingCount: a,
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
    analyticsLocations: a
  } = (0, u.ZP)(), o = (0, f.ZP)(null == t ? true : t.id), {
    defaultWishlistId: c,
    wishlist: m,
    popularCollectiblesProducts: v,
    isFetchingWishlist: b,
    isValidatingPopularProducts: x,
    isFetchingPopularProducts: j,
    wishlistError: S
  } = (0, C.ZL)(t), {
    wishlistItems: L
  } = (0, p.Z)({
    guildId: (0, _.ac)(),
    numWishlistItems: C.zL
  }), y = (0, h.Z)({
    location: "Wishlist Banner",
    wishlist: m
  }), N = r.useMemo(() => y ? L : [], [y, L]), {
    displayItems: R,
    hasMoreItems: A,
    totalWishlistItemCount: G,
    wishlistItemCountToBeDisplayed: D
  } = (0, C.UD)({
    wishlist: m,
    popularCollectiblesProducts: v,
    popularSocialLayerStorefrontItems: N,
    wishlistError: S
  }), z = P.ZP.getName(t), {
    theme: U,
    primaryColor: F,
    secondaryColor: Y
  } = (0, g.Z)({
    user: t,
    displayProfile: o
  }), {
    profileThemeStyle: X,
    profileThemeClassName: K
  } = (0, I.Z)({
    theme: U,
    themeType: null,
    primaryColor: F,
    secondaryColor: Y
  }), q = r.useCallback(() => {
    (0, w.openUserProfileModal)({
      userId: t.id,
      section: T.oh.WISHLIST
    })
  }, [t.id]), Q = E[r.useMemo(() => D >= C.zL ? "FULL_WISHLIST" : D > 0 ? "MIXED" : "SHOP_ONLY", [D])], J = null == o ? true : o.getBannerURL({
    canAnimate: false,
    size: 713
  }), V = b || x || j, $ = r.useMemo(() => A ? R.slice(0, C.zL - 1) : R, [R, A]), ee = (0, B.g)($, t), et = A ? R[C.zL - 1] : null, ei = G - C.zL + 1, [en, er] = r.useState(false), ea = r.useCallback(e => {
    if (e && !V && R.length > 0) {
      let e = R.map(e => {
        let {
          item: t
        } = e;
        return t.skuId
      });
      k.default.track(O.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: t.id,
        sku_ids: e,
        location_stack: a,
        product_lines: Array.from(new Set(R.map(e => {
          let {
            item: t
          } = e;
          return t.skuProductLine
        })))
      }), er(true)
    }
  }, [V, R, t.id, a]), el = (0, s.O)(ea, true, !V && !en);
  return null != S ? null : (0, n.jsxs)("div", {
    ref: el,
    className: l()(M.wishlistBanner, K),
    style: X,
    children: [null != J && (0, n.jsx)("div", {
      className: M.backgroundImage,
      style: {
        backgroundImage: "url(".concat(J, ")")
      }
    }), (0, n.jsx)(d.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(Z, {
          title: Q.title,
          subtitle: Q.getSubtitle(z),
          themeClass: e
        }), (0, n.jsx)("div", {
          className: e,
          children: V || 0 === R.length ? (0, n.jsx)(H, {}) : (0, n.jsx)(W, {
            items: $,
            hasOverflow: A,
            overflowItem: et,
            overflowCount: ei,
            showIcons: Q.showIcons,
            giftRecipient: t,
            defaultWishlistId: c,
            onOpenWishlist: q,
            onWishlistItemClick: i,
            tooltipConfigs: ee
          })
        })]
      })
    })]
  })
}