/** Chunk was on 57539 **/
n.d(e, {
  e: () => u
});
var i = n(255367);
n(73800);
var a = n(481060),
  l = n(240872),
  o = n(923500),
  s = n(247206),
  r = n(774863),
  c = n(388032);

function u(t, e) {
  if ((0, s.aP)({
      action: s.Yy.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
      messageId: e,
      channelId: t
    }), !r.Z.canSubmitFpReport(e)) {
    l.Z.show({
      title: c.intl.string(c.t["iS/eFB"]),
      body: c.intl.string(c.t.YrjcgY),
      confirmText: c.intl.string(c.t.BddRzc)
    }), o.Z.disableFalsePositiveButton(t, e);
    return
  }(0, a.ZDy)(async () => {
    let {
      default: a
    } = await n(773276);
    return n => (0, i.jsx)(a, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          var i;
          i = n[e], e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = i
        })
      }
      return t
    }({
      channelId: t,
      messageId: e
    }, n))
  })
}