/** Chunk was on 44097 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
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
  Chunk471341 = require("./471341.js"),
  Chunk661462 = require("./661462.jsx"),
  Chunk319396 = require("./319396.jsx"),
  Chunk654544 = require("./654544.jsx"),
  Chunk778567 = require("./778567.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk582113 = require("./582113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10094 = require("./10094.js");

function C(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    handleOpenShop: n,
    handleOpenGameShop: i
  } = e;
  return t ? (0, r.jsx)(P.Z, {
    title: E.intl.string(E.t["i/yzHs"]),
    handleOpenCollectiblesShop: n,
    handleOpenGameShop: i,
    socialLayerStorefrontApplicationId: S.t9
  }) : (0, r.jsx)(s.Button, {
    variant: "secondary",
    size: "sm",
    icon: s.EOn,
    text: E.intl.string(E.t["i/yzHs"]),
    onClick: n
  })
}

function D(e) {
  let {
    isSocialLayerStorefrontEnabled: t,
    isWishlistPublic: n,
    handleOpenShop: i,
    handleOpenGameShop: a,
    handleToggleWishlistVisibility: l,
    socialLayerStorefrontApplicationId: o
  } = e;
  return (0, r.jsxs)("div", {
    className: T.headerActions,
    children: [t ? (0, r.jsx)(P.Z, {
      title: E.intl.string(E.t.SDUwM0),
      handleOpenCollectiblesShop: i,
      handleOpenGameShop: a,
      socialLayerStorefrontApplicationId: o
    }) : (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "sm",
      icon: s.qJs,
      text: E.intl.string(E.t.SDUwM0),
      onClick: i
    }), (0, r.jsx)(I.Z, {
      isOwner: true,
      isWishlistPublic: n,
      onToggleVisibility: l
    })]
  })
}

function k(e) {
  var t;
  let {
    profileOwner: n
  } = e, {
    wishlistId: P,
    currentUser: I,
    wishlistSettings: k
  } = (0, l.cj)([O.Z, y.default], () => {
    let e = O.Z.getFirstWishlistId(n.id);
    return {
      wishlistId: e,
      currentUser: y.default.getCurrentUser(),
      wishlistSettings: null != e ? O.Z.getWishlistSettings(n.id, e) : null
    }
  }), {
    analyticsLocations: N
  } = (0, d.ZP)(), {
    trackUserProfileWishlistAction: A
  } = (0, v.KZ)(), Z = (null == I ? true : I.id) === n.id, R = false === n.nsfwAllowed, G = S.t9, [L, M] = i.useState(true);
  i.useEffect(() => {
    (null == k ? true : k.visibility) != null && M(k.visibility === a.f.PUBLIC)
  }, [null == k ? true : k.visibility]);
  let {
    wishlist: B,
    error: F
  } = (0, h.kZ)(P, n.id), U = (0, p.Z)({
    location: "user-profile-modal-v2-wishlist",
    wishlist: B
  }), W = i.useCallback(e => {
    let {
      wishlistId: t,
      action: n,
      productLines: r
    } = e;
    null != t && A({
      wishlistId: t,
      action: n,
      productLines: r
    })
  }, [A]), H = (0, j.Z)({
    wishlistId: P,
    onAction: W,
    productLines: null != (t = null == B ? true : B.getProductLines()) ? t : null
  }), z = i.useCallback(() => {
    if (null == P) return;
    let e = L ? a.f.PRIVATE : a.f.PUBLIC;
    M(!L), b.Z.updateWishlistVisibility(P, e), A({
      wishlistId: P,
      action: L ? w.NW.WISHLIST_TOGGLE_PRIVATE : w.NW.WISHLIST_TOGGLE_PUBLIC,
      productLines: null == B ? true : B.getProductLines()
    })
  }, [P, L, A, B]), K = i.useCallback(() => {
    (0, o.pT)(), (0, f.mK)({
      analyticsLocations: N,
      analyticsSource: u.Z.USER_PROFILE_WISHLIST
    })
  }, [N]), V = i.useCallback(() => {
    (0, o.pT)(), (0, m.Z)({
      guildId: (0, g.ac)()
    })
  }, []);
  return null != F ? null : null == B || 0 === B.items.length ? (0, r.jsx)(x.F, {
    fade: true,
    children: (0, r.jsxs)("div", {
      className: T.emptyStateContainer,
      children: [(0, r.jsxs)("div", {
        className: T.emptyStateText,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: E.intl.string(E.t.HGnLLT)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: E.intl.string(E.t["/X1ny6"])
        })]
      }), (0, r.jsxs)(s.ButtonGroup, {
        size: "sm",
        children: [Z && (0, r.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          icon: s.EOn,
          text: E.intl.string(E.t.ZbS4QB),
          onClick: K
        }), U && (0, r.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          icon: s.EOn,
          text: G === S.t9 ? E.intl.string(E.t["kq/75v"]) : E.intl.string(E.t.apFNLU),
          onClick: V
        })]
      })]
    })
  }) : (0, r.jsxs)(x.F, {
    className: T.scroller,
    fade: true,
    children: [(0, r.jsxs)("div", {
      ref: H,
      className: T.headerRow,
      children: [(0, r.jsxs)("div", {
        className: T.teenDisclaimer,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "text-secondary",
          children: E.intl.format(E.t.r6Y1Lg, {
            count: B.items.length
          })
        }), !L && (0, r.jsx)(c.u, {
          text: E.intl.string(E.t.RX7D9h),
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
        }), L && R && (0, r.jsx)(c.u, {
          text: E.intl.string(E.t.d78ChW),
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
      }), Z ? (0, r.jsx)(D, {
        isSocialLayerStorefrontEnabled: U,
        isWishlistPublic: L,
        handleOpenShop: K,
        handleOpenGameShop: V,
        handleToggleWishlistVisibility: z,
        socialLayerStorefrontApplicationId: G
      }) : (0, r.jsx)(C, {
        isSocialLayerStorefrontEnabled: U,
        handleOpenShop: K,
        handleOpenGameShop: V
      })]
    }), (0, r.jsx)(_.Z, {
      items: B.items,
      profileOwner: n,
      isOwner: Z
    })]
  })
}