/** Chunk was on web.js **/
/** chunk id: 798140, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e) {
  return null == e || null == e.end_time || new Date(e.end_time) >= new Date
}

function o(e) {
  let {
    muted: t,
    mute_config: n
  } = e;
  return !!t && i(n)
}

function a(e) {
  let {
    muted: t,
    mute_config: n
  } = e;
  return !!t && null != n && null != n.end_time && new Date(n.end_time) >= new Date
}

function s(e) {
  return null == e.end_time ? null : new Date(e.end_time).getTime() - Date.now()
}
require.d(exports, {
  Cl: () => a,
  ZP: () => l,
  m$: () => o
});
class l {
  reset() {
    Object.values(this.timers).forEach(e => clearTimeout(e)), this.timers = {}
  }
  setTimer(e, t, n) {
    if (null == e || null == t) returnfalse;
    let r = s(t);
    return null != r && (r <= 0 || (this.timers[e] = setTimeout(n, Math.max(0, r)), false))
  }
  clearTimer(e) {
    null != e && e in this.timers && (clearTimeout(this.timers[e]), delete this.timers[e])
  }
  constructor() {
    r(this, "timers", true), this.timers = {}
  }
}