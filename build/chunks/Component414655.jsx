/** Chunk was on 56848 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk661462 = require("./661462.jsx"),
  Chunk319396 = require("./319396.jsx"),
  Chunk778567 = require("./778567.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10094 = require("./10094.js");

function j(e) {
  let {
    profileOwner: t
  } = e, {
    defaultWishlistId: n,
    currentUser: j
  } = (0, l.cj)([g.Z, f.default], () => ({
    defaultWishlistId: g.Z.getFirstWishlistId(t.id),
    currentUser: f.default.getCurrentUser()
  })), {
    analyticsLocations: b
  } = (0, c.ZP)(), O = (null == j ? true : j.id) === t.id, x = false === t.nsfwAllowed, {
    wishlist: P,
    error: I
  } = (0, d.k)(n), S = i.useCallback(() => {
    (0, a.pT)(), (0, u.mK)({
      analyticsLocations: b,
      analyticsSource: o.Z.USER_PROFILE_WISHLIST,
      openInLayer: false
    })
  }, [b]);
  return null != I ? null : null == P || 0 === P.items.length ? (0, r.jsx)(p.F, {
    fade: true,
    children: (0, r.jsxs)("div", {
      className: y.emptyStateContainer,
      children: [(0, r.jsxs)("div", {
        className: y.emptyStateText,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: v.intl.string(v.t.HGnLLS)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: v.intl.string(v.t["/X1ny8"])
        })]
      }), O && (0, r.jsx)(s.zxk, {
        variant: "primary",
        size: "sm",
        icon: s.EOn,
        text: v.intl.string(v.t.ZbS4QE),
        onClick: S
      })]
    })
  }) : (0, r.jsxs)(p.F, {
    className: y.scroller,
    fade: true,
    children: [(0, r.jsxs)("div", {
      className: y.headerRow,
      children: [(0, r.jsxs)("div", {
        className: y.teenDisclaimer,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "text-secondary",
          children: v.intl.format(v.t.r6Y1Li, {
            count: P.items.length
          })
        }), x && (0, r.jsx)(s.ua7, {
          text: v.intl.string(v.t.d78ChY),
          children: e => {
            var t, n;
            return (0, r.jsx)(s.d3s, (t = function(e) {
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
            }({}, e), n = n = {
              size: "custom",
              width: 16,
              height: 16
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }
        })]
      }), O ? (0, r.jsxs)("div", {
        className: y.headerActions,
        children: [(0, r.jsx)(s.zxk, {
          variant: "secondary",
          size: "sm",
          icon: s.qJs,
          text: v.intl.string(v.t.SDUwMz),
          onClick: S
        }), (0, r.jsx)(m.Z, {
          isOwner: O,
          userId: t.id,
          wishlistId: P.id
        })]
      }) : (0, r.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        icon: s.EOn,
        text: v.intl.string(v.t["i/yzHh"]),
        onClick: S
      })]
    }), (0, r.jsx)(h.Z, {
      items: P.items,
      profileOwner: t,
      isOwner: O
    })]
  })
}