/** Chunk was on web.js **/
/** chunk id: 246133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk925477 = require("./925477.js"),
  Chunk381499 = require("./381499.js"),
  Chunk601992 = require("./601992.js"),
  Chunk675478 = require("./675478.js"),
  Chunk885110 = require("./885110.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk174415 = require("./174415.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  let n = (0, c.u5)(e);
  if ("0" === t) return f.intl.formatToPlainString(f.t.dO2aLi, {
    statusLabel: n
  });
  let {
    kind: r,
    dateString: i,
    timeString: a
  } = (0, u.k)(t);
  return "today" === r ? f.intl.formatToPlainString(f.t["r50t/S"], {
    statusLabel: n,
    timeString: a
  }) : f.intl.formatToPlainString(f.t["J+GJHv"], {
    statusLabel: n,
    dateString: i,
    timeString: a
  })
}
async function E(e) {
  let {
    nextStatus: t,
    prevStatus: n,
    analyticsContext: c,
    durationMillis: u,
    disableTracking: f = false
  } = e;
  null == n && (n = s.Z.getStatus());
  let p = null != u ? "".concat(Date.now() + u) : "0";
  await o.hW.updateAsync("status", e => {
    e.status = i.Gm.create({
      value: t
    }), e.statusExpiresAtMs = p, e.statusCreatedAtMs = n === t && null != e.statusCreatedAtMs ? e.statusCreatedAtMs : i.wA.create({
      value: "".concat(Date.now())
    })
  }, o.fy.INFREQUENT_USER_ACTION);
  let m = g(t, p);
  if (r.uv.announce(m), f) return;
  let E = _({
    next_status: t,
    prev_status: n
  }, a.Z.getGlobalStats());
  null != u && (E = h(_({}, E), {
    expire_duration_minutes: null != u ? u / 6e4 : null
  })), null != c && (E = _({}, E, c)), l.default.track(d.rMx.USER_STATUS_UPDATED, E)
}