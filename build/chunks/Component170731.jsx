/** Chunk was on 76334 **/
/** chunk id: 170731, original params: e,i,t (module,exports,require) **/
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
let Z = {
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

function E(e) {
  let {
    title: i,
    subtitle: t,
    themeClass: r
  } = e;
  return (0, n.jsx)("div", {
    className: l()(M.wishlistBannerHeader, r),
    children: (0, n.jsxs)("div", {
      className: M.wishlistBannerTitleContainer,
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

function H() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.nn4, {
      children: Chunk388032.intl.string(Chunk388032.t.pfChQr)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk694781.wishlistBannerGrid,
      children: Array.from({
        length: Chunk602733.zL
      }, (e, i) => (0, n.jsx)(S.Z, {
        cardSize: j.U.SMALL
      }, "placeholder-".concat(i)))
    })]
  })
}

function R(e) {
  let {
    lastItem: i,
    remainingCount: t,
    giftRecipient: r,
    onOpenWishlist: a
  } = e;
  return null == i ? null : (0, n.jsx)("li", {
    className: M.wishlistBannerListItem,
    children: (0, n.jsx)(b.BO, {
      item: i.item,
      remainingCount: t,
      onClick: a,
      cardSize: j.U.SMALL,
      renderItemPreview: e => {
        if ((0, L.Q)(i.item)) {
          if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
            let t = {
              items: i.item.bundleItems
            };
            return (0, n.jsx)("div", {
              className: M.bundlePreviewBanner,
              children: (0, n.jsx)(m.U, {
                product: t,
                isPurchased: false,
                isHighlighted: e,
                user: r
              })
            })
          }
          return (0, n.jsx)(v.Z, {
            item: i.item,
            profileOwner: r,
            isHighlighted: e,
            cardSize: j.U.SMALL
          })
        }
        return null
      }
    })
  }, "overflow-".concat(i.item.skuId))
}

function W(e) {
  let {
    items: i,
    hasOverflow: t,
    overflowItem: r,
    overflowCount: a,
    showIcons: l,
    giftRecipient: s,
    defaultWishlistId: d,
    onOpenWishlist: u,
    onWishlistItemClick: m,
    tooltipConfigs: h
  } = e;
  return (0, n.jsxs)("ul", {
    className: M.wishlistBannerGrid,
    children: [i.map((e, i) => {
      let {
        item: t,
        source: r
      } = e;
      return (0, n.jsx)("li", {
        className: M.wishlistBannerListItem,
        children: ((e, i) => {
          var t, r;
          let {
            item: a,
            source: u
          } = e, _ = h[i], p = (0, n.jsx)(x.Z, {
            item: a,
            profileOwner: s,
            wishlistId: d,
            isOwner: false,
            cardSize: j.U.SMALL,
            showOverlayButton: false,
            giftingOrigin: P.Wt.DM_CHANNEL_WISHLIST,
            source: u,
            showIcons: l,
            onWishlistItemClick: m
          });
          return _.shouldShow ? null != _.title && null == _.body && null == _.renderIcon ? (0, n.jsx)(c.u, {
            text: _.title,
            position: "top",
            asContainer: true,
            delay: C.rq,
            children: p
          }) : (0, n.jsx)(o.i, {
            title: _.title,
            body: null != (r = _.body) ? r : "",
            asset: null == (t = _.renderIcon) ? true : t.call(_, a),
            assetSize: C.EU,
            position: "top",
            asContainer: true,
            delay: C.rq,
            children: p
          }) : p
        })({
          item: t,
          source: r
        }, i)
      }, t.skuId)
    }), t && (0, n.jsx)(R, {
      lastItem: r,
      remainingCount: a,
      giftRecipient: s,
      onOpenWishlist: u
    })]
  })
}
let A = function(e) {
  let {
    giftRecipient: i,
    onWishlistItemClick: t
  } = e, {
    analyticsLocations: a
  } = (0, u.ZP)(), o = (0, f.ZP)(null == i ? true : i.id), {
    defaultWishlistId: c,
    wishlist: m,
    popularCollectiblesProducts: b,
    isFetchingWishlist: v,
    isValidatingPopularProducts: x,
    isFetchingPopularProducts: j,
    wishlistError: S
  } = (0, C.ZL)(i), {
    wishlistItems: L
  } = (0, p.Z)({
    guildId: (0, h.ac)(),
    numWishlistItems: C.zL
  }), P = (0, _.Z)({
    location: "Wishlist Banner",
    wishlist: m
  }), N = r.useMemo(() => P ? L : [], [P, L]), {
    displayItems: R,
    hasMoreItems: A,
    totalWishlistItemCount: G,
    wishlistItemCountToBeDisplayed: z
  } = (0, C.UD)({
    wishlist: m,
    popularCollectiblesProducts: b,
    popularSocialLayerStorefrontItems: N,
    wishlistError: S
  }), D = y.ZP.getName(i), {
    theme: U,
    primaryColor: F,
    secondaryColor: Y
  } = (0, g.Z)({
    user: i,
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
      userId: i.id,
      section: T.oh.WISHLIST
    })
  }, [i.id]), Q = Z[r.useMemo(() => z >= C.zL ? "FULL_WISHLIST" : z > 0 ? "MIXED" : "SHOP_ONLY", [z])], J = null == o ? true : o.getBannerURL({
    canAnimate: false,
    size: 713
  }), V = v || x || j, $ = r.useMemo(() => A ? R.slice(0, C.zL - 1) : R, [R, A]), ee = (0, k.g)($, i), ei = A ? R[C.zL - 1] : null, et = G - C.zL + 1, [en, er] = r.useState(false), ea = r.useCallback(e => {
    if (e && !V && R.length > 0) {
      let e = R.map(e => {
        let {
          item: i
        } = e;
        return i.skuId
      });
      B.default.track(O.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: i.id,
        sku_ids: e,
        location_stack: a,
        product_lines: Array.from(new Set(R.map(e => {
          let {
            item: i
          } = e;
          return i.skuProductLine
        })))
      }), er(true)
    }
  }, [V, R, i.id, a]), el = (0, s.O)(ea, true, !V && !en);
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
        children: [(0, n.jsx)(E, {
          title: Q.title,
          subtitle: Q.getSubtitle(D),
          themeClass: e
        }), (0, n.jsx)("div", {
          className: e,
          children: V || 0 === R.length ? (0, n.jsx)(H, {}) : (0, n.jsx)(W, {
            items: $,
            hasOverflow: A,
            overflowItem: ei,
            overflowCount: et,
            showIcons: Q.showIcons,
            giftRecipient: i,
            defaultWishlistId: c,
            onOpenWishlist: q,
            onWishlistItemClick: t,
            tooltipConfigs: ee
          })
        })]
      })
    })]
  })
}