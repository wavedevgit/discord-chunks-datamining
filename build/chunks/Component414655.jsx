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
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk277511 = require("./277511.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk661462 = require("./661462.jsx"),
  Chunk319396 = require("./319396.jsx"),
  Chunk778567 = require("./778567.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10094 = require("./10094.js");

function O(e) {
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

function x(e, t) {
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

function P(e) {
  let {
    profileOwner: t
  } = e, {
    wishlistId: n,
    currentUser: P,
    wishlistSettings: I
  } = (0, a.cj)([h.Z, p.default], () => {
    let e = h.Z.getFirstWishlistId(t.id);
    return {
      wishlistId: e,
      currentUser: p.default.getCurrentUser(),
      wishlistSettings: null != e ? h.Z.getWishlistSettings(t.id, e) : null
    }
  }), {
    analyticsLocations: S
  } = (0, u.ZP)(), w = (null == P ? true : P.id) === t.id, E = false === t.nsfwAllowed, [T, N] = i.useState(true);
  i.useEffect(() => {
    (null == I ? true : I.visibility) != null && N(I.visibility === l.f.PUBLIC)
  }, [null == I ? true : I.visibility]);
  let {
    wishlist: A,
    error: C
  } = (0, g.k)(n), k = i.useCallback(() => {
    if (null == n) return;
    let e = T ? l.f.PRIVATE : l.f.PUBLIC;
    N(!T), f.Z.updateWishlistVisibility(n, e)
  }, [n, T]), Z = i.useCallback(() => {
    (0, s.pT)(), (0, d.mK)({
      analyticsLocations: S,
      analyticsSource: c.Z.USER_PROFILE_WISHLIST,
      openInLayer: false
    })
  }, [S]);
  return null != C ? null : null == A || 0 === A.items.length ? (0, r.jsx)(m.F, {
    fade: true,
    children: (0, r.jsxs)("div", {
      className: b.emptyStateContainer,
      children: [(0, r.jsxs)("div", {
        className: b.emptyStateText,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: j.intl.string(j.t.HGnLLS)
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: j.intl.string(j.t["/X1ny8"])
        })]
      }), w && (0, r.jsx)(o.zxk, {
        variant: "primary",
        size: "sm",
        icon: o.EOn,
        text: j.intl.string(j.t.ZbS4QE),
        onClick: Z
      })]
    })
  }) : (0, r.jsxs)(m.F, {
    className: b.scroller,
    fade: true,
    children: [(0, r.jsxs)("div", {
      className: b.headerRow,
      children: [(0, r.jsxs)("div", {
        className: b.teenDisclaimer,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "text-secondary",
          children: j.intl.format(j.t.r6Y1Li, {
            count: A.items.length
          })
        }), !T && (0, r.jsx)(o.ua7, {
          text: j.intl.string(j.t.RX7D9v),
          children: e => (0, r.jsx)(o.tEY, {
            children: (0, r.jsx)("div", x(O({
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
        }), T && E && (0, r.jsx)(o.ua7, {
          text: j.intl.string(j.t.d78ChY),
          children: e => (0, r.jsx)(o.tEY, {
            children: (0, r.jsx)("div", x(O({
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
      }), w ? (0, r.jsxs)("div", {
        className: b.headerActions,
        children: [(0, r.jsx)(o.zxk, {
          variant: "secondary",
          size: "sm",
          icon: o.qJs,
          text: j.intl.string(j.t.SDUwMz),
          onClick: Z
        }), (0, r.jsx)(y.Z, {
          isOwner: w,
          isWishlistPublic: T,
          onToggleVisibility: k
        })]
      }) : (0, r.jsx)(o.zxk, {
        variant: "secondary",
        size: "sm",
        icon: o.EOn,
        text: j.intl.string(j.t["i/yzHh"]),
        onClick: Z
      })]
    }), (0, r.jsx)(v.Z, {
      items: A.items,
      profileOwner: t,
      isOwner: w
    })]
  })
}