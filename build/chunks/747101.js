/** Chunk was on 11776 **/
/** chunk id: 747101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./539854.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk224706 = require("./224706.js"),
  Chunk669764 = require("./669764.js"),
  Chunk823379 = require("./823379.js");

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

function d(e, t) {
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

function u(e) {
  let t = r.useMemo(() => (function(e) {
    let t = [];
    return e.forEach(e => {
      let n = e.type;
      switch (n) {
        case l.l.FAVORITE_GAMES:
          t.push(e.game.applicationId);
          break;
        case l.l.CURRENT_GAMES:
        case l.l.WANT_TO_PLAY_GAMES:
        case l.l.PLAYED_GAMES:
          e.games.forEach(e => {
            t.push(e.applicationId)
          });
          break;
        default:
          (0, c.vE)(n)
      }
    }), [...new Set(t)]
  })(e), [e]);
  r.useEffect(() => {
    if (t.length > 0) {
      let e = t.filter(e => a.Z.canFetch(e));
      e.length > 0 && o.Z.getDetectableGamesSupplemental(e)
    }
  }, [t]);
  let n = (0, i.cj)([a.Z], () => {
    let e = {};
    return t.forEach(t => {
      e[t] = a.Z.getGame(t)
    }), e
  });
  return {
    widgets: r.useMemo(() => e.map(e => {
      let t = e.type;
      switch (t) {
        case l.l.FAVORITE_GAMES: {
          let t = n[e.game.applicationId],
            r = d(s({}, e.game), {
              gameName: null == t ? true : t.name,
              imageSrc: null == t ? true : t.coverImageUrl
            });
          return d(s({}, e), {
            game: r
          })
        }
        case l.l.CURRENT_GAMES:
        case l.l.WANT_TO_PLAY_GAMES:
        case l.l.PLAYED_GAMES: {
          let t = e.games.map(e => {
            let t = n[e.applicationId];
            return d(s({}, e), {
              gameName: null == t ? true : t.name,
              imageSrc: null == t ? true : t.coverImageUrl
            })
          });
          return d(s({}, e), {
            games: t
          })
        }
        default:
          return (0, c.vE)(t)
      }
    }), [e, n]),
    isGameFetching: r.useCallback(e => a.Z.isFetching(e), [])
  }
}