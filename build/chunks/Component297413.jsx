/** Chunk was on web.js **/
/** chunk id: 297413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk709066 = require("./709066.jsx"),
  Chunk824994 = require("./824994.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk270574 = require("./270574.jsx"),
  Chunk351906 = require("./351906.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk479117 = require("./479117.js");

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

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function O(e) {
  return e.isSystemUser() ? f.v.SYSTEM_DM : e.bot ? f.v.BOT : null
}
let v = e => {
    let {
      primary: t,
      secondary: n,
      botType: i,
      botVerified: o,
      discriminatorClass: u,
      className: f,
      usernameClass: p,
      botClass: _,
      showStreamerModeTooltip: g,
      displayNameStyles: E,
      displayNameStylesType: y
    } = e, b = (0, c.W)({
      location: "DiscordTag"
    });
    return (0, r.jsxs)("div", {
      className: a()(m.pq, {
        [m.e8]: b && null != E
      }, f),
      children: [(0, r.jsx)(s.m, {
        text: h.intl.string(h.t.Br1ls3),
        shouldShow: g,
        "aria-label": !!g && true,
        children: (0, r.jsx)("span", {
          className: a()(m.__invalid_username, p),
          children: null != E ? (0, r.jsx)(d.A, {
            userName: t,
            displayNameStyles: E,
            effectDisplayType: y
          }) : t
        })
      }), null != n ? (0, r.jsx)("span", {
        className: a()(m.ok, u),
        children: n
      }) : true, null != i && (0, r.jsx)(l.A, {
        type: i,
        className: a()(m.ok, _),
        verified: o
      })]
    })
  },
  A = e => {
    let {
      user: t,
      nick: n,
      forceUsername: i,
      showAccountIdentifier: a,
      overrideDiscriminator: s,
      forcePomelo: l,
      hideBotTag: c = false,
      hideDiscriminator: d = false,
      displayNameStylesType: h = u.G.PLAIN
    } = e, m = y(e, ["user", "nick", "forceUsername", "showAccountIdentifier", "overrideDiscriminator", "forcePomelo", "hideBotTag", "hideDiscriminator", "displayNameStylesType"]), g = (0, o.bG)([p.A], () => p.A.hidePersonalInformation), b = g || d || t.isNonUserBot(), A = t.toString(), I = c ? null : O(t), S = t.isVerifiedBot(), T = _.Ay.getName(t), C = i ? A : null != n ? n : T, N = t.hasUniqueUsername() || l;
    if (N || C !== A) {
      let e = C === A && N && i ? _.Ay.getUserTag(t, {
          forcePomelo: l
        }) : C,
        n = a && e !== "@".concat(A) ? _.Ay.getUserTag(t) : true;
      return (0, r.jsx)(v, E({
        primary: e,
        secondary: n,
        botType: I,
        botVerified: S,
        showStreamerModeTooltip: g && _.Ay.isNameConcealed(e),
        displayNameStyles: C !== A ? t.displayNameStyles : null,
        displayNameStylesType: h
      }, m))
    }
    return (0, r.jsx)(f.A, E({
      name: C,
      botType: I,
      botVerified: S,
      discriminator: b || C !== A ? null : null != s ? s : t.discriminator
    }, m))
  }