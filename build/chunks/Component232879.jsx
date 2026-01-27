/** Chunk was on 77870 **/
/** chunk id: 232879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk199285 = require("./199285.js"),
  Chunk347951 = require("./347951.js"),
  Chunk366811 = require("./366811.js"),
  Chunk919638 = require("./919638.js"),
  Chunk458294 = require("./458294.js"),
  Chunk71393 = require("./71393.js"),
  Chunk531685 = require("./531685.js"),
  Chunk131494 = require("./131494.js"),
  Chunk330465 = require("./330465.jsx"),
  Chunk605611 = require("./605611.js");
let b = Chunk64700.memo(function(e) {
  var t, n;
  let {
    guildNode: b,
    lowerBadge: A
  } = e, y = b.id, _ = (0, i.bG)([p.A], () => p.A.getGuild(y)), O = (0, a.a)(_), j = (0, i.bG)([h.A], () => h.A.isFocused()), v = (0, i.bG)([u.A], () => u.A.isUnavailable(y)), x = (0, c.A)(e => e.guildId), E = (0, f.A)(y), {
    badge: C,
    unread: S,
    isMentionLowImportance: I
  } = (0, i.cf)([d.default], () => ({
    badge: d.default.getMentionCount(y),
    isMentionLowImportance: d.default.getIsMentionLowImportance(y),
    unread: d.default.hasUnread(y)
  })), N = (0, o.Ig)(_) && 0 === C, T = l.useMemo(() => null != A ? A : N ? (0, r.jsx)("div", {
    className: m.j,
    children: (0, r.jsx)(s.E$n, {
      size: "custom",
      color: "currentColor",
      className: m.v,
      width: 10,
      height: 10
    })
  }) : null, [A, N]);
  return (0, r.jsx)(g.A, (t = function(e) {
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
    guild: _,
    unavailable: v,
    animatable: j,
    selected: x === y,
    badge: C,
    isMentionLowImportance: I,
    lowerBadge: T,
    unread: S,
    mediaState: E,
    guildJoinRequestStatus: O
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