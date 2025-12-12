/** Chunk was on web.js **/
/** chunk id: 942951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function S(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function T(e, t) {
  return i.useCallback(n => {
    let r = h.Z.getChannel(t);
    null != r && null != e && (0, g.Pv)(n, e, r)
  }, [e, t])
}

function C(e) {
  let {
    user: t,
    channelId: n,
    guildId: h,
    messageId: g,
    stopPropagation: b = false,
    ariaLabel: O,
    enableDisplayNameStyles: I = false
  } = e, C = i.useRef(null), {
    analyticsLocations: A
  } = (0, c.ZP)(l.Z.USERNAME), N = (0, _.ZP)(h, null == t ? true : t.id), P = (0, u.Z)({
    userId: null == t ? true : t.id,
    guildId: h
  }), R = (0, p.j)({
    displayNameStyles: P
  }), w = T(t, n), D = i.useContext(a.d);
  return (0, E.Z)({
    subscribeToGroupId: g,
    authorId: null == t ? true : t.id,
    shouldSubscribe: I && null != P && null == h
  }), i.useCallback(e => (i, a) => {
    let l = null == e ? true : e.colorStrings,
      u = N && null != l && null != l.primaryColor && null != l.secondaryColor,
      p = (t, n) => {
        var a, c, p;
        if (!I || null == P || null != h) return (0, r.jsx)(s.rz2, v(y({}, null != t ? t : {}), {
          ref: C,
          onContextMenu: w,
          name: null != (c = (0, s.qgQ)(i)) ? c : "",
          colorString: null != (p = null == e ? true : e.colorString) ? p : null,
          roleName: null == e ? true : e.colorRoleName,
          colorStrings: u ? l : null,
          "aria-label": O,
          className: R
        }));
        {
          let e = (null == D ? true : D.animate) || (null == n ? true : n.isShown) ? d.F.ANIMATED : d.F.PLAIN;
          return (0, r.jsx)(o.Anchor, v(y({}, null != t ? t : {}), {
            ref: C,
            onContextMenu: w,
            "aria-label": O,
            children: (0, r.jsx)(f.Z, {
              userName: null != (a = (0, s.qgQ)(i)) ? a : "",
              displayNameStyles: P,
              effectDisplayType: e,
              shouldUnderlineOnHover: true,
              loop: true
            })
          }))
        }
      },
      _ = e => t => {
        b && null != t && t.stopPropagation(), e(t)
      };
    return (0, r.jsx)(c.Gt, {
      value: A,
      children: null != t ? (0, r.jsx)(m.Z, {
        targetElementRef: C,
        user: t,
        guildId: h,
        channelId: n,
        messageId: g,
        roleId: null == e ? true : e.colorRoleId,
        clickTrap: true,
        children: (e, t) => {
          var {
            onClick: n
          } = e, r = S(e, ["onClick"]);
          return p(y({
            onClick: _(n)
          }, r), t)
        }
      }) : p(true, true)
    }, a)
  }, [A, t, n, h, g, w, b, O, N, R, null == D ? true : D.animate, P, I])
}