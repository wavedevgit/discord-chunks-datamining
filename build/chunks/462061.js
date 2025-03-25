/** Chunk was on 12416 **/
n.d(t, {
  T: () => I,
  Z: () => _
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
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
  w = n(65154),
  Z = n(388032),
  P = n(454698);
let C = s.EFr.SIZE_80,
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
        className: P.interactive,
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
    inCall: l,
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
    user: U,
    streamId: z,
    speaking: F
  } = t, V = U.id === W, Y = (0, x.ZP)(t), H = (0, a.e7)([O.Z], () => O.Z.isFocused()), K = (0, a.e7)([h.Z], () => h.Z.getWindowFocused(j.KJ3.CHANNEL_CALL_POPOUT)), G = (0, a.e7)([E.Z], () => null != U.id && E.Z.isLocalVideoDisabled(U.id, (0, f.Z)(t.type)), [U.id, t.type]), B = (0, a.e7)([y.ZP], () => y.ZP.isGuestOrLurker(n.guild_id, U.id)), q = S.ZP.getName(n.getGuildId(), n.id, U) + (B ? " ".concat(Z.NW.string(Z.t["pFO/Pj"])) : ""), J = F && (K || H), X = s < 124 ? N : C, {
    avatarSrc: Q,
    avatarDecorationSrc: $
  } = (0, v.Z)({
    user: U,
    guildId: n.guild_id,
    size: X,
    animateOnHover: !J
  }), ee = (0, a.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)), et = {
    channel: n,
    selectedParticipant: ee,
    user: U
  }, en = i.useRef(et);
  return (i.useEffect(() => {
    en.current = et
  }), i.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = en.current;
    e.isGuildStageVoice() && !Y && (null == t ? void 0 : t.id) === n.id && c.Z.selectParticipant(e.id, null)
  }, [Y]), l && !G && !D && Y && !I && null != L && E.Z.supports(w.AN.VIDEO)) ? (0, r.jsx)(p.Z, {
    onResize: R,
    wrapperClassName: P.videoWrapper,
    className: P.content,
    mirror: V,
    streamId: z,
    videoComponent: L,
    fit: _,
    paused: b,
    videoSpinnerContext: U.id === W ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
    userId: U.id
  }, z) : (0, r.jsx)("div", {
    className: o()(P.content, {
      [P.blockedAvatar]: T || A
    }),
    children: (0, r.jsx)(m.Z, {
      "aria-label": q,
      src: Q,
      avatarDecoration: $,
      backgroundSrc: U.getAvatarURL(n.guild_id, 80),
      size: X,
      pulseSpeakingIndicator: k,
      speaking: F,
      userId: U.id
    })
  })
}