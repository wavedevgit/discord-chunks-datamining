/** Chunk was on 55926 **/
/** chunk id: 802246, original params: i,e,t (module,exports,require) **/
require.d(exports, {
  A: () => D
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
let M = {
  FULL_WISHLIST: {
    title: Chunk985018.intl.string(Chunk985018.t["7lZ31J"]),
    getSubtitle: i => E.intl.formatToPlainString(E.t.BjEX38, {
      username: i
    }),
    showIcons: false
  },
  MIXED: {
    title: Chunk985018.intl.string(Chunk985018.t.SK5rmi),
    getSubtitle: i => E.intl.formatToPlainString(E.t.dIDKgi, {
      username: i
    }),
    showIcons: true
  },
  SHOP_ONLY: {
    title: Chunk985018.intl.string(Chunk985018.t.SK5rmi),
    getSubtitle: i => E.intl.formatToPlainString(E.t.wyMp1j, {
      username: i
    }),
    showIcons: false
  },
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
    title: Chunk985018.intl.string(Chunk985018.t.BCi1gT),
    getSubtitle: i => E.intl.formatToPlainString(E.t.BjEX38, {
      username: i
    }),
    showIcons: false
  }
};

function H(i) {
  let {
    title: e,
    subtitle: t,
    themeClass: s
  } = i;
  return (0, n.jsx)("div", {
    className: r()(R.$R, s),
    children: (0, n.jsxs)("div", {
      className: R.hy,
      children: [(0, n.jsx)(d.Heading, {
        variant: "heading-lg/bold",
        children: e
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
      children: E.intl.string(E.t.pfChQr)
    }), (0, n.jsx)("div", {
      className: R.Md,
      children: Array.from({
        length: T.pl
      }, (i, e) => (0, n.jsx)(N.A, {
        cardSize: S.Y.SMALL
      }, "placeholder-".concat(e)))
    })]
  })
}

function B(i) {
  let {
    lastItem: e,
    remainingCount: t,
    giftRecipient: s,
    onOpenWishlist: l
  } = i;
  return null == e ? null : (0, n.jsx)("li", {
    className: R.XI,
    children: (0, n.jsx)(j.uz, {
      item: e.item,
      remainingCount: t,
      onClick: l,
      cardSize: S.Y.SMALL,
      renderItemPreview: i => {
        if ((0, C.L)(e.item)) {
          if (null != e.item.bundleItems && e.item.bundleItems.length > 0) {
            let t = {
              items: e.item.bundleItems
            };
            return (0, n.jsx)("div", {
              className: R.Tz,
              children: (0, n.jsx)(h.X, {
                product: t,
                isHighlighted: i,
                user: s
              })
            })
          }
          return (0, n.jsx)(x.A, {
            item: e.item,
            profileOwner: s,
            isHighlighted: i,
            cardSize: S.Y.SMALL
          })
        }
        return null
      }
    })
  }, "overflow-".concat(e.item.skuId))
}

function G(i) {
  let {
    items: e,
    hasOverflow: t,
    overflowItem: s,
    overflowCount: l,
    showIcons: r,
    giftRecipient: a,
    defaultWishlistId: d,
    onOpenWishlist: u,
    onWishlistItemClick: m,
    tooltipConfigs: h,
    analyticsLocations: p
  } = i;
  return (0, n.jsxs)("ul", {
    className: R.Md,
    children: [e.map((i, e) => {
      let {
        item: t,
        source: s
      } = i;
      return (0, n.jsx)("li", {
        className: R.XI,
        children: ((i, e) => {
          var t, s;
          let {
            item: l,
            source: u
          } = i, g = h[e], I = (0, n.jsx)(_.A, {
            item: l,
            profileOwner: a,
            wishlistId: d,
            isOwner: false,
            cardSize: S.Y.SMALL,
            showOverlayButton: false,
            giftingOrigin: w.vQ.DM_CHANNEL_WISHLIST,
            source: u,
            showIcons: r,
            onWishlistItemClick: m,
            analyticsLocations: p
          });
          return g.shouldShow ? null != g.title && null == g.body && null == g.renderIcon ? (0, n.jsx)(c.m, {
            text: g.title,
            position: "top",
            asContainer: true,
            delay: T.Zh,
            children: I
          }) : (0, n.jsx)(o.u, {
            title: g.title,
            body: null != (t = g.body) ? t : "",
            asset: null == (s = g.renderIcon) ? true : s.call(g, l),
            assetSize: T.Q8,
            position: "top",
            asContainer: true,
            delay: T.Zh,
            children: I
          }) : I
        })({
          item: t,
          source: s
        }, e)
      }, t.skuId)
    }), t && (0, n.jsx)(B, {
      lastItem: s,
      remainingCount: l,
      giftRecipient: a,
      onOpenWishlist: u
    })]
  })
}
let D = function(i) {
  let {
    giftRecipient: e,
    onWishlistItemClick: t
  } = i, {
    analyticsLocations: l
  } = (0, m.Ay)(u.A.WISHLIST_BANNER), o = (0, p.Ay)(null == e ? true : e.id), {
    displayItems: c,
    hasMoreItems: h,
    totalWishlistItemCount: j,
    wishlistItemCountToBeDisplayed: x,
    fetchState: _,
    defaultWishlistId: S
  } = (0, A.Ay)({
    user: e,
    numItems: T.pl,
    location: "Wishlist Banner",
    source: T.mQ.WISHLIST_BANNER
  }), N = s.useMemo(() => "loading" === _.status, [_.status]), C = y.Ay.getName(e), {
    theme: w,
    primaryColor: E,
    secondaryColor: B
  } = (0, g.A)({
    user: e,
    displayProfile: o
  }), {
    profileThemeStyle: D,
    profileThemeClassName: W
  } = (0, I.A)({
    theme: w,
    themeType: null,
    primaryColor: E,
    secondaryColor: B
  }), Y = s.useCallback(() => {
    (0, f.openUserProfileModal)({
      userId: e.id,
      tabSection: k.RP.WISHLIST
    })
  }, [e.id]), z = M[s.useMemo(() => x >= T.pl ? "FULL_WISHLIST" : x > 0 ? "MIXED" : c.length > 0 && c.every(i => {
    let {
      item: e,
      source: t
    } = i;
    return t === T.uS.POPULAR && (0, L.$)(e)
  }) ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" : "SHOP_ONLY", [x, c])], U = null == o ? true : o.getBannerURL({
    canAnimate: false,
    size: 713
  }), F = s.useMemo(() => h ? c.slice(0, T.pl - 1) : c, [c, h]), X = (0, O.b)(F, e), Q = h ? c[T.pl - 1] : null, J = j - T.pl + 1, [K, Z] = s.useState(false), $ = s.useCallback(i => {
    if (i && !N && c.length > 0) {
      let i = c.map(i => {
        let {
          item: e
        } = i;
        return e.skuId
      });
      b.default.track(v.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
        gift_recipient_id: e.id,
        sku_ids: i,
        location_stack: l,
        product_lines: Array.from(new Set(c.map(i => {
          let {
            item: e
          } = i;
          return e.skuProductLine
        })))
      }), Z(true)
    }
  }, [N, c, e.id, l]), V = (0, a.K)($, true, !N && !K);
  return "error" === _.status ? null : (0, n.jsxs)("div", {
    ref: V,
    className: r()(R.A1, W),
    style: D,
    children: [null != U && (0, n.jsx)("div", {
      className: R.iL,
      style: {
        backgroundImage: "url(".concat(U, ")")
      }
    }), (0, n.jsx)(d.NPJ, {
      disableAdaptiveTheme: true,
      children: i => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(H, {
          title: z.title,
          subtitle: z.getSubtitle(C),
          themeClass: i
        }), (0, n.jsx)("div", {
          className: i,
          children: N || 0 === c.length ? (0, n.jsx)(P, {}) : (0, n.jsx)(G, {
            items: F,
            hasOverflow: h,
            overflowItem: Q,
            overflowCount: J,
            showIcons: z.showIcons,
            giftRecipient: e,
            defaultWishlistId: S,
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