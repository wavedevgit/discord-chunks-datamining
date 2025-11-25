/** Chunk was on 64271 **/
/** chunk id: 674552, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ne: () => f,
  Ny: () => p,
  Or: () => h,
  jt: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk246364 = require("./246364.js"),
  Chunk460562 = require("./460562.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk816827 = require("./816827.js");

function f(e, t, n) {
  return (0, r.jsx)(o.mAB, {
    count: e,
    color: t,
    "aria-hidden": n
  })
}

function p() {
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
    t = o.nG3
  }
  return m({
    icon: t,
    isCurrentUserConnected: l
  })
}

function g(e) {
  let {
    guildJoinRequestStatus: t
  } = e, [n, r] = function(e) {
    switch (e) {
      case s.wB.SUBMITTED:
        return [true, o.T39];
      case s.wB.REJECTED:
        return [u.Ilk.RED_400, o.Dio];
      case s.wB.APPROVED:
        return [u.Ilk.GREEN_360, o.dz2];
      default:
        return [true, o.vdY]
    }
  }(t);
  return m({
    icon: r,
    color: n
  })
}

function m(e) {
  let {
    icon: t,
    color: n,
    isCurrentUserConnected: i
  } = e, s = null == n ? {
    disableColor: true
  } : {
    color: (0, a.Lq)(n)
  };
  return (0, r.jsx)(o.G2e, function(e) {
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
    className: l()(d.iconBadge, {
      [d.isCurrentUserConnected]: i
    })
  }, s))
}