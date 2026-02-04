/** Chunk was on 59569 **/
/** chunk id: 911498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => u
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  Chunk353640 = require("./353640.js"),
  Chunk540185 = require("./540185.js"),
  Chunk282435 = require("./282435.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = (0, Chunk735438.sampleSize)(Chunk282435.cG, Chunk282435.cG.length),
  u = (0, Chunk353640.v)((e, t) => ({
    stack: [],
    wishlistStack: [],
    gameIds: {},
    peekedGameIds: {},
    onLoad: (n, r, l) => {
      let a = new Set(l.map(e => e.applicationId));
      for (let l of (e({
          stack: [...n.filter(e => !a.has(e)), ...c],
          wishlistStack: [...r.filter(e => !a.has(e)), ...c]
        }), Object.values(i.x))) t().setNext(6, l)
    },
    setNext: (e, n) => {
      let r = t().getNext(e, n);
      t()._setGameIds(n, r);
      let l = t().peekNext(7, n);
      t()._setPeekedGameIds(n, l)
    },
    getNext: (e, n) => {
      let r = n === i.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
        l = r.slice(0, e),
        a = r.slice(e);
      return t()._setStack(n, a), l
    },
    peekNext: (e, n) => (n === i.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
    bump: (e, n) => {
      var r;
      let l = null != (r = t().gameIds[n]) ? r : [],
        i = l.indexOf(e);
      if (false === i) return;
      let a = [...l];
      a.splice(i, 1);
      let o = t().getNext(1, n),
        s = t().peekNext(7, n);
      t()._setGameIds(n, [...a, ...o]), t()._setPeekedGameIds(n, [...s, ...o])
    },
    bumpMultiple: (e, n) => {
      var r;
      let l = (null != (r = t().gameIds[n]) ? r : []).filter(t => !e.includes(t)),
        i = t().getNext(6 - l.length, n),
        a = t().peekNext(7, n);
      t()._setGameIds(n, [...l, ...i]), t()._setPeekedGameIds(n, [...a, ...i])
    },
    remove: (e, n) => {
      let r = (n === i.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter(t => t !== e);
      t()._setStack(n, r), t()._setPeekedGameIds(n, t().peekNext(7, n))
    },
    _setGameIds: (t, n) => {
      e(e => ({
        gameIds: s(o({}, e.gameIds), {
          [t]: n
        })
      }))
    },
    _setStack: (t, n) => {
      t === i.x.WANT_TO_PLAY_GAMES ? e({
        wishlistStack: n
      }) : e({
        stack: n
      })
    },
    _setPeekedGameIds: (t, n) => {
      e(e => ({
        peekedGameIds: s(o({}, e.peekedGameIds), {
          [t]: n
        })
      }))
    }
  }))