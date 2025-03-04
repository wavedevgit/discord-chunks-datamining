/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => S
}), n(47120);
var r, i = n(392711),
  o = n.n(i),
  a = n(442837),
  s = n(570140),
  l = n(569545),
  c = n(70722);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = 12e4,
  f = 1e4,
  _ = 5,
  p = {},
  h = {},
  g = new Set;

function m() {
  p = {}, h = {}
}

function E(e) {
  let {
    streamKey: t,
    previewURL: n
  } = e;
  p[t] = {
    url: n,
    expires: Date.now() + d
  }, h[t] = 0, g.delete(t)
}

function v(e) {
  let {
    streamKey: t,
    retryAfter: n
  } = e;
  p[t] = {
    url: null,
    expires: Date.now() + (null != n ? n : f * h[t])
  }, g.delete(t)
}

function b(e) {
  var t;
  let {
    streamKey: n
  } = e;
  h[n] = (null !== (t = h[n]) && void 0 !== t ? t : 0) + 1, g.add(n)
}

function y(e) {
  let {
    voiceStates: t
  } = e;
  return !(o().isEmpty(p) && o().isEmpty(h)) && t.reduce((e, t) => {
    let {
      userId: n,
      guildId: r,
      channelId: i,
      selfStream: o
    } = t;
    if (o) return e;
    let a = (0, l.V9)({
      streamType: null != r ? c.lo.GUILD : c.lo.CALL,
      guildId: r,
      channelId: i,
      ownerId: n
    });
    return delete p[a], delete h[a], !0
  }, !1)
}
class O extends(r = a.ZP.Store) {
  getPreviewURL(e, t, n) {
    let r = p[(0, l.V9)({
      streamType: null != e ? c.lo.GUILD : c.lo.CALL,
      guildId: e,
      channelId: t,
      ownerId: n
    })];
    return null == r ? void 0 : r.url
  }
  shouldFetchPreview(e, t, n) {
    var r;
    let i = (0, l.V9)({
        streamType: null != e ? c.lo.GUILD : c.lo.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
      }),
      o = p[i],
      a = null !== (r = h[i]) && void 0 !== r ? r : 0,
      s = null != o && Date.now() > o.expires;
    return (null == o && a < _ || s) && !g.has(i)
  }
  getPreviewURLForStreamKey(e) {
    let {
      guildId: t,
      channelId: n,
      ownerId: r
    } = (0, l.my)(e);
    return this.getPreviewURL(t, n, r)
  }
  getIsPreviewLoading(e, t, n) {
    let r = (0, l.V9)({
      streamType: null != e ? c.lo.GUILD : c.lo.CALL,
      guildId: e,
      channelId: t,
      ownerId: n
    });
    return g.has(r)
  }
}
u(O, "displayName", "ApplicationStreamPreviewStore");
let S = new O(s.Z, {
  CONNECTION_OPEN: m,
  LOGOUT: m,
  STREAM_PREVIEW_FETCH_START: b,
  STREAM_PREVIEW_FETCH_SUCCESS: E,
  STREAM_PREVIEW_FETCH_FAIL: v,
  VOICE_STATE_UPDATES: y
})