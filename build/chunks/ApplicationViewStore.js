/** Chunk was on web.js **/
/** chunk id: 742077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => J
}), require("./896048.js"), require("./638769.js"), require("./264879.js");
var r, Chunk91871 = require("./91871.js"),
  a = require.n(Chunk91871),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk989349 = require("./989349.js"),
  c = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk587895 = require("./587895.js"),
  Chunk15285 = require("./15285.js"),
  Chunk651743 = require("./651743.js"),
  Chunk773669 = require("./773669.js"),
  Chunk134861 = require("./134861.js"),
  Chunk760751 = require("./760751.js"),
  Chunk189081 = require("./189081.js"),
  Chunk351906 = require("./351906.js"),
  Chunk90165 = require("./90165.js"),
  Chunk268387 = require("./268387.js"),
  Chunk194871 = require("./194871.js"),
  Chunk966846 = require("./966846.js"),
  Chunk927813 = require("./927813.js"),
  Chunk583613 = require("./583613.js"),
  Chunk403362 = require("./403362.js"),
  Chunk674378 = require("./674378.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk144914 = require("./144914.js"),
  Chunk227841 = require("./227841.js"),
  Chunk652215 = require("./652215.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let L = 5,
  j = c()().subtract(1, "week"),
  M = [],
  k = "",
  U = false;

function G(e, t) {
  return e.application.name.localeCompare(t.application.name, h.default.locale, {
    sensitivity: "base"
  })
}

function V(e, t) {
  return null != e && c()(e.createdAt).isAfter(j) && 0 === t
}
let F = {
    [Chunk652215.DpB.NAME]: G,
    [Chunk652215.DpB.PLATFORM]: (e, t, n) => {
      let r = e.libraryApplication.getDistributor(),
        i = t.libraryApplication.getDistributor();
      return r === i ? (n === D.tSW.DESCENDING ? false : 1) * G(e, t) : null == r ? 1 : null == i ? false : r.localeCompare(i)
    },
    [Chunk652215.DpB.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? false : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? false : 1,
    [Chunk652215.DpB.ACTIONS]: null
  },
  B = (0, Chunk583613.L_)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
  H = (0, Chunk583613.L_)(e => e.filter(e => null != e.libraryApplication && v.A.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
  Y = (0, Chunk583613.L_)((e, t) => e.filter(e => a()(t.toLowerCase(), e.application.name.toLowerCase()))),
  W = (0, Chunk583613.L_)((e, t, n, r) => {
    let i = F[t];
    if (null == i) return e;
    let a = [...e].sort(i);
    return n === D.tSW.DESCENDING ? a.reverse() : a
  }),
  K = (0, Chunk583613.L_)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

function z(e, t) {
  let n = b.A.getCurrentUserStatisticsForApplication(e.id);
  if (null != n) return new Date(n.last_played_at).getTime();
  let r = t[e.id];
  return null != r ? r : 0
}

function q(e) {
  let {
    query: t
  } = e;
  k = t
}

function X(e, t, n, r, i) {
  if (!i && t.has(e.id)) return null;
  let a = f.A.getApplication(e.id);
  if (null == a) return null;
  let s = z(a, n);
  return (t.add(e.id), (0, C.XZ)(e) || v.A.isInstalled(e.id, e.branchId)) ? {
    key: "".concat(e.id, "-").concat(e.branchId),
    application: a,
    libraryApplication: e,
    lastPlayed: s,
    supportsCloudSync: null != e && v.A.supportsCloudSync(e.id, e.branchId),
    isNew: V(e, s),
    isLaunching: _.A.launchingGames.has(e.id),
    isRunning: r.has(e.id),
    isLaunchable: (0, w.A)({
      LibraryApplicationStore: E.A,
      LaunchableGameStore: _.A,
      DispatchApplicationStore: v.A,
      ConnectedAppsStore: m.A,
      applicationId: e.id,
      branchId: e.branchId
    }),
    isUpdatingFlags: E.A.isUpdatingFlags(e.id, e.branchId),
    shouldShowInLibrary: (0, C.Tr)(a, e, y.A),
    defaultAction: (0, P.F)(e, v.A, A.A)
  } : null
}

function Z(e, t, n, r) {
  let i = null != e ? f.A.getApplication(e) : null;
  if (null == i || null == e || t.has(e)) return null;
  let a = z(i, n);
  return t.add(e), {
    key: e,
    application: i,
    lastPlayed: a,
    supportsCloudSync: false,
    isNew: false,
    isLaunching: _.A.launchingGames.has(e),
    isRunning: r.has(e),
    isLaunchable: (0, w.A)({
      LibraryApplicationStore: E.A,
      LaunchableGameStore: _.A,
      DispatchApplicationStore: v.A,
      ConnectedAppsStore: m.A,
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
  let e = new Set(p.Ay.getRunningVerifiedApplicationIds()),
    t = {},
    n = new Set,
    r = p.Ay.getGamesSeen(false, false).map(e => {
      let n = g.A.getGameByGameData(e);
      return null != n ? (t[n.id] = e.lastFocused * I.A.Millis.SECOND, n.id) : null
    }),
    i = Object.values(E.A.getAllLibraryApplications()).map(r => X(r, n, t, e, true)).filter(T.Vq),
    a = [...r.map(r => Z(r, n, t, e)).filter(T.Vq), ...i].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? false : 1);
  return U = null != g.A.lastFetched && E.A.fetched, !o().isEqual(a, M) && (M = a, N.isPlatformEmbedded && R.Ay.setSystemTrayApplications(H(M).map(e => e.application).slice(0, L)), true)
}
class $ extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith([f.A, g.A, _.A, p.Ay, v.A, A.A, E.A, b.A, y.A, m.A], Q, 200), this.syncWith([O.A, h.default], () => true)
  }
  get applicationFilterQuery() {
    return k
  }
  get applicationViewItems() {
    return M
  }
  get launchableApplicationViewItems() {
    return H(M)
  }
  get libraryApplicationViewItems() {
    return B(M)
  }
  get filteredLibraryApplicationViewItems() {
    return Y(this.libraryApplicationViewItems, k)
  }
  get sortedFilteredLibraryApplicationViewItems() {
    return W(this.filteredLibraryApplicationViewItems, O.A.sortKey, O.A.sortDirection, h.default.locale)
  }
  get hiddenLibraryApplicationViewItems() {
    return K(M)
  }
  get hasFetchedApplications() {
    return U
  }
}
x($, "displayName", "ApplicationViewStore");
let J = new $(Chunk73153.h, {
  LIBRARY_APPLICATION_FILTER_UPDATE: q
})