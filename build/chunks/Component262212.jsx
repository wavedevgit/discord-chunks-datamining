/** Chunk was on 97844 **/
/** chunk id: 262212, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  ZP: () => E,
  ms: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk10765 = require("./10765.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk880419 = require("./880419.jsx"),
  Chunk827397 = require("./827397.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk292609 = require("./292609.js");

function j() {
  return (j = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  }).apply(this, arguments)
}

function g(e) {
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

function m(e) {
  var t, r, {
      guildId: o,
      powerup: i,
      onClick: u
    } = e,
    s = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["guildId", "powerup", "onClick"]);
  let a = (0, p.Z)(o, i),
    {
      onShowMore: c
    } = (0, d.ZP)(o, i),
    j = f.uc.has(i.skuId);
  return (0, n.jsx)(l.zx, (t = g({
    className: y.primaryButton,
    innerClassName: y.buttonInner,
    wrapperClassName: y.buttonWrapper,
    grow: true,
    onClick: e => {
      null == u || u(e), j ? null == a || a(e) : null == c || c()
    }
  }, s), r = r = {
    children: j ? O.intl.string(b.default["g5Ds6+"]) : O.intl.string(O.t["0Q61kJ"])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}

function P(e) {
  let {
    className: t,
    guildId: r,
    powerup: o
  } = e, {
    onShowMore: u
  } = (0, d.ZP)(r, o);
  return (0, n.jsx)("div", {
    className: i()(y.container, t),
    children: (0, n.jsx)(l.zx, {
      className: y.primaryButton,
      innerClassName: y.buttonInner,
      wrapperClassName: y.buttonWrapper,
      grow: true,
      onClick: u,
      children: o.type === f.Us.LEVEL ? O.intl.string(O.t["0Q61kJ"]) : O.intl.string(O.t.Xa11Eh)
    })
  })
}

function v(e) {
  let {
    className: t,
    guildId: r,
    powerup: o,
    onError: l
  } = e, s = (0, a.ZP)(r, o).type !== f.A3.INACTIVE, p = (0, u.Z)(r, o, "GuildPowerupCardFooterAdmin"), d = s || !p, b = !s;
  return (0, n.jsxs)("div", {
    className: i()(y.container, t),
    children: [d && (0, n.jsx)(c.Z, {
      guildId: r,
      powerup: o,
      onError: l,
      grow: b,
      compact: !b
    }), s && (0, n.jsx)(m, {
      guildId: r,
      powerup: o
    })]
  })
}

function E(e) {
  var t = j({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, s.Z)(t.guildId) ? (0, n.jsx)(v, g({}, t)) : (0, n.jsx)(P, g({}, t))
}