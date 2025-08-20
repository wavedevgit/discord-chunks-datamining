/** Chunk was on web.js **/
/** chunk id: 802098, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
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
  _ = {},
  p = null,
  h = null,
  m = null,
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

function I(e) {
  let {
    config: t,
    latestChangelogId: n
  } = e;
  p = n, m = t
}

function T(e) {
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
  }, null == _[t] && (_[t] = {}), _[t][n.locale] = u.LU.LOADED_SUCCESS
}

function S(e) {
  let {
    id: t,
    locale: n
  } = e;
  if (null != f[t] && null != f[t][n]) returnfalse;
  null == _[t] && (_[t] = {}), _[t][n] = u.LU.LOADED_FAILURE
}

function A(e) {
  let {
    id: t
  } = e;
  h = t
}

function C(e) {
  let {
    changelogDate: t
  } = e;
  b = new Date(t), a.K.set(g, t)
}

function N() {
  E = Chunk695346.l4.getSetting()
}
class R extends(r = Chunk442837.ZP.Store) {
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
    return p
  }
  getChangelogLoadStatus(e, t) {
    var n, r;
    return null != (r = null == (n = _[e]) ? true : n[t]) ? r : u.LU.NOT_LOADED
  }
  hasLoadedConfig() {
    return null != m
  }
  getConfig() {
    return m
  }
  overrideId() {
    return h
  }
  lastSeenChangelogId() {
    return E
  }
  lastSeenChangelogDate() {
    return b
  }
  getStateForDebugging() {
    return {
      changelogConfig: m,
      loadedChangelogs: _,
      lastSeenChangelogId: E,
      lastSeenChangelogDate: b
    }
  }
  isLocked() {
    return y.size > 0
  }
}
d(R, "displayName", "ChangelogStore");
let P = new R(Chunk570140.Z, {
  CHANGE_LOG_LOCK: O,
  CHANGE_LOG_UNLOCK: v,
  CHANGE_LOG_SET_CONFIG: I,
  CHANGE_LOG_FETCH_SUCCESS: T,
  CHANGE_LOG_FETCH_FAILED: S,
  CHANGE_LOG_SET_OVERRIDE: A,
  CHANGE_LOG_MARK_SEEN: C
})