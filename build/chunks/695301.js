/** Chunk was on 86029 **/
n.d(t, {
  Z: () => b
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(481060),
  a = n(746916),
  s = n(965638),
  c = n(905423),
  u = n(486472),
  d = n(888369),
  p = n(430824),
  h = n(451478),
  f = n(61634),
  g = n(325257),
  m = n(755279);
let b = i.memo(function(e) {
  var t, n;
  let {
    guildNode: b,
    lowerBadge: y
  } = e, v = b.id, O = (0, l.e7)([p.Z], () => p.Z.getGuild(v)), j = (0, a.E)(O), _ = (0, l.e7)([h.Z], () => h.Z.isFocused()), C = (0, l.e7)([u.Z], () => u.Z.isUnavailable(v)), x = (0, c.Z)(e => e.guildId), P = (0, f.Z)(v), {
    badge: N,
    unread: S,
    isMentionLowImportance: I
  } = (0, l.cj)([d.default], () => ({
    badge: d.default.getMentionCount(v),
    isMentionLowImportance: d.default.getIsMentionLowImportance(v),
    unread: d.default.hasUnread(v)
  })), Z = (0, s.Ij)(O) && 0 === N, E = i.useMemo(() => null != y ? y : Z ? (0, r.jsx)("div", {
    className: m.pauseBackground,
    children: (0, r.jsx)(o.fpf, {
      size: "custom",
      color: "currentColor",
      className: m.pause,
      width: 10,
      height: 10
    })
  }) : null, [y, Z]);
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
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({}, e), n = n = {
    guild: O,
    unavailable: C,
    animatable: _,
    selected: x === v,
    badge: N,
    isMentionLowImportance: I,
    lowerBadge: E,
    unread: S,
    mediaState: P,
    guildJoinRequestStatus: j
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