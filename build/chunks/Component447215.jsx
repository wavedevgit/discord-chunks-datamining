/** Chunk was on web.js **/
/** chunk id: 447215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk349288 = require("./349288.jsx"),
  Chunk473193 = require("./473193.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk609425 = require("./609425.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk73392 = require("./73392.js"),
  Chunk676608 = require("./676608.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk841549 = require("./841549.jsx"),
  Chunk560936 = require("./560936.js");

function y(e, t, n) {
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
      y(e, t, n[t])
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

function A(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = I(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function S(e, t) {
  return i.useCallback(n => {
    let r = m.A.getChannel(t);
    null != r && null != e && (0, g.wQ)(n, e, r)
  }, [e, t])
}

function T(e) {
  let {
    user: t,
    channelId: n,
    guildId: m,
    messageId: g,
    stopPropagation: y = false,
    ariaLabel: O,
    enableDisplayNameStyles: I = false
  } = e, T = i.useRef(null), {
    analyticsLocations: C
  } = (0, c.Ay)(l.A.USERNAME), N = (0, _.Ay)(m, null == t ? true : t.id), w = (0, u.A)({
    userId: null == t ? true : t.id,
    guildId: m
  }), R = (0, p.a)({
    displayNameStyles: w
  }), P = S(t, n), D = i.useContext(s.C);
  return (0, E.A)({
    subscribeToGroupId: g,
    authorId: null == t ? true : t.id,
    shouldSubscribe: I && null != w && null == m
  }), i.useCallback(e => (i, s) => {
    let l = null == e ? true : e.colorStrings,
      u = N && null != l && null != l.primaryColor && null != l.secondaryColor,
      p = (t, n) => {
        var s, c, p;
        if (!I || null == w || null != m) return (0, r.jsx)(o.V30, v(b({}, null != t ? t : {}), {
          ref: T,
          onContextMenu: P,
          name: null != (c = (0, o.Oer)(i)) ? c : "",
          colorString: null != (p = null == e ? true : e.colorString) ? p : null,
          roleName: null == e ? true : e.colorRoleName,
          colorStrings: u ? l : null,
          "aria-label": O,
          className: R
        }));
        {
          let e = (null == D ? true : D.animate) || (null == n ? true : n.isShown) ? d.G.ANIMATED : d.G.PLAIN;
          return (0, r.jsx)(a.Anchor, v(b({}, null != t ? t : {}), {
            ref: T,
            onContextMenu: P,
            "aria-label": O,
            children: (0, r.jsx)(f.A, {
              userName: null != (s = (0, o.Oer)(i)) ? s : "",
              displayNameStyles: w,
              effectDisplayType: e,
              shouldUnderlineOnHover: true,
              loop: true
            })
          }))
        }
      },
      _ = e => t => {
        y && null != t && t.stopPropagation(), e(t)
      };
    return (0, r.jsx)(c.f5, {
      value: C,
      children: null != t ? (0, r.jsx)(h.A, {
        targetElementRef: T,
        user: t,
        guildId: m,
        channelId: n,
        messageId: g,
        roleId: null == e ? true : e.colorRoleId,
        clickTrap: true,
        children: (e, t) => {
          let [n, ...r] = [e, t], {
            onClick: i
          } = n, a = A(n, ["onClick"]), [s] = r;
          return p(b({
            onClick: _(i)
          }, a), s)
        }
      }) : p(true, true)
    }, s)
  }, [C, t, n, m, g, P, y, O, N, R, null == D ? true : D.animate, w, I])
}