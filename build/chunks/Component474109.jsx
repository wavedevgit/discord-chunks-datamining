/** Chunk was on 51235 **/
/** chunk id: 474109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let b = "app-download-item",
  m = "add-server-item";

function y() {
  returnfalse
}

function O(e) {
  var t;
  let n = s.default.getMutableGuildStates();
  return e === p.x8Z.SERVER_DISCOVERY_BADGE && !d.Z.hasViewed(p.x8Z.SERVER_DISCOVERY_BADGE) || e !== b && e !== m && (null == (t = n[null != e ? e : "null"]) ? true : t.highImportanceMentionCount) > 0
}
let v = (0, Chunk251625.oH)((e, t, n) => ["null", ...t, ...e, m, p.x8Z.E3_SERVER_DISCOVERY_BADGE, b]),
  j = Chunk473749.forwardRef(function(e, t) {
    var n, i;
    let d = (0, l.Wu)([u.ZP, c.Z, s.default], () => v(u.ZP.getGuildFolders(), c.Z.getUnreadPrivateChannelIds(), s.default.getStoreChangeSentinel())),
      h = (0, l.e7)([f.Z], () => f.Z.isFocused()),
      p = (0, l.e7)([o.Z], () => o.Z.getExpandedFolders());
    return (0, r.jsx)(a.Z, (n = function(e) {
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
      isUnread: y,
      textUnread: g.intl.string(g.t.y2b7CA),
      textMention: g.intl.string(g.t.y2b7CA),
      isMentioned: O,
      animate: h,
      expandedFolders: p
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