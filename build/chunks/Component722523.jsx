/** Chunk was on 97887 **/
/** chunk id: 722523, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => O,
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

function A(e) {
  let {
    className: t,
    guildId: n,
    powerup: l,
    onClick: a
  } = e, o = (0, u.A)(n, l), c = (0, d.A)(n, l), m = p.HO.has(l.skuId);
  return (0, r.jsx)("div", {
    className: i()(g.FS, t),
    children: (0, r.jsx)(s.$nd, {
      variant: "primary",
      fullWidth: true,
      text: m ? f.intl.string(h.default.g5Ds69) : f.intl.string(f.t["0Q61kF"]),
      onClick: e => {
        null == a || a(e), m ? null == o || o(e) : null == c || c()
      }
    })
  })
}

function y(e) {
  let {
    className: t,
    guildId: n,
    powerup: l
  } = e, a = (0, d.A)(n, l);
  return (0, r.jsx)("div", {
    className: i()(g.kL, t),
    children: (0, r.jsx)("div", {
      className: g.FS,
      children: (0, r.jsx)(s.$nd, {
        variant: "primary",
        fullWidth: true,
        text: l.type === p.o9.LEVEL ? f.intl.string(f.t["0Q61kF"]) : f.intl.string(f.t.Xa11Ep),
        onClick: a
      })
    })
  })
}

function _(e) {
  let {
    className: t,
    guildId: n,
    powerup: l,
    onError: s
  } = e, {
    showToggleButton: o,
    isPowerupActive: u
  } = (0, a.A)(n, l), d = !u;
  return (0, r.jsxs)("div", {
    className: i()(g.kL, t),
    children: [o && (0, r.jsx)(c.A, {
      guildId: n,
      powerup: l,
      onError: s,
      grow: d,
      compact: !d
    }), u && (0, r.jsx)(A, {
      guildId: n,
      powerup: l
    })]
  })
}

function O(e) {
  let {} = e, t = m({}, e);
  return (0, o.A)(t.guildId) ? (0, r.jsx)(_, b({}, t)) : (0, r.jsx)(y, b({}, t))
}