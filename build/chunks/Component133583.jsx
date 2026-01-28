/** Chunk was on 94682 **/
/** chunk id: 133583, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
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

function R(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    handleOpenShop: n,
    handleOpenGameShop: l
  } = e;
  return t ? (0, r.jsx)(E.A, {
    title: C.intl.string(C.t["i/yzHs"]),
    handleOpenCollectiblesShop: n,
    handleOpenGameShop: l,
    socialLayerStorefrontApplicationId: N.XR
  }) : (0, r.jsx)(c.Button, {
    variant: "secondary",
    size: "sm",
    icon: c.U1X,
    text: C.intl.string(C.t["i/yzHs"]),
    onClick: n
  })
}

function D(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    isWishlistPublic: n,
    handleOpenShop: l,
    handleOpenGameShop: i,
    handleToggleWishlistVisibility: a,
    socialLayerStorefrontApplicationId: o
  } = e;
  return (0, r.jsxs)("div", {
    className: k.$s,
    children: [t ? (0, r.jsx)(E.A, {
      title: C.intl.string(C.t.SDUwM0),
      handleOpenCollectiblesShop: l,
      handleOpenGameShop: i,
      socialLayerStorefrontApplicationId: o
    }) : (0, r.jsx)(c.Button, {
      variant: "secondary",
      size: "sm",
      icon: c.j96,
      text: C.intl.string(C.t.SDUwM0),
      onClick: l
    }), (0, r.jsx)(S.A, {
      isOwner: true,
      isWishlistPublic: n,
      onToggleVisibility: a
    })]
  })
}

function L(e) {
  var t;
  let {
    profileOwner: n
  } = e, E = l.useRef(null);
  (0, _.i)({
    containerRef: E,
    itemType: "WISHLIST_ITEM"
  });
  let {
    wishlistId: S,
    currentUser: L,
    wishlistSettings: G
  } = (0, a.cf)([v.A, h.default], () => {
    let e = v.A.getFirstWishlistId(n.id);
    return {
      wishlistId: e,
      currentUser: h.default.getCurrentUser(),
      wishlistSettings: null != e ? v.A.getWishlistSettings(n.id, e) : null
    }
  }), {
    analyticsLocations: U
  } = (0, d.Ay)(), {
    trackUserProfileWishlistAction: M
  } = (0, x.NJ)(), F = (null == L ? true : L.id) === n.id, H = false === n.nsfwAllowed, B = N.XR, [W, X] = l.useState(true);
  l.useEffect(() => {
    (null == G ? true : G.visibility) != null && X(G.visibility === i.a.PUBLIC)
  }, [null == G ? true : G.visibility]);
  let {
    wishlist: K,
    error: z
  } = (0, j.fw)({
    wishlistId: S,
    userId: n.id
  }), V = (0, m.A)({
    location: "user-profile-modal-v2-wishlist",
    wishlist: K
  }), Y = (0, g.X)({
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
  }, [M]), Z = (0, I.A)({
    wishlistId: S,
    onAction: J,
    productLines: null != (t = null == K ? true : K.getProductLines()) ? t : null
  }), Q = l.useCallback(() => {
    if (null == S) return;
    let e = W ? i.a.PRIVATE : i.a.PUBLIC;
    X(!W), O.A.updateWishlistVisibility(S, e), M({
      wishlistId: S,
      action: W ? T.Mq.WISHLIST_TOGGLE_PRIVATE : T.Mq.WISHLIST_TOGGLE_PUBLIC,
      productLines: null == K ? true : K.getProductLines()
    })
  }, [S, W, M, K]), $ = l.useCallback(() => {
    (0, o.closeAllModals)(), (0, f.Cz)({
      analyticsLocations: U,
      analyticsSource: u.A.USER_PROFILE_WISHLIST
    })
  }, [U]), ee = l.useCallback(() => {
    (0, b.X)({
      guildId: (0, p.zf)()
    })
  }, []), et = l.useCallback(() => {
    (0, o.closeAllModals)(), (0, b.default)({
      guildId: (0, p.zf)()
    })
  }, []);
  return null != z ? null : null == K || 0 === K.items.length ? (0, r.jsxs)(w.K, {
    fade: true,
    children: [(0, r.jsxs)("div", {
      className: k.y7,
      children: [(0, r.jsxs)("div", {
        className: k.q6,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-md/medium",
          color: "text-strong",
          children: C.intl.string(C.t.HGnLLT)
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: C.intl.string(C.t["/X1ny6"])
        })]
      }), (0, r.jsxs)(c.ButtonGroup, {
        size: "sm",
        children: [F && (0, r.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          icon: c.U1X,
          text: C.intl.string(C.t.ZbS4QB),
          onClick: $
        }), V && (0, r.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          icon: c.U1X,
          text: B === N.XR ? C.intl.string(C.t["kq/75v"]) : C.intl.string(C.t.apFNLU),
          onMouseDown: ee,
          onClick: et
        })]
      })]
    }), q && (0, r.jsx)(y.A, {
      user: n,
      isOwner: F,
      wishlist: K,
      analyticsLocations: U,
      className: k._E
    })]
  }) : (0, r.jsxs)(w.K, {
    scrollerRef: E,
    className: k.XG,
    fade: true,
    children: [(0, r.jsx)(A.A, {
      scrollerRef: E
    }), (0, r.jsxs)("div", {
      ref: Z,
      className: k.U1,
      children: [(0, r.jsxs)("div", {
        className: k.Us,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-subtle",
          children: C.intl.format(C.t.r6Y1Lg, {
            count: K.items.length
          })
        }), !W && (0, r.jsx)(s.m, {
          text: C.intl.string(C.t.RX7D9h),
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
        }), W && H && (0, r.jsx)(s.m, {
          text: C.intl.string(C.t.d78ChW),
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
      }), F ? (0, r.jsx)(D, {
        isSocialLayerStorefrontEnabled: V,
        isWishlistPublic: W,
        handleOpenShop: $,
        handleOpenGameShop: et,
        handleToggleWishlistVisibility: Q,
        socialLayerStorefrontApplicationId: B
      }) : (0, r.jsx)(R, {
        isSocialLayerStorefrontEnabled: V,
        handleOpenShop: $,
        handleOpenGameShop: et
      })]
    }), (0, r.jsx)(P.A, {
      items: K.items,
      profileOwner: n,
      isOwner: F
    }), q && (0, r.jsx)(y.A, {
      user: n,
      isOwner: F,
      wishlist: K,
      analyticsLocations: U,
      className: k.HZ
    })]
  })
}