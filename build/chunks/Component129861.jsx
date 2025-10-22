/** Chunk was on web.js **/
/** chunk id: 129861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk385499 = require("./385499.jsx"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk813549 = require("./813549.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk497238 = require("./497238.js");

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
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e) {
  return e.isSystemUser() ? f.J.SYSTEM_DM : e.bot ? f.J.BOT : null
}
let v = e => {
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
      displayNameStyles: E,
      displayNameStylesType: b
    } = e, y = (0, c.Y)({
      location: "DiscordTag"
    });
    return (0, r.jsxs)("div", {
      className: a()(m.info, {
        [m.withDisplayNameStyles]: y && null != E
      }, f),
      children: [(0, r.jsx)(s.u, {
        text: h.intl.string(h.t.Br1ls3),
        shouldShow: g,
        "aria-label": !!g && true,
        children: (0, r.jsx)("span", {
          className: a()(m.__invalid_username, _),
          children: null != E ? (0, r.jsx)(d.Z, {
            userName: t,
            displayNameStyles: E,
            effectDisplayType: b
          }) : t
        })
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
  I = e => {
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
    } = e, m = b(e, ["user", "nick", "forceUsername", "showAccountIdentifier", "overrideDiscriminator", "forcePomelo", "hideBotTag", "hideDiscriminator", "displayNameStylesType"]);
    let g = (0, o.e7)([_.Z], () => _.Z.hidePersonalInformation),
      y = g || d || t.isNonUserBot(),
      I = t.toString(),
      T = c ? null : O(t),
      S = t.isVerifiedBot(),
      A = p.ZP.getName(t),
      C = i ? I : null != n ? n : A,
      N = t.hasUniqueUsername() || l;
    if (N || C !== I) {
      let e = C === I && N && i ? p.ZP.getUserTag(t, {
          forcePomelo: l
        }) : C,
        n = a && e !== "@".concat(I) ? p.ZP.getUserTag(t) : true;
      return (0, r.jsx)(v, E({
        primary: e,
        secondary: n,
        botType: T,
        botVerified: S,
        showStreamerModeTooltip: g && p.ZP.isNameConcealed(e),
        displayNameStyles: C !== I ? t.displayNameStyles : null,
        displayNameStylesType: h
      }, m))
    }
    return (0, r.jsx)(f.Z, E({
      name: C,
      botType: T,
      botVerified: S,
      discriminator: y || C !== I ? null : null != s ? s : t.discriminator
    }, m))
  }