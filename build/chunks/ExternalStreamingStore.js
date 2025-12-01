/** Chunk was on web.js **/
/** chunk id: 272053, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./35282.js"), require("./415506.js"), require("./539854.js"), require("./993155.js");
var r, Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk457330 = require("./457330.js"),
  Chunk726542 = require("./726542.js"),
  Chunk81063 = require("./81063.js"),
  Chunk70956 = require("./70956.js"),
  Chunk553795 = require("./553795.js"),
  Chunk246946 = require("./246946.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = "33kozedd0zs6fbauka98psnc7zwom2s",
  E = +Chunk70956.Z.Millis.MINUTE,
  b = e => "https://youtube.com/watch?v=".concat(e),
  y = 5 * Chunk70956.Z.Millis.MINUTE,
  O = "https://api.twitch.tv/helix",
  v = /live_user_(.*)-\{width\}/,
  S = 128,
  I = null,
  T = 0,
  A = null,
  C = new Set,
  N = {};

function P(e) {
  var t;
  return null == (t = v.exec(e)) ? true : t[1]
}

function R(e, t, n) {
  return s.tn.get({
    url: "".concat(O).concat(e),
    query: t,
    headers: {
      "Client-ID": g,
      Authorization: "Bearer ".concat(n)
    },
    rejectWithError: false
  })
}
async function w(e, t) {
  var n;
  let r = N[e];
  if (null != r) return r;
  let {
    body: {
      data: i
    }
  } = await R("/games", {
    id: e
  }, t), a = null == (n = i[0]) ? true : n.name;
  return N[e] = a, a
}
class D {
  start() {
    this._started || (this._started = true, Chunk553795.Z.isFetching() ? Chunk457330.Z.fetch() : this._check())
  }
  stop() {
    this._started = false, A = null, T = 0, null != this._nextCheck && clearTimeout(this._nextCheck), Chunk570140.Z.dispatch({
      type: "STREAMING_UPDATE",
      stream: null
    })
  }
  async _checkTwitch(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
    try {
      var n, r, i;
      let {
        body: {
          data: a
        }
      } = await R("/streams", {
        user_id: e.id,
        first: 1
      }, t), o = a[0];
      if (null == o || "live" !== o.type) throw Error("no stream");
      let {
        thumbnail_url: s,
        game_id: l,
        title: c
      } = o, f = {
        large_image: null != s && null != (r = (0, d.f)(m.ABu.TWITCH, s)) ? r : true
      }, p = await w(l, t), _ = u.Z.get(m.ABu.TWITCH), h = null != (i = P(s)) ? i : e.name, g = null != c && "" !== c ? c.slice(0, S) : true, E = null != p && "" !== p ? p.slice(0, S) : true;
      return {
        url: null == (n = _.getPlatformUserUrl) ? true : n.call(_, {
          id: e.id,
          name: h
        }),
        name: _.name,
        assets: f,
        details: g,
        state: E
      }
    } catch (n) {
      if (401 === n.status && null == t) return c.Z.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
      return null
    }
  }
  async _checkYouTube(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    if (A = null, e.revoked || C.has(e.id)) return null;
    try {
      var n;
      let {
        body: {
          items: r
        }
      } = await s.tn.get({
        url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
        query: {
          part: "id,snippet",
          broadcastStatus: "active",
          broadcastType: "all"
        },
        headers: {
          Authorization: "Bearer ".concat(null != t ? t : e.accessToken)
        },
        oldFormErrors: true,
        rejectWithError: false
      });
      if (r.length < 1) throw Error("no stream");
      let {
        id: i,
        snippet: {
          title: a,
          thumbnails: o
        }
      } = r[0], l = {
        large_image: null != (n = (0, d.f)(m.ABu.YOUTUBE, o.high.url)) ? n : true
      }, c = null != a && "" !== a ? a.slice(0, S) : true;
      return A = {
        url: b(i),
        name: u.Z.get(m.ABu.YOUTUBE).name,
        details: c,
        assets: l
      }
    } catch (n) {
      if (401 === n.status && null == t) return c.Z.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
      return 403 === n.status && C.add(e.id), null
    }
  }
  _check() {
    if (!this._started) return;
    let e = Chunk553795.Z.getAccounts();
    if (null == module) return;
    null != this._nextCheck && clearTimeout(this._nextCheck);
    let t = [Chunk981631.ABu.TWITCH],
      n = Date.now();
    T <= require && (exports.push(Chunk981631.ABu.YOUTUBE), T = require + y), Promise.allSettled(module.filter(e => t.includes(e.type)).map(e => e.type === m.ABu.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))).then(e => {
      if (this._started) {
        var t;
        let n = null == (t = e.find(e => "fulfilled" === e.status && null != e.value)) ? true : t.value;
        null == n && null != A && (n = A), l.Z.dispatch({
          type: "STREAMING_UPDATE",
          stream: n
        })
      }
      this._scheduleCheck()
    })
  }
  _scheduleCheck() {
    this._started && (this._nextCheck = setTimeout(() => this._check(), E))
  }
  constructor() {
    h(this, "_nextCheck", true), h(this, "_started", true), this._started = false
  }
}
let x = new D;

function L() {
  Chunk246946.Z.enabled ? x.start() : x.stop()
}

function j(e) {
  var t;
  if (a()(e.stream, I)) returnfalse;
  I = null != (t = e.stream) ? t : null
}
class M extends(r = Chunk442837.ZP.Store) {
  initialize() {
    L(), this.waitFor(Chunk553795.Z, Chunk246946.Z), this.syncWith([Chunk246946.Z], L)
  }
  getStream() {
    return I
  }
}
h(M, "displayName", "ExternalStreamingStore");
let k = new M(Chunk570140.Z, {
  STREAMING_UPDATE: j,
  USER_CONNECTIONS_UPDATE: () => x._check()
})