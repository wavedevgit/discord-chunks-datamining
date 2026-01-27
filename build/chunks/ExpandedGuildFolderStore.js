/** Chunk was on web.js **/
/** chunk id: 383394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk617617 = require("./617617.js");

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
  let e = o.A.getGuildFolders();
  if (null == e) returnfalse;
  let t = false;
  for (let n of l) e.some(e => e.folderId === n) || ((l = new Set(l)).delete(n), t = true);
  return t
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
class p extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (l = new Set(e.expandedFolders)), this.waitFor(o.A)
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
let _ = new p(Chunk73153.h, {
  TOGGLE_GUILD_FOLDER_EXPAND: u,
  SET_GUILD_FOLDER_EXPANDED: d,
  USER_SETTINGS_PROTO_UPDATE: c,
  GUILD_FOLDER_COLLAPSE: f
})