/** Chunk was on 15909 **/
n.d(t, {
  Z: () => p
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(628238),
  s = n(492593),
  u = n(25015),
  c = n(963550),
  d = n(845080),
  f = n(260346);
let p = i.memo(function(e) {
  var t, n, i;
  let {
    message: l,
    channel: p,
    compact: v,
    className: g,
    isGroupStart: m,
    hideSimpleEmbedContent: b = !0,
    disableInteraction: y
  } = e, h = (0, a.A)((null !== (t = l.editedTimestamp) && void 0 !== t ? t : l.timestamp).valueOf()), {
    content: O
  } = (0, u.Z)(l, {
    hideSimpleEmbedContent: b,
    allowList: h,
    allowHeading: h,
    allowLinks: !0,
    previewLinkTarget: !0
  });
  return (0, r.jsx)(s.Z, {
    compact: v,
    className: o()(g, {
      [f.message]: !0,
      [f.cozyMessage]: !v,
      [f.groupStart]: m
    }),
    childrenHeader: (0, d.Z)((n = function(e) {
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
    }({}, e), i = i = {
      channel: p,
      guildId: void 0
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), n)),
    childrenMessageContent: (0, c.Z)(e, O),
    disableInteraction: y
  })
})