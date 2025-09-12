/** Chunk was on 63875 **/
/** chunk id: 900927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk275759 = require("./275759.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk709054 = require("./709054.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk131806 = require("./131806.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    userId: t,
    guildId: n,
    textClassName: b,
    tooltipDelay: g
  } = e, v = (0, r.e7)([c.default], () => c.default.locale), x = (0, r.e7)([s.Z], () => null != n ? s.Z.getGuild(n) : null), C = (0, r.e7)([d.ZP], () => null != n ? d.ZP.getMember(n, t) : null), h = (0, o.FI)(_.default.extractTimestamp(t), v), y = (0, o.FI)(null == C ? true : C.joinedAt, v);
  return null == x || null == C ? (0, a.jsx)(i.Text, {
    variant: "text-sm/normal",
    className: b,
    children: h
  }) : (0, a.jsxs)("div", {
    className: m.memberSinceWrapper,
    children: [(0, a.jsxs)("div", {
      className: m.memberSince,
      children: [(0, a.jsx)(i.ua7, {
        text: u.intl.string(u.t.uvGmCw),
        delay: g,
        children: e => (0, a.jsx)(i.gw7, p(f({
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor"
        }, e), {
          className: m.discordIcon
        }))
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        className: b,
        children: h
      })]
    }), (0, a.jsx)("div", {
      className: m.divider
    }), (0, a.jsxs)("div", {
      className: m.memberSince,
      children: [(0, a.jsx)(i.ua7, {
        text: x.name,
        delay: g,
        children: e => (0, a.jsx)(l.Z, p(f({}, e), {
          guild: x,
          size: l.Z.Sizes.SMOL,
          className: m.guildIcon
        }))
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        className: b,
        children: y
      })]
    })]
  })
}