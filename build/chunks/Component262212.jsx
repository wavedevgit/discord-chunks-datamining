/** Chunk was on 83037 **/
/** chunk id: 262212, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => v,
  ms: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk686866 = require("./686866.js"),
  Chunk639777 = require("./639777.js"),
  Chunk880419 = require("./880419.jsx"),
  Chunk827397 = require("./827397.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk810878 = require("./810878.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk292609 = require("./292609.js");

function m() {
  return (m = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function b(e) {
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

function _(e) {
  let {
    className: t,
    guildId: n,
    powerup: i,
    onClick: a
  } = e, s = (0, u.Z)(n, i), {
    onShowMore: c
  } = (0, d.ZP)(n, i), m = f.uc.has(i.skuId);
  return (0, r.jsx)("div", {
    className: l()(g.primaryButton, t),
    children: (0, r.jsx)(o.zxk, {
      variant: "primary",
      fullWidth: true,
      text: m ? p.intl.string(h.default.g5Ds69) : p.intl.string(p.t["0Q61kF"]),
      onClick: e => {
        null == a || a(e), m ? null == s || s(e) : null == c || c()
      }
    })
  })
}

function y(e) {
  let {
    className: t,
    guildId: n,
    powerup: i
  } = e, {
    onShowMore: a
  } = (0, d.ZP)(n, i);
  return (0, r.jsx)("div", {
    className: l()(g.container, t),
    children: (0, r.jsx)("div", {
      className: g.primaryButton,
      children: (0, r.jsx)(o.zxk, {
        variant: "primary",
        fullWidth: true,
        text: i.type === f.Us.LEVEL ? p.intl.string(p.t["0Q61kF"]) : p.intl.string(p.t.Xa11Ep),
        onClick: a
      })
    })
  })
}

function O(e) {
  let {
    className: t,
    guildId: n,
    powerup: i,
    onError: o
  } = e, {
    showToggleButton: s,
    isPowerupActive: u
  } = (0, a.Z)(n, i), d = !u;
  return (0, r.jsxs)("div", {
    className: l()(g.container, t),
    children: [s && (0, r.jsx)(c.Z, {
      guildId: n,
      powerup: i,
      onError: o,
      grow: d,
      compact: !d
    }), u && (0, r.jsx)(_, {
      guildId: n,
      powerup: i
    })]
  })
}

function v(e) {
  var t = m({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, s.Z)(t.guildId) ? (0, r.jsx)(O, b({}, t)) : (0, r.jsx)(y, b({}, t))
}