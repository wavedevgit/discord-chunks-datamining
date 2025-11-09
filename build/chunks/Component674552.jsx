/** Chunk was on 94709 **/
/** chunk id: 674552, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ne: () => f,
  Ny: () => g,
  Or: () => b,
  jt: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk44315 = require("./44315.js"),
  Chunk246364 = require("./246364.js"),
  Chunk460562 = require("./460562.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk207972 = require("./207972.js");

function h(e) {
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

function f(e, t, n) {
  return (0, r.jsx)(o.mAB, {
    count: e,
    color: t,
    "aria-hidden": n
  })
}

function g() {
  return (0, Chunk951288.jsx)(Chunk481060.G2e, {
    icon: (0, Chunk481060.GSL)(Chunk460562.Z),
    disableColor: true,
    className: Chunk207972.unavailableBadge
  })
}

function m(e) {
  let {
    enabled: t
  } = a.c.useExperiment({
    location: "renderMediaBadge"
  }, {
    autoTrackExposure: true
  }), n = t ? o.iWm : o.nG3;
  return (0, r.jsx)(n, h({}, e))
}

function b(e) {
  let t, {
    audio: n,
    video: r,
    screenshare: i,
    isCurrentUserConnected: l,
    liveStage: a,
    activeEvent: s,
    activity: c
  } = e;
  if (s) t = o.Que;
  else if (a) t = o.ewx;
  else if (i) t = o.pzj;
  else if (r) t = o.Odl;
  else if (n) t = o.gj8;
  else {
    if (!c) return null;
    t = m
  }
  return y({
    icon: t,
    isCurrentUserConnected: l
  })
}

function _(e) {
  let {
    guildJoinRequestStatus: t
  } = e, [n, r] = function(e) {
    switch (e) {
      case c.wB.SUBMITTED:
        return [true, o.T39];
      case c.wB.REJECTED:
        return [d.Ilk.RED_400, o.Dio];
      case c.wB.APPROVED:
        return [d.Ilk.GREEN_360, o.dz2];
      default:
        return [true, o.vdY]
    }
  }(t);
  return y({
    icon: r,
    color: n
  })
}

function y(e) {
  let {
    icon: t,
    color: n,
    isCurrentUserConnected: i
  } = e, a = null == n ? {
    disableColor: true
  } : {
    color: (0, s.Lq)(n)
  };
  return (0, r.jsx)(o.G2e, h({
    icon: t,
    className: l()(p.iconBadge, {
      [p.isCurrentUserConnected]: i
    })
  }, a))
}