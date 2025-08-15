/** Chunk was on 1268 **/
/** chunk id: 900927, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function j(e) {
  let {
    userId: t,
    guildId: r,
    textClassName: j,
    tooltipDelay: v
  } = e, x = (0, i.e7)([s.default], () => s.default.locale), y = (0, i.e7)([u.Z], () => null != r ? u.Z.getGuild(r) : null), O = (0, i.e7)([c.ZP], () => null != r ? c.ZP.getMember(r, t) : null), h = (0, l.FI)(d.default.extractTimestamp(t), x), g = (0, l.FI)(null == O ? true : O.joinedAt, x);
  return null == y || null == O ? (0, n.jsx)(a.Text, {
    variant: "text-sm/normal",
    className: j,
    children: h
  }) : (0, n.jsxs)("div", {
    className: p.memberSinceWrapper,
    children: [(0, n.jsxs)("div", {
      className: p.memberSince,
      children: [(0, n.jsx)(a.ua7, {
        text: m.intl.string(m.t.uvGmCw),
        delay: v,
        children: e => (0, n.jsx)(a.gw7, f(b({
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor"
        }, e), {
          className: p.discordIcon
        }))
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: j,
        children: h
      })]
    }), (0, n.jsx)("div", {
      className: p.divider
    }), (0, n.jsxs)("div", {
      className: p.memberSince,
      children: [(0, n.jsx)(a.ua7, {
        text: y.name,
        delay: v,
        children: e => (0, n.jsx)(o.Z, f(b({}, e), {
          guild: y,
          size: o.Z.Sizes.SMOL,
          className: p.guildIcon
        }))
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: j,
        children: g
      })]
    })]
  })
}