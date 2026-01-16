/** Chunk was on web.js **/
/** chunk id: 211644, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Aq: () => k,
  Kl: () => G,
  ZP: () => F,
  bn: () => M,
  cI: () => j,
  f0: () => x,
  gE: () => L
}), require("./388685.js"), require("./290780.js");
var r, Chunk524550 = require("./524550.js"),
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = new(require("./499303.js")).I,
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
  y = (0, Chunk524550.F)(b),
  O = false,
  v = e => h(p({}, e), {
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
  w = e => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
  R = e => {
    if (0 === e.candidates.size) return e;
    let t = new Date().getTime() - e.lastWinnerTime > g;
    return w(e) && !t ? (m.unschedule(), A(e, N(e))) : (null != e.shownFatigableCandidate && !t || m.scheduled() || D(e) || m.schedule(() => {
      (0, a.j)(() => {
        y.setState(e => {
          let t = v(e);
          return A(t, P(t))
        })
      })
    }, 250), e)
  },
  D = e => {
    let t = new Date().getTime();
    return null == e.shownFatigableCandidate && t - e.lastWinnerTime < E
  },
  x = e => {
    let t = d.O.has(e.content);
    (0, a.j)(() => {
      y.setState(n => {
        let r = v(n);
        return O ? r : t ? I(r, e) : R(T(r, e))
      })
    })
  },
  L = (e, t) => {
    (0, a.j)(() => {
      y.setState(n => {
        let r = v(n);
        return t ? R(S(C(r, e), e)) : S(C(r, e), e)
      })
    })
  },
  j = e => y.getState().currentlyShown.has(e),
  M = e => y(t => t.currentlyShown.has(e)),
  k = () => {
    let e = [...y.getState().currentlyShown].filter(e => !d.O.has(e)).length;
    return [y.getState().currentlyShown.size, e]
  },
  U = () => {
    (0, a.j)(() => {
      y.setState(() => {
        let e = b();
        return e.postConnectionOpen = true, e
      })
    }), m.unschedule()
  },
  G = () => y.getState().postConnectionOpen;
class Z extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(l.Z, u.Z), this.syncWith([l.Z, u.Z], () => this.setHasRequiredAction())
  }
  setHasRequiredAction() {
    O = (0, c.Z)(l.Z, u.Z)
  }
}

function F(e, t) {
  return y(e, t)
}
f(Z, "displayName", "DismissibleContentShownStateStore"), new Z(Chunk570140.Z, {
  CONNECTION_OPEN: () => U(),
  LOGOUT: () => U()
})