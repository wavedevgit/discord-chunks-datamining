/** Chunk was on 56848 **/
/** chunk id: 414655, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
  Chunk363725 = require("./363725.js");

function y(e) {
  let {
    profileOwner: t
  } = e, {
    defaultWishlistId: r,
    currentUser: y
  } = (0, l.cj)([g.Z, f.default], () => ({
    defaultWishlistId: g.Z.getFirstWishlistId(t.id),
    currentUser: f.default.getCurrentUser()
  })), {
    analyticsLocations: O
  } = (0, c.ZP)(), j = (null == y ? true : y.id) === t.id, S = false === t.nsfwAllowed, {
    wishlist: P,
    error: x
  } = (0, d.k)(r), I = i.useCallback(() => {
    (0, a.pT)(), (0, u.mK)({
      analyticsLocations: O,
      analyticsSource: o.Z.USER_PROFILE_WISHLIST,
      openInLayer: false
    })
  }, [O]);
  return null != x ? null : null == P || 0 === P.items.length ? (0, n.jsx)(h.F, {
    fade: true,
    children: (0, n.jsxs)("div", {
      className: b.emptyStateContainer,
      children: [(0, n.jsxs)("div", {
        className: b.emptyStateText,
        children: [(0, n.jsx)(s.X6q, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: v.intl.string(v.t.HGnLLS)
        }), (0, n.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: v.intl.string(v.t["/X1ny8"])
        })]
      }), j && (0, n.jsx)(s.zxk, {
        variant: "primary",
        size: "sm",
        icon: s.EOn,
        text: v.intl.string(v.t.ZbS4QE),
        onClick: I
      })]
    })
  }) : (0, n.jsxs)(h.F, {
    className: b.scroller,
    fade: true,
    children: [(0, n.jsxs)("div", {
      className: b.headerRow,
      children: [(0, n.jsxs)("div", {
        className: b.teenDisclaimer,
        children: [(0, n.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "text-secondary",
          children: v.intl.format(v.t.r6Y1Li, {
            count: P.items.length
          })
        }), S && (0, n.jsx)(s.ua7, {
          text: v.intl.string(v.t.d78ChY),
          children: e => {
            var t, r;
            return (0, n.jsx)(s.d3s, (t = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                  var n;
                  n = r[t], t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = n
                })
              }
              return e
            }({}, e), r = r = {
              size: "custom",
              width: 16,
              height: 16
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
              }
              return r
            })(Object(r)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }), t))
          }
        })]
      }), j ? (0, n.jsxs)("div", {
        className: b.headerActions,
        children: [(0, n.jsx)(s.zxk, {
          variant: "secondary",
          size: "sm",
          icon: s.qJs,
          text: v.intl.string(v.t.SDUwMz),
          onClick: I
        }), (0, n.jsx)(m.Z, {
          isOwner: j
        })]
      }) : (0, n.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        icon: s.EOn,
        text: v.intl.string(v.t["i/yzHh"]),
        onClick: I
      })]
    }), (0, n.jsx)(p.Z, {
      items: P.items,
      profileOwner: t,
      isOwner: j
    })]
  })
}