/** Chunk was on 22325 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
  Chunk277511 = require("./277511.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk221292 = require("./221292.js"),
  Chunk621853 = require("./621853.js"),
  Chunk661462 = require("./661462.jsx"),
  Chunk319396 = require("./319396.jsx"),
  Chunk778567 = require("./778567.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk363725 = require("./363725.js");

function I(e) {
  let {
    profileOwner: t
  } = e, {
    wishlistId: n,
    currentUser: I,
    wishlistSettings: P
  } = (0, l.cj)([h.Z, m.default], () => {
    let e = h.Z.getFirstWishlistId(t.id);
    return {
      wishlistId: e,
      currentUser: m.default.getCurrentUser(),
      wishlistSettings: null != e ? h.Z.getWishlistSettings(t.id, e) : null
    }
  }), {
    analyticsLocations: w
  } = (0, d.ZP)(), S = (null == I ? true : I.id) === t.id, E = false === t.nsfwAllowed, [T, C] = i.useState(true);
  i.useEffect(() => {
    (null == P ? true : P.visibility) != null && C(P.visibility === a.f.PUBLIC)
  }, [null == P ? true : P.visibility]);
  let {
    wishlist: N,
    error: A
  } = (0, p.kZ)(n, t.id), D = i.useCallback(() => {
    if (null == n) return;
    let e = T ? a.f.PRIVATE : a.f.PUBLIC;
    C(!T), g.Z.updateWishlistVisibility(n, e), (0, b.Er)({
      wishlistId: n,
      action: T ? O.NW.WISHLIST_TOGGLE_PRIVATE : O.NW.WISHLIST_TOGGLE_PUBLIC,
      analyticsLocations: w
    })
  }, [n, T, w]), k = i.useCallback(() => {
    (0, o.pT)(), (0, f.mK)({
      analyticsLocations: w,
      analyticsSource: u.Z.USER_PROFILE_WISHLIST
    })
  }, [w]);
  return null != A ? null : null == N || 0 === N.items.length ? (0, r.jsx)(v.F, {
    fade: true,
    children: (0, r.jsxs)("div", {
      className: _.emptyStateContainer,
      children: [(0, r.jsxs)("div", {
        className: _.emptyStateText,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: x.intl.string(x.t.HGnLLT)
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: x.intl.string(x.t["/X1ny6"])
        })]
      }), S && (0, r.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        icon: c.EOn,
        text: x.intl.string(x.t.ZbS4QB),
        onClick: k
      })]
    })
  }) : (0, r.jsxs)(v.F, {
    className: _.scroller,
    fade: true,
    children: [(0, r.jsxs)("div", {
      className: _.headerRow,
      children: [(0, r.jsxs)("div", {
        className: _.teenDisclaimer,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-secondary",
          children: x.intl.format(x.t.r6Y1Lg, {
            count: N.items.length
          })
        }), !T && (0, r.jsx)(s.u, {
          text: x.intl.string(x.t.RX7D9h),
          asContainer: true,
          children: (0, r.jsx)(c.tEY, {
            children: (0, r.jsx)("div", {
              role: "tooltip",
              tabIndex: 0,
              children: (0, r.jsx)(c.kZF, {
                size: "custom",
                width: 16,
                height: 16
              })
            })
          })
        }), T && E && (0, r.jsx)(s.u, {
          text: x.intl.string(x.t.d78ChW),
          asContainer: true,
          children: (0, r.jsx)(c.tEY, {
            children: (0, r.jsx)("div", {
              role: "tooltip",
              tabIndex: 0,
              children: (0, r.jsx)(c.d3s, {
                size: "custom",
                width: 16,
                height: 16
              })
            })
          })
        })]
      }), S ? (0, r.jsxs)("div", {
        className: _.headerActions,
        children: [(0, r.jsx)(c.Button, {
          variant: "secondary",
          size: "sm",
          icon: c.qJs,
          text: x.intl.string(x.t.SDUwM0),
          onClick: k
        }), (0, r.jsx)(j.Z, {
          isOwner: S,
          isWishlistPublic: T,
          onToggleVisibility: D
        })]
      }) : (0, r.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        icon: c.EOn,
        text: x.intl.string(x.t["i/yzHs"]),
        onClick: k
      })]
    }), (0, r.jsx)(y.Z, {
      items: N.items,
      profileOwner: t,
      isOwner: S
    })]
  })
}