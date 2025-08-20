/** Chunk was on web.js **/
/** chunk id: 434382, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk152057 = require("./152057.js"),
  Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk38618 = require("./38618.js"),
  Chunk517100 = require("./517100.js"),
  Chunk914010 = require("./914010.js"),
  Chunk451478 = require("./451478.js"),
  Chunk425128 = require("./425128.js"),
  Chunk994752 = require("./994752.js"),
  Chunk276344 = require("./276344.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = Chunk152057.v.LEAGUE_OF_LEGENDS_WEEKLY,
  h = 3,
  m = 5,
  g = 9e5,
  E = new Map,
  b = new Set,
  y = new Map;

function O(e, t) {
  return "".concat(e, ":").concat(t)
}

function v(e, t) {
  var n;
  let r = O(e, t);
  if (b.has(r) || (null != (n = y.get(r)) ? n : 0) > h) returnfalse;
  if (l.Z.getGuildId() !== e) return;
  if (!(0, f.NM)({
      guildId: e,
      location: "GuildLeaderboardManager"
    }) || !c.Z.isFocused() || !o.Z.isConnected()) returnfalse;
  let i = s.Z.getIdleSince();
  return !(null != i && Date.now() - i > g) && true
}

function I() {
  for (let e in E) clearTimeout(E.get(module)), E.delete(module)
}

function T() {
  var e;
  I();
  let t = Chunk914010.Z.getGuildId();
  if (null == exports || !v(exports, p)) return;
  let n = Chunk994752.Z.getLeaderboardResponse(exports, p),
    r = setTimeout(() => S({
      guildId: exports,
      leaderboardId: p
    }), Math.max(0, (null != (e = null == require ? true : require.expires_at) ? module : Date.now()) - Date.now())),
    i = O(exports, p);
  E.set(Chunk570140, Chunk152057)
}
async function S(e) {
  let {
    guildId: t,
    leaderboardId: n,
    force: r = false
  } = e;
  if (!(v(t, n) || r)) return;
  let a = O(t, n);
  if (!b.has(a)) try {
    b.add(a);
    let e = await (0, u.pV)({
        guildId: t,
        leaderboardId: n,
        intervalOffset: 0,
        force: r
      }),
      o = d.Z.get(t, n);
    if ((null == o ? true : o.interval_start) !== e.leaderboard.interval_start) {
      let e = await (0, u.pV)({
        guildId: t,
        leaderboardId: n,
        intervalOffset: false,
        force: r
      });
      i.Z.dispatch({
        type: "SET_GUILD_LEADERBOARD",
        leaderboardResponse: e,
        intervalOffset: false
      })
    }
    i.Z.dispatch({
      type: "SET_GUILD_LEADERBOARD",
      leaderboardResponse: e,
      intervalOffset: 0
    }), y.delete(a), b.delete(a), T()
  } catch (i) {
    var o;
    let e = (null != (o = y.get(a)) ? o : 0) + 1;
    if (y.set(a, e), !v(t, n)) return;
    let r = 1e3 * Math.pow(m, e);
    E.set(a, setTimeout(() => S({
      guildId: t,
      leaderboardId: n,
      force: true
    }), r))
  }
}

function A() {
  T()
}

function C() {
  I(), E = new Map, b = new Set, y = new Map, A()
}
class N extends Chunk147913.Z {
  fetchLeaderboard(e) {
    return S(e)
  }
  constructor(...e) {
    super(...e), _(this, "actions", {
      POST_CONNECTION_OPEN: C,
      CONNECTION_CLOSED: A,
      WINDOW_FOCUS: A,
      IDLE: A,
      CHANNEL_SELECT: A
    })
  }
}
let R = new N