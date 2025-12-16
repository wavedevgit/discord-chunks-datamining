/** Chunk was on 1272 **/
/** chunk id: 594117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk685072 = require("./685072.jsx"),
  Chunk287734 = require("./287734.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk389303 = require("./389303.js"),
  Chunk881824 = require("./881824.jsx"),
  Chunk719100 = require("./719100.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  var t, n;
  let {
    tooltipText: l,
    onClick: s
  } = e, {
    parentAnalyticsLocation: c
  } = (0, a.ZP)(), {
    events: u,
    Component: d
  } = (0, i.K)();
  return (0, r.jsx)(p.Z, (t = function(e) {
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
  }({
    tooltipText: l,
    onClick: () => {
      (0, o.v)(c, o.d.DISCONNECT), s()
    }
  }, u), n = n = {
    icon: (0, r.jsx)(d, {
      size: "refresh_sm"
    })
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

function h(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsx)(g, {
    tooltipText: f.intl.string(f.t.SMKyih),
    onClick: () => {
      if ((0, d.Z)(t)) return void(0, u.Us)(t);
      l.default.disconnect()
    }
  })
}

function m(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsx)(g, {
    tooltipText: f.intl.string(f.t["6vrfgt"]),
    onClick: () => {
      if ((0, c.Z)(t)) return void(0, s.lC)(t);
      l.default.disconnect()
    }
  })
}

function b(e) {
  let {
    channel: t
  } = e;
  return t.isGuildStageVoice() ? (0, r.jsx)(h, {
    channel: t
  }) : (0, r.jsx)(m, {
    channel: t
  })
}