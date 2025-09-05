/** Chunk was on 30355 **/
/** chunk id: 938236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => u
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk879690 = require("./879690.js"),
  Chunk296009 = require("./296009.js"),
  Chunk570911 = require("./570911.js");

function s(e) {
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

function o(e, t) {
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
let c = (0, Chunk392711.sampleSize)(Chunk570911.J6, Chunk570911.J6.length),
  u = (0, Chunk879690.U)((e, t) => ({
    stack: [],
    wishlistStack: [],
    gameIds: {},
    peekedGameIds: {},
    onLoad: (n, r, l) => {
      let a = new Set(l.map(e => e.applicationId));
      for (let l of (e({
          stack: [...n.filter(e => !a.has(e)), ...c],
          wishlistStack: [...r.filter(e => !a.has(e)), ...c]
        }), Object.values(i.l))) t().setNext(6, l)
    },
    setNext: (e, n) => {
      let r = t().getNext(e, n);
      t()._setGameIds(n, r);
      let l = t().peekNext(7, n);
      t()._setPeekedGameIds(n, l)
    },
    getNext: (e, n) => {
      let r = n === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
        l = r.slice(0, e),
        a = r.slice(e);
      return t()._setStack(n, a), l
    },
    peekNext: (e, n) => (n === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
    bump: (e, n) => {
      var r;
      let l = null != (r = t().gameIds[n]) ? r : [],
        i = l.indexOf(e);
      if (false === i) return;
      let a = [...l];
      a.splice(i, 1);
      let s = t().getNext(1, n),
        o = t().peekNext(7, n);
      t()._setGameIds(n, [...a, ...s]), t()._setPeekedGameIds(n, [...o, ...s])
    },
    bumpMultiple: (e, n) => {
      var r;
      let l = (null != (r = t().gameIds[n]) ? r : []).filter(t => !e.includes(t)),
        i = t().getNext(6 - l.length, n),
        a = t().peekNext(7, n);
      t()._setGameIds(n, [...l, ...i]), t()._setPeekedGameIds(n, [...a, ...i])
    },
    remove: (e, n) => {
      let r = (n === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter(t => t !== e);
      t()._setStack(n, r), t()._setPeekedGameIds(n, t().peekNext(7, n))
    },
    _setGameIds: (t, n) => {
      e(e => ({
        gameIds: o(s({}, e.gameIds), {
          [t]: n
        })
      }))
    },
    _setStack: (t, n) => {
      t === i.l.WANT_TO_PLAY_GAMES ? e({
        wishlistStack: n
      }) : e({
        stack: n
      })
    },
    _setPeekedGameIds: (t, n) => {
      e(e => ({
        peekedGameIds: o(s({}, e.peekedGameIds), {
          [t]: n
        })
      }))
    }
  }))