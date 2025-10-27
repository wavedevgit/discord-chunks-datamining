/** Chunk was on web.js **/
/** chunk id: 942951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk756715 = require("./756715.jsx"),
  Chunk573385 = require("./573385.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk386725 = require("./386725.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk402235 = require("./402235.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk91047 = require("./91047.jsx"),
  Chunk392819 = require("./392819.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function S(e, t) {
  return i.useCallback(n => {
    let r = m.Z.getChannel(t);
    null != r && null != e && (0, g.Pv)(n, e, r)
  }, [e, t])
}

function A(e) {
  let {
    user: t,
    channelId: n,
    guildId: m,
    messageId: g,
    stopPropagation: b = false,
    ariaLabel: O,
    enableDisplayNameStyles: T = false
  } = e, A = i.useRef(null), {
    analyticsLocations: C
  } = (0, c.ZP)(l.Z.USERNAME), N = (0, p.ZP)(m, null == t ? true : t.id), R = (0, u.Z)({
    userId: null == t ? true : t.id,
    guildId: m
  }), P = (0, _.j)({
    displayNameStyles: R
  }), D = S(t, n), w = i.useContext(o.d);
  return (0, E.Z)({
    subscribeToGroupId: g,
    authorId: null == t ? true : t.id,
    shouldSubscribe: T && null != R && null == m
  }), i.useCallback(e => (i, o) => {
    let l = null == e ? true : e.colorStrings,
      u = N && null != l && null != l.primaryColor && null != l.secondaryColor,
      _ = (t, n) => {
        var o, c, _;
        if (!T || null == R || null != m) return (0, r.jsx)(s.rz2, v(y({}, null != t ? t : {}), {
          ref: A,
          onContextMenu: D,
          name: null != (c = (0, s.qgQ)(i)) ? c : "",
          colorString: null != (_ = null == e ? true : e.colorString) ? _ : null,
          roleName: null == e ? true : e.colorRoleName,
          colorStrings: u ? l : null,
          "aria-label": O,
          className: P
        }));
        {
          let e = (null == w ? true : w.animate) || (null == n ? true : n.isShown) ? d.F.ANIMATED : d.F.PLAIN;
          return (0, r.jsx)(a.Anchor, v(y({}, null != t ? t : {}), {
            ref: A,
            onContextMenu: D,
            "aria-label": O,
            children: (0, r.jsx)(f.Z, {
              userName: null != (o = (0, s.qgQ)(i)) ? o : "",
              displayNameStyles: R,
              effectDisplayType: e,
              shouldUnderlineOnHover: true,
              loop: true
            })
          }))
        }
      },
      p = e => t => {
        b && null != t && t.stopPropagation(), e(t)
      };
    return (0, r.jsx)(c.Gt, {
      value: C,
      children: null != t ? (0, r.jsx)(h.Z, {
        targetElementRef: A,
        user: t,
        guildId: m,
        channelId: n,
        messageId: g,
        roleId: null == e ? true : e.colorRoleId,
        clickTrap: true,
        children: (e, t) => {
          var {
            onClick: n
          } = e, r = I(e, ["onClick"]);
          return _(y({
            onClick: p(n)
          }, r), t)
        }
      }) : _(true, true)
    }, o)
  }, [C, t, n, m, g, D, b, O, N, P, null == w ? true : w.animate, R, T])
}