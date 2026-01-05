/** Chunk was on web.js **/
/** chunk id: 423880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./539854.js"), require("./388685.js");
var Chunk607802 = require("./607802.js"),
  Chunk315322 = require("./315322.js"),
  Chunk881262 = require("./881262.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l() {
  return {
    isFocused: false,
    isSidebarOpen: false,
    isFiltersModalOpen: false,
    didTrackOpen: false
  }
}
class c extends Chunk881262.Z {
  _initialize(e) {}
  _terminate(e) {
    let t = (0, r.Tm)(e);
    clearTimeout(this.pendingTimeouts.get(t)), this.pendingTimeouts.delete(t), this.viewStates.delete(t), this.pendingEvents.delete(t)
  }
  _transferSession(e, t) {
    let n = (0, r.Tm)(e),
      i = (0, r.Tm)(t),
      a = this.getViewState(e);
    this.setViewState(t, a), this.viewStates.delete(n);
    let o = this.pendingTimeouts.get(n);
    null != o && (clearTimeout(o), this.pendingTimeouts.delete(n), this.schedule(t));
    let s = this.pendingEvents.get(n);
    null != s && (this.pendingEvents.set(i, s), this.pendingEvents.delete(n))
  }
  getViewState(e) {
    var t;
    let n = (0, r.Tm)(e);
    return null != (t = this.viewStates.get(n)) ? t : l()
  }
  setViewState(e, t) {
    let n = (0, r.Tm)(e);
    this.viewStates.set(n, s({}, this.getViewState(e), t))
  }
  schedule(e) {
    let t = (0, r.Tm)(e);
    clearTimeout(this.pendingTimeouts.get(t));
    let n = setTimeout(() => {
      this.pendingTimeouts.delete(t), this.evaluateViewState(e)
    }, 0);
    this.pendingTimeouts.set(t, n)
  }
  evaluateViewState(e) {
    let t = this.getViewState(e),
      n = t.isFocused || t.isSidebarOpen || t.isFiltersModalOpen;
    n && !t.didTrackOpen ? (this.setViewState(e, {
      didTrackOpen: true
    }), (0, i.I1)({
      searchContext: e
    }), this.flushPendingEvents(e)) : !n && t.didTrackOpen && (0, i.IZ)({
      searchContext: e
    })
  }
  setFocused(e, t) {
    this.setViewState(e, {
      isFocused: t
    }), this.schedule(e)
  }
  setSidebarOpen(e, t) {
    this.setViewState(e, {
      isSidebarOpen: t
    }), this.schedule(e)
  }
  setFiltersModalOpen(e, t) {
    this.setViewState(e, {
      isFiltersModalOpen: t
    }), this.schedule(e)
  }
  enqueueEvent(e, t) {
    var n;
    let i = (0, r.Tm)(e),
      a = null != (n = this.pendingEvents.get(i)) ? n : [];
    a.push(t), this.pendingEvents.set(i, a)
  }
  flushPendingEvents(e) {
    let t = (0, r.Tm)(e),
      n = this.pendingEvents.get(t);
    null != n && n.forEach(e => e()), this.pendingEvents.delete(t)
  }
  constructor(...e) {
    super(...e), o(this, "viewStates", new Map), o(this, "pendingTimeouts", new Map), o(this, "pendingEvents", new Map)
  }
}
let u = new c