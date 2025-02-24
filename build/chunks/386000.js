/** Chunk was on 71611 **/
n.d(t, {
  Z: () => _
});
var r = n(200651),
  i = n(192379),
  l = n(609784),
  o = n(782877),
  a = n(331650),
  s = n(278724),
  c = n(652844),
  u = n(747906),
  d = n(40851),
  p = n(628581),
  h = n(861254),
  f = n(221241),
  m = n(378441),
  g = n(871499),
  b = n(981631);

function _(e) {
  var {
    selfMute: t,
    serverMute: n,
    suppress: _,
    centerButton: C = !1,
    awaitingRemote: v,
    onMouseEnter: y,
    onMouseLeave: x
  } = e, j = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["selfMute", "serverMute", "suppress", "centerButton", "awaitingRemote", "onMouseEnter", "onMouseLeave"]);
  let {
    mode: O
  } = (0, h.ZP)({
    location: "MicButton"
  }), {
    squareButtons: E,
    coloredIcons: N
  } = (0, f.Z)({
    location: "MuteButton"
  }), I = t || n || _, P = C ? g.d : g.Z, S = (0, p.Z)(t, n, _, v, O === h.BK.GroupedButtonsRedMic), Z = (0, c.O)(I ? "unmute" : "mute"), T = (0, u.P)(I ? "unmute" : "mute"), {
    activeVoice: A
  } = (0, m.o)(), w = null != A, R = w ? T : Z, {
    events: M,
    play: k
  } = R;
  i.useEffect(() => () => k(), [k, I]);
  let L = R.Component;
  (0, d.bp)() === b.IlC.POPOUT && (L = w ? I ? o.T : l.x : I ? s.n : a.S);
  let D = (E || O === h.BK.GroupedButtonsRedMic) && I ? "red" : void 0,
    W = O !== h.BK.GroupedButtonsRedMic && !E;
  return (0, r.jsx)(P, function(e) {
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
    isActive: !!W && !I,
    iconComponent: L,
    caretColor: N && I ? "red" : "primaryDark",
    color: D,
    label: S,
    onMouseEnter: e => {
      null == y || y(e), M.onMouseEnter()
    },
    onMouseLeave: e => {
      null == x || x(e), M.onMouseLeave()
    }
  }, j))
}