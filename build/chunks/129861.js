/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => O
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(442837),
  s = n(481060),
  l = n(385499),
  c = n(813549),
  u = n(246946),
  d = n(51144),
  f = n(388032),
  _ = n(987596);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
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

function b(e) {
  return e.isSystemUser() ? c.J.SYSTEM_DM : e.isClyde() ? c.J.AI : e.bot ? c.J.BOT : null
}
let y = e => {
    let {
      primary: t,
      secondary: n,
      botType: i,
      botVerified: a,
      discriminatorClass: c,
      className: u,
      usernameClass: d,
      color: p,
      botClass: g,
      showStreamerModeTooltip: E
    } = e;
    return (0, r.jsxs)("div", {
      className: o()(_.info, u),
      children: [(0, r.jsx)(s.ua7, {
        text: f.NW.string(f.t.Br1ls7),
        shouldShow: E,
        "aria-label": !!E && void 0,
        children: e => (0, r.jsx)("span", m(h({}, e), {
          className: o()(_.__invalid_username, d),
          style: null != p ? {
            color: p
          } : void 0,
          children: t
        }))
      }), null != n ? (0, r.jsx)("span", {
        className: o()(_.infoSpacing, c),
        children: n
      }) : void 0, null != i && (0, r.jsx)(l.Z, {
        type: i,
        className: o()(_.infoSpacing, g),
        verified: a
      })]
    })
  },
  O = e => {
    var {
      user: t,
      nick: n,
      forceUsername: i,
      showAccountIdentifier: o,
      overrideDiscriminator: s,
      forcePomelo: l,
      hideBotTag: f = !1,
      hideDiscriminator: _ = !1
    } = e, p = E(e, ["user", "nick", "forceUsername", "showAccountIdentifier", "overrideDiscriminator", "forcePomelo", "hideBotTag", "hideDiscriminator"]);
    let g = (0, a.e7)([u.Z], () => u.Z.hidePersonalInformation),
      m = g || _ || t.isNonUserBot(),
      v = t.toString(),
      O = f ? null : b(t),
      S = t.isVerifiedBot(),
      I = d.ZP.getName(t),
      T = i ? v : null != n ? n : I,
      N = t.isPomelo() || l;
    if (N || T !== v) {
      let e = T === v && N && i ? d.ZP.getUserTag(t, {
          forcePomelo: l
        }) : T,
        n = o && e !== "@".concat(v) ? d.ZP.getUserTag(t) : void 0;
      return (0, r.jsx)(y, h({
        primary: e,
        secondary: n,
        botType: O,
        botVerified: S,
        showStreamerModeTooltip: g && d.ZP.isNameConcealed(e)
      }, p))
    }
    return (0, r.jsx)(c.Z, h({
      name: T,
      botType: O,
      botVerified: S,
      discriminator: m || T !== v ? null : null != s ? s : t.discriminator
    }, p))
  }