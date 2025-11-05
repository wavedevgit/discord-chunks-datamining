/** Chunk was on 27 **/
/** chunk id: 695301, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk746916 = require("./746916.js"),
  Chunk634755 = require("./634755.js"),
  Chunk905423 = require("./905423.js"),
  Chunk486472 = require("./486472.js"),
  Chunk888369 = require("./888369.js"),
  Chunk430824 = require("./430824.js"),
  Chunk451478 = require("./451478.js"),
  Chunk61634 = require("./61634.js"),
  Chunk325257 = require("./325257.jsx"),
  Chunk144618 = require("./144618.js");
let b = Chunk647438.memo(function(e) {
  var t, n;
  let {
    guildNode: b,
    lowerBadge: _
  } = e, y = b.id, O = (0, l.e7)([p.Z], () => p.Z.getGuild(y)), v = (0, a.E)(O), j = (0, l.e7)([h.Z], () => h.Z.isFocused()), C = (0, l.e7)([u.Z], () => u.Z.isUnavailable(y)), E = (0, c.Z)(e => e.guildId), x = (0, f.Z)(y), {
    badge: S,
    unread: I,
    isMentionLowImportance: P
  } = (0, l.cj)([d.default], () => ({
    badge: d.default.getMentionCount(y),
    isMentionLowImportance: d.default.getIsMentionLowImportance(y),
    unread: d.default.hasUnread(y)
  })), N = (0, s.Ij)(O) && 0 === S, Z = i.useMemo(() => null != _ ? _ : N ? (0, r.jsx)("div", {
    className: m.pauseBackground,
    children: (0, r.jsx)(o.fpf, {
      size: "custom",
      color: "currentColor",
      className: m.pause,
      width: 10,
      height: 10
    })
  }) : null, [_, N]);
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
    guild: O,
    unavailable: C,
    animatable: j,
    selected: E === y,
    badge: S,
    isMentionLowImportance: P,
    lowerBadge: Z,
    unread: I,
    mediaState: x,
    guildJoinRequestStatus: v
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