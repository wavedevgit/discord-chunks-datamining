/** Chunk was on 41753 **/
/** chunk id: 474109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk18998 = require("./18998.jsx"),
  Chunk664915 = require("./664915.js"),
  Chunk888369 = require("./888369.js"),
  Chunk358652 = require("./358652.js"),
  Chunk771845 = require("./771845.js"),
  Chunk613060 = require("./613060.js"),
  Chunk451478 = require("./451478.js"),
  Chunk251625 = require("./251625.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let m = "app-download-item",
  b = "add-server-item";

function O() {
  returnfalse
}

function _(e) {
  var t;
  let n = a.default.getMutableGuildStates();
  return e === f.x8Z.SERVER_DISCOVERY_BADGE && !d.Z.hasViewed(f.x8Z.SERVER_DISCOVERY_BADGE) || e !== m && e !== b && (null == (t = n[null != e ? e : "null"]) ? true : t.highImportanceMentionCount) > 0
}
let y = (0, Chunk251625.oH)((e, t, n) => ["null", ...t, ...e, b, f.x8Z.E3_SERVER_DISCOVERY_BADGE, m]),
  C = Chunk73800.forwardRef(function(e, t) {
    var n, i;
    let d = (0, l.Wu)([u.ZP, c.Z, a.default], () => y(u.ZP.getGuildFolders(), c.Z.getUnreadPrivateChannelIds(), a.default.getStoreChangeSentinel())),
      p = (0, l.e7)([h.Z], () => h.Z.isFocused()),
      f = (0, l.e7)([s.Z], () => s.Z.getExpandedFolders());
    return (0, r.jsx)(o.Z, (n = function(e) {
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
    }({}, e), i = i = {
      ref: t,
      items: d,
      isUnread: O,
      textUnread: g.intl.string(g.t.y2b7CA),
      textMention: g.intl.string(g.t.y2b7CA),
      isMentioned: _,
      animate: p,
      expandedFolders: f
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), n))
  })