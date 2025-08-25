/** Chunk was on web.js **/
/** chunk id: 942951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk402235 = require("./402235.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk91047 = require("./91047.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e, t) {
  return i.useCallback(n => {
    let r = d.Z.getChannel(t);
    null != r && null != e && (0, f.Pv)(n, e, r)
  }, [e, t])
}

function y(e) {
  let {
    user: t,
    channelId: n,
    guildId: d,
    messageId: f,
    stopPropagation: _ = false,
    ariaLabel: h
  } = e, E = i.useRef(null), {
    analyticsLocations: y
  } = (0, s.ZP)(a.Z.USERNAME), O = (0, c.ZP)(d, null == t ? true : t.id), v = (0, l.j)({
    displayNameStyles: null == t ? true : t.displayNameStyles
  }), I = b(t, n);
  return i.useCallback(e => (i, a) => {
    let l = null == e ? true : e.colorStrings,
      c = O && null != l && null != l.primaryColor && null != l.secondaryColor,
      b = t => {
        var n;
        return (0, r.jsx)(o.rz2, m(p({}, null != t ? t : {}), {
          ref: E,
          onContextMenu: I,
          name: (0, o.qgQ)(i),
          colorString: null != (n = null == e ? true : e.colorString) ? n : null,
          roleName: null == e ? true : e.colorRoleName,
          colorStrings: c ? l : null,
          "aria-label": h,
          className: v
        }))
      },
      T = e => t => {
        _ && null != t && t.stopPropagation(), e(t)
      };
    return (0, r.jsx)(s.Gt, {
      value: y,
      children: null != t ? (0, r.jsx)(u.Z, {
        targetElementRef: E,
        user: t,
        guildId: d,
        channelId: n,
        messageId: f,
        roleId: null == e ? true : e.colorRoleId,
        clickTrap: true,
        children: e => {
          var {
            onClick: t
          } = e, n = g(e, ["onClick"]);
          return b(p({
            onClick: T(t)
          }, n))
        }
      }) : b(true)
    }, a)
  }, [y, t, n, d, f, I, _, h, O, v])
}