/** Chunk was on 67000 **/
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
  Chunk686866 = require("./686866.js"),
  Chunk639777 = require("./639777.js"),
  Chunk880419 = require("./880419.jsx"),
  Chunk827397 = require("./827397.js"),
  Chunk700092 = require("./700092.js"),
  Chunk535396 = require("./535396.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk475038 = require("./475038.js");

function b() {
  return (b = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function m(e) {
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
    onClick: o
  } = e, s = (0, u.Z)(n, i), c = (0, d.Z)(n, i), b = f.uc.has(i.skuId);
  return (0, r.jsx)("div", {
    className: l()(g.primaryButton, t),
    children: (0, r.jsx)(a.zxk, {
      variant: "primary",
      fullWidth: true,
      text: b ? p.intl.string(h.default.g5Ds69) : p.intl.string(p.t["0Q61kF"]),
      onClick: e => {
        null == o || o(e), b ? null == s || s(e) : null == c || c()
      }
    })
  })
}

function O(e) {
  let {
    className: t,
    guildId: n,
    powerup: i
  } = e, o = (0, d.Z)(n, i);
  return (0, r.jsx)("div", {
    className: l()(g.container, t),
    children: (0, r.jsx)("div", {
      className: g.primaryButton,
      children: (0, r.jsx)(a.zxk, {
        variant: "primary",
        fullWidth: true,
        text: i.type === f.Us.LEVEL ? p.intl.string(p.t["0Q61kF"]) : p.intl.string(p.t.Xa11Ep),
        onClick: o
      })
    })
  })
}

function v(e) {
  let {
    className: t,
    guildId: n,
    powerup: i,
    onError: a
  } = e, {
    showToggleButton: s,
    isPowerupActive: u
  } = (0, o.Z)(n, i), d = !u;
  return (0, r.jsxs)("div", {
    className: l()(g.container, t),
    children: [s && (0, r.jsx)(c.Z, {
      guildId: n,
      powerup: i,
      onError: a,
      grow: d,
      compact: !d
    }), u && (0, r.jsx)(y, {
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
  return (0, s.Z)(t.guildId) ? (0, r.jsx)(v, m({}, t)) : (0, r.jsx)(O, m({}, t))
}