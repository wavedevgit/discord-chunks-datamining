/** Chunk was on 38058 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk661462 = require("./661462.jsx"),
  Chunk319396 = require("./319396.jsx"),
  Chunk654544 = require("./654544.jsx"),
  Chunk778567 = require("./778567.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk582113 = require("./582113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10094 = require("./10094.js");

function E(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    handleOpenShop: n,
    handleOpenGameShop: i
  } = e;
  return t ? (0, r.jsx)(x.Z, {
    title: w.intl.string(w.t["i/yzHs"]),
    handleOpenCollectiblesShop: n,
    handleOpenGameShop: i,
    socialLayerStorefrontApplicationId: I.t9
  }) : (0, r.jsx)(s.Button, {
    variant: "secondary",
    size: "sm",
    icon: s.EOn,
    text: w.intl.string(w.t["i/yzHs"]),
    onClick: n
  })
}

function T(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    isWishlistPublic: n,
    handleOpenShop: i,
    handleOpenGameShop: a,
    handleToggleWishlistVisibility: l
  } = e;
  return (0, r.jsxs)("div", {
    className: S.headerActions,
    children: [t ? (0, r.jsx)(x.Z, {
      title: w.intl.string(w.t.SDUwM0),
      handleOpenCollectiblesShop: i,
      handleOpenGameShop: a,
      socialLayerStorefrontApplicationId: I.t9
    }) : (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "sm",
      icon: s.qJs,
      text: w.intl.string(w.t.SDUwM0),
      onClick: i
    }), (0, r.jsx)(_.Z, {
      isOwner: true,
      isWishlistPublic: n,
      onToggleVisibility: l
    })]
  })
}

function C(e) {
  let {
    profileOwner: t
  } = e, {
    wishlistId: n,
    currentUser: x,
    wishlistSettings: _
  } = (0, l.cj)([v.Z, h.default], () => {
    let e = v.Z.getFirstWishlistId(t.id);
    return {
      wishlistId: e,
      currentUser: h.default.getCurrentUser(),
      wishlistSettings: null != e ? v.Z.getWishlistSettings(t.id, e) : null
    }
  }), C = (0, g.c)({
    location: "user-profile-modal-v2-wishlist"
  }), {
    analyticsLocations: D
  } = (0, d.ZP)(), k = (null == x ? true : x.id) === t.id, N = false === t.nsfwAllowed, [A, Z] = i.useState(true);
  i.useEffect(() => {
    (null == _ ? true : _.visibility) != null && Z(_.visibility === a.f.PUBLIC)
  }, [null == _ ? true : _.visibility]);
  let {
    wishlist: R,
    error: G
  } = (0, b.kZ)(n, t.id), L = i.useCallback(() => {
    if (null == n) return;
    let e = A ? a.f.PRIVATE : a.f.PUBLIC;
    Z(!A), m.Z.updateWishlistVisibility(n, e), (0, y.Er)({
      wishlistId: n,
      action: A ? P.NW.WISHLIST_TOGGLE_PRIVATE : P.NW.WISHLIST_TOGGLE_PUBLIC,
      analyticsLocations: D
    })
  }, [n, A, D]), B = i.useCallback(() => {
    (0, o.pT)(), (0, f.mK)({
      analyticsLocations: D,
      analyticsSource: u.Z.USER_PROFILE_WISHLIST
    })
  }, [D]), M = i.useCallback(() => {
    (0, o.pT)(), (0, p.Z)({
      guildId: I.ON
    })
  }, []);
  return null != G ? null : null == R || 0 === R.items.length ? (0, r.jsx)(O.F, {
    fade: true,
    children: (0, r.jsxs)("div", {
      className: S.emptyStateContainer,
      children: [(0, r.jsxs)("div", {
        className: S.emptyStateText,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: w.intl.string(w.t.HGnLLT)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: w.intl.string(w.t["/X1ny6"])
        })]
      }), (0, r.jsxs)(s.ButtonGroup, {
        size: "sm",
        children: [k && (0, r.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          icon: s.EOn,
          text: w.intl.string(w.t.ZbS4QB),
          onClick: B
        }), C && (0, r.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          icon: s.EOn,
          text: w.intl.string(w.t.apFNLU),
          onClick: M
        })]
      })]
    })
  }) : (0, r.jsxs)(O.F, {
    className: S.scroller,
    fade: true,
    children: [(0, r.jsxs)("div", {
      className: S.headerRow,
      children: [(0, r.jsxs)("div", {
        className: S.teenDisclaimer,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "text-secondary",
          children: w.intl.format(w.t.r6Y1Lg, {
            count: R.items.length
          })
        }), !A && (0, r.jsx)(c.u, {
          text: w.intl.string(w.t.RX7D9h),
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
        }), A && N && (0, r.jsx)(c.u, {
          text: w.intl.string(w.t.d78ChW),
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
      }), k ? (0, r.jsx)(T, {
        isSocialLayerStorefrontEnabled: C,
        isWishlistPublic: A,
        handleOpenShop: B,
        handleOpenGameShop: M,
        handleToggleWishlistVisibility: L
      }) : (0, r.jsx)(E, {
        isSocialLayerStorefrontEnabled: C,
        handleOpenShop: B,
        handleOpenGameShop: M
      })]
    }), (0, r.jsx)(j.Z, {
      items: R.items,
      profileOwner: t,
      isOwner: k
    })]
  })
}