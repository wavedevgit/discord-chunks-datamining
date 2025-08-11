/** Chunk was on 34779 **/
/** chunk id: 674552, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ne: () => f,
  Ny: () => g,
  Or: () => b,
  jt: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk44315 = require("./44315.js"),
  Chunk246364 = require("./246364.js"),
  Chunk460562 = require("./460562.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176330 = require("./176330.js");

function p(e) {
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
  return (0, Chunk255367.jsx)(Chunk481060.G2e, {
    icon: (0, Chunk481060.GSL)(Chunk460562.Z),
    disableColor: true,
    className: Chunk176330.unavailableBadge
  })
}

function m(e) {
  let {
    enabled: t
  } = s.c.useExperiment({
    location: "renderMediaBadge"
  }, {
    autoTrackExposure: true
  }), n = t ? o.iWm : o.nG3;
  return (0, r.jsx)(n, p({}, e))
}

function b(e) {
  let t, {
    audio: n,
    video: r,
    screenshare: i,
    isCurrentUserConnected: l,
    liveStage: s,
    activeEvent: a,
    activity: c
  } = e;
  if (a) t = o.Que;
  else if (s) t = o.ewx;
  else if (i) t = o.pzj;
  else if (r) t = o.Odl;
  else if (n) t = o.gj8;
  else {
    if (!c) return null;
    t = m
  }
  return _({
    icon: t,
    isCurrentUserConnected: l
  })
}

function O(e) {
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
  return _({
    icon: r,
    color: n
  })
}

function _(e) {
  let {
    icon: t,
    color: n,
    isCurrentUserConnected: i
  } = e, s = null == n ? {
    disableColor: true
  } : {
    color: (0, a.Lq)(n)
  };
  return (0, r.jsx)(o.G2e, p({
    icon: t,
    className: l()(h.iconBadge, {
      [h.isCurrentUserConnected]: i
    })
  }, s))
}