/** Chunk was on 57539 **/
n.d(e, {
  e: () => d
});
var a = n(255367);
n(73800);
var i = n(481060),
  s = n(240872),
  r = n(923500),
  o = n(247206),
  l = n(774863),
  c = n(388032);

function d(t, e) {
  if ((0, o.aP)({
      action: o.Yy.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
      messageId: e,
      channelId: t
    }), !l.Z.canSubmitFpReport(e)) {
    s.Z.show({
      title: c.intl.string(c.t["iS/eFB"]),
      body: c.intl.string(c.t.YrjcgY),
      confirmText: c.intl.string(c.t.BddRzc)
    }), r.Z.disableFalsePositiveButton(t, e);
    return
  }(0, i.ZDy)(async () => {
    let {
      default: i
    } = await n(773276);
    return n => (0, a.jsx)(i, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), a.forEach(function(e) {
          var a;
          a = n[e], e in t ? Object.defineProperty(t, e, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = a
        })
      }
      return t
    }({
      channelId: t,
      messageId: e
    }, n))
  })
}