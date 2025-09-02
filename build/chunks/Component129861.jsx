/** Chunk was on web.js **/
/** chunk id: 129861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk813549 = require("./813549.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk739406 = require("./739406.js");

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
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function I(e) {
  return e.isSystemUser() ? f.J.SYSTEM_DM : e.bot ? f.J.BOT : null
}
let S = e => {
    let {
      primary: t,
      secondary: n,
      botType: i,
      botVerified: o,
      discriminatorClass: u,
      className: f,
      usernameClass: _,
      botClass: p,
      showStreamerModeTooltip: g,
      displayNameStyles: b,
      displayNameStylesType: O
    } = e, v = (0, c.Y)({
      location: "DiscordTag"
    });
    return (0, r.jsxs)("div", {
      className: a()(m.info, {
        [m.withDisplayNameStyles]: v && null != b
      }, f),
      children: [(0, r.jsx)(s.ua7, {
        text: h.intl.string(h.t.Br1ls7),
        shouldShow: g,
        "aria-label": !!g && true,
        children: e => (0, r.jsx)("span", y(E({}, e), {
          className: a()(m.__invalid_username, _),
          children: null != b ? (0, r.jsx)(d.Z, {
            userName: t,
            displayNameStyles: b,
            effectDisplayType: O
          }) : t
        }))
      }), null != n ? (0, r.jsx)("span", {
        className: a()(m.infoSpacing, u),
        children: n
      }) : true, null != i && (0, r.jsx)(l.Z, {
        type: i,
        className: a()(m.infoSpacing, p),
        verified: o
      })]
    })
  },
  T = e => {
    var {
      user: t,
      nick: n,
      forceUsername: i,
      showAccountIdentifier: a,
      overrideDiscriminator: s,
      forcePomelo: l,
      hideBotTag: c = false,
      hideDiscriminator: d = false,
      displayNameStylesType: h = u.F.PLAIN
    } = e, m = O(e, ["user", "nick", "forceUsername", "showAccountIdentifier", "overrideDiscriminator", "forcePomelo", "hideBotTag", "hideDiscriminator", "displayNameStylesType"]);
    let g = (0, o.e7)([_.Z], () => _.Z.hidePersonalInformation),
      b = g || d || t.isNonUserBot(),
      y = t.toString(),
      v = c ? null : I(t),
      T = t.isVerifiedBot(),
      A = p.ZP.getName(t),
      C = i ? y : null != n ? n : A,
      N = t.hasUniqueUsername() || l;
    if (N || C !== y) {
      let e = C === y && N && i ? p.ZP.getUserTag(t, {
          forcePomelo: l
        }) : C,
        n = a && e !== "@".concat(y) ? p.ZP.getUserTag(t) : true;
      return (0, r.jsx)(S, E({
        primary: e,
        secondary: n,
        botType: v,
        botVerified: T,
        showStreamerModeTooltip: g && p.ZP.isNameConcealed(e),
        displayNameStyles: C !== y ? t.displayNameStyles : null,
        displayNameStylesType: h
      }, m))
    }
    return (0, r.jsx)(f.Z, E({
      name: C,
      botType: v,
      botVerified: T,
      discriminator: b || C !== y ? null : null != s ? s : t.discriminator
    }, m))
  }