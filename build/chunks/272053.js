/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => j
}), n(47120), n(301563), n(411104), n(653041), n(998459);
var r, i = n(348327),
  o = n.n(i),
  a = n(442837),
  s = n(544891),
  l = n(570140),
  c = n(457330),
  u = n(726542),
  d = n(81063),
  f = n(70956),
  p = n(553795),
  _ = n(246946),
  h = n(981631);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = "33kozedd0zs6fbauka98psnc7zwom2s",
  E = +f.Z.Millis.MINUTE,
  v = e => "https://youtube.com/watch?v=".concat(e),
  b = 5 * f.Z.Millis.MINUTE,
  y = "https://api.twitch.tv/helix",
  O = /live_user_(.*)-\{width\}/,
  S = 128,
  I = null,
  T = 0,
  N = null,
  A = new Set,
  C = {};

function R(e) {
  var t;
  return null === (t = O.exec(e)) || void 0 === t ? void 0 : t[1]
}

function P(e, t, n) {
  return s.tn.get({
    url: "".concat(y).concat(e),
    query: t,
    headers: {
      "Client-ID": g,
      Authorization: "Bearer ".concat(n)
    },
    rejectWithError: !1
  })
}
async function w(e, t) {
  var n;
  let r = C[e];
  if (null != r) return r;
  let {
    body: {
      data: i
    }
  } = await P("/games", {
    id: e
  }, t), o = null === (n = i[0]) || void 0 === n ? void 0 : n.name;
  return C[e] = o, o
}
class D {
  start() {
    this._started || (this._started = !0, p.Z.isFetching() ? c.Z.fetch() : this._check())
  }
  stop() {
    this._started = !1, N = null, T = 0, null != this._nextCheck && clearTimeout(this._nextCheck), l.Z.dispatch({
      type: "STREAMING_UPDATE",
      stream: null
    })
  }
  async _checkTwitch(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
    try {
      var n, r, i;
      let {
        body: {
          data: o
        }
      } = await P("/streams", {
        user_id: e.id,
        first: 1
      }, t), a = o[0];
      if (null == a || "live" !== a.type) throw Error("no stream");
      let {
        thumbnail_url: s,
        game_id: l,
        title: c
      } = a, f = {
        large_image: null != s && null !== (r = (0, d.getAssetFromImageURL)(h.ABu.TWITCH, s)) && void 0 !== r ? r : void 0
      }, p = await w(l, t), _ = u.Z.get(h.ABu.TWITCH), m = null !== (i = R(s)) && void 0 !== i ? i : e.name, g = null != c && "" !== c ? c.slice(0, S) : void 0, E = null != p && "" !== p ? p.slice(0, S) : void 0;
      return {
        url: null === (n = _.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(_, {
          id: e.id,
          name: m
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
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (N = null, e.revoked || A.has(e.id)) return null;
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
        oldFormErrors: !0,
        rejectWithError: !1
      });
      if (r.length < 1) throw Error("no stream");
      let {
        id: i,
        snippet: {
          title: o,
          thumbnails: a
        }
      } = r[0], l = {
        large_image: null !== (n = (0, d.getAssetFromImageURL)(h.ABu.YOUTUBE, a.high.url)) && void 0 !== n ? n : void 0
      }, c = null != o && "" !== o ? o.slice(0, S) : void 0;
      return N = {
        url: v(i),
        name: u.Z.get(h.ABu.YOUTUBE).name,
        details: c,
        assets: l
      }
    } catch (n) {
      if (401 === n.status && null == t) return c.Z.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
      return 403 === n.status && A.add(e.id), null
    }
  }
  _check() {
    if (!this._started) return;
    let e = p.Z.getAccounts();
    if (null == e) return;
    null != this._nextCheck && clearTimeout(this._nextCheck);
    let t = [h.ABu.TWITCH],
      n = Date.now();
    T <= n && (t.push(h.ABu.YOUTUBE), T = n + b), Promise.allSettled(e.filter(e => t.includes(e.type)).map(e => e.type === h.ABu.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))).then(e => {
      if (this._started) {
        var t;
        let n = null === (t = e.find(e => "fulfilled" === e.status && null != e.value)) || void 0 === t ? void 0 : t.value;
        null == n && null != N && (n = N), l.Z.dispatch({
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
    m(this, "_nextCheck", void 0), m(this, "_started", void 0), this._started = !1
  }
}
let x = new D;

function L() {
  _.Z.enabled ? x.start() : x.stop()
}

function M(e) {
  var t;
  if (o()(e.stream, I)) return !1;
  I = null !== (t = e.stream) && void 0 !== t ? t : null
}
class k extends(r = a.ZP.Store) {
  initialize() {
    L(), this.waitFor(p.Z), this.syncWith([_.Z], L)
  }
  getStream() {
    return I
  }
}
m(k, "displayName", "ExternalStreamingStore");
let j = new k(l.Z, {
  STREAMING_UPDATE: M,
  USER_CONNECTIONS_UPDATE: () => x._check()
})