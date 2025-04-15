/** Chunk was on 64865 **/
"use strict";
r.d(t, {
  Z: () => p
});
var n = r(200651),
  i = r(192379),
  s = r(120356),
  o = r.n(s),
  l = r(628238),
  a = r(367814),
  c = r(492593),
  h = r(25015),
  v = r(963550),
  u = r(845080),
  f = r(30804);
let p = i.memo(function(e) {
  var t, r, i, s;
  let {
    message: p,
    channel: d,
    compact: b,
    className: g,
    isGroupStart: Z,
    hideSimpleEmbedContent: j = !0,
    disableInteraction: M,
    previewGuildId: O,
    preview: y,
    author: m
  } = e, H = null != (t = null != O ? O : p.getGuildId()) ? t : void 0, x = (0, a.Z)(m), V = (0, l.A)((null != (r = p.editedTimestamp) ? r : p.timestamp).valueOf()), {
    content: w
  } = (0, h.Z)(p, {
    hideSimpleEmbedContent: j,
    allowList: V,
    allowHeading: V,
    allowLinks: !0,
    previewLinkTarget: !0
  });
  return (0, n.jsx)(c.Z, {
    compact: b,
    className: o()(g, {
      [f.message]: !0,
      [f.cozyMessage]: !b,
      [f.groupStart]: Z
    }),
    childrenHeader: (0, u.Z)((i = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n
        })
      }
      return e
    }({}, e), s = s = {
      channel: d,
      guildId: H
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(s)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
    }), i)),
    childrenMessageContent: (0, v.Z)(e, w),
    disableInteraction: M,
    authorHasGradientRole: x,
    guildId: H,
    preview: y
  })
})