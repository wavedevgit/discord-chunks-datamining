/** Chunk was on web.js **/
/** chunk id: 942951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk756715 = require("./756715.jsx"),
  Chunk573385 = require("./573385.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk402235 = require("./402235.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk91047 = require("./91047.jsx"),
  Chunk392819 = require("./392819.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function S(e, t) {
  return i.useCallback(n => {
    let r = h.Z.getChannel(t);
    null != r && null != e && (0, m.Pv)(n, e, r)
  }, [e, t])
}

function T(e) {
  let {
    user: t,
    channelId: n,
    guildId: h,
    messageId: m,
    stopPropagation: E = false,
    ariaLabel: y,
    enableDisplayNameStyles: I = false
  } = e, T = i.useRef(null), {
    analyticsLocations: A
  } = (0, c.ZP)(l.Z.USERNAME), C = (0, _.ZP)(h, null == t ? true : t.id), N = (0, f.j)({
    displayNameStyles: null == t ? true : t.displayNameStyles
  }), R = S(t, n), P = i.useContext(o.d);
  return (0, g.Z)({
    subscribeToGroupId: m,
    authorId: null == t ? true : t.id,
    shouldSubscribe: I && (null == t ? true : t.displayNameStyles) != null && null == h
  }), i.useCallback(e => (i, o) => {
    let l = null == e ? true : e.colorStrings,
      f = C && null != l && null != l.primaryColor && null != l.secondaryColor,
      _ = (t, n) => {
        var o, c, _;
        if (!I || (null == e ? true : e.displayNameStyles) == null || null != h) return (0, r.jsx)(s.rz2, O(b({}, null != t ? t : {}), {
          ref: T,
          onContextMenu: R,
          name: null != (c = (0, s.qgQ)(i)) ? c : "",
          colorString: null != (_ = null == e ? true : e.colorString) ? _ : null,
          roleName: null == e ? true : e.colorRoleName,
          colorStrings: f ? l : null,
          "aria-label": y,
          className: N
        }));
        {
          let l = (null == P ? true : P.animate) || (null == n ? true : n.isShown) ? u.F.ANIMATED : u.F.PLAIN;
          return (0, r.jsx)(a.Anchor, O(b({}, null != t ? t : {}), {
            ref: T,
            onContextMenu: R,
            "aria-label": y,
            children: (0, r.jsx)(d.Z, {
              userName: null != (o = (0, s.qgQ)(i)) ? o : "",
              displayNameStyles: null == e ? true : e.displayNameStyles,
              effectDisplayType: l,
              shouldUnderlineOnHover: true,
              loop: true
            })
          }))
        }
      },
      g = e => t => {
        E && null != t && t.stopPropagation(), e(t)
      };
    return (0, r.jsx)(c.Gt, {
      value: A,
      children: null != t ? (0, r.jsx)(p.Z, {
        targetElementRef: T,
        user: t,
        guildId: h,
        channelId: n,
        messageId: m,
        roleId: null == e ? true : e.colorRoleId,
        clickTrap: true,
        children: (e, t) => {
          var {
            onClick: n
          } = e, r = v(e, ["onClick"]);
          return _(b({
            onClick: g(n)
          }, r), t)
        }
      }) : _(true, true)
    }, o)
  }, [A, t, n, h, m, R, E, y, C, N, null == P ? true : P.animate, I])
}