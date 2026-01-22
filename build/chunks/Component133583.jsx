/** Chunk was on 38663 **/
/** chunk id: 133583, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk777480 = require("./777480.js"),
  Chunk311907 = require("./311907.js"),
  Chunk192308 = require("./192308.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk979286 = require("./979286.js"),
  Chunk871123 = require("./871123.js"),
  Chunk690946 = require("./690946.js"),
  Chunk898616 = require("./898616.js"),
  Chunk44724 = require("./44724.js"),
  Chunk531755 = require("./531755.jsx"),
  Chunk808247 = require("./808247.js"),
  Chunk594832 = require("./594832.js"),
  Chunk287809 = require("./287809.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk622543 = require("./622543.js"),
  Chunk600761 = require("./600761.js"),
  Chunk535089 = require("./535089.js"),
  Chunk128988 = require("./128988.jsx"),
  Chunk515054 = require("./515054.jsx"),
  Chunk203647 = require("./203647.jsx"),
  Chunk383430 = require("./383430.jsx"),
  Chunk300131 = require("./300131.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk188275 = require("./188275.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk39427 = require("./39427.js");

function C(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    handleOpenShop: n,
    handleOpenGameShop: l
  } = e;
  return t ? (0, r.jsx)(S.A, {
    title: D.intl.string(D.t["i/yzHs"]),
    handleOpenCollectiblesShop: n,
    handleOpenGameShop: l,
    socialLayerStorefrontApplicationId: N.XR
  }) : (0, r.jsx)(c.Button, {
    variant: "secondary",
    size: "sm",
    icon: c.U1X,
    text: D.intl.string(D.t["i/yzHs"]),
    onClick: n
  })
}

function k(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    isWishlistPublic: n,
    handleOpenShop: l,
    handleOpenGameShop: i,
    handleToggleWishlistVisibility: a,
    socialLayerStorefrontApplicationId: s
  } = e;
  return (0, r.jsxs)("div", {
    className: R.$s,
    children: [t ? (0, r.jsx)(S.A, {
      title: D.intl.string(D.t.SDUwM0),
      handleOpenCollectiblesShop: l,
      handleOpenGameShop: i,
      socialLayerStorefrontApplicationId: s
    }) : (0, r.jsx)(c.Button, {
      variant: "secondary",
      size: "sm",
      icon: c.j96,
      text: D.intl.string(D.t.SDUwM0),
      onClick: l
    }), (0, r.jsx)(T.A, {
      isOwner: true,
      isWishlistPublic: n,
      onToggleVisibility: a
    })]
  })
}

function G(e) {
  var t;
  let {
    profileOwner: n
  } = e, S = l.useRef(null);
  (0, A.i)({
    containerRef: S,
    itemType: "WISHLIST_ITEM"
  });
  let {
    wishlistId: T,
    currentUser: G,
    wishlistSettings: L
  } = (0, a.cf)([v.A, x.default], () => {
    let e = v.A.getFirstWishlistId(n.id);
    return {
      wishlistId: e,
      currentUser: x.default.getCurrentUser(),
      wishlistSettings: null != e ? v.A.getWishlistSettings(n.id, e) : null
    }
  }), {
    analyticsLocations: U
  } = (0, d.Ay)(), {
    trackUserProfileWishlistAction: M
  } = (0, h.NJ)(), F = (null == G ? true : G.id) === n.id, X = false === n.nsfwAllowed, W = N.XR, [B, H] = l.useState(true);
  l.useEffect(() => {
    (null == L ? true : L.visibility) != null && H(L.visibility === i.a.PUBLIC)
  }, [null == L ? true : L.visibility]);
  let {
    wishlist: K,
    error: z
  } = (0, j.fw)({
    wishlistId: T,
    userId: n.id
  }), V = (0, g.A)({
    location: "user-profile-modal-v2-wishlist",
    wishlist: K
  }), Y = (0, b.X)({
    location: "user-profile-modal-v2-wishlist"
  }), q = V && Y, J = l.useCallback(e => {
    let {
      wishlistId: t,
      action: n,
      productLines: r
    } = e;
    null != t && M({
      wishlistId: t,
      action: n,
      productLines: r
    })
  }, [M]), Q = (0, w.A)({
    wishlistId: T,
    onAction: J,
    productLines: null != (t = null == K ? true : K.getProductLines()) ? t : null
  }), Z = l.useCallback(() => {
    if (null == T) return;
    let e = B ? i.a.PRIVATE : i.a.PUBLIC;
    H(!B), O.A.updateWishlistVisibility(T, e), M({
      wishlistId: T,
      action: B ? _.Mq.WISHLIST_TOGGLE_PRIVATE : _.Mq.WISHLIST_TOGGLE_PUBLIC,
      productLines: null == K ? true : K.getProductLines()
    })
  }, [T, B, M, K]), $ = l.useCallback(() => {
    (0, s.closeAllModals)(), (0, f.Cz)({
      analyticsLocations: U,
      analyticsSource: u.A.USER_PROFILE_WISHLIST
    })
  }, [U]), ee = l.useCallback(() => {
    (0, m.X)({
      guildId: (0, p.zf)()
    })
  }, []), et = l.useCallback(() => {
    (0, s.closeAllModals)(), (0, m.default)({
      guildId: (0, p.zf)()
    })
  }, []);
  return null != z ? null : null == K || 0 === K.items.length ? (0, r.jsxs)(P.K, {
    fade: true,
    children: [(0, r.jsxs)("div", {
      className: R.y7,
      children: [(0, r.jsxs)("div", {
        className: R.q6,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-md/medium",
          color: "text-strong",
          children: D.intl.string(D.t.HGnLLT)
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: D.intl.string(D.t["/X1ny6"])
        })]
      }), (0, r.jsxs)(c.ButtonGroup, {
        size: "sm",
        children: [F && (0, r.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          icon: c.U1X,
          text: D.intl.string(D.t.ZbS4QB),
          onClick: $
        }), V && (0, r.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          icon: c.U1X,
          text: W === N.XR ? D.intl.string(D.t["kq/75v"]) : D.intl.string(D.t.apFNLU),
          onMouseDown: ee,
          onClick: et
        })]
      })]
    }), q && (0, r.jsx)(y.A, {
      user: n,
      isOwner: F,
      wishlist: K,
      analyticsLocations: U,
      className: R._E
    })]
  }) : (0, r.jsxs)(P.K, {
    scrollerRef: S,
    className: R.XG,
    fade: true,
    children: [(0, r.jsx)(I.A, {
      scrollerRef: S
    }), (0, r.jsxs)("div", {
      ref: Q,
      className: R.U1,
      children: [(0, r.jsxs)("div", {
        className: R.Us,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-subtle",
          children: D.intl.format(D.t.r6Y1Lg, {
            count: K.items.length
          })
        }), !B && (0, r.jsx)(o.m, {
          text: D.intl.string(D.t.RX7D9h),
          asContainer: true,
          children: (0, r.jsx)(c.vN3, {
            children: (0, r.jsx)("div", {
              role: "tooltip",
              tabIndex: 0,
              children: (0, r.jsx)(c.G3N, {
                size: "custom",
                width: 16,
                height: 16
              })
            })
          })
        }), B && X && (0, r.jsx)(o.m, {
          text: D.intl.string(D.t.d78ChW),
          asContainer: true,
          children: (0, r.jsx)(c.vN3, {
            children: (0, r.jsx)("div", {
              role: "tooltip",
              tabIndex: 0,
              children: (0, r.jsx)(c.mir, {
                size: "custom",
                width: 16,
                height: 16
              })
            })
          })
        })]
      }), F ? (0, r.jsx)(k, {
        isSocialLayerStorefrontEnabled: V,
        isWishlistPublic: B,
        handleOpenShop: $,
        handleOpenGameShop: et,
        handleToggleWishlistVisibility: Z,
        socialLayerStorefrontApplicationId: W
      }) : (0, r.jsx)(C, {
        isSocialLayerStorefrontEnabled: V,
        handleOpenShop: $,
        handleOpenGameShop: et
      })]
    }), (0, r.jsx)(E.A, {
      items: K.items,
      profileOwner: n,
      isOwner: F
    }), q && (0, r.jsx)(y.A, {
      user: n,
      isOwner: F,
      wishlist: K,
      analyticsLocations: U,
      className: R.HZ
    })]
  })
}