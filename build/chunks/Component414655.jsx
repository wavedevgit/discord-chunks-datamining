/** Chunk was on 56848 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
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
  Chunk10094 = require("./10094.js");

function P(e) {
  let {
    profileOwner: t
  } = e, {
    wishlistId: n,
    currentUser: P,
    wishlistSettings: S
  } = (0, a.cj)([v.Z, m.default], () => {
    let e = v.Z.getFirstWishlistId(t.id);
    return {
      wishlistId: e,
      currentUser: m.default.getCurrentUser(),
      wishlistSettings: null != e ? v.Z.getWishlistSettings(t.id, e) : null
    }
  }), {
    analyticsLocations: w
  } = (0, d.ZP)(), E = (null == P ? true : P.id) === t.id, T = false === t.nsfwAllowed, [A, N] = i.useState(true);
  i.useEffect(() => {
    (null == S ? true : S.visibility) != null && N(S.visibility === l.f.PUBLIC)
  }, [null == S ? true : S.visibility]);
  let {
    wishlist: C,
    error: D
  } = (0, p.kZ)(n, t.id), Z = i.useCallback(() => {
    if (null == n) return;
    let e = A ? l.f.PRIVATE : l.f.PUBLIC;
    N(!A), g.Z.updateWishlistVisibility(n, e), (0, h.Er)({
      wishlistId: n,
      action: A ? x.NW.WISHLIST_TOGGLE_PRIVATE : x.NW.WISHLIST_TOGGLE_PUBLIC,
      analyticsLocations: w
    })
  }, [n, A, w]), k = i.useCallback(() => {
    (0, s.pT)(), (0, f.mK)({
      analyticsLocations: w,
      analyticsSource: u.Z.USER_PROFILE_WISHLIST
    })
  }, [w]);
  return null != D ? null : null == C || 0 === C.items.length ? (0, r.jsx)(y.F, {
    fade: true,
    children: (0, r.jsxs)("div", {
      className: I.emptyStateContainer,
      children: [(0, r.jsxs)("div", {
        className: I.emptyStateText,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: O.intl.string(O.t.HGnLLT)
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: O.intl.string(O.t["/X1ny6"])
        })]
      }), E && (0, r.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        icon: c.EOn,
        text: O.intl.string(O.t.ZbS4QB),
        onClick: k
      })]
    })
  }) : (0, r.jsxs)(y.F, {
    className: I.scroller,
    fade: true,
    children: [(0, r.jsxs)("div", {
      className: I.headerRow,
      children: [(0, r.jsxs)("div", {
        className: I.teenDisclaimer,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-secondary",
          children: O.intl.format(O.t.r6Y1Lg, {
            count: C.items.length
          })
        }), !A && (0, r.jsx)(o.u, {
          text: O.intl.string(O.t.RX7D9h),
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
        }), A && T && (0, r.jsx)(o.u, {
          text: O.intl.string(O.t.d78ChW),
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
      }), E ? (0, r.jsxs)("div", {
        className: I.headerActions,
        children: [(0, r.jsx)(c.Button, {
          variant: "secondary",
          size: "sm",
          icon: c.qJs,
          text: O.intl.string(O.t.SDUwM0),
          onClick: k
        }), (0, r.jsx)(b.Z, {
          isOwner: E,
          isWishlistPublic: A,
          onToggleVisibility: Z
        })]
      }) : (0, r.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        icon: c.EOn,
        text: O.intl.string(O.t["i/yzHs"]),
        onClick: k
      })]
    }), (0, r.jsx)(j.Z, {
      items: C.items,
      profileOwner: t,
      isOwner: E
    })]
  })
}