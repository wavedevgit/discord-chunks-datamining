/** Chunk was on web.js **/
/** chunk id: 584904, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk946356 = require("./946356.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk380297 = require("./380297.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = A(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let v = Chunk64700.forwardRef(function(e, t) {
  let [n, ...i] = [e, t], {
    children: a,
    className: g,
    profileModalScrollTarget: b,
    onAction: A,
    onClose: v,
    "aria-label": S,
    "aria-labelledby": I
  } = n, T = O(n, ["children", "className", "profileModalScrollTarget", "onAction", "onClose", "aria-label", "aria-labelledby"]), [C] = i, {
    themeType: N
  } = (0, f.E)(), {
    analyticsLocations: R
  } = (0, l.Ay)(), {
    context: w
  } = (0, c.NJ)();
  return N === _.d.MODAL || N === _.d.MODAL_V2 || (null == w ? true : w.userId) == null ? (0, r.jsx)("article", {
    "aria-label": S,
    "aria-labelledby": I,
    children: (0, r.jsx)(d.A.Overlay, y(E({
      ref: C,
      className: s()(m.Nr, g)
    }, T), {
      children: a
    }))
  }) : (0, r.jsx)("article", {
    "aria-labelledby": I,
    children: (0, r.jsx)(o.sqX, {
      className: m.OV,
      "aria-label": h.intl.string(h.t.pD1L1u),
      focusProps: {
        ringTarget: C
      },
      onClick: () => {
        null == A || A({
          action: "PRESS_CARD"
        }), (0, u.openUserProfileModal)(E({
          tabSection: p.RP.ACTIVITY,
          sourceAnalyticsLocations: R,
          scrollTarget: b
        }, w)), null == v || v()
      },
      children: (0, r.jsx)(d.A.Overlay, y(E({
        ref: C,
        className: s()(m.Nr, g)
      }, T), {
        children: a
      }))
    })
  })
})