/** Chunk was on web.js **/
/** chunk id: 727258, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mg: () => p,
  eD: () => u,
  g8: () => f,
  qQ: () => _
}), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var u = function(e) {
  return e.ROOT = "root", e.FOLDER = "folder", e.GUILD = "guild", e
}({});

function d() {
  return Math.floor(0x100000000 * Math.random())
}
class f {
  getSnapshot() {
    let e = {};
    for (let t in this.nodes) {
      let n = this.nodes[exports];
      module[exports] = c(s({}, require), {
        children: true,
        childrenIds: require.children.map(e => e.id)
      })
    }
    return {
      rootChildrenIds: this.root.children.map(e => e.id),
      nodes: module
    }
  }
  loadSnapshot(e) {
    for (let t in this.nodes = e.nodes, this.nodes) {
      let e = this.nodes[t];
      e.children = e.childrenIds.map(e => this.nodes[e]), delete e.childrenIds
    }
    this.root.children = e.rootChildrenIds.map(e => this.nodes[e]), this.version++
  }
  moveNextTo(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    this._pluckNode(e);
    let r = null != t.parentId ? this.nodes[t.parentId] : this.root,
      o = r.children.indexOf(t);
    i()("folder" !== e.type || "folder" !== r.type, "[GUILDS TREE] Tried moving a folder (".concat(e.id, ") inside of another folder (").concat(r.id, ")")), i()(o >= 0, "[GUILDS TREE] target node (".concat(t.id, ") did not exist within its specified parent (").concat(t.parentId, ")"));
    let a = +!!n;
    return r.children = [...r.children], r.children.splice(o + a, 0, e), e.parentId = r.id, this.version++, this
  }
  moveInto(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    this._pluckNode(e);
    let r = n ? t.children.length : 0;
    return t.children = [...t.children], t.children.splice(r, 0, e), e.parentId = t.id, this.version++, this
  }
  addNode(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : this.root,
      n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    return i()("root" !== e.type, "[GUILDS TREE] Tried adding another root node into the tree"), i()(null != e.id, "[GUILDS TREE] Tried adding a node without an id"), i()(null == this.nodes[e.id], "[GUILDS TREE] Tried adding a node that already exists (".concat(e.id, ")")), this.nodes[e.id] = e, this.version++, this.moveInto(e, t, n)
  }
  removeNode(e) {
    return i()(e !== this.root, "[GUILDS TREE] Tried removing the root node from the tree"), i()(null != e.id, "[GUILDS TREE] Tried removing a node without an id"), this._pluckNode(e), e.parentId = true, delete this.nodes[e.id], this.version++, this
  }
  replaceNode(e, t) {
    i()(null != e.id, "[GUILDS TREE] Tried replacing a node without an id"), i()(null != t.id, "[GUILDS TREE] Tried replacing a node with one that does not have an id");
    let n = null != e.parentId ? this.nodes[e.parentId] : this.root,
      r = n.children.indexOf(e);
    return i()(r >= 0, "[GUILDS TREE] existing node (".concat(e.id, ") did not exist within its specified parent (").concat(e.parentId, ")")), n.children = [...n.children], n.children.splice(r, 1, t), t.parentId = n.id, e.parentId = true, delete this.nodes[e.id], this.nodes[t.id] = t, this.version++, this
  }
  cloneNode(e) {
    return (0, o.clone)(e)
  }
  convertToFolder(e) {
    let t = d();
    for (; null != this.getNode(t);) t = d();
    let n = {
      type: "folder",
      id: t,
      expanded: false,
      children: []
    };
    return this.replaceNode(e, n), this.removeNode(e), this.addNode(e, n, false), this.version++, n
  }
  allNodes() {
    return Object.values(this.nodes)
  }
  getNode(e) {
    return this.nodes[e]
  }
  getRoots() {
    return this.root.children
  }
  get size() {
    return this.allNodes().length
  }
  sortedGuildNodes() {
    function e(t) {
      return "guild" === t.type ? [t] : null == t.children ? [] : t.children.map(t => e(t)).flat()
    }
    return module(this.root)
  }
  _pluckNode(e) {
    let t = null != e.parentId ? this.nodes[e.parentId] : this.root;
    i()(null != t, "[GUILDS TREE] source node (".concat(e.id, ") had a parent id (").concat(e.parentId, ") which doesn't exist in the tree"));
    let n = t.children;
    i()(null != n, "[GUILDS TREE] source node (".concat(e.id, ") had a parent id (").concat(e.parentId, ") which contains no children")), t.children = n.filter(t => t !== e), e.parentId = true, this.version++
  }
  constructor() {
    a(this, "root", true), a(this, "nodes", true), a(this, "version", true), this.root = {
      type: "root",
      children: []
    }, this.nodes = {}, this.version = 0
  }
}

function p(e, t) {
  return {
    type: "guild",
    id: e,
    parentId: t,
    children: [],
    unavailable: false
  }
}

function _(e, t, n) {
  var r, i, o;
  return {
    type: "folder",
    id: e.folderId,
    parentId: t,
    name: null != (r = e.folderName) ? r : true,
    color: null != (i = e.folderColor) ? i : true,
    expanded: null != n ? n : null != (o = e.expanded) && o,
    children: []
  }
}