/** Chunk was on web.js **/
/** chunk id: 827827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk349941 = require("./349941.js"),
  Chunk406935 = require("./406935.js"),
  Chunk535586 = require("./535586.js"),
  Chunk594061 = require("./594061.js"),
  Chunk461213 = require("./461213.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk146901 = require("./146901.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  let n = (0, c.MU)(e);
  if ("0" === t) return f.intl.formatToPlainString(f.t.dO2aLi, {
    statusLabel: n
  });
  let {
    kind: r,
    dateString: i,
    timeString: a
  } = (0, u._)(t);
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
  null == n && (n = o.A.getStatus());
  let p = null != u ? "".concat(Date.now() + u) : "0";
  await s.wc.updateAsync("status", e => {
    e.status = i.hU.create({
      value: t
    }), e.statusExpiresAtMs = p, e.statusCreatedAtMs = n === t && null != e.statusCreatedAtMs ? e.statusCreatedAtMs : i.ol.create({
      value: "".concat(Date.now())
    })
  }, s.Sb.INFREQUENT_USER_ACTION);
  let h = g(t, p);
  if (r.OR.announce(h), f) return;
  let E = _({
    next_status: t,
    prev_status: n
  }, a.A.getGlobalStats());
  null != u && (E = m(_({}, E), {
    expire_duration_minutes: null != u ? u / 6e4 : null
  })), null != c && (E = _({}, E, c)), l.default.track(d.HAw.USER_STATUS_UPDATED, E)
}