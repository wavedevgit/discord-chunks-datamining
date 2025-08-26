/** Chunk was on 21585 **/
/** chunk id: 938236, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => u
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk879690 = require("./879690.js"),
  Chunk296009 = require("./296009.js"),
  Chunk570911 = require("./570911.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let s = (0, Chunk392711.sampleSize)(Chunk570911.J6, Chunk570911.J6.length),
  u = (0, Chunk879690.U)((e, t) => ({
    stack: [],
    wishlistStack: [],
    gameIds: {},
    peekedGameIds: {},
    onLoad: (r, n, a) => {
      let l = new Set(a.map(e => e.applicationId));
      for (let a of (e({
          stack: [...r.filter(e => !l.has(e)), ...s],
          wishlistStack: [...n.filter(e => !l.has(e)), ...s]
        }), Object.values(i.l))) t().setNext(6, a)
    },
    setNext: (e, r) => {
      let n = t().getNext(e, r);
      t()._setGameIds(r, n);
      let a = t().peekNext(7, r);
      t()._setPeekedGameIds(r, a)
    },
    getNext: (e, r) => {
      let n = r === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
        a = n.slice(0, e),
        l = n.slice(e);
      return t()._setStack(r, l), a
    },
    peekNext: (e, r) => (r === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
    bump: (e, r) => {
      var n;
      let a = null != (n = t().gameIds[r]) ? n : [],
        i = a.indexOf(e);
      if (false === i) return;
      let l = [...a];
      l.splice(i, 1);
      let o = t().getNext(1, r),
        c = t().peekNext(7, r);
      t()._setGameIds(r, [...l, ...o]), t()._setPeekedGameIds(r, [...c, ...o])
    },
    bumpMultiple: (e, r) => {
      var n;
      let a = (null != (n = t().gameIds[r]) ? n : []).filter(t => !e.includes(t)),
        i = t().getNext(6 - a.length, r),
        l = t().peekNext(7, r);
      t()._setGameIds(r, [...a, ...i]), t()._setPeekedGameIds(r, [...l, ...i])
    },
    remove: (e, r) => {
      let n = (r === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter(t => t !== e);
      t()._setStack(r, n), t()._setPeekedGameIds(r, t().peekNext(7, r))
    },
    _setGameIds: (t, r) => {
      e(e => ({
        gameIds: c(o({}, e.gameIds), {
          [t]: r
        })
      }))
    },
    _setStack: (t, r) => {
      t === i.l.WANT_TO_PLAY_GAMES ? e({
        wishlistStack: r
      }) : e({
        stack: r
      })
    },
    _setPeekedGameIds: (t, r) => {
      e(e => ({
        peekedGameIds: c(o({}, e.peekedGameIds), {
          [t]: r
        })
      }))
    }
  }))