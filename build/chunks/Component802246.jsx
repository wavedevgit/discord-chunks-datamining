/** Chunk was on 58197 **/
/** chunk id: 802246, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let k = {
  FULL_WISHLIST: {
    title: Chunk985018.intl.string(Chunk985018.t["7lZ31J"]),
    getSubtitle: e => P.intl.formatToPlainString(P.t.BjEX38, {
      username: e
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk985018.intl.string(Chunk985018.t.SK5rmi),
    getSubtitle: e => P.intl.formatToPlainString(P.t.dIDKgi, {
      username: e
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk985018.intl.string(Chunk985018.t.SK5rmi),
    getSubtitle: e => P.intl.formatToPlainString(P.t.wyMp1j, {
      username: e
    }),
    showIcons: false
  },
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
    title: Chunk985018.intl.string(Chunk985018.t.BCi1gT),
    getSubtitle: e => P.intl.formatToPlainString(P.t.BjEX38, {
      username: e
    }),
    showIcons: false
  }
};

function M(e) {
  let {
    title: t,
    subtitle: i,
    themeClass: r
  } = e;
  return (0, n.jsx)("div", {
    className: s()(R.$R, r),
    children: (0, n.jsxs)("div", {
      className: R.hy,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-lg/bold",
        children: t
      }), (0, n.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: i
      })]
    })
  })
}

function H() {
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u.AC4, {
      children: P.intl.string(P.t.pfChQr)
    }), (0, n.jsx)("div", {
      className: R.Md,
      children: Array.from({
        length: j.pl
      }, (e, t) => (0, n.jsx)(C.A, {
        cardSize: y.Y.SMALL
      }, "placeholder-".concat(t)))
    })]
  })
}

function B(e) {
  let {
    lastItem: t,
    remainingCount: i,
    giftRecipient: r,
    onOpenWishlist: l
  } = e;
  return null == t ? null : (0, n.jsx)("li", {
    className: R.XI,
    children: (0, n.jsx)(b.uz, {
      item: t.item,
      remainingCount: i,
      onClick: l,
      cardSize: y.Y.SMALL,
      renderItemPreview: e => {
        if ((0, S.L)(t.item)) {
          if (null != t.item.bundleItems && t.item.bundleItems.length > 0) {
            let i = {
              items: t.item.bundleItems
            };
            return (0, n.jsx)("div", {
              className: R.Tz,
              children: (0, n.jsx)(m.X, {
                product: i,
                isHighlighted: e,
                user: r
              })
            })
          }
          return (0, n.jsx)(O.A, {
            item: t.item,
            profileOwner: r,
            isHighlighted: e,
            cardSize: y.Y.SMALL
          })
        }
        return null
      }
    })
  }, "overflow-".concat(t.item.skuId))
}

function D(e) {
  let {
    items: t,
    hasOverflow: i,
    overflowItem: r,
    overflowCount: l,
    showIcons: s,
    giftRecipient: o,
    defaultWishlistId: u,
    onOpenWishlist: d,
    onWishlistItemClick: p,
    tooltipConfigs: m,
    analyticsLocations: g
  } = e;
  return (0, n.jsxs)("ul", {
    className: R.Md,
    children: [t.map((e, t) => {
      let {
        item: i,
        source: r
      } = e;
      return (0, n.jsx)("li", {
        className: R.XI,
        children: ((e, t) => {
          var i, r;
          let {
            item: l,
            source: d
          } = e, h = m[t], f = (0, n.jsx)(I.A, {
            item: l,
            profileOwner: o,
            wishlistId: u,
            isOwner: false,
            cardSize: y.Y.SMALL,
            showOverlayButton: false,
            giftingOrigin: T.vQ.DM_CHANNEL_WISHLIST,
            source: d,
            showIcons: s,
            onWishlistItemClick: p,
            analyticsLocations: g
          });
          return h.shouldShow ? null != h.title && null == h.body && null == h.renderIcon ? (0, n.jsx)(c.m, {
            text: h.title,
            position: "top",
            asContainer: true,
            delay: j.Zh,
            children: f
          }) : (0, n.jsx)(a.u, {
            title: h.title,
            body: null != (i = h.body) ? i : "",
            asset: null == (r = h.renderIcon) ? true : r.call(h, l),
            assetSize: j.Q8,
            position: "top",
            asContainer: true,
            delay: j.Zh,
            children: f
          }) : f
        })({
          item: i,
          source: r
        }, t)
      }, i.skuId)
    }), i && (0, n.jsx)(B, {
      lastItem: r,
      remainingCount: l,
      giftRecipient: o,
      onOpenWishlist: d
    })]
  })
}
let G = function(e) {
  let {
    giftRecipient: t,
    onWishlistItemClick: i
  } = e, {
    analyticsLocations: l
  } = (0, p.Ay)(d.A.WISHLIST_BANNER), a = (0, g.Ay)(null == t ? true : t.id), {
    displayItems: c,
    hasMoreItems: m,
    totalWishlistItemCount: b,
    wishlistItemCountToBeDisplayed: O,
    fetchState: I,
    defaultWishlistId: y
  } = (0, v.Ay)({
    user: t,
    numItems: j.pl,
    location: "Wishlist Banner",
    source: j.mQ.WISHLIST_BANNER
  }), C = r.useMemo(() => "loading" === I.status, [I.status]), S = E.Ay.getName(t), {
    theme: T,
    primaryColor: P,
    secondaryColor: B
  } = (0, h.A)({
    user: t,
    displayProfile: a
  }), {
    profileThemeStyle: G,
    profileThemeClassName: W
  } = (0, f.A)({
    theme: T,
    themeType: null,
    primaryColor: P,
    secondaryColor: B
  }), U = r.useCallback(() => {
    (0, _.openUserProfileModal)({
      userId: t.id,
      tabSection: w.RP.WISHLIST
    })
  }, [t.id]), Y = k[r.useMemo(() => O >= j.pl ? "FULL_WISHLIST" : O > 0 ? "MIXED" : c.length > 0 && c.every(e => {
    let {
      item: t,
      source: i
    } = e;
    return i === j.uS.POPULAR && (0, x.$)(t)
  }) ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" : "SHOP_ONLY", [O, c])], z = null == a ? true : a.getBannerURL({
    canAnimate: false,
    size: 713
  }), F = r.useMemo(() => m ? c.slice(0, j.pl - 1) : c, [c, m]), X = (0, A.b)(F, t), V = m ? c[j.pl - 1] : null, Q = b - j.pl + 1, [K, J] = r.useState(false), Z = r.useCallback(e => {
    if (e && !C && c.length > 0) {
      let e = c.map(e => {
        let {
          item: t
        } = e;
        return t.skuId
      });
      L.default.track(N.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: t.id,
        sku_ids: e,
        location_stack: l,
        product_lines: Array.from(new Set(c.map(e => {
          let {
            item: t
          } = e;
          return t.skuProductLine
        })))
      }), J(true)
    }
  }, [C, c, t.id, l]), $ = (0, o.K)(Z, true, !C && !K);
  return "error" === I.status ? null : (0, n.jsxs)("div", {
    ref: $,
    className: s()(R.A1, W),
    style: G,
    children: [null != z && (0, n.jsx)("div", {
      className: R.iL,
      style: {
        backgroundImage: "url(".concat(z, ")")
      }
    }), (0, n.jsx)(u.NPJ, {
      disableAdaptiveTheme: true,
      children: e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(M, {
          title: Y.title,
          subtitle: Y.getSubtitle(S),
          themeClass: e
        }), (0, n.jsx)("div", {
          className: e,
          children: C || 0 === c.length ? (0, n.jsx)(H, {}) : (0, n.jsx)(D, {
            items: F,
            hasOverflow: m,
            overflowItem: V,
            overflowCount: Q,
            showIcons: Y.showIcons,
            giftRecipient: t,
            defaultWishlistId: y,
            onOpenWishlist: U,
            onWishlistItemClick: i,
            tooltipConfigs: X,
            analyticsLocations: l
          })
        })]
      })
    })]
  })
}