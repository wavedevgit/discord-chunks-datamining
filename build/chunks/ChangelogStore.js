/** Chunk was on web.js **/
/** chunk id: 802098, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk706454 = require("./706454.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk596401 = require("./596401.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = {},
  p = {},
  _ = null,
  m = null,
  h = null,
  g = "lastChangeLogDate",
  E = null,
  b = null,
  y = new Set;

function O(e) {
  let {
    key: t
  } = e;
  if (y.has(t)) returnfalse;
  (y = new Set(y)).add(t)
}

function v(e) {
  let {
    key: t
  } = e;
  if (!y.has(t)) returnfalse;
  (y = new Set(y)).delete(t)
}

function S(e) {
  let {
    config: t,
    latestChangelogId: n
  } = e;
  _ = n, h = t
}

function I(e) {
  let {
    id: t,
    changelog: n
  } = e;
  null == f[t] && (f[t] = {}), f[t][n.locale] = {
    id: t,
    date: n.date,
    body: n.content,
    revision: 1,
    locale: n.locale,
    [n.asset_type === u.h3.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: n.asset
  }, null == p[t] && (p[t] = {}), p[t][n.locale] = u.LU.LOADED_SUCCESS
}

function T(e) {
  let {
    id: t,
    locale: n
  } = e;
  if (null != f[t] && null != f[t][n]) returnfalse;
  null == p[t] && (p[t] = {}), p[t][n] = u.LU.LOADED_FAILURE
}

function C(e) {
  let {
    id: t
  } = e;
  m = t
}

function A(e) {
  let {
    changelogDate: t
  } = e;
  b = new Date(t), o.K.set(g, t)
}

function N() {
  E = Chunk695346.l4.getSetting()
}
class P extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk706454.default, Chunk581883.Z), this.syncWith([Chunk706454.default], () => true), this.syncWith([Chunk581883.Z], N);
    let e = Chunk433517.K.get(g);
    if (null != module) try {
      b = new Date(module)
    } catch (e) {
      Chunk433517.K.remove(g)
    }
  }
  getChangelog(e, t) {
    var n, r;
    return null != (r = null == (n = f[e]) ? true : n[t]) ? r : null
  }
  latestChangelogId() {
    return _
  }
  getChangelogLoadStatus(e, t) {
    var n, r;
    return null != (r = null == (n = p[e]) ? true : n[t]) ? r : u.LU.NOT_LOADED
  }
  hasLoadedConfig() {
    return null != h
  }
  getConfig() {
    return h
  }
  overrideId() {
    return m
  }
  lastSeenChangelogId() {
    return E
  }
  lastSeenChangelogDate() {
    return b
  }
  getStateForDebugging() {
    return {
      changelogConfig: h,
      loadedChangelogs: p,
      lastSeenChangelogId: E,
      lastSeenChangelogDate: b
    }
  }
  isLocked() {
    return y.size > 0
  }
}
d(P, "displayName", "ChangelogStore");
let R = new P(Chunk570140.Z, {
  CHANGE_LOG_LOCK: O,
  CHANGE_LOG_UNLOCK: v,
  CHANGE_LOG_SET_CONFIG: S,
  CHANGE_LOG_FETCH_SUCCESS: I,
  CHANGE_LOG_FETCH_FAILED: T,
  CHANGE_LOG_SET_OVERRIDE: C,
  CHANGE_LOG_MARK_SEEN: A
})