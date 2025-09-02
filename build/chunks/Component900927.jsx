/** Chunk was on 62987 **/
/** chunk id: 900927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let {
    userId: t,
    guildId: n,
    textClassName: g,
    tooltipDelay: b
  } = e, y = (0, i.e7)([s.default], () => s.default.locale), _ = (0, i.e7)([u.Z], () => null != n ? u.Z.getGuild(n) : null), C = (0, i.e7)([c.ZP], () => null != n ? c.ZP.getMember(n, t) : null), x = (0, a.FI)(d.default.extractTimestamp(t), y), v = (0, a.FI)(null == C ? true : C.joinedAt, y);
  return null == _ || null == C ? (0, r.jsx)(l.Text, {
    variant: "text-sm/normal",
    className: g,
    children: x
  }) : (0, r.jsxs)("div", {
    className: h.memberSinceWrapper,
    children: [(0, r.jsxs)("div", {
      className: h.memberSince,
      children: [(0, r.jsx)(l.ua7, {
        text: p.intl.string(p.t.uvGmCw),
        delay: b,
        children: e => (0, r.jsx)(l.gw7, m(f({
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor"
        }, e), {
          className: h.discordIcon
        }))
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: g,
        children: x
      })]
    }), (0, r.jsx)("div", {
      className: h.divider
    }), (0, r.jsxs)("div", {
      className: h.memberSince,
      children: [(0, r.jsx)(l.ua7, {
        text: _.name,
        delay: b,
        children: e => (0, r.jsx)(o.Z, m(f({}, e), {
          guild: _,
          size: o.Z.Sizes.SMOL,
          className: h.guildIcon
        }))
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: g,
        children: v
      })]
    })]
  })
}