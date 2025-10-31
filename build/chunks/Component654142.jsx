/** Chunk was on 56710 **/
/** chunk id: 654142, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk905423 = require("./905423.js"),
  Chunk664915 = require("./664915.js"),
  Chunk888369 = require("./888369.js"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk179809 = require("./179809.jsx"),
  Chunk652376 = require("./652376.js"),
  Chunk981631 = require("./981631.js");

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
let _ = Chunk647438.memo(function(e) {
  var {
    folderNode: t
  } = e, _ = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["folderNode"]);
  let {
    id: O,
    name: y,
    color: v,
    children: j
  } = t, C = j.map(e => e.id), x = (0, s.Z)(e => e.guildId), E = (0, l.e7)([c.Z], () => c.Z.isFolderExpanded(O)), S = function(e) {
    let t = e.children.map(e => {
        let t = e.id,
          n = d.Z.getGuild(t);
        return null != n ? n.name : null
      }).filter(p.lm),
      n = 2 * g.dYL,
      r = [];
    for (let e of t)(e.length < n || 0 === r.length) && (r.push(e), n -= e.length);
    return "".concat(r.join(", ")).concat(r.length < t.length ? ", ..." : "")
  }(t), I = (0, f.Z)(t), {
    mentionCount: P,
    isMentionLowImportance: N,
    unread: Z
  } = (0, l.cj)([u.default], () => ({
    mentionCount: C.map(e => u.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
    isMentionLowImportance: C.every(e => u.default.getIsMentionLowImportance(e)),
    unread: C.some(e => u.default.hasUnread(e))
  })), T = i.useCallback(() => {
    a.Z.toggleGuildFolderExpand(O)
  }, [O]), w = i.useCallback(e => {
    (0, o.jW)(e, async () => {
      let {
        default: e
      } = await n.e("52590").then(n.bind(n, 205784));
      return t => (0, r.jsx)(e, b(m({}, t), {
        folderId: O,
        folderName: y,
        folderColor: v,
        unread: Z || P > 0
      }))
    })
  }, [O, y, v, Z, P]);
  return (0, r.jsx)(h.Z, b(m({}, _), {
    folderNode: t,
    expanded: E,
    selected: null != x && C.includes(x),
    mentionCount: P,
    isMentionLowImportance: N,
    unread: Z,
    mediaState: I,
    defaultFolderName: S,
    onExpandCollapse: T,
    onContextMenu: w
  }))
})