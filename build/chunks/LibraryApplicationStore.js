/** Chunk was on web.js **/
/** chunk id: 189081, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => H
}), require("./896048.js"), require("./938796.js"), require("./142703.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk319317 = require("./319317.js"),
  Chunk674378 = require("./674378.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = "LibraryApplicationStore";

function y() {
  var e;
  return null != (e = l.w.get(E)) ? e : {}
}
let b = false,
  O = {},
  v = {},
  A = new Set,
  I = {},
  S = {},
  T = false;

function C() {
  l.w.set(E, g(h({}, y()), {
    activeLaunchOptionIds: S
  }))
}

function N() {
  l.w.set(E, g(h({}, y()), {
    activeLibraryApplicationBranchIds: I
  }))
}

function w(e) {
  for (let t of e) {
    let e = u.A.createFromServer(t);
    O[(0, d.gW)(e.id, e.branchId)] = e
  }
}

function R() {
  b = false
}

function P(e) {
  let {
    libraryApplications: t
  } = e;
  O = {}, w(t), b = true
}

function D(e) {
  let {
    libraryApplications: t
  } = e;
  w(t)
}

function x(e) {
  let {
    applicationId: t,
    branchId: n,
    flags: r
  } = e, i = (0, d.gW)(t, n), a = V(t, n);
  null != a && !a.isHidden() && s.Lt(r, p.hM6.HIDDEN) && (T = true), A.add(i)
}

function L(e) {
  let {
    libraryApplication: t
  } = e, n = u.A.createFromServer(t), r = (0, d.gW)(n.id, n.branchId);
  O[r] = n, A.delete(r)
}

function j(e) {
  let {
    applicationId: t,
    branchId: n,
    launchOptionId: r
  } = e;
  S[(0, d.gW)(t, n)] = r, C()
}

function M(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  if (I[t] === n) returnfalse;
  I[t] = n, N()
}

function k(e) {
  let {
    libraryApplications: t
  } = e;
  for (let e of t) v[(0, d.gW)(e.id, e.branchId)] = e
}

function U() {
  v = {}
}

function G(e) {
  let t = F();
  return Object.keys(t).forEach(n => {
    e(t[n]) || delete t[n]
  }), t
}

function V(e, t) {
  var n;
  let r = (0, d.gW)(e, t);
  return null != (n = O[r]) ? n : v[r]
}

function F() {
  return h({}, v, O)
}
class B extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.default);
    let e = l.w.get(E);
    null != e && (null == e.activeLaunchOptionIds ? C() : S = e.activeLaunchOptionIds, null == e.activeLibraryApplicationBranchIds ? N() : I = e.activeLibraryApplicationBranchIds)
  }
  get libraryApplications() {
    return G(e => !e.isHidden())
  }
  getAllLibraryApplications() {
    return F()
  }
  hasLibraryApplication() {
    return Object.keys(F()).length > 0
  }
  hasApplication(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = V(e, t);
    return !(null == r || !n && r.isHidden()) && (0, d.XZ)(r)
  }
  getLibraryApplication(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = V(e, t);
    return n && null != r ? (0, d.XZ)(r) ? r : null : r
  }
  getActiveLibraryApplication(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = I[e];
    if (null != n) {
      var r;
      let i = (0, d.gW)(e, n),
        a = null != (r = O[i]) ? r : v[i];
      if (null != a && (0, d.XZ)(a) && (t || !a.isHidden())) return a
    }
    let i = F();
    for (let n in i)
      if (i[n].id === e) {
        let e = i[n];
        if ((0, d.XZ)(e) && (t || !e.isHidden())) return e
      }
  }
  isUpdatingFlags(e, t) {
    return A.has((0, d.gW)(e, t))
  }
  getActiveLaunchOptionId(e, t) {
    return S[(0, d.gW)(e, t)]
  }
  get fetched() {
    return b
  }
  get entitledBranchIds() {
    return a()(F()).values().filter(e => (0, d.XZ)(e)).map(e => e.branchId).value()
  }
  get hasRemovedLibraryApplicationThisSession() {
    return T
  }
  whenInitialized(e) {
    this.addConditionalChangeListener(() => {
      if (b) return setImmediate(e), false
    })
  }
}
_(B, "displayName", "LibraryApplicationStore");
let H = new B(Chunk73153.h, {
  LOGOUT: R,
  LIBRARY_FETCH_SUCCESS: P,
  SKU_PURCHASE_SUCCESS: D,
  LIBRARY_APPLICATION_FLAGS_UPDATE_START: x,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: L,
  LIBRARY_APPLICATION_UPDATE: L,
  LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: j,
  LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: M,
  LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: k,
  DEVELOPER_TEST_MODE_RESET: U
})