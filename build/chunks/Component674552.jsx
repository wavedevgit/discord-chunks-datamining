/** Chunk was on 46467 **/
/** chunk id: 674552, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ne: () => d,
  Ny: () => f,
  Or: () => h,
  jt: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk246364 = require("./246364.js"),
  Chunk460562 = require("./460562.jsx"),
  Chunk816827 = require("./816827.js");

function d(e, t, n) {
  return (0, r.jsx)(a.mAB, {
    count: e,
    color: t,
    "aria-hidden": n
  })
}

function f() {
  return (0, Chunk54381.jsx)(Chunk481060.G2e, {
    icon: (0, Chunk481060.GSL)(Chunk460562.Z),
    disableColor: true,
    className: Chunk816827.unavailableBadge
  })
}

function h(e) {
  let t, {
    audio: n,
    video: r,
    screenshare: i,
    isCurrentUserConnected: l,
    liveStage: o,
    activeEvent: s,
    activity: c
  } = e;
  if (s) t = a.Que;
  else if (o) t = a.ewx;
  else if (i) t = a.pzj;
  else if (r) t = a.Odl;
  else if (n) t = a.gj8;
  else {
    if (!c) return null;
    t = a.nG3
  }
  return g({
    icon: t,
    isCurrentUserConnected: l
  })
}

function p(e) {
  let {
    guildJoinRequestStatus: t
  } = e, [n, r] = function(e) {
    switch (e) {
      case s.wB.SUBMITTED:
        return [true, a.T39];
      case s.wB.REJECTED:
        return [o.Z.unsafe_rawColors.RED_400.css, a.Dio];
      case s.wB.APPROVED:
        return [o.Z.unsafe_rawColors.GREEN_360.css, a.dz2];
      default:
        return [true, a.vdY]
    }
  }(t);
  return g({
    icon: r,
    color: n
  })
}

function g(e) {
  let {
    icon: t,
    color: n,
    isCurrentUserConnected: i
  } = e;
  return (0, r.jsx)(a.G2e, function(e) {
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
    icon: t,
    className: l()(u.iconBadge, {
      [u.isCurrentUserConnected]: i
    })
  }, null == n ? {
    disableColor: true
  } : {
    color: n
  }))
}