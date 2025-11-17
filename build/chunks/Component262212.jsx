/** Chunk was on 65354 **/
/** chunk id: 262212, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => j,
  ms: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk10765 = require("./10765.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk880419 = require("./880419.jsx"),
  Chunk827397 = require("./827397.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk18853 = require("./18853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk292609 = require("./292609.js");

function b() {
  return (b = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function _(e) {
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

function y(e) {
  let {
    className: t,
    guildId: n,
    powerup: i,
    onClick: a
  } = e, s = (0, d.Z)(n, i), {
    onShowMore: c
  } = (0, p.ZP)(n, i), u = f.uc.has(i.skuId);
  return (0, r.jsx)("div", {
    className: l()(m.primaryButton, t),
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      fullWidth: true,
      text: u ? g.intl.string(h.default.g5Ds69) : g.intl.string(g.t["0Q61kF"]),
      onClick: e => {
        null == a || a(e), u ? null == s || s(e) : null == c || c()
      }
    })
  })
}

function O(e) {
  let {
    className: t,
    guildId: n,
    powerup: i
  } = e, {
    onShowMore: a
  } = (0, p.ZP)(n, i);
  return (0, r.jsx)("div", {
    className: l()(m.container, t),
    children: (0, r.jsx)("div", {
      className: m.primaryButton,
      children: (0, r.jsx)(o.zxk, {
        variant: "primary",
        fullWidth: true,
        text: i.type === f.Us.LEVEL ? g.intl.string(g.t["0Q61kF"]) : g.intl.string(g.t.Xa11Ep),
        onClick: a
      })
    })
  })
}

function v(e) {
  let {
    className: t,
    guildId: n,
    powerup: i,
    onError: o
  } = e, s = (0, c.ZP)(n, i).type !== f.A3.INACTIVE, d = (0, a.Z)(n, i, "GuildPowerupCardFooterAdmin"), p = s || !d, h = !s;
  return (0, r.jsxs)("div", {
    className: l()(m.container, t),
    children: [p && (0, r.jsx)(u.Z, {
      guildId: n,
      powerup: i,
      onError: o,
      grow: h,
      compact: !h
    }), s && (0, r.jsx)(y, {
      guildId: n,
      powerup: i
    })]
  })
}

function j(e) {
  var t = b({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, s.Z)(t.guildId) ? (0, r.jsx)(v, _({}, t)) : (0, r.jsx)(O, _({}, t))
}