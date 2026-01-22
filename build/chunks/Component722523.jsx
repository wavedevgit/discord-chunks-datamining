/** Chunk was on 97492 **/
/** chunk id: 722523, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => j,
  GU: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk438874 = require("./438874.js"),
  Chunk363487 = require("./363487.js"),
  Chunk439156 = require("./439156.jsx"),
  Chunk689906 = require("./689906.js"),
  Chunk224331 = require("./224331.js"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk993747 = require("./993747.js");

function g() {
  return (g = Object.assign || function(e) {
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

function A(e) {
  let {
    className: t,
    guildId: n,
    powerup: l,
    onClick: s
  } = e, o = (0, u.A)(n, l), c = (0, d.A)(n, l), g = f.HO.has(l.skuId);
  return (0, r.jsx)("div", {
    className: i()(b.FS, t),
    children: (0, r.jsx)(a.$nd, {
      variant: "primary",
      fullWidth: true,
      text: g ? h.intl.string(p.default.g5Ds69) : h.intl.string(h.t["0Q61kF"]),
      onClick: e => {
        null == s || s(e), g ? null == o || o(e) : null == c || c()
      }
    })
  })
}

function y(e) {
  let {
    className: t,
    guildId: n,
    powerup: l
  } = e, s = (0, d.A)(n, l);
  return (0, r.jsx)("div", {
    className: i()(b.kL, t),
    children: (0, r.jsx)("div", {
      className: b.FS,
      children: (0, r.jsx)(a.$nd, {
        variant: "primary",
        fullWidth: true,
        text: l.type === f.o9.LEVEL ? h.intl.string(h.t["0Q61kF"]) : h.intl.string(h.t.Xa11Ep),
        onClick: s
      })
    })
  })
}

function O(e) {
  let {
    className: t,
    guildId: n,
    powerup: l,
    onError: a
  } = e, {
    showToggleButton: o,
    isPowerupActive: u
  } = (0, s.A)(n, l), d = !u;
  return (0, r.jsxs)("div", {
    className: i()(b.kL, t),
    children: [o && (0, r.jsx)(c.A, {
      guildId: n,
      powerup: l,
      onError: a,
      grow: d,
      compact: !d
    }), u && (0, r.jsx)(A, {
      guildId: n,
      powerup: l
    })]
  })
}

function j(e) {
  let {} = e, t = g({}, e);
  return (0, o.A)(t.guildId) ? (0, r.jsx)(O, m({}, t)) : (0, r.jsx)(y, m({}, t))
}