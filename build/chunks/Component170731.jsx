/** Chunk was on 76334 **/
/** chunk id: 170731, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => W
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
let T = {
  FULL_WISHLIST: {
    title: Chunk388032.intl.string(Chunk388032.t["7lZ31J"]),
    getSubtitle: e => y.intl.formatToPlainString(y.t.BjEX38, {
      username: e
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => y.intl.formatToPlainString(y.t.dIDKgi, {
      username: e
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk388032.intl.string(Chunk388032.t.SK5rmi),
    getSubtitle: e => y.intl.formatToPlainString(y.t.wyMp1j, {
      username: e
    }),
    showIcons: false
  }
};

function Z(e) {
  let {
    title: i,
    subtitle: t,
    themeClass: r
  } = e;
  return (0, n.jsx)("div", {
    className: l()(N.wishlistBannerHeader, r),
    children: (0, n.jsxs)("div", {
      className: N.wishlistBannerTitleContainer,
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

function R() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.nn4, {
      children: Chunk388032.intl.string(Chunk388032.t.pfChQr)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk694781.wishlistBannerGrid,
      children: Array.from({
        length: Chunk602733.zL
      }, (e, i) => (0, n.jsx)(j.Z, {
        cardSize: x.U.SMALL
      }, "placeholder-".concat(i)))
    })]
  })
}

function E(e) {
  let {
    lastItem: i,
    remainingCount: t,
    giftRecipient: r,
    onOpenWishlist: a
  } = e;
  return null == i ? null : (0, n.jsx)("li", {
    className: N.wishlistBannerListItem,
    children: (0, n.jsx)(b.BO, {
      item: i.item,
      remainingCount: t,
      onClick: a,
      cardSize: x.U.SMALL,
      renderItemPreview: e => (0, S.Q)(i.item) ? (0, n.jsx)(w.Z, {
        item: i.item,
        profileOwner: r,
        isHighlighted: e,
        cardSize: x.U.SMALL
      }) : null
    })
  }, "overflow-".concat(i.item.skuId))
}

function H(e) {
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
    className: N.wishlistBannerGrid,
    children: [i.map((e, i) => {
      let {
        item: t,
        source: r
      } = e;
      return (0, n.jsx)("li", {
        className: N.wishlistBannerListItem,
        children: ((e, i) => {
          var t, r;
          let {
            item: a,
            source: u
          } = e, _ = h[i], p = (0, n.jsx)(C.Z, {
            item: a,
            profileOwner: s,
            wishlistId: d,
            isOwner: false,
            cardSize: x.U.SMALL,
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
            delay: v.rq,
            children: p
          }) : (0, n.jsx)(o.i, {
            title: _.title,
            body: null != (r = _.body) ? r : "",
            asset: null == (t = _.renderIcon) ? true : t.call(_, a),
            assetSize: v.EU,
            position: "top",
            asContainer: true,
            delay: v.rq,
            children: p
          }) : p
        })({
          item: t,
          source: r
        }, i)
      }, t.skuId)
    }), t && (0, n.jsx)(E, {
      lastItem: r,
      remainingCount: a,
      giftRecipient: s,
      onOpenWishlist: u
    })]
  })
}
let W = function(e) {
  let {
    giftRecipient: i,
    onWishlistItemClick: t
  } = e, {
    analyticsLocations: a
  } = (0, u.ZP)(), o = (0, p.ZP)(null == i ? true : i.id), {
    defaultWishlistId: c,
    wishlist: b,
    popularCollectiblesProducts: w,
    isFetchingWishlist: C,
    isValidatingPopularProducts: x,
    isFetchingPopularProducts: j,
    wishlistError: S
  } = (0, v.ZL)(i), {
    wishlistItems: P
  } = (0, _.Z)({
    guildId: (0, m.ac)(),
    numWishlistItems: v.zL
  }), y = (0, h.Z)({
    location: "Wishlist Banner",
    wishlist: b
  }), E = r.useMemo(() => y ? P : [], [y, P]), {
    displayItems: W,
    hasMoreItems: G,
    totalWishlistItemCount: A,
    wishlistItemCountToBeDisplayed: z
  } = (0, v.UD)({
    wishlist: b,
    popularCollectiblesProducts: w,
    popularSocialLayerStorefrontItems: E,
    wishlistError: S
  }), D = L.ZP.getName(i), {
    theme: U,
    primaryColor: F,
    secondaryColor: Y
  } = (0, f.Z)({
    user: i,
    displayProfile: o
  }), {
    profileThemeStyle: X,
    profileThemeClassName: q
  } = (0, g.Z)({
    theme: U,
    themeType: null,
    primaryColor: F,
    secondaryColor: Y
  }), K = r.useCallback(() => {
    (0, I.openUserProfileModal)({
      userId: i.id,
      section: M.oh.WISHLIST
    })
  }, [i.id]), Q = T[r.useMemo(() => z >= v.zL ? "FULL_WISHLIST" : z > 0 ? "MIXED" : "SHOP_ONLY", [z])], J = null == o ? true : o.getBannerURL({
    canAnimate: false,
    size: 713
  }), V = C || x || j, $ = r.useMemo(() => G ? W.slice(0, v.zL - 1) : W, [W, G]), ee = (0, k.g)($, i), ei = G ? W[v.zL - 1] : null, et = A - v.zL + 1, [en, er] = r.useState(false), ea = r.useCallback(e => {
    if (e && !V && W.length > 0) {
      let e = W.map(e => {
        let {
          item: i
        } = e;
        return i.skuId
      });
      B.default.track(O.rMx.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: i.id,
        sku_ids: e,
        location_stack: a,
        product_lines: Array.from(new Set(W.map(e => {
          let {
            item: i
          } = e;
          return i.skuProductLine
        })))
      }), er(true)
    }
  }, [V, W, i.id, a]), el = (0, s.O)(ea, true, !V && !en);
  return null != S ? null : (0, n.jsxs)("div", {
    ref: el,
    className: l()(N.wishlistBanner, q),
    style: X,
    children: [null != J && (0, n.jsx)("div", {
      className: N.backgroundImage,
      style: {
        backgroundImage: "url(".concat(J, ")")
      }
    }), (0, n.jsx)(d.f6W, {
      disableAdaptiveTheme: true,
      children: e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(Z, {
          title: Q.title,
          subtitle: Q.getSubtitle(D),
          themeClass: e
        }), (0, n.jsx)("div", {
          className: e,
          children: V || 0 === W.length ? (0, n.jsx)(R, {}) : (0, n.jsx)(H, {
            items: $,
            hasOverflow: G,
            overflowItem: ei,
            overflowCount: et,
            showIcons: Q.showIcons,
            giftRecipient: i,
            defaultWishlistId: c,
            onOpenWishlist: K,
            onWishlistItemClick: t,
            tooltipConfigs: ee
          })
        })]
      })
    })]
  })
}