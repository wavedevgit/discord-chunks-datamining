/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => D
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(519938),
  s = n(317381),
  l = n(988980),
  c = n(16609),
  u = n(917107),
  d = n(866885),
  f = n(358221),
  _ = n(241915),
  p = n(928518),
  h = n(210887),
  g = n(740492),
  m = n(442917),
  E = n(592125),
  v = n(366050),
  b = n(944486),
  y = n(451478),
  O = n(823379),
  S = n(981631),
  I = n(918559),
  T = n(354459);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = {
    [S.NYg.VIDEO]: m.Z,
    [S.NYg.EMBED_IFRAME]: d.Z
  },
  C = {
    minWidth: T.Rv[T.cL.VIDEO],
    maxWidth: T.$i[T.cL.VIDEO]
  },
  R = [];
class P extends i.PureComponent {
  render() {
    let {
      selectedPIPWindow: e,
      pipWindows: t,
      pipWidth: n,
      maxX: i,
      maxY: o,
      theme: a,
      dockedRect: s,
      appContext: l,
      roundCorners: c
    } = this.props;
    return (0, r.jsx)(_.Z, {
      pictureInPictureComponents: A,
      selectedPIPWindow: e,
      pipWindows: t,
      pipWidth: n,
      maxX: i,
      maxY: o,
      dockedRect: s,
      theme: a,
      onWindowMove: this.handleWindowMove,
      onWindowResize: this.handleWindowResize,
      appContext: l,
      roundCorners: c,
      resizeConfig: C
    })
  }
  constructor(...e) {
    super(...e), N(this, "handleWindowMove", (e, t) => {
      a.Ao(e, t)
    }), N(this, "handleWindowResize", e => {
      a.d7(e, T.cL.VIDEO)
    })
  }
}
let D = o.ZP.connectStores([p.Z, s.ZP, y.Z, h.Z, E.Z, b.Z, v.Z, f.Z, g.ZP], e => {
  var t, n, r, i;
  let o, {
      inPopoutWindow: a = !1
    } = e,
    d = p.Z.getWindowOpen(S.KJ3.CHANNEL_CALL_POPOUT),
    _ = s.ZP.getCurrentEmbeddedActivity(),
    m = (0, c.pY)(null == _ ? void 0 : _.location),
    N = null != _ && !(0, u.Z)(m, E.Z, b.Z),
    A = s.ZP.getActivityPanelMode(),
    C = N && A === I.Ez.PANEL,
    P = null != _ && null != m && (null === (t = f.Z.getSelectedParticipant(m)) || void 0 === t ? void 0 : t.type) === T.fO.ACTIVITY,
    D = y.Z.windowSize();
  if (a) {
    let e = p.Z.getWindow(S.KJ3.CHANNEL_CALL_POPOUT);
    D = null == e ? D : {
      width: e.innerWidth,
      height: e.innerHeight
    }
  }
  let w = a ? S.IlC.POPOUT : S.IlC.APP;
  o = a && N ? null : a || !d || N ? null != _ && C ? null !== (n = v.Z.pipActivityWindow) && void 0 !== n ? n : v.Z.pipVideoWindow : null !== (r = v.Z.pipVideoWindow) && void 0 !== r ? r : v.Z.pipActivityWindow : null;
  let L = Array.from(v.Z.pipWindows.values()),
    x = v.Z.pipWidth(T.cL.VIDEO),
    M = [L.find(e => e.component === S.NYg.VIDEO), L.find(e => e.component === S.NYg.EMBED_IFRAME)].filter(O.lm),
    j = g.ZP.callChatSidebarWidth,
    k = b.Z.getVoiceChannelId(),
    U = b.Z.getChannelId() === k,
    G = null != k && f.Z.getChatOpen(k),
    B = C || P,
    F = B && null != _ && (0, l.q)(_.applicationId),
    V = !B && null != o && U && G;
  return {
    selectedPIPWindow: o,
    pipWindows: 0 === M.length ? R : M,
    pipWidth: x,
    maxX: D.width - (V ? j : 0),
    maxY: D.height,
    theme: h.Z.theme,
    dockedRect: v.Z.getDockedRect(null !== (i = null == o ? void 0 : o.id) && void 0 !== i ? i : ""),
    appContext: w,
    roundCorners: !F
  }
})(P)