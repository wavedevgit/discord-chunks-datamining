/** Chunk was on 1272 (4b1b41bf0e3472e1.js) **/
n.d(t, {
  Z: () => a
});
var r = n(626135),
  i = n(188471),
  l = n(360347),
  o = n(981631);

function a(e) {
  var t, n, a;
  let {
    tab_opened: s,
    source: c
  } = e, u = (0, l.Z)();
  r.default.track(o.rMx.FRIENDS_LIST_VIEWED, function(e) {
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
  }({
    tab_opened: s,
    source: c
  }, u)), (0, i.a)(o.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
    tab_opened: null != s ? s : "tabless",
    num_friends: null !== (t = u.num_friends) && void 0 !== t ? t : 0,
    now_playing_visible: null !== (n = u.now_playing_visible) && void 0 !== n && n,
    now_playing_num_cards: null !== (a = u.now_playing_num_cards) && void 0 !== a ? a : 0
  })
}