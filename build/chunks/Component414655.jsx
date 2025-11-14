/** Chunk was on 36113 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk370523 = require("./370523.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk699955 = require("./699955.js"),
  Chunk705338 = require("./705338.js"),
  Chunk277511 = require("./277511.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk221292 = require("./221292.js"),
  Chunk621853 = require("./621853.js"),
  Chunk471341 = require("./471341.js"),
  Chunk661462 = require("./661462.jsx"),
  Chunk319396 = require("./319396.jsx"),
  Chunk654544 = require("./654544.jsx"),
  Chunk778567 = require("./778567.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk582113 = require("./582113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10094 = require("./10094.js");

function T(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    handleOpenShop: n,
    handleOpenGameShop: i
  } = e;
  return t ? (0, r.jsx)(_.Z, {
    title: S.intl.string(S.t["i/yzHs"]),
    handleOpenCollectiblesShop: n,
    handleOpenGameShop: i,
    socialLayerStorefrontApplicationId: w.t9
  }) : (0, r.jsx)(s.Button, {
    variant: "secondary",
    size: "sm",
    icon: s.EOn,
    text: S.intl.string(S.t["i/yzHs"]),
    onClick: n
  })
}

function C(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    isWishlistPublic: n,
    handleOpenShop: i,
    handleOpenGameShop: a,
    handleToggleWishlistVisibility: l
  } = e;
  return (0, r.jsxs)("div", {
    className: E.headerActions,
    children: [t ? (0, r.jsx)(_.Z, {
      title: S.intl.string(S.t.SDUwM0),
      handleOpenCollectiblesShop: i,
      handleOpenGameShop: a,
      socialLayerStorefrontApplicationId: w.t9
    }) : (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "sm",
      icon: s.qJs,
      text: S.intl.string(S.t.SDUwM0),
      onClick: i
    }), (0, r.jsx)(P.Z, {
      isOwner: true,
      isWishlistPublic: n,
      onToggleVisibility: l
    })]
  })
}

function D(e) {
  let {
    profileOwner: t
  } = e, {
    wishlistId: n,
    currentUser: _,
    wishlistSettings: P
  } = (0, l.cj)([O.Z, h.default], () => {
    let e = O.Z.getFirstWishlistId(t.id);
    return {
      wishlistId: e,
      currentUser: h.default.getCurrentUser(),
      wishlistSettings: null != e ? O.Z.getWishlistSettings(t.id, e) : null
    }
  }), D = (0, g.c)({
    location: "user-profile-modal-v2-wishlist"
  }), {
    analyticsLocations: k
  } = (0, d.ZP)(), N = (null == _ ? true : _.id) === t.id, A = false === t.nsfwAllowed, [Z, R] = i.useState(true);
  i.useEffect(() => {
    (null == P ? true : P.visibility) != null && R(P.visibility === a.f.PUBLIC)
  }, [null == P ? true : P.visibility]);
  let {
    wishlist: L,
    error: M
  } = (0, b.kZ)(n, t.id), G = i.useCallback(e => {
    let {
      wishlistId: t,
      action: n,
      skuId: r
    } = e;
    null != t && (0, y.Er)({
      wishlistId: t,
      action: n,
      skuId: r,
      analyticsLocations: k
    })
  }, [k]), B = (0, v.Z)({
    wishlistId: n,
    onAction: G
  }), U = i.useCallback(() => {
    var e;
    if (null == n) return;
    let t = Z ? a.f.PRIVATE : a.f.PUBLIC;
    R(!Z), m.Z.updateWishlistVisibility(n, t);
    let r = null != (e = null == L ? true : L.hasThirdPartySku()) && e;
    (0, y.Er)({
      wishlistId: n,
      action: Z ? I.NW.WISHLIST_TOGGLE_PRIVATE : I.NW.WISHLIST_TOGGLE_PUBLIC,
      analyticsLocations: k,
      hasThirdPartySku: r
    })
  }, [n, Z, k, L]), F = i.useCallback(() => {
    (0, o.pT)(), (0, f.mK)({
      analyticsLocations: k,
      analyticsSource: u.Z.USER_PROFILE_WISHLIST
    })
  }, [k]), W = i.useCallback(() => {
    (0, o.pT)(), (0, p.Z)({
      guildId: w.ON
    })
  }, []);
  return null != M ? null : null == L || 0 === L.items.length ? (0, r.jsx)(j.F, {
    fade: true,
    children: (0, r.jsxs)("div", {
      className: E.emptyStateContainer,
      children: [(0, r.jsxs)("div", {
        className: E.emptyStateText,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: S.intl.string(S.t.HGnLLT)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: S.intl.string(S.t["/X1ny6"])
        })]
      }), (0, r.jsxs)(s.ButtonGroup, {
        size: "sm",
        children: [N && (0, r.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          icon: s.EOn,
          text: S.intl.string(S.t.ZbS4QB),
          onClick: F
        }), D && (0, r.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          icon: s.EOn,
          text: S.intl.string(S.t.apFNLU),
          onClick: W
        })]
      })]
    })
  }) : (0, r.jsxs)(j.F, {
    className: E.scroller,
    fade: true,
    children: [(0, r.jsxs)("div", {
      ref: B,
      className: E.headerRow,
      children: [(0, r.jsxs)("div", {
        className: E.teenDisclaimer,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "text-secondary",
          children: S.intl.format(S.t.r6Y1Lg, {
            count: L.items.length
          })
        }), !Z && (0, r.jsx)(c.u, {
          text: S.intl.string(S.t.RX7D9h),
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
        }), Z && A && (0, r.jsx)(c.u, {
          text: S.intl.string(S.t.d78ChW),
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
      }), N ? (0, r.jsx)(C, {
        isSocialLayerStorefrontEnabled: D,
        isWishlistPublic: Z,
        handleOpenShop: F,
        handleOpenGameShop: W,
        handleToggleWishlistVisibility: U
      }) : (0, r.jsx)(T, {
        isSocialLayerStorefrontEnabled: D,
        handleOpenShop: F,
        handleOpenGameShop: W
      })]
    }), (0, r.jsx)(x.Z, {
      items: L.items,
      profileOwner: t,
      isOwner: N
    })]
  })
}