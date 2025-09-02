/** Chunk was on 93979 **/
/** chunk id: 900927, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function p(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function x(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function h(e) {
  let {
    userId: n,
    guildId: t,
    textClassName: h,
    tooltipDelay: b
  } = e, j = (0, o.e7)([s.default], () => s.default.locale), v = (0, o.e7)([d.Z], () => null != t ? d.Z.getGuild(t) : null), g = (0, o.e7)([a.ZP], () => null != t ? a.ZP.getMember(t, n) : null), y = (0, i.FI)(u.default.extractTimestamp(n), j), O = (0, i.FI)(null == g ? true : g.joinedAt, j);
  return null == v || null == g ? (0, l.jsx)(r.Text, {
    variant: "text-sm/normal",
    className: h,
    children: y
  }) : (0, l.jsxs)("div", {
    className: f.memberSinceWrapper,
    children: [(0, l.jsxs)("div", {
      className: f.memberSince,
      children: [(0, l.jsx)(r.ua7, {
        text: m.intl.string(m.t.uvGmCw),
        delay: b,
        children: e => (0, l.jsx)(r.gw7, x(p({
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor"
        }, e), {
          className: f.discordIcon
        }))
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        className: h,
        children: y
      })]
    }), (0, l.jsx)("div", {
      className: f.divider
    }), (0, l.jsxs)("div", {
      className: f.memberSince,
      children: [(0, l.jsx)(r.ua7, {
        text: v.name,
        delay: b,
        children: e => (0, l.jsx)(c.Z, x(p({}, e), {
          guild: v,
          size: c.Z.Sizes.SMOL,
          className: f.guildIcon
        }))
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        className: h,
        children: O
      })]
    })]
  })
}