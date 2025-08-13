/** Chunk was on 41753 **/
/** chunk id: 654142, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let O = Chunk73800.memo(function(e) {
  var {
    folderNode: t
  } = e, O = function(e, t) {
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
    id: _,
    name: y,
    color: C,
    children: v
  } = t, j = v.map(e => e.id), E = (0, a.Z)(e => e.guildId), S = (0, l.e7)([c.Z], () => c.Z.isFolderExpanded(_)), x = function(e) {
    let t = e.children.map(e => {
        let t = e.id,
          n = d.Z.getGuild(t);
        return null != n ? n.name : null
      }).filter(h.lm),
      n = 2 * g.dYL,
      r = [];
    for (let e of t)(e.length < n || 0 === r.length) && (r.push(e), n -= e.length);
    return "".concat(r.join(", ")).concat(r.length < t.length ? ", ..." : "")
  }(t), I = (0, f.Z)(t), {
    mentionCount: P,
    isMentionLowImportance: N,
    unread: w
  } = (0, l.cj)([u.default], () => ({
    mentionCount: j.map(e => u.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
    isMentionLowImportance: j.every(e => u.default.getIsMentionLowImportance(e)),
    unread: j.some(e => u.default.hasUnread(e))
  })), Z = i.useCallback(() => {
    s.Z.toggleGuildFolderExpand(_)
  }, [_]), T = i.useCallback(e => {
    (0, o.jW)(e, async () => {
      let {
        default: e
      } = await n.e("52590").then(n.bind(n, 205784));
      return t => (0, r.jsx)(e, b(m({}, t), {
        folderId: _,
        folderName: y,
        folderColor: C,
        unread: w || P > 0
      }))
    })
  }, [_, y, C, w, P]);
  return (0, r.jsx)(p.Z, b(m({}, O), {
    folderNode: t,
    expanded: S,
    selected: null != E && j.includes(E),
    mentionCount: P,
    isMentionLowImportance: N,
    unread: w,
    mediaState: I,
    defaultFolderName: x,
    onExpandCollapse: Z,
    onContextMenu: T
  }))
})