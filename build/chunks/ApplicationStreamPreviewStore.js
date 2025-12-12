/** Chunk was on web.js **/
/** chunk id: 543882, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk569545 = require("./569545.js"),
  Chunk70722 = require("./70722.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = 12e4,
  f = 1e4,
  p = 5,
  _ = {},
  m = {},
  h = new Set;

function g() {
  _ = {}, m = {}
}

function E(e) {
  let {
    streamKey: t,
    previewURL: n
  } = e;
  _[t] = {
    url: n,
    expires: Date.now() + d
  }, m[t] = 0, h.delete(t)
}

function b(e) {
  let {
    streamKey: t,
    retryAfter: n
  } = e;
  _[t] = {
    url: null,
    expires: Date.now() + (null != n ? n : f * m[t])
  }, h.delete(t)
}

function y(e) {
  var t;
  let {
    streamKey: n
  } = e;
  m[n] = (null != (t = m[n]) ? t : 0) + 1, h.add(n)
}

function O(e) {
  let {
    voiceStates: t
  } = e;
  return !(o().isEmpty(_) && o().isEmpty(m)) && t.reduce((e, t) => {
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
    return delete _[a], delete m[a], true
  }, false)
}
class v extends(r = Chunk442837.ZP.Store) {
  getPreviewURL(e, t, n) {
    let r = _[(0, l.V9)({
      streamType: null != e ? c.lo.GUILD : c.lo.CALL,
      guildId: e,
      channelId: t,
      ownerId: n
    })];
    return null == r ? true : r.url
  }
  shouldFetchPreview(e, t, n) {
    var r;
    let i = (0, l.V9)({
        streamType: null != e ? c.lo.GUILD : c.lo.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
      }),
      o = _[i],
      a = null != (r = m[i]) ? r : 0,
      s = null != o && Date.now() > o.expires;
    return (null == o && a < p || s) && !h.has(i)
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
    return h.has(r)
  }
}
u(v, "displayName", "ApplicationStreamPreviewStore");
let S = new v(Chunk570140.Z, {
  CONNECTION_OPEN: g,
  LOGOUT: g,
  STREAM_PREVIEW_FETCH_START: y,
  STREAM_PREVIEW_FETCH_SUCCESS: E,
  STREAM_PREVIEW_FETCH_FAIL: b,
  VOICE_STATE_UPDATES: O
})