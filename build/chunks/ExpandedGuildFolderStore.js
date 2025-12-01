/** Chunk was on web.js **/
/** chunk id: 664915, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk581883 = require("./581883.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = new Set;

function c() {
  let e = Chunk581883.Z.getGuildFolders();
  if (null == module) returnfalse;
  let t = false;
  for (let n of l) module.some(e => e.folderId === n) || ((l = new Set(l)).delete(require), t = true);
  return exports
}

function u(e) {
  let {
    folderId: t
  } = e;
  (l = new Set(l)).has(t) ? l.delete(t) : l.add(t)
}

function d(e) {
  let {
    folderId: t,
    expanded: n
  } = e;
  l = new Set(l), n ? l.add(t) : l.has(t) && l.delete(t)
}

function f() {
  if (0 === l.size) returnfalse;
  l = new Set
}
class p extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (l = new Set(e.expandedFolders)), this.waitFor(o.Z)
  }
  getState() {
    return {
      expandedFolders: Array.from(l)
    }
  }
  getExpandedFolders() {
    return l
  }
  isFolderExpanded(e) {
    return l.has(e)
  }
}
s(p, "displayName", "ExpandedGuildFolderStore"), s(p, "persistKey", "ExpandedGuildFolderStore");
let _ = new p(Chunk570140.Z, {
  TOGGLE_GUILD_FOLDER_EXPAND: u,
  SET_GUILD_FOLDER_EXPANDED: d,
  USER_SETTINGS_PROTO_UPDATE: c,
  GUILD_FOLDER_COLLAPSE: f
})