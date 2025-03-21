/** Chunk was on 15909 **/
n.d(t, {
  Z: () => y
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(481060),
  u = n(518738),
  c = n(786761),
  d = n(3148),
  f = n(753206),
  p = n(594174),
  v = n(5192),
  g = n(981631),
  m = n(388032),
  b = n(205277);

function y(e) {
  var t;
  let {
    guildId: n,
    role: l,
    theme: y,
    content: h = m.NW.string(m.t["6OSasb"]),
    className: O
  } = e, _ = (0, a.e7)([p.default], () => p.default.getCurrentUser()), j = v.ZP.useName(n, null, _), S = (0, u.Kz)(l), E = i.useMemo(() => {
    var e, t;
    return (0, c.e5)((e = function(e) {
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
    }({}, (0, d.ZP)({
      channelId: "0",
      content: h,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: _
    })), t = t = {
      state: g.yb.SENT,
      id: "0"
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  }, [_, h]), w = {
    nick: j,
    colorString: null !== (t = l.colorString) && void 0 !== t ? t : void 0
  };
  return (0, r.jsx)(s.f6W, {
    theme: y,
    children: e => (0, r.jsx)("div", {
      className: o()(e, b.container, O),
      children: (0, r.jsx)(f.Z, {
        hideTimestamp: !0,
        author: w,
        roleIcon: S,
        message: E,
        isGroupStart: !0,
        disableInteraction: !0
      })
    })
  })
}