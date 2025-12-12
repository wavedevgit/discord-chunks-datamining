/** Chunk was on 85032 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
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
  Chunk917967 = require("./917967.js"),
  Chunk705338 = require("./705338.js"),
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

function k(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    handleOpenShop: n,
    handleOpenGameShop: i
  } = e;
  return t ? (0, r.jsx)(S.Z, {
    title: C.intl.string(C.t["i/yzHs"]),
    handleOpenCollectiblesShop: n,
    handleOpenGameShop: i,
    socialLayerStorefrontApplicationId: T.t9
  }) : (0, r.jsx)(s.Button, {
    variant: "secondary",
    size: "sm",
    icon: s.EOn,
    text: C.intl.string(C.t["i/yzHs"]),
    onClick: n
  })
}

function N(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    isWishlistPublic: n,
    handleOpenShop: i,
    handleOpenGameShop: a,
    handleToggleWishlistVisibility: l,
    socialLayerStorefrontApplicationId: o
  } = e;
  return (0, r.jsxs)("div", {
    className: D.headerActions,
    children: [t ? (0, r.jsx)(S.Z, {
      title: C.intl.string(C.t.SDUwM0),
      handleOpenCollectiblesShop: i,
      handleOpenGameShop: a,
      socialLayerStorefrontApplicationId: o
    }) : (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "sm",
      icon: s.qJs,
      text: C.intl.string(C.t.SDUwM0),
      onClick: i
    }), (0, r.jsx)(E.Z, {
      isOwner: true,
      isWishlistPublic: n,
      onToggleVisibility: l
    })]
  })
}

function A(e) {
  var t;
  let {
    profileOwner: n
  } = e, S = i.useRef(null);
  (0, j.r)({
    containerRef: S,
    itemType: "WISHLIST_ITEM"
  });
  let {
    wishlistId: E,
    currentUser: A,
    wishlistSettings: Z
  } = (0, l.cj)([v.Z, y.default], () => {
    let e = v.Z.getFirstWishlistId(n.id);
    return {
      wishlistId: e,
      currentUser: y.default.getCurrentUser(),
      wishlistSettings: null != e ? v.Z.getWishlistSettings(n.id, e) : null
    }
  }), {
    analyticsLocations: R
  } = (0, d.ZP)(), {
    trackUserProfileWishlistAction: G
  } = (0, O.KZ)(), L = (null == A ? true : A.id) === n.id, M = false === n.nsfwAllowed, B = T.t9, [F, U] = i.useState(true);
  i.useEffect(() => {
    (null == Z ? true : Z.visibility) != null && U(Z.visibility === a.f.PUBLIC)
  }, [null == Z ? true : Z.visibility]);
  let {
    wishlist: W,
    error: H
  } = (0, h.kZ)({
    wishlistId: E,
    userId: n.id
  }), z = (0, p.Z)({
    location: "user-profile-modal-v2-wishlist",
    wishlist: W
  }), K = i.useCallback(e => {
    let {
      wishlistId: t,
      action: n,
      productLines: r
    } = e;
    null != t && G({
      wishlistId: t,
      action: n,
      productLines: r
    })
  }, [G]), q = (0, x.Z)({
    wishlistId: E,
    onAction: K,
    productLines: null != (t = null == W ? true : W.getProductLines()) ? t : null
  }), V = i.useCallback(() => {
    if (null == E) return;
    let e = F ? a.f.PRIVATE : a.f.PUBLIC;
    U(!F), m.Z.updateWishlistVisibility(E, e), G({
      wishlistId: E,
      action: F ? _.NW.WISHLIST_TOGGLE_PRIVATE : _.NW.WISHLIST_TOGGLE_PUBLIC,
      productLines: null == W ? true : W.getProductLines()
    })
  }, [E, F, G, W]), Y = i.useCallback(() => {
    (0, o.closeAllModals)(), (0, f.mK)({
      analyticsLocations: R,
      analyticsSource: u.Z.USER_PROFILE_WISHLIST
    })
  }, [R]), X = i.useCallback(() => {
    (0, b.eagerNavigateToSocialLayerStorefront)({
      guildId: (0, g.ac)()
    })
  }, []), Q = i.useCallback(() => {
    (0, o.closeAllModals)(), (0, b.default)({
      guildId: (0, g.ac)()
    })
  }, []);
  return null != H ? null : null == W || 0 === W.items.length ? (0, r.jsx)(I.F, {
    fade: true,
    children: (0, r.jsxs)("div", {
      className: D.emptyStateContainer,
      children: [(0, r.jsxs)("div", {
        className: D.emptyStateText,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "text-strong",
          children: C.intl.string(C.t.HGnLLT)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: C.intl.string(C.t["/X1ny6"])
        })]
      }), (0, r.jsxs)(s.ButtonGroup, {
        size: "sm",
        children: [L && (0, r.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          icon: s.EOn,
          text: C.intl.string(C.t.ZbS4QB),
          onClick: Y
        }), z && (0, r.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          icon: s.EOn,
          text: B === T.t9 ? C.intl.string(C.t["kq/75v"]) : C.intl.string(C.t.apFNLU),
          onMouseDown: X,
          onClick: Q
        })]
      })]
    })
  }) : (0, r.jsxs)(I.F, {
    scrollerRef: S,
    className: D.scroller,
    fade: true,
    children: [(0, r.jsx)(P.Z, {
      scrollerRef: S
    }), (0, r.jsxs)("div", {
      ref: q,
      className: D.headerRow,
      children: [(0, r.jsxs)("div", {
        className: D.teenDisclaimer,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "text-subtle",
          children: C.intl.format(C.t.r6Y1Lg, {
            count: W.items.length
          })
        }), !F && (0, r.jsx)(c.u, {
          text: C.intl.string(C.t.RX7D9h),
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
        }), F && M && (0, r.jsx)(c.u, {
          text: C.intl.string(C.t.d78ChW),
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
      }), L ? (0, r.jsx)(N, {
        isSocialLayerStorefrontEnabled: z,
        isWishlistPublic: F,
        handleOpenShop: Y,
        handleOpenGameShop: Q,
        handleToggleWishlistVisibility: V,
        socialLayerStorefrontApplicationId: B
      }) : (0, r.jsx)(k, {
        isSocialLayerStorefrontEnabled: z,
        handleOpenShop: Y,
        handleOpenGameShop: Q
      })]
    }), (0, r.jsx)(w.Z, {
      items: W.items,
      profileOwner: n,
      isOwner: L
    })]
  })
}