/** Chunk was on 52708 **/
/** chunk id: 938236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => u
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk663042 = require("./663042.js"),
  Chunk296009 = require("./296009.js"),
  Chunk570911 = require("./570911.js");

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

function c(e, t) {
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
let s = (0, Chunk392711.sampleSize)(Chunk570911.J6, Chunk570911.J6.length),
  u = (0, Chunk663042.U)((e, t) => ({
    stack: [],
    wishlistStack: [],
    gameIds: {},
    peekedGameIds: {},
    onLoad: (n, r, i) => {
      let l = new Set(i.map(e => e.applicationId));
      for (let i of (e({
          stack: [...n.filter(e => !l.has(e)), ...s],
          wishlistStack: [...r.filter(e => !l.has(e)), ...s]
        }), Object.values(a.l))) t().setNext(6, i)
    },
    setNext: (e, n) => {
      let r = t().getNext(e, n);
      t()._setGameIds(n, r);
      let i = t().peekNext(7, n);
      t()._setPeekedGameIds(n, i)
    },
    getNext: (e, n) => {
      let r = n === a.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
        i = r.slice(0, e),
        l = r.slice(e);
      return t()._setStack(n, l), i
    },
    peekNext: (e, n) => (n === a.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
    bump: (e, n) => {
      var r;
      let i = null != (r = t().gameIds[n]) ? r : [],
        a = i.indexOf(e);
      if (false === a) return;
      let l = [...i];
      l.splice(a, 1);
      let o = t().getNext(1, n),
        c = t().peekNext(7, n);
      t()._setGameIds(n, [...l, ...o]), t()._setPeekedGameIds(n, [...c, ...o])
    },
    bumpMultiple: (e, n) => {
      var r;
      let i = (null != (r = t().gameIds[n]) ? r : []).filter(t => !e.includes(t)),
        a = t().getNext(6 - i.length, n),
        l = t().peekNext(7, n);
      t()._setGameIds(n, [...i, ...a]), t()._setPeekedGameIds(n, [...l, ...a])
    },
    remove: (e, n) => {
      let r = (n === a.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter(t => t !== e);
      t()._setStack(n, r), t()._setPeekedGameIds(n, t().peekNext(7, n))
    },
    _setGameIds: (t, n) => {
      e(e => ({
        gameIds: c(o({}, e.gameIds), {
          [t]: n
        })
      }))
    },
    _setStack: (t, n) => {
      t === a.l.WANT_TO_PLAY_GAMES ? e({
        wishlistStack: n
      }) : e({
        stack: n
      })
    },
    _setPeekedGameIds: (t, n) => {
      e(e => ({
        peekedGameIds: c(o({}, e.peekedGameIds), {
          [t]: n
        })
      }))
    }
  }))