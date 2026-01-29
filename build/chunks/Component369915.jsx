/** Chunk was on 1113 **/
/** chunk id: 369915, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk442433 = require("./442433.js"),
  Chunk686956 = require("./686956.js"),
  Chunk366811 = require("./366811.js"),
  Chunk383394 = require("./383394.js"),
  Chunk458294 = require("./458294.js"),
  Chunk71393 = require("./71393.js"),
  Chunk403362 = require("./403362.js"),
  Chunk842452 = require("./842452.jsx"),
  Chunk305928 = require("./305928.js"),
  Chunk652215 = require("./652215.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = Chunk64700.memo(function(e) {
  let {
    folderNode: t
  } = e, A = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["folderNode"]), {
    id: y,
    name: O,
    color: _,
    children: x
  } = t, j = x.map(e => e.id), v = (0, o.A)(e => e.guildId), E = (0, i.bG)([c.A], () => c.A.isFolderExpanded(y)), C = function(e) {
    let t = e.children.map(e => {
        let t = e.id,
          n = d.A.getGuild(t);
        return null != n ? n.name : null
      }).filter(h.Vq),
      n = 2 * f.F05,
      r = [];
    for (let e of t)(e.length < n || 0 === r.length) && (r.push(e), n -= e.length);
    return "".concat(r.join(", ")).concat(r.length < t.length ? ", ..." : "")
  }(t), S = (0, g.A)(t), {
    mentionCount: I,
    isMentionLowImportance: N,
    unread: T
  } = (0, i.cf)([u.default], () => ({
    mentionCount: j.map(e => u.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
    isMentionLowImportance: j.every(e => u.default.getIsMentionLowImportance(e)),
    unread: j.some(e => u.default.hasUnread(e))
  })), P = l.useCallback(() => {
    a.A.toggleGuildFolderExpand(y)
  }, [y]), w = l.useCallback(e => {
    (0, s.L3)(e, async () => {
      let {
        default: e
      } = await n.e("32857").then(n.bind(n, 842112));
      return t => (0, r.jsx)(e, b(m({}, t), {
        folderId: y,
        folderName: O,
        folderColor: _,
        unread: T || I > 0
      }))
    })
  }, [y, O, _, T, I]);
  return (0, r.jsx)(p.A, b(m({}, A), {
    folderNode: t,
    expanded: E,
    selected: null != v && j.includes(v),
    mentionCount: I,
    isMentionLowImportance: N,
    unread: T,
    mediaState: S,
    defaultFolderName: C,
    onExpandCollapse: P,
    onContextMenu: w
  }))
})