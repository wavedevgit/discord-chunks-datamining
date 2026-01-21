/** Chunk was on 82124 **/
/** chunk id: 674552, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ne: () => d,
  Ny: () => p,
  Or: () => f,
  jt: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk246364 = require("./246364.js"),
  Chunk460562 = require("./460562.jsx"),
  Chunk105303 = require("./105303.js");

function d(e, t, n) {
  return (0, r.jsx)(o.mAB, {
    count: e,
    color: t,
    "aria-hidden": n
  })
}

function p() {
  return (0, r.jsx)(o.G2e, {
    icon: (0, o.GSL)(c.Z),
    disableColor: true,
    className: u.unavailableBadge
  })
}

function f(e) {
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
  return g({
    icon: t,
    isCurrentUserConnected: l
  })
}

function h(e) {
  let {
    guildJoinRequestStatus: t
  } = e, [n, r] = function(e) {
    switch (e) {
      case s.wB.SUBMITTED:
        return [true, o.T39];
      case s.wB.REJECTED:
        return [a.Z.unsafe_rawColors.RED_400.css, o.Dio];
      case s.wB.APPROVED:
        return [a.Z.unsafe_rawColors.GREEN_360.css, o.dz2];
      default:
        return [true, o.vdY]
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
    className: l()(u.iconBadge, {
      [u.isCurrentUserConnected]: i
    })
  }, null == n ? {
    disableColor: true
  } : {
    color: n
  }))
}