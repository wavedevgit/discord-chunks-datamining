/** Chunk was on 70928 **/
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
  Chunk143144 = require("./143144.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), o.forEach(function(t) {
      var o;
      o = n[t], t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = o
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n.push.apply(n, o)
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
  } = e, x = (0, c.e7)([_.default], () => _.default.locale), v = (0, c.e7)([d.Z], () => null != n ? d.Z.getGuild(n) : null), C = (0, c.e7)([l.ZP], () => null != n ? l.ZP.getMember(n, t) : null), I = (0, r.FI)(s.default.extractTimestamp(t), x), y = (0, r.FI)(null == C ? true : C.joinedAt, x);
  return null == v || null == C ? (0, o.jsx)(a.Text, {
    variant: "text-sm/normal",
    className: b,
    children: I
  }) : (0, o.jsxs)("div", {
    className: f.memberSinceWrapper,
    children: [(0, o.jsxs)("div", {
      className: f.memberSince,
      children: [(0, o.jsx)(a.ua7, {
        text: u.intl.string(u.t.uvGmCw),
        delay: g,
        children: e => (0, o.jsx)(a.gw7, m(p({
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor"
        }, e), {
          className: f.discordIcon
        }))
      }), (0, o.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: b,
        children: I
      })]
    }), (0, o.jsx)("div", {
      className: f.divider
    }), (0, o.jsxs)("div", {
      className: f.memberSince,
      children: [(0, o.jsx)(a.ua7, {
        text: v.name,
        delay: g,
        children: e => (0, o.jsx)(i.Z, m(p({}, e), {
          guild: v,
          size: i.Z.Sizes.SMOL,
          className: f.guildIcon
        }))
      }), (0, o.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: b,
        children: y
      })]
    })]
  })
}