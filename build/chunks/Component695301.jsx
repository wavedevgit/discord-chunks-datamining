/** Chunk was on 34779 **/
/** chunk id: 695301, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk746916 = require("./746916.js"),
  Chunk965638 = require("./965638.js"),
  Chunk905423 = require("./905423.js"),
  Chunk486472 = require("./486472.js"),
  Chunk888369 = require("./888369.js"),
  Chunk430824 = require("./430824.js"),
  Chunk451478 = require("./451478.js"),
  Chunk61634 = require("./61634.js"),
  Chunk325257 = require("./325257.jsx"),
  Chunk240848 = require("./240848.js");
let b = Chunk73800.memo(function(e) {
  var t, n;
  let {
    guildNode: b,
    lowerBadge: O
  } = e, _ = b.id, y = (0, l.e7)([h.Z], () => h.Z.getGuild(_)), C = (0, s.E)(y), v = (0, l.e7)([p.Z], () => p.Z.isFocused()), j = (0, l.e7)([u.Z], () => u.Z.isUnavailable(_)), E = (0, c.Z)(e => e.guildId), S = (0, f.Z)(_), {
    badge: x,
    unread: I,
    isMentionLowImportance: P
  } = (0, l.cj)([d.default], () => ({
    badge: d.default.getMentionCount(_),
    isMentionLowImportance: d.default.getIsMentionLowImportance(_),
    unread: d.default.hasUnread(_)
  })), N = (0, a.Ij)(y) && 0 === x, w = i.useMemo(() => null != O ? O : N ? (0, r.jsx)("div", {
    className: m.pauseBackground,
    children: (0, r.jsx)(o.fpf, {
      size: "custom",
      color: "currentColor",
      className: m.pause,
      width: 10,
      height: 10
    })
  }) : null, [O, N]);
  return (0, r.jsx)(g.Z, (t = function(e) {
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
  }({}, e), n = n = {
    guild: y,
    unavailable: j,
    animatable: v,
    selected: E === _,
    badge: x,
    isMentionLowImportance: P,
    lowerBadge: w,
    unread: I,
    mediaState: S,
    guildJoinRequestStatus: C
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
})