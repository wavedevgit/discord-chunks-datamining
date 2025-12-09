/** Chunk was on 76334 **/
/** chunk id: 170731, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => D
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
  Chunk684263 = require("./684263.jsx"),
  Chunk164670 = require("./164670.js"),
  Chunk765907 = require("./765907.js"),
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
  Chunk321947 = require("./321947.js"),
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
    getSubtitle: e => E.intl.formatToPlainString(E.t.BjEX38, {
      username: e
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => E.intl.formatToPlainString(E.t.dIDKgi, {
      username: e
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => E.intl.formatToPlainString(E.t.wyMp1j, {
      username: e
    }),
    showIcons: false
  },
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
    title: Chunk388032.intl.string(Chunk388032.t.BCi1gT),
    getSubtitle: e => E.intl.formatToPlainString(E.t.BjEX38, {
      username: e
    }),
    showIcons: false
  }
};

function A(e) {
  let {
    title: i,
    subtitle: t,
    themeClass: r
  } = e;
  return (0, n.jsx)("div", {
    className: a()(R.wishlistBannerHeader, r),
    children: (0, n.jsxs)("div", {
      className: R.wishlistBannerTitleContainer,
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
      }, (e, i) => (0, n.jsx)(C.Z, {
        cardSize: x.U.SMALL
      }, "placeholder-".concat(i)))
    })]
  })
}

function W(e) {
  let {
    lastItem: i,
    remainingCount: t,
    giftRecipient: r,
    onOpenWishlist: l
  } = e;
  return null == i ? null : (0, n.jsx)("li", {
    className: R.wishlistBannerListItem,
    children: (0, n.jsx)(S.BO, {
      item: i.item,
      remainingCount: t,
      onClick: l,
      cardSize: x.U.SMALL,
      renderItemPreview: e => {
        if ((0, O.Q)(i.item)) {
          if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
            let t = {
              items: i.item.bundleItems
            };
            return (0, n.jsx)("div", {
              className: R.bundlePreviewBanner,
              children: (0, n.jsx)(_.U, {
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
            cardSize: x.U.SMALL
          })
        }
        return null
      }
    })
  }, "overflow-".concat(i.item.skuId))
}

function G(e) {
  let {
    items: i,
    hasOverflow: t,
    overflowItem: r,
    overflowCount: l,
    showIcons: a,
    giftRecipient: s,
    defaultWishlistId: d,
    onOpenWishlist: u,
    onWishlistItemClick: m,
    tooltipConfigs: _,
    analyticsLocations: h
  } = e;
  return (0, n.jsxs)("ul", {
    className: R.wishlistBannerGrid,
    children: [i.map((e, i) => {
      let {
        item: t,
        source: r
      } = e;
      return (0, n.jsx)("li", {
        className: R.wishlistBannerListItem,
        children: ((e, i) => {
          var t, r;
          let {
            item: l,
            source: u
          } = e, p = _[i], f = (0, n.jsx)(j.Z, {
            item: l,
            profileOwner: s,
            wishlistId: d,
            isOwner: false,
            cardSize: x.U.SMALL,
            showOverlayButton: false,
            giftingOrigin: y.Wt.DM_CHANNEL_WISHLIST,
            source: u,
            showIcons: a,
            onWishlistItemClick: m,
            analyticsLocations: h
          });
          return p.shouldShow ? null != p.title && null == p.body && null == p.renderIcon ? (0, n.jsx)(c.u, {
            text: p.title,
            position: "top",
            asContainer: true,
            delay: L.rq,
            children: f
          }) : (0, n.jsx)(o.i, {
            title: p.title,
            body: null != (r = p.body) ? r : "",
            asset: null == (t = p.renderIcon) ? true : t.call(p, l),
            assetSize: L.EU,
            position: "top",
            asContainer: true,
            delay: L.rq,
            children: f
          }) : f
        })({
          item: t,
          source: r
        }, i)
      }, t.skuId)
    }), t && (0, n.jsx)(W, {
      lastItem: r,
      remainingCount: l,
      giftRecipient: s,
      onOpenWishlist: u
    })]
  })
}
let D = function(e) {
  let {
    giftRecipient: i,
    onWishlistItemClick: t
  } = e, {
    analyticsLocations: l
  } = (0, m.ZP)(u.Z.WISHLIST_BANNER), o = (0, g.ZP)(null == i ? true : i.id), {
    defaultWishlistId: c,
    wishlist: _,
    popularCollectiblesProducts: S,
    isFetchingWishlist: v,
    isValidatingPopularProducts: j,
    isFetchingPopularProducts: x,
    wishlistError: C
  } = (0, L.ZL)(i), {
    wishlistItems: O
  } = (0, f.Z)({
    guildId: (0, h.ac)(),
    numWishlistItems: L.zL
  }), {
    isDisplayProfileSocialLayerStorefrontEligible: y
  } = (0, p.Z)({
    displayProfile: o,
    location: "Wishlist Banner"
  }), E = r.useMemo(() => {
    var e;
    return (null != (e = null == _ ? true : _.items) ? e : []).filter(e => true !== e.isOwned && (0, B.F)(e)).length > 0 || y ? O : []
  }, [null == _ ? true : _.items, y, O]), {
    displayItems: W,
    hasMoreItems: D,
    totalWishlistItemCount: z,
    wishlistItemCountToBeDisplayed: F
  } = (0, L.UD)({
    wishlist: _,
    popularCollectiblesProducts: S,
    popularSocialLayerStorefrontItems: E,
    wishlistError: C
  }), U = T.ZP.getName(i), {
    theme: Y,
    primaryColor: X,
    secondaryColor: K
  } = (0, I.Z)({
    user: i,
    displayProfile: o
  }), {
    profileThemeStyle: q,
    profileThemeClassName: Q
  } = (0, w.Z)({
    theme: Y,
    themeType: null,
    primaryColor: X,
    secondaryColor: K
  }), J = r.useCallback(() => {
    (0, b.openUserProfileModal)({
      userId: i.id,
      section: M.oh.WISHLIST
    })
  }, [i.id]), V = Z[r.useMemo(() => F >= L.zL ? "FULL_WISHLIST" : F > 0 ? "MIXED" : E.length > 0 && y ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" : "SHOP_ONLY", [F, E.length, y])], $ = null == o ? true : o.getBannerURL({
    canAnimate: false,
    size: 713
  }), ee = v || j || x, ei = r.useMemo(() => D ? W.slice(0, L.zL - 1) : W, [W, D]), et = (0, k.g)(ei, i), en = D ? W[L.zL - 1] : null, er = z - L.zL + 1, [el, ea] = r.useState(false), es = r.useCallback(e => {
    if (e && !ee && W.length > 0) {
      let e = W.map(e => {
        let {
          item: i
        } = e;
        return i.skuId
      });
      N.default.track(P.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: i.id,
        sku_ids: e,
        location_stack: l,
        product_lines: Array.from(new Set(W.map(e => {
          let {
            item: i
          } = e;
          return i.skuProductLine
        })))
      }), ea(true)
    }
  }, [ee, W, i.id, l]), eo = (0, s.O)(es, true, !ee && !el);
  return null != C ? null : (0, n.jsxs)("div", {
    ref: eo,
    className: a()(R.wishlistBanner, Q),
    style: q,
    children: [null != $ && (0, n.jsx)("div", {
      className: R.backgroundImage,
      style: {
        backgroundImage: "url(".concat($, ")")
      }
    }), (0, n.jsx)(d.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(A, {
          title: V.title,
          subtitle: V.getSubtitle(U),
          themeClass: e
        }), (0, n.jsx)("div", {
          className: e,
          children: ee || 0 === W.length ? (0, n.jsx)(H, {}) : (0, n.jsx)(G, {
            items: ei,
            hasOverflow: D,
            overflowItem: en,
            overflowCount: er,
            showIcons: V.showIcons,
            giftRecipient: i,
            defaultWishlistId: c,
            onOpenWishlist: J,
            onWishlistItemClick: t,
            tooltipConfigs: et,
            analyticsLocations: l
          })
        })]
      })
    })]
  })
}