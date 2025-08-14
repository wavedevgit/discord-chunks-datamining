/** Chunk was on web.js **/
/** chunk id: 262746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493773 = require("./493773.js"),
  Chunk946273 = require("./946273.js"),
  Chunk496675 = require("./496675.js"),
  Chunk993706 = require("./993706.js"),
  Chunk796263 = require("./796263.jsx"),
  Chunk764295 = require("./764295.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    channel: t,
    user: m,
    guild: E
  } = e, y = (0, o.e7)([f.Z], () => null != m && f.Z.isUserBanned(m.id)), O = null != m && null == y, [v, I] = i.useState(O), T = (0, o.e7)([d.Z], () => null != m && null != E && (0, u.lD)(m, E, [d.Z]));
  if ((0, c.ZP)(() => {
      O && l.Z.searchGuildBans(t.guild_id, true, [null == m ? true : m.id]).finally(() => I(false))
    }), !T) return null;
  let S = () => {
      null != m && (0, s.ZDy)(async () => {
        let {
          default: e
        } = await n.e("4114").then(n.bind(n, 98746));
        return n => (0, r.jsx)(e, b(g({}, n), {
          guildId: t.guild_id,
          user: m,
          modReportId: t.id
        }))
      })
    },
    A = true === y ? h.intl.string(p.default.dpfwQ0) : h.intl.string(p.default.ASv23d),
    N = "ban-user-".concat(null == m ? true : m.id);
  return (0, r.jsx)(_.Z, {
    text: A,
    icon: s.pgN,
    onClick: S,
    disabled: true === y || v,
    submitting: v,
    color: a.zx.Colors.RED
  }, N)
}