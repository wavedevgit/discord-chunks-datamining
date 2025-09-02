/** Chunk was on 30355 **/
/** chunk id: 938236, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => u
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk879690 = require("./879690.js"),
  Chunk296009 = require("./296009.js"),
  Chunk570911 = require("./570911.js");

function a(e) {
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

function o(e, t) {
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
let c = (0, Chunk392711.sampleSize)(Chunk570911.J6, Chunk570911.J6.length),
  u = (0, Chunk879690.U)((e, t) => ({
    stack: [],
    wishlistStack: [],
    gameIds: {},
    peekedGameIds: {},
    onLoad: (r, n, l) => {
      let s = new Set(l.map(e => e.applicationId));
      for (let l of (e({
          stack: [...r.filter(e => !s.has(e)), ...c],
          wishlistStack: [...n.filter(e => !s.has(e)), ...c]
        }), Object.values(i.l))) t().setNext(6, l)
    },
    setNext: (e, r) => {
      let n = t().getNext(e, r);
      t()._setGameIds(r, n);
      let l = t().peekNext(7, r);
      t()._setPeekedGameIds(r, l)
    },
    getNext: (e, r) => {
      let n = r === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
        l = n.slice(0, e),
        s = n.slice(e);
      return t()._setStack(r, s), l
    },
    peekNext: (e, r) => (r === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
    bump: (e, r) => {
      var n;
      let l = null != (n = t().gameIds[r]) ? n : [],
        i = l.indexOf(e);
      if (false === i) return;
      let s = [...l];
      s.splice(i, 1);
      let a = t().getNext(1, r),
        o = t().peekNext(7, r);
      t()._setGameIds(r, [...s, ...a]), t()._setPeekedGameIds(r, [...o, ...a])
    },
    bumpMultiple: (e, r) => {
      var n;
      let l = (null != (n = t().gameIds[r]) ? n : []).filter(t => !e.includes(t)),
        i = t().getNext(6 - l.length, r),
        s = t().peekNext(7, r);
      t()._setGameIds(r, [...l, ...i]), t()._setPeekedGameIds(r, [...s, ...i])
    },
    remove: (e, r) => {
      let n = (r === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter(t => t !== e);
      t()._setStack(r, n), t()._setPeekedGameIds(r, t().peekNext(7, r))
    },
    _setGameIds: (t, r) => {
      e(e => ({
        gameIds: o(a({}, e.gameIds), {
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
        peekedGameIds: o(a({}, e.peekedGameIds), {
          [t]: r
        })
      }))
    }
  }))