/** Chunk was on web.js **/
/** chunk id: 384200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652896 = require("./652896.js"),
  Chunk502075 = require("./502075.js");

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
  h = {},
  m = new Set;

function g() {
  _ = {}, h = {}
}

function E(e) {
  let {
    streamKey: t,
    previewURL: n
  } = e;
  _[t] = {
    url: n,
    expires: Date.now() + d
  }, h[t] = 0, m.delete(t)
}

function y(e) {
  let {
    streamKey: t,
    retryAfter: n
  } = e;
  _[t] = {
    url: null,
    expires: Date.now() + (null != n ? n : f * h[t])
  }, m.delete(t)
}

function b(e) {
  var t;
  let {
    streamKey: n
  } = e;
  h[n] = (null != (t = h[n]) ? t : 0) + 1, m.add(n)
}

function O(e) {
  let {
    voiceStates: t
  } = e;
  return !(a().isEmpty(_) && a().isEmpty(h)) && t.reduce((e, t) => {
    let {
      userId: n,
      guildId: r,
      channelId: i,
      selfStream: a
    } = t;
    if (a) return e;
    let s = (0, l._z)({
      streamType: null != r ? c.U4.GUILD : c.U4.CALL,
      guildId: r,
      channelId: i,
      ownerId: n
    });
    return delete _[s], delete h[s], true
  }, false)
}
class v extends(r = Chunk311907.Ay.Store) {
  getPreviewURL(e, t, n) {
    let r = _[(0, l._z)({
      streamType: null != e ? c.U4.GUILD : c.U4.CALL,
      guildId: e,
      channelId: t,
      ownerId: n
    })];
    return null == r ? true : r.url
  }
  shouldFetchPreview(e, t, n) {
    var r;
    let i = (0, l._z)({
        streamType: null != e ? c.U4.GUILD : c.U4.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
      }),
      a = _[i],
      s = null != (r = h[i]) ? r : 0,
      o = null != a && Date.now() > a.expires;
    return (null == a && s < p || o) && !m.has(i)
  }
  getPreviewURLForStreamKey(e) {
    let {
      guildId: t,
      channelId: n,
      ownerId: r
    } = (0, l.Iy)(e);
    return this.getPreviewURL(t, n, r)
  }
  getIsPreviewLoading(e, t, n) {
    let r = (0, l._z)({
      streamType: null != e ? c.U4.GUILD : c.U4.CALL,
      guildId: e,
      channelId: t,
      ownerId: n
    });
    return m.has(r)
  }
}
u(v, "displayName", "ApplicationStreamPreviewStore");
let A = new v(Chunk73153.h, {
  CONNECTION_OPEN: g,
  LOGOUT: g,
  STREAM_PREVIEW_FETCH_START: b,
  STREAM_PREVIEW_FETCH_SUCCESS: E,
  STREAM_PREVIEW_FETCH_FAIL: y,
  VOICE_STATE_UPDATES: O
})