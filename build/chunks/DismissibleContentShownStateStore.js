/** Chunk was on web.js **/
/** chunk id: 771781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => F,
  Tc: () => G,
  dD: () => j,
  mB: () => M,
  oF: () => k,
  oo: () => x,
  pd: () => L
}), require("./896048.js"), require("./667532.js");
var r, Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk715314 = require("./715314.js"),
  Chunk45143 = require("./45143.js"),
  Chunk870570 = require("./870570.js"),
  Chunk787925 = require("./787925.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = new(require("./863620.js")).u,
  g = 3e5,
  E = 36e5,
  y = () => ({
    candidates: new Map,
    shownFatigableCandidate: null,
    prevFatigableCandidate: null,
    recentlyShown: [],
    currentlyShown: new Set,
    currentlyShownGroup: new Set,
    lastWinnerTime: 0,
    postConnectionOpen: false
  }),
  b = (0, Chunk265690.h)(y),
  O = false,
  v = e => h(p({}, e), {
    candidates: new Map(e.candidates),
    currentlyShown: new Set(e.currentlyShown),
    currentlyShownGroup: new Set(e.currentlyShownGroup)
  }),
  A = (e, t) => {
    var n;
    return null == t || (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null == (n = e.shownFatigableCandidate) ? true : n.content) === t.content && (e.shownFatigableCandidate = null)), e
  },
  I = (e, t) => {
    var n, r;
    if (null == t) return e;
    e.currentlyShown.add(t.content);
    let i = e.recentlyShown.filter(e => e !== t.content);
    return i.unshift(t.content), i.splice(5), e.recentlyShown = i, null != t.groupName && e.currentlyShownGroup.add(t.groupName), d.C.has(t.content) || (e.shownFatigableCandidate = t, (null == (r = e.prevFatigableCandidate) ? true : r.content) !== t.content && (e.prevFatigableCandidate = t, e.lastWinnerTime = new Date().getTime())), null == (n = t.onAdded) || n.call(t), e
  },
  S = (e, t) => (e.candidates.set(t.content, t), e),
  T = (e, t) => (e.candidates.delete(t.content), e),
  C = (e, t) => I(A(e, e.shownFatigableCandidate), t),
  N = e => null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : true,
  w = e => {
    let t = [...e.candidates.keys()];
    return null !== e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && e.candidates.size > 1 && (t = t.filter(t => {
      var n;
      return t !== (null == (n = e.prevFatigableCandidate) ? true : n.content)
    })), e.candidates.get(t[Math.floor(Math.random() * t.length)])
  },
  R = e => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
  P = e => {
    if (0 === e.candidates.size) return e;
    let t = new Date().getTime() - e.lastWinnerTime > g;
    return R(e) && !t ? (m.unschedule(), C(e, N(e))) : (null != e.shownFatigableCandidate && !t || m.scheduled() || D(e) || m.schedule(() => {
      (0, a.r)(() => {
        b.setState(e => {
          let t = v(e);
          return C(t, w(t))
        })
      })
    }, 250), e)
  },
  D = e => {
    let t = new Date().getTime();
    return null == e.shownFatigableCandidate && t - e.lastWinnerTime < E
  },
  x = e => {
    let t = d.C.has(e.content);
    (0, a.r)(() => {
      b.setState(n => {
        let r = v(n);
        return O ? r : t ? I(r, e) : P(S(r, e))
      })
    })
  },
  L = (e, t) => {
    (0, a.r)(() => {
      b.setState(n => {
        let r = v(n);
        return t ? P(A(T(r, e), e)) : A(T(r, e), e)
      })
    })
  },
  j = e => b.getState().currentlyShown.has(e),
  M = e => b(t => t.currentlyShown.has(e)),
  k = () => {
    let e = [...b.getState().currentlyShown].filter(e => !d.C.has(e)).length;
    return [b.getState().currentlyShown.size, e]
  },
  U = () => {
    (0, a.r)(() => {
      b.setState(() => {
        let e = y();
        return e.postConnectionOpen = true, e
      })
    }), m.unschedule()
  },
  G = () => b.getState().postConnectionOpen;
class V extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.A, u.A), this.syncWith([l.A, u.A], () => this.setHasRequiredAction())
  }
  setHasRequiredAction() {
    O = (0, c.A)(l.A, u.A)
  }
}

function F(e, t) {
  return b(e, t)
}
f(V, "displayName", "DismissibleContentShownStateStore"), new V(Chunk73153.h, {
  CONNECTION_OPEN: () => U(),
  LOGOUT: () => U()
})