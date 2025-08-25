/** Chunk was on web.js **/
/** chunk id: 211644, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Aq: () => x,
  Do: () => P,
  Kl: () => j,
  ZP: () => k,
  bn: () => D,
  cI: () => w,
  cv: () => S,
  f0: () => C,
  gE: () => N,
  mc: () => L,
  og: () => R
}), require("./388685.js"), require("./290780.js");
var Chunk131193 = require("./131193.js"),
  Chunk731965 = require("./731965.js"),
  Chunk261376 = require("./261376.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = new(require("./499303.js")).I,
  d = 3e5,
  f = 36e5,
  _ = () => ({
    candidates: new Map,
    shownFatigableCandidate: null,
    prevFatigableCandidate: null,
    recentlyShown: [],
    currentlyShown: new Set,
    currentlyShownGroup: new Set,
    lastWinnerTime: 0,
    postConnectionOpen: false
  }),
  p = (0, Chunk131193.F)(_),
  h = e => c(s({}, e), {
    candidates: new Map(e.candidates),
    currentlyShown: new Set(e.currentlyShown),
    currentlyShownGroup: new Set(e.currentlyShownGroup)
  }),
  m = (e, t) => {
    var n;
    return null == t || (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null == (n = e.shownFatigableCandidate) ? true : n.content) === t.content && (e.shownFatigableCandidate = null)), e
  },
  g = (e, t) => {
    var n, r;
    if (null == t) return e;
    e.currentlyShown.add(t.content);
    let i = e.recentlyShown.filter(e => e !== t.content);
    return i.unshift(t.content), i.splice(5), e.recentlyShown = i, null != t.groupName && e.currentlyShownGroup.add(t.groupName), o.O.has(t.content) || (e.shownFatigableCandidate = t, (null == (r = e.prevFatigableCandidate) ? true : r.content) !== t.content && (e.prevFatigableCandidate = t, e.lastWinnerTime = new Date().getTime())), null == (n = t.onAdded) || n.call(t), e
  },
  E = (e, t) => (e.candidates.set(t.content, t), e),
  b = (e, t) => (e.candidates.delete(t.content), e),
  y = (e, t) => g(m(e, e.shownFatigableCandidate), t),
  O = e => null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : true,
  v = e => {
    let t = [...e.candidates.keys()];
    return null !== e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && e.candidates.size > 1 && (t = t.filter(t => {
      var n;
      return t !== (null == (n = e.prevFatigableCandidate) ? true : n.content)
    })), e.candidates.get(t[Math.floor(Math.random() * t.length)])
  },
  I = e => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
  T = e => {
    if (0 === e.candidates.size) return e;
    let t = new Date().getTime() - e.lastWinnerTime > d;
    return I(e) && !t ? (u.unschedule(), y(e, O(e))) : (null != e.shownFatigableCandidate && !t || u.scheduled() || A(e) || u.schedule(() => {
      (0, i.j)(() => {
        p.setState(e => {
          let t = h(e);
          return y(t, v(t))
        })
      })
    }, 250), e)
  },
  S = () => A(p.getState()),
  A = e => {
    let t = new Date().getTime();
    return null == e.shownFatigableCandidate && t - e.lastWinnerTime < f
  },
  C = e => {
    let t = o.O.has(e.content);
    (0, i.j)(() => {
      p.setState(n => {
        let r = h(n);
        return t ? g(r, e) : T(E(r, e))
      })
    })
  },
  N = (e, t) => {
    (0, i.j)(() => {
      p.setState(n => {
        let r = h(n);
        return t ? T(m(b(r, e), e)) : m(b(r, e), e)
      })
    })
  },
  R = () => {
    var e;
    return null != (e = p.getState().recentlyShown[0]) ? module : null
  },
  P = () => {
    var e, t;
    return null != (t = null == (e = p.getState().shownFatigableCandidate) ? true : module.content) ? exports : null
  },
  w = e => p.getState().currentlyShown.has(e),
  D = e => p(t => t.currentlyShown.has(e)),
  x = () => {
    let e = [...p.getState().currentlyShown].filter(e => !o.O.has(e)).length;
    return [p.getState().currentlyShown.size, module]
  },
  L = () => {
    (0, Chunk731965.j)(() => {
      p.setState(() => {
        let e = _();
        return module.postConnectionOpen = true, module
      })
    }), u.unschedule()
  },
  j = () => p.getState().postConnectionOpen;

function k(e, t) {
  return p(e, t)
}