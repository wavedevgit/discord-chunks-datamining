/** Chunk was on web.js **/
/** chunk id: 711014, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ay: () => Y
}), require("./896048.js"), require("./65821.js"), require("./321073.js");
var Chunk812729 = require("./812729.js"),
  a = require.n(Chunk812729),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk212455 = require("./212455.js"),
  Chunk263715 = require("./263715.js"),
  Chunk857071 = require("./857071.js"),
  Chunk617617 = require("./617617.js"),
  Chunk583613 = require("./583613.js"),
  Chunk403362 = require("./403362.js"),
  Chunk383394 = require("./383394.js"),
  Chunk919638 = require("./919638.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk536802 = require("./536802.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = A(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let I = new Chunk263715.zF;

function S(e, t) {
  for (let n of g.A.getGuildIds()) !e(n) || u.A.isLurking(n) || m.Ay.isCurrentUserGuest(n) || t(n)
}

function T(e) {
  switch (e.type) {
    case c.PJ.FOLDER:
      return {
        folderId: e.id, folderName: e.name, folderColor: e.color, expanded: e.expanded, guildIds: e.children.map(e => e.id)
      };
    case c.PJ.GUILD:
      return {
        folderId: true, guildIds: [e.id]
      };
    default:
      throw Error("[SortedGuildStore] Unexpected guilds tree node type.")
  }
}

function C(e, t) {
  let n = I;
  if (I = new c.zF, 0 === e.length && t.length > 0)
    for (let e of t) I.addNode((0, c.EL)(e));
  else
    for (let t of e)
      if (0 !== t.guildIds.length)
        if (null == t.folderId) I.addNode((0, c.EL)(t.guildIds[0]));
        else {
          let e = (0, c.xW)(t, true, _.A.isFolderExpanded(t.folderId));
          for (let n of (I.addNode(e), t.guildIds)) I.addNode((0, c.EL)(n), e)
        } for (let e of I.allNodes()) e.type === c.PJ.GUILD && (u.A.isLurking(e.id) || m.Ay.isCurrentUserGuest(e.id) || null == g.A.getGuild(e.id) && !h.A.isUnavailable(e.id)) && I.removeNode(e);
  for (let e of Object.values(I.nodes)) e.type === c.PJ.FOLDER && 0 === e.children.length && I.removeNode(e);
  S(e => null == I.nodes[e], e => I.addNode((0, c.EL)(e), I.root, false)), I.version = n.version;
  let r = a()(n, I);
  return r ? I = n : I.version = n.version + 1, !r
}

function N() {
  var e, t, n;
  return C(null != (e = d.A.getGuildFolders()) ? e : [], null != (t = null == (n = d.A.settings.guildFolders) ? true : n.guildPositions) ? t : [])
}

function w() {
  var e, t;
  let n = d.A.getGuildFolders();
  return !(null != r && a()(r, n)) && C(null != (r = n) ? r : [], null != (e = null == (t = d.A.settings.guildFolders) ? true : t.guildPositions) ? e : [])
}

function R(e) {
  let {
    sourceId: t,
    targetId: n,
    moveToBelow: r,
    combine: i
  } = e, a = I.getNode(t), s = I.getNode(n);
  if (null == a || null == s) returnfalse;
  if (o()(!(i && a.type === c.PJ.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(a.id, " with another guilds list item")), o()(!(i && null != s.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(s.id, " that's already inside of a folder")), o()(a.type !== c.PJ.FOLDER || null == s.parentId, "[SORTED GUILDS] Can't move a folder ".concat(a.id, " to inside of another folder ").concat(s.parentId)), i) {
    let e = s.type !== c.PJ.FOLDER ? I.convertToFolder(s) : s;
    I.moveInto(a, e, r)
  } else I.moveNextTo(a, s, r)
}

function P(e) {
  let {
    sourceIds: t,
    name: n
  } = e, r = t.shift();
  if (null == r) returnfalse;
  let i = I.getNode(r);
  if (null == i) returnfalse;
  let a = I.convertToFolder(i);
  a.name = n, t.forEach(e => {
    let t = I.getNode(e);
    null != t && I.moveInto(t, a, true)
  })
}

function D(e) {
  let {
    targetId: t,
    sourceIds: n
  } = e, r = v(e, ["targetId", "sourceIds"]), i = I.getNode(t);
  if (null == i || i.type !== c.PJ.FOLDER) returnfalse;
  let a = "" === r.name ? true : r.name;
  if (a !== i.name) {
    let e = I.cloneNode(i);
    o()(e.id === i.id, "[SORTED GUILDS] Replacement folder node must have same id."), e.name = a, I.replaceNode(i, e)
  }
  let s = I.getNode(t);
  if (null == s) returnfalse;
  let l = s.children.map(e => e.id).filter(p.Vq),
    u = new Set(l),
    d = new Set(n),
    f = new Set([...l].filter(e => !d.has(e)));
  n.filter(e => !u.has(e)).forEach(e => {
    let t = I.getNode(e);
    null != t && I.moveInto(t, s, true)
  }), f.forEach(e => {
    let t = I.getNode(e);
    null != t && I.moveNextTo(t, s, true)
  })
}

function x(e) {
  let {
    targetId: t
  } = e, n = I.getNode(t);
  if (null == n || n.type !== c.PJ.FOLDER) returnfalse;
  n.children.map(e => e.id).filter(p.Vq).forEach(e => {
    let t = I.getNode(e);
    null != t && I.moveNextTo(t, n, true)
  })
}

function L(e) {
  let {
    guildId: t,
    joinedAt: n,
    user: r
  } = e, i = b.default.getCurrentUser(), a = g.A.getGuild(t);
  if ((null == i ? true : i.id) !== r.id || null == a) returnfalse;
  let s = "string" == typeof n ? new Date(n) : n;
  return s !== a.joinedAt && null != s && N()
}

function j(e) {
  let {
    folderId: t
  } = e, n = I.getNode(t), r = _.A.isFolderExpanded(t);
  if (null == n || n.type !== c.PJ.FOLDER || n.expanded === r) returnfalse;
  U(n, r)
}

function M(e) {
  let {
    folderId: t,
    expanded: n
  } = e, r = I.getNode(t);
  if (null == r || r.type !== c.PJ.FOLDER || r.expanded === n) returnfalse;
  U(r, n)
}

function k() {
  for (let e of I.allNodes()) e.type === c.PJ.FOLDER && e.expanded && U(e, false)
}

function U(e, t) {
  let n = I.cloneNode(e);
  o()(n.id === e.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id."), n.expanded = t, I.replaceNode(e, n)
}
let G = (0, Chunk583613.L_)((e, t) => e.sortedGuildNodes().map(e => e.id)),
  V = (0, Chunk583613.L_)((e, t) => e.getRoots().map(T)),
  F = (0, Chunk583613.L_)((e, t) => {
    let n = [];

    function r(e) {
      switch (e.type) {
        case c.PJ.FOLDER:
        case c.PJ.GUILD:
          n.push(e)
      }
      for (let t of e.children) r(t)
    }
    return r(e.root), n
  }),
  B = (0, Chunk583613.L_)((e, t) => e.root.children.map(T));
class H extends Chunk536802.A {
  initialize() {
    this.waitFor(g.A, y.Ay, d.A, h.A, u.A, _.A, l.A)
  }
  getGuildsTree() {
    return I
  }
  getGuildFolders() {
    return V(I, I.version)
  }
  getGuildFolderById(e) {
    return this.getGuildFolders().find(t => t.folderId === e)
  }
  getFlattenedGuildIds() {
    return G(I, I.version)
  }
  getFlattenedGuildFolderList() {
    return F(I, I.version)
  }
  getCompatibleGuildFolders() {
    return B(I, I.version)
  }
  getFastListGuildFolders() {
    return I.getRoots()
  }
  takeSnapshot() {
    return {
      version: H.LATEST_SNAPSHOT_VERSION,
      data: {
        tree: I.getSnapshot()
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
      USER_SETTINGS_PROTO_UPDATE: w,
      GUILD_MOVE_BY_ID: R,
      GUILD_FOLDER_CREATE_LOCAL: P,
      GUILD_FOLDER_EDIT_LOCAL: D,
      GUILD_FOLDER_DELETE_LOCAL: x,
      TOGGLE_GUILD_FOLDER_EXPAND: j,
      SET_GUILD_FOLDER_EXPANDED: M,
      GUILD_FOLDER_COLLAPSE: k
    }), O(this, "loadCache", () => {
      let e = this.readSnapshot(H.LATEST_SNAPSHOT_VERSION),
        t = null == e ? true : e.tree;
      if (null != t)
        for (let e of ((I = new c.zF).loadSnapshot(t), I.allNodes())) e.type === c.PJ.FOLDER && (e.expanded = _.A.isFolderExpanded(e.id))
    })
  }
}
O(H, "displayName", "SortedGuildStore"), O(H, "LATEST_SNAPSHOT_VERSION", 2);
let Y = new H