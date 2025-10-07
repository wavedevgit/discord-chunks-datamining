/** Chunk was on 56848 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk370523 = require("./370523.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
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
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  let {
    profileOwner: t
  } = e, {
    wishlistId: n,
    currentUser: S,
    wishlistSettings: w
  } = (0, a.cj)([m.Z, p.default], () => {
    let e = m.Z.getFirstWishlistId(t.id);
    return {
      wishlistId: e,
      currentUser: p.default.getCurrentUser(),
      wishlistSettings: null != e ? m.Z.getWishlistSettings(t.id, e) : null
    }
  }), {
    analyticsLocations: E
  } = (0, u.ZP)(), T = (null == S ? true : S.id) === t.id, N = false === t.nsfwAllowed, [A, k] = i.useState(true);
  i.useEffect(() => {
    (null == w ? true : w.visibility) != null && k(w.visibility === l.f.PUBLIC)
  }, [null == w ? true : w.visibility]);
  let {
    wishlist: C,
    error: Z
  } = (0, g.k)(n), D = i.useCallback(() => {
    if (null == n) return;
    let e = A ? l.f.PRIVATE : l.f.PUBLIC;
    k(!A), f.Z.updateWishlistVisibility(n, e), (0, h.Er)({
      wishlistId: n,
      action: A ? b.NW.WISHLIST_TOGGLE_PRIVATE : b.NW.WISHLIST_TOGGLE_PUBLIC,
      analyticsLocations: E
    })
  }, [n, A, E]), _ = i.useCallback(() => {
    (0, s.pT)(), (0, d.mK)({
      analyticsLocations: E,
      analyticsSource: c.Z.USER_PROFILE_WISHLIST,
      openInLayer: false
    })
  }, [E]);
  return null != Z ? null : null == C || 0 === C.items.length ? (0, r.jsx)(v.F, {
    fade: true,
    children: (0, r.jsxs)("div", {
      className: x.emptyStateContainer,
      children: [(0, r.jsxs)("div", {
        className: x.emptyStateText,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: O.intl.string(O.t.HGnLLS)
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: O.intl.string(O.t["/X1ny8"])
        })]
      }), T && (0, r.jsx)(o.zxk, {
        variant: "primary",
        size: "sm",
        icon: o.EOn,
        text: O.intl.string(O.t.ZbS4QE),
        onClick: _
      })]
    })
  }) : (0, r.jsxs)(v.F, {
    className: x.scroller,
    fade: true,
    children: [(0, r.jsxs)("div", {
      className: x.headerRow,
      children: [(0, r.jsxs)("div", {
        className: x.teenDisclaimer,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "text-secondary",
          children: O.intl.format(O.t.r6Y1Li, {
            count: C.items.length
          })
        }), !A && (0, r.jsx)(o.ua7, {
          text: O.intl.string(O.t.RX7D9v),
          children: e => (0, r.jsx)(o.tEY, {
            children: (0, r.jsx)("div", I(P({
              role: "tooltip",
              tabIndex: 0
            }, e), {
              children: (0, r.jsx)(o.kZF, {
                size: "custom",
                width: 16,
                height: 16
              })
            }))
          })
        }), A && N && (0, r.jsx)(o.ua7, {
          text: O.intl.string(O.t.d78ChY),
          children: e => (0, r.jsx)(o.tEY, {
            children: (0, r.jsx)("div", I(P({
              role: "tooltip",
              tabIndex: 0
            }, e), {
              children: (0, r.jsx)(o.d3s, {
                size: "custom",
                width: 16,
                height: 16
              })
            }))
          })
        })]
      }), T ? (0, r.jsxs)("div", {
        className: x.headerActions,
        children: [(0, r.jsx)(o.zxk, {
          variant: "secondary",
          size: "sm",
          icon: o.qJs,
          text: O.intl.string(O.t.SDUwMz),
          onClick: _
        }), (0, r.jsx)(j.Z, {
          isOwner: T,
          isWishlistPublic: A,
          onToggleVisibility: D
        })]
      }) : (0, r.jsx)(o.zxk, {
        variant: "secondary",
        size: "sm",
        icon: o.EOn,
        text: O.intl.string(O.t["i/yzHh"]),
        onClick: _
      })]
    }), (0, r.jsx)(y.Z, {
      items: C.items,
      profileOwner: t,
      isOwner: T
    })]
  })
}