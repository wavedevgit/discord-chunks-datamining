/** Chunk was on web.js **/
/** chunk id: 771845, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  ZP: () => H
}), require("./388685.js"), require("./415506.js"), require("./539854.js");
var Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk937111 = require("./937111.js"),
  Chunk727258 = require("./727258.js"),
  Chunk41776 = require("./41776.js"),
  Chunk581883 = require("./581883.js"),
  Chunk251625 = require("./251625.js"),
  Chunk823379 = require("./823379.js"),
  Chunk664915 = require("./664915.js"),
  Chunk486472 = require("./486472.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk750041 = require("./750041.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let T = new Chunk727258.g8;

function S(e, t) {
  for (let n of g.Z.getGuildIds()) !e(n) || u.Z.isLurking(n) || m.ZP.isCurrentUserGuest(n) || t(n)
}

function A(e) {
  switch (e.type) {
    case c.eD.FOLDER:
      return {
        folderId: e.id, folderName: e.name, folderColor: e.color, expanded: e.expanded, guildIds: e.children.map(e => e.id)
      };
    case c.eD.GUILD:
      return {
        folderId: true, guildIds: [e.id]
      };
    default:
      throw Error("[SortedGuildStore] Unexpected guilds tree node type.")
  }
}

function C(e, t) {
  let n = T;
  if (T = new c.g8, 0 === e.length && t.length > 0)
    for (let e of t) T.addNode((0, c.Mg)(e));
  else
    for (let t of e)
      if (0 !== t.guildIds.length)
        if (null == t.folderId) T.addNode((0, c.Mg)(t.guildIds[0]));
        else {
          let e = (0, c.qQ)(t, true, p.Z.isFolderExpanded(t.folderId));
          for (let n of (T.addNode(e), t.guildIds)) T.addNode((0, c.Mg)(n), e)
        } for (let e of T.allNodes()) e.type === c.eD.GUILD && (u.Z.isLurking(e.id) || m.ZP.isCurrentUserGuest(e.id) || null == g.Z.getGuild(e.id) && !h.Z.isUnavailable(e.id)) && T.removeNode(e);
  for (let e of Object.values(T.nodes)) e.type === c.eD.FOLDER && 0 === e.children.length && T.removeNode(e);
  S(e => null == T.nodes[e], e => T.addNode((0, c.Mg)(e), T.root, false)), T.version = n.version;
  let r = a()(n, T);
  return r ? T = n : T.version = n.version + 1, !r
}

function N() {
  var e, t, n;
  return C(null != (t = Chunk581883.Z.getGuildFolders()) ? exports : [], null != (n = null == (e = Chunk581883.Z.settings.guildFolders) ? true : module.guildPositions) ? require : [])
}

function R() {
  var e, t;
  let n = Chunk581883.Z.getGuildFolders();
  return !(null != r && a()(r, require)) && C(null != (r = require) ? r : [], null != (t = null == (e = Chunk581883.Z.settings.guildFolders) ? true : module.guildPositions) ? exports : [])
}

function P(e) {
  let {
    sourceId: t,
    targetId: n,
    moveToBelow: r,
    combine: i
  } = e, a = T.getNode(t), o = T.getNode(n);
  if (null == a || null == o) returnfalse;
  if (s()(!(i && a.type === c.eD.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(a.id, " with another guilds list item")), s()(!(i && null != o.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(o.id, " that's already inside of a folder")), s()(a.type !== c.eD.FOLDER || null == o.parentId, "[SORTED GUILDS] Can't move a folder ".concat(a.id, " to inside of another folder ").concat(o.parentId)), i) {
    let e = o.type !== c.eD.FOLDER ? T.convertToFolder(o) : o;
    T.moveInto(a, e, r)
  } else T.moveNextTo(a, o, r)
}

function D(e) {
  let {
    sourceIds: t,
    name: n
  } = e, r = t.shift();
  if (null == r) returnfalse;
  let i = T.getNode(r);
  if (null == i) returnfalse;
  let a = T.convertToFolder(i);
  a.name = n, t.forEach(e => {
    let t = T.getNode(e);
    null != t && T.moveInto(t, a, true)
  })
}

function w(e) {
  var {
    targetId: t,
    sourceIds: n
  } = e, r = v(e, ["targetId", "sourceIds"]);
  let i = T.getNode(t);
  if (null == i || i.type !== c.eD.FOLDER) returnfalse;
  let a = "" === r.name ? true : r.name;
  if (a !== i.name) {
    let e = T.cloneNode(i);
    s()(e.id === i.id, "[SORTED GUILDS] Replacement folder node must have same id."), e.name = a, T.replaceNode(i, e)
  }
  let o = T.getNode(t);
  if (null == o) returnfalse;
  let l = o.children.map(e => e.id).filter(_.lm),
    u = new Set(l),
    d = new Set(n),
    f = new Set([...l].filter(e => !d.has(e)));
  n.filter(e => !u.has(e)).forEach(e => {
    let t = T.getNode(e);
    null != t && T.moveInto(t, o, true)
  }), f.forEach(e => {
    let t = T.getNode(e);
    null != t && T.moveNextTo(t, o, true)
  })
}

function x(e) {
  let {
    targetId: t
  } = e, n = T.getNode(t);
  if (null == n || n.type !== c.eD.FOLDER) returnfalse;
  n.children.map(e => e.id).filter(_.lm).forEach(e => {
    let t = T.getNode(e);
    null != t && T.moveNextTo(t, n, true)
  })
}

function L(e) {
  let {
    guildId: t,
    joinedAt: n,
    user: r
  } = e, i = y.default.getCurrentUser(), a = g.Z.getGuild(t);
  if ((null == i ? true : i.id) !== r.id || null == a) returnfalse;
  let o = "string" == typeof n ? new Date(n) : n;
  return o !== a.joinedAt && null != o && N()
}

function M(e) {
  let {
    folderId: t
  } = e, n = T.getNode(t), r = p.Z.isFolderExpanded(t);
  if (null == n || n.type !== c.eD.FOLDER || n.expanded === r) returnfalse;
  U(n, r)
}

function k(e) {
  let {
    folderId: t,
    expanded: n
  } = e, r = T.getNode(t);
  if (null == r || r.type !== c.eD.FOLDER || r.expanded === n) returnfalse;
  U(r, n)
}

function j() {
  for (let e of T.allNodes()) module.type === Chunk727258.eD.FOLDER && module.expanded && U(module, false)
}

function U(e, t) {
  let n = T.cloneNode(e);
  s()(n.id === e.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id."), n.expanded = t, T.replaceNode(e, n)
}
let G = (0, Chunk251625.oH)((e, t) => e.sortedGuildNodes().map(e => e.id)),
  B = (0, Chunk251625.oH)((e, t) => e.getRoots().map(A)),
  Z = (0, Chunk251625.oH)((e, t) => {
    let n = [];

    function r(e) {
      switch (e.type) {
        case c.eD.FOLDER:
        case c.eD.GUILD:
          n.push(e)
      }
      for (let t of e.children) r(t)
    }
    return r(e.root), n
  }),
  F = (0, Chunk251625.oH)((e, t) => e.root.children.map(A));
class V extends Chunk750041.Z {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk9156.ZP, Chunk581883.Z, Chunk486472.Z, Chunk41776.Z, Chunk664915.Z, Chunk937111.Z)
  }
  getGuildsTree() {
    return T
  }
  getGuildFolders() {
    return B(T, T.version)
  }
  getGuildFolderById(e) {
    return this.getGuildFolders().find(t => t.folderId === e)
  }
  getFlattenedGuildIds() {
    return G(T, T.version)
  }
  getFlattenedGuildFolderList() {
    return Z(T, T.version)
  }
  getCompatibleGuildFolders() {
    return F(T, T.version)
  }
  getFastListGuildFolders() {
    return T.getRoots()
  }
  takeSnapshot() {
    return {
      version: V.LATEST_SNAPSHOT_VERSION,
      data: {
        tree: T.getSnapshot()
      }
    }
  }
  constructor() {
    super({
      CONNECTION_OPEN: N,
      OVERLAY_INITIALIZE: N,
      CACHE_LOADED: () => this.loadCache(),
      GUILD_CREATE: N,
      GUILD_DELETE: N,
      GUILD_MEMBER_ADD: L,
      USER_SETTINGS_PROTO_UPDATE: R,
      GUILD_MOVE_BY_ID: P,
      GUILD_FOLDER_CREATE_LOCAL: D,
      GUILD_FOLDER_EDIT_LOCAL: w,
      GUILD_FOLDER_DELETE_LOCAL: x,
      TOGGLE_GUILD_FOLDER_EXPAND: M,
      SET_GUILD_FOLDER_EXPANDED: k,
      GUILD_FOLDER_COLLAPSE: j
    }), O(this, "loadCache", () => {
      let e = this.readSnapshot(V.LATEST_SNAPSHOT_VERSION),
        t = null == module ? true : module.tree;
      if (null != exports)
        for (let e of ((T = new Chunk727258.g8).loadSnapshot(exports), T.allNodes())) module.type === Chunk727258.eD.FOLDER && (module.expanded = Chunk664915.Z.isFolderExpanded(module.id))
    })
  }
}
O(V, "displayName", "SortedGuildStore"), O(V, "LATEST_SNAPSHOT_VERSION", 2);
let H = new V