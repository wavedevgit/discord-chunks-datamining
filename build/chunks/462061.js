/** Chunk was on 12416 **/
n.d(t, {
  T: () => I,
  Z: () => _
});
var r = n(200651),
  l = n(192379),
  i = n(120356),
  o = n.n(i),
  a = n(442837),
  s = n(481060),
  c = n(475179),
  u = n(763520),
  d = n(358221),
  f = n(414910),
  m = n(266910),
  p = n(352978),
  h = n(928518),
  v = n(518950),
  b = n(470956),
  g = n(314897),
  y = n(271383),
  E = n(131951),
  O = n(451478),
  S = n(5192),
  x = n(44136),
  j = (n(351483), n(981631)),
  C = n(65154),
  Z = n(388032),
  w = n(454698);
let P = s.EFr.SIZE_80,
  N = s.EFr.SIZE_40;

function I(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  return (0, b.Eu)(t, n) ? (0, r.jsx)(s.ua7, {
    text: Z.NW.string(Z.t.HFwRpq),
    position: "bottom",
    color: s.FGA.GREY,
    children: e => {
      var t, n;
      return (0, r.jsx)("div", (t = function(e) {
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
        className: w.interactive,
        children: (0, r.jsx)(s.P4T, {
          color: s.TVs.colors.STATUS_WARNING_BACKGROUND
        })
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
    }
  }) : null
}

function _(e) {
  let {
    participant: t,
    channel: n,
    inCall: i,
    width: s,
    paused: b,
    selected: I,
    fit: _,
    onVideoResize: R,
    blocked: T,
    ignored: A,
    noVideoRender: D = !1,
    pulseSpeakingIndicator: k = !1,
    inOverlayPopout: M = !1
  } = e, L = E.Z.getVideoComponent(), W = (0, a.e7)([g.default], () => g.default.getId()), {
    user: F,
    streamId: U,
    speaking: z
  } = t, V = F.id === W, Y = (0, x.ZP)(t), H = (0, a.e7)([O.Z], () => O.Z.isFocused()), K = (0, a.e7)([h.Z], () => h.Z.getWindowFocused(j.KJ3.CHANNEL_CALL_POPOUT)), G = (0, a.e7)([E.Z], () => null != F.id && E.Z.isLocalVideoDisabled(F.id, (0, f.Z)(t.type)), [F.id, t.type]), B = (0, a.e7)([y.ZP], () => y.ZP.isGuestOrLurker(n.guild_id, F.id)), q = S.ZP.getName(n.getGuildId(), n.id, F) + (B ? " ".concat(Z.NW.string(Z.t["pFO/Pj"])) : ""), J = z && (K || H), X = s < 124 ? N : P, {
    avatarSrc: Q,
    avatarDecorationSrc: $
  } = (0, v.Z)({
    user: F,
    guildId: n.guild_id,
    size: X,
    animateOnHover: !J
  }), ee = (0, a.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)), et = {
    channel: n,
    selectedParticipant: ee,
    user: F
  }, en = l.useRef(et);
  return (l.useEffect(() => {
    en.current = et
  }), l.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = en.current;
    e.isGuildStageVoice() && !Y && (null == t ? void 0 : t.id) === n.id && c.Z.selectParticipant(e.id, null)
  }, [Y]), i && !G && !D && Y && !I && null != L && E.Z.supports(C.AN.VIDEO)) ? (0, r.jsx)(p.Z, {
    onResize: R,
    wrapperClassName: w.videoWrapper,
    className: w.content,
    mirror: V,
    streamId: U,
    videoComponent: L,
    fit: _,
    paused: b,
    videoSpinnerContext: F.id === W ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
    userId: F.id
  }, U) : (0, r.jsx)("div", {
    className: o()(w.content, {
      [w.blockedAvatar]: T || A
    }),
    children: (0, r.jsx)(m.Z, {
      "aria-label": q,
      src: Q,
      avatarDecoration: $,
      backgroundSrc: F.getAvatarURL(n.guild_id, 80),
      size: X,
      pulseSpeakingIndicator: k,
      speaking: z,
      userId: F.id
    })
  })
}