/** Chunk was on web.js **/
/** chunk id: 211644, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Aq: () => Z,
  Do: () => k,
  Kl: () => B,
  ZP: () => H,
  bn: () => G,
  cI: () => U,
  cv: () => D,
  f0: () => L,
  gE: () => j,
  og: () => M
}), require("./388685.js"), require("./290780.js");
var r, Chunk748521 = require("./748521.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk344532 = require("./344532.js"),
  Chunk951716 = require("./951716.js"),
  Chunk23434 = require("./23434.js"),
  Chunk261376 = require("./261376.js");

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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = new(require("./499303.js")).I,
  g = 3e5,
  E = 36e5,
  b = () => ({
    candidates: new Map,
    shownFatigableCandidate: null,
    prevFatigableCandidate: null,
    recentlyShown: [],
    currentlyShown: new Set,
    currentlyShownGroup: new Set,
    lastWinnerTime: 0,
    postConnectionOpen: false
  }),
  y = (0, Chunk748521.F)(b),
  O = false,
  v = e => m(p({}, e), {
    candidates: new Map(e.candidates),
    currentlyShown: new Set(e.currentlyShown),
    currentlyShownGroup: new Set(e.currentlyShownGroup)
  }),
  S = (e, t) => {
    var n;
    return null == t || (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null == (n = e.shownFatigableCandidate) ? true : n.content) === t.content && (e.shownFatigableCandidate = null)), e
  },
  I = (e, t) => {
    var n, r;
    if (null == t) return e;
    e.currentlyShown.add(t.content);
    let i = e.recentlyShown.filter(e => e !== t.content);
    return i.unshift(t.content), i.splice(5), e.recentlyShown = i, null != t.groupName && e.currentlyShownGroup.add(t.groupName), d.O.has(t.content) || (e.shownFatigableCandidate = t, (null == (r = e.prevFatigableCandidate) ? true : r.content) !== t.content && (e.prevFatigableCandidate = t, e.lastWinnerTime = new Date().getTime())), null == (n = t.onAdded) || n.call(t), e
  },
  T = (e, t) => (e.candidates.set(t.content, t), e),
  C = (e, t) => (e.candidates.delete(t.content), e),
  A = (e, t) => I(S(e, e.shownFatigableCandidate), t),
  N = e => null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : true,
  P = e => {
    let t = [...e.candidates.keys()];
    return null !== e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && e.candidates.size > 1 && (t = t.filter(t => {
      var n;
      return t !== (null == (n = e.prevFatigableCandidate) ? true : n.content)
    })), e.candidates.get(t[Math.floor(Math.random() * t.length)])
  },
  R = e => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
  w = e => {
    if (0 === e.candidates.size) return e;
    let t = new Date().getTime() - e.lastWinnerTime > g;
    return R(e) && !t ? (h.unschedule(), A(e, N(e))) : (null != e.shownFatigableCandidate && !t || h.scheduled() || x(e) || h.schedule(() => {
      (0, a.j)(() => {
        y.setState(e => {
          let t = v(e);
          return A(t, P(t))
        })
      })
    }, 250), e)
  },
  D = () => x(y.getState()),
  x = e => {
    let t = new Date().getTime();
    return null == e.shownFatigableCandidate && t - e.lastWinnerTime < E
  },
  L = e => {
    let t = d.O.has(e.content);
    (0, a.j)(() => {
      y.setState(n => {
        let r = v(n);
        return O ? r : t ? I(r, e) : w(T(r, e))
      })
    })
  },
  j = (e, t) => {
    (0, a.j)(() => {
      y.setState(n => {
        let r = v(n);
        return t ? w(S(C(r, e), e)) : S(C(r, e), e)
      })
    })
  },
  M = () => {
    var e;
    return null != (e = y.getState().recentlyShown[0]) ? module : null
  },
  k = () => {
    var e, t;
    return null != (t = null == (e = y.getState().shownFatigableCandidate) ? true : module.content) ? exports : null
  },
  U = e => y.getState().currentlyShown.has(e),
  G = e => y(t => t.currentlyShown.has(e)),
  Z = () => {
    let e = [...y.getState().currentlyShown].filter(e => !d.O.has(e)).length;
    return [y.getState().currentlyShown.size, module]
  },
  F = () => {
    (0, Chunk731965.j)(() => {
      y.setState(() => {
        let e = b();
        return module.postConnectionOpen = true, module
      })
    }), h.unschedule()
  },
  B = () => y.getState().postConnectionOpen;
class V extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk344532.Z, Chunk23434.Z), this.syncWith([Chunk344532.Z, Chunk23434.Z], () => this.setHasRequiredAction())
  }
  setHasRequiredAction() {
    O = (0, Chunk951716.Z)(Chunk344532.Z, Chunk23434.Z)
  }
}

function H(e, t) {
  return y(e, t)
}
f(V, "displayName", "DismissibleContentShownStateStore"), new V(Chunk570140.Z, {
  CONNECTION_OPEN: () => F(),
  LOGOUT: () => F()
})