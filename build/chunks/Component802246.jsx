/** Chunk was on 55926 **/
/** chunk id: 802246, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  A: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk172218 = require("./172218.js"),
  Chunk459192 = require("./459192.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk245068 = require("./245068.jsx"),
  Chunk950191 = require("./950191.js"),
  Chunk101928 = require("./101928.js"),
  Chunk195898 = require("./195898.js"),
  Chunk657331 = require("./657331.js"),
  Chunk804870 = require("./804870.jsx"),
  Chunk353157 = require("./353157.jsx"),
  Chunk18983 = require("./18983.jsx"),
  Chunk242640 = require("./242640.jsx"),
  Chunk834796 = require("./834796.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk996353 = require("./996353.js"),
  Chunk872472 = require("./872472.js"),
  Chunk721932 = require("./721932.js"),
  Chunk46537 = require("./46537.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk195416 = require("./195416.js");
let R = {
  FULL_WISHLIST: {
    title: Chunk985018.intl.string(Chunk985018.t["7lZ31J"]),
    getSubtitle: e => k.intl.formatToPlainString(k.t.BjEX38, {
      username: e
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk985018.intl.string(Chunk985018.t.SK5rmi),
    getSubtitle: e => k.intl.formatToPlainString(k.t.dIDKgi, {
      username: e
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk985018.intl.string(Chunk985018.t.SK5rmi),
    getSubtitle: e => k.intl.formatToPlainString(k.t.wyMp1j, {
      username: e
    }),
    showIcons: false
  },
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
    title: Chunk985018.intl.string(Chunk985018.t.BCi1gT),
    getSubtitle: e => k.intl.formatToPlainString(k.t.BjEX38, {
      username: e
    }),
    showIcons: false
  }
};

function H(e) {
  let {
    title: i,
    subtitle: t,
    themeClass: s
  } = e;
  return (0, n.jsx)("div", {
    className: r()(M.$R, s),
    children: (0, n.jsxs)("div", {
      className: M.hy,
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

function P() {
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(d.AC4, {
      children: k.intl.string(k.t.pfChQr)
    }), (0, n.jsx)("div", {
      className: M.Md,
      children: Array.from({
        length: _.pl
      }, (e, i) => (0, n.jsx)(A.A, {
        cardSize: N.Y.SMALL
      }, "placeholder-".concat(i)))
    })]
  })
}

function D(e) {
  let {
    lastItem: i,
    remainingCount: t,
    giftRecipient: s,
    onOpenWishlist: l
  } = e;
  return null == i ? null : (0, n.jsx)("li", {
    className: M.XI,
    children: (0, n.jsx)(j.uz, {
      item: i.item,
      remainingCount: t,
      onClick: l,
      cardSize: N.Y.SMALL,
      renderItemPreview: e => {
        if ((0, L.L)(i.item)) {
          if (null != i.item.bundleItems && i.item.bundleItems.length > 0) {
            let t = {
              items: i.item.bundleItems
            };
            return (0, n.jsx)("div", {
              className: M.Tz,
              children: (0, n.jsx)(p.X, {
                product: t,
                isHighlighted: e,
                user: s
              })
            })
          }
          return (0, n.jsx)(x.A, {
            item: i.item,
            profileOwner: s,
            isHighlighted: e,
            cardSize: N.Y.SMALL
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
    overflowItem: s,
    overflowCount: l,
    showIcons: r,
    giftRecipient: a,
    defaultWishlistId: d,
    onOpenWishlist: u,
    onWishlistItemClick: m,
    tooltipConfigs: p,
    analyticsLocations: h
  } = e;
  return (0, n.jsxs)("ul", {
    className: M.Md,
    children: [i.map((e, i) => {
      let {
        item: t,
        source: s
      } = e;
      return (0, n.jsx)("li", {
        className: M.XI,
        children: ((e, i) => {
          var t, s;
          let {
            item: l,
            source: u
          } = e, f = p[i], g = (0, n.jsx)(S.A, {
            item: l,
            profileOwner: a,
            wishlistId: d,
            isOwner: false,
            cardSize: N.Y.SMALL,
            showOverlayButton: false,
            giftingOrigin: v.vQ.DM_CHANNEL_WISHLIST,
            source: u,
            showIcons: r,
            onWishlistItemClick: m,
            analyticsLocations: h
          });
          return f.shouldShow ? null != f.title && null == f.body && null == f.renderIcon ? (0, n.jsx)(c.m, {
            text: f.title,
            position: "top",
            asContainer: true,
            delay: _.Zh,
            children: g
          }) : (0, n.jsx)(o.u, {
            title: f.title,
            body: null != (t = f.body) ? t : "",
            asset: null == (s = f.renderIcon) ? true : s.call(f, l),
            assetSize: _.Q8,
            position: "top",
            asContainer: true,
            delay: _.Zh,
            children: g
          }) : g
        })({
          item: t,
          source: s
        }, i)
      }, t.skuId)
    }), t && (0, n.jsx)(D, {
      lastItem: s,
      remainingCount: l,
      giftRecipient: a,
      onOpenWishlist: u
    })]
  })
}
let B = function(e) {
  let {
    giftRecipient: i,
    onWishlistItemClick: t
  } = e, {
    analyticsLocations: l
  } = (0, m.Ay)(u.A.WISHLIST_BANNER), o = (0, h.Ay)(null == i ? true : i.id), {
    displayItems: c,
    hasMoreItems: p,
    totalWishlistItemCount: j,
    wishlistItemCountToBeDisplayed: x,
    fetchState: S,
    defaultWishlistId: N
  } = (0, T.Ay)({
    user: i,
    numItems: _.pl,
    location: "Wishlist Banner",
    source: _.mQ.WISHLIST_BANNER
  }), A = s.useMemo(() => "loading" === S.status, [S.status]), L = y.Ay.getName(i), {
    theme: v,
    primaryColor: k,
    secondaryColor: D
  } = (0, f.A)({
    user: i,
    displayProfile: o
  }), {
    profileThemeStyle: B,
    profileThemeClassName: W
  } = (0, g.A)({
    theme: v,
    themeType: null,
    primaryColor: k,
    secondaryColor: D
  }), Y = s.useCallback(() => {
    (0, I.openUserProfileModal)({
      userId: i.id,
      tabSection: E.RP.WISHLIST
    })
  }, [i.id]), z = R[s.useMemo(() => x >= _.pl ? "FULL_WISHLIST" : x > 0 ? "MIXED" : c.length > 0 && c.every(e => {
    let {
      item: i,
      source: t
    } = e;
    return t === _.uS.POPULAR && (0, O.$)(i)
  }) ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" : "SHOP_ONLY", [x, c])], U = null == o ? true : o.getBannerURL({
    canAnimate: false,
    size: 713
  }), F = s.useMemo(() => p ? c.slice(0, _.pl - 1) : c, [c, p]), X = (0, C.b)(F, i), Q = p ? c[_.pl - 1] : null, J = j - _.pl + 1, [K, Z] = s.useState(false), $ = s.useCallback(e => {
    if (e && !A && c.length > 0) {
      let e = c.map(e => {
        let {
          item: i
        } = e;
        return i.skuId
      });
      b.default.track(w.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: i.id,
        sku_ids: e,
        location_stack: l,
        product_lines: Array.from(new Set(c.map(e => {
          let {
            item: i
          } = e;
          return i.skuProductLine
        })))
      }), Z(true)
    }
  }, [A, c, i.id, l]), V = (0, a.K)($, true, !A && !K);
  return "error" === S.status ? null : (0, n.jsxs)("div", {
    ref: V,
    className: r()(M.A1, W),
    style: B,
    children: [null != U && (0, n.jsx)("div", {
      className: M.iL,
      style: {
        backgroundImage: "url(".concat(U, ")")
      }
    }), (0, n.jsx)(d.NPJ, {
      disableAdaptiveTheme: true,
      children: e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(H, {
          title: z.title,
          subtitle: z.getSubtitle(L),
          themeClass: e
        }), (0, n.jsx)("div", {
          className: e,
          children: A || 0 === c.length ? (0, n.jsx)(P, {}) : (0, n.jsx)(G, {
            items: F,
            hasOverflow: p,
            overflowItem: Q,
            overflowCount: J,
            showIcons: z.showIcons,
            giftRecipient: i,
            defaultWishlistId: N,
            onOpenWishlist: Y,
            onWishlistItemClick: t,
            tooltipConfigs: X,
            analyticsLocations: l
          })
        })]
      })
    })]
  })
}