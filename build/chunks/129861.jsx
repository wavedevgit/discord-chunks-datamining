/** Chunk was on web.js **/
/** chunk id: 129861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.js"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.js"),
  Chunk813549 = require("./813549.js"),
  Chunk246946 = require("./246946.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.js"),
  Chunk350651 = require("./350651.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function I(e) {
  return e.isSystemUser() ? f.J.SYSTEM_DM : e.bot ? f.J.BOT : null
}
let T = e => {
    let {
      primary: t,
      secondary: n,
      botType: i,
      botVerified: a,
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
    return <div className={o()(m.info, {
        [m.withDisplayNameStyles]: v && null != b
      }, f)}>{<s.ua7 text={h.intl.string(h.t.Br1ls7)} shouldShow={g} aria-label={!!g && true}>{e => (0, r.jsx)("span", y(E({}, e), {
          className: o()(m.__invalid_username, _),
          children: null != b ? (0, r.jsx)(d.Z, {
            userName: t,
            displayNameStyles: b,
            effectDisplayType: O
          }) : t
        }))}</s.ua7>}{null != n ? <span className={o()(m.infoSpacing, u)}>{n}</span> : true}{null != i && <l.Z type={i} className={o()(m.infoSpacing, p)} verified={a} />}</div>
  },
  S = e => {
    var {
      user: t,
      nick: n,
      forceUsername: i,
      showAccountIdentifier: o,
      overrideDiscriminator: s,
      forcePomelo: l,
      hideBotTag: c = false,
      hideDiscriminator: d = false,
      displayNameStylesType: h = u.F.PLAIN
    } = e, m = O(e, ["user", "nick", "forceUsername", "showAccountIdentifier", "overrideDiscriminator", "forcePomelo", "hideBotTag", "hideDiscriminator", "displayNameStylesType"]);
    let g = (0, a.e7)([_.Z], () => _.Z.hidePersonalInformation),
      b = g || d || t.isNonUserBot(),
      y = t.toString(),
      v = c ? null : I(t),
      S = t.isVerifiedBot(),
      A = p.ZP.getName(t),
      N = i ? y : null != n ? n : A,
      C = t.hasUniqueUsername() || l;
    if (C || N !== y) {
      let e = N === y && C && i ? p.ZP.getUserTag(t, {
          forcePomelo: l
        }) : N,
        n = o && e !== "@".concat(y) ? p.ZP.getUserTag(t) : true;
      return <T{...E({
        primary: e,
        secondary: n,
        botType: v,
        botVerified: S,
        showStreamerModeTooltip: g && p.ZP.isNameConcealed(e),
        displayNameStyles: N !== y ? t.displayNameStyles : null,
        displayNameStylesType: h
      }, m)} />
    }
    return <f.Z{...E({
      name: N,
      botType: v,
      botVerified: S,
      discriminator: b || N !== y ? null : null != s ? s : t.discriminator
    }, m)} />
  }