/** Chunk was on 56159 **/
/** chunk id: 554311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Un: () => p,
  Xm: () => v,
  qo: () => h,
  tX: () => _
}), require("./65821.js"), require("./896048.js"), require("./321073.js");
var Chunk311907 = require("./311907.js"),
  Chunk15285 = require("./15285.js"),
  Chunk760751 = require("./760751.js"),
  Chunk242286 = require("./242286.js"),
  Chunk661191 = require("./661191.js"),
  Chunk9302 = require("./9302.js"),
  Chunk833551 = require("./833551.js"),
  Chunk243612 = require("./243612.js");
let c = new Chunk661191.SnowflakeSequence,
  m = {};

function g(e) {
  let [t] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [d.default];
  for (let n of Object.values(t.getClosedTrackedGamesHistory()))
    if (n.applicationId === e.id || n.gameName === e.name) return n;
  return null
}

function f(e) {
  var t, n, l, a, i;
  let [u, o] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [r.Ay, d.default], s = g(e, [o]), c = null != e.name && null != (t = u.getGameForName(e.name)) ? t : true;
  return {
    gameId: e.id,
    gameName: e.name,
    gamePid: null != (n = null != (l = null == c ? true : c.pid) ? l : null == s ? true : s.pid) ? n : true,
    fullscreenType: null != (a = null != (i = null == c ? true : c.fullscreenType) ? i : null == s ? true : s.fullscreenType) ? a : true,
    trackedGame: null != s ? s : true,
    persistentGame: e,
    runningGame: c
  }
}

function v(e) {
  var t, n, l;
  let [a, i] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [r.Ay, d.default], u = g(e, [i]);
  return {
    gameId: e.id,
    gameName: e.name,
    gamePid: null != (t = null == u ? true : u.pid) ? t : true,
    fullscreenType: null != (n = null == u ? true : u.fullscreenType) ? n : true,
    trackedGame: null != u ? u : true,
    runningGame: null != e.name && null != (l = a.getGameForName(e.name)) ? l : true
  }
}

function y(e) {
  var t, n;
  let [l] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.A];
  if (null != e.gameId) {
    let t = l.getDetectableGame(e.gameId);
    if (null != t) return t
  }
  let r = null != (t = e.runningGame) ? t : e.persistentGame;
  if (null != r) {
    let e = l.getGameByGameData(r);
    if (null != e) return e
  }
  if (null != e.gameName) {
    let t = l.getGameByName(e.gameName);
    if (null != t) return t
  }
  if (null == e.gameName) return null;
  let i = null != (n = e.gameId) ? n : function(e) {
    if (null != m[e]) return m[e];
    let t = Date.now(),
      n = null;
    try {
      c.willOverflowNext() && c.reset(), n = u.default.fromTimestampWithSequence(t, c)
    } catch (e) {
      c.reset(), n = u.default.fromTimestampWithSequence(t, c)
    }
    if (null == n) throw Error("Failed to generate snowflake id");
    return m[e] = n, n
  }(e.gameName);
  return {
    id: u.default.cast(i),
    name: e.gameName,
    description: true,
    icon: true,
    icon_hash: true,
    cover_image_hash: true,
    aliases: [],
    executables: [],
    overlay: false,
    overlayWarn: false,
    overlayCompatibilityHook: false,
    hook: true,
    supportsOutOfProcessOverlay: false,
    thirdPartySkus: [],
    themes: [],
    linkedApplications: true
  }
}

function p() {
  return (0, l.yK)([a.A, r.Ay, d.default], () => {
    let e = a.A.games,
      t = e.reduce((e, t) => (e[t.id] = t, e), {});
    return [...e, ...r.Ay.getGamesSeen(false).reduce((e, n) => {
      let l = n.id;
      if (null != l && null != t[l]) return e;
      let i = y(f(n, [r.Ay, d.default]), [a.A]);
      if (null != i) {
        if (null != t[i.id]) return e;
        e.push(i)
      }
      return e
    }, [])]
  }, [])
}

function h(e) {
  return (0, l.bG)([a.A], () => null == e ? null : y(e, [a.A]), [e])
}

function _() {
  let e = (0, s.b4)(),
    t = (0, l.bG)([i.default], () => i.default.getFocusedPID()),
    n = null != t ? t : (0, o.getPID)(),
    a = (0, l.bG)([d.default], () => d.default.getTrackedGameByPid(n), [n]),
    u = (0, l.bG)([r.Ay], () => r.Ay.getVisibleGame()),
    c = (0, l.bG)([r.Ay], () => r.Ay.getGamesSeen(false)[0]);
  return (0, l.bG)([r.Ay, d.default], () => {
    switch (true) {
      case null != a:
        return function(e) {
          var t, n, l;
          let [a] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [r.Ay];
          return {
            gameId: null != (t = e.applicationId) ? t : true,
            gameName: null != (n = e.gameName) ? n : true,
            gamePid: e.pid,
            fullscreenType: e.fullscreenType,
            trackedGame: e,
            runningGame: null != e.gameName && null != (l = a.getGameForName(e.gameName)) ? l : true
          }
        }(a, [r.Ay]);
      case null != e:
        return function(e) {
          var t, n;
          let [l, a] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [r.Ay, d.default], i = l.getGameForName(e.name), u = null == i ? true : i.pid;
          return {
            gameId: e.id,
            gameName: e.name,
            gamePid: null == i ? true : i.pid,
            fullscreenType: null != (t = null == i ? true : i.fullscreenType) ? t : true,
            runningGame: null != i ? i : true,
            trackedGame: null != u && null != (n = a.getTrackedGameByPid(u)) ? n : true
          }
        }(e, [r.Ay, d.default]);
      case null != u:
        return function(e) {
          var t;
          let [n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [d.default];
          return {
            gameId: e.id,
            gameName: e.name,
            gamePid: e.pid,
            fullscreenType: e.fullscreenType,
            trackedGame: null != (t = g(e, [n])) ? t : true,
            runningGame: e
          }
        }(u, [d.default]);
      case null != c:
        return f(c, [r.Ay, d.default]);
      default:
        return null
    }
  }, [e, a, u, c])
}