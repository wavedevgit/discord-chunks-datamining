/** Chunk was on 16459 **/
/** chunk id: 900927, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk275759 = require("./275759.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk709054 = require("./709054.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209643 = require("./209643.js");

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

function m(e, t) {
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
  } = e, O = (0, i.e7)([o.default], () => o.default.locale), y = (0, i.e7)([u.Z], () => null != r ? u.Z.getGuild(r) : null), g = (0, i.e7)([c.ZP], () => null != r ? c.ZP.getMember(r, t) : null), x = (0, l.FI)(d.default.extractTimestamp(t), O), h = (0, l.FI)(null == g ? true : g.joinedAt, O);
  return null == y || null == g ? (0, n.jsx)(a.Text, {
    variant: "text-sm/normal",
    className: j,
    children: x
  }) : (0, n.jsxs)("div", {
    className: f.memberSinceWrapper,
    children: [(0, n.jsxs)("div", {
      className: f.memberSince,
      children: [(0, n.jsx)(a.ua7, {
        text: p.intl.string(p.t.uvGmCw),
        delay: v,
        children: e => (0, n.jsx)(a.gw7, m(b({
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor"
        }, e), {
          className: f.discordIcon
        }))
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: j,
        children: x
      })]
    }), (0, n.jsx)("div", {
      className: f.divider
    }), (0, n.jsxs)("div", {
      className: f.memberSince,
      children: [(0, n.jsx)(a.ua7, {
        text: y.name,
        delay: v,
        children: e => (0, n.jsx)(s.Z, m(b({}, e), {
          guild: y,
          size: s.Z.Sizes.SMOL,
          className: f.guildIcon
        }))
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: j,
        children: h
      })]
    })]
  })
}