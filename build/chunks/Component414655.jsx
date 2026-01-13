/** Chunk was on 90882 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk370523 = require("./370523.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk164670 = require("./164670.js"),
  Chunk479712 = require("./479712.js"),
  Chunk917967 = require("./917967.js"),
  Chunk705338 = require("./705338.js"),
  Chunk828222 = require("./828222.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk5136 = require("./5136.js"),
  Chunk471341 = require("./471341.js"),
  Chunk683881 = require("./683881.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk319396 = require("./319396.jsx"),
  Chunk654544 = require("./654544.jsx"),
  Chunk778567 = require("./778567.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk582113 = require("./582113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk626836 = require("./626836.js");

function D(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    handleOpenShop: n,
    handleOpenGameShop: i
  } = e;
  return t ? (0, r.jsx)(T.Z, {
    title: Z.intl.string(Z.t["i/yzHs"]),
    handleOpenCollectiblesShop: n,
    handleOpenGameShop: i,
    socialLayerStorefrontApplicationId: N.t9
  }) : (0, r.jsx)(s.Button, {
    variant: "secondary",
    size: "sm",
    icon: s.EOn,
    text: Z.intl.string(Z.t["i/yzHs"]),
    onClick: n
  })
}

function k(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    isWishlistPublic: n,
    handleOpenShop: i,
    handleOpenGameShop: l,
    handleToggleWishlistVisibility: a,
    socialLayerStorefrontApplicationId: o
  } = e;
  return (0, r.jsxs)("div", {
    className: A.headerActions,
    children: [t ? (0, r.jsx)(T.Z, {
      title: Z.intl.string(Z.t.SDUwM0),
      handleOpenCollectiblesShop: i,
      handleOpenGameShop: l,
      socialLayerStorefrontApplicationId: o
    }) : (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "sm",
      icon: s.qJs,
      text: Z.intl.string(Z.t.SDUwM0),
      onClick: i
    }), (0, r.jsx)(_.Z, {
      isOwner: true,
      isWishlistPublic: n,
      onToggleVisibility: a
    })]
  })
}

function R(e) {
  var t;
  let {
    profileOwner: n
  } = e, T = i.useRef(null);
  (0, P.r)({
    containerRef: T,
    itemType: "WISHLIST_ITEM"
  });
  let {
    wishlistId: _,
    currentUser: R,
    wishlistSettings: L
  } = (0, a.cj)([v.Z, O.default], () => {
    let e = v.Z.getFirstWishlistId(n.id);
    return {
      wishlistId: e,
      currentUser: O.default.getCurrentUser(),
      wishlistSettings: null != e ? v.Z.getWishlistSettings(n.id, e) : null
    }
  }), {
    analyticsLocations: G
  } = (0, d.ZP)(), {
    trackUserProfileWishlistAction: B
  } = (0, x.KZ)(), M = (null == R ? true : R.id) === n.id, F = false === n.nsfwAllowed, U = N.t9, [W, H] = i.useState(true);
  i.useEffect(() => {
    (null == L ? true : L.visibility) != null && H(L.visibility === l.f.PUBLIC)
  }, [null == L ? true : L.visibility]);
  let {
    wishlist: z,
    error: K
  } = (0, j.kZ)({
    wishlistId: _,
    userId: n.id
  }), q = (0, m.Z)({
    location: "user-profile-modal-v2-wishlist",
    wishlist: z
  }), V = (0, p.R)({
    location: "user-profile-modal-v2-wishlist"
  }), X = q && V, Y = i.useCallback(e => {
    let {
      wishlistId: t,
      action: n,
      productLines: r
    } = e;
    null != t && B({
      wishlistId: t,
      action: n,
      productLines: r
    })
  }, [B]), J = (0, I.Z)({
    wishlistId: _,
    onAction: Y,
    productLines: null != (t = null == z ? true : z.getProductLines()) ? t : null
  }), Q = i.useCallback(() => {
    if (null == _) return;
    let e = W ? l.f.PRIVATE : l.f.PUBLIC;
    H(!W), h.Z.updateWishlistVisibility(_, e), B({
      wishlistId: _,
      action: W ? C.NW.WISHLIST_TOGGLE_PRIVATE : C.NW.WISHLIST_TOGGLE_PUBLIC,
      productLines: null == z ? true : z.getProductLines()
    })
  }, [_, W, B, z]), $ = i.useCallback(() => {
    (0, o.closeAllModals)(), (0, f.mK)({
      analyticsLocations: G,
      analyticsSource: u.Z.USER_PROFILE_WISHLIST
    })
  }, [G]), ee = i.useCallback(() => {
    (0, b.eagerNavigateToSocialLayerStorefront)({
      guildId: (0, g.ac)()
    })
  }, []), et = i.useCallback(() => {
    (0, o.closeAllModals)(), (0, b.default)({
      guildId: (0, g.ac)()
    })
  }, []);
  return null != K ? null : null == z || 0 === z.items.length ? (0, r.jsxs)(E.F, {
    fade: true,
    children: [(0, r.jsxs)("div", {
      className: A.emptyStateContainer,
      children: [(0, r.jsxs)("div", {
        className: A.emptyStateText,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "text-strong",
          children: Z.intl.string(Z.t.HGnLLT)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: Z.intl.string(Z.t["/X1ny6"])
        })]
      }), (0, r.jsxs)(s.ButtonGroup, {
        size: "sm",
        children: [M && (0, r.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          icon: s.EOn,
          text: Z.intl.string(Z.t.ZbS4QB),
          onClick: $
        }), q && (0, r.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          icon: s.EOn,
          text: U === N.t9 ? Z.intl.string(Z.t["kq/75v"]) : Z.intl.string(Z.t.apFNLU),
          onMouseDown: ee,
          onClick: et
        })]
      })]
    }), X && (0, r.jsx)(y.Z, {
      user: n,
      isOwner: M,
      wishlist: z,
      analyticsLocations: G,
      className: A.recommendationsContainerEmptyWishlist
    })]
  }) : (0, r.jsxs)(E.F, {
    scrollerRef: T,
    className: A.scroller,
    fade: true,
    children: [(0, r.jsx)(w.Z, {
      scrollerRef: T
    }), (0, r.jsxs)("div", {
      ref: J,
      className: A.headerRow,
      children: [(0, r.jsxs)("div", {
        className: A.teenDisclaimer,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "text-subtle",
          children: Z.intl.format(Z.t.r6Y1Lg, {
            count: z.items.length
          })
        }), !W && (0, r.jsx)(c.u, {
          text: Z.intl.string(Z.t.RX7D9h),
          asContainer: true,
          children: (0, r.jsx)(s.tEY, {
            children: (0, r.jsx)("div", {
              role: "tooltip",
              tabIndex: 0,
              children: (0, r.jsx)(s.kZF, {
                size: "custom",
                width: 16,
                height: 16
              })
            })
          })
        }), W && F && (0, r.jsx)(c.u, {
          text: Z.intl.string(Z.t.d78ChW),
          asContainer: true,
          children: (0, r.jsx)(s.tEY, {
            children: (0, r.jsx)("div", {
              role: "tooltip",
              tabIndex: 0,
              children: (0, r.jsx)(s.d3s, {
                size: "custom",
                width: 16,
                height: 16
              })
            })
          })
        })]
      }), M ? (0, r.jsx)(k, {
        isSocialLayerStorefrontEnabled: q,
        isWishlistPublic: W,
        handleOpenShop: $,
        handleOpenGameShop: et,
        handleToggleWishlistVisibility: Q,
        socialLayerStorefrontApplicationId: U
      }) : (0, r.jsx)(D, {
        isSocialLayerStorefrontEnabled: q,
        handleOpenShop: $,
        handleOpenGameShop: et
      })]
    }), (0, r.jsx)(S.Z, {
      items: z.items,
      profileOwner: n,
      isOwner: M
    }), X && (0, r.jsx)(y.Z, {
      user: n,
      isOwner: M,
      wishlist: z,
      analyticsLocations: G,
      className: A.recommendationsContainerWithWishlist
    })]
  })
}