/** Chunk was on 33358 **/
/** chunk id: 262212, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => j,
  ms: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk10765 = require("./10765.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk880419 = require("./880419.jsx"),
  Chunk827397 = require("./827397.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk258640 = require("./258640.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk38642 = require("./38642.js");

function b() {
  return (b = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function O(e) {
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
  var t, n, {
      guildId: i,
      powerup: l,
      onClick: a
    } = e,
    s = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["guildId", "powerup", "onClick"]);
  let c = (0, d.Z)(i, l),
    {
      onShowMore: u
    } = (0, p.ZP)(i, l),
    b = f.uc.has(l.skuId);
  return (0, r.jsx)(o.zx, (t = O({
    className: m.primaryButton,
    innerClassName: m.buttonInner,
    wrapperClassName: m.buttonWrapper,
    grow: true,
    onClick: e => {
      null == a || a(e), b ? null == c || c(e) : null == u || u()
    }
  }, s), n = n = {
    children: b ? g.intl.string(h.default["g5Ds6+"]) : g.intl.string(g.t["0Q61kJ"])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function _(e) {
  let {
    className: t,
    guildId: n,
    powerup: i
  } = e, {
    onShowMore: a
  } = (0, p.ZP)(n, i);
  return (0, r.jsx)("div", {
    className: l()(m.container, t),
    children: (0, r.jsx)(o.zx, {
      className: m.primaryButton,
      innerClassName: m.buttonInner,
      wrapperClassName: m.buttonWrapper,
      grow: true,
      onClick: a,
      children: i.type === f.Us.LEVEL ? g.intl.string(g.t["0Q61kJ"]) : g.intl.string(g.t.Xa11Eh)
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
    children: [p && (0, r.jsx)(u.ZP, {
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
  return (0, s.Z)(t.guildId) ? (0, r.jsx)(v, O({}, t)) : (0, r.jsx)(_, O({}, t))
}