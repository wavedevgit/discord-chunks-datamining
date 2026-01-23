/** Chunk was on web.js **/
/** chunk id: 794383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js"), require("./747238.js"), require("./65821.js"), require("./321073.js"), require("./848778.js");
var r, Chunk812729 = require("./812729.js"),
  a = require.n(Chunk812729),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk77468 = require("./77468.js"),
  Chunk573648 = require("./573648.js"),
  Chunk139675 = require("./139675.js"),
  Chunk927813 = require("./927813.js"),
  Chunk962173 = require("./962173.js"),
  Chunk351906 = require("./351906.js"),
  Chunk652215 = require("./652215.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = "33kozedd0zs6fbauka98psnc7zwom2s",
  E = +Chunk927813.A.Millis.MINUTE,
  y = e => "https://youtube.com/watch?v=".concat(e),
  b = 5 * Chunk927813.A.Millis.MINUTE,
  O = "https://api.twitch.tv/helix",
  v = /live_user_(.*)-\{width\}/,
  A = 128,
  I = null,
  S = 0,
  T = null,
  C = new Set,
  N = {};

function w(e) {
  var t;
  return null == (t = v.exec(e)) ? true : t[1]
}

function R(e, t, n) {
  return o.Bo.get({
    url: "".concat(O).concat(e),
    query: t,
    headers: {
      "Client-ID": g,
      Authorization: "Bearer ".concat(n)
    },
    rejectWithError: false
  })
}
async function P(e, t) {
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
    this._started || (this._started = true, p.A.isFetching() ? c.A.fetch() : this._check())
  }
  stop() {
    this._started = false, T = null, S = 0, null != this._nextCheck && clearTimeout(this._nextCheck), l.h.dispatch({
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
      }, t), s = a[0];
      if (null == s || "live" !== s.type) throw Error("no stream");
      let {
        thumbnail_url: o,
        game_id: l,
        title: c
      } = s, f = {
        large_image: null != o && null != (n = (0, d.Di)(h.fg2.TWITCH, o)) ? n : true
      }, p = await P(l, t), _ = u.A.get(h.fg2.TWITCH), m = null != (r = w(o)) ? r : e.name, g = null != c && "" !== c ? c.slice(0, A) : true, E = null != p && "" !== p ? p.slice(0, A) : true;
      return {
        url: null == (i = _.getPlatformUserUrl) ? true : i.call(_, {
          id: e.id,
          name: m
        }),
        name: _.name,
        assets: f,
        details: g,
        state: E
      }
    } catch (n) {
      if (401 === n.status && null == t) return c.A.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
      return null
    }
  }
  async _checkYouTube(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    if (T = null, e.revoked || C.has(e.id)) return null;
    try {
      var n;
      let {
        body: {
          items: r
        }
      } = await o.Bo.get({
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
          thumbnails: s
        }
      } = r[0], l = {
        large_image: null != (n = (0, d.Di)(h.fg2.YOUTUBE, s.high.url)) ? n : true
      }, c = null != a && "" !== a ? a.slice(0, A) : true;
      return T = {
        url: y(i),
        name: u.A.get(h.fg2.YOUTUBE).name,
        details: c,
        assets: l
      }
    } catch (n) {
      if (401 === n.status && null == t) return c.A.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
      return 403 === n.status && C.add(e.id), null
    }
  }
  _check() {
    if (!this._started) return;
    let e = p.A.getAccounts();
    if (null == e) return;
    null != this._nextCheck && clearTimeout(this._nextCheck);
    let t = [h.fg2.TWITCH],
      n = Date.now();
    S <= n && (t.push(h.fg2.YOUTUBE), S = n + b), Promise.allSettled(e.filter(e => t.includes(e.type)).map(e => e.type === h.fg2.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))).then(e => {
      if (this._started) {
        var t;
        let n = null == (t = e.find(e => "fulfilled" === e.status && null != e.value)) ? true : t.value;
        null == n && null != T && (n = T), l.h.dispatch({
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
    m(this, "_nextCheck", true), m(this, "_started", true), this._started = false
  }
}
let x = new D;

function L() {
  _.A.enabled ? x.start() : x.stop()
}

function j(e) {
  var t;
  if (a()(e.stream, I)) returnfalse;
  I = null != (t = e.stream) ? t : null
}
class M extends(r = Chunk311907.Ay.Store) {
  initialize() {
    L(), this.waitFor(p.A, _.A), this.syncWith([_.A], L)
  }
  getStream() {
    return I
  }
}
m(M, "displayName", "ExternalStreamingStore");
let k = new M(Chunk73153.h, {
  STREAMING_UPDATE: j,
  USER_CONNECTIONS_UPDATE: () => x._check()
})