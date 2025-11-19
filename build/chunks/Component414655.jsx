/** Chunk was on 52708 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
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
    handleToggleWishlistVisibility: l,
    socialLayerStorefrontApplicationId: o
  } = e;
  return (0, r.jsxs)("div", {
    className: E.headerActions,
    children: [t ? (0, r.jsx)(_.Z, {
      title: S.intl.string(S.t.SDUwM0),
      handleOpenCollectiblesShop: i,
      handleOpenGameShop: a,
      socialLayerStorefrontApplicationId: o
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
  } = (0, d.ZP)(), N = (null == _ ? true : _.id) === t.id, A = false === t.nsfwAllowed, Z = w.t9, [R, L] = i.useState(true);
  i.useEffect(() => {
    (null == P ? true : P.visibility) != null && L(P.visibility === a.f.PUBLIC)
  }, [null == P ? true : P.visibility]);
  let {
    wishlist: M,
    error: G
  } = (0, b.kZ)(n, t.id), B = i.useCallback(e => {
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
  }, [k]), F = (0, v.Z)({
    wishlistId: n,
    onAction: B
  }), U = i.useCallback(() => {
    var e;
    if (null == n) return;
    let t = R ? a.f.PRIVATE : a.f.PUBLIC;
    L(!R), m.Z.updateWishlistVisibility(n, t);
    let r = null != (e = null == M ? true : M.hasThirdPartySku()) && e;
    (0, y.Er)({
      wishlistId: n,
      action: R ? I.NW.WISHLIST_TOGGLE_PRIVATE : I.NW.WISHLIST_TOGGLE_PUBLIC,
      analyticsLocations: k,
      hasThirdPartySku: r
    })
  }, [n, R, k, M]), W = i.useCallback(() => {
    (0, o.pT)(), (0, f.mK)({
      analyticsLocations: k,
      analyticsSource: u.Z.USER_PROFILE_WISHLIST
    })
  }, [k]), H = i.useCallback(() => {
    (0, o.pT)(), (0, p.Z)({
      guildId: w.ON
    })
  }, []);
  return null != G ? null : null == M || 0 === M.items.length ? (0, r.jsx)(j.F, {
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
          onClick: W
        }), D && (0, r.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          icon: s.EOn,
          text: Z === w.t9 ? S.intl.string(S.t["kq/75v"]) : S.intl.string(S.t.apFNLU),
          onClick: H
        })]
      })]
    })
  }) : (0, r.jsxs)(j.F, {
    className: E.scroller,
    fade: true,
    children: [(0, r.jsxs)("div", {
      ref: F,
      className: E.headerRow,
      children: [(0, r.jsxs)("div", {
        className: E.teenDisclaimer,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "text-secondary",
          children: S.intl.format(S.t.r6Y1Lg, {
            count: M.items.length
          })
        }), !R && (0, r.jsx)(c.u, {
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
        }), R && A && (0, r.jsx)(c.u, {
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
        isWishlistPublic: R,
        handleOpenShop: W,
        handleOpenGameShop: H,
        handleToggleWishlistVisibility: U,
        socialLayerStorefrontApplicationId: Z
      }) : (0, r.jsx)(T, {
        isSocialLayerStorefrontEnabled: D,
        handleOpenShop: W,
        handleOpenGameShop: H
      })]
    }), (0, r.jsx)(x.Z, {
      items: M.items,
      profileOwner: t,
      isOwner: N
    })]
  })
}