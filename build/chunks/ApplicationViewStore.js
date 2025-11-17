/** Chunk was on web.js **/
/** chunk id: 490983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => $
}), require("./388685.js"), require("./642613.js"), require("./583741.js");
var r, Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk812206 = require("./812206.js"),
  Chunk594190 = require("./594190.js"),
  Chunk592745 = require("./592745.js"),
  Chunk706454 = require("./706454.js"),
  Chunk757266 = require("./757266.js"),
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk246946 = require("./246946.js"),
  Chunk230307 = require("./230307.js"),
  Chunk799777 = require("./799777.js"),
  Chunk417363 = require("./417363.js"),
  Chunk941128 = require("./941128.js"),
  Chunk70956 = require("./70956.js"),
  Chunk251625 = require("./251625.js"),
  Chunk823379 = require("./823379.js"),
  Chunk780570 = require("./780570.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk804739 = require("./804739.js"),
  Chunk7956 = require("./7956.js"),
  Chunk981631 = require("./981631.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let L = 5,
  M = c()().subtract(1, "week"),
  k = [],
  j = "",
  U = false;

function G(e, t) {
  return e.application.name.localeCompare(t.application.name, h.default.locale, {
    sensitivity: "base"
  })
}

function B(e, t) {
  return null != e && c()(e.createdAt).isAfter(M) && 0 === t
}
let Z = {
    [Chunk981631.iEv.NAME]: G,
    [Chunk981631.iEv.PLATFORM]: (e, t, n) => {
      let r = e.libraryApplication.getDistributor(),
        i = t.libraryApplication.getDistributor();
      return r === i ? (n === w.sHY.DESCENDING ? false : 1) * G(e, t) : null == r ? 1 : null == i ? false : r.localeCompare(i)
    },
    [Chunk981631.iEv.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? false : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? false : 1,
    [Chunk981631.iEv.ACTIONS]: null
  },
  F = (0, Chunk251625.oH)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
  V = (0, Chunk251625.oH)(e => e.filter(e => null != e.libraryApplication && v.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
  H = (0, Chunk251625.oH)((e, t) => e.filter(e => a()(t.toLowerCase(), e.application.name.toLowerCase()))),
  Y = (0, Chunk251625.oH)((e, t, n, r) => {
    let i = Z[t];
    if (null == i) return e;
    let a = [...e].sort(i);
    return n === w.sHY.DESCENDING ? a.reverse() : a
  }),
  W = (0, Chunk251625.oH)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

function K(e, t) {
  let n = y.Z.getCurrentUserStatisticsForApplication(e.id);
  if (null != n) return new Date(n.last_played_at).getTime();
  let r = t[e.id];
  return null != r ? r : 0
}

function z(e) {
  let {
    query: t
  } = e;
  j = t
}

function q(e, t, n, r, i) {
  if (!i && t.has(e.id)) return null;
  let a = f.Z.getApplication(e.id);
  if (null == a) return null;
  let o = K(a, n);
  return (t.add(e.id), (0, C.Je)(e) || v.Z.isInstalled(e.id, e.branchId)) ? {
    key: "".concat(e.id, "-").concat(e.branchId),
    application: a,
    libraryApplication: e,
    lastPlayed: o,
    supportsCloudSync: null != e && v.Z.supportsCloudSync(e.id, e.branchId),
    isNew: B(e, o),
    isLaunching: p.Z.launchingGames.has(e.id),
    isRunning: r.has(e.id),
    isLaunchable: (0, P.t)({
      LibraryApplicationStore: E.Z,
      LaunchableGameStore: p.Z,
      DispatchApplicationStore: v.Z,
      ConnectedAppsStore: m.Z,
      applicationId: e.id,
      branchId: e.branchId
    }),
    isUpdatingFlags: E.Z.isUpdatingFlags(e.id, e.branchId),
    shouldShowInLibrary: (0, C.d0)(a, e, b.Z),
    defaultAction: (0, D.i)(e, v.Z, I.Z)
  } : null
}

function X(e, t, n, r) {
  let i = null != e ? f.Z.getApplication(e) : null;
  if (null == i || null == e || t.has(e)) return null;
  let a = K(i, n);
  return t.add(e), {
    key: e,
    application: i,
    lastPlayed: a,
    supportsCloudSync: false,
    isNew: false,
    isLaunching: p.Z.launchingGames.has(e),
    isRunning: r.has(e),
    isLaunchable: (0, P.t)({
      LibraryApplicationStore: E.Z,
      LaunchableGameStore: p.Z,
      DispatchApplicationStore: v.Z,
      ConnectedAppsStore: m.Z,
      applicationId: e,
      branchId: null
    }),
    isUpdatingFlags: false,
    shouldShowInLibrary: false,
    libraryApplication: null,
    defaultAction: null
  }
}

function Q() {
  let e = new Set(Chunk594190.ZP.getRunningVerifiedApplicationIds()),
    t = {},
    n = new Set,
    r = Chunk594190.ZP.getGamesSeen(false, false).map(e => {
      let n = g.Z.getGameByGameData(e);
      return null != n ? (t[n.id] = e.lastFocused * T.Z.Millis.SECOND, n.id) : null
    }),
    i = Object.values(Chunk283595.Z.getAllLibraryApplications()).map(r => q(r, n, t, e, true)).filter(Chunk823379.lm),
    a = [...r.map(r => X(r, n, t, e)).filter(Chunk823379.lm), ...Chunk658722].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? false : 1);
  return U = null != Chunk77498.Z.lastFetched && Chunk283595.Z.fetched, !s().isEqual(a, k) && (k = a, Chunk358085.isPlatformEmbedded && Chunk998502.ZP.setSystemTrayApplications(V(k).map(e => e.application).slice(0, L)), true)
}
class J extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk812206.Z, Chunk77498.Z, Chunk592745.Z, Chunk594190.ZP, Chunk417363.Z, Chunk941128.Z, Chunk283595.Z, Chunk230307.Z, Chunk246946.Z, Chunk757266.Z], Q, 200), this.syncWith([Chunk799777.Z, Chunk706454.default], () => true)
  }
  get applicationFilterQuery() {
    return j
  }
  get applicationViewItems() {
    return k
  }
  get launchableApplicationViewItems() {
    return V(k)
  }
  get libraryApplicationViewItems() {
    return F(k)
  }
  get filteredLibraryApplicationViewItems() {
    return H(this.libraryApplicationViewItems, j)
  }
  get sortedFilteredLibraryApplicationViewItems() {
    return Y(this.filteredLibraryApplicationViewItems, Chunk799777.Z.sortKey, Chunk799777.Z.sortDirection, Chunk706454.default.locale)
  }
  get hiddenLibraryApplicationViewItems() {
    return W(k)
  }
  get hasFetchedApplications() {
    return U
  }
}
x(J, "displayName", "ApplicationViewStore");
let $ = new J(Chunk570140.Z, {
  LIBRARY_APPLICATION_FILTER_UPDATE: z
})